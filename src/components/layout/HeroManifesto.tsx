import type { FolioEntry } from '../../types/folio';
import { SectionHeader } from '../ui/SectionHeader';
import { MetaItem } from '../ui/MetaItem';
import { FolioCard } from '../folio/FolioCard';

interface HeroManifestoProps {
  featuredEntry: FolioEntry;
  onSelect: (entry: FolioEntry) => void;
  stats: { works: number; mediums: number; themes: number };
}

const pad = (value: number): string => String(value).padStart(2, '0');

/** Section 01 — Curatorial foreword (7 cols) beside the featured work (5 cols). */
export function HeroManifesto({ featuredEntry, onSelect, stats }: HeroManifestoProps) {
  return (
    <section className="section" aria-labelledby="section-foreword">
      <SectionHeader
        indexNumber="01"
        title="Curator's Foreword & Featured Work"
        headingId="section-foreword"
      />

      <div className="swiss-grid hero">
        <div className="hero__manifesto">
          <p className="hero__kicker">Curatorial Foreword</p>
          <h1 className="hero__title">
            Exhibition <em>Foreword</em>
            <br />
            <span className="hero__amp">&amp;</span> Archive
          </h1>

          <div className="hero__body">
            <p className="drop-cap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, nulla
              gravida orci a odio, et nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec
              luctus magna felis sollicitudin mauris in integer.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
              sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
              dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem ut enim ad minima veniam.
            </p>
            <p className="hero__signature">— The Editorial Board · Exhibition Archive</p>
          </div>

          <div className="hero__stats">
            <MetaItem label="Curated Works" value={pad(stats.works)} orientation="stacked" highlight />
            <MetaItem label="Mediums" value={pad(stats.mediums)} orientation="stacked" />
            <MetaItem label="Themes" value={pad(stats.themes)} orientation="stacked" />
          </div>
        </div>

        <div className="hero__spotlight">
          <FolioCard entry={featuredEntry} variant="featured" onSelect={onSelect} />
        </div>
      </div>
    </section>
  );
}
