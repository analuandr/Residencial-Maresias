<script setup>
import { computed } from 'vue'
import AcomodacaoDisplay from '@/components/AcomodacaoDisplay.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Dados para o apartamento 101 - agora reativos
const ap101 = computed(() => ({
  titulo: t('apartments.bombas.ap101.title'),
  capacidade: t('apartments.bombas.ap101.capacity'),
  itens: [
    t('accommodations.amenities.beachChairs'),
    t('accommodations.amenities.umbrella'),
    t('accommodations.amenities.bedding'),
    t('accommodations.amenities.fullKitchen'),
    t('accommodations.amenities.livingRoomBicama'),
    t('accommodations.amenities.masterSuiteCouple'),
    t('accommodations.amenities.doubleBedBunk'),
    t('accommodations.amenities.airConditioningBedrooms'),
    t('accommodations.amenities.laundryWashing'),
    t('accommodations.amenities.balconyTank'),
    t('accommodations.amenities.solarShowers'),
    t('accommodations.amenities.privateParkingOne'),
  ],
  fotos: [
    {
      url: '/Residencial-Maresias/assets/Fotos Site Bombas/Bombas 101/Foto 1.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '101' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Bombas/Bombas 101/Foto 2.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '101' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Bombas/Bombas 101/Foto 3.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '101' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Bombas/Bombas 101/Foto 4.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '101' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Bombas/Bombas 101/Foto 5.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '101' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Bombas/Bombas 101/Foto 6.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '101' }),
    },
  ],
  linkReserva: 'https://www.joaoimoveis.com.br/pt/imovel77',
  rotaInterna: '/acomodacoes/bombas/2-dormitorios',
}))

// Dados para o apartamento 102 - agora reativos
const ap102 = computed(() => ({
  titulo: t('apartments.bombas.ap102.title'),
  capacidade: t('apartments.bombas.ap102.capacity'),
  itens: [
    t('accommodations.amenities.beachChairs'),
    t('accommodations.amenities.umbrella'),
    t('accommodations.amenities.bedding'),
    t('accommodations.amenities.fullKitchen'),
    t('accommodations.amenities.livingRoomBicama'),
    t('accommodations.amenities.masterSuiteCouple'),
    t('accommodations.amenities.twoSingleBedsOnly'),
    t('accommodations.amenities.airConditioningBedrooms'),
    t('accommodations.amenities.laundryWashing'),
    t('accommodations.amenities.balconyTank'),
    t('accommodations.amenities.solarShowers'),
    t('accommodations.amenities.privateParkingOne'),
  ],
  fotos: [
    {
      url: '/Residencial-Maresias/assets/Fotos Site Bombas/Bombas 102/Foto 1.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '102' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Bombas/Bombas 102/Foto 2.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '102' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Bombas/Bombas 102/Foto 3.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '102' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Bombas/Bombas 102/Foto 4.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '102' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Bombas/Bombas 102/Foto 5.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '102' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Bombas/Bombas 102/Foto 6.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '102' }),
    },
  ],
  linkReserva: 'https://www.joaoimoveis.com.br/pt/imovel71',
  rotaInterna: '/acomodacoes/bombas/2-dormitorios',
}))
</script>

<template>
  <div class="container">
    <div class="acomodacoes-header">
      <h1>{{ t('accommodations.bombas.twoBedrooms.title') }}</h1>
      <p>{{ t('accommodations.bombas.twoBedrooms.description') }}</p>
    </div>

    <AcomodacaoDisplay
      :titulo="ap101.titulo"
      :capacidade="ap101.capacidade"
      :itens="ap101.itens"
      :fotos="ap101.fotos"
      :linkReserva="ap101.linkReserva"
      :rotaInterna="ap101.rotaInterna"
    />

    <hr class="acomodacao-divider" />

    <AcomodacaoDisplay
      :titulo="ap102.titulo"
      :capacidade="ap102.capacidade"
      :itens="ap102.itens"
      :fotos="ap102.fotos"
      :linkReserva="ap102.linkReserva"
      :rotaInterna="ap102.rotaInterna"
    />
  </div>
</template>

<style scoped>
.acomodacoes-header {
  margin: 2rem 0;
  text-align: center;
}

.acomodacoes-header h1 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.acomodacoes-header p {
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto;
}

.acomodacao-divider {
  border: none;
  height: 2px;
  background: var(--beach-gradient);
  margin: 3rem auto;
  width: 80%;
}
</style>
