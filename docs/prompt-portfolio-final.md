# Tarefa: transformar meu portfólio de "currículo online" em portfólio

Você vai trabalhar no meu repositório de portfólio (React + TypeScript + Vite + Tailwind, i18n PT/EN com react-i18next, dados em `src/data/`). Hoje o site parece um currículo: a home segue a ordem de um CV, a seção de experiência repete os bullets do PDF e a de skills é uma lista de palavras-chave. Quero corrigir isso **sem mudar o design system** (cores, fontes, tokens, componentes de UI) e **sem mexer no conteúdo dos projetos** (`src/data/projects.ts`), porque vou reescrever os projetos depois.

## Regras gerais
- Use os textos deste prompt exatamente como estão (pode ajustar só a pontuação para caber no layout). Não invente números, métricas, resultados nem tecnologias além dos que aparecem aqui.
- O único dado que ainda falta é o status do Expiral. Deixe o placeholder visível `[[PREENCHER: status do Expiral]]` onde indicado. Se surgir qualquer outro dado que você precisaria e não está aqui, use o mesmo formato `[[PREENCHER: descrição]]` em vez de inventar.
- Todo texto novo precisa existir em `src/locales/pt.json` **e** `src/locales/en.json` (ou nos campos bilíngues `{ pt, en }` de `src/data/`), com o mesmo tom: direto, primeira pessoa, sem jargão de RH.
- Mantenha funcionando: tema claro/escuro, troca PT/EN, perfis de foco por vaga (`FocusContext`, `focusProfiles.ts`, `?ref=`), rota `/projects/:slug` e redirects do `vercel.json`.
- No final, `npm run lint`, `npm run build` e `npm test` precisam passar. Ajuste ou crie testes se mudar a lógica de ordenação/foco.

## 1. Posicionamento único
Hoje o Hero diz "Software Engineer" no eyebrow e "Desenvolvedor Full-Stack" no título. Unifique:
- Cargo principal: PT "Engenheiro de Software Backend · .NET & Python" / EN "Backend Software Engineer · .NET & Python".
- Atualize `profile.role` (`src/data/profile.ts`), `meta.title`/`meta.description`, `hero.eyebrow` e `focus.fullstack.headline` nos dois locales.
- `hero.tagline`: PT "Construo e opero APIs, integrações e serviços distribuídos em produção." / EN "I build and run APIs, integrations, and distributed services in production."
- Remova `profile.summary` se não for mais usado depois das mudanças (o resumo passa a vir de `focus.<perfil>.summary`).

Substitua estes resumos nos locales:

**focus.fullstack.summary**
- PT: "Engenheiro de software backend com .NET e Python. Construo APIs, integrações e sistemas internos que substituem ferramentas pagas, e levo tudo até a produção."
- EN: "Backend software engineer working with .NET and Python. I build APIs, integrations, and internal systems that replace paid tools — and take them all the way to production."

**focus.dotnet.summary**
- PT: "Desenvolvo APIs e integrações em C# com ASP.NET Core (Web API e Minimal APIs) e EF Core, documentadas com Swagger e seguindo SOLID. Cuido do ciclo inteiro: desenho do contrato, testes automatizados, Docker e deploy automático com GitHub Actions."
- EN: "I build APIs and integrations in C# with ASP.NET Core (Web API and Minimal APIs) and EF Core, documented with Swagger and following SOLID. I own the full cycle: contract design, automated tests, Docker, and automated deploys with GitHub Actions."

**focus.backend.summary**
- PT: "Desenvolvedor backend focado em APIs, integrações e serviços com mensageria (RabbitMQ). Trabalho com .NET e Python, PostgreSQL e BigQuery, Docker e GCP — e olho para custo e performance tanto quanto para funcionalidade."
- EN: "Backend developer focused on APIs, integrations, and messaging-based services (RabbitMQ). I work with .NET and Python, PostgreSQL and BigQuery, Docker, and GCP — and I care about cost and performance as much as features."

Mantenha os resumos atuais de `focus.python` e `focus.react`, só corrigindo "prototipo" para "protótipo".

## 2. Nova ordem da home
Em `src/pages/Home.tsx`, mude para:
**Hero → Projetos → Como eu trabalho (nova) → Experiência (compacta) → Contato**
- Renumere os eyebrows (`01 — Projetos`, `02 — Como eu trabalho`, `03 — Experiência`, `04 — Contato`) e atualize a navegação do Header e o `useScrollSpy`.
- Remova a seção "Sobre" como seção própria. Formação e idiomas viram um bloco pequeno e discreto dentro do Contato ou logo acima do Footer, uma linha cada (ex.: "B.Sc. Ciência da Computação — UNIP, 2024").
- O CTA principal do Hero deve ser "Ver projetos". O botão de currículo vira ghost/secundário.

## 3. Nova seção "Como eu trabalho"
Crie `src/components/sections/HowIWork.tsx` (no mesmo padrão de `Section` + `SectionHeader`) e os dados em `src/data/principles.ts`: bilíngue, com `tags` de foco, ordenado por `sortByFocus` como as outras seções. Título da seção: PT "Como eu trabalho" / EN "How I work".

