# AskHubAI

Projeto desenvolvido e inspirado durante o evento da **Rocketseat** para criar uma aplicação de salas de chat com React e TypeScript.

## 🚀 Tecnologias

- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Linguagem de programação tipada
- **Vite** - Build tool e servidor de desenvolvimento
- **React Router DOM** - Navegação entre páginas
- **TanStack Query** - Gerenciamento de estado e cache de dados
- **Tailwind CSS** - Framework de CSS utilitário
- **Shadcn/UI** - Componentes de interface pré-construídos
- **Lucide React** - Ícones
- **Biome** - Linter e formatador de código

## 🏗️ Padrões de Projeto

- **Component-based Architecture** - Componentes reutilizáveis
- **TypeScript Types** - Tipagem estática para parâmetros e responses
- **Custom Hooks** - Hooks personalizados com TanStack Query
- **Atomic Design** - Organização de componentes UI
- **Path Aliasing** - Imports simplificados com `@/`

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── ui/              # Componentes de interface
├── lib/
│   └── utils.ts         # Utilitários
├── pages/
│   ├── createRoom.tsx   # Página de criação de salas
│   └── room.tsx         # Página da sala
├── app.tsx              # Configuração de rotas
└── main.tsx             # Entry point
```

## ⚙️ Configuração e Setup

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Navegue para o diretório
cd web

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Build

```bash
# Gere a build de produção
npm run build

# Visualize a build
npm run preview
```

## 🔧 Configurações Importantes

- **Vite Config**: Configurado com plugin React e Tailwind
- **TypeScript**: Configuração strict habilitada
- **Biome**: Formatação automática de código
- **Path Mapping**: Alias `@/` para `./src`
- **Tailwind**: Configuração com variáveis CSS e tema customizado

## 🌐 API

A aplicação consome uma API REST local rodando em `http://localhost:3333` com os seguintes endpoints:

- `GET /rooms` - Lista todas as salas disponíveis

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção

---


