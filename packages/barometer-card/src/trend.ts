import { TrendTracker } from 'analog-cards-core';
import { HISTORY_FETCH_THROTTLE_MS, TREND_STORAGE_PREFIX } from './const';
import { PressureUnit } from './types';
import { convert } from './unit-utils';

export function createTrendTracker(): TrendTracker<PressureUnit> {
  return new TrendTracker<PressureUnit>(TREND_STORAGE_PREFIX, convert, HISTORY_FETCH_THROTTLE_MS);
}
