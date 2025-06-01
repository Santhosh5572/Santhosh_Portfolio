import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import staticAdapter from '@astrojs/adapter-static';

export default defineConfig({
  server: {
    port: 3000,
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [react()],
  output: 'static', // change output to static for this adapter
  adapter: staticAdapter(),
});
