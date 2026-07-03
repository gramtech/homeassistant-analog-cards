import { makeCardConfig } from '../../tools/rollup-card.mjs';

export default makeCardConfig({
  input: 'src/analog-thermometer-mercury-card.ts',
  outputFile: 'analog-thermometer-mercury-card.js',
});
