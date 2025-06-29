<script setup>
import { computed } from 'vue'
import AcomodacaoDisplay from '@/components/AcomodacaoDisplay.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Dados para a Casa Jaboticabeira - agora reativos
const casaJaboticabeira = computed(() => ({
  titulo: t('apartments.jaboticabeira.house.title'),
  capacidade: t('apartments.jaboticabeira.house.capacity'),
  itens: [
    t('accommodations.amenities.beachChairs'),
    t('accommodations.amenities.umbrella'),
    t('accommodations.amenities.bedding'),
    t('accommodations.amenities.fullKitchen'),
    t('accommodations.amenities.largeLivingRoom'),
    t('accommodations.amenities.masterSuite'),
    t('accommodations.amenities.doubleBed'),
    t('accommodations.amenities.singleBedroomBunk'),
    t('accommodations.amenities.airConditioningThreeBedrooms'),
    t('accommodations.amenities.laundryWashing'),
    t('accommodations.amenities.garage2Cars'),
    t('accommodations.amenities.outdoorArea'),
  ],
  fotos: [
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal Casa/Área Gourmet Casa.jpg',
      alt: t('photoCaption.houseMain'),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal Casa/Suite Master Casa.jpg',
      alt: t('photoCaption.housePhoto'),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal Casa/Foto 01.jpg',
      alt: t('photoCaption.housePhoto'),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal Casa/Foto 02.jpg',
      alt: t('photoCaption.housePhoto'),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal Casa/Foto 03.jpg',
      alt: t('photoCaption.housePhoto'),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal Casa/Foto 04.jpg',
      alt: t('photoCaption.housePhoto'),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal Casa/Foto 05.jpg',
      alt: t('photoCaption.housePhoto'),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal Casa/Foto 06.jpg',
      alt: t('photoCaption.housePhoto'),
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal Casa/Fachada do Residencial Mariscal.JPG',
      alt: t('photoCaption.housePhoto'),
    },
  ],
  linkReserva: 'https://www.joaoimoveis.com.br/pt/imovel74',
}))
</script>

<template>
  <div class="container">
    <div class="acomodacoes-header">
      <h1>{{ t('accommodations.jaboticabeira.threeBedrooms.title') }}</h1>
      <p>{{ t('accommodations.jaboticabeira.threeBedrooms.description') }}</p>
    </div>

    <div class="casa-info">
      <p>{{ t('accommodations.jaboticabeira.info') }}</p>
    </div>

    <AcomodacaoDisplay
      :titulo="casaJaboticabeira.titulo"
      :capacidade="casaJaboticabeira.capacidade"
      :itens="casaJaboticabeira.itens"
      :fotos="casaJaboticabeira.fotos"
      :linkReserva="casaJaboticabeira.linkReserva"
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

.casa-info {
  max-width: 800px;
  margin: 0 auto 2rem;
  text-align: center;
}

.casa-info p {
  font-size: 1.1rem;
  line-height: 1.6;
}
</style>
