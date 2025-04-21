<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const showSubmenuResidencial = ref(false)
const showSubmenuAcomodacoes = ref(false)
const showSubmenuPraias = ref(false)
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
        <div class="logo-container">
          <RouterLink to="/" class="logo-link">
            <!-- Logo Inicial Removido -->
            <div class="brand-content">
              <h1 class="main-title">Residencial Maresias</h1>
              <div class="sub-brands">
                <div class="sub-brand">Bombas</div>
                <div class="sub-brand">Mariscal</div>
                <div class="sub-brand">Casa Jaboticabeira</div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>

      <!-- Efeito de onda -->
      <!-- <div class="wave-divider" v-if="!isScrolled">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path
            fill="#000000"
            fill-opacity="1"
            d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,85.3C672,75,768,53,864,48C960,43,1056,53,1152,69.3C1248,85,1344,107,1392,117.3L1440,128L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div> -->
    </div>

    <nav class="main-nav" :class="{ 'nav-scrolled': isScrolled }">
      <div class="container nav-container">
        <!-- Logo na Navegação (Esquerda) -->
        <RouterLink to="/" class="nav-logo-link">
          <img src="/src/assets/logo.png" alt="Logo Maresias" class="nav-logo" />
        </RouterLink>

        <!-- Botão do menu mobile -->
        <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="nav-links-container">
          <div class="nav-links" :class="{ 'mobile-open': isMobileMenuOpen }">
            <div
              class="nav-item"
              @mouseenter="showSubmenuResidencial = true"
              @mouseleave="showSubmenuResidencial = false"
            >
              <span class="nav-link"><span class="material-icons">home</span> O Residencial</span>
              <div class="submenu" v-if="showSubmenuResidencial">
                <RouterLink to="/residencial/bombas" class="submenu-item"
                  ><span class="material-icons">location_on</span> Bombas</RouterLink
                >
                <RouterLink to="/residencial/mariscal" class="submenu-item"
                  ><span class="material-icons">location_on</span> Mariscal</RouterLink
                >
                <RouterLink to="/residencial/casa-jaboticabeira" class="submenu-item"
                  ><span class="material-icons">house</span> Casa Jaboticabeira</RouterLink
                >
              </div>
            </div>

            <div
              class="nav-item"
              @mouseenter="showSubmenuAcomodacoes = true"
              @mouseleave="showSubmenuAcomodacoes = false"
            >
              <span class="nav-link"><span class="material-icons">bed</span> Acomodações</span>
              <div class="submenu" v-if="showSubmenuAcomodacoes">
                <div class="submenu-category">
                  <span class="material-icons">location_on</span> Bombas
                </div>
                <RouterLink to="/acomodacoes/bombas/1-dormitorio" class="submenu-item"
                  ><span class="material-icons">bed</span> 1 Dormitório</RouterLink
                >
                <RouterLink to="/acomodacoes/bombas/2-dormitorios" class="submenu-item"
                  ><span class="material-icons">hotel</span> 2 Dormitórios</RouterLink
                >

                <div class="submenu-category">
                  <span class="material-icons">location_on</span> Mariscal
                </div>
                <RouterLink to="/acomodacoes/mariscal/1-dormitorio" class="submenu-item"
                  ><span class="material-icons">bed</span> 1 Dormitório</RouterLink
                >
                <RouterLink to="/acomodacoes/mariscal/2-dormitorios" class="submenu-item"
                  ><span class="material-icons">hotel</span> 2 Dormitórios</RouterLink
                >

                <div class="submenu-category">
                  <span class="material-icons">house</span> Casa Jaboticabeira
                </div>
                <RouterLink to="/acomodacoes/casa-jaboticabeira/3-dormitorios" class="submenu-item"
                  ><span class="material-icons">bedroom_parent</span> 3 Dormitórios</RouterLink
                >
              </div>
            </div>

            <div
              class="nav-item"
              @mouseenter="showSubmenuPraias = true"
              @mouseleave="showSubmenuPraias = false"
            >
              <span class="nav-link"
                ><span class="material-icons">beach_access</span> As Praias</span
              >
              <div class="submenu" v-if="showSubmenuPraias">
                <RouterLink to="/praias/bombas" class="submenu-item"
                  ><span class="material-icons">beach_access</span> Bombas</RouterLink
                >
                <RouterLink to="/praias/mariscal" class="submenu-item"
                  ><span class="material-icons">beach_access</span> Mariscal</RouterLink
                >
              </div>
            </div>

            <div class="nav-item">
              <RouterLink to="/contato" class="nav-link"
                ><span class="material-icons">email</span> Contato</RouterLink
              >
            </div>
          </div>
        </div>
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
}

