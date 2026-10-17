import type { Author } from '../../types/folio';

interface AuthorBylineProps {
  author: Author;
  size?: 'compact' | 'full';
}

const toMonogram = (name: string): string => {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return `${first}${last}`.toUpperCase();
};

/**
 * Geometric monogram + contributor credit.
 * Reused in: every FolioCard footer (incl. the Hero spotlight) and the ReaderModal dossier.
 */
export function AuthorByline({ author, size = 'compact' }: AuthorBylineProps) {
  return (
    <div className={`byline byline--${size}`}>
      <span className="byline__monogram" aria-hidden="true">
        {toMonogram(author.name)}
      </span>
      <div className="byline__text">
        <span className="byline__name">{author.name}</span>
        <span className="byline__program">{author.programAndYear}</span>
        {size === 'full' && <span className="byline__role">{author.deskRole}</span>}
      </div>
    </div>
  );
}
