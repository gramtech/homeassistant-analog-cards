import { RadialScale } from 'analog-cards-core';
import { FaceStyle } from './types';

export const CARD_TAG = 'analog-barometer-card';
export const EDITOR_TAG = 'analog-barometer-card-editor';

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

/** Classic aneroid barometer dial sweep: 270 degrees, gap at the bottom. */
export const DIAL_SCALE: RadialScale = { startAngle: -135, sweepAngle: 270 };

/** Canonical zone breakpoints in hPa, converted proportionally for other units. */
export interface BarometerZone {
  key: string;
  label: string;
  from: number;
  to: number;
  color: string;
}

export const ZONES_HPA: BarometerZone[] = [
  { key: 'stormy', label: 'Stormy', from: 950, to: 980, color: '#8b1a1a' },
  { key: 'rain', label: 'Rain', from: 980, to: 1000, color: '#b5651d' },
  { key: 'change', label: 'Change', from: 1000, to: 1015, color: '#c9a227' },
  { key: 'fair', label: 'Fair', from: 1015, to: 1030, color: '#4a7a3c' },
  { key: 'v-dry', label: 'Very Dry', from: 1030, to: 1050, color: '#2f5f4f' },
];

export const DEFAULT_MIN_HPA = 950;
export const DEFAULT_MAX_HPA = 1050;
export const DEFAULT_TREND_HOURS = 3;
export const DEFAULT_TREND_THRESHOLD_HPA = 1.5;

export const TICK_STEPS: Record<'hPa' | 'inHg', { major: number; minor: number }> = {
  hPa: { major: 10, minor: 2 },
  inHg: { major: 0.5, minor: 0.1 },
};

export const HISTORY_FETCH_THROTTLE_MS = 5 * 60 * 1000;
export const TREND_STORAGE_PREFIX = 'analog-barometer-card-trend-';
