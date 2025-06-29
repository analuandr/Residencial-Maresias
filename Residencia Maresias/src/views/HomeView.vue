<script setup>
import { useI18n } from 'vue-i18n'
import HomeCarousel from '@/components/HomeCarousel.vue'

const { t } = useI18n()

// Dados para o carrossel
const carouselSlides = [
  {
    image: '/Residencial-Maresias/assets/Canto Grande/Exterior Canto Grande.jpg',
    title: t('home.carousel.canto_grande.title'),
    description: t('home.carousel.canto_grande.description'),
    link: '/residencial/mariscal',
  },
  {
    image: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal Casa/Foto 01.jpg',
    title: t('home.carousel.jaboticabeira.title'),
    description: t('home.carousel.jaboticabeira.description'),
    link: '/residencial/casa-jaboticabeira',
  },
  {
    image: '/Residencial-Maresias/assets/Fotos Site Bombas/Fachada Residencial Bombas.jpg',
    title: t('home.carousel.mariscal.title'),
    description: t('home.carousel.mariscal.description'),
    link: '/residencial/bombas',
  },
]

// Destaques do residencial
const destaques = [
  {
    icon: 'bed',
    title: t('home.features.accommodations.title'),
    description: t('home.features.accommodations.description'),
  },
  {
    icon: 'home',
    title: t('home.features.structure.title'),
    description: t('home.features.structure.description'),
  },
  {
    icon: 'restaurant',
    title: t('home.features.kitchen.title'),
    description: t('home.features.kitchen.description'),
  },
  {
    icon: 'ac_unit',
    title: t('home.features.airConditioning.title'),
    description: t('home.features.airConditioning.description'),
  },
  {
    icon: 'local_parking',
    title: t('home.features.parking.title'),
    description: t('home.features.parking.description'),
  },
  {
    icon: 'wifi',
    title: t('home.features.internet.title'),
    description: t('home.features.internet.description'),
  },
]

// Dados das distâncias
const distances = [
  { local: 'Bal. Camboriú', distancia: '35 km' },
  { local: 'Joinville', distancia: '139 km' },
  { local: 'Beto Carrero', distancia: '72 km' },
  { local: 'Montevidéu', distancia: '1314 km' },
  { local: 'Buenos Aires', distancia: '1900 km' },
  { local: 'Navegantes (aeroporto)', distancia: '68 km' },
  { local: 'Curitiba', distancia: '245 km' },
  { local: 'Porto Alegre', distancia: '430 km' },
  { local: 'Florianópolis (aeroporto)', distancia: '81 km' },
  { local: 'Porto Belo', distancia: '10 km' },
  { local: 'Itajaí', distancia: '53 km' },
  { local: 'Rio de Janeiro', distancia: '1055 km' },
  { local: 'Itapoema', distancia: '19 km' },
  { local: 'São Paulo', distancia: '630 km' },
]
</script>

