# Projeto Askhub AI

Uma aplicação moderna de Q&A (Perguntas e Respostas) com **Inteligência Artificial** desenvolvida em React e TypeScript. O projeto permite criar salas de perguntas interativas onde usuários podem fazer perguntas via texto ou gravação de áudio e receber respostas automatizadas geradas por IA.

## ✨ Funcionalidades

### 📝 Sistema de Perguntas
- ✅ **Criação de Salas** - Crie salas temáticas com nome e descrição
- ✅ **Perguntas por Texto** - Digite perguntas diretamente no formulário
- ✅ **Respostas com IA** - Receba respostas automáticas geradas por inteligência artificial
- ✅ **Histórico de Perguntas** - Visualize todas as perguntas e respostas da sala
- ✅ **Timestamps** - Acompanhe quando cada pergunta foi feita

### 🎤 Gravação de Áudio
- ✅ **Gravação de Voz** - Grave suas perguntas usando o microfone
- ✅ **Upload Automático** - Envio automático do áudio para processamento
- ✅ **Suporte WebRTC** - Tecnologia moderna de captura de áudio
- ✅ **Cancelamento de Eco** - Áudio com qualidade otimizada
- ✅ **Supressão de Ruído** - Redução automática de ruídos de fundo

### 🎨 Interface Moderna
- ✅ **Design Responsivo** - Funciona perfeitamente em desktop e mobile
- ✅ **Tema Dark/Light** - Interface adaptável ao sistema
- ✅ **Componentes Reutilizáveis** - UI consistente com Shadcn/UI
- ✅ **Animações Suaves** - Experiência visual aprimorada
- ✅ **Feedback Visual** - Estados de carregamento e validação

## 🚀 Tecnologias

### Frontend Core
- **React 19** - Biblioteca para interfaces de usuário com recursos mais recentes
- **TypeScript** - Linguagem tipada para maior segurança e produtividade
- **Vite** - Build tool ultrarrápida e servidor de desenvolvimento

### Roteamento e Estado
- **React Router DOM v7** - Navegação entre páginas com tipagem
- **TanStack Query v5** - Gerenciamento de estado assíncrono e cache inteligente

### Styling e UI
- **Tailwind CSS v4** - Framework de CSS utilitário moderno
- **Shadcn/UI** - Componentes de interface pré-construídos e customizáveis
- **Lucide React** - Biblioteca de ícones moderna e leve
- **Class Variance Authority** - Gerenciamento de variantes de componentes

### Formulários e Validação
- **React Hook Form** - Formulários performáticos com validação
- **Zod** - Validação de esquemas TypeScript-first
- **Hookform Resolvers** - Integração entre React Hook Form e Zod

### Qualidade de Código
- **Biome** - Linter e formatador de código ultrarrápido
- **TypeScript Strict** - Configuração rigorosa para máxima segurança de tipos

## 🏗️ Arquitetura e Padrões

### Design Patterns
- **Component-based Architecture** - Componentes modulares e reutilizáveis
- **Custom Hooks Pattern** - Hooks personalizados para lógica de negócio
- **Compound Components** - Componentes compostos para maior flexibilidade
- **Provider Pattern** - Gerenciamento de contexto com TanStack Query

### Tipagem TypeScript
- **Strict Mode** - Configuração rigorosa para máxima segurança
- **API Types** - Tipagem completa de requests e responses
- **Form Validation** - Esquemas Zod para validação runtime
- **Generic Components** - Componentes tipados e reutilizáveis

### Performance
- **Code Splitting** - Carregamento otimizado de componentes
- **React Query Cache** - Cache inteligente de dados da API
- **Optimistic Updates** - Atualizações otimistas para melhor UX
- **Bundle Optimization** - Build otimizada com Vite

## 📁 Estrutura Detalhada do Projeto

