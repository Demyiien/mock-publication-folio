import type { ReactNode } from 'react';

interface SectionHeaderProps {
  indexNumber: string;
  title: string;
  action?: ReactNode;
  /** Optional id applied to the heading so sections can reference it via aria-labelledby. */
  headingId?: string;
}

/**
 * Brutalist numbered section divider: flush maroon index block, serif title, optional controls.
 * Reused in: HeroManifesto (01), Exhibition Catalog (02).
 */
export function SectionHeader({ indexNumber, title, action, headingId }: SectionHeaderProps) {
  return (
    <header className="section-header">
      <div className="section-header__index" aria-hidden="true">
        {indexNumber}
      </div>
      <div className="section-header__body">
        <h2 className="section-header__title" id={headingId}>
          <span className="visually-hidden">Section {indexNumber}: </span>
          {title}
        </h2>
        {action}
      </div>
    </header>
  );
}
