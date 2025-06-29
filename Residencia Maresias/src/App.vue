<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import HeaderMenu from './components/HeaderMenu.vue'

const { t } = useI18n()
</script>

<template>
  <div class="app">
    <HeaderMenu />

    <main>
      <RouterView />
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section footer-left">
            <h3>
              <span class="material-icons">location_on</span> {{ t('footer.locations.title') }}
            </h3>
            <ul>
              <li>
                <RouterLink to="/residencial/bombas">
                  <span class="material-icons">chevron_right</span>
                  {{ t('footer.locations.bombas') }}
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/residencial/mariscal">
                  <span class="material-icons">chevron_right</span>
                  {{ t('footer.locations.mariscal') }}
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/residencial/casa-jaboticabeira">
                  <span class="material-icons">chevron_right</span>
                  {{ t('footer.locations.jaboticabeira') }}
                </RouterLink>
              </li>
            </ul>
          </div>

          <div class="footer-section footer-right">
            <h3><span class="material-icons">info</span> {{ t('footer.about.title') }}</h3>
            <p>{{ t('footer.about.description') }}</p>
          </div>

          <!-- <div class="footer-section">
            <h3><span class="material-icons">share</span> Redes Sociais</h3>
            <div class="social-icons">
              <a href="#" class="social-icon"><span class="material-icons">facebook</span></a>
              <a href="#" class="social-icon"><span class="material-icons">photo_camera</span></a>
              <a href="#" class="social-icon"><span class="material-icons">whatsapp</span></a>
            </div>
          </div> -->
        </div>

        <div class="footer-bottom">
          <p>&copy; {{ new Date().getFullYear() }} {{ t('footer.copyright') }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* Importando fontes do Google */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

/* Estilos globais */
:root {
  --primary-color: #0b5394; /* Azul oceano mais escuro */
  --secondary-color: #4db6ac; /* Verde água/turquesa */
  --accent-color: #f9a825; /* Amarelo areia/sol */
  --light-color: #f8f9fa;
  --dark-color: #333;
  --border-color: #ddd;
  --beach-bg-light: #f5f5dc; /* Bege claro para fundos */
  --beach-gradient: linear-gradient(
    to right,
    #4db6ac,
    #0b5394
  ); /* Degradê de verde-água para azul */

  /* Definições de fontes */
  --title-font: 'Playfair Display', serif;
  --body-font: 'Montserrat', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--body-font);
  line-height: 1.6;
  color: var(--dark-color);
  background-color: var(--beach-bg-light);
  overflow-x: hidden;
  width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--title-font);
  font-weight: 600;
}

/* Container global para limitar a largura do conteúdo interno */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Estilos para o corpo principal da aplicação */
main {
  min-height: calc(100vh - 200px);
  width: 100%;
  padding: 0; /* O padding será aplicado por seção */
}

/* Estilos para o footer */
.footer {
  background: linear-gradient(135deg, #2c3e50, #34495e);
  color: white;
  padding: 3rem 0 1.5rem;
  margin-top: 2rem;
  width: 100%;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;
  gap: 2rem;
}

.footer-section {
  flex: 1;
  min-width: 250px;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
}

/* Posicionamento específico das seções */
.footer-left {
  text-align: left;
}

.footer-right {
  text-align: right;
}

.footer-section h3 {
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
  color: white;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  width: 50px;
  height: 2px;
  background-color: var(--accent-color);
}

/* Ajuste da linha decorativa para cada seção */
.footer-left h3::after {
  left: 0;
}

.footer-right h3::after {
  right: 0;
}

.footer-section h3 i {
  margin-right: 8px;
  color: var(--accent-color);
}

.footer-section h3 .material-icons {
  margin-right: 8px;
  color: white;
  font-size: 1.2rem;
  vertical-align: middle;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section ul li a {
  color: white;
  text-decoration: none;
  transition: var(--transition);
  display: flex;
  align-items: center;
}

.footer-section ul li a:hover {
  color: var(--accent-color);
}

.footer-section ul li a .material-icons {
  margin-right: 8px;
  color: var(--accent-color);
  font-size: 0.9rem;
  vertical-align: middle;
  transition: var(--transition);
}

.footer-section ul li a:hover .material-icons {
  color: white;
}

.footer-section p {
  margin-bottom: 0.5rem;
}

.footer-section p i {
  margin-right: 8px;
  color: var(--accent-color);
  width: 16px;
  text-align: center;
}

.footer-section p .material-icons {
  margin-right: 8px;
  color: white;
  width: 16px;
  font-size: 1rem;
  vertical-align: middle;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
}

.social-icon:hover {
  transform: translateY(-3px);
  background-color: var(--accent-color);
  color: white;
}

.footer-bottom {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: var(--secondary-color);
}

.btn {
  display: inline-block;
  padding: 0.7rem 1.8rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 50px; /* Botões mais arredondados */
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  font-family: var(--body-font);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
  text-decoration: none;
  color: white;
  background: linear-gradient(135deg, #764ba2, #667eea);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
}

.btn-outline:hover {
  background: var(--secondary-color);
  color: white;
}

/* Ajustes para a imagem de fundo */
.beach-header-bg {
  background-image: url('/assets/beach-header-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.beach-overlay {
  background-color: rgba(0, 0, 0, 0.3);
  padding: 3rem 0;
}

/* Adicionando efeitos de ondas */
.wave-divider {
  position: relative;
  height: 70px;
  margin-top: -30px;
}

.wave-divider svg {
  position: absolute;
  width: 100%;
  height: 100%;
  fill: var(--beach-bg-light);
}

/* Adicionando animações */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 1.5s ease-in-out;
}

/* Melhorias nos cards */
.card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.section-title {
  position: relative;
  text-align: center;
  margin-bottom: 2.5rem;
  color: var(--primary-color);
  font-size: 2rem;
  font-family: var(--title-font);
}

.section-title::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -10px;
  width: 80px;
  height: 3px;
  background: var(--secondary-color);
}

.icon-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Estilos responsivos para o footer */
@media (max-width: 768px) {
  /* Aumentar padding lateral do container no mobile */
  .container {
    padding: 0 1.5rem;
  }

  .footer-content {
    flex-direction: column;
    gap: 1rem;
  }

  .footer-section {
    padding: 0;
    margin-bottom: 2rem;
  }

  /* Em dispositivos móveis, centralizar o texto */
  .footer-left,
  .footer-right {
    text-align: center;
  }

  /* Centralizar a linha decorativa em dispositivos móveis */
  .footer-left h3::after,
  .footer-right h3::after {
    left: 50%;
    right: auto;
    transform: translateX(-50%);
  }
}

@media (max-width: 480px) {
  /* Aumentar ainda mais o padding lateral em telas muito pequenas */
  .container {
    padding: 0 2rem;
  }
}
</style>
