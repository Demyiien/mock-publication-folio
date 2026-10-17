import { useRef, useState } from 'react';
import { Filter } from 'lucide-react';
import { FOLIO_MEDIUMS, FOLIO_THEMES, folioEntries } from './data/folioEntries';
import { useFolioCatalog } from './hooks/useFolioCatalog';
import { useTheme } from './hooks/useTheme';
import { Masthead } from './components/layout/Masthead';
import { HeroManifesto } from './components/layout/HeroManifesto';
import { FilterBar } from './components/layout/FilterBar';
import { Colophon } from './components/layout/Colophon';
import { SectionHeader } from './components/ui/SectionHeader';
import { Button } from './components/ui/Button';
import { BackToTop } from './components/ui/BackToTop';
import { FolioCard } from './components/folio/FolioCard';
import { ReaderModal } from './components/folio/ReaderModal';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const catalog = useFolioCatalog({
    entries: folioEntries,
    mediums: FOLIO_MEDIUMS,
    themes: FOLIO_THEMES,
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const catalogRef = useRef<HTMLElement>(null);

  const visibleCount = catalog.filteredEntries.length;

  return (
    <div className="app" id="top">
      <a className="skip-link" href="#catalog">
        Skip to exhibition catalog
      </a>

      <Masthead theme={theme} onToggleTheme={toggleTheme} />

      <main className="container main">
        <HeroManifesto
          featuredEntry={catalog.featuredEntry}
          onSelect={catalog.openEntry}
          stats={{
            works: catalog.totalCount,
            mediums: FOLIO_MEDIUMS.length,
            themes: FOLIO_THEMES.length,
          }}
        />

        {/* Section 02: The Exhibition Catalog (Gallery Grid) */}
        <section className="section catalog" id="catalog" ref={catalogRef} aria-labelledby="section-catalog">
          <SectionHeader
            indexNumber="02"
            title="The Exhibition Catalog"
            headingId="section-catalog"
            action={
              <Button
                variant={isFilterOpen ? 'primary' : 'ghost'}
                size="sm"
                icon={<Filter size={14} strokeWidth={1.5} />}
                iconPosition="end"
                aria-expanded={isFilterOpen}
                onClick={() => setIsFilterOpen((prev) => !prev)}
              >
                Filters
              </Button>
            }
          />

          {isFilterOpen && (
            <FilterBar
              query={catalog.query}
              onQueryChange={catalog.setQuery}
              mediums={FOLIO_MEDIUMS}
              themes={FOLIO_THEMES}
              medium={catalog.medium}
              onMediumChange={catalog.setMedium}
              theme={catalog.theme}
              onThemeChange={catalog.setTheme}
              mediumCounts={catalog.mediumCounts}
              themeCounts={catalog.themeCounts}
              isFiltered={catalog.isFiltered}
              onReset={catalog.resetFilters}
            />
          )}

          {visibleCount === 0 ? (
            <div className="empty-state">
              <span className="empty-state__index" aria-hidden="true">
                ∅
              </span>
              <h3 className="empty-state__title">No works match the selected criteria.</h3>
              <p className="empty-state__text">
                The archive holds {catalog.totalCount} works, but none match
                {catalog.query ? ` “${catalog.query}”` : ' this filter selection'}. Clear the
                search query or reset filters to view all entries.
              </p>
              <Button variant="primary" onClick={catalog.resetFilters}>
                Reset All Filters
              </Button>
            </div>
          ) : (
            <ul className="catalog-grid">
              {catalog.filteredEntries.map((entry) => (
                <li key={entry.id} className="catalog-grid__cell">
                  <FolioCard entry={entry} onSelect={catalog.openEntry} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <div className="container">
        <Colophon />
      </div>

      <BackToTop />

      <ReaderModal
        entry={catalog.activeEntry}
        position={catalog.activePosition}
        onClose={catalog.closeEntry}
        onNext={catalog.goToNext}
        onPrevious={catalog.goToPrevious}
      />
    </div>
  );
}
