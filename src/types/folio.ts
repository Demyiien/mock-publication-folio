/**
 * Domain model for THE TTSP FOLIO.
 * Every component in the exhibition is driven by these types — no component
 * hard-codes medium- or theme-specific markup outside of the polymorphic
 * switches in FolioCard and ReaderModal.
 */

export type FolioMedium = 'Poetry' | 'Short Essay' | 'Editorial Cartoon' | 'Photo Essay';

export type FolioTheme =
  | 'News'
  | 'Opinion'
  | 'Features'
  | 'Community';

/** Sentinel used by filters to represent "no restriction". */
export type FilterAll = 'All';

export type MediumFilter = FolioMedium | FilterAll;
export type ThemeFilter = FolioTheme | FilterAll;

export interface Author {
  name: string;
  programAndYear: string; // e.g., "BS Computer Science III" or "BA Communication IV"
  deskRole: string; // e.g., "Senior Literary Editor" or "Staff Cartoonist"
}

export interface FolioEntry {
  id: string;
  catalogNumber: string; // e.g., "CAT-01", "CAT-02"
  title: string;
  subtitle?: string;
  medium: FolioMedium;
  theme: FolioTheme;
  author: Author;
  publishedDate: string; // e.g., "OCT 2026"
  specsOrReadTime: string; // e.g., "4 MIN READ" or "INK & HALFTONE // 300 DPI"
  excerpt: string;
  pullQuote: string;
  bodyContent: string[]; // Stanzas for poetry, paragraphs for essays, curatorial notes for visual art
  artworkUrl?: string; // High-contrast monochrome/moody photography or illustration URL
  artworkCaption?: string;
  artworkSource?: string;
  artworkSourceUrl?: string;
  isFeatured?: boolean;
}

/** Visual media share a single rendering path (framed artwork + curatorial notes). */
export const VISUAL_MEDIA: readonly FolioMedium[] = ['Editorial Cartoon', 'Photo Essay'];

export const isVisualMedium = (medium: FolioMedium): boolean => VISUAL_MEDIA.includes(medium);
