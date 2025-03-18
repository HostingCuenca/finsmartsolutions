import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
// import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://finsmartsolutions.info',
  integrations: [
    tailwind(),
    sitemap()
  ]
});