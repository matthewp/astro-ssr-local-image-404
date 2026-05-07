import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  image: {
    endpoint: {
      // Force the generic endpoint instead of the node-specific one.
      // This is the endpoint used by Netlify/Vercel/Cloudflare-style deploys.
      entrypoint: 'astro/assets/endpoint/generic',
    },
  },
});
