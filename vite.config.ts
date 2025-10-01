import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base so assets are referenced as ./assets/... in dist
  base: './',
  server: {
    allowedHosts: true
  }
})