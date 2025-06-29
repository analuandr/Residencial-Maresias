<template>
  <div class="about-view">
    <section class="section-full-width about-section">
      <div class="container">
        <h1><i class="fas fa-info-circle"></i> Sobre Nós (Exemplo)</h1>
        <p>
          Esta é a página "Sobre". Aqui você pode adicionar informações sobre o Residencial
          Maresias, sua história, missão, visão e valores.
        </p>
        <p>
          Como esta página foi gerada automaticamente pelo Vue, ela está bem simples. Você pode
          expandi-la com mais conteúdo e design.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-view {
  width: 100%;
}

/* Estilo base para todas as seções full-width */
.section-full-width {
  width: 100%;
  padding: 3rem 0; /* Espaçamento vertical */
  background-color: var(--light-color); /* Cor de fundo */
}

/* Container interno para limitar a largura do conteúdo */
.section-full-width .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center; /* Centralizar texto nesta página simples */
}

.about-section h1 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
}

.about-section h1 i {
  margin-right: 10px;
  color: var(--accent-color);
}

.about-section p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--dark-color);
  max-width: 800px; /* Limitar largura do parágrafo */
  margin: 0 auto 1rem auto; /* Centralizar parágrafo */
}

@media (max-width: 768px) {
  .section-full-width {
    padding: 2rem 0;
  }
  .about-section h1 {
    font-size: 2rem;
  }
  /* Aumentar padding lateral no mobile */
  .section-full-width .container {
    padding: 0 1.5rem;
  }

  .about-header h1 {
    font-size: 2rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-text h2 {
    font-size: 1.6rem;
  }
}

@media (max-width: 480px) {
  /* Aumentar ainda mais o padding lateral em telas muito pequenas */
  .section-full-width .container {
    padding: 0 2rem;
  }
}
</style>
