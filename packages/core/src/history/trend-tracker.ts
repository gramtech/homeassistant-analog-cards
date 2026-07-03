import { HomeAssistant } from '../ha/types';

export type TrendDirection = 'rising' | 'falling' | 'steady' | 'unknown';

export interface HistoryStatePoint {
  state?: string;
  s?: string;
  last_updated?: string;
  lu?: number;
}

export interface TrendCacheEntry {
  direction: TrendDirection;
  pastValueDisplay: number | null;
  fetchedAt: number;
}

/** Fetches the entity's raw state value from ~hoursAgo, in the entity's native unit. */
export async function fetchPastValue(
  hass: HomeAssistant,
  entityId: string,
  hoursAgo: number
): Promise<number | null> {
  const start = new Date(Date.now() - hoursAgo * 3600_000);
  const path = `history/period/${start.toISOString()}?filter_entity_id=${encodeURIComponent(
    entityId
  )}&minimal_response&no_attributes`;
  const result = await hass.callApi<HistoryStatePoint[][]>('GET', path);
  const series = result?.[0];
  if (!series?.length) return null;
  const point = series[0];
  const raw = point.state ?? point.s;
  if (raw === undefined) return null;
  const parsed = parseFloat(raw);
  return Number.isFinite(parsed) ? parsed : null;
}

export function classifyTrend(
  currentDisplay: number,
  pastDisplay: number,
  thresholdDisplay: number
): TrendDirection {
  const delta = currentDisplay - pastDisplay;
  if (Math.abs(delta) < thresholdDisplay) return 'steady';
  return delta > 0 ? 'rising' : 'falling';
}

function loadCached(storageKey: string): TrendCacheEntry | null {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return null;
    return JSON.parse(raw) as TrendCacheEntry;
  } catch {
    return null;
  }
}

function saveCached(storageKey: string, entry: TrendCacheEntry): void {
  try {
    localStorage.setItem(storageKey, JSON.stringify(entry));
  } catch {
    // localStorage unavailable (private browsing, quota, etc.) — non-fatal.
  }
}

/**
 * Tracks a value's trend for one card instance: throttles history API calls,
 * dedupes concurrent fetches, and persists the last result across reloads.
 * Generic over the display unit type `TUnit` so it's reusable by any card
 * with a convertible unit (pressure, temperature, ...) — pass a `convert`
 * function and a unique `storageKeyPrefix` per card.
 */
export class TrendTracker<TUnit> {
  private cache: TrendCacheEntry | null = null;
  private cachedEntityId: string | null = null;
  private inFlight: Promise<TrendCacheEntry> | null = null;

  constructor(
    private readonly storageKeyPrefix: string,
    private readonly convert: (value: number, from: TUnit, to: TUnit) => number,
    private readonly throttleMs: number = 5 * 60 * 1000
  ) {}

  private storageKey(entityId: string): string {
    return `${this.storageKeyPrefix}${entityId}`;
  }

  getCached(entityId: string): TrendCacheEntry | null {
    if (this.cachedEntityId !== entityId) {
      this.cachedEntityId = entityId;
      this.cache = loadCached(this.storageKey(entityId));
    }
    return this.cache;
  }

  private shouldFetch(entityId: string): boolean {
    const cached = this.getCached(entityId);
    if (!cached) return true;
    return Date.now() - cached.fetchedAt > this.throttleMs;
  }

  /**
   * Returns the current trend, using the cache if fresh; otherwise triggers
   * (and dedupes) a background fetch and returns the stale cache in the
   * meantime so the UI never blocks on network.
   */
  update(
    hass: HomeAssistant,
    entityId: string,
    currentValueDisplay: number,
    nativeUnit: TUnit,
    displayUnit: TUnit,
    hoursAgo: number,
    thresholdDisplay: number,
    onResolved?: (entry: TrendCacheEntry) => void
  ): TrendCacheEntry | null {
    const cached = this.getCached(entityId);
    if (this.inFlight || !this.shouldFetch(entityId)) {
      return cached;
    }

    this.inFlight = fetchPastValue(hass, entityId, hoursAgo)
      .then((pastRaw): TrendCacheEntry => {
        if (pastRaw === null) {
          return { direction: 'unknown', pastValueDisplay: null, fetchedAt: Date.now() };
        }
        const pastDisplay = this.convert(pastRaw, nativeUnit, displayUnit);
        return {
          direction: classifyTrend(currentValueDisplay, pastDisplay, thresholdDisplay),
          pastValueDisplay: pastDisplay,
          fetchedAt: Date.now(),
        };
      })
      .catch(
        (): TrendCacheEntry => ({
          direction: cached?.direction ?? 'unknown',
          pastValueDisplay: cached?.pastValueDisplay ?? null,
          fetchedAt: Date.now(),
        })
      )
      .then((entry) => {
        this.cache = entry;
        saveCached(this.storageKey(entityId), entry);
        this.inFlight = null;
        onResolved?.(entry);
        return entry;
      });

    return cached;
  }
}
