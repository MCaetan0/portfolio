# Marcelo Caetano de Lima — Portfolio

Professional portfolio built with **React + TypeScript + Vite** and **Tailwind CSS**. Visual system is original (warm paper, flat, heat accent), inspired by principles in `docs/DESIGN.md` — not a clone of that reference site.

PT | EN · light/dark · static site (no backend)

---

## Run locally / Rodar localmente

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

Lint / format:

```bash
npm run lint
npm run format
```

---

## Add a new project / Adicionar um projeto

1. Open [`src/data/projects.ts`](src/data/projects.ts).
2. Copy an existing object and fill the fields.
3. Put cover/gallery images in `public/projects/` (prefer WebP/SVG).
4. Optionally add the URL to `public/sitemap.xml`.

Example:

```ts
{
  id: 'meu-projeto',
  slug: 'meu-projeto',
  title: { pt: 'Meu Projeto', en: 'My Project' },
  shortDescription: {
    pt: 'Descrição curta em português.',
    en: 'Short description in English.',
  },
  longDescription: {
    pt: 'Problema: ...\n\nSolução: ...\n\nO que eu fiz: ...\n\nResultados: ...',
    en: 'Problem: ...\n\nSolution: ...\n\nWhat I did: ...\n\nResults: ...',
  },
  technologies: ['React', 'TypeScript'],
  category: 'Web', // Web | Mobile | Backend/API | Automação | DevOps
  coverImage: '/projects/meu-projeto-cover.webp',
  gallery: ['/projects/meu-projeto-1.webp'],
  links: {
    repo: 'https://github.com/...',
    demo: 'https://...',
  },
  featured: true,
  year: 2026,
  tags: ['react', 'typescript', 'frontend', 'ui'], // see FocusTag in src/types/focus.ts
}
```

No component changes needed — the home grid and `/projects/:slug` read from this file.

---

## Edit texts & translations / Textos e traduções

| What | Where |
|------|--------|
| UI strings (nav, buttons, section titles) | `src/locales/pt.json`, `src/locales/en.json` |
| Profile, links, resume paths | `src/data/profile.ts` |
| Experience | `src/data/experience.ts` |
| Skills | `src/data/skills.ts` |
| Projects | `src/data/projects.ts` |

GitHub / LinkedIn placeholders live in `profile.ts` — replace `SEU_USUARIO`.

---

## Resume PDFs / Currículos

Replace the placeholders:

- `public/resume-pt.pdf`
- `public/resume-en.pdf`

Paths are configured in `src/data/profile.ts` (`resumePt` / `resumeEn`). The hero CTA picks the file for the active language.

---

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Framework preset: Vite. Build: `npm run build`. Output: `dist`.
4. `vercel.json` already rewrites SPA routes to `index.html`.

CI (lint + build) runs on every push/PR to `main` via [`.github/workflows/ci.yml`](.github/workflows/ci.yml).

Custom domain: add it in the Vercel project settings and point DNS as instructed.

---

## Links por vaga / Job-focus links

The portfolio can silently adapt to a job posting. Visitors never see a selector or `?foco=` — only a neutral `?ref=` that is stripped from the URL after load. Focus lives in `sessionStorage` for the tab session.

### Generate a link for a job

1. Pick a profile: `dotnet` | `react` | `python` | `backend` (or default `fullstack` = no code).
2. Use the matching short or ref link (after deploy, replace the origin):

| Profile | Short link | Ref link |
|---------|------------|----------|
| dotnet | `/go/x1` | `/?ref=k7` |
| react | `/go/r2` | `/?ref=a3` |
| python | `/go/p1` | `/?ref=p2` |
| backend | `/go/b1` | `/?ref=b9` |
| fullstack | `/` | — |

3. In local development, open **http://localhost:5173/dev/links** for copy buttons (this route is **not** in the production build).

### Create a new focus profile

1. Add the id to `FOCUS_PROFILES` in [`src/types/focus.ts`](src/types/focus.ts).
2. Add priority tags + skill group order in [`src/config/focusProfiles.ts`](src/config/focusProfiles.ts).
3. Add `focus.<id>.headline` and `focus.<id>.summary` in [`src/locales/pt.json`](src/locales/pt.json) and [`en.json`](src/locales/en.json).
4. Map a neutral code in [`src/config/focusCodes.ts`](src/config/focusCodes.ts) and a short slug in `FOCUS_SHORT_LINKS`.
5. Add a Vercel redirect in [`vercel.json`](vercel.json): `"/go/yy" → "/?ref=zz"`.

### Add tags to a new project

Include a `tags` array using only values from `FocusTag` (`src/types/focus.ts`), e.g. `['dotnet', 'api', 'sql']`. Same idea for experience bullets and skill items.

### Tests

```bash
npm test
```

---

## What you still need to fill / Pendências

- [x] Real GitHub URL (`src/data/profile.ts`)
- [x] Real LinkedIn URL
- [ ] Real resume PDFs (PT + EN)
- [ ] Real project images / screenshots
- [ ] Replace the 2 sample projects (keep or refine Expiral)
- [ ] Optional: custom domain, photo/avatar

---

## Design reference

See [`docs/DESIGN.md`](docs/DESIGN.md) and [`docs/ROADMAP.md`](docs/ROADMAP.md).
