import type { Project } from '../types'
import { sortByFocus } from '../lib/sortByFocus'
import type { FocusProfile } from '../types'

/**
 * Adicione um projeto novo copiando um objeto abaixo.
 * Não é necessário alterar componentes — só este arquivo.
 */
export const projects: Project[] = [
  {
    id: 'expiral',
    slug: 'expiral',
    title: {
      pt: 'Expiral',
      en: 'Expiral',
    },
    shortDescription: {
      pt: 'App mobile para gestão de validade de produtos, com backend Nest.js e NoSQL.',
      en: 'Mobile app for product expiry management, with Nest.js backend and NoSQL.',
    },
    longDescription: {
      pt: 'Problema: comércios e famílias perdem produtos por falta de controle de validade.\n\nSolução: aplicativo mobile (React Native/Expo) para cadastrar itens, receber alertas e acompanhar inventário, com API em Nest.js e banco NoSQL.\n\nO que eu fiz: prototipação no Figma, app mobile, API REST, modelagem NoSQL e fluxo de notificações de validade.\n\nResultados: MVP funcional para gestão de validade ponta a ponta (app + API).',
      en: 'Problem: businesses and households lose products due to poor expiry tracking.\n\nSolution: a React Native/Expo mobile app to register items, receive alerts, and track inventory, backed by a Nest.js API and NoSQL database.\n\nWhat I did: Figma prototyping, mobile app, REST API, NoSQL modeling, and expiry notification flows.\n\nResults: a working MVP covering the full expiry-management flow (app + API).',
    },
    technologies: ['React Native', 'Expo', 'Nest.js', 'Node.js', 'NoSQL', 'Figma'],
    category: 'Mobile',
    coverImage: '/projects/expiral-cover.svg',
    gallery: ['/projects/expiral-cover.svg'],
    links: {
      demo: undefined,
      repo: undefined,
    },
    featured: true,
    year: 2024,
    tags: ['react', 'mobile', 'nodejs', 'nestjs', 'api', 'nosql', 'ui', 'figma', 'frontend'],
  },
  {
    id: 'api-integrations',
    slug: 'api-integrations-hub',
    title: {
      pt: 'Hub de Integrações API',
      en: 'API Integrations Hub',
    },
    shortDescription: {
      pt: 'APIs RESTful versionadas em .NET e Python com CI/CD e observabilidade.',
      en: 'Versioned RESTful APIs in .NET and Python with CI/CD and observability.',
    },
    longDescription: {
      pt: 'Problema: integrações espalhadas e pouco documentadas dificultavam manutenção e deploy.\n\nSolução: hub de APIs versionadas, com autenticação, documentação e pipeline de CI/CD.\n\nO que eu fiz: design de contratos, implementação em C# (.NET) e Python, containerização Docker, GitHub Actions e otimização de queries em PostgreSQL/BigQuery.\n\nResultados: deploys previsíveis, APIs documentadas e redução de incidentes em produção.',
      en: 'Problem: scattered, poorly documented integrations made maintenance and deploy painful.\n\nSolution: a hub of versioned APIs with auth, documentation, and CI/CD.\n\nWhat I did: contract design, C# (.NET) and Python implementation, Docker, GitHub Actions, and query optimization on PostgreSQL/BigQuery.\n\nResults: predictable deploys, documented APIs, and fewer production incidents.',
    },
    technologies: ['C#', '.NET', 'Python', 'Docker', 'GitHub Actions', 'PostgreSQL', 'BigQuery'],
    category: 'Backend/API',
    coverImage: '/projects/api-hub-cover.svg',
    gallery: ['/projects/api-hub-cover.svg'],
    featured: true,
    year: 2026,
    tags: [
      'dotnet',
      'csharp',
      'python',
      'api',
      'backend',
      'docker',
      'cicd',
      'postgresql',
      'bigquery',
      'data',
      'automation',
    ],
  },
  {
    id: 'legacy-modernization',
    slug: 'legacy-ui-modernization',
    title: {
      pt: 'Modernização de UI Legada',
      en: 'Legacy UI Modernization',
    },
    shortDescription: {
      pt: 'Interfaces React/TypeScript orientadas por JSON sobre sistema legado PHP/Oracle.',
      en: 'JSON-driven React/TypeScript UIs on top of a legacy PHP/Oracle system.',
    },
    longDescription: {
      pt: 'Problema: telas legadas difíceis de evoluir e pouco responsivas.\n\nSolução: camada de UI dinâmica em React/TypeScript, configurada via JSON, integrada ao backend PHP e Oracle.\n\nO que eu fiz: componentes dinâmicos, modelagem de configuração, consultas SQL/PL/SQL e pipeline GitLab CI em time Kanban.\n\nResultados: novas telas mais rápidas de entregar e experiência consistente em desktop e mobile.',
      en: 'Problem: legacy screens were hard to evolve and poorly responsive.\n\nSolution: a dynamic React/TypeScript UI layer configured via JSON, integrated with PHP and Oracle.\n\nWhat I did: dynamic components, configuration modeling, SQL/PL/SQL queries, and GitLab CI in a Kanban team.\n\nResults: faster delivery of new screens and a consistent desktop/mobile experience.',
    },
    technologies: ['TypeScript', 'React', 'PHP', 'Oracle', 'GitLab CI'],
    category: 'Web',
    coverImage: '/projects/legacy-ui-cover.svg',
    gallery: ['/projects/legacy-ui-cover.svg'],
    featured: false,
    year: 2025,
    tags: ['react', 'typescript', 'frontend', 'ui', 'php', 'oracle', 'sql', 'cicd'],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getSortedProjects(profile: FocusProfile = 'fullstack'): Project[] {
  const ranked = sortByFocus(projects, profile, { preferFeatured: true })
  if (profile !== 'fullstack') return ranked
  return ranked.sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1
    return b.year - a.year
  })
}
