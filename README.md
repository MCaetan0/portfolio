# Marcelo Caetano de Lima — Portfolio

Backend software engineer portfolio (.NET & Python). Built with **React + TypeScript + Vite** and **Tailwind CSS**.

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

Lint / format / test:

```bash
npm run lint
npm run format
npm test
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
  tags: ['react', 'typescript', 'frontend', 'ui'],
}
```

No component changes needed — the home grid and `/projects/:slug` read from this file.

---

## Edit texts / Editar textos

| What | Where |
|------|--------|
| UI strings | `src/locales/pt.json`, `src/locales/en.json` |
| Profile, links, resume paths | `src/data/profile.ts` |
| Experience | `src/data/experience.ts` |
| Projects | `src/data/projects.ts` |

Resume PDFs: replace `public/resume-pt.pdf` and `public/resume-en.pdf` (open in a new tab by language).

---

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Framework preset: Vite. Build: `npm run build`. Output: `dist`.
4. `vercel.json` already rewrites SPA routes to `index.html` and short `/go/*` redirects.

CI (lint + test + build) runs on every push/PR to `main`.
