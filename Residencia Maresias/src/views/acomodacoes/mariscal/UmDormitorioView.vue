<script setup>
import AcomodacaoDisplay from '@/components/AcomodacaoDisplay.vue'

// Dados para o apartamento 101
const ap101 = {
  titulo: '101 – Térreo – 4 Pessoas',
  capacidade: 'Acomoda até 4 pessoas',
  itens: [
    'Cadeiras de praia',
    'Guarda sol',
    'Roupa de cama',
    'Cozinha completa com utensílios e micro ondas',
    'Sala com Smart TV e Sofá cama',
    'Dormitório com Cama Box Casal + Bicama',
    'Ar-condicionado split no dormitório e na sala',
    'Varanda com tanque e máquina de lavar',
    'Ducha com aquecimento solar',
    'Gás central',
    'Churrasqueira interna',
    'Estacionamento privativo 1 vaga',
  ],
  fotos: [
    {
      url: '/src/assets/Fotos Site Mariscal/Mariscal 101/Foto 1.jpg',
      alt: 'Foto do apartamento 101',
    },
  ],
  linkReserva: 'https://www.joaoimoveis.com.br/pt/imovel77',
}

// Dados para o apartamento 102
const ap102 = {
  titulo: '102 – Térreo – 4 Pessoas',
  capacidade: 'Acomoda até 4 pessoas',
  itens: [
    'Cadeiras de praia',
    'Guarda sol',
    'Roupa de cama',
    'Cozinha completa com utensílios e micro ondas',
    'Sala com Smart TV e Sofá cama',
    'Dormitório com Cama Box Casal + Bicama',
    'Ar-condicionado split no dormitório e na sala',
    'Varanda com tanque e máquina de lavar',
    'Ducha com aquecimento solar',
    'Gás central',
    'Churrasqueira interna',
    'Estacionamento privativo 1 vaga',
  ],
  fotos: [
    {
      url: '/src/assets/Fotos Site Mariscal/Mariscal 102/Foto 1.jpg',
      alt: 'Foto do apartamento 102',
    },
  ],
  linkReserva: 'https://www.joaoimoveis.com.br/pt/imovel71',
}

// Dados para o apartamento 104
const ap104 = {
  titulo: '104 – Térreo – 4 pessoas',
  capacidade: 'Acomoda até 4 pessoas',
  itens: [
    'Cadeiras de praia',
    'Guarda sol',
    'Roupa de cama',
    'Cozinha completa com utensílios e micro ondas',
    'Sala com Smart TV e Sofá cama',
    'Dormitório com Cama Box Casal + Bicama',
    'Ar-condicionado split no dormitório e na sala',
    'Varanda com tanque e máquina de lavar',
    'Ducha com aquecimento solar',
    'Gás central',
    'Churrasqueira interna',
    'Estacionamento privativo 1 vaga',
  ],
  fotos: [
    {
      url: '/src/assets/Fotos Site Mariscal/Mariscal 104/Foto 1.jpg',
      alt: 'Foto do apartamento 104',
    },
  ],
  linkReserva: 'https://www.joaoimoveis.com.br/pt/imovel74',
}
</script>

<template>
  <div class="container">
    <div class="acomodacoes-header">
      <h1>Acomodações em Mariscal - 1 Dormitório</h1>
      <p>
        Nossos apartamentos de 1 dormitório em Mariscal são confortáveis e completos, ideais para
        casais ou pequenas famílias.
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

    <hr class="acomodacao-divider" />

    <AcomodacaoDisplay
      :titulo="ap104.titulo"
      :capacidade="ap104.capacidade"
      :itens="ap104.itens"
      :fotos="ap104.fotos"
      :linkReserva="ap104.linkReserva"
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
