// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind(),
  ],
  site: 'https://henrik-smith.github.io',
  base: '/christinaskei',
});
