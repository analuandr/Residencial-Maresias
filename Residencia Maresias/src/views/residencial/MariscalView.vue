<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Fotos do residencial em Canto Grande
const fotosCantoGrande = [
  {
    url: '/Residencial-Maresias/assets/Canto Grande/Fachada Canto Grande.JPG',
    caption: t('residentialPages.mariscal.photos.facade'),
  },
  {
    url: '/Residencial-Maresias/assets/Canto Grande/Exterior Canto Grande.jpg',
    caption: t('residentialPages.mariscal.photos.exterior'),
  },
  {
    url: '/Residencial-Maresias/assets/Canto Grande/Vista aérea.jpg',
    caption: t('residentialPages.mariscal.photos.aerial'),
  },
]

// Informações de localização e pontos próximos
const pontosProximos = [
  {
    icon: 'beach_access',
    nome: t('residentialPages.mariscal.location.nearbyPoints.marDeFora.name'),
    distancia: t('residentialPages.mariscal.location.nearbyPoints.marDeFora.distance'),
    descricao: t('residentialPages.mariscal.location.nearbyPoints.marDeFora.description'),
  },
  {
    icon: 'beach_access',
    nome: t('residentialPages.mariscal.location.nearbyPoints.marDeDentro.name'),
    distancia: t('residentialPages.mariscal.location.nearbyPoints.marDeDentro.distance'),
    descricao: t('residentialPages.mariscal.location.nearbyPoints.marDeDentro.description'),
  },
  {
    icon: 'shopping_cart',
    nome: t('residentialPages.mariscal.location.nearbyPoints.market.name'),
    distancia: t('residentialPages.mariscal.location.nearbyPoints.market.distance'),
    descricao: t('residentialPages.mariscal.location.nearbyPoints.market.description'),
  },
  {
    icon: 'restaurant',
    nome: t('residentialPages.mariscal.location.nearbyPoints.restaurants.name'),
    distancia: t('residentialPages.mariscal.location.nearbyPoints.restaurants.distance'),
    descricao: t('residentialPages.mariscal.location.nearbyPoints.restaurants.description'),
  },
  {
    icon: 'location_city',
    nome: t('residentialPages.mariscal.location.nearbyPoints.center.name'),
    distancia: t('residentialPages.mariscal.location.nearbyPoints.center.distance'),
    descricao: t('residentialPages.mariscal.location.nearbyPoints.center.description'),
  },
]
</script>

