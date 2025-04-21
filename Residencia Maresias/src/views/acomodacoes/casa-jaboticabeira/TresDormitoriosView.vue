<script setup>
import AcomodacaoDisplay from '@/components/AcomodacaoDisplay.vue'

// Dados da Casa Jaboticabeira
const casaJaboticabeira = {
  titulo: 'Casa Jaboticabeira - 3 Dormitórios',
  capacidade: 'Acomoda até 8 pessoas',
  itens: [
    'Cadeiras de praia',
    'Guarda sol',
    'Roupa de cama',
    'Cozinha completa com utensílios e micro ondas',
    'Sala ampla com Smart TV e Sofá',
    'Suíte Master com Cama Box Queen',
    'Dormitório 2 com Cama Box Casal',
    'Dormitório 3 com 2 Camas Box Solteiro',
    'Ar-condicionado split nos 3 dormitórios',
    'Lavanderia com tanque e máquina de lavar',
    'Duchas com aquecimento solar',
    'Área de lazer externa',
    'Churrasqueira',
    'Garagem para 2 carros',
  ],
  fotos: [
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal Casa/Foto 01.jpg',
      alt: 'Vista principal da Casa Jaboticabeira',
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal Casa/Foto 02.jpg',
      alt: 'Foto da Casa Jaboticabeira',
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal Casa/Foto 03.jpg',
      alt: 'Foto da Casa Jaboticabeira',
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal Casa/Foto 04.jpg',
      alt: 'Foto da Casa Jaboticabeira',
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal Casa/Foto 05.jpg',
      alt: 'Foto da Casa Jaboticabeira',
    },
    {
      url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal Casa/Foto 06.jpg',
      alt: 'Foto da Casa Jaboticabeira',
    },
  ],
  linkReserva: 'https://www.joaoimoveis.com.br/pt/imovel906',
}
</script>

<template>
  <div class="container">
    <div class="acomodacoes-header">
      <h1>Casa Jaboticabeira</h1>
      <p>
        Nossa Casa Jaboticabeira oferece amplo espaço e conforto para até 8 pessoas, com 3
        dormitórios, área de lazer e todas as comodidades para uma estadia perfeita.
      </p>
    </div>

    <div class="casa-info">
      <p>
        A Casa Jaboticabeira é a opção ideal para grupos ou famílias maiores que buscam espaço,
        privacidade e conforto durante sua estadia. Localizada em uma área tranquila e privilegiada,
        permite que você desfrute de momentos especiais com sua família e amigos.
      </p>
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
