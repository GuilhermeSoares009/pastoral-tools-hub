# 🎯 PLANO DE IMPLEMENTAÇÃO COMPLETO
## Ferramentas Católicas Online

---

## 📌 INSTRUÇÕES PARA A IA

**CONTEXTO OBRIGATÓRIO**: Antes de iniciar qualquer tarefa, você DEVE:

1. **Ler TODO o histórico desta conversa** - Todas as decisões técnicas, arquiteturais e de design já foram tomadas e estão documentadas acima
2. **Consultar a skill frontend-design** em `/mnt/skills/public/frontend-design/SKILL.md` ANTES de criar qualquer interface
3. **Analisar as imagens de referência** fornecidas que mostram o design aprovado do projeto
4. **Trabalhar no diretório atual** onde este arquivo está localizado

### 🎨 Direção Estética APROVADA (NÃO NEGOCIÁVEL)

Conforme definido na conversa e nas imagens de referência:

**Identidade Visual:**
- **Tom**: Sereno, organizado, pastoral, acolhedor
- **Inspiração**: Azul mariano (Maria como símbolo de acolhimento), Igreja como espaço de silêncio e ordem
- **Diferencial**: Moderno mas respeitoso - NÃO tech agressivo, NÃO infantil, NÃO SaaS genérico

**Design System Aprovado:**

```css
/* Cores */
--marian-blue: #4A6FA5;           /* Azul mariano médio - cor principal */
--deep-blue: #2C4563;             /* Azul profundo - hierarquia e títulos */
--warm-white: #FAF9F7;            /* Fundo quente */
--light-gray: #F5F4F2;            /* Cinza muito claro */
--gold-accent: #C9A961;           /* Dourado discreto - apenas ícones ativos */
--text-primary: #1A1A1A;          /* Texto principal */
--text-secondary: #666666;        /* Texto secundário */

/* Tipografia */
/* Display (títulos): Serifada elegante ou humanista */
/* Sugestões: Crimson Text, Lora, Merriweather, PT Serif */
--font-display: 'Crimson Text', serif;

/* Corpo (texto): Sans-serif refinada e legível */
/* Sugestões: Nunito Sans, Source Sans 3, Work Sans */
/* EVITAR: Arial, Roboto, Inter */
--font-body: 'Nunito Sans', sans-serif;

/* Espaçamento */
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 1.5rem;
--spacing-lg: 2.5rem;
--spacing-xl: 4rem;

/* Bordas */
--radius-sm: 8px;
--radius-md: 12px;

/* Sombras suaves */
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);
--shadow-card-hover: 0 8px 24px rgba(74, 111, 165, 0.12);
```

**Layout Estrutural:**
- Inspiração: 4devs.com.br (mas com identidade própria)
- Sidebar esquerda fixa com categorias
- Header com busca central
- Grid de cards 3 colunas (desktop)
- Espaçamento generoso e respirável

**Interações e Motion:**
- Hover: leve elevação + mudança sutil de cor
- Animações de entrada: fade + translate (suave)
- Microinterações elegantes e silenciosas
- NADA chamativo ou rápido demais

---

## 🏗️ STACK TÉCNICA APROVADA

### Frontend
```
Framework: Next.js 14+ com Static Export (output: 'export')
Styling: Tailwind CSS (customizado com design system)
Icons: Lucide React (ícones simples e elegantes)
Animations: Framer Motion (microinterações sutis)
Forms: React Hook Form + Zod (validação)
```

### Backend (Serverless)
```
Platform: Cloudflare Workers
AI: Cloudflare Workers AI (@cf/meta/llama-2-7b-chat-int8)
Cache: Cloudflare KV
Database: Cloudflare D1 (SQLite serverless) - opcional
```

### Deploy e Infraestrutura
```
Hosting: Cloudflare Pages (100% free tier)
CDN: Cloudflare (global)
Analytics: Cloudflare Web Analytics (sem cookies)
DNS: Cloudflare
Domínio: .com.br (único custo: ~R$ 40/ano)
```

### Repositório
```
Nome: ferramentas-catolicas-online
Versionamento: Git com commits granulares
Estrutura: Monorepo (frontend + workers)
```

---

## 📂 ESTRUTURA DE PASTAS COMPLETA

