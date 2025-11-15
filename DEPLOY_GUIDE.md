# 📋 Guia de Deploy - Residencial Maresias

Este documento explica como fazer alterações no site e realizar o deploy para o GitHub Pages.

## 🚀 Processo de Deploy (Resumo Rápido)

**Opção 1 - Mais Simples (Recomendado):**
```bash
cd "Residencia Maresias"
npm run deploy
```

**Opção 2 - Passo a Passo:**
```bash
cd "Residencia Maresias"
npm run build
cp ../CNAME dist/
npx gh-pages -d dist
```

> **Nota**: O arquivo `CNAME` já está configurado na pasta `public/`, então será incluído automaticamente no build. A cópia manual só é necessária se precisar sobrescrever.

---

## 📁 Estrutura do Projeto

```
Residencial-Maresias/
├── Residencia Maresias/          # Pasta principal do projeto Vue.js
│   ├── src/
│   │   ├── components/           # Componentes Vue reutilizáveis
│   │   ├── views/               # Páginas do site
│   │   ├── locales/             # Arquivos de tradução (pt-BR, en-US, es-ES)
│   │   ├── assets/              # Arquivos CSS e JS
│   │   └── router/              # Configuração de rotas
│   ├── public/
│   │   ├── assets/              # Imagens e arquivos estáticos
│   │   ├── 404.html             # Redirecionamento para SPA
│   │   ├── CNAME                # Domínio customizado (incluído no build)
│   │   └── index.html
│   ├── package.json             # Dependências do projeto
│   └── vite.config.js           # Configuração do Vite
├── CNAME                        # Arquivo de domínio customizado (backup)
└── DEPLOY_GUIDE.md             # Este arquivo
```

---

## 🛠️ Tipos de Alterações Comuns

### 1. **Alteração de Textos**

- **Localização**: `src/locales/pt-BR.js`, `src/locales/en-US.js`, `src/locales/es-ES.js`
- **Como fazer**: Edite os textos nos arquivos de tradução
- **Exemplo**:

```javascript
// src/locales/pt-BR.js
export default {
  home: {
    title: "Residencial Maresias", // ← Altere aqui
    welcome: {
      title: "Bem-vindo ao Residencial Maresias", // ← Ou aqui
    },
  },
};
```

### 2. **Alteração de Imagens**

- **Localização**: `public/assets/`
- **Como fazer**:
  1. Substitua a imagem na pasta correspondente
  2. Mantenha o mesmo nome do arquivo OU
  3. Atualize o caminho no código Vue

### 3. **Alteração de Layout/Estilo**

- **Localização**: Arquivos `.vue` em `src/components/` ou `src/views/`
- **Como fazer**: Edite a seção `<style>` dos componentes

### 4. **Adição de Novas Páginas**

- **Localização**: `src/views/` + `src/router/index.js`
- **Como fazer**:
  1. Crie o arquivo `.vue` em `src/views/`
  2. Adicione a rota em `src/router/index.js`

---

## 🔧 Ferramentas Necessárias

### Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** (vem com Node.js)
- **Git** (para GitHub Pages)

### Verificar se está tudo instalado:

```bash
node --version
npm --version
git --version
```

---

## 📝 Processo Completo de Alteração e Deploy

### **Passo 1: Navegue até a pasta do projeto**

```bash
cd "Residencia Maresias"
```

### **Passo 2: Faça suas alterações**

- Edite os arquivos necessários (textos, imagens, estilos)
- Use seu editor de código preferido (VS Code, Sublime, etc.)

### **Passo 3: Teste localmente (Opcional mas recomendado)**

```bash
npm run dev
```

- Acesse `http://localhost:5173` no navegador
- Verifique se suas alterações estão corretas
- Pressione `Ctrl+C` para parar o servidor

### **Passo 4: Compile o projeto**

```bash
npm run build
```

- Este comando cria a pasta `dist/` com os arquivos otimizados
- **IMPORTANTE**: Sempre execute este comando antes do deploy

### **Passo 5: Faça o deploy**

**Opção 1 - Comando único (Recomendado):**
```bash
npm run deploy
```

Este comando automaticamente:
- Executa o build (`npm run build`)
- Faz o deploy para o GitHub Pages (`gh-pages -d dist`)

**Opção 2 - Deploy manual:**
```bash
npx gh-pages -d dist
```

- Envia os arquivos para o GitHub Pages
- Aguarde a mensagem "Published"

> **Nota**: O arquivo `CNAME` na pasta `public/` é automaticamente incluído no build, garantindo que o domínio customizado funcione corretamente.

### **Passo 6: Aguarde a atualização**

- O site demora **2-5 minutos** para atualizar
- Acesse `residencialmaresias.com.br` para verificar

---

## 🎯 Comandos Úteis

### Desenvolvimento

```bash
# Instalar dependências (só na primeira vez)
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Parar servidor de desenvolvimento
Ctrl+C
```

### Deploy

```bash
# Deploy completo (execute na pasta "Residencia Maresias")
# Opção 1 - Mais simples:
npm run deploy

# Opção 2 - Manual:
npm run build && npx gh-pages -d dist
```

````

---

## 🚨 Problemas Comuns e Soluções

### **Problema**: "npm: command not found"

**Solução**: Instale o Node.js do site oficial (nodejs.org)

### **Problema**: "gh-pages: command not found"

**Solução**:

```bash
npm install -g gh-pages
````

### **Problema**: Imagens não carregam após deploy

**Solução**: Verifique se os caminhos das imagens começam com `/assets/`

### **Problema**: Site não atualiza após deploy

**Solução**:

1. Aguarde 5 minutos
2. Limpe o cache do navegador (Ctrl+F5)
3. Verifique se o build foi executado corretamente

### **Problema**: Erro de "Permission denied" no deploy

**Solução**: Verifique se você tem permissão no repositório GitHub

### **Problema**: Links diretos retornam erro 404

**Solução**: O arquivo `404.html` já está configurado para redirecionar rotas não encontradas para o Vue Router. Isso resolve o problema de acessar URLs diretamente em Single Page Applications (SPA).

---

## 🌐 Informações do Projeto

### URLs

- **Site**: https://residencialmaresias.com.br
- **Repositório**: https://github.com/analuandr/Residencial-Maresias
- **GitHub Pages**: https://analuandr.github.io/Residencial-Maresias/

### Tecnologias

- **Framework**: Vue.js 3
- **Build Tool**: Vite
- **Roteamento**: Vue Router
- **Internacionalização**: Vue I18n
- **Deploy**: GitHub Pages
- **Domínio**: Cloudflare

### Estrutura de Branches

- **main**: Código fonte
- **gh-pages**: Arquivos compilados para produção (criado automaticamente)

---

## 🎨 Dicas Extras

### **Para alterações rápidas de texto:**

1. Edite apenas os arquivos em `src/locales/`
2. Execute o deploy
3. Pronto!

### **Para alterações de imagens:**

1. Substitua a imagem em `public/assets/`
2. Mantenha o mesmo nome do arquivo
3. Execute o deploy

### **Para alterações de layout:**

1. Edite os arquivos `.vue`
2. Teste localmente
3. Execute o deploy

**Criado em**: 2024
**Última atualização**: Dezembro 2024
**Versão**: 1.1
