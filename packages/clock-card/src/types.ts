import { FaceStyle } from 'analog-cards-core';

export { HomeAssistant, fireEvent, FaceStyle } from 'analog-cards-core';

export type SecondHandMotion = 'tick' | 'sweep';

/**
 * No `entity` field — unlike the other cards, the clock isn't driven by a
 * Home Assistant entity value at all, just the wall clock (optionally in a
 * specific `time_zone`).
 */
export interface AnalogClockCardConfig {
  type: string;
  name?: string;
  face_style?: FaceStyle;
  time_zone?: string;
  show_seconds?: boolean;
  second_hand_motion?: SecondHandMotion;
}
