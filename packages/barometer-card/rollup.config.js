import { makeCardConfig } from '../../tools/rollup-card.mjs';

export default makeCardConfig({
  input: 'src/analog-barometer-card.ts',
  outputFile: 'analog-barometer-card.js',
});
