// @ts-check
import { defineConfig } from 'astro/config';

// import vercel from '@astrojs/vercel/static'

import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
    // adapter: vercel()
  },

  devToolbar: {
    enabled: false,
  },

  integrations: [react()],
  output: 'server',
  adapter: netlify(),
});