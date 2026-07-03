import { makeCardConfig } from '../../tools/rollup-card.mjs';

export default makeCardConfig({
  input: 'src/analog-clock-card.ts',
  outputFile: 'analog-clock-card.js',
});
