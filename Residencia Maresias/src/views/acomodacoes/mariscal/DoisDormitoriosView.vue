<script setup>
import { computed } from 'vue'
import AcomodacaoDisplay from '@/components/AcomodacaoDisplay.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Dados para o apartamento 101 - agora reativos
const ap101 = computed(() => ({
  titulo: t('apartments.mariscal.ap101.title'),
  capacidade: t('apartments.mariscal.ap101.capacity'),
  itens: [
    t('accommodations.amenities.beachChairs'),
    t('accommodations.amenities.umbrella'),
    t('accommodations.amenities.bedding'),
    t('accommodations.amenities.fullKitchen'),
    t('accommodations.amenities.livingRoomTv'),
    t('accommodations.amenities.masterSuite'),
    t('accommodations.amenities.singleBedroomBunk'),
    t('accommodations.amenities.airConditioningBedrooms'),
    t('accommodations.amenities.laundryWashing'),
    t('accommodations.amenities.solarShowers'),
    t('accommodations.amenities.centralGas'),
    t('accommodations.amenities.balconyGrill'),
    t('accommodations.amenities.privateParkingOne'),
  ],
  fotos: [
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 101/Foto 1.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '101' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 101/Foto 2.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '101' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 101/Foto 3.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '101' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 101/Foto 4.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '101' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 101/Foto 5.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '101' }),
    },
  ],
  linkReserva: 'https://www.joaoimoveis.com.br/pt/imovel77',
  rotaInterna: '/acomodacoes/mariscal/2-dormitorios',
}))

// Dados para o apartamento 102 - agora reativos
const ap102 = computed(() => ({
  titulo: t('apartments.mariscal.ap102.title'),
  capacidade: t('apartments.mariscal.ap102.capacity'),
  itens: [
    t('accommodations.amenities.beachChairs'),
    t('accommodations.amenities.umbrella'),
    t('accommodations.amenities.bedding'),
    t('accommodations.amenities.fullKitchen'),
    t('accommodations.amenities.livingRoomTv'),
    t('accommodations.amenities.masterSuite'),
    t('accommodations.amenities.singleBedroomBunk'),
    t('accommodations.amenities.airConditioningBedrooms'),
    t('accommodations.amenities.laundryWashing'),
    t('accommodations.amenities.solarShowers'),
    t('accommodations.amenities.centralGas'),
    t('accommodations.amenities.balconyGrill'),
    t('accommodations.amenities.privateParkingOne'),
  ],
  fotos: [
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 102/Foto 1.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '102' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 102/Foto 2.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '102' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 102/Foto 5.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '102' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 102/Sala 102.JPG',
      alt: t('photoCaption.apartmentPhoto', { number: '102' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 102/Sala 102_2.JPG',
      alt: t('photoCaption.apartmentPhoto', { number: '102' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 102/Suite 102.JPG',
      alt: t('photoCaption.apartmentPhoto', { number: '102' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 102/Quarto solteiro 102.JPG',
      alt: t('photoCaption.apartmentPhoto', { number: '102' }),
    },
  ],
  linkReserva: 'https://www.joaoimoveis.com.br/pt/imovel71',
  rotaInterna: '/acomodacoes/mariscal/2-dormitorios',
}))

// Dados para o apartamento 104 - agora reativos
const ap104 = computed(() => ({
  titulo: t('apartments.mariscal.ap104.title'),
  capacidade: t('apartments.mariscal.ap104.capacity'),
  itens: [
    t('accommodations.amenities.beachChairs'),
    t('accommodations.amenities.umbrella'),
    t('accommodations.amenities.bedding'),
    t('accommodations.amenities.fullKitchen'),
    t('accommodations.amenities.livingRoomTv'),
    t('accommodations.amenities.masterSuite'),
    t('accommodations.amenities.singleBedroomBunk'),
    t('accommodations.amenities.airConditioningBedrooms'),
    t('accommodations.amenities.laundryWashing'),
    t('accommodations.amenities.solarShowers'),
    t('accommodations.amenities.centralGas'),
    t('accommodations.amenities.balconyGrill'),
    t('accommodations.amenities.privateParkingOne'),
  ],
  fotos: [
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 104/Foto 1.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '104' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 104/Foto 2.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '104' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 104/Foto 3.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '104' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 104/Foto 6.JPG',
      alt: t('photoCaption.apartmentPhoto', { number: '104' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 104/Quarto solteiro 104.JPG',
      alt: t('photoCaption.apartmentPhoto', { number: '104' }),
    },
  ],
  linkReserva: 'https://www.joaoimoveis.com.br/pt/imovel74',
  rotaInterna: '/acomodacoes/mariscal/2-dormitorios',
}))

// Dados para o apartamento 202 - agora reativos
const ap202 = computed(() => ({
  titulo: t('apartments.mariscal.ap202.title'),
  capacidade: t('apartments.mariscal.ap202.capacity'),
  itens: [
    t('accommodations.amenities.beachChairs'),
    t('accommodations.amenities.umbrella'),
    t('accommodations.amenities.bedding'),
    t('accommodations.amenities.fullKitchen'),
    t('accommodations.amenities.livingRoomTv'),
    t('accommodations.amenities.masterSuiteGeneric'),
    t('accommodations.amenities.singleBedroomBunk'),
    t('accommodations.amenities.airConditioningBedrooms'),
    t('accommodations.amenities.laundryWashing'),
    t('accommodations.amenities.solarShowers'),
    t('accommodations.amenities.centralGas'),
    t('accommodations.amenities.internalGrill'),
    t('accommodations.amenities.privateParkingOne'),
  ],
  fotos: [
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 202/Foto 1.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '202' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 202/Foto 2.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '202' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 202/Foto 5.jpg',
      alt: t('photoCaption.apartmentPhoto', { number: '202' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 202/Sala 202.JPG',
      alt: t('photoCaption.apartmentPhoto', { number: '202' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 202/Suite 202.JPG',
      alt: t('photoCaption.apartmentPhoto', { number: '202' }),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal 202/Quarto solteiro 202.JPG',
      alt: t('photoCaption.apartmentPhoto', { number: '202' }),
    },
  ],
  linkReserva: 'https://www.joaoimoveis.com.br/pt/imovel78',
  rotaInterna: '/acomodacoes/mariscal/2-dormitorios',
}))
</script>

<template>
  <div class="container">
    <div class="acomodacoes-header">
      <h1>{{ t('accommodations.mariscal.twoBedrooms.title') }}</h1>
      <p>{{ t('accommodations.mariscal.twoBedrooms.description') }}</p>
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

    <hr class="acomodacao-divider" />

    <AcomodacaoDisplay
      :titulo="ap104.titulo"
      :capacidade="ap104.capacidade"
      :itens="ap104.itens"
      :fotos="ap104.fotos"
      :linkReserva="ap104.linkReserva"
      :rotaInterna="ap104.rotaInterna"
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