<template>
  <div class="home">
    <HomeCarousel :slides="carouselSlides" />

    <section class="welcome-section section-full-width">
      <div class="container">
        <h1>{{ t('home.welcome.title') }}</h1>
        <p class="subtitle">{{ t('home.welcome.subtitle') }}</p>

        <div class="features">
          <div class="feature-card">
            <span class="material-icons feature-icon">beach_access</span>
            <h3>{{ t('home.welcome.beachAccess.title') }}</h3>
            <p>{{ t('home.welcome.beachAccess.description') }}</p>
          </div>

          <div class="feature-card">
            <span class="material-icons feature-icon">storefront</span>
            <h3>{{ t('home.welcome.commerce.title') }}</h3>
            <p>{{ t('home.welcome.commerce.description') }}</p>
          </div>

          <div class="feature-card">
            <span class="material-icons feature-icon">restaurant</span>
            <h3>{{ t('home.welcome.restaurants.title') }}</h3>
            <p>{{ t('home.welcome.restaurants.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="destaques-section section-full-width">
      <div class="container">
        <h2>{{ t('home.highlights.title') }}</h2>
        <div class="destaques-grid">
          <div class="destaque-card" v-for="(destaque, index) in destaques" :key="index">
            <div class="destaque-icon">
              <span class="material-icons">{{ destaque.icon }}</span>
            </div>
            <h3>{{ destaque.title }}</h3>
            <p>{{ destaque.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-section section-full-width">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2>{{ t('home.about.title') }}</h2>
            <p>{{ t('home.about.description1') }}</p>
            <p>{{ t('home.about.description2') }}</p>
            <p>{{ t('home.about.description3') }}</p>
            <p>{{ t('home.about.description4') }}</p>
            <p>{{ t('home.about.description5') }}</p>
          </div>
          <div class="about-image">
            <img
              src="https://cdn-clubecandeias.s3.sa-east-1.amazonaws.com/uploads/2022/11/bombinhas-santa-catarina-clube-candeias.jpeg?resize=680%2C338&ssl=1"
              alt="Vista aérea de Bombinhas"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="distances-section section-full-width">
      <div class="container">
        <h2>{{ t('home.distances.title') }}</h2>
        <div class="distances-table">
          <div class="distances-grid">
            <div class="distance-item" v-for="(distance, index) in distances" :key="index">
              <span class="local">{{ distance.local }}</span>
              <span class="distancia">{{ distance.distancia }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="cta-section section-full-width">
      <div class="container">
        <h2>Venha conhecer seu futuro lar à beira-mar</h2>
        <p>Agende uma visita e apaixone-se pelo Residencial Maresias</p>
        <button class="btn btn-accent btn-large">Agendar visita</button>
      </div>
    </section> -->
  </div>
</template>

<style scoped>
.home {
  width: 100%;
}

/* Estilo base para todas as seções full-width */
.section-full-width {
  width: 100%;
  padding: 4rem 0;
}

/* Container interno para limitar a largura do conteúdo */
.section-full-width .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.welcome-section {
  background-color: var(--beach-bg-light);
}

.welcome-section h1 {
  font-size: 3rem;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 1rem;
  font-family: var(--title-font);
}

.subtitle {
  font-size: 1.5rem;
  color: var(--secondary-color);
  text-align: center;
  margin-bottom: 3rem;
  font-style: italic;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 3rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.feature-card p {
  color: var(--dark-color);
  line-height: 1.6;
}

.destaques-section {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: #fff;
}

.destaques-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #fff;
}

.destaques-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.destaque-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.destaque-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.destaque-icon {
  background: rgba(255, 255, 255, 0.2);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.destaque-icon .material-icons {
  font-size: 2.5rem;
  color: #fff;
}

.destaque-card h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #fff;
}

.destaque-card p {
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
}

.about-section {
  background-color: #fff;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text h2 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
}

.about-text p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: var(--dark-color);
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
}

.btn-primary {
  background: var(--beach-gradient);
  color: #fff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.distances-section {
  background-color: var(--beach-bg-light);
}

.distances-section h2 {
  text-align: center;
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 3rem;
}

.distances-table {
  background: #fff;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.distances-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.distance-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: var(--beach-bg-light);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.distance-item:hover {
  background: var(--secondary-color);
  color: #fff;
  transform: translateX(5px);
}

.local {
  font-weight: 500;
  color: var(--dark-color);
}

.distance-item:hover .local,
.distance-item:hover .distancia {
  color: #fff;
}

.distancia {
  font-weight: 600;
  color: var(--primary-color);
}

.cta-section {
  background-color: var(--primary-color);
  color: white;
  text-align: center;
}

.cta-section h2 {
  margin-bottom: 1rem;
}

.cta-section p {
  margin-bottom: 2rem;
  font-size: 1.2rem;
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  /* Aumentar padding lateral no mobile */
  .section-full-width .container {
    padding: 0 1.5rem;
  }

  .welcome-section h1 {
    font-size: 2.5rem;
  }

  .features,
  .destaques-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .destaque-card {
    padding: 1.5rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-text h2 {
    font-size: 2rem;
  }

  .distances-grid {
    grid-template-columns: 1fr;
  }

  .distance-item {
    padding: 0.75rem 1rem;
  }
}

@media (max-width: 480px) {
  /* Aumentar ainda mais o padding lateral em telas muito pequenas */
  .section-full-width .container {
    padding: 0 2rem;
  }

  .section-full-width {
    padding: 2rem 0;
  }

  .welcome-section h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .feature-card,
  .destaque-card,
  .distances-table {
    padding: 1rem;
  }
}
</style>
