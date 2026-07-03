import { faceStyleField, makeComputeLabel, selectField, textField } from 'analog-cards-core';

export const SCHEMA = [
  textField('name'),
  faceStyleField(),
  textField('time_zone'),
  { name: 'show_seconds', selector: { boolean: {} } } as const,
  selectField('second_hand_motion', [
    { value: 'tick', label: 'Tick (once per second)' },
    { value: 'sweep', label: 'Sweep (smooth)' },
  ]),
] as const;

const LABELS: Record<string, string> = {
  name: 'Name (optional)',
  face_style: 'Face style',
  time_zone: 'Time zone (optional, e.g. America/New_York — defaults to local time)',
  show_seconds: 'Show second hand',
  second_hand_motion: 'Second hand motion',
};

export const computeLabel = makeComputeLabel(LABELS);
