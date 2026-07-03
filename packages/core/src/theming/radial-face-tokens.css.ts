import { css, svg, SVGTemplateResult } from 'lit';

/**
 * Shared CSS custom properties for the 7 face styles used by every radial
 * dial card (bezel/face/tick/hub colors, needle glow). Each card's own
 * static styles map its structural selectors (.bezel, .face, .tick, ...)
 * to these var(--gauge-*) tokens instead of redefining the color palette
 * per card. The "silver" style's fill values reference SVG gradient defs
 * by a fixed id (`gauge-silver-face` / `gauge-silver-bezel`) that every
 * consuming card's dial renderer must define — safe to reuse the same
 * literal ids across cards since each card is its own shadow root.
 */
export const radialFaceTokens = css`
  .style-classic {
    --gauge-bezel-fill: #cfc3a5;
    --gauge-bezel-stroke: #7a6a45;
    --gauge-face-fill: #f2e9d0;
    --gauge-face-stroke: #b8aa80;
    --gauge-tick-stroke: #4a4232;
    --gauge-tick-filter: none;
    --gauge-tick-major-filter: none;
    --gauge-tick-label-fill: #3a3426;
    --gauge-tick-label-filter: none;
    --gauge-zone-label-fill: #2b2b2b;
    --gauge-hub-fill: #333;
    --gauge-hub-stroke: #111;
    --gauge-trend-marker-stroke: #555;
    --gauge-needle-filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.4));
  }

  /* Silver: brushed-metal gradients standing in for a real chrome case. */
  .style-silver {
    --gauge-bezel-fill: url(#gauge-silver-bezel);
    --gauge-bezel-stroke: #7a7a7a;
    --gauge-face-fill: url(#gauge-silver-face);
    --gauge-face-stroke: #9a9a9a;
    --gauge-tick-stroke: #2b2b2b;
    --gauge-tick-filter: none;
    --gauge-tick-major-filter: none;
    --gauge-tick-label-fill: #202020;
    --gauge-tick-label-filter: none;
    --gauge-zone-label-fill: #1a1a1a;
    --gauge-hub-fill: #3a3a3a;
    --gauge-hub-stroke: #111;
    --gauge-trend-marker-stroke: #444;
    --gauge-needle-filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.4));
  }

  /* Dark: charcoal face for dark dashboards, no glow. */
  .style-dark {
    --gauge-bezel-fill: #2b2b2e;
    --gauge-bezel-stroke: #111113;
    --gauge-face-fill: #1c1c1f;
    --gauge-face-stroke: #000;
    --gauge-tick-stroke: #d8d8d8;
    --gauge-tick-filter: none;
    --gauge-tick-major-filter: none;
    --gauge-tick-label-fill: #e8e8e8;
    --gauge-tick-label-filter: none;
    --gauge-zone-label-fill: #f0f0f0;
    --gauge-hub-fill: #111;
    --gauge-hub-stroke: #555;
    --gauge-trend-marker-stroke: #bbb;
    --gauge-needle-filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.4));
  }

  /* Light: clean, minimal, high-key face. */
  .style-light {
    --gauge-bezel-fill: #f5f5f5;
    --gauge-bezel-stroke: #cfcfcf;
    --gauge-face-fill: #ffffff;
    --gauge-face-stroke: #e0e0e0;
    --gauge-tick-stroke: #666;
    --gauge-tick-filter: none;
    --gauge-tick-major-filter: none;
    --gauge-tick-label-fill: #444;
    --gauge-tick-label-filter: none;
    --gauge-zone-label-fill: #333;
    --gauge-hub-fill: #555;
    --gauge-hub-stroke: #333;
    --gauge-trend-marker-stroke: #999;
    --gauge-needle-filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.4));
  }

  /* LED backlit: black face, glowing cyan ticks like a backlit gauge. */
  .style-led-backlit {
    --gauge-bezel-fill: #0a0a0c;
    --gauge-bezel-stroke: #000;
    --gauge-face-fill: #05070a;
    --gauge-face-stroke: #000;
    --gauge-tick-stroke: #35d0ff;
    --gauge-tick-filter: drop-shadow(0 0 2px #35d0ff);
    --gauge-tick-major-filter: none;
    --gauge-tick-label-fill: #a8ecff;
    --gauge-tick-label-filter: drop-shadow(0 0 1px #35d0ff);
    --gauge-zone-label-fill: #cdf5ff;
    --gauge-hub-fill: #111;
    --gauge-hub-stroke: #35d0ff;
    --gauge-trend-marker-stroke: #35d0ff;
    --gauge-needle-filter: drop-shadow(0 0 3px #ff4d4d) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.6));
  }

  /* Fluorescent: old radium-dial glow-in-the-dark look. */
  .style-fluorescent {
    --gauge-bezel-fill: #2e2b1a;
    --gauge-bezel-stroke: #1a1810;
    --gauge-face-fill: #1c1f14;
    --gauge-face-stroke: #0e0f0a;
    --gauge-tick-stroke: #baff29;
    --gauge-tick-filter: drop-shadow(0 0 2px #baff29);
    --gauge-tick-major-filter: none;
    --gauge-tick-label-fill: #d4ff7a;
    --gauge-tick-label-filter: drop-shadow(0 0 1px #baff29);
    --gauge-zone-label-fill: #e8ffb0;
    --gauge-hub-fill: #232316;
    --gauge-hub-stroke: #baff29;
    --gauge-trend-marker-stroke: #baff29;
    --gauge-needle-filter: drop-shadow(0 0 3px #baff29) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.6));
  }

  /* Futuristic: dark face with neon cyan/magenta accents. */
  .style-futuristic {
    --gauge-bezel-fill: #10141c;
    --gauge-bezel-stroke: #00e5ff;
    --gauge-face-fill: #0b0e14;
    --gauge-face-stroke: #131a24;
    --gauge-tick-stroke: #00e5ff;
    --gauge-tick-filter: none;
    --gauge-tick-major-filter: drop-shadow(0 0 2px #00e5ff);
    --gauge-tick-label-fill: #7df9ff;
    --gauge-tick-label-filter: none;
    --gauge-zone-label-fill: #c7fbff;
    --gauge-hub-fill: #0b0e14;
    --gauge-hub-stroke: #ff2fd0;
    --gauge-trend-marker-stroke: #ff2fd0;
    --gauge-needle-filter: drop-shadow(0 0 3px #ff2fd0) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.6));
  }
`;

/** Shared SVG gradient defs backing the "silver" face style; every radial dial card's <defs> must include this. */
export function silverGradientDefs(): SVGTemplateResult {
  return svg`
    <radialGradient id="gauge-silver-face" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#fdfdfd" />
      <stop offset="55%" stop-color="#d8d8d8" />
      <stop offset="100%" stop-color="#a8a8a8" />
    </radialGradient>
    <linearGradient id="gauge-silver-bezel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f2f2f2" />
      <stop offset="25%" stop-color="#bdbdbd" />
      <stop offset="50%" stop-color="#e8e8e8" />
      <stop offset="75%" stop-color="#9c9c9c" />
      <stop offset="100%" stop-color="#e0e0e0" />
    </linearGradient>
  `;
}
