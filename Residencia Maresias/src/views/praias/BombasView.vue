<script setup>
import { RouterLink } from 'vue-router'

// Imagens da praia
const fotosPreaia = [
  {
    url: '/Residencial-Maresias/assets/Fotos Site Bombas/Praia/Foto 1.jpg',
    caption: 'Vista panorâmica da Praia de Bombas',
  },
  {
    url: '/Residencial-Maresias/assets/Fotos Site Bombas/Praia/Foto 2.jpg',
    caption: 'Areias brancas e águas cristalinas',
  },
  {
    url: '/Residencial-Maresias/assets/Fotos Site Bombas/Praia/Foto 3.jpg',
    caption: 'Pôr do sol na Praia de Bombas',
  },
]

// Atrações e atividades
const atracoes = [
  {
    icon: 'pool', // fa-water
    nome: 'Esportes Aquáticos',
    descricao: 'Aluguel de caiaques, stand-up paddle e prática de surf para iniciantes.',
  },
  {
    icon: 'directions_walk', // fa-person-walking
    nome: 'Caminhada na Orla',
    descricao: 'Calçadão completo para caminhadas com vista para o mar.',
  },
  {
    icon: 'restaurant', // fa-utensils
    nome: 'Gastronomia Local',
    descricao: 'Diversos restaurantes e quiosques com frutos do mar frescos e culinária local.',
  },
  {
    icon: 'store', // fa-store
    nome: 'Comércio',
    descricao: 'Lojas de artesanato, souvenirs e produtos de praia ao longo da avenida principal.',
  },
]
</script>

<template>
  <div class="praia-view">
    <section class="section-full-width praia-header-section">
      <div class="container">
        <div class="praia-header">
          <h1><span class="material-icons">beach_access</span> Praia de Bombas</h1>
          <p>
            Uma das praias mais encantadoras de Santa Catarina, Bombas encanta com suas águas
            calmas, areias brancas e uma infraestrutura completa para turistas.
          </p>
        </div>
      </div>
    </section>

    <section class="section-full-width galeria-section">
      <div class="container">
        <h2><span class="material-icons">collections</span> Galeria de Fotos</h2>
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
            <h2><span class="material-icons">info</span> Sobre a Praia</h2>
            <p>
              A Praia de Bombas está localizada no município de Bombinhas, em Santa Catarina. Com
              aproximadamente 2 km de extensão, é uma das praias mais procuradas da região, sendo
              ideal para famílias devido às suas águas calmas e de pouca profundidade.
            </p>
            <p>
              Além da beleza natural, a praia conta com uma infraestrutura completa, com diversas
              opções de restaurantes, bares, lojas e serviços para atender aos turistas que visitam
              o local durante o ano todo, especialmente na alta temporada.
            </p>
            <p>
              A temperatura da água é agradável para banho durante os meses de verão, e a praia é
              protegida por morros que ajudam a formar uma baía abrigada dos ventos fortes.
            </p>
          </div>

          <div class="info-column">
            <h2><span class="material-icons">star</span> Atrações e Atividades</h2>
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
          <h2><span class="material-icons">location_on</span> Localização</h2>
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
            <span class="material-icons">apartment</span> Hospede-se próximo à Praia de Bombas
          </h2>
          <p>
            O Residencial Maresias Bombas está localizado a apenas 150 metros da praia, oferecendo
            conforto e comodidade para você aproveitar ao máximo sua estadia.
          </p>
          <div class="cta-buttons">
            <RouterLink to="/residencial/bombas" class="btn">Conheça o Residencial</RouterLink>
            <RouterLink to="/acomodacoes/bombas/1-dormitorio" class="btn btn-outline"
              >Apartamentos de 1 Dormitório</RouterLink
            >
            <RouterLink to="/acomodacoes/bombas/2-dormitorios" class="btn btn-outline"
              >Apartamentos de 2 Dormitórios</RouterLink
            >
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

@media (max-width: 768px) {
  .section-full-width {
    padding: 2rem 0;
  }

  .praia-header h1 {
    font-size: 2rem;
  }

  .galeria-praia {
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

  .residencial-cta h2 {
    font-size: 1.6rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  .cta-buttons .btn {
    width: 80%; /* Fazer botões ocuparem mais largura */
    max-width: 300px;
  }
}
</style>
