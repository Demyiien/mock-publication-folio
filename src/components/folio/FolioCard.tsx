import type { FolioEntry } from '../../types/folio';
import { Badge } from '../ui/Badge';
import { MetaItem } from '../ui/MetaItem';
import { AuthorByline } from './AuthorByline';

interface FolioCardProps {
  entry: FolioEntry;
  variant?: 'standard' | 'featured';
  onSelect: (entry: FolioEntry) => void;
}

/**
 * Medium-specific preview slot. This is the ONLY place card markup diverges
 * by medium; the header, title block, and footer are shared by every entry.
 */
function CardPreview({ entry }: { entry: FolioEntry }) {
  switch (entry.medium) {
    case 'Poetry':
      return <p className="folio-card__verse">{entry.excerpt}</p>;

    case 'Short Essay':
      return <p className="folio-card__prose drop-cap">{entry.excerpt}</p>;

    case 'Editorial Cartoon':
    case 'Photo Essay':
      return (
        <figure className="folio-card__figure">
          <div className="artwork-frame">
            {entry.artworkUrl && (
              <img
                className="artwork-frame__image"
                src={entry.artworkUrl}
                alt={entry.artworkCaption ?? entry.title}
                loading="lazy"
                decoding="async"
                width={1600}
                height={1000}
              />
            )}
            <span className="artwork-frame__vignette" aria-hidden="true" />
            <span className="artwork-frame__tint" aria-hidden="true" />
            <Badge label={entry.specsOrReadTime} variant="muted" className="artwork-frame__specs" />
          </div>
          {(entry.artworkCaption || entry.artworkSource) && (
            <figcaption className="folio-card__caption">
              {entry.artworkCaption && <span>{entry.artworkCaption}</span>}
              {entry.artworkSource && (
                <span className="folio-card__source">
                  Photo:{' '}
                  {entry.artworkSourceUrl ? (
                    <a
                      href={entry.artworkSourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="folio-card__source-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {entry.artworkSource} ↗
                    </a>
                  ) : (
                    entry.artworkSource
                  )}
                </span>
              )}
            </figcaption>
          )}
        </figure>
      );
  }
}

/**
 * The single polymorphic exhibition card used for ALL mediums,
 * in the catalog grid (`standard`) and the hero spotlight (`featured`).
 */
export function FolioCard({ entry, variant = 'standard', onSelect }: FolioCardProps) {
  const titleId = `card-title-${variant}-${entry.id}`;

  return (
    <article className={`folio-card folio-card--${variant}`} aria-labelledby={titleId}>
      <div className="folio-card__header">
        <MetaItem label="INDEX" value={entry.catalogNumber} />
        <Badge label={entry.medium} variant="maroon" />
      </div>

      <div className="folio-card__title-block">
        {variant === 'featured' && <span className="folio-card__eyebrow">Featured Exhibition</span>}
        <h3 className="folio-card__title" id={titleId}>
          {entry.title}
        </h3>
        {entry.subtitle && <p className="folio-card__subtitle">{entry.subtitle}</p>}
        <span className="folio-card__theme">{entry.theme}</span>
      </div>

      <div className="folio-card__preview">
        <CardPreview entry={entry} />
      </div>

      <div className="folio-card__footer">
        <AuthorByline author={entry.author} size="compact" />
        <button
          type="button"
          className="folio-card__trigger"
          onClick={() => onSelect(entry)}
          aria-label={`Inspect work: ${entry.title}`}
        >
          Inspect Work <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  );
}
