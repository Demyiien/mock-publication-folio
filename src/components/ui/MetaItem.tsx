interface MetaItemProps {
  label: string;
  value: string;
  highlight?: boolean;
  /** `inline` → "CAT NO. // CAT-01"; `stacked` → label above an oversized value (statistics). */
  orientation?: 'inline' | 'stacked';
}

/**
 * Monospace key–value pair for archival metadata.
 * Reused in: Masthead issue stats, HeroManifesto statistics, FolioCard header,
 * ReaderModal specs sidebar, and Colophon type specimen list.
 */
export function MetaItem({ label, value, highlight = false, orientation = 'inline' }: MetaItemProps) {
  const classes = ['meta-item', `meta-item--${orientation}`, highlight && 'meta-item--highlight']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <span className="meta-item__label">{label}</span>
      {orientation === 'inline' && (
        <span className="meta-item__divider" aria-hidden="true">
          {'//'}
        </span>
      )}
      <span className="meta-item__value">{value}</span>
    </div>
  );
}
