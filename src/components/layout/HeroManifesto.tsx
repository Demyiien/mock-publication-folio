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

/** Section 01 — Curator's foreword (7 cols) beside the featured work (5 cols). */
export function HeroManifesto({ featuredEntry, onSelect, stats }: HeroManifestoProps) {
  return (
    <section className="section" aria-labelledby="section-foreword">
      <SectionHeader
        indexNumber="01"
        title="Curator's Foreword & Featured Exhibition"
        subtitle="Folio XLII — Annual literary & visual arts supplement"
        headingId="section-foreword"
      />

      <div className="swiss-grid hero">
        <div className="hero__manifesto">
          <p className="hero__kicker">Issue Theme</p>
          <h1 className="hero__title">
            Nocturne in <em>Maroon</em>
            <br />
            <span className="hero__amp">&amp;</span> Concrete
          </h1>

          <div className="hero__body">
            <p className="drop-cap">
              Every campus keeps two archives. The first lives in the registrar's vault: transcripts,
              memoranda, the minutes of meetings held behind closed doors. The second is written at
              two in the morning by students who should be asleep—in verse scrawled on the back of
              layout sheets, in photographs of floodwater at the gate, in cartoons pinned to a
              pressroom corkboard until someone in an office upstairs asks for them to be taken down.
            </p>
            <p>
              This Folio is the second archive, bound and opened to the public. We present these
              eight works not as decoration for the news but as news itself: a record of what it
              felt like to study, commute, dissent, and remember during the forty-second year of
              The Technologian Student Press. Read them slowly. They were made in the dark, and they
              are still warm.
            </p>
            <p className="hero__signature">— The Folio Editorial Board, Pressroom B-214</p>
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
