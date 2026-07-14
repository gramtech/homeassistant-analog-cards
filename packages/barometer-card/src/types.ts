import { BaseCardConfig, FaceStyle, TrendTextSize } from 'analog-cards-core';

export {
  HassEntity,
  HomeAssistant,
  fireEvent,
  FaceStyle,
  TrendDirection,
  TrendTextSize,
} from 'analog-cards-core';

export type PressureUnit = 'hPa' | 'inHg';

export interface AnalogBarometerCardConfig extends BaseCardConfig {
  unit?: PressureUnit | 'auto';
  min?: number;
  max?: number;
  trend_hours?: number;
  trend_threshold?: number;
  trend_text_size?: TrendTextSize;
  needle_color?: string;
  face_style?: FaceStyle;
}