```
ferramentas-catolicas-online/
│
├── .github/
│   └── workflows/
│       └── deploy.yml                 # CI/CD Cloudflare Pages
│
├── apps/
│   └── web/                           # Next.js Frontend
│       ├── .next/
│       ├── app/
│       │   ├── (home)/
│       │   │   ├── page.tsx           # Homepage
│       │   │   └── layout.tsx
│       │   │
│       │   ├── (tools)/               # Grupo de ferramentas
│       │   │   ├── gerador-repertorio/
│       │   │   │   ├── page.tsx
│       │   │   │   ├── components/
│       │   │   │   └── utils.ts
│       │   │   │
│       │   │   ├── gerador-texto-social/
│       │   │   │   ├── page.tsx
│       │   │   │   └── components/
│       │   │   │
│       │   │   ├── ordem-cantos/
│       │   │   ├── checklist-pascom/
│       │   │   ├── legendas-liturgicas/
│       │   │   ├── roteiro-transmissao/
│       │   │   ├── textos-datas-catolicas/
│       │   │   ├── verificador-liturgico/
│       │   │   └── checklist-casamento/
│       │   │
│       │   ├── sobre/
│       │   │   └── page.tsx
│       │   ├── contato/
│       │   │   └── page.tsx
│       │   ├── privacidade/
│       │   │   └── page.tsx
│       │   │
│       │   ├── layout.tsx             # Root layout
│       │   ├── globals.css
│       │   ├── sitemap.ts             # Sitemap dinâmico
│       │   └── robots.ts
│       │
│       ├── components/
│       │   ├── ui/                    # Design System Components
│       │   │   ├── Button.tsx
│       │   │   ├── Card.tsx
│       │   │   ├── Input.tsx
│       │   │   ├── Badge.tsx
│       │   │   └── Skeleton.tsx
│       │   │
│       │   ├── layout/
│       │   │   ├── Header.tsx
│       │   │   ├── Sidebar.tsx
│       │   │   ├── Footer.tsx
│       │   │   └── SearchBar.tsx
│       │   │
│       │   └── tools/
│       │       ├── ToolCard.tsx
│       │       ├── ToolGrid.tsx
│       │       └── CategoryFilter.tsx
│       │
│       ├── lib/
│       │   ├── data/                  # Dados estáticos (JSON)
│       │   │   ├── ferramentas.json
│       │   │   ├── categorias.json
│       │   │   ├── textos-liturgicos.json
│       │   │   ├── repertorios.json
│       │   │   └── cantos.json
│       │   │
│       │   ├── utils/
│       │   │   ├── cn.ts              # Class names utility
│       │   │   ├── validators.ts      # Zod schemas
│       │   │   └── formatters.ts
│       │   │
│       │   └── services/
│       │       └── api.ts             # API client para Workers
│       │
│       ├── public/
│       │   ├── icons/
│       │   │   └── church-logo.svg
│       │   ├── images/
│       │   └── fonts/                 # Fontes locais (opcional)
│       │
│       ├── styles/
│       │   └── globals.css
│       │
│       ├── next.config.js
│       ├── tailwind.config.ts
│       ├── tsconfig.json
│       └── package.json
│
├── workers/                           # Cloudflare Workers
│   ├── generate-text/
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── wrangler.toml
│   │   └── package.json
│   │
│   ├── validate-liturgy/
│   │   ├── src/
│   │   │   └── index.ts
│   │   └── wrangler.toml
│   │
│   └── process-srt/
│       ├── src/
│       │   └── index.ts
│       └── wrangler.toml
│
├── packages/                          # Código compartilhado
│   └── shared/
│       ├── src/
│       │   ├── types/
│       │   │   └── index.ts
│       │   └── constants/
│       │       └── index.ts
│       ├── tsconfig.json
│       └── package.json
│
├── docs/
│   ├── ARCHITECTURE.md
│   ├── CONTRIBUTING.md
│   └── DEPLOYMENT.md
│
├── .gitignore
├── .editorconfig
├── .prettierrc
├── .eslintrc.json
├── wrangler.toml                      # Config raiz para Pages
├── package.json                       # Workspaces root
├── pnpm-workspace.yaml
├── turbo.json                         # Turborepo config
└── README.md
```

---

## 📋 MILESTONES DO PROJETO

### 🎯 Milestone 1: Setup e Fundação (Semana 1)
**Objetivo**: Configurar ambiente, repositório e design system base

**Entregáveis:**
- [ ] Repositório Git inicializado com estrutura completa
- [ ] Next.js configurado com `output: 'export'`
- [ ] Tailwind CSS customizado com design system
- [ ] Design system base (cores, tipografia, espaçamentos)
- [ ] Componentes UI fundamentais (Button, Card, Input)
- [ ] Layout base (Header, Sidebar, Footer)
- [ ] Cloudflare Pages conectado ao repositório
- [ ] README.md completo
- [ ] Documentação inicial

