import { HomeAssistant, PressureUnit } from './types';
import {
  DEFAULT_MAX_HPA,
  DEFAULT_MIN_HPA,
  DEFAULT_TREND_THRESHOLD_HPA,
} from './const';

const HPA_PER_INHG = 33.8639;

const INHG_UNITS = new Set(['inhg', 'inHg', 'in']);
const HPA_UNITS = new Set(['hpa', 'mbar', 'mb']);

export function hpaToInHg(hpa: number): number {
  return hpa / HPA_PER_INHG;
}

export function inHgToHpa(inHg: number): number {
  return inHg * HPA_PER_INHG;
}

export function convertFromHpa(hpa: number, unit: PressureUnit): number {
  return unit === 'inHg' ? hpaToInHg(hpa) : hpa;
}

export function convertToHpa(value: number, unit: PressureUnit): number {
  return unit === 'inHg' ? inHgToHpa(value) : value;
}

export function convert(value: number, from: PressureUnit, to: PressureUnit): number {
  if (from === to) return value;
  return convertFromHpa(convertToHpa(value, from), to);
}

/** Detects display unit from the entity's unit_of_measurement, falling back to hPa. */
export function detectUnit(hass: HomeAssistant, entityId: string): PressureUnit {
  const raw = hass.states[entityId]?.attributes?.unit_of_measurement;
  if (!raw) return 'hPa';
  const normalized = raw.toLowerCase();
  if (INHG_UNITS.has(normalized) || normalized.includes('inhg')) return 'inHg';
  if (HPA_UNITS.has(normalized)) return 'hPa';
  return 'hPa';
}

export function getDefaultRange(unit: PressureUnit): { min: number; max: number } {
  if (unit === 'inHg') {
    return { min: hpaToInHg(DEFAULT_MIN_HPA), max: hpaToInHg(DEFAULT_MAX_HPA) };
  }
  return { min: DEFAULT_MIN_HPA, max: DEFAULT_MAX_HPA };
}

export function getDefaultThreshold(unit: PressureUnit): number {
  return unit === 'inHg'
    ? hpaToInHg(DEFAULT_TREND_THRESHOLD_HPA)
    : DEFAULT_TREND_THRESHOLD_HPA;
}
