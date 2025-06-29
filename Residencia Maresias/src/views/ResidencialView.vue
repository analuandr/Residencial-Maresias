<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Dados dos residenciais
const residenciais = [
  {
    id: 'bombas',
    title: t('home.bombas.title'),
    description: t('home.bombas.description'),
    image: '/assets/Fotos Site Bombas/Bombas 101/Foto 2.jpg',
    link: '/residencial/bombas',
    distanceFromBeach: t('residential.bombas.distanceFromBeach'),
    highlight: t('residential.bombas.highlight'),
  },
  {
    id: 'mariscal',
    title: t('home.mariscal.title'),
    description: t('home.mariscal.description'),
    image: '/assets/Fotos Site Mariscal/Mariscal 101/Foto 1.jpg',
    link: '/residencial/mariscal',
    distanceFromBeach: t('residential.mariscal.distanceFromBeach'),
    highlight: t('residential.mariscal.highlight'),
  },
  {
    id: 'jaboticabeira',
    title: t('home.jaboticabeira.title'),
    description: t('home.jaboticabeira.description'),
    image: '/assets/Fotos Site Mariscal/Mariscal Casa/Foto 01.jpg',
    link: '/residencial/casa-jaboticabeira',
    distanceFromBeach: t('residential.jaboticabeira.distanceFromBeach'),
    highlight: t('residential.jaboticabeira.highlight'),
  },
]
</script>

<template>
  <div class="residential-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1>{{ t('nav.residential') }}</h1>
        <p class="hero-description">
          {{ t('residential.heroDescription') }}
        </p>
      </div>
    </section>

    <!-- Residenciais Grid -->
    <section class="residenciais-section">
      <div class="container">
        <div class="residenciais-grid">
          <div v-for="residencial in residenciais" :key="residencial.id" class="residencial-card">
            <div class="card-image">
              <img :src="residencial.image" :alt="residencial.title" />
              <div class="card-overlay">
                <span class="distance-badge">{{ residencial.distanceFromBeach }}</span>
                <span class="highlight-badge">{{ residencial.highlight }}</span>
              </div>
            </div>
            <div class="card-content">
              <h3>{{ residencial.title }}</h3>
              <p>{{ residencial.description }}</p>
              <router-link :to="residencial.link" class="btn btn-primary">
                {{ t('residential.learnMore') }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Section -->
    <section class="why-choose-section">
      <div class="container">
        <h2>{{ t('residential.whyChoose.title') }}</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <span class="material-icons">verified</span>
            </div>
            <h3>{{ t('residential.whyChoose.quality.title') }}</h3>
            <p>{{ t('residential.whyChoose.quality.description') }}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <span class="material-icons">location_on</span>
            </div>
            <h3>{{ t('residential.whyChoose.location.title') }}</h3>
            <p>{{ t('residential.whyChoose.location.description') }}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <span class="material-icons">family_restroom</span>
            </div>
            <h3>{{ t('residential.whyChoose.family.title') }}</h3>
            <p>{{ t('residential.whyChoose.family.description') }}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <span class="material-icons">support_agent</span>
            </div>
            <h3>{{ t('residential.whyChoose.support.title') }}</h3>
            <p>{{ t('residential.whyChoose.support.description') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.residential-page {
  min-height: 100vh;
}

.hero-section {
  background: var(--beach-gradient);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-description {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
}

.residenciais-section {
  padding: 4rem 0;
  background: #f8f9fa;
}

.residenciais-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.residencial-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.residencial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.card-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.residencial-card:hover .card-image img {
  transform: scale(1.05);
}

.card-overlay {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.distance-badge,
.highlight-badge {
  background: rgba(255, 255, 255, 0.95);
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
}

.highlight-badge {
  background: var(--primary-color);
  color: white;
}

.card-content {
  padding: 2rem;
}

.card-content h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.card-content p {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.why-choose-section {
  padding: 4rem 0;
}

.why-choose-section h2 {
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 3rem;
  font-size: 2.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-3px);
}

.feature-icon {
  width: 80px;
  height: 80px;
  background: var(--beach-gradient);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.feature-icon .material-icons {
  color: white;
  font-size: 2rem;
}

.feature-card h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  /* Aumentar padding lateral no mobile */
  .section-full-width .container {
    padding: 0 1.5rem;
  }

  .residencial-header h1 {
    font-size: 2rem;
  }

  .residencial-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .residencial-card h3 {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  /* Aumentar ainda mais o padding lateral em telas muito pequenas */
  .section-full-width .container {
    padding: 0 2rem;
  }
}
</style>