**Commits Granulares Esperados:**
```
git commit -m "chore: inicializa projeto Next.js com TypeScript"
git commit -m "chore: configura Tailwind CSS com design system mariano"
git commit -m "feat: adiciona design tokens (cores, tipografia, espaçamentos)"
git commit -m "feat: implementa componente Button com variantes"
git commit -m "feat: implementa componente Card com hover elegante"
git commit -m "feat: implementa componente Input com validação visual"
git commit -m "feat: cria layout Header com busca e navegação"
git commit -m "feat: cria layout Sidebar com categorias"
git commit -m "feat: cria layout Footer com links institucionais"
git commit -m "style: ajusta espaçamentos e sombras conforme design"
git commit -m "docs: adiciona README.md completo"
git commit -m "ci: configura deploy automático Cloudflare Pages"
```

---

### 🎯 Milestone 2: Homepage e Catálogo (Semana 2)
**Objetivo**: Criar página inicial com grid de ferramentas

**Entregáveis:**
- [ ] Homepage completa e responsiva
- [ ] Grid de ferramentas populares (3 colunas desktop)
- [ ] Seção "Destaques da Semana"
- [ ] Seção "Recentes"
- [ ] Sistema de busca funcional (client-side)
- [ ] Filtro por categoria
- [ ] Animações de entrada suaves (Framer Motion)
- [ ] Responsividade mobile/tablet
- [ ] SEO metadata configurado

**Commits Granulares Esperados:**
```
git commit -m "feat: adiciona arquivo JSON com dados das ferramentas"
git commit -m "feat: implementa componente ToolCard"
git commit -m "feat: cria grid responsivo de ferramentas"
git commit -m "feat: implementa seção Ferramentas Populares"
git commit -m "feat: implementa seção Destaques da Semana"
git commit -m "feat: implementa seção Recentes"
git commit -m "feat: adiciona SearchBar com debounce"
git commit -m "feat: implementa filtro por categoria"
git commit -m "feat: adiciona animações de entrada com Framer Motion"
git commit -m "style: ajusta responsividade mobile (breakpoints)"
git commit -m "seo: configura metadata dinâmica Next.js"
git commit -m "seo: adiciona Schema.org structured data"
```

---

### 🎯 Milestone 3: Ferramentas Client-Side (Semana 3)
**Objetivo**: Implementar 5 ferramentas que funcionam 100% no frontend

**Ferramentas:**
1. **Gerador de Repertório para Missa** (algoritmo client-side)
2. **Ordem dos Cantos da Missa** (regras litúrgicas em JSON)
3. **Checklist da PASCOM** (template interativo)
4. **Checklist para Casamento na Igreja** (template interativo)
5. **Textos Prontos para Datas Católicas** (banco de textos JSON)

**Entregáveis:**
- [ ] 5 páginas de ferramentas completas
- [ ] Interfaces funcionais e intuitivas
- [ ] Validação de formulários (Zod)
- [ ] Geração de resultados dinâmicos
- [ ] Opção de copiar/baixar resultados
- [ ] Microinterações e feedback visual
- [ ] SEO otimizado por ferramenta

**Commits Granulares Esperados (exemplo Gerador de Repertório):**
```
git commit -m "feat(repertorio): cria estrutura da página"
git commit -m "feat(repertorio): adiciona formulário de entrada"
git commit -m "feat(repertorio): implementa validação com Zod"
git commit -m "feat(repertorio): adiciona banco de cantos (JSON)"
git commit -m "feat(repertorio): implementa algoritmo de geração"
git commit -m "feat(repertorio): cria componente de exibição de resultado"
git commit -m "feat(repertorio): adiciona botão copiar para clipboard"
git commit -m "feat(repertorio): adiciona botão download PDF"
git commit -m "style(repertorio): ajusta layout conforme design"
git commit -m "seo(repertorio): configura metadata específica"
```

**Repetir padrão para cada ferramenta:**
- `feat(ordem-cantos): ...`
- `feat(checklist-pascom): ...`
- `feat(checklist-casamento): ...`
- `feat(textos-datas): ...`

---

### 🎯 Milestone 4: Cloudflare Workers Setup (Semana 4)
**Objetivo**: Configurar infraestrutura serverless

