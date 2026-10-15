import { useCallback, useRef } from 'react';
import type { ViewMode } from './types/folio';
import { FOLIO_MEDIUMS, FOLIO_THEMES, folioEntries } from './data/folioEntries';
import { useFolioCatalog } from './hooks/useFolioCatalog';
import { Masthead } from './components/layout/Masthead';
import { HeroManifesto } from './components/layout/HeroManifesto';
import { FilterBar } from './components/layout/FilterBar';
import { Colophon } from './components/layout/Colophon';
import { SectionHeader } from './components/ui/SectionHeader';
import { Button } from './components/ui/Button';
import { FolioCard } from './components/folio/FolioCard';
import { LedgerRow } from './components/folio/LedgerRow';
import { ReaderModal } from './components/folio/ReaderModal';

const pad = (value: number): string => String(value).padStart(2, '0');

const LEDGER_COLUMNS = ['Cat.', 'Title', 'Medium', 'Theme', 'Author', 'Specs', ''] as const;

export default function App() {
  const catalog = useFolioCatalog({
    entries: folioEntries,
    mediums: FOLIO_MEDIUMS,
    themes: FOLIO_THEMES,
  });
  const catalogRef = useRef<HTMLElement>(null);

  const { setViewMode } = catalog;
  const handleViewModeChange = useCallback(
    (mode: ViewMode) => {
      setViewMode(mode);
      catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    [setViewMode],
  );

  const visibleCount = catalog.filteredEntries.length;

  return (
    <div className="app" id="top">
      <a className="skip-link" href="#catalog">
        Skip to exhibition catalog
      </a>

      <Masthead
        viewMode={catalog.viewMode}
        onViewModeChange={handleViewModeChange}
        totalWorks={catalog.totalCount}
      />

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

        <section className="section catalog" id="catalog" ref={catalogRef} aria-labelledby="section-catalog">
          <SectionHeader
            indexNumber="02"
            title="The Exhibition Catalog"
            subtitle={catalog.viewMode === 'grid' ? 'Gallery Grid View' : 'Archival Ledger View'}
            headingId="section-catalog"
            rightSlot={
              <p className="catalog__status" role="status" aria-live="polite">
                Displaying <strong>{pad(visibleCount)}</strong> of {pad(catalog.totalCount)} archived works
              </p>
            }
          />

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
          ) : catalog.viewMode === 'grid' ? (
            <ul className="catalog-grid">
              {catalog.filteredEntries.map((entry) => (
                <li key={entry.id} className="catalog-grid__cell">
                  <FolioCard entry={entry} onSelect={catalog.openEntry} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="ledger">
              <table className="ledger__table">
                <caption className="visually-hidden">
                  Archival index of {visibleCount} works in Folio XLII
                </caption>
                <thead>
                  <tr>
                    {LEDGER_COLUMNS.map((column, index) => (
                      <th key={index} scope="col" className="ledger__heading">
                        {column || <span className="visually-hidden">Action</span>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {catalog.filteredEntries.map((entry) => (
                    <LedgerRow key={entry.id} entry={entry} onSelect={catalog.openEntry} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>

      <div className="container">
        <Colophon />
      </div>

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
