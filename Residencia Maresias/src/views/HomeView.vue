<script setup>
import HomeCarousel from '@/components/HomeCarousel.vue'

// Dados para o carrossel
const carouselSlides = [
  {
    image: '/Residencial-Maresias/assets/Fotos Site Bombas/Bombas 101/Foto 2.jpg',
    title: 'Residencial Maresias - Bombas',
    description: 'Conforto e tranquilidade para suas férias em Bombas',
    link: '/residencial/bombas',
  },
  {
    image: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 101/Foto 1.jpg',
    title: 'Residencial Maresias - Mariscal',
    description: 'Desfrute de momentos inesquecíveis em Mariscal',
    link: '/residencial/mariscal',
  },
  {
    image: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal Casa/Foto 01.jpg',
    title: 'Casa Jaboticabeira',
    description: 'Conforto e exclusividade para grupos e famílias',
    link: '/residencial/casa-jaboticabeira',
  },
]

// Destaques do residencial
const destaques = [
  {
    icon: 'beach_access',
    title: 'Próximo à Praia',
    description:
      'Distância de poucos metros até a praia para você aproveitar ao máximo seu descanso',
  },
  {
    icon: 'bed',
    title: 'Opções de Acomodações',
    description:
      'Apartamentos de 1, 2 e até 3 dormitórios para atender famílias de todos os tamanhos',
  },
  {
    icon: 'restaurant',
    title: 'Cozinha Completa',
    description: 'Todas as unidades equipadas com cozinha completa para preparar suas refeições',
  },
  {
    icon: 'ac_unit',
    title: 'Ar-Condicionado',
    description: 'Conforto térmico garantido em todos os apartamentos para seu bem-estar',
  },
  {
    icon: 'local_parking',
    title: 'Garagem',
    description: 'Estacionamento privativo disponível para garantir a segurança do seu veículo',
  },
  {
    icon: 'wifi',
    title: 'Internet de Qualidade',
    description:
      'Conexão Wi-Fi de alta velocidade disponível em todas as unidades para seu lazer ou trabalho',
  },
]
</script>

<template>
  <div class="home">
    <HomeCarousel :slides="carouselSlides" />

    <section class="welcome-section section-full-width">
      <div class="container">
        <h1>Bem-vindo ao Residencial Maresias</h1>
        <p class="subtitle">Seu paraíso à beira-mar</p>

        <div class="features">
          <div class="feature-card">
            <span class="material-icons feature-icon">beach_access</span>
            <h3>Acesso à Praia</h3>
            <p>Caminhada de apenas 5 minutos até a areia mais dourada do litoral.</p>
          </div>

          <div class="feature-card">
            <span class="material-icons feature-icon">storefront</span>
            <h3>Mercados e Comércio</h3>
            <p>Fácil acesso a mercados, lojas e farmácias nas proximidades.</p>
          </div>

          <div class="feature-card">
            <span class="material-icons feature-icon">restaurant</span>
            <h3>Restaurantes</h3>
            <p>Gastronomia de alta qualidade com ingredientes locais.</p>
          </div>

          <div class="feature-card">
            <span class="material-icons feature-icon">security</span>
            <h3>Segurança 24h</h3>
            <p>Tranquilidade para você e sua família o tempo todo.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="destaques-section section-full-width">
      <div class="container">
        <h2>Destaques do Residencial</h2>
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
            <h2>Sobre o Residencial Maresias</h2>
            <p>
              Localizado na mais bela praia do litoral, o Residencial Maresias oferece o equilíbrio
              perfeito entre conforto, luxo e natureza. Nossos apartamentos são projetados para
              proporcionar uma experiência única de moradia à beira-mar.
            </p>
            <p>
              Com uma arquitetura inspirada nos elementos marítimos e uma decoração sofisticada,
              cada detalhe foi pensado para proporcionar bem-estar e qualidade de vida aos
              moradores.
            </p>
            <button class="btn btn-primary">Conheça nossos apartamentos</button>
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

    <section class="testimonials-section section-full-width">
      <div class="container">
        <h2>O que dizem nossos clientes</h2>

        <div class="testimonials">
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>
                "tudo muito limpo, cozinha bem equipada, banheiros bons, Camas boas. O melhor foi a
                localização, perto das duas praias e rua tranquila. Super indico!"
              </p>
            </div>
            <div class="testimonial-author">
              <!-- <img src="@/assets/person1.jpg" alt="Foto do morador" /> -->
              <div>
                <h4>Yolanda</h4>
                <p>20 dez 2024</p>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>
                "Ótima Casa, bem completinha, super agradável, espaçosa e aconchegante... valeu
                demais a pena nossa estadia! fomos muito bem atendidos pela João Imóveis. A Casa é
                pertinho da praia, uma caminhada bem tranquila. Foi um Fds muito bom em família!"
              </p>
            </div>
            <div class="testimonial-author">
              <!-- <img src="@/assets/person2.jpg" alt="Foto da moradora" /> -->
              <div>
                <h4>Deborah</h4>
                <p>22 jan 2024</p>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>
                "A estadia foi perfeita, a casa é maravilhosa exatamente como na descrição, bem
                pertinho da praia e de fácil acesso a padarias, mercados, restaurantes, etc…
                recomendo!"
              </p>
            </div>
            <div class="testimonial-author">
              <!-- <img src="@/assets/person3.jpg" alt="Foto do morador" /> -->
              <div>
                <h4>Carla Cibeli</h4>
                <p>06 jan 2024</p>
              </div>
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
  padding: 4rem 0; /* Espaçamento vertical */
}

/* Container interno para limitar a largura do conteúdo */
.section-full-width .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.welcome-section {
  text-align: center;
  background-color: var(--beach-bg-light);
}

.welcome-section h1 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.5rem;
  color: var(--secondary-color);
  margin-bottom: 3rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.destaques-section {
  background-color: var(--light-color);
  text-align: center;
}

.destaques-section h2 {
  margin-bottom: 40px;
  color: var(--primary-color);
  font-size: 2.2rem;
}

.destaques-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.destaque-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 30px 20px;
  transition: transform 0.3s ease;
}

.destaque-card:hover {
  transform: translateY(-10px);
}

.destaque-icon {
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(77, 182, 172, 0.1);
  border-radius: 50%;
  margin: 0 auto 1rem;
  transition: transform 0.3s ease;
}

.destaque-icon .material-icons {
  font-size: 2rem;
  color: var(--accent-color);
}

.destaque-card:hover .destaque-icon {
  transform: scale(1.1);
  background-color: rgba(77, 182, 172, 0.2);
}

.destaque-card h3 {
  margin-bottom: 15px;
  color: var(--primary-color);
  font-size: 1.3rem;
}

.destaque-card p {
  color: #666;
  line-height: 1.6;
}

.about-section {
  background-color: var(--beach-bg-light);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.about-text h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.about-text p {
  line-height: 1.8;
  margin-bottom: 20px;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.testimonials-section {
  background-color: var(--light-color);
  text-align: center;
}

.testimonials-section h2 {
  color: var(--primary-color);
  margin-bottom: 3rem;
}

.testimonials {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: left;
}

.testimonial-content {
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.testimonial-author img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
}

.testimonial-author h4 {
  margin: 0;
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
  .section-full-width {
    padding: 3rem 0;
  }

  .about-content {
    grid-template-columns: 1fr;
  }

  .about-image {
    order: -1;
    margin-bottom: 2rem;
  }

  .testimonials {
    grid-template-columns: 1fr;
  }
}
</style>
