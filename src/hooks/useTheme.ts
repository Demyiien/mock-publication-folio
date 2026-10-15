import { useCallback, useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'ttsp-folio-theme';

/**
 * Manages light / dark mode state, syncs with document data-theme attribute,
 * meta theme-color, persists to localStorage, and powers the circular burst /
 * wave animation that stems from the toggle button across the entire page.
 */
export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') return stored;
    } catch {}
    return 'light'; // Default to light mode as requested
  });

  const isTransitioningRef = useRef(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', theme === 'dark' ? '#1E1E1E' : '#F8F7F4');
      }
    } catch {}
  }, [theme]);

  // Listen for changes across tabs
  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY && (event.newValue === 'light' || event.newValue === 'dark')) {
        setTheme(event.newValue);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  /**
   * Toggles theme with an expanding circular burst / wave animation
   * originating directly from the theme button coordinates.
   */
  const toggleTheme = useCallback(
    async (
      event?:
        | React.MouseEvent
        | MouseEvent
        | { clientX?: number; clientY?: number; currentTarget?: EventTarget | null }
    ) => {
      if (isTransitioningRef.current) return;

      const nextTheme: ThemeMode = theme === 'light' ? 'dark' : 'light';

      // Determine center origin of wave from event target or button query
      const btn =
        (event?.currentTarget as HTMLElement | null) ||
        document.querySelector('.masthead__theme-toggle');
      const rect = btn?.getBoundingClientRect();

      const x =
        event && typeof event.clientX === 'number' && event.clientX > 0
          ? event.clientX
          : rect
            ? rect.left + rect.width / 2
            : window.innerWidth / 2;

      const y =
        event && typeof event.clientY === 'number' && event.clientY > 0
          ? event.clientY
          : rect
            ? rect.top + rect.height / 2
            : window.innerHeight / 2;

      // Calculate distance to the farthest corner of the viewport
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const prefersReducedMotion =
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // 1. Native View Transitions API (Chrome 111+, Edge, Safari 18+)
      if (
        !prefersReducedMotion &&
        typeof document.startViewTransition === 'function'
      ) {
        isTransitioningRef.current = true;
        document.documentElement.setAttribute('data-theme-transitioning', 'true');

        const transition = document.startViewTransition(() => {
          document.documentElement.setAttribute('data-theme', nextTheme);
          flushSync(() => {
            setTheme(nextTheme);
          });
        });

        try {
          await transition.ready;

          const animation = document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 650,
              easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
              pseudoElement: '::view-transition-new(root)',
            }
          );

          await animation.finished;
        } catch {
          // If transition fails or is aborted, state is still safely updated
        } finally {
          document.documentElement.removeAttribute('data-theme-transitioning');
          isTransitioningRef.current = false;
        }
        return;
      }

      // 2. Fallback for reduced motion
      if (prefersReducedMotion) {
        setTheme(nextTheme);
        return;
      }

      // 3. Circular ripple wave fallback for browsers without View Transitions
      isTransitioningRef.current = true;
      const wave = document.createElement('div');
      wave.className = 'theme-burst-fallback-wave';
      wave.style.left = `${x}px`;
      wave.style.top = `${y}px`;
      wave.style.width = `${endRadius * 2}px`;
      wave.style.height = `${endRadius * 2}px`;
      wave.style.backgroundColor = nextTheme === 'dark' ? '#1E1E1E' : '#F8F7F4';
      document.body.appendChild(wave);

      requestAnimationFrame(() => {
        wave.classList.add('is-expanded');
        setTimeout(() => {
          document.documentElement.setAttribute('data-theme', nextTheme);
          setTheme(nextTheme);
          wave.classList.add('is-fading');
          setTimeout(() => {
            wave.remove();
            isTransitioningRef.current = false;
          }, 300);
        }, 350);
      });
    },
    [theme]
  );

  return { theme, toggleTheme };
}
