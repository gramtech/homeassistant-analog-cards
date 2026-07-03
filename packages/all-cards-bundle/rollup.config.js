import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';

// Not using tools/rollup-card.mjs's factory: this bundle's output must land
// at the repo root's dist/ (not this package's own dist/), matching the
// root hacs.json's expectations for a single combined HACS resource.
export default {
  input: 'src/index.ts',
  output: {
    file: '../../dist/analog-cards.js',
    format: 'es',
    inlineDynamicImports: true,
  },
  plugins: [resolve(), json(), typescript({ outDir: '../../dist', declaration: false }), terser()],
};