<template>
  <div class="residencial-view">
    <section class="section-full-width residencial-header-section">
      <div class="container">
        <div class="residencial-header">
          <h1>
            <span class="material-icons">apartment</span> {{ t('residentialPages.mariscal.title') }}
          </h1>
          <p>{{ t('residentialPages.mariscal.subtitle') }}</p>
        </div>
      </div>
    </section>

    <section class="section-full-width galeria-section">
      <div class="container">
        <div class="galeria-residencial">
          <div v-for="(foto, index) in fotosCantoGrande" :key="index" class="foto-item">
            <img :src="foto.url" :alt="foto.caption" />
            <p class="foto-caption">{{ foto.caption }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-full-width informacoes-outer-section">
      <div class="container">
        <div class="informacoes-section">
          <div class="info-column">
            <h2>
              <span class="material-icons">info</span>
              {{ t('residentialPages.mariscal.about.title') }}
            </h2>
            <p>{{ t('residentialPages.mariscal.about.paragraph1') }}</p>
            <p>{{ t('residentialPages.mariscal.about.paragraph2') }}</p>
            <p>{{ t('residentialPages.mariscal.about.paragraph3') }}</p>
          </div>
          <div class="info-column">
            <h2>
              <span class="material-icons">signpost</span>
              {{ t('residentialPages.mariscal.location.title') }}
            </h2>
            <div class="pontos-proximos">
              <div class="ponto-item" v-for="(ponto, index) in pontosProximos" :key="index">
                <h3>
                  <span class="material-icons">{{ ponto.icon }}</span> {{ ponto.nome }}
                </h3>
                <p class="distancia">{{ t('general.location') }}: {{ ponto.distancia }}</p>
                <p>{{ ponto.descricao }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-full-width mapa-outer-section">
      <div class="container">
        <div class="mapa-section">
          <h2>
            <span class="material-icons">location_on</span>
            {{ t('residentialPages.mariscal.map.title') }}
          </h2>
          <div class="mapa-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.889482342654!2d-48.5066344145882!3d-27.18287208873959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b1a0a1427e27%3A0xd380898d5dbf87f0!2sR.%20Jaboticabeira%2C%20184%20-%20Canto%20Grande%2C%20Bombinhas%20-%20SC%2C%2088215-000!5e0!3m2!1spt-BR!2sbr!4v1656954896594!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
          <p class="endereco">{{ t('residentialPages.mariscal.map.address') }}</p>
        </div>
      </div>
    </section>

    <section class="section-full-width cta-outer-section">
      <div class="container">
        <div class="acomodacoes-cta">
          <h2>
            <span class="material-icons">bed</span>
            {{ t('residentialPages.mariscal.accommodations.title') }}
          </h2>
          <div class="cta-buttons">
            <RouterLink to="/acomodacoes/mariscal/1-dormitorio" class="btn btn-modern">
              {{ t('residentialPages.mariscal.accommodations.oneBedroom') }}
            </RouterLink>
            <RouterLink to="/acomodacoes/mariscal/2-dormitorios" class="btn btn-modern">
              {{ t('residentialPages.mariscal.accommodations.twoBedrooms') }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.residencial-view {
  width: 100%;
}

/* Estilo base para todas as seções full-width */
.section-full-width {
  width: 100%;
  padding: 3rem 0; /* Espaçamento vertical */
}

/* Container interno para limitar a largura do conteúdo */
.section-full-width .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Cores de fundo alternadas */
.residencial-header-section,
.informacoes-outer-section,
.mapa-outer-section {
  background-color: var(--beach-bg-light);
}

.galeria-section,
.cta-outer-section {
  background-color: var(--light-color);
}

/* Seção Cabeçalho */
.residencial-header {
  text-align: center;
  margin-bottom: 2rem;
}

.residencial-header h1 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

.residencial-header h1 .material-icons {
  margin-right: 10px;
  color: var(--accent-color);
}

.residencial-header p {
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto;
  color: var(--dark-color);
}

/* Seção Galeria */
.galeria-section h2 {
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-size: 2rem;
}

.galeria-section h2 .material-icons {
  margin-right: 10px;
  color: var(--accent-color);
}

.galeria-residencial {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.foto-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.foto-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.foto-item:hover img {
  transform: scale(1.05);
}

.foto-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.75rem;
  margin: 0;
  font-size: 0.9rem;
  text-align: center;
}

/* Seção Informações */
.informacoes-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.info-column h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-color);
  font-size: 1.8rem;
  display: flex;
  align-items: center;
}

.info-column h2 .material-icons {
  margin-right: 10px;
  color: var(--accent-color);
  font-size: 1.5rem;
}

.info-column p {
  margin-bottom: 1rem;
  line-height: 1.7;
  color: var(--dark-color);
}

.pontos-proximos {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ponto-item {
  background-color: white;
  padding: 1.25rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.07);
  border-left: 4px solid var(--secondary-color);
}

.ponto-item h3 {
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
}

.ponto-item h3 .material-icons {
  margin-right: 8px;
  width: 18px;
  text-align: center;
  color: var(--secondary-color);
}

.distancia {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--dark-color);
  font-size: 0.9rem;
}

.ponto-item p:last-child {
  font-size: 0.95rem;
  color: var(--dark-color);
  margin-bottom: 0;
}

/* Seção Mapa */
.mapa-section h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 2rem;
}

.mapa-section h2 .material-icons {
  margin-right: 10px;
  color: var(--accent-color);
}

.mapa-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.endereco {
  text-align: center;
  font-weight: bold;
  color: var(--dark-color);
  margin-top: 1rem;
}

/* Seção CTA Acomodações */
.acomodacoes-cta {
  background-color: white;
  padding: 2.5rem;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.acomodacoes-cta h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.acomodacoes-cta h2 .material-icons {
  margin-right: 10px;
  color: var(--accent-color);
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.cta-buttons .btn {
  /* Herda estilos do App.vue */
  min-width: 250px; /* Definir largura mínima */
}

@media (max-width: 768px) {
  /* Aumentar padding lateral no mobile */
  .section-full-width .container {
    padding: 0 1.5rem;
  }

  .section-full-width {
    padding: 2rem 0;
  }

  .residencial-header h1 {
    font-size: 2rem;
  }

  .galeria-residencial {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .informacoes-section {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .info-column h2 {
    font-size: 1.6rem;
  }

  .mapa-section h2 {
    font-size: 1.8rem;
  }

  .acomodacoes-cta h2 {
    font-size: 1.6rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  .cta-buttons .btn {
    width: 80%;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  /* Aumentar ainda mais o padding lateral em telas muito pequenas */
  .section-full-width .container {
    padding: 0 2rem;
  }
}
</style>
