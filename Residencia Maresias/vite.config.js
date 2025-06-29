import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  // Para domínio personalizado, usar caminhos relativos
  base: './',
  resolve: {
    alias: {
      // O alias continua correto, relativo a este arquivo de config
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
