/// <reference types="vitest/config" />
import fs from 'node:fs'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { faviconFromConfig } from './vite-plugin-favicon.ts'
import { blogPosts } from './vite-plugin-blog-posts.ts'
import { spaFallback404 } from './vite-plugin-spa-fallback.ts'

// Single source of truth for the deployed base path (ST-061, ST-062): both
// the router's `basename` and Vite's `base` derive from this one value.
const { basePath } = JSON.parse(
  fs.readFileSync(path.resolve(import.meta.dirname, 'src/data/site.config.json'), 'utf-8'),
) as { basePath: string }

// https://vite.dev/config/
export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss(), faviconFromConfig(), blogPosts(), spaFallback404()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
  },
})
