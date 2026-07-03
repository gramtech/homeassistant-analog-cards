import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { EDITOR_TAG } from './const';
import { computeLabel, SCHEMA } from './editor-schema';
import { fireEvent, HomeAssistant, AnalogClockCardConfig } from './types';

/**
 * Uses HA's built-in <ha-form>, which is already registered by the Home
 * Assistant frontend at runtime — no local import/bundle needed.
 */
@customElement(EDITOR_TAG)
export class AnalogClockCardEditor extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;

  @state() private _config?: AnalogClockCardConfig;

  setConfig(config: AnalogClockCardConfig): void {
    this._config = config;
  }

  protected render() {
    if (!this.hass || !this._config) return html``;
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${SCHEMA}
        .computeLabel=${computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  private _valueChanged(ev: CustomEvent<{ value: AnalogClockCardConfig }>): void {
    fireEvent(this, 'config-changed', { config: ev.detail.value });
  }
}
