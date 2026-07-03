export interface Point {
  x: number;
  y: number;
}

/** Converts a polar coordinate (angle measured clockwise from 12 o'clock) to cartesian. */
export function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number): Point {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(angleRad),
    y: cy + r * Math.sin(angleRad),
  };
}

/** Builds an SVG arc path `d` attribute between two angles (degrees) on a circle of radius r. */
export function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number
): string {
  const start = polarToCartesian(cx, cy, r, startAngle);
  const end = polarToCartesian(cx, cy, r, endAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
}
