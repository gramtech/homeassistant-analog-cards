import { FaceStyle } from './types';

export const CARD_TAG = 'analog-clock-card';
export const EDITOR_TAG = 'analog-clock-card-editor';

export const DEFAULT_FACE_STYLE: FaceStyle = 'classic';
export const DEFAULT_SHOW_SECONDS = true;
export const DEFAULT_SECOND_HAND_MOTION = 'tick';

/** Hour/minute hand color per face style. */
export const HAND_COLOR_BY_STYLE: Record<FaceStyle, string> = {
  classic: '#333333',
  silver: '#222222',
  dark: '#e8e8e8',
  light: '#333333',
  'led-backlit': '#a8ecff',
  fluorescent: '#d4ff7a',
  futuristic: '#7df9ff',
};

/** Second hand accent color per face style — a contrasting sweep hand, as on a real clock. */
export const SECOND_HAND_COLOR_BY_STYLE: Record<FaceStyle, string> = {
  classic: '#c0392b',
  silver: '#c0392b',
  dark: '#ff4d4d',
  light: '#c0392b',
  'led-backlit': '#ff4d4d',
  fluorescent: '#baff29',
  futuristic: '#ff2fd0',
};

/** Redraw cadence: fine enough that both "tick" and "sweep" second-hand motion read correctly. */
export const TICK_INTERVAL_MS = 200;
