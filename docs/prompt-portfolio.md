# Prompt: portfólio profissional de desenvolvedor em React

## Contexto

Você é um desenvolvedor front-end sênior e vai me ajudar a construir meu **portfólio pessoal de programador**. O objetivo principal do site é **mostrar meus projetos de programação** para recrutadores e empresas, no Brasil e no exterior, junto com um resumo da minha trajetória profissional.

O site precisa ter cara **profissional**: limpo, moderno e bem acabado. Sem exagero de efeitos, animações chamativas ou elementos decorativos desnecessários, mas também sem parecer um template genérico ou simples demais. A referência é o portfólio de um engenheiro de software sério, que valoriza clareza, boa tipografia e detalhes bem feitos.

## Quem sou eu (use como conteúdo base)

**Nome:** Marcelo Caetano de Lima
**Cargo:** Software Engineer | Full-Stack (PT: Desenvolvedor Full-Stack)
**Localização:** Osasco, SP, Brasil
**E-mail:** marceloc.lima349@gmail.com
**Links:** GitHub e LinkedIn (deixe como placeholders configuráveis; eu preencho depois)

**Resumo:**
Engenheiro de software, bacharel em Ciência da Computação, com experiência em todo o ciclo de vida do software: design, desenvolvimento, deploy e operação em produção. Construo APIs RESTful escaláveis, automações backend e serviços distribuídos com mensageria, pipelines de CI/CD e infraestrutura em nuvem (GCP). Trabalho com Python, C# (.NET), TypeScript, React e SQL, com boa base em estruturas de dados, algoritmos e resolução de problemas.

**Experiência profissional:**

1. **USE UNIFORMES**: Analista de Desenvolvimento / Software Developer Analyst (mar/2026 até hoje)
   - Automações e integrações backend em C# (.NET) e Python, com boas práticas e code review
   - Design, desenvolvimento e documentação de APIs RESTful versionadas e seguras, do design ao deploy
   - Otimização de queries em BigQuery e PostgreSQL; debug e troubleshooting em produção
   - Containerização com Docker e CI/CD com GitHub Actions
   - Infraestrutura em GCP (VMs, Nginx, bancos hospedados)
   - Microsserviços distribuídos com filas de mensagens e componentes serverless

2. **TEKNISA**: Desenvolvedor Full-Stack (ago/2025 a mar/2026)
   - Modernização de sistema legado com interfaces dinâmicas e responsivas em TypeScript/React, orientadas por configuração (JSON)
   - Integração backend em PHP; modelagem e consultas em Oracle (SQL/PL/SQL); CI/CD com GitLab em time Kanban

3. **YCONS IT CONSULTING**: Desenvolvedor Trainee (nov/2024 a ago/2025)
   - Websites e sistemas internos com React, JavaScript, PHP e .NET; automações com Python
   - Migrations, integrações e consultas SQL em bancos relacionais

4. **FREELANCE: EXPIRAL**: Desenvolvedor Full-Stack (out/2024 até hoje)
   - App mobile (React Native/Expo) para gestão de validade de produtos; backend Node.js + Nest.js com banco NoSQL; prototipação no Figma

**Habilidades técnicas:**
- Linguagens: Python, C# (.NET), TypeScript, JavaScript, PHP, SQL
- Frontend: React (Hooks, Context API), React Native, HTML/CSS, Figma
- Backend: APIs RESTful, Node.js, Nest.js, MVC, microsserviços, mensageria, sistemas distribuídos
- Bancos de dados: PostgreSQL, SQL Server, Oracle (SQL/PL/SQL), BigQuery, NoSQL
- Cloud/DevOps: GCP, Docker, Nginx, Git, GitHub Actions, GitLab CI/CD, Agile (Scrum/Kanban)
- Fundamentos: estruturas de dados, algoritmos, POO, resolução de problemas

**Formação:**
- Bacharelado em Ciência da Computação, Universidade Paulista (UNIP), 2020 a 2024
- Técnico em Informática, ETEC, 2017 a 2019

**Idiomas:** Português (nativo), Inglês (intermediário), Espanhol (intermediário)

