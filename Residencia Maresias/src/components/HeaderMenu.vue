<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSelector from './LanguageSelector.vue'

const { t } = useI18n()

const showSubmenuResidencial = ref(false)
const showSubmenuAcomodacoes = ref(false)
const showSubmenuPraias = ref(false)
const showSubmenuReservar = ref(false)
const isScrolled = ref(false)
const headerHeight = ref(0)

// Controle do menu hamburger em telas pequenas
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Detectar quando o usuário rolar a página para mudar o estilo do menu
const handleScroll = () => {
  // Fixa o header apenas quando o scroll passar da altura do banner principal
  isScrolled.value = window.scrollY > headerHeight.value
}

onMounted(() => {
  // Calcula a altura total do header (incluindo o banner principal)
  const headerElement = document.querySelector('.beach-header-bg')
  if (headerElement) {
    headerHeight.value = headerElement.offsetHeight
  }
  window.addEventListener('scroll', handleScroll)
  // Chama imediatamente para verificar posição inicial
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="header-container" :class="{ scrolled: isScrolled }">
    <div class="beach-header-bg">
      <div class="beach-overlay">
        <div class="language-selector-container">
          <LanguageSelector />
        </div>
        <div class="logo-container">
          <RouterLink to="/" class="logo-link">
            <div class="brand-content">
              <div class="logo-section">
                <img src="/logo.png" alt="Logo Residencial Maresias" class="main-logo" />
              </div>
              <h1 class="main-title">{{ t('home.title') }}</h1>
              <div class="sub-brands">
                <RouterLink to="/residencial/bombas" class="sub-brand">{{
                  t('footer.locations.bombas')
                }}</RouterLink>
                <RouterLink to="/residencial/mariscal" class="sub-brand">{{
                  t('footer.locations.mariscal')
                }}</RouterLink>
                <RouterLink to="/residencial/casa-jaboticabeira" class="sub-brand">{{
                  t('footer.locations.jaboticabeira')
                }}</RouterLink>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>

    <nav class="main-nav" :class="{ 'nav-scrolled': isScrolled }">
      <div class="container nav-container">
        <!-- Logo na Navegação (Esquerda) -->
        <RouterLink to="/" class="nav-logo-link">
          <img src="/logo.png" alt="Logo Maresias" class="nav-logo" />
        </RouterLink>

        <div class="nav-links-container">
          <div class="nav-links" :class="{ 'mobile-open': isMobileMenuOpen }">
            <div
              class="nav-item"
              @mouseenter="showSubmenuResidencial = true"
              @mouseleave="showSubmenuResidencial = false"
            >
              <RouterLink to="/residencial" class="nav-link">
                <span class="material-icons">home</span> {{ t('nav.residential') }}
              </RouterLink>
              <div class="submenu" v-if="showSubmenuResidencial">
                <RouterLink to="/residencial/bombas" class="submenu-item">
                  <span class="material-icons">apartment</span>
                  {{ t('footer.locations.bombas') }}
                </RouterLink>
                <RouterLink to="/residencial/mariscal" class="submenu-item">
                  <span class="material-icons">apartment</span>
                  {{ t('footer.locations.mariscal') }}
                </RouterLink>
                <RouterLink to="/residencial/casa-jaboticabeira" class="submenu-item">
                  <span class="material-icons">house</span>
                  {{ t('footer.locations.jaboticabeira') }}
                </RouterLink>
              </div>
            </div>

            <div
              class="nav-item"
              @mouseenter="showSubmenuAcomodacoes = true"
              @mouseleave="showSubmenuAcomodacoes = false"
            >
              <span class="nav-link">
                <span class="material-icons">bed</span> {{ t('nav.accommodations') }}
              </span>
              <div class="submenu" v-if="showSubmenuAcomodacoes">
                <div class="submenu-category">
                  <span class="material-icons">location_on</span> {{ t('footer.locations.bombas') }}
                </div>
                <RouterLink to="/acomodacoes/bombas/1-dormitorio" class="submenu-item">
                  <span class="material-icons">bed</span> {{ t('actions.oneBedroom') }}
                </RouterLink>
                <RouterLink to="/acomodacoes/bombas/2-dormitorios" class="submenu-item">
                  <span class="material-icons">hotel</span>
                  {{ t('actions.twoBedrooms') }}
                </RouterLink>

                <div class="submenu-category">
                  <span class="material-icons">location_on</span>
                  {{ t('footer.locations.mariscal') }}
                </div>
                <RouterLink to="/acomodacoes/mariscal/1-dormitorio" class="submenu-item">
                  <span class="material-icons">bed</span> {{ t('actions.oneBedroom') }}
                </RouterLink>
                <RouterLink to="/acomodacoes/mariscal/2-dormitorios" class="submenu-item">
                  <span class="material-icons">hotel</span>
                  {{ t('actions.twoBedrooms') }}
                </RouterLink>

                <div class="submenu-category">
                  <span class="material-icons">house</span>
                  {{ t('footer.locations.jaboticabeira') }}
                </div>
                <RouterLink to="/acomodacoes/casa-jaboticabeira/3-dormitorios" class="submenu-item">
                  <span class="material-icons">bedroom_parent</span> 3
                  {{ t('nav.accommodations') }}
                </RouterLink>
              </div>
            </div>

            <div
              class="nav-item"
              @mouseenter="showSubmenuPraias = true"
              @mouseleave="showSubmenuPraias = false"
            >
              <span class="nav-link">
                <span class="material-icons">beach_access</span> {{ t('nav.beaches') }}
              </span>
              <div class="submenu" v-if="showSubmenuPraias">
                <RouterLink to="/praias/bombas" class="submenu-item">
                  <span class="material-icons">waves</span>
                  {{ t('footer.locations.bombas') }}
                </RouterLink>
                <RouterLink to="/praias/mariscal" class="submenu-item">
                  <span class="material-icons">waves</span>
                  {{ t('footer.locations.mariscal') }}
                </RouterLink>
              </div>
            </div>

            <div class="nav-item">
              <RouterLink to="/contato" class="nav-link">
                <span class="material-icons">email</span> {{ t('nav.contact') }}
              </RouterLink>
            </div>

            <div
              class="nav-item"
              @mouseenter="showSubmenuReservar = true"
              @mouseleave="showSubmenuReservar = false"
            >
              <span class="nav-link btn-reservar">
                <span class="material-icons">calendar_today</span> {{ t('nav.reserve') }}
              </span>
              <div class="submenu" v-if="showSubmenuReservar">
                <div class="submenu-category">
                  <span class="material-icons">location_on</span> {{ t('footer.locations.bombas') }}
                </div>
                <RouterLink to="/acomodacoes/bombas/1-dormitorio" class="submenu-item">
                  <span class="material-icons">bed</span> {{ t('actions.oneBedroom') }}
                </RouterLink>
                <RouterLink to="/acomodacoes/bombas/2-dormitorios" class="submenu-item">
                  <span class="material-icons">hotel</span>
                  {{ t('actions.twoBedrooms') }}
                </RouterLink>

                <div class="submenu-category">
                  <span class="material-icons">location_on</span>
                  {{ t('footer.locations.mariscal') }}
                </div>
                <RouterLink to="/acomodacoes/mariscal/1-dormitorio" class="submenu-item">
                  <span class="material-icons">bed</span> {{ t('actions.oneBedroom') }}
                </RouterLink>
                <RouterLink to="/acomodacoes/mariscal/2-dormitorios" class="submenu-item">
                  <span class="material-icons">hotel</span>
                  {{ t('actions.twoBedrooms') }}
                </RouterLink>

                <div class="submenu-category">
                  <span class="material-icons">house</span>
                  {{ t('footer.locations.jaboticabeira') }}
                </div>
                <RouterLink to="/acomodacoes/casa-jaboticabeira/3-dormitorios" class="submenu-item">
                  <span class="material-icons">bedroom_parent</span> 3
                  {{ t('nav.accommodations') }}
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Botão do menu mobile -->
        <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header-container {
  position: relative;
  width: 100%;
}

.beach-header-bg {
  background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  height: 350px;
  width: 100%;
  position: relative;
}

.beach-overlay {
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.language-selector-container {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
}

.logo-container {
  text-align: center;
}

.brand-content {
  color: #fff;
  text-align: center;
}

.logo-section {
  margin-bottom: 1rem;
}

.main-logo {
  height: 80px;
  width: auto;
  filter: brightness(0) invert(1);
  drop-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.main-title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow:
    2px 2px 4px rgba(0, 0, 0, 0.8),
    1px 1px 2px rgba(0, 0, 0, 0.9),
    0 0 10px rgba(0, 0, 0, 0.6);
  font-family: var(--title-font);
  font-weight: 700;
  color: #fff;
}

.sub-brands {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
}

.sub-brand {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 500;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  color: #fff;
  display: inline-block;
}

.sub-brand:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  color: #fff;
  text-decoration: none;
}

.main-nav {
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.nav-scrolled {
  background-color: rgba(0, 0, 0, 0.95);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.nav-logo {
  height: 40px;
  width: auto;
  filter: brightness(0) invert(1);
}

.nav-links-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.btn-reservar {
  background: linear-gradient(45deg, var(--secondary-color), var(--accent-color));
  color: #fff !important;
  font-weight: 600;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.btn-reservar:hover {
  background: linear-gradient(45deg, var(--accent-color), var(--secondary-color));
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  min-width: 250px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 0.5rem 0;
  z-index: 1001;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
}

.nav-item:hover .submenu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.submenu-category {
  padding: 0.5rem 1rem;
  font-weight: 600;
  color: var(--primary-color);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.submenu-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  color: var(--dark-color);
  text-decoration: none;
  transition: all 0.3s ease;
}

.submenu-item:hover {
  background-color: var(--beach-bg-light);
  color: var(--primary-color);
}

.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  margin-left: auto;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background-color: #fff;
  transition: all 0.3s ease;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .main-title {
    font-size: 2.5rem;
  }

  .sub-brands {
    flex-direction: column;
    gap: 1rem;
  }

  .main-logo {
    height: 60px;
  }

  .mobile-menu-toggle {
    display: flex;
    z-index: 1002;
  }

  .nav-links-container {
    position: relative;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 4rem 1.5rem 2rem;
    gap: 0.5rem;
    transition: all 0.3s ease;
    z-index: 1001;
    overflow-y: auto;
    visibility: hidden;
    opacity: 0;
    display: none;
  }

  .nav-links.mobile-open {
    right: 0;
    visibility: visible;
    opacity: 1;
    display: flex;
  }

  .nav-item {
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .nav-link {
    width: 100%;
    justify-content: flex-start;
    padding: 0.75rem;
    border-radius: 8px;
    font-size: 1rem;
  }

  .submenu {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    background: rgba(255, 255, 255, 0.05);
    margin-top: 0.5rem;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .submenu-item {
    color: rgba(255, 255, 255, 0.9);
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .submenu-item:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }

  .submenu-category {
    color: var(--accent-color);
    border-bottom-color: rgba(255, 255, 255, 0.2);
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 2rem;
  }

  .main-logo {
    height: 50px;
  }
}

.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

html,
body {
  overflow-x: hidden;
}
</style>
