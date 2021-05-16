import { defineConfig } from 'vite'
import config from './config'

export default defineConfig({
  base: config.pathPrefix,
  logLevel: 'warn',
  server: {
    host: '0.0.0.0'
  },
  build: {
    rollupOptions: {
      input: 'src/scripts/main.ts',
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]'
      }
    },
    manifest: true
  }
})
