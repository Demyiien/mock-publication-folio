import { Search, X } from 'lucide-react';
import type { FolioMedium, FolioTheme, MediumFilter, ThemeFilter } from '../../types/folio';
import { Button } from '../ui/Button';
import { FilterPill } from '../ui/FilterPill';

interface FilterBarProps {
  query: string;
  onQueryChange: (value: string) => void;
  mediums: readonly FolioMedium[];
  themes: readonly FolioTheme[];
  medium: MediumFilter;
  onMediumChange: (value: MediumFilter) => void;
  theme: ThemeFilter;
  onThemeChange: (value: ThemeFilter) => void;
  mediumCounts: Record<MediumFilter, number>;
  themeCounts: Record<ThemeFilter, number>;
  isFiltered: boolean;
  onReset: () => void;
}

interface FacetRowProps<T extends string> {
  legend: string;
  allLabel: string;
  options: readonly T[];
  value: T | 'All';
  counts: Record<T | 'All', number>;
  onChange: (value: T | 'All') => void;
}

/** One generic facet row renders both the medium and theme filters. */
function FacetRow<T extends string>({ legend, allLabel, options, value, counts, onChange }: FacetRowProps<T>) {
  return (
    <div className="filter-bar__row" role="group" aria-label={legend}>
      <span className="filter-bar__legend">{legend}</span>
      <div className="filter-bar__pills">
        <FilterPill label={allLabel} count={counts.All} isActive={value === 'All'} onClick={() => onChange('All')} />
        {options.map((option) => (
          <FilterPill
            key={option}
            label={option}
            count={counts[option]}
            isActive={value === option}
            onClick={() => onChange(option)}
          />
        ))}
      </div>
    </div>
  );
}

const ICON_PROPS = { size: 16, strokeWidth: 1.25 } as const;

/** Search input + medium/theme facet rows + reset action. */
export function FilterBar({
  query,
  onQueryChange,
  mediums,
  themes,
  medium,
  onMediumChange,
  theme,
  onThemeChange,
  mediumCounts,
  themeCounts,
  isFiltered,
  onReset,
}: FilterBarProps) {
  return (
    <div className="filter-bar">
      <div className="filter-bar__row filter-bar__search">
        <label htmlFor="folio-search" className="filter-bar__legend">
          Search
        </label>
        <div className="search-field">
          <span className="search-field__icon" aria-hidden="true">
            <Search {...ICON_PROPS} />
          </span>
          <input
            id="folio-search"
            className="search-field__input"
            type="search"
            placeholder="Title or excerpt…"
            autoComplete="off"
            spellCheck={false}
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
          />
          {query && (
            <Button
              variant="icon"
              size="sm"
              icon={<X {...ICON_PROPS} />}
              aria-label="Clear search"
              onClick={() => onQueryChange('')}
            />
          )}
        </div>
        {isFiltered && (
          <Button variant="primary" size="sm" onClick={onReset} className="filter-bar__reset">
            Reset Filters
          </Button>
        )}
      </div>

      <FacetRow
        legend="Medium"
        allLabel="All"
        options={mediums}
        value={medium}
        counts={mediumCounts}
        onChange={onMediumChange}
      />
      <FacetRow
        legend="Theme"
        allLabel="All"
        options={themes}
        value={theme}
        counts={themeCounts}
        onChange={onThemeChange}
      />
    </div>
  );
}
