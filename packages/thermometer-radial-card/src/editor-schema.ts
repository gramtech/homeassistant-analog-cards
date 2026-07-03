import {
  entityField,
  faceStyleField,
  makeComputeLabel,
  numberField,
  selectField,
  textField,
} from 'analog-cards-core';

export const SCHEMA = [
  entityField('sensor'),
  textField('name'),
  selectField('unit', [
    { value: 'auto', label: 'Auto-detect' },
    { value: '°C', label: '°C' },
    { value: '°F', label: '°F' },
  ]),
  numberField('trend_hours', { min: 1, max: 12, step: 1 }),
  numberField('trend_threshold', { min: 0, step: 0.1 }),
  faceStyleField(),
  textField('needle_color'),
] as const;

const LABELS: Record<string, string> = {
  entity: 'Temperature sensor entity',
  name: 'Name (optional)',
  unit: 'Display unit',
  trend_hours: 'Trend lookback (hours)',
  trend_threshold: 'Trend threshold',
  face_style: 'Face style',
  needle_color: 'Needle color (optional, overrides face style default)',
};

export const computeLabel = makeComputeLabel(LABELS);