```
src/
├── components/
│   ├── ui/                    # Componentes base (Shadcn/UI)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── create-room-form.tsx   # Formulário de criação de salas
│   ├── question-form.tsx      # Formulário de perguntas
│   ├── question-item.tsx      # Card individual de pergunta
│   ├── question-list.tsx      # Lista de perguntas
│   └── room-list.tsx          # Lista de salas
├── http/                      # Camada de comunicação com API
│   ├── types/                 # Tipagens das APIs
│   │   ├── create-room-request.ts
│   │   ├── create-room-response.ts
│   │   ├── get-rooms-response.ts
│   │   └── ...
│   ├── use-create-question.ts # Hook para criar perguntas
│   ├── use-create-room.ts     # Hook para criar salas
│   ├── use-room-questions.ts  # Hook para buscar perguntas
│   └── use-room.ts            # Hook para buscar salas
├── lib/                       # Utilitários e configurações
│   ├── dayjs.ts              # Configuração de datas
│   └── utils.ts              # Utilitários gerais
├── pages/                     # Páginas da aplicação
│   ├── create-room.tsx       # Página inicial (criação de salas)
│   ├── record-room-audio.tsx # Página de gravação de áudio
│   └── room.tsx              # Página da sala individual
├── app.tsx                   # Configuração de rotas
├── main.tsx                  # Entry point da aplicação
├── index.css                 # Estilos globais e tema
└── vite-env.d.ts            # Tipagens do Vite
```


## ⚙️ Configuração e Setup

### Pré-requisitos

- **Node.js 18+** (Recomendado: Node.js 20 LTS)
- **npm** ou **yarn** ou **pnpm**
- **Git** para controle de versão

### Instalação

```bash
# Clone o repositório
git clone https://github.com/natanD1/AskHubAI.git

# Navegue para o diretório
cd AskHubAI/web

# Instale as dependências
npm install

# Ou usando yarn
yarn install

# Ou usando pnpm
pnpm install
```

### Configuração do Ambiente

1. **Configure a API Backend** (necessária para funcionalidade completa)
   - A aplicação espera uma API REST em `http://localhost:3333`
   - Certifique-se de que o backend esteja rodando antes de iniciar o frontend

2. **Permissões do Navegador**
   - Para gravação de áudio, permita acesso ao microfone quando solicitado
   - A funcionalidade de áudio requer HTTPS em produção

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# O projeto estará disponível em
# http://localhost:5173
```

**Funcionalidades Disponíveis no Modo Dev:**
- ✅ Hot reload automático
- ✅ TypeScript type checking
- ✅ Biome linting em tempo real
- ✅ Vite fast refresh

### Build para Produção

```bash
# Gere a build de produção
npm run build

# Arquivos otimizados serão gerados em ./dist/

# Visualize a build localmente
npm run preview
```

### Validação de Código

```bash
# Execute o linter e formatador
npm run lint

# Biome irá:
# - Corrigir problemas de formatação automaticamente
# - Reportar erros de lint
# - Aplicar regras de código consistentes
```

## 🔧 Configurações Técnicas

### Vite Configuration
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  }
})
```

### TypeScript Setup
- **Strict Mode**: Ativado para máxima segurança de tipos
- **Path Mapping**: `@/*` aponta para `./src/*`
- **Target**: ES2022 para compatibilidade moderna
- **Module Resolution**: Bundler para otimização

### Biome Configuration
```jsonc
// biome.jsonc
{
  "extends": ["ultracite"],
  "javascript": {
    "formatter": {
      "semicolons": "asNeeded",
      "lineWidth": 120
    }
  }
}
```

### Tailwind CSS
- **Versão 4.x** com novos recursos
- **Variáveis CSS** personalizadas para temas
- **Dark Mode** automático baseado na classe
- **Plugins**: tw-animate-css para animações

## 🌐 API e Endpoints

A aplicação consome uma **API REST** local em `http://localhost:3333`:

### Salas (Rooms)
```typescript
// Listar todas as salas
GET /rooms
Response: Array<{
  id: string
  name: string
  questionsCount: number
  createdAt: string
}>

// Criar nova sala
POST /rooms
Body: {
  name: string
  description?: string
}
Response: { roomId: string }
```

