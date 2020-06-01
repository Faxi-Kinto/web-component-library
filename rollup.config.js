import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';

import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    // json(),
    external(),
    resolve({ extensions }),
    // commonjs(),
    // css(),
    typescript(),
    // babel({
    //   extensions,
    //   babelHelpers: 'runtime',
    //   include: ['src/**/*'],
    // }),
  ],
};