## Requisitos obrigatórios

### 1. Stack
- **React + TypeScript**, criado com **Vite**
- Estilização com **Tailwind CSS**, com um design system simples: paleta, tipografia e espaçamentos definidos em um lugar só
- Animações leves e discretas (fade/slide ao rolar, hover em cards). Pode usar Framer Motion, mas com moderação
- Ícones com uma biblioteca leve (ex.: lucide-react)
- Sem backend: o site é estático e o conteúdo fica em arquivos de dados dentro do projeto

### 2. Dois idiomas: português e inglês
- Seletor de idioma visível no header (ex.: botão "PT | EN")
- **Todo** o texto do site deve existir nos dois idiomas, incluindo descrições de projetos, experiências, botões, títulos, metadados e mensagens
- Use **react-i18next** (ou uma solução própria com Context, se justificar), com os textos em arquivos separados (`locales/pt.json` e `locales/en.json`)
- Idioma inicial: detectar pelo navegador; se não for português, usar inglês
- Salvar a escolha no `localStorage`
- Atualizar o atributo `lang` do `<html>` ao trocar de idioma

### 3. Modo claro e modo escuro
- Botão de alternância no header (ícone de sol/lua)
- Tema inicial: seguir a preferência do sistema (`prefers-color-scheme`)
- Salvar a escolha no `localStorage`
- Evitar o "flash" de tema errado ao carregar a página (script inline no `index.html` aplicando a classe antes do React montar)
- Os dois temas precisam ser igualmente bem cuidados e ter contraste acessível (WCAG AA)

### 4. Projetos (parte mais importante)
- Os projetos ficam em **um único arquivo de dados** (ex.: `src/data/projects.ts`), para eu adicionar um projeto novo só preenchendo um objeto, sem mexer em componente
- Cada projeto deve ter:
  - `id` / `slug`
  - título e descrição curta (PT e EN)
  - descrição longa (PT e EN): problema, solução, o que eu fiz, resultados
  - tecnologias usadas (lista de tags)
  - categoria (ex.: Web, Mobile, Backend/API, Automação, DevOps)
  - imagem de capa e, opcionalmente, galeria de screenshots
  - links opcionais: repositório (GitHub), demo ao vivo, vídeo
  - flag `featured` (destaque) e ano
- Seção de projetos com:
  - grid responsivo de cards (capa, título, descrição curta, tags e links)
  - **filtro por categoria e/ou tecnologia**
  - projetos em destaque aparecendo primeiro
- **Página de detalhe** de cada projeto (rota `/projects/:slug`, com React Router) mostrando a descrição completa, as screenshots, a stack e os links
- Crie 3 projetos de exemplo para eu substituir depois. Um deles deve ser o **Expiral** (app React Native/Expo + backend Nest.js + NoSQL), com base nas informações acima

### 5. Seções do site (página inicial)
1. **Header** fixo: logo/nome, navegação por âncoras (Sobre, Experiência, Projetos, Habilidades, Contato), seletor de idioma e de tema. No mobile, vira menu hambúrguer.
2. **Hero:** nome, cargo, frase curta de apresentação, botões "Ver projetos" e "Baixar currículo" (PDF em PT ou EN, de acordo com o idioma selecionado) e links para GitHub, LinkedIn e e-mail.
3. **Sobre mim:** resumo profissional e formação.
4. **Experiência:** timeline vertical com empresa, cargo, período e principais entregas.
5. **Projetos:** conforme o item 4.
6. **Habilidades:** agrupadas por categoria (Linguagens, Frontend, Backend, Bancos de Dados, Cloud/DevOps). Sem barras de porcentagem; use tags/badges limpos.
7. **Contato:** e-mail (com botão de copiar), LinkedIn e GitHub. Um formulário é opcional; se tiver, use um serviço como Formspree ou EmailJS, configurável por variável de ambiente.
8. **Footer:** copyright, links e "feito com React".

