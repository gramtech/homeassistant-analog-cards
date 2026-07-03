import { RadialScale } from 'analog-cards-core';
import { FaceStyle } from './types';

export const CARD_TAG = 'analog-thermometer-radial-card';
export const EDITOR_TAG = 'analog-thermometer-radial-card-editor';

export const DEFAULT_FACE_STYLE: FaceStyle = 'classic';

/** Needle color used per face style unless the user sets `needle_color` explicitly. */
export const NEEDLE_COLOR_BY_STYLE: Record<FaceStyle, string> = {
  classic: '#333333',
  silver: '#222222',
  dark: '#e8e8e8',
  light: '#333333',
  'led-backlit': '#ff4d4d',
  fluorescent: '#baff29',
  futuristic: '#ff2fd0',
};

/** Same 270-degree sweep convention as the barometer dial, gap at the bottom. */
export const DIAL_SCALE: RadialScale = { startAngle: -135, sweepAngle: 270 };

export interface ThermometerZone {
  key: string;
  label: string;
  from: number;
  to: number;
  color: string;
}

/** Canonical zone breakpoints in Celsius, converted proportionally for Fahrenheit. */
export const ZONES_CELSIUS: ThermometerZone[] = [
  { key: 'freezing', label: 'Freezing', from: -20, to: 0, color: '#2471a3' },
  { key: 'cold', label: 'Cold', from: 0, to: 15, color: '#5dade2' },
  { key: 'comfortable', label: 'Comfortable', from: 15, to: 25, color: '#4a7a3c' },
  { key: 'warm', label: 'Warm', from: 25, to: 32, color: '#c9a227' },
  { key: 'hot', label: 'Hot', from: 32, to: 45, color: '#b5651d' },
];

export const DEFAULT_MIN_C = -20;
export const DEFAULT_MAX_C = 45;
export const DEFAULT_TREND_HOURS = 3;
export const DEFAULT_TREND_THRESHOLD_C = 1;

export const TICK_STEPS: Record<'°C' | '°F', { major: number; minor: number }> = {
  '°C': { major: 10, minor: 2 },
  '°F': { major: 20, minor: 5 },
};

export const HISTORY_FETCH_THROTTLE_MS = 5 * 60 * 1000;
export const TREND_STORAGE_PREFIX = 'analog-thermometer-radial-card-trend-';
