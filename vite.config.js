import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    // Minification with esbuild (faster than terser)
    minify: 'esbuild',
    // Target modern browsers for smaller bundle
    target: 'es2020',
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks
          'vue-vendor': ['vue'],
          'swiper-vendor': ['swiper', 'swiper/vue'],
          'three-vendor': ['three']
        }
      }
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    // CSS code splitting
    cssCodeSplit: true,
    // Source maps only for errors
    sourcemap: false
  }
})
