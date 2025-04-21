<script setup>
// Fotos da Casa Jaboticabeira
const fotosJaboticabeira = [
  {
    url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal Casa/Foto 01.jpg',
    caption: 'Fachada da Casa Jaboticabeira',
  },
  {
    url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal Casa/Foto 02.jpg',
    caption: 'Área externa da Casa',
  },
  {
    url: '/Residencial-Maresias/assets/Fotos Site Mariscal/Mariscal Casa/Foto 03.jpg',
    caption: 'Área de lazer',
  },
]

// Informações de localização e pontos próximos
const pontosProximos = [
  {
    nome: 'Praia',
    distancia: '400 metros',
    descricao: 'Acesso facilitado a uma das mais belas praias da região.',
  },
  {
    nome: 'Mercado [Nome]',
    distancia: '300 metros',
    descricao: 'Mercado completo com tudo que você precisa para sua estadia.',
  },
  {
    nome: 'Restaurantes',
    distancia: '350 metros',
    descricao: 'Diversos restaurantes com gastronomia local e internacional.',
  },
  {
    nome: 'Farmácia',
    distancia: '450 metros',
    descricao: 'Farmácia próxima para sua conveniência.',
  },
]

// Características da Casa
const caracteristicas = [
  'Ampla área de lazer',
  'Churrasqueira privativa',
  'Jardim com área verde',
  'Garagem para 2 carros',
  'Sala de estar espaçosa',
  'Cozinha completa',
  'Internet Wi-Fi',
  'Ar-condicionado em todos os quartos',
  'Roupas de cama e banho incluídas',
  'Itens de praia (guarda-sol, cadeiras)',
]
</script>

<template>
  <div class="container">
    <div class="residencial-header">
      <h1><span class="material-icons">villa</span> Casa Jaboticabeira</h1>
      <p>
        Uma opção exclusiva para famílias ou grupos de amigos que buscam conforto, privacidade e
        espaço em uma localização privilegiada.
      </p>
    </div>

    <div class="galeria-residencial">
      <div v-for="(foto, index) in fotosJaboticabeira" :key="index" class="foto-item">
        <img :src="foto.url" :alt="foto.caption" />
        <p class="foto-caption">{{ foto.caption }}</p>
      </div>
    </div>

    <div class="informacoes-section">
      <div class="info-column">
        <h2><span class="material-icons">info</span> Sobre a Casa</h2>
        <p>
          A Casa Jaboticabeira é uma opção perfeita para famílias ou grupos de amigos que buscam uma
          experiência única de hospedagem, com muito espaço e privacidade.
        </p>
        <p>
          Com 3 dormitórios, a casa acomoda confortavelmente até 8 pessoas e conta com uma área de
          lazer privativa com piscina e churrasqueira, ideal para momentos de descontração e
          convivência.
        </p>
        <p>
          Todos os ambientes são decorados com muito bom gosto e oferecem todo o conforto necessário
          para tornar sua estadia inesquecível.
        </p>
      </div>

      <div class="info-column">
        <h2><span class="material-icons">featured_play_list</span> Características</h2>
        <ul class="caracteristicas-lista">
          <li v-for="(item, index) in caracteristicas" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>

    <div class="informacoes-section">
      <div class="info-column">
        <h2><span class="material-icons">hotel</span> Acomodações</h2>
        <div class="acomodacoes-info">
          <div class="acomodacao-item">
            <h3>Suíte Master</h3>
            <p>Quarto com cama Queen size, banheiro privativo e amplo espaço.</p>
          </div>
          <div class="acomodacao-item">
            <h3>Dormitório 2</h3>
            <p>Quarto com cama de casal e armário.</p>
          </div>
          <div class="acomodacao-item">
            <h3>Dormitório 3</h3>
            <p>Quarto com duas camas de solteiro, ideal para crianças ou adolescentes.</p>
          </div>
          <div class="acomodacao-item">
            <h3>Sala de Estar</h3>
            <p>Ampla sala com sofá, TV e espaço para convivência.</p>
          </div>
        </div>
      </div>

      <div class="info-column">
        <h2><span class="material-icons">signpost</span> Localização e Arredores</h2>
        <div class="pontos-proximos">
          <div v-for="(ponto, index) in pontosProximos" :key="index" class="ponto-item">
            <h3><span class="material-icons">place</span> {{ ponto.nome }}</h3>
            <p class="distancia">Distância: {{ ponto.distancia }}</p>
            <p>{{ ponto.descricao }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mapa-section">
      <h2><span class="material-icons">map</span> Como Chegar</h2>
      <div class="mapa-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.889482342654!2d-48.5066344145882!3d-27.18287208873959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b1a0a1427e27%3A0xd380898d5dbf87f0!2sR.%20Jaboticabeira%2C%20194%20-%20Canto%20Grande%2C%20Bombinhas%20-%20SC%2C%2088215-000!5e0!3m2!1spt-BR!2sbr!4v1656954896594!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>
      <p class="endereco">Endereço: Rua Jabuticabeira 194, no bairro Canto Grande, Bombinhas/SC.</p>
    </div>

    <div class="acomodacoes-cta">
      <h2><span class="material-icons">visibility</span> Conheça em Detalhes</h2>
      <div class="cta-buttons">
        <RouterLink to="/acomodacoes/casa-jaboticabeira/3-dormitorios" class="btn"
          >Ver Detalhes e Fotos</RouterLink
        >
        <a
          href="https://www.joaoimoveis.com.br/pt/imovel906"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-outline"
          >Verificar Disponibilidade</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.residencial-header {
  margin: 2rem 0;
  text-align: center;
}

.residencial-header h1 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.residencial-header h1 .material-icons {
  margin-right: 10px;
  color: var(--accent-color);
}

.residencial-header p {
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto;
}

.galeria-residencial {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.foto-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.foto-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s;
}

.foto-item:hover img {
  transform: scale(1.05);
}

.foto-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem;
  margin: 0;
  font-size: 0.9rem;
}

.informacoes-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.info-column h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
}

.info-column h2 .material-icons {
  margin-right: 10px;
  color: var(--accent-color);
}

.info-column p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.caracteristicas-lista {
  list-style-type: disc;
  padding-left: 1.5rem;
}

.caracteristicas-lista li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.acomodacoes-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.acomodacao-item {
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.acomodacao-item h3 {
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
}

.pontos-proximos {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.ponto-item {
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.ponto-item h3 {
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.ponto-item h3 .material-icons {
  margin-right: 8px;
  color: var(--secondary-color);
}

.distancia {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #555;
}

.mapa-section {
  margin-bottom: 3rem;
}

.mapa-section h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mapa-section h2 .material-icons {
  margin-right: 10px;
  color: var(--accent-color);
}

.mapa-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.endereco {
  text-align: center;
  font-weight: bold;
}

.acomodacoes-cta {
  background-color: #f9f9f9;
  padding: 2rem;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.acomodacoes-cta h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.acomodacoes-cta h2 .material-icons {
  margin-right: 10px;
  color: var(--accent-color);
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .informacoes-section {
    grid-template-columns: 1fr;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
