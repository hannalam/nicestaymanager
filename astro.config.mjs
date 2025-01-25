import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.nicestaymanager.com',
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr-FR',
          en: 'en-US',
          zh: 'zh-TW',
          it: 'it-IT'
        }
      }
    })
  ],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'zh', 'it'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
