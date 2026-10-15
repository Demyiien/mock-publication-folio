import { ISSUE_META } from '../../data/folioEntries';

/**
 * Editorial footer — publication identity, issue volume, copyright,
 * and return to masthead link.
 */
export function Colophon() {
  return (
    <footer className="colophon colophon--minimal">
      <div className="colophon__base container">
        <span>
          © 2026 {ISSUE_META.publication} {'//'} {ISSUE_META.folio}
        </span>
        <span>Set in the dark. Printed nowhere. Archived everywhere.</span>
        <a href="#top" className="colophon__top">
          Return to Masthead ↑
        </a>
      </div>
    </footer>
  );
}
