import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  site: 'https://lphcev.github.io',
  integrations: [mdx(), sitemap(), react()],
  vite: { plugins: [tailwindcss()] },
  markdown: { shikiConfig: { theme: 'catppuccin-mocha' } },
  server: {
    host: true,
    port: 3000,
  }
})
