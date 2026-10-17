import { useEffect, useRef } from 'react';
import type { KeyboardEvent, MouseEvent, SyntheticEvent } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import type { FolioEntry, FolioMedium } from '../../types/folio';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { MetaItem } from '../ui/MetaItem';
import { PullQuote } from './PullQuote';

interface ReaderModalProps {
  entry: FolioEntry | null;
  position: { index: number; total: number };
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const ICON_PROPS = { size: 16, strokeWidth: 1.25 } as const;

const CANVAS_LABEL: Record<FolioMedium, string> = {
  Poetry: 'Verse',
  'Short Essay': 'Prose',
  'Editorial Cartoon': 'Plate',
  'Photo Essay': 'Plate',
};

const pad = (value: number): string => String(value).padStart(2, '0');

/* --------------------------------------------------------------------------
   Reading canvases — one per rendering mode, switched by medium.
   -------------------------------------------------------------------------- */

function VerseCanvas({ stanzas }: { stanzas: string[] }) {
  return (
    <ol className="reader-verse">
      {stanzas.map((stanza, index) => (
        <li className="reader-verse__stanza" key={index}>
          <span className="reader-verse__marker" aria-hidden="true">
            ST. {pad(index + 1)}
          </span>
          <p className="reader-verse__lines">{stanza}</p>
        </li>
      ))}
    </ol>
  );
}

function ProseCanvas({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="reader-prose">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={index === 0 ? 'drop-cap drop-cap--large' : undefined}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function PlateCanvas({ entry }: { entry: FolioEntry }) {
  return (
    <div className="reader-plate">
      <figure className="reader-plate__figure">
        <div className="artwork-frame artwork-frame--plate">
          {entry.artworkUrl && (
            <img
              className="artwork-frame__image"
              src={entry.artworkUrl}
              alt={entry.artworkCaption ?? entry.title}
              width={1600}
              height={1000}
            />
          )}
        </div>
        {(entry.artworkCaption || entry.artworkSource) && (
          <figcaption className="reader-plate__caption">
            <span className="reader-plate__caption-label">Exhibition Plate</span>
            {entry.artworkCaption && <p>{entry.artworkCaption}</p>}
            {entry.artworkSource && (
              <p className="reader-plate__source">
                Photo:{' '}
                {entry.artworkSourceUrl ? (
                  <a
                    href={entry.artworkSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reader-plate__source-link"
                  >
                    {entry.artworkSource} ↗
                  </a>
                ) : (
                  entry.artworkSource
                )}
              </p>
            )}
          </figcaption>
        )}
      </figure>

      <section className="reader-plate__statement" aria-label="Curatorial statement">
        <h3 className="reader-plate__statement-title">Curatorial Statement</h3>
        <ProseCanvas paragraphs={entry.bodyContent} />
      </section>
    </div>
  );
}

function ReadingCanvas({ entry }: { entry: FolioEntry }) {
  switch (entry.medium) {
    case 'Poetry':
      return <VerseCanvas stanzas={entry.bodyContent} />;
    case 'Short Essay':
      return <ProseCanvas paragraphs={entry.bodyContent} />;
    case 'Editorial Cartoon':
    case 'Photo Essay':
      return <PlateCanvas key={entry.id} entry={entry} />;
  }
}

/* --------------------------------------------------------------------------
   Genie transition — macOS-style "pulled from origin" open / reverse close.
   -------------------------------------------------------------------------- */

const GENIE_EASING = 'cubic-bezier(0.22, 0.9, 0.3, 1)';
const GENIE_OPEN_MS = 620;
const GENIE_CLOSE_MS = 300;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const isInViewport = (rect: DOMRect) =>
  rect.width > 0 &&
  rect.bottom > 0 &&
  rect.right > 0 &&
  rect.top < window.innerHeight &&
  rect.left < window.innerWidth;

/** Fallback origin: a small "dock" slot at the bottom-center of the viewport. */
const dockRect = () =>
  new DOMRect(window.innerWidth / 2 - 40, window.innerHeight - 24, 80, 24);

/**
 * Keyframes from the origin card (`from`) to the dialog's resting box (`to`).
 * The sheet starts as a thin, pinched sliver over the card, is stretched out
 * toward the center, then widens smoothly into place. The edge facing the
 * origin stays pinched until late in the motion, like the genie effect.
 */
function genieKeyframes(from: DOMRect, to: DOMRect): Keyframe[] {
  const dx = from.left + from.width / 2 - (to.left + to.width / 2);
  const dy = from.top + from.height / 2 - (to.top + to.height / 2);
  const sx = clamp(from.width / to.width, 0.04, 1);
  const sy = clamp(from.height / to.height, 0.04, 1);

  // Pinch the edge nearest the origin (bottom if the card sits below center).
  const pinch = (amount: number) =>
    dy >= 0
      ? `polygon(0% 0%, 100% 0%, ${100 - amount}% 100%, ${amount}% 100%)`
      : `polygon(${amount}% 0%, ${100 - amount}% 0%, 100% 100%, 0% 100%)`;

  return [
    {
      offset: 0,
      opacity: 0,
      transform: `translate(${dx}px, ${dy}px) scale(${sx * 0.2}, ${sy * 0.6})`,
      clipPath: pinch(40),
    },
    {
      offset: 0.18,
      opacity: 1,
      transform: `translate(${dx * 0.8}px, ${dy * 0.8}px) scale(${Math.max(sx * 0.28, 0.05)}, ${Math.max(sy, 0.5)})`,
      clipPath: pinch(36),
    },
    {
      offset: 0.5,
      transform: `translate(${dx * 0.3}px, ${dy * 0.3}px) scale(0.42, 0.96)`,
      clipPath: pinch(18),
    },
    {
      offset: 0.8,
      transform: `translate(${dx * 0.04}px, ${dy * 0.04}px) scale(0.94, 1.005)`,
      clipPath: pinch(3),
    },
    {
      offset: 1,
      opacity: 1,
      transform: 'translate(0px, 0px) scale(1, 1)',
      clipPath: pinch(0),
    },
  ];
}

/**
 * Dedicated close keyframes — one continuous, accelerating motion back into
 * the origin card. Kept to three stops (no mid-way stretching) so it reads
 * as a single clean "suck in" rather than a replay of the open sequence.
 */
function genieCloseKeyframes(from: DOMRect, to: DOMRect): Keyframe[] {
  const dx = from.left + from.width / 2 - (to.left + to.width / 2);
  const dy = from.top + from.height / 2 - (to.top + to.height / 2);
  const sx = clamp(from.width / to.width, 0.15, 1);
  const sy = clamp(from.height / to.height, 0.15, 1);

  const pinch = (amount: number) =>
    dy >= 0
      ? `polygon(0% 0%, 100% 0%, ${100 - amount}% 100%, ${amount}% 100%)`
      : `polygon(${amount}% 0%, ${100 - amount}% 0%, 100% 100%, 0% 100%)`;

  return [
    { offset: 0, opacity: 1, transform: 'translate(0px, 0px) scale(1, 1)', clipPath: pinch(0) },
    {
      offset: 0.6,
      opacity: 1,
      transform: `translate(${dx * 0.5}px, ${dy * 0.5}px) scale(${(1 + sx) / 2.4}, ${(1 + sy) / 2})`,
      clipPath: pinch(16),
    },
    {
      offset: 1,
      opacity: 0,
      transform: `translate(${dx}px, ${dy}px) scale(${sx * 0.5}, ${sy * 0.7})`,
      clipPath: pinch(30),
    },
  ];
}

const GENIE_CLOSE_EASING = 'cubic-bezier(0.4, 0, 0.6, 1)';

/* --------------------------------------------------------------------------
   Modal shell — native <dialog> (top layer, focus trapping, Esc handling).
   -------------------------------------------------------------------------- */

export function ReaderModal({ entry, position, onClose, onNext, onPrevious }: ReaderModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const dossierRef = useRef<HTMLElement>(null);
  const originRef = useRef<Element | null>(null);
  const closingRef = useRef(false);

  // Remember which card the user pressed so the reader can grow out of it.
  useEffect(() => {
    const capture = (event: PointerEvent | globalThis.KeyboardEvent) => {
      const card = (event.target as Element | null)?.closest?.('.folio-card');
      if (card) originRef.current = card;
    };
    document.addEventListener('pointerdown', capture, true);
    document.addEventListener('keydown', capture, true);
    return () => {
      document.removeEventListener('pointerdown', capture, true);
      document.removeEventListener('keydown', capture, true);
    };
  }, []);

  /** Resolve the on-screen card for the current entry (falls back to the dock). */
  const resolveOriginRect = (entryId?: string): DOMRect => {
    const remembered = originRef.current;
    if (
      remembered?.isConnected &&
      (!entryId || remembered.getAttribute('data-entry-id') === entryId)
    ) {
      const rect = remembered.getBoundingClientRect();
      if (isInViewport(rect)) return rect;
    }
    if (entryId) {
      const cards = document.querySelectorAll(`.folio-card[data-entry-id="${CSS.escape(entryId)}"]`);
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        if (isInViewport(rect)) return rect;
      }
    }
    return dockRect();
  };

  const runGenie = (dialog: HTMLDialogElement, direction: 'open' | 'close') => {
    dialog.getAnimations({ subtree: true }).forEach((animation) => animation.cancel());
    const origin = resolveOriginRect(entry?.id);
    const sheet = dialog.getBoundingClientRect();
    const isOpen = direction === 'open';
    const duration = isOpen ? GENIE_OPEN_MS : GENIE_CLOSE_MS;

    dialog.animate(
      { opacity: isOpen ? [0, 1] : [1, 0] },
      { duration, easing: isOpen ? 'ease-out' : 'ease-in', fill: 'both', pseudoElement: '::backdrop' },
    );
    return dialog.animate(isOpen ? genieKeyframes(origin, sheet) : genieCloseKeyframes(origin, sheet), {
      duration,
      easing: isOpen ? GENIE_EASING : GENIE_CLOSE_EASING,
      fill: 'both',
    });
  };

  /** Animated close — every dismiss path funnels through here. */
  const requestClose = () => {
    const dialog = dialogRef.current;
    if (!dialog?.open || closingRef.current) return;
    if (prefersReducedMotion() || typeof dialog.animate !== 'function') {
      dialog.close();
      return;
    }
    closingRef.current = true;
    const animation = runGenie(dialog, 'close');
    const finish = () => {
      closingRef.current = false;
      dialog.close();
      dialog.getAnimations({ subtree: true }).forEach((a) => a.cancel());
    };
    animation.finished.then(finish, finish);
  };

  // Sync the native dialog's open state with the active entry.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (entry && !dialog.open) {
      dialog.showModal();
      if (!prefersReducedMotion() && typeof dialog.animate === 'function') {
        runGenie(dialog, 'open').finished.then(
          () => dialog.getAnimations({ subtree: true }).forEach((a) => a.cancel()),
          () => undefined,
        );
      }
    }
    if (!entry && dialog.open) dialog.close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry]);

