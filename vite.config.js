import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    assetsInlineLimit: 32768,
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
  },
})
