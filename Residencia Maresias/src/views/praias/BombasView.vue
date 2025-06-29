<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Imagens da praia - agora reativos
const fotosPreaia = computed(() => [
  {
    url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2e/3c/praia-de-bombas.jpg?w=1200&h=-1&s=1',
    caption: t('photoCaption.panoramicView', { beach: 'Bombas' }),
  },
  {
    url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/4a/b6/0a/praia-de-bombas.jpg?w=1200&h=-1&s=1',
    caption: t('photoCaption.whiteBeaches'),
  },
  {
    url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f3/e1/f2/praia-de-bombas.jpg?w=1200&h=-1&s=1',
    caption: t('photoCaption.sunset', { beach: 'Bombas' }),
  },
])

// Atrações e atividades - agora reativos
const atracoes = computed(() => [
  {
    icon: 'pool',
    nome: t('beaches.bombas.attractions.waterSports.name'),
    descricao: t('beaches.bombas.attractions.waterSports.description'),
  },
  {
    icon: 'directions_walk',
    nome: t('beaches.bombas.attractions.walkingPath.name'),
    descricao: t('beaches.bombas.attractions.walkingPath.description'),
  },
  {
    icon: 'restaurant',
    nome: t('beaches.bombas.attractions.gastronomy.name'),
    descricao: t('beaches.bombas.attractions.gastronomy.description'),
  },
  {
    icon: 'store',
    nome: t('beaches.bombas.attractions.commerce.name'),
    descricao: t('beaches.bombas.attractions.commerce.description'),
  },
])
</script>

<template>
  <div class="praia-view">
    <section class="section-full-width praia-header-section">
      <div class="container">
        <div class="praia-header">
          <h1><span class="material-icons">beach_access</span> {{ t('beaches.bombas.title') }}</h1>
          <p>{{ t('beaches.bombas.description') }}</p>
        </div>
      </div>
    </section>

    <section class="section-full-width galeria-section">
      <div class="container">
        <!-- <h2><span class="material-icons">collections</span> {{ t('beaches.bombas.galleryTitle') }}</h2> -->
        <div class="galeria-praia">
          <div v-for="(foto, index) in fotosPreaia" :key="index" class="foto-item">
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
            <h2><span class="material-icons">info</span> {{ t('beaches.bombas.aboutTitle') }}</h2>
            <p>{{ t('beaches.bombas.aboutText1') }}</p>
            <p>{{ t('beaches.bombas.aboutText2') }}</p>
            <p>{{ t('beaches.bombas.aboutText3') }}</p>
          </div>

          <div class="info-column">
            <h2>
              <span class="material-icons">star</span> {{ t('beaches.bombas.attractionsTitle') }}
            </h2>
            <div class="atracoes-list">
              <div v-for="(atracao, index) in atracoes" :key="index" class="atracao-item">
                <h3>
                  <span class="material-icons">{{ atracao.icon }}</span> {{ atracao.nome }}
                </h3>
                <p>{{ atracao.descricao }}</p>
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
            <span class="material-icons">location_on</span> {{ t('beaches.bombas.locationTitle') }}
          </h2>
          <div class="mapa-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28573.602747188644!2d-48.5047539!3d-27.138099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b10287e44cbf%3A0x5334b6a6a546c5c5!2sBombas%2C%20Bombinhas%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1656954896594!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
        </div>
      </div>
    </section>

    <section class="section-full-width cta-outer-section">
      <div class="container">
        <div class="residencial-cta">
          <h2>
            <span class="material-icons">apartment</span> {{ t('beaches.bombas.hostingTitle') }}
          </h2>
          <p>{{ t('beaches.bombas.hostingDescription') }}</p>
          <div class="cta-buttons">
            <RouterLink to="/residencial/bombas" class="btn">{{
              t('actions.knowResidential')
            }}</RouterLink>
            <RouterLink to="/acomodacoes/bombas/1-dormitorio" class="btn btn-outline">
              {{ t('actions.oneBedroom') }}
            </RouterLink>
            <RouterLink to="/acomodacoes/bombas/2-dormitorios" class="btn btn-outline">
              {{ t('actions.twoBedrooms') }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.praia-view {
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
.praia-header-section,
.informacoes-outer-section,
.mapa-outer-section {
  background-color: var(--beach-bg-light);
}

.galeria-section,
.cta-outer-section {
  background-color: var(--light-color);
}

/* Seção Cabeçalho */
.praia-header {
  text-align: center;
  margin-bottom: 2rem; /* Adicionado para espaçamento */
}

.praia-header h1 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

.praia-header h1 .material-icons {
  margin-right: 10px;
  color: var(--accent-color);
}

.praia-header p {
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

.galeria-praia {
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
  font-size: 1.5rem; /* Ajuste do tamanho do ícone do título */
}

.info-column p {
  margin-bottom: 1rem;
  line-height: 1.7;
  color: var(--dark-color);
}

.atracoes-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.atracao-item {
  background-color: white; /* Fundo branco para destaque */
  padding: 1.25rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.07);
  border-left: 4px solid var(--secondary-color);
}

.atracao-item h3 {
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
}

.atracao-item h3 .material-icons {
  margin-right: 8px;
  color: var(--secondary-color);
  vertical-align: middle;
}

.atracao-item p {
  font-size: 0.95rem;
  color: var(--dark-color);
  margin-bottom: 0; /* Remover margem inferior do parágrafo */
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
}

/* Seção CTA */
.residencial-cta {
  background-color: white;
  padding: 2.5rem;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.residencial-cta h2 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.residencial-cta h2 .material-icons {
  margin-right: 10px;
  color: var(--accent-color);
}

.residencial-cta p {
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  color: var(--dark-color);
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap; /* Permitir quebra de linha em telas menores */
}

/* Reduzir espaçamento entre seções */
.mapa-outer-section {
  background-color: var(--beach-bg-light);
  padding-bottom: 1rem; /* Reduzido de 3rem para 1rem */
}

.cta-outer-section {
  background-color: var(--light-color);
  padding-top: 1rem; /* Reduzido de 3rem para 1rem */
}

@media (max-width: 768px) {
  /* Aumentar padding lateral no mobile */
  .section-full-width .container {
    padding: 0 1.5rem;
  }

  .section-full-width {
    padding: 2rem 0;
  }

  .praia-header h1 {
    font-size: 2rem;
  }

  .galeria-praia {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .info-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .info-column h2 {
    font-size: 1.6rem;
  }

  .mapa-section h2 {
    font-size: 1.8rem;
  }

  .residencial-cta h2 {
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
