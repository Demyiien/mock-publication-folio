import ttspLogo from '../../assets/images/ttsp-logo.png';
import { ISSUE_META } from '../../data/folioEntries';

/** Top archival bar: publication identity. */
export function Masthead() {
  return (
    <header className="masthead">
      <div className="masthead__bar container">
        <a className="masthead__identity" href="#top" aria-label="The TTSP Folio — back to top">
          <img
            className="masthead__logo"
            src={ttspLogo}
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
      </div>
    </header>
  );
}
