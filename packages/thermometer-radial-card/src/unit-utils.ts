import { HomeAssistant, TemperatureUnit } from './types';
import { DEFAULT_MAX_C, DEFAULT_MIN_C, DEFAULT_TREND_THRESHOLD_C } from './const';

export function celsiusToFahrenheit(c: number): number {
  return (c * 9) / 5 + 32;
}

export function fahrenheitToCelsius(f: number): number {
  return ((f - 32) * 5) / 9;
}

export function convertFromCelsius(celsius: number, unit: TemperatureUnit): number {
  return unit === '°F' ? celsiusToFahrenheit(celsius) : celsius;
}

export function convertToCelsius(value: number, unit: TemperatureUnit): number {
  return unit === '°F' ? fahrenheitToCelsius(value) : value;
}

export function convert(value: number, from: TemperatureUnit, to: TemperatureUnit): number {
  if (from === to) return value;
  return convertFromCelsius(convertToCelsius(value, from), to);
}

/** Resolves the configured unit ('auto', or unset, means follow the entity's native unit). */
export function resolveUnit(
  configUnit: TemperatureUnit | 'auto' | undefined,
  nativeUnit: TemperatureUnit
): TemperatureUnit {
  return configUnit && configUnit !== 'auto' ? configUnit : nativeUnit;
}

/** Detects display unit from the entity's unit_of_measurement, falling back to °C. */
export function detectUnit(hass: HomeAssistant, entityId: string): TemperatureUnit {
  const raw = hass.states[entityId]?.attributes?.unit_of_measurement;
  if (!raw) return '°C';
  return raw.toLowerCase().includes('f') ? '°F' : '°C';
}

export function getDefaultRange(unit: TemperatureUnit): { min: number; max: number } {
  if (unit === '°F') {
    return { min: celsiusToFahrenheit(DEFAULT_MIN_C), max: celsiusToFahrenheit(DEFAULT_MAX_C) };
  }
  return { min: DEFAULT_MIN_C, max: DEFAULT_MAX_C };
}

export function getDefaultThreshold(unit: TemperatureUnit): number {
  return unit === '°F' ? (DEFAULT_TREND_THRESHOLD_C * 9) / 5 : DEFAULT_TREND_THRESHOLD_C;
}
