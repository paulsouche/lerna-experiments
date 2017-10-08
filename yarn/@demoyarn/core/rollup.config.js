import typescript from 'rollup-plugin-typescript2';

export default {
  input: './index.ts',
  output: {
    file: 'umd/index.js',
    format: 'umd',
    name: 'Demo.Core',
    sourcemap: true,
    sourcemapFile: 'umd/index.js.map',
  },
  plugins: [
    typescript(),
  ],
};
