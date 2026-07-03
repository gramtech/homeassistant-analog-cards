export interface HassEntity {
  entity_id: string;
  state: string;
  last_changed: string;
  last_updated: string;
  attributes: {
    friendly_name?: string;
    unit_of_measurement?: string;
    device_class?: string;
    [key: string]: unknown;
  };
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  callApi<T>(method: 'GET' | 'POST', path: string): Promise<T>;
  language?: string;
}

/** Fields every card config shares; individual cards extend this with their own options. */
export interface BaseCardConfig {
  type: string;
  entity: string;
  name?: string;
}

/** Standard HA custom-card event dispatch helper. */
export function fireEvent(
  node: HTMLElement,
  type: string,
  detail: Record<string, unknown> = {},
  options: { bubbles?: boolean; cancelable?: boolean; composed?: boolean } = {}
): void {
  const event = new CustomEvent(type, {
    bubbles: options.bubbles ?? true,
    cancelable: options.cancelable ?? false,
    composed: options.composed ?? true,
    detail,
  });
  node.dispatchEvent(event);
}