**Entregáveis:**
- [ ] Cloudflare Workers inicializados
- [ ] Cloudflare KV configurado
- [ ] Cloudflare Workers AI configurado
- [ ] Rate limiting implementado (KV-based)
- [ ] CORS e segurança configurados
- [ ] Variáveis de ambiente configuradas
- [ ] Deploy dos workers funcionando

**Commits Granulares Esperados:**
```
git commit -m "chore(workers): inicializa projeto generate-text"
git commit -m "chore(workers): configura wrangler.toml"
git commit -m "feat(workers): implementa rate limiting com KV"
git commit -m "feat(workers): configura CORS headers"
git commit -m "feat(workers): adiciona validação de entrada (Zod)"
git commit -m "feat(workers): integra Cloudflare Workers AI"
git commit -m "feat(workers): implementa cache KV"
git commit -m "feat(workers): adiciona error handling robusto"
git commit -m "ci(workers): configura deploy automático"
git commit -m "test(workers): adiciona testes unitários"
```

---

### 🎯 Milestone 5: Ferramentas com IA (Semana 5)
**Objetivo**: Implementar ferramentas que usam Workers + IA

**Ferramentas:**
1. **Gerador de Texto para Redes da Igreja** (Workers AI)
2. **Roteiro de Transmissão da Missa** (template + IA)
3. **Gerador de Legendas Litúrgicas** (processamento .SRT)

**Entregáveis:**
- [ ] Worker: gerador de texto (Cloudflare AI)
- [ ] Worker: processador de SRT
- [ ] 3 páginas de ferramentas integradas
- [ ] Loading states elegantes
- [ ] Error handling com mensagens amigáveis
- [ ] Cache agressivo (KV)

**Commits Granulares Esperados:**
```
git commit -m "feat(generate-text-worker): implementa prompt para textos católicos"
git commit -m "feat(generate-text-worker): adiciona cache por tema"
git commit -m "feat(texto-social): cria interface de entrada"
git commit -m "feat(texto-social): integra com worker AI"
git commit -m "feat(texto-social): adiciona loading state"
git commit -m "feat(texto-social): implementa retry automático"
git commit -m "feat(process-srt-worker): implementa parser SRT"
git commit -m "feat(legendas): cria upload de arquivo .SRT"
git commit -m "feat(legendas): processa e exibe resultado"
git commit -m "style: ajusta feedback visual de carregamento"
```

---

### 🎯 Milestone 6: Ferramenta Avançada (Semana 6)
**Objetivo**: Implementar verificador de texto litúrgico (NLP complexo)

**Entregáveis:**
- [ ] Worker com regras litúrgicas
- [ ] Detecção de termos incorretos
- [ ] Sugestões de correção
- [ ] Interface com highlights
- [ ] Explicações pedagógicas

**Commits Granulares Esperados:**
```
git commit -m "feat(validate-worker): adiciona dicionário litúrgico"
git commit -m "feat(validate-worker): implementa validação de termos"
git commit -m "feat(validate-worker): adiciona sistema de sugestões"
git commit -m "feat(verificador): cria interface de editor"
git commit -m "feat(verificador): implementa syntax highlighting"
git commit -m "feat(verificador): exibe erros inline"
git commit -m "feat(verificador): adiciona tooltips explicativos"
```

---

### 🎯 Milestone 7: SEO e Performance (Semana 7)
**Objetivo**: Otimização máxima para tráfego orgânico

**Entregáveis:**
- [ ] Sitemap.xml dinâmico
- [ ] robots.txt otimizado
- [ ] Metadata OpenGraph completa
- [ ] Schema.org em todas as ferramentas
- [ ] Lighthouse score 90+ (todas as métricas)
- [ ] Imagens otimizadas (WebP)
- [ ] Lazy loading implementado
- [ ] Critical CSS inline

**Commits Granulares Esperados:**
```
git commit -m "seo: implementa sitemap.xml dinâmico"
git commit -m "seo: adiciona robots.txt"
git commit -m "seo: configura OpenGraph tags por ferramenta"
git commit -m "seo: implementa Schema.org WebApplication"
git commit -m "perf: otimiza imagens para WebP"
git commit -m "perf: adiciona lazy loading em imagens"
git commit -m "perf: implementa code splitting por rota"
git commit -m "perf: adiciona preload de fontes críticas"
git commit -m "a11y: adiciona ARIA labels"
git commit -m "a11y: garante navegação por teclado"
```

---

