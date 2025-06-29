<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const languages = [
  { code: 'pt-BR', name: 'Português', flag: '🇧🇷' },
  { code: 'en-US', name: 'English', flag: '🇺🇸' },
  { code: 'es-ES', name: 'Español', flag: '🇪🇸' },
]

const changeLanguage = (langCode) => {
  locale.value = langCode
  localStorage.setItem('language', langCode)
}
</script>

<template>
  <div class="language-selector">
    <div class="language-options">
      <button
        v-for="lang in languages"
        :key="lang.code"
        @click="changeLanguage(lang.code)"
        :class="{ active: locale === lang.code }"
        class="language-btn"
        :title="lang.name"
      >
        <span class="flag">{{ lang.flag }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.language-selector {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.language-options {
  display: flex;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 0.75rem 1rem;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.language-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid transparent;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  backdrop-filter: blur(5px);
}

.language-btn:hover {
  border-color: rgba(255, 255, 255, 0.6);
  background-color: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.language-btn.active {
  border-color: rgba(255, 255, 255, 0.8);
  background-color: rgba(255, 255, 255, 0.4);
  transform: scale(1.15);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.flag {
  font-size: 1.8rem;
  line-height: 1;
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3));
}

@media (max-width: 768px) {
  .language-options {
    gap: 0.75rem;
    padding: 0.5rem 0.75rem;
  }

  .language-btn {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  .flag {
    font-size: 1.5rem;
  }
}
</style>
