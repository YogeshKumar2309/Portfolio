import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    base: './',
  server: {
    host: '0.0.0.0', 
  },
  plugins: [
    tailwindcss(),
  ],
})