import { LitElement } from 'lit';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T = object> = new (...args: any[]) => T;

export declare class TickingHost {
  now: Date;
}

/**
 * Mixin for cards that redraw on a timer instead of on `hass` changes (e.g.
 * a clock face). Ticks `now` on an interval and calls `requestUpdate()`
 * directly rather than a `@state()` decorator, since decorators don't
 * compose cleanly with a generic mixin's return type.
 */
export function TickingMixin<T extends Constructor<LitElement>>(Base: T, intervalMs = 1000) {
  class Ticking extends Base {
    now: Date = new Date();

    private _intervalId?: ReturnType<typeof setInterval>;

    connectedCallback(): void {
      super.connectedCallback();
      this._tick();
      this._intervalId = setInterval(() => this._tick(), intervalMs);
    }

    disconnectedCallback(): void {
      super.disconnectedCallback();
      if (this._intervalId !== undefined) {
        clearInterval(this._intervalId);
        this._intervalId = undefined;
      }
    }

    private _tick(): void {
      this.now = new Date();
      this.requestUpdate();
    }
  }
  return Ticking as Constructor<TickingHost> & T;
}
