export interface CustomCardEntry {
  type: string;
  name: string;
  description: string;
  preview?: boolean;
}

declare global {
  interface Window {
    customCards?: CustomCardEntry[];
  }
}

/** Registers a card with the Home Assistant Lovelace "Add Card" picker. */
export function registerCard(entry: CustomCardEntry): void {
  window.customCards = window.customCards || [];
  window.customCards.push(entry);
}