### 🎯 Milestone 8: Analytics e Feedback (Semana 8)
**Objetivo**: Implementar tracking e sistema de sugestões

**Entregáveis:**
- [ ] Cloudflare Web Analytics integrado
- [ ] Tracking de uso por ferramenta
- [ ] Botão "Esta ferramenta foi útil?"
- [ ] Formulário de sugestões (D1 database)
- [ ] Worker para salvar sugestões
- [ ] Página de status do sistema

**Commits Granulares Esperados:**
```
git commit -m "feat: integra Cloudflare Web Analytics"
git commit -m "feat: adiciona tracking de eventos customizados"
git commit -m "feat: implementa botão de feedback útil/não útil"
git commit -m "feat(suggestions-worker): cria endpoint para sugestões"
git commit -m "feat(suggestions): cria formulário de sugestões"
git commit -m "feat(suggestions): implementa validação e envio"
git commit -m "feat: adiciona página de status"
```

---

### 🎯 Milestone 9: Polimento e Testes (Semana 9)
**Objetivo**: Refinamento final e garantia de qualidade

**Entregáveis:**
- [ ] Testes E2E (Playwright) - principais fluxos
- [ ] Testes de acessibilidade (jest-axe)
- [ ] Revisão de copy e microtextos
- [ ] Ajustes finos de design
- [ ] Correção de bugs identificados
- [ ] Teste de carga nos workers
- [ ] Documentação completa atualizada

**Commits Granulares Esperados:**
```
git commit -m "test: adiciona testes E2E para homepage"
git commit -m "test: adiciona testes E2E para gerador de repertório"
git commit -m "test: adiciona testes de acessibilidade"
git commit -m "fix: corrige overflow em mobile Safari"
git commit -m "fix: ajusta contraste de texto para WCAG AA"
git commit -m "style: refina microinterações de hover"
git commit -m "docs: atualiza CONTRIBUTING.md"
git commit -m "docs: adiciona guia de deployment"
```

---

### 🎯 Milestone 10: Lançamento (Semana 10)
**Objetivo**: Deploy em produção e monitoramento

**Entregáveis:**
- [ ] Domínio configurado no Cloudflare
- [ ] DNS apontando corretamente
- [ ] SSL configurado
- [ ] Deploy final em produção
- [ ] Monitoramento ativo
- [ ] Backup de dados estáticos
- [ ] Plano de manutenção
- [ ] Comunicação de lançamento

**Commits Granulares Esperados:**
```
git commit -m "deploy: configura domínio em produção"
git commit -m "deploy: adiciona redirects e rewrites"
git commit -m "deploy: configura headers de segurança"
git commit -m "deploy: ativa Cloudflare cache rules"
git commit -m "docs: adiciona CHANGELOG.md"
git commit -m "chore: bump version to 1.0.0"
git commit -m "chore: adiciona badge de status no README"
```

---

## 🔧 SETUP DE DESENVOLVIMENTO

### Pré-requisitos
```bash
Node.js: >= 18.x
pnpm: >= 8.x (recomendado) ou npm
Git: >= 2.x
Cloudflare Account: free tier
```

### Instalação Local

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/ferramentas-catolicas-online.git
cd ferramentas-catolicas-online

# 2. Instale dependências (usando pnpm workspaces)
pnpm install

# 3. Configure variáveis de ambiente
cp apps/web/.env.example apps/web/.env.local
# Edite .env.local conforme necessário

# 4. Rode o desenvolvimento
pnpm dev

# Frontend estará em: http://localhost:3000
```

### Comandos Disponíveis

```bash
# Desenvolvimento
pnpm dev              # Inicia Next.js em modo dev
pnpm dev:workers      # Inicia workers localmente (Wrangler)

# Build
pnpm build            # Build de produção (static export)
pnpm build:workers    # Build dos workers

# Lint e Format
pnpm lint             # ESLint
pnpm format           # Prettier
pnpm type-check       # TypeScript check

# Testes
pnpm test             # Testes unitários
pnpm test:e2e         # Testes E2E (Playwright)
pnpm test:a11y        # Testes de acessibilidade

# Deploy
pnpm deploy           # Deploy completo (Pages + Workers)
pnpm deploy:pages     # Deploy apenas frontend
pnpm deploy:workers   # Deploy apenas workers
```

---

## 🚀 DEPLOY NO CLOUDFLARE

### Setup Inicial Cloudflare

```bash
# 1. Instalar Wrangler CLI
npm install -g wrangler

# 2. Autenticar
wrangler login

