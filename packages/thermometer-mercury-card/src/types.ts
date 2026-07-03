import { BaseCardConfig, FaceStyle } from 'analog-cards-core';

export { HassEntity, HomeAssistant, fireEvent, FaceStyle, TrendDirection } from 'analog-cards-core';

export type TemperatureUnit = '°C' | '°F';

export interface AnalogThermometerMercuryCardConfig extends BaseCardConfig {
  unit?: TemperatureUnit;
  min?: number;
  max?: number;
  trend_hours?: number;
  trend_threshold?: number;
  liquid_color?: string;
  face_style?: FaceStyle;
}
