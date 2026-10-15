import { LayoutGrid, Rows3 } from 'lucide-react';
import type { ViewMode } from '../../types/folio';
import { ISSUE_META } from '../../data/folioEntries';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { MetaItem } from '../ui/MetaItem';

interface MastheadProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  totalWorks: number;
}

const ICON_PROPS = { size: 15, strokeWidth: 1.25 } as const;

const VIEW_OPTIONS: { mode: ViewMode; label: string; icon: JSX.Element }[] = [
  { mode: 'grid', label: 'Gallery Grid', icon: <LayoutGrid {...ICON_PROPS} /> },
  { mode: 'ledger', label: 'Archival Ledger', icon: <Rows3 {...ICON_PROPS} /> },
];

/** Top archival bar: publication identity, issue metadata, and catalog view switcher. */
export function Masthead({ viewMode, onViewModeChange, totalWorks }: MastheadProps) {
  return (
    <header className="masthead">
      <div className="masthead__strip container">
        <div className="masthead__meta">
          <MetaItem label="ISSUE" value={ISSUE_META.issueDate} />
          <MetaItem label="VOL" value="XLII" />
          <MetaItem label="WORKS" value={String(totalWorks).padStart(2, '0')} />
        </div>
        <Badge label="Exhibition Open" variant="outline" className="masthead__status" />
      </div>

      <div className="masthead__bar container">
        <a className="masthead__identity" href="#top" aria-label="The TTSP Folio — back to top">
          <span className="masthead__mark" aria-hidden="true">
            T
          </span>
          <span className="masthead__titles">
            <span className="masthead__title">
              {ISSUE_META.publication} <span className="masthead__slash">{'·'}</span> {ISSUE_META.folio}
            </span>
            <span className="masthead__motto">“{ISSUE_META.motto}”</span>
          </span>
        </a>

        <div className="masthead__switcher" role="group" aria-label="Catalog view">
          {VIEW_OPTIONS.map(({ mode, label, icon }) => (
            <Button
              key={mode}
              size="sm"
              icon={icon}
              isActive={viewMode === mode}
              aria-pressed={viewMode === mode}
              onClick={() => onViewModeChange(mode)}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
}
