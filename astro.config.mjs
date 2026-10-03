import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://fmonitap.github.io',
  base: '/FPatino_Portfolio',
  trailingSlash: 'always',
  redirects: {
    '/experience/': '/FPatino_Portfolio/about/#experience',
    '/contact/': '/FPatino_Portfolio/about/#contact',
  },
  vite: { plugins: [tailwindcss()] },
});
