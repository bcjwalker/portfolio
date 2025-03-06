import * as path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// vite.config.js / vite.config.ts

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },

  define: {
    // By default, Vite doesn't include shims for NodeJS/
    // necessary for segment analytics lib to work
    global: {},
  }
})
