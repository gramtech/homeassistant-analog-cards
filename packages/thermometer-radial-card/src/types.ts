import { BaseCardConfig, FaceStyle, TrendTextSize } from 'analog-cards-core';

export {
  HassEntity,
  HomeAssistant,
  fireEvent,
  FaceStyle,
  TrendDirection,
  TrendTextSize,
} from 'analog-cards-core';

export type TemperatureUnit = '°C' | '°F';

export interface AnalogThermometerRadialCardConfig extends BaseCardConfig {
  unit?: TemperatureUnit;
  min?: number;
  max?: number;
  trend_hours?: number;
  trend_threshold?: number;
  trend_text_size?: TrendTextSize;
  needle_color?: string;
  face_style?: FaceStyle;
}
