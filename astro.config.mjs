import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://fmonitap.github.io',
  base: '/FPatino_Portfolio',
  trailingSlash: 'always',
  vite: { plugins: [tailwindcss()] },
});