  // Every new work starts at the top of the page.
  useEffect(() => {
    canvasRef.current?.scrollTo({ top: 0 });
    dossierRef.current?.scrollTo({ top: 0 });
  }, [entry?.id]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.target instanceof HTMLInputElement) return;
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      onNext();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      onPrevious();
    }
  };

  // Esc: swap the instant native close for the reverse genie animation.
  const handleCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    if (!event.nativeEvent.cancelable) return;
    event.preventDefault();
    requestClose();
  };

  // Light-dismiss: clicking the backdrop (outside the sheet) closes the reader.
  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog || event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    const inside =
      rect.top <= event.clientY &&
      event.clientY <= rect.bottom &&
      rect.left <= event.clientX &&
      event.clientX <= rect.right;
    if (!inside) requestClose();
  };

  const titleId = 'reader-modal-title';

  return (
    <dialog
      ref={dialogRef}
      className="reader"
      aria-labelledby={entry ? titleId : undefined}
      aria-label={entry ? undefined : 'Exhibition reader'}
      onClose={onClose}
      onCancel={handleCancel}
      onKeyDown={handleKeyDown}
      onClick={handleBackdropClick}
    >
      {entry && (
        <div className="reader__shell">
          <div className="reader__topbar">
            <span className="reader__topbar-label">
              Exhibition Reader <span aria-hidden="true">{'·'}</span> {CANVAS_LABEL[entry.medium]}
            </span>
            <span className="reader__counter" aria-live="polite">
              Work {pad(position.index + 1)} / {pad(position.total)}
            </span>
            <Button
              variant="icon"
              icon={<X {...ICON_PROPS} />}
              aria-label="Close reader (Escape)"
              onClick={requestClose}
            />
          </div>

          <div className="reader__body">
            <aside className="reader__dossier" ref={dossierRef} aria-label="Archival dossier">
              <div className="reader__badges">
                <Badge label={entry.medium} variant="maroon" size="md" />
                <Badge label={entry.theme} variant="outline" size="md" />
              </div>

              <div className="reader__heading">
                <h2 className="reader__title" id={titleId}>
                  {entry.title}
                </h2>
                {entry.subtitle && <p className="reader__subtitle">{entry.subtitle}</p>}
              </div>

              <PullQuote quote={entry.pullQuote} />

              <div className="reader__specs">
                <MetaItem label="AUTHOR" value={entry.author.name} />
                <MetaItem label="MEDIUM" value={entry.medium.toUpperCase()} />
                <MetaItem label="THEME" value={entry.theme.toUpperCase()} />
                <MetaItem label="SPECS" value={entry.specsOrReadTime} />
                <MetaItem label="ISSUE" value={entry.publishedDate} />
              </div>

              <nav className="reader__nav" aria-label="Browse works">
                <Button
                  icon={<ArrowLeft {...ICON_PROPS} />}
                  onClick={onPrevious}
                  aria-keyshortcuts="ArrowLeft"
                >
                  Previous
                </Button>
                <Button
                  icon={<ArrowRight {...ICON_PROPS} />}
                  iconPosition="end"
                  onClick={onNext}
                  aria-keyshortcuts="ArrowRight"
                >
                  Next
                </Button>
              </nav>
              <p className="reader__hint">Use ← → to browse · Esc to close</p>
            </aside>

            <div className="reader__canvas" ref={canvasRef}>
              <div className={`reader__canvas-inner reader__canvas-inner--${entry.medium === 'Poetry' ? 'verse' : 'prose'}`}>
                <ReadingCanvas entry={entry} />
                <p className="reader__end-mark" aria-hidden="true">
                  ■ End of work
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
