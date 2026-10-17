import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * Sticky floating "Back to Top" control in editorial maroon.
 * Appears once the user scrolls past the initial landing viewport.
 */
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      // Trigger once the user scrolls past the initial landing viewport fold
      const threshold = Math.min(window.innerHeight * 0.65, 520);
      setIsVisible(window.scrollY > threshold);
    };

    checkScroll();
    window.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className={`button button--primary button--sm back-to-top${isVisible ? ' is-visible' : ''}`}
      onClick={handleScrollToTop}
      aria-label="Back to top"
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
    >
      <span className="button__icon" aria-hidden="true">
        <ArrowUp size={14} strokeWidth={1.75} />
      </span>
      <span className="button__label">Back to Top</span>
    </button>
  );
}
