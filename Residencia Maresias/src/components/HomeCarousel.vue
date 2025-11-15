<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  interval: {
    type: Number,
    default: 5000,
  },
})

const currentSlide = ref(0)
let timer = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % props.slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + props.slides.length) % props.slides.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const startAutoplay = () => {
  if (props.autoplay && props.slides.length > 1) {
    timer = setInterval(() => {
      nextSlide()
    }, props.interval)
  }
}

const stopAutoplay = () => {
  if (timer) {
    clearInterval(timer)
  }
}

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
})
</script>

<template>
  <div class="carousel-container">
    <div class="carousel">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="carousel-slide"
        :class="{ active: currentSlide === index }"
      >
        <div class="slide-image">
          <img :src="slide.image" :alt="slide.title" />
        </div>
        <div class="slide-content">
          <h2>{{ slide.title }}</h2>
          <p>{{ slide.description }}</p>
          <RouterLink :to="slide.link" class="btn btn-accent">{{
            t('home.carousel.learnMore')
          }}</RouterLink>
        </div>
      </div>
    </div>

    <div class="carousel-controls">
      <button class="carousel-control prev" @click="prevSlide">
        <span class="material-icons">chevron_left</span>
      </button>
      <div class="carousel-indicators">
        <span
          v-for="(slide, index) in slides"
          :key="index"
          class="indicator"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
        ></span>
      </div>
      <button class="carousel-control next" @click="nextSlide">
        <span class="material-icons">chevron_right</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: 80vh;
  min-height: 500px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.carousel {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-slide {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 15%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  z-index: 0;
}

.slide-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.slide-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center; /* Voltando para center center como estava antes */
}

.carousel-slide.active {
  opacity: 1;
  z-index: 1;
}

.slide-content {
  padding: 1.5rem; /* Reduzido de 1.8rem para 1.5rem */
  max-width: 420px; /* Mantido */
  max-height: 220px; /* Aumentado de 200px para 220px */
  min-width: 420px; /* Mantido */
  min-height: 200px; /* Aumentado de 180px para 200px */
  background-color: rgba(255, 255, 255, 0.8); /* Mantido */
  backdrop-filter: blur(10px); /* Mantido */
  border-radius: 12px; /* Mantido */
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2); /* Mantido */
  animation: fadeIn 1s ease-out;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between; /* Mudado de space-around para space-between */
  overflow: hidden; /* Adicionado para garantir que nada saia do card */
}

.slide-content h2 {
  color: var(--primary-color);
  font-size: 1.7rem; /* Reduzido de 1.8rem para 1.7rem */
  margin-bottom: 0.5rem; /* Reduzido de 0.7rem para 0.5rem */
  line-height: 1.1;
}

.slide-content p {
  margin-bottom: 0.5rem; /* Reduzido de 0.7rem para 0.5rem */
  font-size: 0.9rem; /* Reduzido de 0.95rem para 0.9rem */
  color: var(--text-color);
  line-height: 1.3;
  flex-grow: 1; /* Permite que o texto ocupe o espaço disponível */
}

.slide-content .btn {
  margin-top: 0; /* Remove margin extra */
  align-self: flex-start; /* Alinha à esquerda */
  flex-shrink: 0; /* Não permite que o botão diminua */
  /* Garantir tamanho mínimo do botão no carrossel */
  min-width: 100px;
  white-space: nowrap;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem; /* Adicionar espaço da borda inferior */
}

.carousel-controls {
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.carousel-control {
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  margin: 0 0.5rem;
  transition: var(--transition);
}

.carousel-control:hover {
  background-color: var(--accent-color);
}

.carousel-indicators {
  display: flex;
  gap: 0.5rem;
  margin: 0 1rem;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: var(--transition);
}

.indicator.active {
  background-color: var(--accent-color);
  transform: scale(1.2);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .carousel-container {
    height: 60vh;
    min-height: 400px;
  }

  .slide-content {
    max-width: 75%;
    min-width: 280px;
    max-height: 180px;
    min-height: 160px;
    padding: 1rem;
    border-radius: 12px;
  }

  .slide-content h2 {
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
    line-height: 1.2;
  }

  .slide-content p {
    font-size: 0.8rem;
    margin-bottom: 0.6rem;
    line-height: 1.4;
  }

  .btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
    margin-top: 0.2rem;
    min-width: 100px;
  }

  .carousel-control {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.2rem;
  }

  .carousel-slide {
    padding-left: 8%;
    justify-content: center;
  }

  .slide-image img {
    object-position: center center;
  }
}

@media (max-width: 640px) {
  .carousel-container {
    height: 55vh;
    min-height: 380px;
  }

  .slide-content {
    max-width: 80%;
    min-width: 260px;
    max-height: 160px;
    min-height: 140px;
    padding: 0.9rem;
  }

  .slide-content h2 {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }

  .slide-content p {
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }

  .btn {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    min-width: 90px;
  }

  .carousel-slide {
    padding-left: 6%;
  }
}

@media (max-width: 480px) {
  .carousel-container {
    height: 50vh;
    min-height: 350px;
  }

  .slide-content {
    max-width: 85%;
    min-width: 240px;
    max-height: 140px;
    min-height: 120px;
    padding: 0.8rem;
    border-radius: 10px;
  }

  .slide-content h2 {
    font-size: 1rem;
    margin-bottom: 0.3rem;
    line-height: 1.1;
  }

  .slide-content p {
    font-size: 0.7rem;
    margin-bottom: 0.4rem;
    line-height: 1.3;
  }

  .btn {
    padding: 0.5rem 0.9rem;
    font-size: 0.75rem;
    margin-top: 0.1rem;
    min-width: 85px;
    border-radius: 6px;
  }

  .carousel-control {
    width: 2.2rem;
    height: 2.2rem;
    font-size: 1rem;
  }

  .carousel-slide {
    padding-left: 4%;
  }

  .slide-image img {
    object-position: center top;
  }
}
</style>
