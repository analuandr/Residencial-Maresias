<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Fotos da Casa Jaboticabeira
const fotosJaboticabeira = [
  {
    url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal Casa/Foto 01.jpg',
    caption: t('residentialPages.jaboticabeira.photos.facade'),
  },
  {
    url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal Casa/Foto 02.jpg',
    caption: t('residentialPages.jaboticabeira.photos.gourmetArea'),
  },
  {
    url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal Casa/Foto 03.jpg',
    caption: t('residentialPages.jaboticabeira.photos.masterSuite'),
  },
]

// Informações de localização e pontos próximos
const pontosProximos = [
  {
    nome: t('residentialPages.jaboticabeira.location.nearbyPoints.marDeFora.name'),
    distancia: t('residentialPages.jaboticabeira.location.nearbyPoints.marDeFora.distance'),
    descricao: t('residentialPages.jaboticabeira.location.nearbyPoints.marDeFora.description'),
  },
  {
    nome: t('residentialPages.jaboticabeira.location.nearbyPoints.marDeDentro.name'),
    distancia: t('residentialPages.jaboticabeira.location.nearbyPoints.marDeDentro.distance'),
    descricao: t('residentialPages.jaboticabeira.location.nearbyPoints.marDeDentro.description'),
  },
  {
    nome: t('residentialPages.jaboticabeira.location.nearbyPoints.market.name'),
    distancia: t('residentialPages.jaboticabeira.location.nearbyPoints.market.distance'),
    descricao: t('residentialPages.jaboticabeira.location.nearbyPoints.market.description'),
  },
  {
    nome: t('residentialPages.jaboticabeira.location.nearbyPoints.restaurants.name'),
    distancia: t('residentialPages.jaboticabeira.location.nearbyPoints.restaurants.distance'),
    descricao: t('residentialPages.jaboticabeira.location.nearbyPoints.restaurants.description'),
  },
  {
    nome: t('residentialPages.jaboticabeira.location.nearbyPoints.center.name'),
    distancia: t('residentialPages.jaboticabeira.location.nearbyPoints.center.distance'),
    descricao: t('residentialPages.jaboticabeira.location.nearbyPoints.center.description'),
  },
]
</script>

<template>
  <div class="container">
    <div class="residencial-header">
      <h1>
        <span class="material-icons">villa</span> {{ t('residentialPages.jaboticabeira.title') }}
      </h1>
      <p>{{ t('residentialPages.jaboticabeira.subtitle') }}</p>
    </div>

    <div class="galeria-residencial">
      <div v-for="(foto, index) in fotosJaboticabeira" :key="index" class="foto-item">
        <img :src="foto.url" :alt="foto.caption" />
        <p class="foto-caption">{{ foto.caption }}</p>
      </div>
    </div>

    <div class="informacoes-section">
      <div class="info-column">
        <h2>
          <span class="material-icons">info</span>
          {{ t('residentialPages.jaboticabeira.about.title') }}
        </h2>
        <p>{{ t('residentialPages.jaboticabeira.about.paragraph1') }}</p>
        <p>{{ t('residentialPages.jaboticabeira.about.paragraph2') }}</p>
        <p>{{ t('residentialPages.jaboticabeira.about.paragraph3') }}</p>
        <p>{{ t('residentialPages.jaboticabeira.about.paragraph4') }}</p>
      </div>

      <div class="info-column">
        <h2>
          <span class="material-icons">signpost</span>
          {{ t('residentialPages.jaboticabeira.location.title') }}
        </h2>
        <div class="pontos-proximos">
          <div v-for="(ponto, index) in pontosProximos" :key="index" class="ponto-item">
            <h3><span class="material-icons">place</span> {{ ponto.nome }}</h3>
            <p class="distancia">{{ t('general.distance') }}: {{ ponto.distancia }}</p>
            <p>{{ ponto.descricao }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="informacoes-section">
      <div class="info-column">
        <h2>
          <span class="material-icons">hotel</span>
          {{ t('residentialPages.jaboticabeira.accommodationsDetail.title') }}
        </h2>
        <div class="acomodacoes-info">
          <div class="acomodacao-item">
            <h3>
              {{ t('residentialPages.jaboticabeira.accommodationsDetail.masterSuite.title') }}
            </h3>
            <p>
              {{ t('residentialPages.jaboticabeira.accommodationsDetail.masterSuite.description') }}
            </p>
          </div>
          <div class="acomodacao-item">
            <h3>{{ t('residentialPages.jaboticabeira.accommodationsDetail.suite.title') }}</h3>
            <p>{{ t('residentialPages.jaboticabeira.accommodationsDetail.suite.description') }}</p>
          </div>
          <div class="acomodacao-item">
            <h3>{{ t('residentialPages.jaboticabeira.accommodationsDetail.bedroom.title') }}</h3>
            <p>
              {{ t('residentialPages.jaboticabeira.accommodationsDetail.bedroom.description1') }}
            </p>
            <p>
              {{ t('residentialPages.jaboticabeira.accommodationsDetail.bedroom.description2') }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mapa-section">
      <h2>
        <span class="material-icons">map</span> {{ t('residentialPages.jaboticabeira.map.title') }}
      </h2>
      <div class="mapa-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.889482342654!2d-48.5066344145882!3d-27.18287208873959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b1a0a1427e27%3A0xd380898d5dbf87f0!2sR.%20Jaboticabeira%2C%20194%20-%20Canto%20Grande%2C%20Bombinhas%20-%20SC%2C%2088215-000!5e0!3m2!1spt-BR!2sbr!4v1656954896594!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>
      <p class="endereco">{{ t('residentialPages.jaboticabeira.map.address') }}</p>
    </div>

    <div class="acomodacoes-cta">
      <h2>
        <span class="material-icons">visibility</span>
        {{ t('residentialPages.jaboticabeira.cta.title') }}
      </h2>
      <div class="cta-buttons">
        <RouterLink to="/acomodacoes/casa-jaboticabeira/3-dormitorios" class="btn btn-modern">{{
          t('residentialPages.jaboticabeira.cta.button')
        }}</RouterLink>
        <a
          href="https://www.joaoimoveis.com.br/pt/imovel906"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-outline"
          >{{ t('actions.checkAvailability') }}</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.residencial-header {
  margin: 2rem 0;
  text-align: center;
}

.residencial-header h1 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.residencial-header h1 .material-icons {
  margin-right: 10px;
  color: var(--accent-color);
}

.residencial-header p {
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto;
}

.galeria-residencial {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.foto-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.foto-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s;
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
  padding: 0.5rem;
  margin: 0;
  font-size: 0.9rem;
}

.informacoes-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.info-column h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
}

.info-column h2 .material-icons {
  margin-right: 10px;
  color: var(--accent-color);
}

.info-column p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.acomodacoes-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.acomodacao-item {
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.acomodacao-item h3 {
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
}

.pontos-proximos {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.ponto-item {
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.ponto-item h3 {
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.ponto-item h3 .material-icons {
  margin-right: 8px;
  color: var(--secondary-color);
}

.distancia {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #555;
}

.mapa-section {
  margin-bottom: 3rem;
}

.mapa-section h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mapa-section h2 .material-icons {
  margin-right: 10px;
  color: var(--accent-color);
}

.mapa-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.endereco {
  text-align: center;
  font-weight: bold;
}

.acomodacoes-cta {
  background-color: #f9f9f9;
  padding: 2rem;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.acomodacoes-cta h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
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