.beach-overlay {
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Estilos para o wave divider */
.wave-divider {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -1px; /* Elimina qualquer espaço entre a onda e o menu */
  z-index: 5;
  line-height: 0;
  overflow: hidden;
}

.wave-divider svg {
  width: 100%;
  height: 70px;
  display: block;
}

.wave-divider path {
  fill: #000000; /* Cor preta para o preenchimento da onda */
}

.logo-container {
  text-align: center;
  padding: 1rem;
  width: 100%;
  margin: 0 auto;
}

.logo-link {
  text-decoration: none;
}

/* Estilos do Logo */
.header-logo {
  transition: all 0.3s ease;
}

.initial-logo {
  display: block;
  max-height: 80px; /* Ajuste a altura conforme necessário */
  margin: 0 auto 1rem; /* Centralizado acima do texto */
}

.scrolled-logo {
  display: block;
  max-height: 65px; /* Logo menor na barra fixa */
  margin-right: auto; /* Empurra para a esquerda */
}

.brand-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  font-family: var(--title-font);
}

.sub-brands {
  display: flex;
  gap: 2rem;
  color: white;
  font-size: 1.2rem;
  font-weight: 300;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-family: var(--body-font);
}

.main-nav {
  background-color: black;
  color: white;
  padding: 0;
  position: relative;
  z-index: 100;
  transition: all 0.3s ease;
  width: 100%;
}

.nav-scrolled {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.nav-container {
  display: flex;
  align-items: center;
  margin: 0 auto;
  position: relative;
  padding: 0 1rem;
  width: 100%;
  max-width: 100%;
}

.nav-links-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  padding: 1rem 0;
}

.nav-item {
  position: relative;
}

.nav-link {
  font-size: 1rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
  padding: 0.5rem 0;
  cursor: pointer;
  position: relative;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  font-family: var(--body-font);
}

/* Estilos para os ícones no menu principal */
.nav-link .material-icons {
  margin-right: 6px;
  font-size: 1.2rem;
  color: var(--accent-color);
  transition: transform 0.3s ease;
}

.nav-link:hover .material-icons {
  transform: translateY(-2px);
}

.nav-link:after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--accent-color);
  transition: width 0.3s;
}

.nav-link:hover:after,
.router-link-active:after {
  width: 100%;
}

.reservar {
  color: var(--accent-color);
  font-weight: 700;
}

.submenu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  min-width: 200px;
  border-radius: 4px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.3s ease;
}

.submenu-category {
  font-weight: bold;
  padding: 0.5rem 1rem;
  color: var(--primary-color);
  margin-top: 0.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  font-family: var(--body-font);
}

/* Estilos para os ícones nas categorias do submenu */
.submenu-category .material-icons {
  margin-right: 6px;
  color: var(--primary-color);
  font-size: 1.1rem;
}

.submenu-item {
  padding: 0.5rem 1.5rem;
  color: var(--dark-color);
  text-decoration: none;
  transition: all 0.2s;
  position: relative;
  display: flex;
  align-items: center;
  font-family: var(--body-font);
}

/* Estilos para os ícones nos itens do submenu */
.submenu-item .material-icons {
  margin-right: 8px;
  font-size: 1rem;
  color: var(--secondary-color);
  width: 20px;
  text-align: center;
}

.submenu-item:hover {
  background-color: rgba(77, 182, 172, 0.1);
  color: var(--secondary-color);
}

.submenu-item:hover .material-icons {
  color: var(--primary-color);
}

.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 20px;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 101;
}

.mobile-menu-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: white;
  margin: 5px 0;
  transition: 0.3s;
}

/* Logo na Navegação Direita */
.nav-logo-link {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-right: 1rem;
  position: absolute;
}

.nav-logo {
  max-height: 65px;
  display: block;
}

@media (max-width: 768px) {
  .beach-header-bg {
    height: 180px;
  }

  .main-title {
    font-size: 2rem;
  }

  .sub-brands {
    font-size: 1rem;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .mobile-menu-toggle {
    display: block;
    order: 3;
    position: static;
    transform: none;
    margin-left: auto;
  }

  .nav-links-container {
    order: 2;
    flex-grow: 0;
  }

  .nav-links {
    display: none;
  }

  .nav-links.mobile-open {
    display: flex;
    position: fixed;
    top: 60px;
    left: 0;
    width: 80%;
    height: calc(100vh - 60px);
    flex-direction: column;
    background-color: white;
    padding: 1rem;
    gap: 0.5rem;
    transition: left 0.3s ease-in-out;
    overflow-y: auto;
    z-index: 100;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.1);
    justify-content: flex-start;
  }

  .nav-logo {
    max-height: 35px;
  }

  .nav-logo-link {
    order: 1;
    margin-right: 0;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px) translateX(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(0) translateX(-50%);
  }
}
</style>
