import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  // Correção: O base deve ser o caminho público no servidor,
  // que no GitHub Pages é /<nome-do-repositorio>/
  base: '/Residencial-Maresias/',
  resolve: {
    alias: {
      // O alias continua correto, relativo a este arquivo de config
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
