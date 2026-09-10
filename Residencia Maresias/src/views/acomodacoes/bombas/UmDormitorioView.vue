<script setup>
import { computed } from 'vue'
import AcomodacaoDisplay from '@/components/AcomodacaoDisplay.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Dados para o apartamento 201 - agora reativos
const ap201 = computed(() => ({
  titulo: t('apartments.bombas.ap201.title'),
  capacidade: t('apartments.bombas.ap201.capacity'),
  itens: [
    t('accommodations.amenities.beachChairs'),
    t('accommodations.amenities.umbrella'),
    t('accommodations.amenities.fullKitchen'),
    t('accommodations.amenities.livingRoomBicama'),
    t('accommodations.amenities.doubleBedCouple'),
    t('accommodations.amenities.airConditioningSplitBedroom'),
    t('accommodations.amenities.solarShower'),
    t('accommodations.amenities.centralGas'),
    t('accommodations.amenities.laundryBalcony'),
    t('accommodations.amenities.privateParkingOne'),
  ],
  fotos: [
    {
      url: '/assets/Fotos Site Bombas/Bombas 201/Foto 1.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '201' }),
    },
    {
      url: '/assets/Fotos Site Bombas/Bombas 201/Foto 2.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '201' }),
    },
    {
      url: '/assets/Fotos Site Bombas/Bombas 201/Foto 3.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '201' }),
    },
    {
      url: '/assets/Fotos Site Bombas/Bombas 201/Foto 4.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '201' }),
    },
  ],
  linkReserva: 'https://aluguel.marcosimoveis.com.br/pt/apartment/IG17J',
  rotaInterna: '/acomodacoes/bombas/1-dormitorio',
}))

// Dados para o apartamento 202 - agora reativos
const ap202 = computed(() => ({
  titulo: t('apartments.bombas.ap202.title'),
  capacidade: t('apartments.bombas.ap202.capacity'),
  itens: [
    t('accommodations.amenities.beachChairs'),
    t('accommodations.amenities.umbrella'),
    t('accommodations.amenities.fullKitchen'),
    t('accommodations.amenities.livingRoomBicama'),
    t('accommodations.amenities.doubleBedCouple'),
    t('accommodations.amenities.airConditioningSplitBedroom'),
    t('accommodations.amenities.solarShower'),
    t('accommodations.amenities.centralGas'),
    t('accommodations.amenities.laundryBalcony'),
    t('accommodations.amenities.privateParkingOne'),
  ],
  fotos: [
    {
      url: '/assets/Fotos Site Bombas/Bombas 202/Foto 1.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '202' }),
    },
    {
      url: '/assets/Fotos Site Bombas/Bombas 202/Foto 2.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '202' }),
    },
    {
      url: '/assets/Fotos Site Bombas/Bombas 202/Foto 3.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '202' }),
    },
    {
      url: '/assets/Fotos Site Bombas/Bombas 202/Foto 4.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '202' }),
    },
  ],
  linkReserva: 'https://aluguel.marcosimoveis.com.br/pt/apartment/IG09J',
  rotaInterna: '/acomodacoes/bombas/1-dormitorio',
}))
</script>

<template>
  <div class="container">
    <div class="acomodacoes-header">
      <h1>{{ t('accommodations.bombas.oneBedroom.title') }}</h1>
      <p>{{ t('accommodations.bombas.oneBedroom.description') }}</p>
    </div>

    <AcomodacaoDisplay
      :titulo="ap201.titulo"
      :capacidade="ap201.capacidade"
      :itens="ap201.itens"
      :fotos="ap201.fotos"
      :linkReserva="ap201.linkReserva"
      :rotaInterna="ap201.rotaInterna"
    />

    <hr class="acomodacao-divider" />

    <AcomodacaoDisplay
      :titulo="ap202.titulo"
      :capacidade="ap202.capacidade"
      :itens="ap202.itens"
      :fotos="ap202.fotos"
      :linkReserva="ap202.linkReserva"
      :rotaInterna="ap202.rotaInterna"
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
