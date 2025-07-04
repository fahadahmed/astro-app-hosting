// @ts-check
import { defineConfig } from 'astro/config';
import firebase from '@apphosting/astro-adapter';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: firebase({
    mode: 'standalone',
  }),
});
