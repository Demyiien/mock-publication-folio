import type { FolioEntry } from '../../types/folio';

interface FolioCardProps {
  entry: FolioEntry;
  variant?: 'standard' | 'featured';
  onSelect: (entry: FolioEntry) => void;
}

function getPreviewContent(entry: FolioEntry, separator: string = ' '): string {
  if (entry.bodyContent && entry.bodyContent.length > 0) {
    return entry.bodyContent.join(separator);
  }
  return entry.excerpt;
}

/**
 * Medium-specific preview slot. This is the ONLY place card markup diverges
 * by medium; the header, title block, and footer are shared by every entry.
 */
function CardPreview({ entry, isFeatured: _isFeatured }: { entry: FolioEntry; isFeatured?: boolean }) {
  switch (entry.medium) {
    case 'Poetry':
      return <p className="folio-card__verse">{getPreviewContent(entry, '\n\n')}</p>;

    case 'Short Essay':
      return <p className="folio-card__prose drop-cap">{getPreviewContent(entry, ' ')}</p>;

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
          </div>
          <figcaption className="folio-card__caption">
            {entry.artworkCaption && <p className="folio-card__caption-title">{entry.artworkCaption}</p>}
            <p className="folio-card__artwork-excerpt">{getPreviewContent(entry, ' ')}</p>
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
    <article className={`folio-card folio-card--${variant}`} aria-labelledby={titleId} data-entry-id={entry.id}>
      <div className="folio-card__title-block">
        <span className="folio-card__medium">{entry.medium}</span>
        {variant === 'featured' && <span className="folio-card__eyebrow">Featured Exhibition</span>}
        <h3 className="folio-card__title" id={titleId}>
          {entry.title}
        </h3>
        {entry.subtitle && <p className="folio-card__subtitle">{entry.subtitle}</p>}
        <span className="folio-card__theme">{entry.theme}</span>
      </div>

      <div className="folio-card__preview">
        <CardPreview entry={entry} isFeatured={variant === 'featured'} />
      </div>

      <div className="folio-card__footer">
        <span className="folio-card__author">{entry.author.name}</span>
        <button
          type="button"
          className="folio-card__trigger"
          onClick={() => onSelect(entry)}
          aria-label={`View work: ${entry.title}`}
        >
          Read More <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  );
}
