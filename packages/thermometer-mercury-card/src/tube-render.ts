import { svg, SVGTemplateResult } from 'lit';
import { generateLinearTicks, silverGradientDefs, valueToPosition } from 'analog-cards-core';
import { TICK_STEPS } from './const';
import { TemperatureUnit } from './types';

const CENTER_X = 60;
const TUBE_TOP_Y = 20;
const BULB_CENTER_Y = 168;
const GLASS_HALF_WIDTH = 10;
const BULB_RADIUS = 20;
const WALL_THICKNESS = 4;
const LIQUID_HALF_WIDTH = GLASS_HALF_WIDTH - WALL_THICKNESS;
const LIQUID_BULB_RADIUS = BULB_RADIUS - WALL_THICKNESS;

/** Where the straight tube wall meets the bulb circle exactly (see joinY below) — the scale's minimum-value position. */
const AXIS_BOTTOM_Y = BULB_CENTER_Y - Math.sqrt(BULB_RADIUS * BULB_RADIUS - GLASS_HALF_WIDTH * GLASS_HALF_WIDTH);

const MAJOR_TICK_LEN = 8;
const MINOR_TICK_LEN = 4;
const TICK_INNER_X = CENTER_X + GLASS_HALF_WIDTH + 2;
const TICK_LABEL_X = TICK_INNER_X + MAJOR_TICK_LEN + 4;
const TREND_MARKER_X = CENTER_X - GLASS_HALF_WIDTH - 2;
const TREND_MARKER_LEN = 6;
const CLIP_ID = 'mercury-liquid-clip';

export interface TubeParams {
  min: number;
  max: number;
  unit: TemperatureUnit;
  value: number | null;
  pastValue: number | null;
  liquidColor: string;
}

/**
 * A single continuous silhouette — straight tube walls meeting a round bulb
 * at the exact point where the wall's vertical line intersects the bulb
 * circle — instead of a separate rect+circle, or a hand-tuned bezier
 * "shoulder" (which left a visible pinch where the curve met the circle).
 * Because `joinY` is the true intersection of the line x = centerX±halfWidth
 * with the circle of radius `bulbRadius`, the straight wall and the circle's
 * arc meet with no gap, overlap, or kink. Used for both the glass envelope
 * (outer half-width/radius) and the liquid cavity (inner half-width/radius).
 */
function envelopePath(halfWidth: number, bulbRadius: number): string {
  const left = CENTER_X - halfWidth;
  const right = CENTER_X + halfWidth;
  const joinOffset = Math.sqrt(bulbRadius * bulbRadius - halfWidth * halfWidth);
  const joinY = BULB_CENTER_Y - joinOffset;

  return [
    `M ${left} ${TUBE_TOP_Y}`,
    `L ${left} ${joinY}`,
    `A ${bulbRadius} ${bulbRadius} 0 1 0 ${right} ${joinY}`,
    `L ${right} ${TUBE_TOP_Y}`,
    `A ${halfWidth} ${halfWidth} 0 1 0 ${left} ${TUBE_TOP_Y}`,
    'Z',
  ].join(' ');
}

function renderTicks(min: number, max: number, unit: TemperatureUnit): SVGTemplateResult[] {
  const { major, minor } = TICK_STEPS[unit];
  const ticks = generateLinearTicks(min, max, major, minor, AXIS_BOTTOM_Y, TUBE_TOP_Y);
  return ticks.map((tick) => {
    const len = tick.major ? MAJOR_TICK_LEN : MINOR_TICK_LEN;
    const line = svg`<line
      x1=${TICK_INNER_X} y1=${tick.position} x2=${TICK_INNER_X + len} y2=${tick.position}
      class=${tick.major ? 'tick tick-major' : 'tick tick-minor'}
    />`;
    if (!tick.major) return line;
    const label = svg`<text x=${TICK_LABEL_X} y=${tick.position} class="tick-label" dominant-baseline="middle">${
      Math.round(tick.value * 10) / 10
    }</text>`;
    return svg`${line}${label}`;
  });
}

function renderTrendMarker(pastValue: number | null, min: number, max: number): SVGTemplateResult {
  if (pastValue === null) return svg``;
  const y = valueToPosition(pastValue, min, max, AXIS_BOTTOM_Y, TUBE_TOP_Y);
  return svg`<line
    x1=${TREND_MARKER_X - TREND_MARKER_LEN} y1=${y} x2=${TREND_MARKER_X} y2=${y}
    class="trend-marker"
  />`;
}

function renderLiquid(value: number | null, min: number, max: number, color: string): SVGTemplateResult {
  if (value === null) return svg``;
  const topY = valueToPosition(value, min, max, AXIS_BOTTOM_Y, TUBE_TOP_Y);
  const clipBottom = BULB_CENTER_Y + BULB_RADIUS + 4;
  return svg`
    <defs>
      <clipPath id=${CLIP_ID}>
        <rect x="0" y=${topY} width="140" height=${clipBottom - topY} />
      </clipPath>
    </defs>
    <path d=${envelopePath(LIQUID_HALF_WIDTH, LIQUID_BULB_RADIUS)} class="liquid" fill=${color} clip-path=${`url(#${CLIP_ID})`} />
  `;
}

export function renderTube(params: TubeParams): SVGTemplateResult {
  const { min, max, unit, value, pastValue, liquidColor } = params;
  return svg`
    <svg viewBox="0 0 140 200" class="tube-dial" role="img" aria-label="Mercury thermometer">
      <defs>${silverGradientDefs()}</defs>
      <rect x="14" y="4" width="112" height="188" rx="10" class="backing" />
      ${renderTicks(min, max, unit)}
      ${renderTrendMarker(pastValue, min, max)}
      ${renderLiquid(value, min, max, liquidColor)}
      <path d=${envelopePath(GLASS_HALF_WIDTH, BULB_RADIUS)} class="glass" />
      <line
        x1=${CENTER_X - GLASS_HALF_WIDTH + 3} y1=${TUBE_TOP_Y + 6}
        x2=${CENTER_X - GLASS_HALF_WIDTH + 3} y2=${AXIS_BOTTOM_Y - 6}
        class="glass-highlight"
      />
      <ellipse cx=${CENTER_X - 6} cy=${BULB_CENTER_Y - 6} rx="4" ry="6" class="bulb-highlight" />
    </svg>
  `;
}
