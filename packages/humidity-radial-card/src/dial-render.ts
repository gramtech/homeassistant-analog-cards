import { svg, SVGTemplateResult } from 'lit';
import { describeArc, generateTicks, polarToCartesian, silverGradientDefs, valueToAngle } from 'analog-cards-core';
import { DIAL_SCALE, TICK_STEPS, ZONES_PERCENT } from './const';

const CENTER = 100;
const ZONE_RADIUS = 86;
const ZONE_STROKE_WIDTH = 9;
const ZONE_LABEL_ARC_RADIUS = 77;
const TICK_OUTER_RADIUS = 72;
const MAJOR_TICK_LEN = 8;
const MINOR_TICK_LEN = 4;
const MAJOR_LABEL_RADIUS = 50;
const NEEDLE_LENGTH = 62;
const NEEDLE_TAIL = 14;
const TREND_MARKER_RADIUS = 95;
const TREND_MARKER_LEN = 7;

export interface DialParams {
  min: number;
  max: number;
  value: number | null;
  pastValue: number | null;
  needleColor: string;
}

function renderZoneArcs(min: number, max: number): SVGTemplateResult[] {
  return ZONES_PERCENT.map((zone) => {
    if (zone.to <= min || zone.from >= max) return svg``;
    const startAngle = valueToAngle(zone.from, min, max, DIAL_SCALE);
    const endAngle = valueToAngle(zone.to, min, max, DIAL_SCALE);
    if (endAngle <= startAngle) return svg``;
    const path = describeArc(CENTER, CENTER, ZONE_RADIUS, startAngle, endAngle);
    return svg`<path
      d=${path}
      stroke=${zone.color}
      stroke-width=${ZONE_STROKE_WIDTH}
      fill="none"
    />`;
  });
}

/** See analog-barometer-card's dial-render.ts for why zone labels follow a curved arc. */
function renderZoneLabels(min: number, max: number): SVGTemplateResult[] {
  return ZONES_PERCENT.map((zone) => {
    const from = Math.max(zone.from, min);
    const to = Math.min(zone.to, max);
    if (to <= from) return svg``;
    const startAngle = valueToAngle(from, min, max, DIAL_SCALE);
    const endAngle = valueToAngle(to, min, max, DIAL_SCALE);
    const pathId = `zone-label-path-${zone.key}`;
    const path = describeArc(CENTER, CENTER, ZONE_LABEL_ARC_RADIUS, startAngle, endAngle);
    return svg`
      <path id=${pathId} d=${path} fill="none" stroke="none" />
      <text class="zone-label" dominant-baseline="middle">
        <textPath href=${'#' + pathId} startOffset="50%" text-anchor="middle">${zone.label}</textPath>
      </text>
    `;
  });
}

function renderTicks(min: number, max: number): SVGTemplateResult[] {
  const { major, minor } = TICK_STEPS;
  const ticks = generateTicks(min, max, major, minor, DIAL_SCALE);
  return ticks.map((tick) => {
    const len = tick.major ? MAJOR_TICK_LEN : MINOR_TICK_LEN;
    const inner = polarToCartesian(CENTER, CENTER, TICK_OUTER_RADIUS - len, tick.angle);
    const outer = polarToCartesian(CENTER, CENTER, TICK_OUTER_RADIUS, tick.angle);
    const line = svg`<line
      x1=${inner.x} y1=${inner.y} x2=${outer.x} y2=${outer.y}
      class=${tick.major ? 'tick tick-major' : 'tick tick-minor'}
    />`;
    if (!tick.major) return line;
    const labelPos = polarToCartesian(CENTER, CENTER, MAJOR_LABEL_RADIUS, tick.angle);
    const label = svg`<text x=${labelPos.x} y=${labelPos.y} class="tick-label" text-anchor="middle" dominant-baseline="middle">${Math.round(
      tick.value * 10
    ) / 10}</text>`;
    return svg`${line}${label}`;
  });
}

function renderTrendMarker(pastValue: number | null, min: number, max: number): SVGTemplateResult {
  if (pastValue === null) return svg``;
  const angle = valueToAngle(pastValue, min, max, DIAL_SCALE);
  const inner = polarToCartesian(CENTER, CENTER, TREND_MARKER_RADIUS - TREND_MARKER_LEN, angle);
  const outer = polarToCartesian(CENTER, CENTER, TREND_MARKER_RADIUS, angle);
  return svg`<line
    x1=${inner.x} y1=${inner.y} x2=${outer.x} y2=${outer.y}
    class="trend-marker"
  />`;
}

function renderNeedle(value: number | null, min: number, max: number, color: string): SVGTemplateResult {
  if (value === null) return svg``;
  const angle = valueToAngle(value, min, max, DIAL_SCALE);
  return svg`<g class="needle" transform="rotate(${angle} ${CENTER} ${CENTER})">
    <polygon
      points="${CENTER},${CENTER - NEEDLE_LENGTH} ${CENTER - 3},${CENTER + NEEDLE_TAIL} ${CENTER + 3},${
    CENTER + NEEDLE_TAIL
  }"
      fill=${color}
    />
  </g>`;
}

export function renderDial(params: DialParams): SVGTemplateResult {
  const { min, max, value, pastValue, needleColor } = params;
  return svg`
    <svg viewBox="0 0 200 200" class="dial" role="img" aria-label="Hygrometer dial">
      <defs>${silverGradientDefs()}</defs>
      <circle cx=${CENTER} cy=${CENTER} r="97" class="bezel" />
      <circle cx=${CENTER} cy=${CENTER} r="90" class="face" />
      ${renderZoneArcs(min, max)}
      ${renderTicks(min, max)}
      ${renderZoneLabels(min, max)}
      ${renderTrendMarker(pastValue, min, max)}
      ${renderNeedle(value, min, max, needleColor)}
      <circle cx=${CENTER} cy=${CENTER} r="6" class="hub" />
    </svg>
  `;
}
