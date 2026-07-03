import { generateTickValues } from './ticks';

export interface LinearTick {
  value: number;
  position: number;
  major: boolean;
}

/**
 * Maps a value in [min, max] to a position between axisStart and axisEnd
 * (e.g. two y-coordinates), clamping out-of-range values. Used by the
 * vertical tube+liquid rendering form, the linear counterpart to the
 * radial dial's `valueToAngle`. axisStart/axisEnd can run in either
 * direction — pass axisStart as the position for `min` and axisEnd as the
 * position for `max` (for a tube where the liquid rises upward as the
 * value increases, axisStart is the larger/bottom y and axisEnd is the
 * smaller/top y, since SVG y grows downward).
 */
export function valueToPosition(
  value: number,
  min: number,
  max: number,
  axisStart: number,
  axisEnd: number
): number {
  if (max <= min) return axisStart;
  const clamped = Math.min(max, Math.max(min, value));
  const fraction = (clamped - min) / (max - min);
  return axisStart + fraction * (axisEnd - axisStart);
}

/** Generates major/minor tick marks across [min, max], projected onto a linear axis. */
export function generateLinearTicks(
  min: number,
  max: number,
  majorStep: number,
  minorStep: number,
  axisStart: number,
  axisEnd: number
): LinearTick[] {
  return generateTickValues(min, max, majorStep, minorStep).map((tick) => ({
    ...tick,
    position: valueToPosition(tick.value, min, max, axisStart, axisEnd),
  }));
}
