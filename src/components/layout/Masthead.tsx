import { Sun, Moon } from 'lucide-react';
import ttspLogo from '../../assets/images/ttsp-logo.png';
import ttspLogoInverted from '../../assets/images/ttsp-logo-inverted.png';
import { ISSUE_META } from '../../data/folioEntries';
import { Button } from '../ui/Button';

interface MastheadProps {
  theme: 'light' | 'dark';
  onToggleTheme: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

/** Top archival bar: publication identity with theme toggle button. */
export function Masthead({ theme, onToggleTheme }: MastheadProps) {
  const logoSrc = theme === 'light' ? ttspLogoInverted : ttspLogo;

  return (
    <header className="masthead">
      <div className="masthead__bar container">
        <a className="masthead__identity" href="#top" aria-label="The TTSP Folio — back to top">
          <img
            className="masthead__logo"
            src={logoSrc}
            alt="The Technologian Student Press Crest"
            width={44}
            height={51}
          />
          <span className="masthead__titles">
            <span className="masthead__title">
              {ISSUE_META.publication} <span className="masthead__slash">{'·'}</span> {ISSUE_META.folio}
            </span>
            <span className="masthead__motto">“{ISSUE_META.motto}”</span>
          </span>
        </a>

        <Button
          variant="ghost"
          size="sm"
          icon={theme === 'light' ? <Moon size={14} strokeWidth={1.5} /> : <Sun size={14} strokeWidth={1.5} />}
          iconPosition="start"
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          onClick={onToggleTheme}
          className="masthead__theme-toggle"
        >
          {theme === 'light' ? 'Dark' : 'Light'}
        </Button>
      </div>
    </header>
  );
}
