<script setup>
import AcomodacaoDisplay from '@/components/AcomodacaoDisplay.vue'

// Dados para o apartamento 101
const ap101 = {
  titulo: '101 – Térreo – 6 pessoas',
  capacidade: 'Acomoda até 6 pessoas',
  itens: [
    'Cadeiras de praia',
    'Guarda sol',
    'Roupa de cama',
    'Cozinha completa com utensílios e micro ondas',
    'Sala com Smart TV e Sofá bicama',
    'Suíte com Cama Box Casal',
    'Dormitório com 2 Cama Box Solteiro',
    'Ar-condicionado split nos 2 dormitórios',
    'Lavanderia com tanque e máquina de lavar',
    'Duchas com aquecimento solar',
    'Gás central',
    'Varanda com churrasqueira',
    'Estacionamento privativo 1 vaga',
  ],
  fotos: [
    {
      url: 'assets/Fotos Site Bombas/Bombas 101/Foto 1.jpg',
      alt: 'Vista principal do apartamento 101',
    },
    {
      url: 'assets/Fotos Site Bombas/Bombas 101/Foto 2.jpg',
      alt: 'Foto do apartamento 101',
    },
    {
      url: 'assets/Fotos Site Bombas/Bombas 101/Foto 3.jpg',
      alt: 'Foto do apartamento 101',
    },
    {
      url: 'assets/Fotos Site Bombas/Bombas 101/Foto 4.jpg',
      alt: 'Foto do apartamento 101',
    },
    {
      url: 'assets/Fotos Site Bombas/Bombas 101/Foto 5.jpg',
      alt: 'Foto do apartamento 101',
    },
    {
      url: 'assets/Fotos Site Bombas/Bombas 101/Foto 6.jpg',
      alt: 'Foto do apartamento 101',
    },
  ],
  linkReserva: 'https://marcosimoveis.com.br/6pessoas-2quartos-1garagens-pet-l092',
}

// Dados para o apartamento 102
const ap102 = {
  titulo: '102 – Térreo – 6 pessoas',
  capacidade: 'Acomoda até 6 pessoas',
  itens: [
    'Cadeiras de praia',
    'Guarda sol',
    'Roupa de cama',
    'Cozinha completa com utensílios e micro ondas',
    'Sala com Smart TV e Sofá bicama',
    'Suíte com Cama Box Casal',
    'Dormitório com 2 Cama Box Solteiro',
    'Ar-condicionado split nos 2 dormitórios',
    'Lavanderia com tanque e máquina de lavar',
    'Duchas com aquecimento solar',
    'Gás central',
    'Varanda com churrasqueira',
    'Estacionamento privativo 1 vaga',
  ],
  fotos: [
    {
      url: 'assets/Fotos Site Bombas/Bombas 102/Foto 1.jpg',
      alt: 'Vista principal do apartamento 102',
    },
    {
      url: 'assets/Fotos Site Bombas/Bombas 102/Foto 2.jpg',
      alt: 'Foto do apartamento 102',
    },
    {
      url: 'assets/Fotos Site Bombas/Bombas 102/Foto 3.jpg',
      alt: 'Foto do apartamento 102',
    },
    {
      url: 'assets/Fotos Site Bombas/Bombas 102/Foto 4.jpg',
      alt: 'Foto do apartamento 102',
    },
    {
      url: 'assets/Fotos Site Bombas/Bombas 102/Foto 5.jpg',
      alt: 'Foto do apartamento 102',
    },
    {
      url: 'assets/Fotos Site Bombas/Bombas 102/Foto 6.jpg',
      alt: 'Foto do apartamento 102',
    },
  ],
  linkReserva: 'https://marcosimoveis.com.br/6pessoas-2quartos-1garagens-pet-l093',
}
</script>

<template>
  <div class="container">
    <div class="acomodacoes-header">
      <h1>Acomodações em Bombas - 2 Dormitórios</h1>
      <p>
        Nossos apartamentos de 2 dormitórios em Bombas são espaçosos e completos, perfeitos para
        famílias.
      </p>
    </div>

    <AcomodacaoDisplay
      :titulo="ap101.titulo"
      :capacidade="ap101.capacidade"
      :itens="ap101.itens"
      :fotos="ap101.fotos"
      :linkReserva="ap101.linkReserva"
    />

    <hr class="acomodacao-divider" />

    <AcomodacaoDisplay
      :titulo="ap102.titulo"
      :capacidade="ap102.capacidade"
      :itens="ap102.itens"
      :fotos="ap102.fotos"
      :linkReserva="ap102.linkReserva"
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
