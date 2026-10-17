interface FilterPillProps {
  label: string;
  count?: number;
  isActive: boolean;
  onClick: () => void;
}

/**
 * Toggle control used for both the medium and theme filter rows.
 * Zero-count options stay focusable but are visually de-emphasized.
 */
export function FilterPill({ label, count, isActive, onClick }: FilterPillProps) {
  const isEmpty = count === 0 && !isActive;
  const classes = ['filter-pill', isActive && 'is-active', isEmpty && 'is-empty']
    .filter(Boolean)
    .join(' ');

  return (
    <button type="button" className={classes} aria-pressed={isActive} onClick={onClick}>
      <span className="filter-pill__label">{label}</span>
      {count !== undefined && (
        <span className="filter-pill__count" aria-label={`${count} works`}>
          {String(count).padStart(2, '0')}
        </span>
      )}
    </button>
  );
}
