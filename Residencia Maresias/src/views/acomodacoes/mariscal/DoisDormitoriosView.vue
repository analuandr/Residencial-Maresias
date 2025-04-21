<script setup>
import AcomodacaoDisplay from '@/components/AcomodacaoDisplay.vue'

// Dados para o apartamento 201
const ap201 = {
  titulo: '201 – Andar Superior – 6 Pessoas',
  capacidade: 'Acomoda até 6 pessoas',
  itens: [
    'Cadeiras de praia',
    'Guarda sol',
    'Roupa de cama',
    'Cozinha completa com utensílios e micro ondas',
    'Sala com Smart TV e Sofá cama',
    'Suíte com Cama Box Queen',
    'Dormitório com Cama Box Solteiro + Bicama',
    'Ar-condicionado split nos 2 dormitórios',
    'Lavanderia com tanque e máquina de lavar',
    'Duchas com aquecimento solar',
    'Gás central',
    'Varanda com churrasqueira',
    'Estacionamento privativo 1 vaga',
  ],
  fotos: [
    {
      url: '/src/assets/Fotos Site Mariscal/Mariscal 201/Foto 1.jpg',
      alt: 'Vista principal do apartamento 201',
    },
  ],
  linkReserva: 'https://www.joaoimoveis.com.br/pt/imovel343',
}

// Dados para o apartamento 202
const ap202 = {
  titulo: '202 – Andar Superior – 6 Pessoas',
  capacidade: 'Acomoda até 6 pessoas',
  itens: [
    'Cadeiras de praia',
    'Guarda sol',
    'Roupa de cama',
    'Cozinha completa com utensílios e micro ondas',
    'Sala com Smart TV e Sofá cama',
    'Suíte com Cama Box Queen',
    'Dormitório com Cama Box Solteiro + Bicama',
    'Ar-condicionado split nos 2 dormitórios',
    'Lavanderia com tanque e máquina de lavar',
    'Duchas com aquecimento solar',
    'Gás central',
    'Varanda com churrasqueira',
    'Estacionamento privativo 1 vaga',
  ],
  fotos: [
    {
      url: '/src/assets/Fotos Site Mariscal/Mariscal 202/Foto 1.jpg',
      alt: 'Vista principal do apartamento 202',
    },
  ],
  linkReserva: 'https://www.joaoimoveis.com.br/pt/imovel375',
}

// Dados para o apartamento 204
const ap204 = {
  titulo: '204 – Andar Superior – 6 pessoas',
  capacidade: 'Acomoda até 6 pessoas',
  itens: [
    'Cadeiras de praia',
    'Guarda sol',
    'Roupa de cama',
    'Cozinha completa com utensílios e micro ondas',
    'Sala com Smart TV e Sofá cama',
    'Suíte com Cama Box Queen',
    'Dormitório com Cama Box Solteiro + Bicama',
    'Ar-condicionado split nos 2 dormitórios',
    'Lavanderia com tanque e máquina de lavar',
    'Duchas com aquecimento solar',
    'Gás central',
    'Varanda com churrasqueira',
    'Estacionamento privativo 1 vaga',
  ],
  fotos: [
    {
      url: '/src/assets/Fotos Site Mariscal/Mariscal 204/Foto 1.jpg',
      alt: 'Vista principal do apartamento 204',
    },
  ],
  linkReserva: 'https://www.joaoimoveis.com.br/pt/imovel617',
}
</script>

<template>
  <div class="container">
    <div class="acomodacoes-header">
      <h1>Acomodações em Mariscal - 2 Dormitórios</h1>
      <p>
        Nossos apartamentos de 2 dormitórios em Mariscal são espaçosos e completos, perfeitos para
        famílias.
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

    <hr class="acomodacao-divider" />

    <AcomodacaoDisplay
      :titulo="ap204.titulo"
      :capacidade="ap204.capacidade"
      :itens="ap204.itens"
      :fotos="ap204.fotos"
      :linkReserva="ap204.linkReserva"
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
