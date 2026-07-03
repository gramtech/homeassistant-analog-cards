export type FaceStyle =
  | 'classic'
  | 'silver'
  | 'dark'
  | 'light'
  | 'led-backlit'
  | 'fluorescent'
  | 'futuristic';

/** Shared dropdown options for every card's face-style editor field. */
export const FACE_STYLE_OPTIONS: Array<{ value: FaceStyle; label: string }> = [
  { value: 'classic', label: 'Classic' },
  { value: 'silver', label: 'Silver' },
  { value: 'dark', label: 'Dark' },
  { value: 'light', label: 'Light' },
  { value: 'led-backlit', label: 'LED Backlit' },
  { value: 'fluorescent', label: 'Fluorescent' },
  { value: 'futuristic', label: 'Futuristic' },
];