### Perguntas (Questions)
```typescript
// Listar perguntas de uma sala
GET /rooms/:roomId/questions
Response: Array<{
  id: string
  question: string
  answer: string | null
  createdAt: string
}>

// Criar nova pergunta
POST /rooms/:roomId/questions
Body: { question: string }
Response: {
  questionId: string
  answer: string | null
}
```

### Áudio (Audio Recording)
```typescript
// Upload de áudio para processamento
POST /rooms/:roomId/audio
Content-Type: multipart/form-data
Body: FormData com arquivo de áudio (.webm)
Response: { success: boolean, transcription?: string }
```

## 🚦 Status de Funcionalidades

| Funcionalidade | Status | Descrição |
|----------------|--------|-----------|
| ✅ Criação de Salas | Concluído | Criar salas com nome e descrição |
| ✅ Listagem de Salas | Concluído | Visualizar salas existentes com métricas |
| ✅ Perguntas por Texto | Concluído | Formular perguntas via textarea |
| ✅ Respostas com IA | Concluído | Receber respostas automáticas |
| ✅ Gravação de Áudio | Concluído | Gravar perguntas por voz |
| ✅ Interface Responsiva | Concluído | Design adaptado para mobile/desktop |
| ✅ Validação de Formulários | Concluído | Validação com Zod e React Hook Form |
| ✅ Cache Otimizado | Concluído | TanStack Query para performance |
| 🔄 Transcrição de Áudio | Em Desenvolvimento | Converter áudio em texto via IA |
| 🔄 Respostas por Voz | Planejado | Text-to-Speech para respostas |
| 🔄 Salas Privadas | Planejado | Sistema de autenticação |

## 🎨 Capturas de Tela

### Página Inicial
- Interface de criação de salas
- Lista de salas recentes com métricas
- Design moderno com tema dark

### Sala Individual
- Formulário de perguntas intuitivo
- Histórico de Q&A organizado
- Botão de gravação de áudio destacado

### Gravação de Áudio
- Interface minimalista para gravação
- Feedback visual do status de gravação
- Upload automático em chunks de 5 segundos

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. **Clone** seu fork: `git clone https://github.com/SEU_USERNAME/AskHubAI.git`
3. **Crie** uma branch: `git checkout -b feature/nova-funcionalidade`
4. **Commit** suas mudanças: `git commit -m 'feat: adiciona nova funcionalidade'`
5. **Push** para a branch: `git push origin feature/nova-funcionalidade`
6. **Abra** um Pull Request

### Padrões de Commit

Utilizamos [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: nova funcionalidade
fix: correção de bug
docs: atualização de documentação
style: mudanças de formatação
refactor: refatoração de código
test: adição de testes
chore: atualizações de configuração
```

## 🛠️ Tecnologias em Detalhes

### Frontend Stack
- **React 19**: Concurrent features, automatic batching
- **TypeScript 5.8**: Latest features and optimizations
- **Vite 7**: Ultra-fast bundling e HMR
- **Tailwind CSS 4**: Novas funcionalidades e performance

### State Management
- **TanStack Query**: Server state management
- **React Hook Form**: Form state e validação
- **React Router**: Client-side routing

### Audio Processing
- **MediaRecorder API**: Gravação nativa do navegador
- **WebRTC**: Otimizações de áudio em tempo real
- **WebM Format**: Formato otimizado para web

## 📚 Recursos Úteis

- [React 19 Documentation](https://react.dev/)
- [TanStack Query Guide](https://tanstack.com/query/latest)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Shadcn/UI Components](https://ui.shadcn.com/)
- [Biome Formatter](https://biomejs.dev/)

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Natan Dourado** - [@natanD1](https://github.com/natanD1)

---

<div align="center">
  <p>
    <strong>AskHubAI</strong> - Transformando perguntas em conhecimento com IA
  </p>
  <p>
    <a href="#-funcionalidades">Funcionalidades</a> •
    <a href="#-tecnologias">Tecnologias</a> •
    <a href="#️-configuração-e-setup">Setup</a> •
    <a href="#-api-e-endpoints">API</a> •
    <a href="#-contribuindo">Contribuir</a>
  </p>
</div>

---


