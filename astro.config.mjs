import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  server: {
    port: 3000,
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [react(), tailwind()],
  output: 'server',
  adapter: netlify()
});
