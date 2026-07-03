import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';

export function makeCardConfig({ input, outputFile }) {
  return {
    input,
    output: {
      file: `dist/${outputFile}`,
      format: 'es',
      inlineDynamicImports: true,
    },
    plugins: [resolve(), json(), typescript({ outDir: 'dist', declaration: false }), terser()],
  };
}
