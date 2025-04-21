<script setup>
import AcomodacaoDisplay from '@/components/AcomodacaoDisplay.vue'

// Dados para o apartamento 201
const ap201 = {
  titulo: '201 – Andar Superior – 4 Pessoas',
  capacidade: 'Acomoda até 4 pessoas',
  itens: [
    'Cadeiras de praia',
    'Guarda sol',
    'Roupa de cama',
    'Cozinha completa com utensílios e micro ondas',
    'Sala com Smart TV e Sofá bicama',
    'Dormitório com Cama Box Casal',
    'Ar-condicionado split no dormitório',
    'Ducha com aquecimento solar',
    'Gás central',
    'Varanda com churrasqueira e tanque',
    'Estacionamento privativo 1 vaga',
  ],
  fotos: [
    {
      url: '/src/assets/Fotos Site Bombas/Bombas 201/Foto 1.jpg',
      alt: 'Vista principal do apartamento 201',
    },
    {
      url: '/src/assets/Fotos Site Bombas/Bombas 201/Foto 2.jpg',
      alt: 'Foto do apartamento 201',
    },
    {
      url: '/src/assets/Fotos Site Bombas/Bombas 201/Foto 3.jpg',
      alt: 'Foto do apartamento 201',
    },
    {
      url: '/src/assets/Fotos Site Bombas/Bombas 201/Foto 4.jpg',
      alt: 'Foto do apartamento 201',
    },
  ],
  linkReserva: 'https://marcosimoveis.com.br/4pessoas-1quartos-1garagens-pet-l094',
}

// Dados para o apartamento 202
const ap202 = {
  titulo: '202 – Andar Superior – 4 Pessoas',
  capacidade: 'Acomoda até 4 pessoas',
  itens: [
    'Cadeiras de praia',
    'Guarda sol',
    'Roupa de cama',
    'Cozinha completa com utensílios e micro ondas',
    'Sala com Smart TV e Sofá bicama',
    'Dormitório com Cama Box Casal',
    'Ar-condicionado split no dormitório',
    'Ducha com aquecimento solar',
    'Gás central',
    'Varanda com churrasqueira e tanque',
    'Estacionamento privativo 1 vaga',
  ],
  fotos: [
    {
      url: '/src/assets/Fotos Site Bombas/Bombas 202/Foto 1.jpg',
      alt: 'Vista principal do apartamento 202',
    },
    {
      url: '/src/assets/Fotos Site Bombas/Bombas 202/Foto 2.jpg',
      alt: 'Foto do apartamento 202',
    },
    {
      url: '/src/assets/Fotos Site Bombas/Bombas 202/Foto 3.jpg',
      alt: 'Foto do apartamento 202',
    },
    {
      url: '/src/assets/Fotos Site Bombas/Bombas 202/Foto 4.jpg',
      alt: 'Foto do apartamento 202',
    },
  ],
  linkReserva: 'https://marcosimoveis.com.br/4pessoas-1quartos-1garagens-pet-l095',
}
</script>

<template>
  <div class="container">
    <div class="acomodacoes-header">
      <h1>Acomodações em Bombas - 1 Dormitório</h1>
      <p>
        Nossos apartamentos de 1 dormitório em Bombas são confortáveis e completos, ideais para
        casais ou pequenas famílias.
      </p>
    </div>

    <AcomodacaoDisplay
      :titulo="ap201.titulo"
      :capacidade="ap201.capacidade"
      :itens="ap201.itens"
      :fotos="ap201.fotos"
      :linkReserva="ap201.linkReserva"
    />

    <hr class="acomodacao-divider" />

    <AcomodacaoDisplay
      :titulo="ap202.titulo"
      :capacidade="ap202.capacidade"
      :itens="ap202.itens"
      :fotos="ap202.fotos"
      :linkReserva="ap202.linkReserva"
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
