import type { ReactNode } from 'react';

interface SectionHeaderProps {
  indexNumber: string;
  title: string;
  subtitle?: string;
  rightSlot?: ReactNode;
  /** Optional id applied to the heading so sections can reference it via aria-labelledby. */
  headingId?: string;
}

/**
 * Brutalist numbered section divider: maroon index block, serif title, optional controls.
 * Reused in: HeroManifesto (01), Exhibition Catalog (02), Colophon (03, 04).
 */
export function SectionHeader({ indexNumber, title, subtitle, rightSlot, headingId }: SectionHeaderProps) {
  return (
    <header className="section-header">
      <span className="section-header__index" aria-hidden="true">
        {indexNumber}
      </span>
      <div className="section-header__text">
        <h2 className="section-header__title" id={headingId}>
          <span className="visually-hidden">Section {indexNumber}: </span>
          {title}
        </h2>
        {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
      </div>
      {rightSlot && <div className="section-header__slot">{rightSlot}</div>}
    </header>
  );
}
