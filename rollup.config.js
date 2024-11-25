import resolve from '@rollup/plugin-node-resolve'
import scss from "rollup-plugin-scss"
import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

// @carbon/icons-react 依赖了 prop-types
const external = Object.keys(pkg.dependencies).concat(Object.keys(pkg.peerDependencies), [
  'rxjs/operators',
  'prop-types',
])

const config = (arg) => ({
  plugins: [
    typescript({
      tsconfig: "tsconfig.json",
    }),
    resolve({
      extensions: [".mjs", ".js", ".jsx", ".json", ".node"],
    }),
    scss({
      name: "table.css",
      fileName: "table.css",
      outputStyle: "compressed",
    }),
  ],
  external,
  treeshake: {
    moduleSideEffects: false,
  },
  ...arg,
});

const input = ['src/ali-react-table.ts', 'src/ali-react-table-pivot.ts']

export default [
  config({
    input: input,
    output: {
      dir: 'dist',
      format: 'esm',
      entryFileNames: '[name].esm.js',
      chunkFileNames: 'chunks/ali-react-table-[name]-[hash].esm.js',
    },
  }),
  config({
    input: input,
    output: {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].js',
      chunkFileNames: 'chunks/ali-react-table-[name]-[hash].js',
    },
  }),
]
