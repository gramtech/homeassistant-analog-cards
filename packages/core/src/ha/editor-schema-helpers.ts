import { FACE_STYLE_OPTIONS } from '../theming/face-style';
import { TREND_TEXT_SIZE_OPTIONS } from '../theming/trend-text-size';

/** An entity-picker field, e.g. `entityField('sensor')` restricts the picker to that domain. */
export function entityField(domain: string) {
  return { name: 'entity', selector: { entity: { domain } } } as const;
}

export function textField(name: string) {
  return { name, selector: { text: {} } } as const;
}

export function numberField(
  name: string,
  options: { min?: number; max?: number; step?: number }
) {
  return { name, selector: { number: { ...options, mode: 'box' as const } } } as const;
}

export function selectField(name: string, options: ReadonlyArray<{ value: string; label: string }>) {
  return { name, selector: { select: { mode: 'dropdown' as const, options } } } as const;
}

/** Shared face-style dropdown field, reused by every card's editor schema. */
export function faceStyleField() {
  return selectField('face_style', FACE_STYLE_OPTIONS);
}

/** Shared trend-text-size dropdown field, reused by every card's editor schema. */
export function trendSizeField() {
  return selectField('trend_text_size', TREND_TEXT_SIZE_OPTIONS);
}

export function makeComputeLabel(
  labels: Record<string, string>
): (schema: { name: string }) => string {
  return (schema) => labels[schema.name] ?? schema.name;
}
