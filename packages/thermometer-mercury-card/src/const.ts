import { FaceStyle } from './types';

export const CARD_TAG = 'analog-thermometer-mercury-card';
export const EDITOR_TAG = 'analog-thermometer-mercury-card-editor';

export const DEFAULT_FACE_STYLE: FaceStyle = 'classic';

/**
 * Liquid color used per face style unless the user sets `liquid_color`
 * explicitly. "silver" is literal mercury; the rest use the same red
 * alcohol-thermometer convention as real household outdoor thermometers,
 * plus glow-accent colors matching each style's other neon/backlit tones.
 */
export const LIQUID_COLOR_BY_STYLE: Record<FaceStyle, string> = {
  classic: '#c0392b',
  silver: '#c9cdd1',
  dark: '#e05c4d',
  light: '#c0392b',
  'led-backlit': '#ff4d4d',
  fluorescent: '#baff29',
  futuristic: '#ff2fd0',
};

export const DEFAULT_MIN_C = -20;
export const DEFAULT_MAX_C = 45;
export const DEFAULT_TREND_HOURS = 3;
export const DEFAULT_TREND_THRESHOLD_C = 1;

export const TICK_STEPS: Record<'°C' | '°F', { major: number; minor: number }> = {
  '°C': { major: 10, minor: 2 },
  '°F': { major: 20, minor: 5 },
};

export const HISTORY_FETCH_THROTTLE_MS = 5 * 60 * 1000;
export const TREND_STORAGE_PREFIX = 'analog-thermometer-mercury-card-trend-';
