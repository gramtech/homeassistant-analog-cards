import { generateTickValues } from './ticks';

/**
 * Describes a dial's angular sweep. `startAngle`/`sweepAngle` are degrees,
 * measured clockwise from 12 o'clock (see polar.ts). `wrap: true` means
 * values outside [min, max) wrap around modulo the range instead of
 * clamping — used for cyclical scales like a compass (0-360°) rather than
 * a bounded gauge (e.g. pressure, temperature).
 */
export interface RadialScale {
  startAngle: number;
  sweepAngle: number;
  wrap?: boolean;
}

export interface RadialTick {
  value: number;
  angle: number;
  major: boolean;
}

/** Classic aneroid-barometer-style sweep: 270 degrees, gap at the bottom. */
export const GAUGE_SCALE: RadialScale = { startAngle: -135, sweepAngle: 270 };

/** Full-circle cyclical sweep, e.g. a compass rose or a clock face. */
export const FULL_CIRCLE_SCALE: RadialScale = { startAngle: 0, sweepAngle: 360, wrap: true };

/** Maps a value in [min, max] to an angle on the dial sweep. */
export function valueToAngle(value: number, min: number, max: number, scale: RadialScale): number {
  if (max <= min) return scale.startAngle;
  let fraction: number;
  if (scale.wrap) {
    const span = max - min;
    const wrapped = ((value - min) % span + span) % span;
    fraction = wrapped / span;
  } else {
    const clamped = Math.min(max, Math.max(min, value));
    fraction = (clamped - min) / (max - min);
  }
  return scale.startAngle + fraction * scale.sweepAngle;
}

/** Generates major/minor tick marks across [min, max], projected onto the given dial scale. */
export function generateTicks(
  min: number,
  max: number,
  majorStep: number,
  minorStep: number,
  scale: RadialScale
): RadialTick[] {
  return generateTickValues(min, max, majorStep, minorStep).map((tick) => ({
    ...tick,
    angle: valueToAngle(tick.value, min, max, scale),
  }));
}
