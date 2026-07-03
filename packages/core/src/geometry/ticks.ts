export interface TickValue {
  value: number;
  major: boolean;
}

/** Generates major/minor tick values across [min, max], with no positional information. */
export function generateTickValues(
  min: number,
  max: number,
  majorStep: number,
  minorStep: number
): TickValue[] {
  if (majorStep <= 0 || minorStep <= 0 || max <= min) return [];
  const ticks: TickValue[] = [];
  const epsilon = minorStep / 1000;
  for (let v = min; v <= max + epsilon; v += minorStep) {
    const rounded = Math.round(v / minorStep) * minorStep;
    const isMajor = Math.abs(rounded / majorStep - Math.round(rounded / majorStep)) < epsilon;
    ticks.push({ value: rounded, major: isMajor });
  }
  return ticks;
}
