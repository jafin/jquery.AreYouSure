import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    //TODO: Remove global suffix.
    ['jquery.are-you-sure']: 'src/index.ts'
  },
  target: ['es6'],
  splitting: false,
  sourcemap: true,
  minify: false,
  clean: true,
  format: ['iife'],
  external: ['jQuery','jquery'],
})