# 3. Criar KV namespace
wrangler kv:namespace create "FERRAMENTAS_KV"
wrangler kv:namespace create "FERRAMENTAS_KV" --preview

# Copiar IDs para wrangler.toml
```

### Configuração wrangler.toml (Raiz)

```toml
name = "ferramentas-catolicas"
compatibility_date = "2024-01-01"

# Pages Configuration
pages_build_output_dir = "apps/web/out"

[env.production]
pages_build_output_dir = "apps/web/out"

# KV Bindings
[[kv_namespaces]]
binding = "KV"
id = "SEU_KV_ID_AQUI"
preview_id = "SEU_PREVIEW_KV_ID_AQUI"
```

### Deploy Manual

```bash
# 1. Build do projeto
pnpm build

# 2. Deploy Pages
npx wrangler pages deploy apps/web/out --project-name=ferramentas-catolicas

# 3. Deploy Workers (se houver)
npx wrangler deploy workers/generate-text/src/index.ts
```

### Deploy Automático (GitHub Actions)

Arquivo: `.github/workflows/deploy.yml`

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      deployments: write
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm build
      
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: ferramentas-catolicas
          directory: apps/web/out
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
```

---

## 📝 PADRÃO DE COMMITS GRANULARES

### Convenção de Commits (Conventional Commits)

```
<tipo>(<escopo>): <descrição curta>

[corpo opcional]

[rodapé opcional]
```

### Tipos Permitidos
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação, sem mudança de lógica
- `refactor`: Refatoração sem adicionar feature ou fix
- `perf`: Melhorias de performance
- `test`: Adição ou correção de testes
- `chore`: Tarefas de build, configs, etc
- `ci`: Mudanças em CI/CD
- `seo`: Otimizações de SEO
- `a11y`: Melhorias de acessibilidade

### Exemplos de Commits Granulares

```bash
# RUIM (muito genérico)
git commit -m "adiciona homepage"

# BOM (específico e descritivo)
git commit -m "feat(home): implementa grid de ferramentas populares"
git commit -m "feat(home): adiciona seção de destaques com cards horizontais"
git commit -m "style(home): ajusta espaçamento entre cards para 2rem"
git commit -m "feat(home): implementa animação de entrada com Framer Motion"

# RUIM (muito grande, múltiplas responsabilidades)
git commit -m "feat: adiciona gerador de repertório completo com UI e lógica"

# BOM (commits atômicos)
git commit -m "feat(repertorio): cria componente de formulário de entrada"
git commit -m "feat(repertorio): implementa validação com Zod schema"
git commit -m "feat(repertorio): adiciona banco de dados de cantos (JSON)"
git commit -m "feat(repertorio): implementa algoritmo de seleção por tempo litúrgico"
git commit -m "feat(repertorio): cria componente de exibição de resultados"
git commit -m "style(repertorio): ajusta layout responsivo mobile"
```

### Regras de Ouro

1. **Um commit = Uma mudança lógica** (não misture features diferentes)
2. **Mensagens descritivas** (explique o "o quê" e "por quê")
3. **Commits pequenos** (fáceis de revisar e reverter)
4. **Commits funcionais** (não quebre o build)
5. **Escopos claros** (use nome da ferramenta/componente)

---

## 📚 README.md (Template Completo)