Use exatamente estes 4 blocos (título + texto):

1. **PT: Começo pelo contrato** — "Antes de escrever código, leio a documentação da plataforma que vou integrar e desenho a API. O contrato fica documentado em Swagger desde o início, então quem consome não depende de mim para entender."
   **EN: Contract first** — "Before writing code, I read the docs of the platform I'm integrating and design the API. The contract is documented in Swagger from day one, so consumers don't depend on me to understand it."
   tags: `api`, `dotnet`, `backend`

2. **PT: Entrego de ponta a ponta** — "Cada entrega passa pelo mesmo caminho: Git flow, testes automatizados, Docker e deploy automático com GitHub Actions até a VM em produção. Se não está no ar, não está pronto."
   **EN: End to end** — "Every delivery follows the same path: Git flow, automated tests, Docker, and automated deploys with GitHub Actions to the production VM. If it's not live, it's not done."
   tags: `cicd`, `docker`, `gcp`, `backend`

3. **PT: Perto de quem usa** — "Meu dia a dia é com as áreas de negócio, principalmente marketing e vendas. Ajusto fluxos de leads, corrijo integrações e, quando o problema é volume, resolvo com automações em Python em vez de trabalho manual."
   **EN: Close to the people who use it** — "I work daily with business teams, mostly marketing and sales. I adjust lead flows, fix integrations, and when the problem is volume, I solve it with Python automations instead of manual work."
   tags: `python`, `automation`, `api`

4. **PT: Construir quando faz sentido** — "Olho para custo como requisito. Reestruturei dados no BigQuery para cortar mais da metade dos custos e desenvolvi sistemas internos (RH, DRE) que substituíram assinaturas de plataformas pagas."
   **EN: Build when it pays off** — "I treat cost as a requirement. I restructured BigQuery data to cut costs by more than half and built internal systems (HR, P&L) that replaced paid platform subscriptions."
   tags: `bigquery`, `data`, `backend`, `dotnet`

Layout: grid de 2 colunas no desktop e 1 no mobile, flat, com hairlines (sem cards pesados nem sombras).

## 4. Experiência compacta
Em `src/types` e `src/data/experience.ts`:
- Adicione um campo opcional `highlight?: { pt: string; en: string }` por empresa.
- Por padrão, o card mostra empresa, cargo, período e `highlight`. Os bullets ficam atrás de um "ver detalhes" / "see details" (botão acessível com `aria-expanded` e `aria-controls`), continuam ordenados por foco e permanecem no DOM (escondidos visualmente) para SEO.
- Troque a linha do tempo alternada esquerda/direita por uma lista vertical simples e escaneável.
- Ao lado do título da seção, adicione um link discreto "Currículo completo (PDF)" / "Full resume (PDF)", que usa o arquivo do idioma ativo.

### Highlights
- **USE Uniformes** — PT: "Reestruturei tabelas e campos no BigQuery e reduzi os custos de dados em mais da metade." / EN: "Restructured BigQuery tables and fields, cutting data costs by more than half."
- **Teknisa** — PT: "Redesenhei um fluxo interno de um cliente: o uso ficou cerca de 40% mais rápido e bem mais fácil de entender." / EN: "Redesigned a client's internal workflow: about 40% faster to use and much easier to understand."
- **Ycons** — PT: "Automatizei com Python e Pandas um processo de planilhas e arquivos que levava cerca de 3 dias — agora leva minutos." / EN: "Automated a spreadsheet and file process with Python and Pandas that took about 3 days — now it takes minutes."
- **Freelance: Expiral** — `highlight` com o placeholder `[[PREENCHER: status do Expiral]]` nos dois idiomas.

### Bullets (substituem os atuais)
**USE Uniformes** (substitua todos)
1. PT: "Reestruturação do modelo de dados no BigQuery (tabelas e campos), com redução de mais de 50% nos custos" / EN: "BigQuery data model restructuring (tables and fields), reducing costs by over 50%" — tags: `bigquery`, `data`, `sql`
2. PT: "Sistemas internos que substituíram plataformas pagas, como um sistema de RH (1:1, clima organizacional, humor e feedbacks) e um sistema de DRE" / EN: "Internal systems replacing paid platforms, such as an HR system (1:1s, team climate, mood, and feedback) and a P&L (DRE) system" — tags: `backend`, `dotnet`, `api`
3. PT: "Integrações de leads e vendas com plataformas externas, apoiando marketing e comercial em um ano de metas recordes" / EN: "Lead and sales integrations with external platforms, supporting marketing and sales in a record-target year" — tags: `api`, `backend`, `dotnet`
4. PT: "APIs em ASP.NET Core com EF Core, documentadas em Swagger, com testes automatizados, Docker e deploy automático via GitHub Actions em VM com Nginx (GCP)" / EN: "ASP.NET Core APIs with EF Core, Swagger docs, automated tests, Docker, and automated deploys via GitHub Actions to an Nginx VM (GCP)" — tags: `dotnet`, `csharp`, `api`, `docker`, `cicd`, `gcp`
5. PT: "Automações em Python (notebooks) para atualizações e correções em massa de dados" / EN: "Python notebook automations for bulk data updates and fixes" — tags: `python`, `automation`, `data`
6. PT: "Serviços com mensageria (RabbitMQ) e componentes serverless" / EN: "Messaging-based services (RabbitMQ) and serverless components" — tags: `messaging`, `microservices`, `backend`

