import { svg, SVGTemplateResult } from 'lit';
import { hourAngle, minuteAngle, polarToCartesian, secondAngle, silverGradientDefs } from 'analog-cards-core';

const CENTER = 100;
const TICK_OUTER_RADIUS = 90;
const HOUR_TICK_LEN = 8;
const MINUTE_TICK_LEN = 4;
const NUMERAL_RADIUS = 74;

const HOUR_HAND_LENGTH = 45;
const HOUR_HAND_TAIL = 10;
const HOUR_HAND_WIDTH = 4;
const MINUTE_HAND_LENGTH = 68;
const MINUTE_HAND_TAIL = 12;
const MINUTE_HAND_WIDTH = 3;
const SECOND_HAND_LENGTH = 78;
const SECOND_HAND_TAIL = 18;

export interface ClockParams {
  now: Date;
  showSeconds: boolean;
  smoothSeconds: boolean;
  handColor: string;
  secondHandColor: string;
}

function renderTicks(): SVGTemplateResult[] {
  const ticks: SVGTemplateResult[] = [];
  for (let i = 0; i < 60; i++) {
    const angle = i * 6;
    const isHour = i % 5 === 0;
    const len = isHour ? HOUR_TICK_LEN : MINUTE_TICK_LEN;
    const inner = polarToCartesian(CENTER, CENTER, TICK_OUTER_RADIUS - len, angle);
    const outer = polarToCartesian(CENTER, CENTER, TICK_OUTER_RADIUS, angle);
    ticks.push(svg`<line
      x1=${inner.x} y1=${inner.y} x2=${outer.x} y2=${outer.y}
      class=${isHour ? 'tick tick-major' : 'tick tick-minor'}
    />`);
  }
  return ticks;
}

function renderNumerals(): SVGTemplateResult[] {
  const numerals: SVGTemplateResult[] = [];
  for (let hour = 1; hour <= 12; hour++) {
    const pos = polarToCartesian(CENTER, CENTER, NUMERAL_RADIUS, hour * 30);
    numerals.push(
      svg`<text x=${pos.x} y=${pos.y} class="numeral" text-anchor="middle" dominant-baseline="middle">${hour}</text>`
    );
  }
  return numerals;
}

function renderHand(
  angle: number,
  length: number,
  tail: number,
  halfWidth: number,
  color: string,
  cssClass: string
): SVGTemplateResult {
  return svg`<g class=${cssClass} transform="rotate(${angle} ${CENTER} ${CENTER})">
    <polygon
      points="${CENTER},${CENTER - length} ${CENTER - halfWidth},${CENTER + tail} ${CENTER + halfWidth},${
    CENTER + tail
  }"
      fill=${color}
    />
  </g>`;
}

function renderSecondHand(angle: number, color: string): SVGTemplateResult {
  return svg`<g class="hand second-hand" transform="rotate(${angle} ${CENTER} ${CENTER})">
    <line x1=${CENTER} y1=${CENTER + SECOND_HAND_TAIL} x2=${CENTER} y2=${CENTER - SECOND_HAND_LENGTH} stroke=${color} />
  </g>`;
}

export function renderClock(params: ClockParams): SVGTemplateResult {
  const { now, showSeconds, smoothSeconds, handColor, secondHandColor } = params;
  return svg`
    <svg viewBox="0 0 200 200" class="clock-dial" role="img" aria-label="Analog clock">
      <defs>${silverGradientDefs()}</defs>
      <circle cx=${CENTER} cy=${CENTER} r="97" class="bezel" />
      <circle cx=${CENTER} cy=${CENTER} r="90" class="face" />
      ${renderTicks()}
      ${renderNumerals()}
      ${renderHand(hourAngle(now), HOUR_HAND_LENGTH, HOUR_HAND_TAIL, HOUR_HAND_WIDTH, handColor, 'hand hour-hand')}
      ${renderHand(
        minuteAngle(now),
        MINUTE_HAND_LENGTH,
        MINUTE_HAND_TAIL,
        MINUTE_HAND_WIDTH,
        handColor,
        'hand minute-hand'
      )}
      ${showSeconds ? renderSecondHand(secondAngle(now, smoothSeconds), secondHandColor) : svg``}
      <circle cx=${CENTER} cy=${CENTER} r="6" class="hub" />
    </svg>
  `;
}