```markdown
# 🙏 Ferramentas Católicas Online

> Hub de ferramentas online gratuitas para facilitar o dia a dia pastoral da Igreja Católica no Brasil

[![Deploy Status](https://img.shields.io/badge/deploy-success-brightgreen)](https://ferramentascatolicas.com.br)
[![Cloudflare Pages](https://img.shields.io/badge/cloudflare-pages-orange)](https://pages.cloudflare.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

[🌐 Visitar Site](https://ferramentascatolicas.com.br) | [📖 Documentação](docs/) | [🐛 Reportar Bug](issues)

---

## 🎯 Sobre o Projeto

**Ferramentas Católicas Online** é uma plataforma 100% gratuita que oferece ferramentas práticas para:

- 📹 **PASCOM** (Pastoral da Comunicação)
- 🎵 **Músicos Litúrgicos**
- 📝 **Secretárias Paroquiais**
- ⛪ **Padres e Agentes de Pastoral**
- 🙏 **Fiéis Leigos**

### Filosofia
✅ **Sem cadastro** - Use e saia  
✅ **Sem dados salvos** - Privacidade total  
✅ **100% gratuito** - Para sempre  
✅ **Open Source** - Contribua e melhore  

---

## 🛠️ Ferramentas Disponíveis

### 📋 Ferramentas Client-Side (v1.0)
- ✅ Gerador de Repertório para Missa
- ✅ Ordem dos Cantos da Missa
- ✅ Checklist da PASCOM
- ✅ Checklist para Casamento na Igreja
- ✅ Textos Prontos para Datas Católicas

### 🤖 Ferramentas com IA (v1.1)
- ✅ Gerador de Texto para Redes da Igreja
- ✅ Roteiro de Transmissão da Missa
- ✅ Gerador de Legendas Litúrgicas

### 🔍 Ferramentas Avançadas (v1.2)
- ✅ Verificador de Texto Litúrgico

---

## 🏗️ Stack Tecnológica

### Frontend
```
Next.js 14+ (Static Export)
React 18
TypeScript
Tailwind CSS
Framer Motion
React Hook Form + Zod
```

### Backend (Serverless)
```
Cloudflare Workers
Cloudflare Workers AI
Cloudflare KV (Cache)
Cloudflare D1 (Database)
```

### Deploy
```
Cloudflare Pages (Frontend)
Cloudflare Workers (API)
GitHub Actions (CI/CD)
```

---

## 🚀 Desenvolvimento Local

### Pré-requisitos
- Node.js 18+
- pnpm 8+ (ou npm)
- Conta Cloudflare (free tier)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/ferramentas-catolicas-online.git
cd ferramentas-catolicas-online

# Instale dependências
pnpm install

# Configure variáveis de ambiente
cp apps/web/.env.example apps/web/.env.local

# Inicie o servidor de desenvolvimento
pnpm dev
```

Acesse: http://localhost:3000

### Comandos Úteis

```bash
pnpm dev              # Desenvolvimento
pnpm build            # Build de produção
pnpm lint             # Linter
pnpm format           # Formatação
pnpm test             # Testes
pnpm deploy           # Deploy completo
```

---

## 📂 Estrutura do Projeto

```
ferramentas-catolicas-online/
├── apps/
│   └── web/                    # Frontend Next.js
│       ├── app/                # App Router
│       ├── components/         # Componentes React
│       ├── lib/                # Utilitários e dados
│       └── public/             # Assets estáticos
│
├── workers/                    # Cloudflare Workers
│   ├── generate-text/          # Gerador de texto (AI)
│   ├── validate-liturgy/       # Verificador litúrgico
│   └── process-srt/            # Processador de legendas
│
├── packages/                   # Código compartilhado
│   └── shared/                 # Types e constants
│
└── docs/                       # Documentação
```

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Veja nosso [Guia de Contribuição](CONTRIBUTING.md).

### Como Contribuir

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feat/nova-ferramenta`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova ferramenta X'`)
4. Push para a branch (`git push origin feat/nova-ferramenta`)
5. Abra um Pull Request

### Sugerir Nova Ferramenta

