import { ArrowUpRight } from 'lucide-react';
import type { FolioEntry } from '../../types/folio';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface LedgerRowProps {
  entry: FolioEntry;
  onSelect: (entry: FolioEntry) => void;
}

/**
 * High-density archival index row for the Ledger view.
 * Column order matches the <thead> rendered by the catalog container in App.tsx.
 */
export function LedgerRow({ entry, onSelect }: LedgerRowProps) {
  return (
    <tr className="ledger-row" onClick={() => onSelect(entry)}>
      <th scope="row" className="ledger-row__cell ledger-row__title" data-label="Title">
        <span className="ledger-row__title-main">{entry.title}</span>
        {entry.subtitle && <span className="ledger-row__subtitle">{entry.subtitle}</span>}
      </th>
      <td className="ledger-row__cell" data-label="Medium">
        <Badge label={entry.medium} variant="maroon" />
      </td>
      <td className="ledger-row__cell ledger-row__theme" data-label="Theme">
        {entry.theme}
      </td>
      <td className="ledger-row__cell ledger-row__specs" data-label="Specs">
        {entry.specsOrReadTime}
      </td>
      <td className="ledger-row__cell ledger-row__action">
        <Button
          variant="ghost"
          size="sm"
          icon={<ArrowUpRight size={14} strokeWidth={1.25} />}
          iconPosition="end"
          aria-label={`Inspect work: ${entry.title}`}
          onClick={(event) => {
            event.stopPropagation();
            onSelect(entry);
          }}
        >
          Inspect
        </Button>
      </td>
    </tr>
  );
}
