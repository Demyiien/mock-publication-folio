import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent, MouseEvent } from 'react';
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
  const [isOriginal, setIsOriginal] = useState(false);

  return (
    <div className="reader-plate">
      <div className="reader-plate__toolbar" role="group" aria-label="Artwork rendering">
        <span className="reader-plate__toolbar-label">Rendering</span>
        <Button size="sm" isActive={!isOriginal} aria-pressed={!isOriginal} onClick={() => setIsOriginal(false)}>
          Full-Contrast
        </Button>
        <Button size="sm" isActive={isOriginal} aria-pressed={isOriginal} onClick={() => setIsOriginal(true)}>
          Original
        </Button>
      </div>

      <figure className="reader-plate__figure">
        <div className={`artwork-frame artwork-frame--plate${isOriginal ? ' is-original' : ''}`}>
          {entry.artworkUrl && (
            <img
              className="artwork-frame__image"
              src={entry.artworkUrl}
              alt={entry.artworkCaption ?? entry.title}
              width={1600}
              height={1000}
            />
          )}
          <span className="artwork-frame__vignette" aria-hidden="true" />
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
   Modal shell — native <dialog> (top layer, focus trapping, Esc handling).
   -------------------------------------------------------------------------- */

const supportsClosedBy =
  typeof HTMLDialogElement !== 'undefined' && 'closedBy' in HTMLDialogElement.prototype;

export function ReaderModal({ entry, position, onClose, onNext, onPrevious }: ReaderModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const dossierRef = useRef<HTMLElement>(null);

  // Sync the native dialog's open state with the active entry.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.setAttribute('closedby', 'any'); // declarative light-dismiss where supported
    if (entry && !dialog.open) dialog.showModal();
    if (!entry && dialog.open) dialog.close();
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

  // Light-dismiss fallback for browsers without `closedby` support (Safari).
  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (supportsClosedBy) return;
    const dialog = dialogRef.current;
    if (!dialog || event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    const inside =
      rect.top <= event.clientY &&
      event.clientY <= rect.bottom &&
      rect.left <= event.clientX &&
      event.clientX <= rect.right;
    if (!inside) dialog.close();
  };

  const titleId = 'reader-modal-title';

  return (
    <dialog
      ref={dialogRef}
      className="reader"
      aria-labelledby={entry ? titleId : undefined}
      aria-label={entry ? undefined : 'Exhibition reader'}
      onClose={onClose}
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
              onClick={() => dialogRef.current?.close()}
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
