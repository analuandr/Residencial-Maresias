import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

// Importar as traduções
import ptBR from './locales/pt-BR.js'
import enUS from './locales/en-US.js'
import esES from './locales/es-ES.js'

// Configurar i18n
const i18n = createI18n({
  legacy: false,
  locale: 'pt-BR',
  fallbackLocale: 'pt-BR',
  messages: {
    'pt-BR': ptBR,
    'en-US': enUS,
    'es-ES': esES,
  },
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
