interface BadgeProps {
  label: string;
  variant?: 'maroon' | 'outline' | 'muted';
  size?: 'sm' | 'md';
  className?: string;
}

/**
 * Archival tag for themes and status indicators.
 * Reused in: ReaderModal.
 */
export function Badge({ label, variant = 'outline', size = 'sm', className }: BadgeProps) {
  const classes = ['badge', `badge--${variant}`, `badge--${size}`, className].filter(Boolean).join(' ');
  return <span className={classes}>{label}</span>;
}
