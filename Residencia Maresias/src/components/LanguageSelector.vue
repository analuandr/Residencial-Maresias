<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const languages = [
  { code: 'pt-BR', name: 'Português', flag: 'br' },
  { code: 'en-US', name: 'English', flag: 'us' },
  { code: 'es-ES', name: 'Español', flag: 'es' },
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
        <span class="flag" :class="`flag-${lang.flag}`"></span>
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
  width: 20px;
  height: 15px;
  border-radius: 2px;
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

/* Bandeira do Brasil */
.flag-br {
  background: #009739; /* Verde como base */
  position: relative;
  overflow: hidden;
}

.flag-br::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 10px;
  height: 10px; /* Mudado de 8px para 10px para ficar quadrado */
  background: #fedd00;
  border-radius: 1px;
}

.flag-br::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  background: #012169;
  border-radius: 50%;
  z-index: 2;
}

/* Bandeira dos EUA */
.flag-us {
  background: linear-gradient(
    to bottom,
    #b22234 0%,
    #b22234 7.7%,
    #ffffff 7.7%,
    #ffffff 15.4%,
    #b22234 15.4%,
    #b22234 23.1%,
    #ffffff 23.1%,
    #ffffff 30.8%,
    #b22234 30.8%,
    #b22234 38.5%,
    #ffffff 38.5%,
    #ffffff 46.2%,
    #b22234 46.2%,
    #b22234 53.9%,
    #ffffff 53.9%,
    #ffffff 61.6%,
    #b22234 61.6%,
    #b22234 69.3%,
    #ffffff 69.3%,
    #ffffff 77%,
    #b22234 77%,
    #b22234 84.7%,
    #ffffff 84.7%,
    #ffffff 92.4%,
    #b22234 92.4%
  );
  position: relative;
}

.flag-us::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 53.8%;
  background: #3c3b6e;
}

/* Bandeira da Espanha */
.flag-es {
  background: linear-gradient(
    to bottom,
    #c60b1e 0%,
    #c60b1e 25%,
    #ffc400 25%,
    #ffc400 75%,
    #c60b1e 75%,
    #c60b1e 100%
  );
}

@media (max-width: 768px) {
  .language-options {
    gap: 0.5rem;
    padding: 0.5rem 0.7rem;
    background: rgba(255, 255, 255, 0.15);
  }

  .language-btn {
    width: 38px;
    height: 38px;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.25);
  }

  .flag {
    width: 18px;
    height: 13px;
  }
}

@media (max-width: 480px) {
  .language-options {
    gap: 0.4rem;
    padding: 0.4rem 0.6rem;
    background: rgba(255, 255, 255, 0.2);
  }

  .language-btn {
    width: 36px;
    height: 36px;
    font-size: 0.9rem;
    background: rgba(255, 255, 255, 0.3);
  }

  .flag {
    width: 16px;
    height: 12px;
  }
}
</style>
