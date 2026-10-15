import { useCallback, useMemo, useState } from 'react';
import type {
  FolioEntry,
  FolioMedium,
  FolioTheme,
  MediumFilter,
  ThemeFilter,
  ViewMode,
} from '../types/folio';

type CountMap<K extends string> = Record<K | 'All', number>;

interface FilterCriteria {
  query: string;
  medium: MediumFilter;
  theme: ThemeFilter;
}

const normalize = (value: string): string => value.trim().toLowerCase();

const matchesQuery = (entry: FolioEntry, query: string): boolean => {
  if (!query) return true;
  const haystack = [entry.title, entry.subtitle ?? '', entry.excerpt]
    .join(' ')
    .toLowerCase();
  return haystack.includes(query);
};

const matchesCriteria = (entry: FolioEntry, { query, medium, theme }: FilterCriteria): boolean =>
  matchesQuery(entry, query) &&
  (medium === 'All' || entry.medium === medium) &&
  (theme === 'All' || entry.theme === theme);

/** Faceted counts: each facet's counts respect every *other* active filter. */
const countBy = <K extends string>(
  entries: FolioEntry[],
  keys: readonly K[],
  pick: (entry: FolioEntry) => K,
): CountMap<K> => {
  const counts = { All: entries.length } as CountMap<K>;
  keys.forEach((key) => {
    counts[key] = entries.filter((entry) => pick(entry) === key).length;
  });
  return counts;
};

interface UseFolioCatalogOptions {
  entries: FolioEntry[];
  mediums: readonly FolioMedium[];
  themes: readonly FolioTheme[];
}

/**
 * Single source of state for the exhibition: search, facet filters,
 * view mode, and the active ReaderModal entry with prev/next cycling.
 */
export function useFolioCatalog({ entries, mediums, themes }: UseFolioCatalogOptions) {
  const [query, setQuery] = useState('');
  const [medium, setMedium] = useState<MediumFilter>('All');
  const [theme, setTheme] = useState<ThemeFilter>('All');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [activeEntryId, setActiveEntryId] = useState<string | null>(null);

  const normalizedQuery = normalize(query);

  const filteredEntries = useMemo(
    () => entries.filter((entry) => matchesCriteria(entry, { query: normalizedQuery, medium, theme })),
    [entries, normalizedQuery, medium, theme],
  );

  const mediumCounts = useMemo(
    () =>
      countBy(
        entries.filter((entry) => matchesCriteria(entry, { query: normalizedQuery, medium: 'All', theme })),
        mediums,
        (entry) => entry.medium,
      ),
    [entries, mediums, normalizedQuery, theme],
  );

  const themeCounts = useMemo(
    () =>
      countBy(
        entries.filter((entry) => matchesCriteria(entry, { query: normalizedQuery, medium, theme: 'All' })),
        themes,
        (entry) => entry.theme,
      ),
    [entries, themes, normalizedQuery, medium],
  );

  const featuredEntry = useMemo(
    () => entries.find((entry) => entry.isFeatured) ?? entries[0],
    [entries],
  );

  const isFiltered = normalizedQuery.length > 0 || medium !== 'All' || theme !== 'All';

  const resetFilters = useCallback(() => {
    setQuery('');
    setMedium('All');
    setTheme('All');
  }, []);

  /*
   * Reader navigation cycles through the filtered catalog. If the active entry
   * was opened from outside the current filter (e.g. the hero spotlight),
   * navigation falls back to the full archive so the reader never dead-ends.
   */
  const activeEntry = entries.find((entry) => entry.id === activeEntryId) ?? null;
  const navigationList =
    activeEntry && filteredEntries.some((entry) => entry.id === activeEntry.id)
      ? filteredEntries
      : entries;
  const activeIndex = activeEntry ? navigationList.findIndex((e) => e.id === activeEntry.id) : -1;

  const openEntry = useCallback((entry: FolioEntry) => setActiveEntryId(entry.id), []);
  const closeEntry = useCallback(() => setActiveEntryId(null), []);

  const stepEntry = useCallback(
    (direction: 1 | -1) => {
      if (activeIndex < 0 || navigationList.length === 0) return;
      const nextIndex = (activeIndex + direction + navigationList.length) % navigationList.length;
      setActiveEntryId(navigationList[nextIndex].id);
    },
    [activeIndex, navigationList],
  );

  const goToNext = useCallback(() => stepEntry(1), [stepEntry]);
  const goToPrevious = useCallback(() => stepEntry(-1), [stepEntry]);

  return {
    // filters
    query,
    setQuery,
    medium,
    setMedium,
    theme,
    setTheme,
    isFiltered,
    resetFilters,
    // derived catalog
    filteredEntries,
    totalCount: entries.length,
    mediumCounts,
    themeCounts,
    featuredEntry,
    // view
    viewMode,
    setViewMode,
    // reader
    activeEntry,
    activePosition: { index: activeIndex, total: navigationList.length },
    openEntry,
    closeEntry,
    goToNext,
    goToPrevious,
  };
}

export type FolioCatalog = ReturnType<typeof useFolioCatalog>;
