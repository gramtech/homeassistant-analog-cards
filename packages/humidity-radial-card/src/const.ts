import { RadialScale } from 'analog-cards-core';
import { FaceStyle } from './types';

export const CARD_TAG = 'analog-humidity-radial-card';
export const EDITOR_TAG = 'analog-humidity-radial-card-editor';

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

export interface HumidityZone {
  key: string;
  label: string;
  from: number;
  to: number;
  color: string;
}

export const ZONES_PERCENT: HumidityZone[] = [
  { key: 'dry', label: 'Dry', from: 0, to: 30, color: '#b5651d' },
  { key: 'comfortable', label: 'Comfortable', from: 30, to: 50, color: '#4a7a3c' },
  { key: 'humid', label: 'Humid', from: 50, to: 70, color: '#c9a227' },
  { key: 'very-humid', label: 'Very Humid', from: 70, to: 100, color: '#2471a3' },
];

export const DEFAULT_MIN_PERCENT = 0;
export const DEFAULT_MAX_PERCENT = 100;
export const DEFAULT_TREND_HOURS = 3;
export const DEFAULT_TREND_THRESHOLD_PERCENT = 3;

export const TICK_STEPS = { major: 10, minor: 2 };

export const HISTORY_FETCH_THROTTLE_MS = 5 * 60 * 1000;
export const TREND_STORAGE_PREFIX = 'analog-humidity-radial-card-trend-';
