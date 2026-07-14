import { BaseCardConfig, FaceStyle, TrendTextSize } from 'analog-cards-core';

export {
  HassEntity,
  HomeAssistant,
  fireEvent,
  FaceStyle,
  TrendDirection,
  TrendTextSize,
} from 'analog-cards-core';

/** Humidity is always expressed as a percentage — no unit conversion needed. */
export type HumidityUnit = '%';

export interface AnalogHumidityRadialCardConfig extends BaseCardConfig {
  min?: number;
  max?: number;
  trend_hours?: number;
  trend_threshold?: number;
  trend_text_size?: TrendTextSize;
  needle_color?: string;
  face_style?: FaceStyle;
}
