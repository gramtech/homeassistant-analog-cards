import { TrendTracker } from 'analog-cards-core';
import { HISTORY_FETCH_THROTTLE_MS, TREND_STORAGE_PREFIX } from './const';
import { TemperatureUnit } from './types';
import { convert } from './unit-utils';

export function createTrendTracker(): TrendTracker<TemperatureUnit> {
  return new TrendTracker<TemperatureUnit>(TREND_STORAGE_PREFIX, convert, HISTORY_FETCH_THROTTLE_MS);
}
