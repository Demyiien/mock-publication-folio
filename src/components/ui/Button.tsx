import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'ghost' | 'icon';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'sm' | 'md';
  icon?: ReactNode;
  iconPosition?: 'start' | 'end';
  /** Visually marks the button as the selected option in a segmented group. */
  isActive?: boolean;
  children?: ReactNode;
}

/**
 * Reused for primary actions, ghost/segmented toggles, and icon-only controls.
 * Icon-only usage (`variant="icon"`) requires an `aria-label`.
 */
export function Button({
  variant = 'ghost',
  size = 'md',
  icon,
  iconPosition = 'start',
  isActive = false,
  className,
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  const classes = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    isActive && 'is-active',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type={type} className={classes} {...rest}>
      {icon && iconPosition === 'start' && <span className="button__icon">{icon}</span>}
      {children && variant !== 'icon' && <span className="button__label">{children}</span>}
      {icon && iconPosition === 'end' && <span className="button__icon">{icon}</span>}
    </button>
  );
}
