export type TrendTextSize = 'small' | 'medium' | 'large' | 'x-large';

/** Slightly larger than the old fixed 0.9rem trend text, since it was hard to read at a glance. */
export const DEFAULT_TREND_TEXT_SIZE: TrendTextSize = 'large';

/** Shared dropdown options for every card's trend-text-size editor field. */
export const TREND_TEXT_SIZE_OPTIONS: Array<{ value: TrendTextSize; label: string }> = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
  { value: 'x-large', label: 'Extra large' },
];

/** Font size (rem) of the trend label/arrow row, keyed by size option. */
export const TREND_FONT_SIZE_REM: Record<TrendTextSize, number> = {
  small: 0.8,
  medium: 0.9,
  large: 1.05,
  'x-large': 1.2,
};
