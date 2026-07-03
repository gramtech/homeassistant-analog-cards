import { LitElement, PropertyValues, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { registerCard, tubeFaceTokens } from 'analog-cards-core';
import {
  CARD_TAG,
  DEFAULT_FACE_STYLE,
  DEFAULT_TREND_HOURS,
  EDITOR_TAG,
  LIQUID_COLOR_BY_STYLE,
} from './const';
import { renderTube } from './tube-render';
import { createTrendTracker } from './trend';
import { HomeAssistant, AnalogThermometerMercuryCardConfig, TrendDirection } from './types';
import { convert, detectUnit, getDefaultRange, getDefaultThreshold } from './unit-utils';
import './analog-thermometer-mercury-card-editor';

const TREND_ARROWS: Record<TrendDirection, string> = {
  rising: '↑',
  falling: '↓',
  steady: '→',
  unknown: '',
};

const TREND_LABELS: Record<TrendDirection, string> = {
  rising: 'Rising',
  falling: 'Falling',
  steady: 'Steady',
  unknown: '',
};

@customElement(CARD_TAG)
export class AnalogThermometerMercuryCard extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;

  @state() private _config?: AnalogThermometerMercuryCardConfig;
  @state() private _trendDirection: TrendDirection = 'unknown';
  @state() private _pastValueDisplay: number | null = null;

  private _tracker = createTrendTracker();
  private _lastEntityUpdate: string | null = null;

  setConfig(config: AnalogThermometerMercuryCardConfig): void {
    if (!config.entity) {
      throw new Error('You must specify a temperature sensor entity.');
    }
    this._config = config;
  }

  getCardSize(): number {
    return 4;
  }

  static getConfigElement(): HTMLElement {
    return document.createElement(EDITOR_TAG);
  }

  static getStubConfig(hass: HomeAssistant): Partial<AnalogThermometerMercuryCardConfig> {
    const match = Object.values(hass?.states ?? {}).find(
      (entity) =>
        entity.entity_id.startsWith('sensor.') && entity.attributes.device_class === 'temperature'
    );
    return { type: 'custom:analog-thermometer-mercury-card', entity: match?.entity_id ?? '' };
  }

  protected willUpdate(changed: PropertyValues): void {
    if (changed.has('hass')) {
      this._maybeUpdateTrend();
    }
  }

  private _maybeUpdateTrend(): void {
    if (!this.hass || !this._config?.entity) return;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return;

    const rawValue = parseFloat(stateObj.state);
    if (!Number.isFinite(rawValue)) return;

    const nativeUnit = detectUnit(this.hass, this._config.entity);
    const displayUnit = this._config.unit ?? nativeUnit;
    const currentDisplay = convert(rawValue, nativeUnit, displayUnit);
    const hoursAgo = this._config.trend_hours ?? DEFAULT_TREND_HOURS;
    const threshold = this._config.trend_threshold ?? getDefaultThreshold(displayUnit);

    if (this._lastEntityUpdate === stateObj.last_updated) {
      return;
    }
    this._lastEntityUpdate = stateObj.last_updated;

    const cached = this._tracker.update(
      this.hass,
      this._config.entity,
      currentDisplay,
      nativeUnit,
      displayUnit,
      hoursAgo,
      threshold,
      (entry) => {
        this._trendDirection = entry.direction;
        this._pastValueDisplay = entry.pastValueDisplay;
      }
    );
    this._trendDirection = cached?.direction ?? 'unknown';
    this._pastValueDisplay = cached?.pastValueDisplay ?? null;
  }

  protected render() {
    if (!this._config || !this.hass) return html``;

    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) {
      return html`<ha-card>
        <div class="warning">Entity not found: ${this._config.entity}</div>
      </ha-card>`;
    }

    const nativeUnit = detectUnit(this.hass, this._config.entity);
    const displayUnit = this._config.unit ?? nativeUnit;
    const rawValue = parseFloat(stateObj.state);
    const hasValue = Number.isFinite(rawValue);
    const currentDisplay = hasValue ? convert(rawValue, nativeUnit, displayUnit) : null;

    const defaultRange = getDefaultRange(displayUnit);
    const min = this._config.min ?? defaultRange.min;
    const max = this._config.max ?? defaultRange.max;
    const faceStyle = this._config.face_style ?? DEFAULT_FACE_STYLE;
    // Fixed (not theme-linked): see analog-barometer-card.ts for why the
    // liquid color is driven by face style rather than the HA theme.
    const liquidColor = this._config.liquid_color || LIQUID_COLOR_BY_STYLE[faceStyle];
    const name = this._config.name ?? stateObj.attributes.friendly_name ?? this._config.entity;

    return html`
      <ha-card>
        <div class=${classMap({ 'card-content': true, [`style-${faceStyle}`]: true })}>
          <div class="title">${name}</div>
          ${renderTube({
            min,
            max,
            unit: displayUnit,
            value: currentDisplay,
            pastValue: this._pastValueDisplay,
            liquidColor,
          })}
          <div class="readout">
            <span class="value">${hasValue ? currentDisplay!.toFixed(1) : '--'}</span>
            <span class="unit">${displayUnit}</span>
          </div>
          <div class="trend trend-${this._trendDirection}">
            <span class="arrow">${TREND_ARROWS[this._trendDirection]}</span>
            <span class="label">${TREND_LABELS[this._trendDirection]}</span>
          </div>
        </div>
      </ha-card>
    `;
  }

  static styles = [
    tubeFaceTokens,
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
      .warning {
        padding: 16px;
        color: var(--error-color, #db4437);
      }
      .tube-dial {
        width: 100%;
        max-width: 140px;
        height: auto;
      }
      .backing {
        fill: var(--tube-backing-fill);
        stroke: var(--tube-backing-stroke);
        stroke-width: 1;
      }
      .glass {
        fill: var(--tube-glass-fill);
        stroke: var(--tube-glass-stroke);
        stroke-width: 1.5;
      }
      .glass-bulb-ring {
        fill: none;
        stroke: var(--tube-glass-stroke);
        stroke-width: 1.5;
      }
      .bulb-highlight {
        fill: rgba(255, 255, 255, 0.5);
      }
      .tick {
        stroke: var(--tube-tick-stroke);
        filter: var(--tube-tick-filter);
      }
      .tick-major {
        stroke-width: 1.6;
      }
      .tick-minor {
        stroke-width: 0.8;
        opacity: 0.7;
      }
      .tick-label {
        font-size: 9px;
        fill: var(--tube-tick-label-fill);
      }
      .trend-marker {
        stroke: var(--tube-tick-stroke);
        stroke-width: 1.5;
        opacity: 0.55;
      }
      .liquid,
      .bulb {
        filter: var(--tube-liquid-filter);
      }
      .readout {
        margin-top: 4px;
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--primary-text-color, #212121);
      }
      .readout .unit {
        font-size: 0.9rem;
        font-weight: 400;
        margin-left: 4px;
        color: var(--secondary-text-color, #727272);
      }
      .trend {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 0.9rem;
        margin-top: 2px;
      }
      .trend-rising {
        color: #c0392b;
      }
      .trend-falling {
        color: #2471a3;
      }
      .trend-steady {
        color: #27633f;
      }
      .trend .arrow {
        font-size: 1.1rem;
        line-height: 1;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    [CARD_TAG]: AnalogThermometerMercuryCard;
  }
}

registerCard({
  type: CARD_TAG,
  name: 'Analog Thermometer (Mercury)',
  description: 'A classic mercury-tube style thermometer with temperature trend tracking.',
});
