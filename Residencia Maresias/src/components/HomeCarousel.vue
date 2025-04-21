<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

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
          <RouterLink :to="slide.link" class="btn btn-accent">Saiba mais</RouterLink>
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
  object-position: center;
}

.carousel-slide.active {
  opacity: 1;
  z-index: 1;
}

.slide-content {
  padding: 2rem;
  max-width: 600px;
  max-height: 280px;
  min-width: 600px;
  min-height: 280px;
  background-color: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(5px);
  animation: fadeIn 1s ease-out;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}

.slide-content h2 {
  color: var(--primary-color);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.slide-content p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  color: var(--text-color);
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
    max-width: 85%;
    padding: 1.5rem;
  }

  .slide-content h2 {
    font-size: 1.8rem;
  }

  .slide-content p {
    font-size: 1rem;
  }

  .carousel-control {
    width: 2.5rem;
    height: 2.5rem;
  }

  .carousel-slide {
    padding-left: 5%;
  }
}
</style>
