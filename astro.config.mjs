import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://www.metelectrical.co.uk',
  integrations: [tailwind(), sitemap(), icon({ include: { tabler: ['*'] } })],
  output: 'static',
});