Atualize também o array `tags` da empresa USE para incluir as tags usadas nos bullets.

**Teknisa** (mantenha os 2 bullets atuais e adicione este no topo)
- PT: "Redesenho de fluxo interno para um cliente, deixando o uso cerca de 40% mais rápido e a visualização muito mais clara" / EN: "Redesigned an internal workflow for a client, making it about 40% faster to use and much clearer to read" — tags: `frontend`, `ui`, `react`

**Ycons** (substitua todos)
1. PT: "Automação com Python, Pandas e notebooks para preencher planilhas e renomear arquivos: de ~3 dias de trabalho manual para minutos" / EN: "Python, Pandas, and notebook automation to fill spreadsheets and rename files: from ~3 days of manual work to minutes" — tags: `python`, `automation`, `data`
2. PT: "Um dos principais desenvolvedores do ERP interno da Ycons (gestão de empresas e funcionários)" / EN: "One of the main developers of Ycons' internal ERP (company and employee management)" — tags: `backend`, `frontend`, `sql`
3. PT: "Sistema interno para um escritório de advocacia e chatbots de atendimento automatizado com Blip" / EN: "Internal system for a law firm and automated customer-service chatbots built with Blip" — tags: `frontend`, `backend`, `automation`
4. PT: "Websites e sistemas com React, JavaScript, PHP e .NET; migrations e consultas SQL" / EN: "Websites and systems with React, JavaScript, PHP, and .NET; migrations and SQL queries" — tags: `react`, `javascript`, `php`, `dotnet`, `sql`

**Freelance: Expiral**: mantenha o bullet atual.

Se alguma tag acima não existir em `FocusTag` (`src/types/focus.ts`), use a mais próxima que já existe em vez de criar uma nova, e me avise no relatório final.

## 5. Remover a seção de Skills como lista
- Tire `Skills` da home e do menu. Não apague `src/data/skills.ts`, porque os perfis de foco usam as tags. Só deixe de renderizar a seção.
- Adicione a `src/data/skills.ts` (com tags coerentes): `ASP.NET Core (Web API e Minimal APIs)`, `Entity Framework Core`, `RabbitMQ`, `Swagger / OpenAPI`, `Pandas`, `Testes automatizados`, `SOLID`. Remova `MVC`, `Git` e `Agile`.
- No Hero, abaixo da tagline, mostre uma única linha "Stack principal" / "Core stack" com exatamente estes 6 itens, em formato de badges discretas: `C# · ASP.NET Core` · `Python` · `EF Core` · `PostgreSQL / BigQuery` · `RabbitMQ` · `Docker · GCP`. Defina-os em `src/data/stack.ts` com `tags` e reordene com `sortByFocus` conforme o perfil de foco ativo.

## 6. Galeria de projetos mais simples
- Esconda o `ProjectFilter` enquanto houver menos de 6 projetos (use uma constante `MIN_PROJECTS_FOR_FILTER = 6`).
- Não altere os dados dos projetos.

## 7. Currículo PDF
- Os arquivos `public/resume-pt.pdf` e `public/resume-en.pdf` hoje são placeholders e **eu vou substituí-los**. Não gere PDFs.
- Faça os links de currículo abrirem em nova aba (`target="_blank" rel="noreferrer"`) em vez de forçar download, mantendo a escolha por idioma.

## 8. Limpar o repositório público
- Mova `docs/prompt-portfolio.md` e `docs/DESIGN.md` para uma pasta `.private/` e adicione `.private/` ao `.gitignore`. Use `git rm --cached` para tirá-los do repositório sem apagar localmente.
- Mova a seção "Links por vaga / Job-focus links" do README para `.private/FOCUS-LINKS.md`.
- No README, remova também "Pendências" e a menção a `SEU_USUARIO`. O README final deve ter: o que é, stack, como rodar, como adicionar projeto e deploy. Tire a frase que cita `docs/DESIGN.md` e o site de referência.
- Atualize `docs/ROADMAP.md`: remova referências aos arquivos movidos e registre estas decisões na tabela "Decisões registradas".

## 9. Espaço para personalidade
- Prepare no Hero um slot opcional de foto/avatar controlado por `profile.avatar?: string`. Se o campo estiver vazio, nada aparece e o layout não quebra.

## Entrega
1. Faça as mudanças em commits pequenos, um por item acima.
2. No final, me mostre:
   - a lista de arquivos alterados;
   - todos os `[[PREENCHER: ...]]` que ficaram, com arquivo e linha (o esperado é só o do Expiral);
   - tags que você trocou por não existirem em `FocusTag`;
   - qualquer decisão que você tomou sozinho e eu deveria revisar.
