import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { DEFAULT_TREND_TEXT_SIZE } from 'analog-cards-core';
import { DEFAULT_FACE_STYLE, DEFAULT_TREND_HOURS, EDITOR_TAG, NEEDLE_COLOR_BY_STYLE } from './const';
import { computeLabel, SCHEMA } from './editor-schema';
import { fireEvent, HomeAssistant, AnalogHumidityRadialCardConfig } from './types';
import { getDefaultThreshold } from './unit-utils';

/**
 * Uses HA's built-in <ha-form>, which is already registered by the Home
 * Assistant frontend at runtime — no local import/bundle needed.
 */
@customElement(EDITOR_TAG)
export class AnalogHumidityRadialCardEditor extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;

  @state() private _config?: AnalogHumidityRadialCardConfig;

  setConfig(config: AnalogHumidityRadialCardConfig): void {
    this._config = config;
  }

  protected render() {
    if (!this.hass || !this._config) return html``;
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._effectiveData(this._config)}
        .schema=${SCHEMA}
        .computeLabel=${computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  /**
   * Merges in the same fallbacks the card itself applies at render time, so
   * the form shows what's actually in effect instead of blank placeholders.
   */
  private _effectiveData(config: AnalogHumidityRadialCardConfig): AnalogHumidityRadialCardConfig {
    const faceStyle = config.face_style ?? DEFAULT_FACE_STYLE;
    return {
      ...config,
      trend_hours: config.trend_hours ?? DEFAULT_TREND_HOURS,
      trend_threshold: config.trend_threshold ?? getDefaultThreshold('%'),
      trend_text_size: config.trend_text_size ?? DEFAULT_TREND_TEXT_SIZE,
      face_style: faceStyle,
      needle_color: config.needle_color || NEEDLE_COLOR_BY_STYLE[faceStyle],
    };
  }

  private _valueChanged(ev: CustomEvent<{ value: AnalogHumidityRadialCardConfig }>): void {
    fireEvent(this, 'config-changed', { config: ev.detail.value });
  }
}
