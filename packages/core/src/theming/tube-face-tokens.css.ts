import { css } from 'lit';

/**
 * Shared CSS custom properties for the 7 face styles used by every vertical
 * tube+liquid card (mercury-style thermometer, and future tube-form cards
 * like a rain gauge). Mirrors radial-face-tokens.css.ts's role for dial
 * cards: each card's own static styles map structural selectors (.backing,
 * .glass, .tick, ...) to these var(--tube-*) tokens instead of redefining
 * the palette per card. Liquid/bulb fill color is set per style in each
 * card's own const.ts (like the radial dial's needle color) since it's an
 * inline SVG fill driven by the current value, not a static CSS rule.
 */
export const tubeFaceTokens = css`
  .style-classic {
    --tube-backing-fill: #f2e9d0;
    --tube-backing-stroke: #b8aa80;
    --tube-glass-fill: rgba(255, 255, 255, 0.25);
    --tube-glass-stroke: #7a6a45;
    --tube-tick-stroke: #4a4232;
    --tube-tick-filter: none;
    --tube-tick-label-fill: #3a3426;
    --tube-liquid-filter: none;
  }

  .style-silver {
    --tube-backing-fill: url(#gauge-silver-face);
    --tube-backing-stroke: #9a9a9a;
    --tube-glass-fill: rgba(255, 255, 255, 0.35);
    --tube-glass-stroke: #7a7a7a;
    --tube-tick-stroke: #2b2b2b;
    --tube-tick-filter: none;
    --tube-tick-label-fill: #202020;
    --tube-liquid-filter: none;
  }

  .style-dark {
    --tube-backing-fill: #1c1c1f;
    --tube-backing-stroke: #000;
    --tube-glass-fill: rgba(255, 255, 255, 0.08);
    --tube-glass-stroke: #111113;
    --tube-tick-stroke: #d8d8d8;
    --tube-tick-filter: none;
    --tube-tick-label-fill: #e8e8e8;
    --tube-liquid-filter: none;
  }

  .style-light {
    --tube-backing-fill: #ffffff;
    --tube-backing-stroke: #e0e0e0;
    --tube-glass-fill: rgba(255, 255, 255, 0.4);
    --tube-glass-stroke: #cfcfcf;
    --tube-tick-stroke: #666;
    --tube-tick-filter: none;
    --tube-tick-label-fill: #444;
    --tube-liquid-filter: none;
  }

  .style-led-backlit {
    --tube-backing-fill: #05070a;
    --tube-backing-stroke: #000;
    --tube-glass-fill: rgba(53, 208, 255, 0.08);
    --tube-glass-stroke: #000;
    --tube-tick-stroke: #35d0ff;
    --tube-tick-filter: drop-shadow(0 0 2px #35d0ff);
    --tube-tick-label-fill: #a8ecff;
    --tube-liquid-filter: drop-shadow(0 0 3px #ff4d4d);
  }

  .style-fluorescent {
    --tube-backing-fill: #1c1f14;
    --tube-backing-stroke: #0e0f0a;
    --tube-glass-fill: rgba(186, 255, 41, 0.08);
    --tube-glass-stroke: #1a1810;
    --tube-tick-stroke: #baff29;
    --tube-tick-filter: drop-shadow(0 0 2px #baff29);
    --tube-tick-label-fill: #d4ff7a;
    --tube-liquid-filter: drop-shadow(0 0 3px #baff29);
  }

  .style-futuristic {
    --tube-backing-fill: #0b0e14;
    --tube-backing-stroke: #131a24;
    --tube-glass-fill: rgba(0, 229, 255, 0.08);
    --tube-glass-stroke: #00e5ff;
    --tube-tick-stroke: #00e5ff;
    --tube-tick-filter: none;
    --tube-tick-label-fill: #7df9ff;
    --tube-liquid-filter: drop-shadow(0 0 3px #ff2fd0);
  }
`;
