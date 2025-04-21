<script setup>
import { ref } from 'vue'

const props = defineProps({
  titulo: {
    type: String,
    required: true,
  },
  capacidade: {
    type: String,
    required: true,
  },
  itens: {
    type: Array,
    required: true,
  },
  fotos: {
    type: Array,
    required: true,
  },
  linkReserva: {
    type: String,
    required: true,
  },
})

const fotoAtual = ref(0)

const abrirFoto = (index) => {
  fotoAtual.value = index
  isModalAberto.value = true
}

const isModalAberto = ref(false)

const fecharModal = () => {
  isModalAberto.value = false
}

const proxFoto = () => {
  fotoAtual.value = (fotoAtual.value + 1) % props.fotos.length
}

const fotoAnterior = () => {
  fotoAtual.value = (fotoAtual.value - 1 + props.fotos.length) % props.fotos.length
}
</script>

<template>
  <div class="acomodacao">
    <div class="galeria">
      <div class="foto-principal">
        <img :src="fotos[0].url" :alt="fotos[0].alt" @click="abrirFoto(0)" />
      </div>
      <div class="miniaturas">
        <div
          v-for="(foto, index) in fotos.slice(1)"
          :key="index + 1"
          class="miniatura"
          @click="abrirFoto(index + 1)"
        >
          <img :src="foto.url" :alt="foto.alt" />
        </div>
      </div>
    </div>

    <div class="info">
      <h2>{{ titulo }}</h2>
      <p class="capacidade">{{ capacidade }}</p>
      <ul class="itens-lista">
        <li v-for="(item, index) in itens" :key="index">{{ item }}</li>
      </ul>
      <div class="botoes">
        <a :href="linkReserva" target="_blank" rel="noopener noreferrer" class="btn reservar"
          >Reservar</a
        >
        <a
          :href="linkReserva"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-outline mais-info"
          >Mais Informações</a
        >
      </div>
    </div>

    <!-- Modal para visualização ampliada das fotos -->
    <div v-if="isModalAberto" class="modal">
      <div class="modal-conteudo">
        <span class="fechar" @click="fecharModal">&times;</span>
        <img :src="fotos[fotoAtual].url" :alt="fotos[fotoAtual].alt" class="foto-modal" />
        <button class="nav anterior" @click="fotoAnterior">&#10094;</button>
        <button class="nav proxima" @click="proxFoto">&#10095;</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.acomodacao {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
}

.galeria {
  flex: 1;
}

.foto-principal {
  margin-bottom: 1rem;
}

.foto-principal img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  cursor: pointer;
}

.miniaturas {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.miniatura {
  width: calc(25% - 0.5rem);
  cursor: pointer;
}

.miniatura img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  transition: opacity 0.3s;
}

.miniatura img:hover {
  opacity: 0.8;
}

.info {
  flex: 1;
}

.info h2 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.capacidade {
  color: var(--secondary-color);
  font-weight: bold;
  margin-bottom: 1rem;
}

.itens-lista {
  list-style-position: inside;
  margin-bottom: 2rem;
}

.itens-lista li {
  margin-bottom: 0.5rem;
}

.botoes {
  display: flex;
  gap: 1rem;
}

.reservar,
.mais-info {
  padding: 0.75rem 1.5rem;
}

/* Estilos do modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-conteudo {
  position: relative;
  width: 80%;
  max-width: 1000px;
}

.foto-modal {
  width: 100%;
  max-height: 80vh;
  object-fit: contain;
}

.fechar {
  position: absolute;
  top: -40px;
  right: 0;
  color: white;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 24px;
  padding: 15px;
  cursor: pointer;
  border-radius: 50%;
}

.anterior {
  left: 10px;
}

.proxima {
  right: 10px;
}

@media (max-width: 768px) {
  .acomodacao {
    flex-direction: column;
  }

  .miniatura {
    width: calc(33.33% - 0.5rem);
  }
}
</style>
