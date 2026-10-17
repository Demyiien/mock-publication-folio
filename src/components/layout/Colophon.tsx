import { ISSUE_META } from '../../data/folioEntries';

/**
 * Editorial footer — publication identity, issue volume, and copyright notice.
 */
export function Colophon() {
  return (
    <footer className="colophon colophon--minimal">
      <div className="colophon__base container">
        <span>
          © 2026 {ISSUE_META.publication} {'·'} {ISSUE_META.folio}
        </span>
        <span>Curated Exhibition Catalog · All Rights Reserved.</span>
      </div>
    </footer>
  );
}
