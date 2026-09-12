/// <reference types="vitest/config" />
import path from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { faviconFromConfig } from './vite-plugin-favicon.ts'
import { blogPosts } from './vite-plugin-blog-posts.ts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), faviconFromConfig(), blogPosts()],
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