Tem uma ideia de ferramenta? [Sugira aqui](https://ferramentascatolicas.com.br/sugerir) ou abra uma [Issue](issues).

---

## 📊 Status do Projeto

- ✅ **Fase 1**: Ferramentas Client-Side (Concluída)
- 🚧 **Fase 2**: Ferramentas com IA (Em desenvolvimento)
- 📅 **Fase 3**: Ferramentas Avançadas (Planejada)

### Roadmap Completo

Veja nosso [ROADMAP.md](docs/ROADMAP.md) para planos futuros.

---

## 📈 Performance

- ⚡ **Lighthouse**: 95+ (Performance, Acessibilidade, SEO)
- 🌍 **CDN Global**: Cloudflare (200+ cidades)
- 🔒 **Segurança**: Rate limiting, CORS, CSP
- ♿ **Acessibilidade**: WCAG 2.1 AA

---

## 📜 Licença

Este projeto está sob a licença MIT. Veja [LICENSE](LICENSE) para mais detalhes.

---

## 💙 Créditos

Desenvolvido com 💙 por [Guilherme Soares](https://github.com/seu-usuario)

**Apoie o Projeto:**
- ⭐ Dê uma estrela no GitHub
- 🐛 Reporte bugs
- 💡 Sugira melhorias
- 🙏 Compartilhe com sua comunidade

---

## 📞 Contato

- 🌐 Site: [ferramentascatolicas.com.br](https://ferramentascatolicas.com.br)
- 📧 Email: contato@ferramentascatolicas.com.br
- 🐦 Twitter: [@ferramentascatolicas](https://twitter.com/ferramentascatolicas)

---

## 🙏 Agradecimentos

Especial agradecimento a todos que contribuem para tornar a vida pastoral mais simples e organizada.

**"Tudo pela maior glória de Deus"**
```

---

## 🔐 SEGURANÇA E BOAS PRÁTICAS

### Variáveis de Ambiente

Nunca commitar:
```
# apps/web/.env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ANALYTICS_ID=seu-analytics-id

# workers/.dev.vars (Cloudflare)
CLOUDFLARE_ACCOUNT_ID=xxx
CLOUDFLARE_API_TOKEN=xxx
```

### Rate Limiting Obrigatório

Todos os workers devem implementar:
```typescript
const rateLimitKey = `ratelimit:${ip}:${Math.floor(Date.now() / 3600000)}`;
const requests = await env.KV.get(rateLimitKey);

if (requests && parseInt(requests) >= 100) {
  return new Response('Rate limit exceeded', { status: 429 });
}
```

### Input Validation Obrigatório

Usar Zod em todos os endpoints:
```typescript
import { z } from 'zod';

const InputSchema = z.object({
  tema: z.string().min(3).max(200),
  tipo: z.enum(['post', 'legenda', 'historia'])
});

const validated = InputSchema.parse(await request.json());
```

---

## ✅ CHECKLIST DE QUALIDADE

Antes de considerar uma feature completa:

### Funcionalidade
- [ ] Funciona conforme esperado
- [ ] Validação de entrada implementada
- [ ] Error handling robusto
- [ ] Loading states implementados
- [ ] Feedback visual adequado

### Design
- [ ] Segue design system aprovado
- [ ] Responsivo (mobile, tablet, desktop)
- [ ] Microinterações suaves
- [ ] Acessível (navegação por teclado, ARIA)
- [ ] Alto contraste (WCAG AA)

### Performance
- [ ] Lighthouse Score > 90
- [ ] LCP < 2.5s
- [ ] FCP < 1.8s
- [ ] CLS < 0.1
- [ ] Imagens otimizadas

### SEO
- [ ] Metadata configurada
- [ ] OpenGraph tags
- [ ] Schema.org structured data
- [ ] Sitemap atualizado
- [ ] URLs semânticas

### Código
- [ ] TypeScript sem erros
- [ ] ESLint sem warnings
- [ ] Código formatado (Prettier)
- [ ] Sem console.logs
- [ ] Comentários apenas onde necessário

### Testes
- [ ] Testes unitários (se aplicável)
- [ ] Testes E2E (fluxo principal)
- [ ] Testado em múltiplos navegadores
- [ ] Testado em dispositivos reais

### Deploy
- [ ] Build sem erros
- [ ] Workers deployados
- [ ] Cache configurado
- [ ] Analytics tracking

---

## 🎓 RECURSOS E REFERÊNCIAS

### Documentação Oficial
- [Next.js Docs](https://nextjs.org/docs)
- [Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Design Inspiration
- [4devs.com.br](https://www.4devs.com.br/) (estrutura)
- Design system: Azul mariano + Serifada elegante + Sans-serif refinada

### Ferramentas Úteis
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Playwright](https://playwright.dev/)
- [Axe Accessibility](https://www.deque.com/axe/)

---

## 🎯 ENTREGA FINAL

Ao concluir todas as milestones, o projeto deve ter:

1. ✅ **9 ferramentas funcionais** (client-side + IA + avançada)
2. ✅ **100% hospedado no Cloudflare** (free tier)
3. ✅ **SEO otimizado** (sitemap, metadata, schema.org)
4. ✅ **Performance excelente** (Lighthouse 90+)
5. ✅ **Acessível** (WCAG AA)
6. ✅ **Analytics configurado** (Cloudflare Web Analytics)
7. ✅ **CI/CD automatizado** (GitHub Actions)
8. ✅ **Documentação completa** (README, CONTRIBUTING, ARCHITECTURE)
9. ✅ **Testes implementados** (E2E + acessibilidade)
10. ✅ **Design único e profissional** (não-genérico, mariano, pastoral)

---

## 📞 SUPORTE

Se tiver dúvidas durante a implementação:
1. Revise esta documentação
2. Consulte a documentação oficial do Cloudflare
3. Verifique issues no repositório
4. Abra uma issue descrevendo o problema

---

**Última atualização**: Fevereiro 2026  
**Versão do documento**: 1.0  
**Status**: Pronto para implementação
