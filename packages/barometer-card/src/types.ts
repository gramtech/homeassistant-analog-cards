import { BaseCardConfig, FaceStyle } from 'analog-cards-core';

export { HassEntity, HomeAssistant, fireEvent, FaceStyle, TrendDirection } from 'analog-cards-core';

export type PressureUnit = 'hPa' | 'inHg';

export interface AnalogBarometerCardConfig extends BaseCardConfig {
  unit?: PressureUnit;
  min?: number;
  max?: number;
  trend_hours?: number;
  trend_threshold?: number;
  needle_color?: string;
  face_style?: FaceStyle;
}
