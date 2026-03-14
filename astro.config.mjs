import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://xn--sterriiser3-fgbi.no',
  vite: {
    plugins: [tailwindcss()],
  },
});
