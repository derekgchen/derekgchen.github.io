// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://derekgchen.github.io',
  // Keep source whitespace: compression drops spaces at line breaks before inline tags.
  compressHTML: false,
  // Experience has one page per category; send the bare path to the first.
  redirects: {
    '/experience': '/experience/research/',
  },
});
