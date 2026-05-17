import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://samirgeorge.com',
  integrations: [tailwind(), react(), sitemap()],
  output: 'static',
  server: { allowedHosts: true },
});
