import { HomeAssistant, HumidityUnit } from './types';
import { DEFAULT_MAX_PERCENT, DEFAULT_MIN_PERCENT, DEFAULT_TREND_THRESHOLD_PERCENT } from './const';

/** Humidity has a single unit ('%'), so conversion is always a no-op. */
export function convert(value: number, _from: HumidityUnit, _to: HumidityUnit): number {
  return value;
}

export function detectUnit(_hass: HomeAssistant, _entityId: string): HumidityUnit {
  return '%';
}

export function getDefaultRange(_unit: HumidityUnit): { min: number; max: number } {
  return { min: DEFAULT_MIN_PERCENT, max: DEFAULT_MAX_PERCENT };
}

export function getDefaultThreshold(_unit: HumidityUnit): number {
  return DEFAULT_TREND_THRESHOLD_PERCENT;
}
