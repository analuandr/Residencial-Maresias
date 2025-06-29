<script setup>
import { computed } from 'vue'
import AcomodacaoDisplay from '@/components/AcomodacaoDisplay.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Dados para o apartamento 201 - agora reativos
const ap201 = computed(() => ({
  titulo: t('apartments.mariscal.ap201.title'),
  capacidade: t('apartments.mariscal.ap201.capacity'),
  itens: [
    t('accommodations.amenities.beachChairs'),
    t('accommodations.amenities.umbrella'),
    t('accommodations.amenities.bedding'),
    t('accommodations.amenities.fullKitchen'),
    t('accommodations.amenities.livingRoomTv'),
    t('accommodations.amenities.doubleBedBunk'),
    t('accommodations.amenities.airConditioningBedroomLiving'),
    t('accommodations.amenities.laundryBalcony'),
    t('accommodations.amenities.solarShower'),
    t('accommodations.amenities.centralGas'),
    t('accommodations.amenities.internalGrill'),
    t('accommodations.amenities.privateParkingOne'),
  ],
  fotos: [
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 201/Foto 1.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '201' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 201/Foto 2.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '201' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 201/Foto 4.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '201' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 201/Quarto 201.JPG',
      alt: t('photoCaption.apartmentPhoto', { number: '201' }),
    },
  ],
  linkReserva: 'https://www.joaoimoveis.com.br/pt/imovel76',
  rotaInterna: '/acomodacoes/mariscal/1-dormitorio',
}))

// Dados para o apartamento 204 - agora reativos
const ap204 = computed(() => ({
  titulo: t('apartments.mariscal.ap204.title'),
  capacidade: t('apartments.mariscal.ap204.capacity'),
  itens: [
    t('accommodations.amenities.beachChairs'),
    t('accommodations.amenities.umbrella'),
    t('accommodations.amenities.bedding'),
    t('accommodations.amenities.fullKitchen'),
    t('accommodations.amenities.livingRoomTv'),
    t('accommodations.amenities.doubleBedBunk'),
    t('accommodations.amenities.airConditioningBedroomLiving'),
    t('accommodations.amenities.laundryBalcony'),
    t('accommodations.amenities.solarShower'),
    t('accommodations.amenities.centralGas'),
    t('accommodations.amenities.internalGrill'),
    t('accommodations.amenities.privateParkingOne'),
  ],
  fotos: [
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 204/Foto 1.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '204' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 204/Foto 2.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '204' }),
    },
  ],
  linkReserva: 'https://www.joaoimoveis.com.br/pt/imovel75',
  rotaInterna: '/acomodacoes/mariscal/1-dormitorio',
}))
</script>

<template>
  <div class="container">
    <div class="acomodacoes-header">
      <h1>{{ t('accommodations.mariscal.oneBedroom.title') }}</h1>
      <p>{{ t('accommodations.mariscal.oneBedroom.description') }}</p>
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
      :titulo="ap204.titulo"
      :capacidade="ap204.capacidade"
      :itens="ap204.itens"
      :fotos="ap204.fotos"
      :linkReserva="ap204.linkReserva"
      :rotaInterna="ap204.rotaInterna"
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
