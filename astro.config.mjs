import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  server: {
    port: 3000,
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [react()],
  output: 'static',
  site: 'https://santhosh.github.io',
  base: '/SANTHOSH-PORTFOLIO'
});
