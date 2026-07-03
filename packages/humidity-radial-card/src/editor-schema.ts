import { entityField, faceStyleField, makeComputeLabel, numberField, textField } from 'analog-cards-core';

export const SCHEMA = [
  entityField('sensor'),
  textField('name'),
  numberField('trend_hours', { min: 1, max: 12, step: 1 }),
  numberField('trend_threshold', { min: 0, step: 0.5 }),
  faceStyleField(),
  textField('needle_color'),
] as const;

const LABELS: Record<string, string> = {
  entity: 'Humidity sensor entity',
  name: 'Name (optional)',
  trend_hours: 'Trend lookback (hours)',
  trend_threshold: 'Trend threshold',
  face_style: 'Face style',
  needle_color: 'Needle color (optional, overrides face style default)',
};

export const computeLabel = makeComputeLabel(LABELS);