### 6. Qualidade
- **Totalmente responsivo** (mobile first), testado em 360px, 768px, 1024px e 1440px
- **Acessibilidade:** HTML semântico, navegação por teclado, foco visível, `alt` em imagens, `aria-label` nos botões de ícone, respeito a `prefers-reduced-motion`
- **Performance:** imagens otimizadas (WebP, lazy loading), code splitting por rota, meta de Lighthouse acima de 90 em todas as categorias
- **SEO:** title e meta description por idioma, Open Graph (imagem de preview ao compartilhar o link), favicon, `sitemap.xml` e `robots.txt`
- **Código limpo:** componentes pequenos e reutilizáveis, tipagem forte, ESLint + Prettier, estrutura de pastas organizada
- Página 404 personalizada

### 7. Deploy
- Configurar o deploy na **Vercel** ou no **GitHub Pages** com **GitHub Actions** (build e deploy automáticos a cada push na `main`)
- O pipeline deve rodar lint e build antes do deploy

## Estrutura de pastas sugerida

```
src/
  assets/            # imagens, currículos em PDF
  components/
    layout/          # Header, Footer, Section
    ui/              # Button, Badge, Card, ThemeToggle, LanguageToggle
    sections/        # Hero, About, Experience, Projects, Skills, Contact
    projects/        # ProjectCard, ProjectFilter, ProjectGallery
  contexts/          # ThemeContext
  data/              # projects.ts, experience.ts, skills.ts, profile.ts
  hooks/             # useTheme, useLocalStorage, useScrollSpy
  i18n/              # configuração do i18next
  locales/           # pt.json, en.json
  pages/             # Home, ProjectDetail, NotFound
  styles/
  types/             # tipos de Project, Experience etc.
```

## Documentação: passos e tarefas (obrigatório)

**Antes de escrever qualquer código**, crie o arquivo `docs/ROADMAP.md` com o plano completo de desenvolvimento, dividido em **etapas** e **tarefas**. Cada tarefa deve ser um checkbox (`- [ ]`) que eu possa ir marcando, com uma descrição curta do que fazer e o critério de pronto.

Use estas etapas como base (pode detalhar ou ajustar):

1. **Setup do projeto:** Vite + React + TS, Tailwind, ESLint/Prettier, React Router, estrutura de pastas, Git
2. **Design system:** paleta (clara e escura), tipografia, espaçamentos, componentes base de UI
3. **Tema claro/escuro:** contexto, toggle, persistência, script anti-flash
4. **Internacionalização PT/EN:** configuração do i18next, arquivos de tradução, toggle, persistência, detecção de idioma
5. **Layout:** Header (com menu mobile), Footer, navegação por âncoras com scroll suave e destaque da seção ativa
6. **Seções da home:** Hero, Sobre, Experiência, Habilidades, Contato
7. **Projetos:** modelo de dados, cards, filtros, página de detalhe, galeria, projetos de exemplo
8. **Conteúdo:** preencher todos os textos em PT e EN e adicionar os currículos em PDF
9. **Acessibilidade e responsividade:** revisão completa nos breakpoints, teclado e contraste
10. **Performance e SEO:** otimização de imagens, meta tags, Open Graph, sitemap, Lighthouse
11. **Deploy:** GitHub Actions, Vercel/GitHub Pages, domínio (opcional)
12. **Revisão final:** checklist de qualidade antes de publicar

Crie também um `README.md` (pode ser bilíngue) explicando:
- como rodar o projeto localmente
- como **adicionar um novo projeto** (passo a passo, com um exemplo de objeto preenchido)
- como editar textos e traduções
- como trocar os currículos em PDF
- como fazer o deploy

## Como quero que você trabalhe

1. Primeiro, me apresente o `docs/ROADMAP.md` completo e uma proposta visual em texto (paleta de cores dos dois temas, fontes e estilo geral) para eu aprovar.
2. Depois, siga o roadmap **etapa por etapa**, marcando as tarefas concluídas e avisando o que foi feito ao final de cada etapa.
3. Se precisar tomar uma decisão que não está descrita aqui, escolha a opção mais simples e profissional e registre a decisão no roadmap.
4. Ao final, me entregue o projeto rodando, com o README pronto e a lista do que eu preciso preencher (links, imagens, projetos reais).
