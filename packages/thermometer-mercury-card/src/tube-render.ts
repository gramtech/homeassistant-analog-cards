import { svg, SVGTemplateResult } from 'lit';
import { generateLinearTicks, silverGradientDefs, valueToPosition } from 'analog-cards-core';
import { TICK_STEPS } from './const';
import { TemperatureUnit } from './types';

const CENTER_X = 60;
const TUBE_TOP_Y = 16;
const TUBE_BOTTOM_Y = 185;
const BULB_CENTER_Y = 205;
const BULB_RADIUS = 20;
const GLASS_HALF_WIDTH = 12;
const LIQUID_HALF_WIDTH = 7;
const LIQUID_BULB_OVERLAP = 8;
const MAJOR_TICK_LEN = 8;
const MINOR_TICK_LEN = 4;
const TICK_INNER_X = CENTER_X + GLASS_HALF_WIDTH + 2;
const TICK_LABEL_X = TICK_INNER_X + MAJOR_TICK_LEN + 4;
const TREND_MARKER_X = CENTER_X - GLASS_HALF_WIDTH - 2;
const TREND_MARKER_LEN = 6;

export interface TubeParams {
  min: number;
  max: number;
  unit: TemperatureUnit;
  value: number | null;
  pastValue: number | null;
  liquidColor: string;
}

function renderTicks(min: number, max: number, unit: TemperatureUnit): SVGTemplateResult[] {
  const { major, minor } = TICK_STEPS[unit];
  const ticks = generateLinearTicks(min, max, major, minor, TUBE_BOTTOM_Y, TUBE_TOP_Y);
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
  const y = valueToPosition(pastValue, min, max, TUBE_BOTTOM_Y, TUBE_TOP_Y);
  return svg`<line
    x1=${TREND_MARKER_X - TREND_MARKER_LEN} y1=${y} x2=${TREND_MARKER_X} y2=${y}
    class="trend-marker"
  />`;
}

function renderLiquid(value: number | null, min: number, max: number, color: string): SVGTemplateResult {
  if (value === null) return svg``;
  const topY = valueToPosition(value, min, max, TUBE_BOTTOM_Y, TUBE_TOP_Y);
  const bottomY = TUBE_BOTTOM_Y + LIQUID_BULB_OVERLAP;
  const height = Math.max(0, bottomY - topY);
  return svg`
    <rect
      x=${CENTER_X - LIQUID_HALF_WIDTH}
      y=${topY}
      width=${LIQUID_HALF_WIDTH * 2}
      height=${height}
      rx=${LIQUID_HALF_WIDTH}
      class="liquid"
      fill=${color}
    />
    <circle cx=${CENTER_X} cy=${BULB_CENTER_Y} r=${BULB_RADIUS} class="bulb" fill=${color} />
  `;
}

export function renderTube(params: TubeParams): SVGTemplateResult {
  const { min, max, unit, value, pastValue, liquidColor } = params;
  return svg`
    <svg viewBox="0 0 140 240" class="tube-dial" role="img" aria-label="Mercury thermometer">
      <defs>${silverGradientDefs()}</defs>
      <rect x="18" y="4" width="104" height="228" rx="10" class="backing" />
      ${renderTicks(min, max, unit)}
      ${renderTrendMarker(pastValue, min, max)}
      ${renderLiquid(value, min, max, liquidColor)}
      <rect
        x=${CENTER_X - GLASS_HALF_WIDTH}
        y=${TUBE_TOP_Y}
        width=${GLASS_HALF_WIDTH * 2}
        height=${TUBE_BOTTOM_Y - TUBE_TOP_Y}
        rx=${GLASS_HALF_WIDTH}
        class="glass"
      />
      <circle cx=${CENTER_X} cy=${BULB_CENTER_Y} r=${BULB_RADIUS + 3} class="glass-bulb-ring" />
      <ellipse cx=${CENTER_X - 5} cy=${BULB_CENTER_Y - 6} rx="4" ry="7" class="bulb-highlight" />
    </svg>
  `;
}
