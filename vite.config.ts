import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'es2021',
    rollupOptions: {
      input: {
        desktop: 'src/main.ts'
      },
      output: {
        format: 'iife',
        entryFileNames: 'app.js'
      }
    }
  }
})
