// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { EnumChangefreq } from 'sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.saorsa.ca',
  integrations: [
    react(),
    sitemap({
      changefreq: EnumChangefreq.WEEKLY,
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        if (item.url === 'https://www.saorsa.ca/') {
          return { ...item, priority: 1.0, changefreq: EnumChangefreq.DAILY };
        }
        if (item.url.includes('/development/') || item.url.includes('/content/')) {
          return { ...item, priority: 0.9, changefreq: EnumChangefreq.WEEKLY };
        }
        if (item.url.includes('/about/')) {
          return { ...item, priority: 0.7, changefreq: EnumChangefreq.MONTHLY };
        }
        if (item.url.includes('/contact/')) {
          return { ...item, priority: 0.6, changefreq: EnumChangefreq.MONTHLY };
        }
        return item;
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});