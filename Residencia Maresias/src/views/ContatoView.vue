<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Dados de contato
const contatosResidenciais = [
  {
    nome: t('contact.residentials.bombas'),
    endereco: 'Rua Tiriba, 54 - Bombas, Bombinhas - SC',
    telefoneFixo: '+55 (47) 3369 0101',
    whatsapp: '+55 (47) 3170 3551',
    email: 'atendimento@marcosimoveis.com.br',
    codigoPesquisa: 'L092; L093; L094; L095',
    emailSubject: 'Olá!%0AEstou entrando em contato referente ao Residencial Maresias Bombas',
    whatsappMessage: 'Olá!%0AEstou entrando em contato referente ao Residencial Maresias Bombas',
  },
  {
    nome: t('contact.residentials.mariscal'),
    endereco: 'Rua Jaboticabeira, 194 - Canto Grande, Bombinhas - SC',
    telefoneFixo: '+55 (47) 3393 3220',
    whatsapp: '+55 (47) 99669 0082',
    email: 'contato@joaoimoveis.com.br',
    codigoPesquisa: 'Códigos 77, 71, 74, 343, 375, 617',
    emailSubject: 'Olá!%0AEstou entrando em contato referente ao Residencial Maresias Canto Grande',
    whatsappMessage:
      'Olá!%0AEstou entrando em contato referente ao Residencial Maresias Canto Grande',
  },
  {
    nome: t('contact.residentials.jaboticabeira'),
    endereco: 'Rua Jaboticabeira, 194 - Canto Grande, Bombinhas - SC',
    telefoneFixo: '+55 (47) 3393 3220',
    whatsapp: '+55 (47) 99669 0082',
    email: 'contato@joaoimoveis.com.br',
    codigoPesquisa: 'Casa Jaboticabeira Cód 906',
    emailSubject: 'Olá!%0AEstou entrando em contato referente ao Casa Jaboticabeira Cód 906',
    whatsappMessage: 'Olá!%0AEstou entrando em contato referente ao Casa Jaboticabeira Cód 906',
  },
]
</script>

<template>
  <div class="contato-view">
    <section class="section-full-width contato-header-section">
      <div class="container">
        <div class="contato-header">
          <h1><span class="material-icons">headset_mic</span> {{ t('contact.title') }}</h1>
          <p>{{ t('contact.description') }}</p>
        </div>
      </div>
    </section>

    <section class="section-full-width contatos-grid-section">
      <div class="container">
        <div class="contatos-grid">
          <div v-for="(contato, index) in contatosResidenciais" :key="index" class="contato-card">
            <h2><span class="material-icons">location_on</span> {{ contato.nome }}</h2>

            <div class="contato-info">
              <div class="info-item">
                <h3>
                  <span class="material-icons">place</span> {{ t('contact.fields.address') }}:
                </h3>
                <p>{{ contato.endereco }}</p>
              </div>

              <div class="info-item">
                <h3><span class="material-icons">call</span> {{ t('contact.fields.phone') }}:</h3>
                <p>
                  <a :href="'tel:' + contato.telefoneFixo">{{ contato.telefoneFixo }}</a>
                </p>
              </div>

              <div class="info-item">
                <h3>
                  <span class="material-icons">chat</span> {{ t('contact.fields.whatsapp') }}:
                </h3>
                <p>
                  <a
                    :href="
                      'https://wa.me/' +
                      contato.whatsapp.replace(/[^\d]/g, '') +
                      '?text=' +
                      contato.whatsappMessage
                    "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ contato.whatsapp }}
                  </a>
                </p>
              </div>

              <div class="info-item">
                <h3><span class="material-icons">email</span> {{ t('contact.fields.email') }}:</h3>
                <p>
                  <a :href="'mailto:' + contato.email + '?subject=' + contato.emailSubject">
                    {{ contato.email }}
                  </a>
                </p>
              </div>

              <div class="info-item">
                <h3>
                  <span class="material-icons">search</span> {{ t('contact.fields.searchCode') }}:
                </h3>
                <p>{{ contato.codigoPesquisa }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="section-full-width contato-form-outer-section">
      <div class="container">
        <div class="contato-form-section">
          <h2><i class="fas fa-paper-plane"></i> Formulário de Contato</h2>
          <p>Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>

          <form class="contato-form">
            <div class="form-group">
              <label for="nome">Nome:</label>
              <input type="text" id="nome" name="nome" required />
            </div>

            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div class="form-group">
              <label for="telefone">Telefone:</label>
              <input type="tel" id="telefone" name="telefone" />
            </div>

            <div class="form-group">
              <label for="residencial">Residencial de interesse:</label>
              <select id="residencial" name="residencial">
                <option value="">Selecione...</option>
                <option value="bombas">Residencial Maresias Bombas</option>
                <option value="mariscal">Residencial Maresias Mariscal</option>
                <option value="jaboticabeira">Casa Jaboticabeira</option>
              </select>
            </div>

            <div class="form-group">
              <label for="mensagem">Mensagem:</label>
              <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
            </div>

            <button type="submit" class="btn">Enviar mensagem</button>
          </form>
        </div>
      </div>
    </section> -->
  </div>
</template>

<style scoped>
.contato-view {
  width: 100%;
}

/* Estilo base para todas as seções full-width */
.section-full-width {
  width: 100%;
  padding: 3rem 0; /* Espaçamento vertical ajustado */
}

/* Container interno para limitar a largura do conteúdo */
.section-full-width .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Seção do Cabeçalho */
.contato-header-section {
  background-color: var(--light-color); /* Cor de fundo alternada */
}

.contato-header {
  text-align: center;
}

.contato-header h1 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

.contato-header h1 .material-icons {
  margin-right: 10px;
  color: var(--accent-color);
  vertical-align: middle;
}

.contato-header p {
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto;
  color: var(--dark-color);
}

/* Seção Grid de Contatos */
.contatos-grid-section {
  background-color: var(--beach-bg-light); /* Cor padrão */
}

.contatos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); /* Ajuste minmax */
  gap: 2rem;
}

