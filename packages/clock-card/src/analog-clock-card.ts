import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { TickingMixin, radialFaceTokens, registerCard } from 'analog-cards-core';
import {
  CARD_TAG,
  DEFAULT_FACE_STYLE,
  DEFAULT_SECOND_HAND_MOTION,
  DEFAULT_SHOW_SECONDS,
  EDITOR_TAG,
  HAND_COLOR_BY_STYLE,
  SECOND_HAND_COLOR_BY_STYLE,
  TICK_INTERVAL_MS,
} from './const';
import { renderClock } from './clock-render';
import { AnalogClockCardConfig, HomeAssistant } from './types';
import './analog-clock-card-editor';

/** Applies the configured IANA time zone to `now`, if set; otherwise returns `now` unchanged (local time). */
function applyTimeZone(now: Date, timeZone?: string): Date {
  if (!timeZone) return now;
  try {
    return new Date(now.toLocaleString('en-US', { timeZone }));
  } catch {
    return now;
  }
}

const TickingBase = TickingMixin(LitElement, TICK_INTERVAL_MS);

@customElement(CARD_TAG)
export class AnalogClockCard extends TickingBase {
  @property({ attribute: false }) hass?: HomeAssistant;

  private _config?: AnalogClockCardConfig;

  setConfig(config: AnalogClockCardConfig): void {
    this._config = config;
  }

  getCardSize(): number {
    return 4;
  }

  static getConfigElement(): HTMLElement {
    return document.createElement(EDITOR_TAG);
  }

  static getStubConfig(): Partial<AnalogClockCardConfig> {
    return { type: 'custom:analog-clock-card' };
  }

  protected render() {
    if (!this._config) return html``;

    const faceStyle = this._config.face_style ?? DEFAULT_FACE_STYLE;
    const showSeconds = this._config.show_seconds ?? DEFAULT_SHOW_SECONDS;
    const motion = this._config.second_hand_motion ?? DEFAULT_SECOND_HAND_MOTION;
    const handColor = HAND_COLOR_BY_STYLE[faceStyle];
    const secondHandColor = SECOND_HAND_COLOR_BY_STYLE[faceStyle];
    const now = applyTimeZone(this.now, this._config.time_zone);

    return html`
      <ha-card>
        <div class=${classMap({ 'card-content': true, [`style-${faceStyle}`]: true })}>
          ${this._config.name ? html`<div class="title">${this._config.name}</div>` : ''}
          ${renderClock({
            now,
            showSeconds,
            smoothSeconds: motion === 'sweep',
            handColor,
            secondHandColor,
          })}
        </div>
      </ha-card>
    `;
  }

  static styles = [
    radialFaceTokens,
    css`
      :host {
        display: block;
      }
      .card-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;
      }
      .title {
        font-size: 1rem;
        font-weight: 500;
        color: var(--primary-text-color, #212121);
        margin-bottom: 4px;
        text-align: center;
      }
      .clock-dial {
        width: 100%;
        max-width: 260px;
        height: auto;
      }
      .bezel {
        fill: var(--gauge-bezel-fill);
        stroke: var(--gauge-bezel-stroke);
        stroke-width: 2;
      }
      .face {
        fill: var(--gauge-face-fill);
        stroke: var(--gauge-face-stroke);
        stroke-width: 1;
      }
      .tick {
        stroke: var(--gauge-tick-stroke);
        filter: var(--gauge-tick-filter);
      }
      .tick-major {
        stroke-width: 2;
        filter: var(--gauge-tick-major-filter);
      }
      .tick-minor {
        stroke-width: 1;
        opacity: 0.6;
      }
      .numeral {
        font-size: 13px;
        font-weight: 600;
        fill: var(--gauge-tick-label-fill);
      }
      .hand {
        filter: var(--gauge-needle-filter);
      }
      .second-hand line {
        stroke-width: 1.2;
      }
      .hub {
        fill: var(--gauge-hub-fill);
        stroke: var(--gauge-hub-stroke);
        stroke-width: 1;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    [CARD_TAG]: AnalogClockCard;
  }
}

registerCard({
  type: CARD_TAG,
  name: 'Analog Clock',
  description: 'A classic analog clock face with hour, minute, and second hands.',
});
