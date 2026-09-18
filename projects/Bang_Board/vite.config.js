import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  optimizeDeps: { exclude: ['@tldraw/assets'] },
})