.contato-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.contato-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.contato-card h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-color);
  font-size: 1.4rem;
  display: flex;
  align-items: center;
}

.contato-card h2 .material-icons {
  margin-right: 10px;
  color: var(--accent-color);
  vertical-align: middle;
}

.contato-info {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.info-item h3 {
  font-size: 1rem;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.info-item h3 .material-icons {
  margin-right: 8px;
  font-size: 1rem;
  width: 20px;
  text-align: center;
  color: var(--secondary-color);
  vertical-align: middle;
}

.info-item p {
  color: var(--dark-color);
  line-height: 1.5;
}

.info-item a {
  color: var(--primary-color);
  word-break: break-all;
}

.info-item a:hover {
  text-decoration: underline;
}

.imobiliaria-info {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px dashed var(--border-color);
}

/* Seção do Formulário */
.contato-form-outer-section {
  background-color: var(--light-color); /* Cor de fundo alternada */
}

.contato-form-section {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2.5rem;
  max-width: 800px; /* Aumentar largura máxima */
  margin: 0 auto;
}

.contato-form-section h2 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.8rem;
}

.contato-form-section h2 i {
  margin-right: 10px;
  color: var(--accent-color);
}

.contato-form-section p {
  margin-bottom: 2rem;
  text-align: center;
  color: var(--dark-color);
}

.contato-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: bold;
  color: var(--dark-color);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.8rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 1rem;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.btn {
  align-self: center; /* Centralizar botão */
  width: fit-content; /* Ajustar largura do botão */
}

@media (max-width: 768px) {
  .section-full-width {
    padding: 2rem 0;
  }

  .contatos-grid {
    grid-template-columns: 1fr;
  }

  .contato-form-section {
    padding: 2rem 1.5rem;
  }

  .contato-header h1 {
    font-size: 2rem;
  }

  /* Aumentar padding lateral no mobile */
  .section-full-width .container {
    padding: 0 1.5rem;
  }

  .contato-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contato-form {
    order: 2;
  }

  .contato-info {
    order: 1;
  }

  .contato-info h2 {
    font-size: 1.6rem;
  }

  .mapa-container {
    height: 300px;
  }
}

@media (max-width: 480px) {
  /* Aumentar ainda mais o padding lateral em telas muito pequenas */
  .section-full-width .container {
    padding: 0 2rem;
  }
}
</style>
