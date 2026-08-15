import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// Test-only config. Kept separate from vite.config.js so the production
// build config is never touched by test tooling.
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.js'],
    include: ['src/**/*.{test,spec}.{js,jsx}'],
  },
})
