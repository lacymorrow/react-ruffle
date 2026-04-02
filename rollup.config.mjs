import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from '@rollup/plugin-terser';
import typescript from "@rollup/plugin-typescript";
import { createRequire } from "module";
import dts from "rollup-plugin-dts";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from "rollup-plugin-postcss";

const require = createRequire(import.meta.url);
const packageJson = require("./package.json");

const sharedPlugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  postcss(),
  terser(),
];

const tsExclude = ["**/*.test.*", "**/*.stories.*"];

export default [
  // CJS build (no declaration files)
  {
    input: "src/index.ts",
    output: {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    plugins: [
      ...sharedPlugins.slice(0, 3),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: tsExclude,
        declaration: false,
      }),
      ...sharedPlugins.slice(3),
    ],
  },
  // ESM build (with declaration files placed inside dist/esm/)
  {
    input: "src/index.ts",
    output: {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
    plugins: [
      ...sharedPlugins.slice(0, 3),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: tsExclude,
        declaration: true,
        declarationDir: "dist/esm/types",
        rootDir: "src",
      }),
      ...sharedPlugins.slice(3),
    ],
  },
  // Type definitions bundle
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.s?css$/],
  },
];
