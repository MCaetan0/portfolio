import type { ExperienceItem } from '../types'

export const experience: ExperienceItem[] = [
  {
    id: 'use-uniformes',
    company: 'USE UNIFORMES',
    role: {
      pt: 'Analista de Desenvolvimento',
      en: 'Software Developer Analyst',
    },
    period: {
      pt: 'mar/2026 — hoje',
      en: 'Mar 2026 — Present',
    },
    tags: [
      'dotnet',
      'csharp',
      'python',
      'api',
      'backend',
      'docker',
      'gcp',
      'cicd',
      'messaging',
      'microservices',
      'bigquery',
      'postgresql',
      'sql',
      'automation',
      'data',
    ],
    bullets: [
      {
        pt: 'Automações e integrações backend em C# (.NET) e Python, com boas práticas e code review',
        en: 'Backend automations and integrations in C# (.NET) and Python, with best practices and code review',
        tags: ['dotnet', 'csharp', 'python', 'backend', 'automation', 'api'],
      },
      {
        pt: 'Design, desenvolvimento e documentação de APIs RESTful versionadas e seguras, do design ao deploy',
        en: 'Design, development, and documentation of versioned, secure RESTful APIs — from design to deploy',
        tags: ['api', 'backend', 'dotnet', 'cicd'],
      },
      {
        pt: 'Otimização de queries em BigQuery e PostgreSQL; debug e troubleshooting em produção',
        en: 'Query optimization in BigQuery and PostgreSQL; production debugging and troubleshooting',
        tags: ['bigquery', 'postgresql', 'sql', 'data', 'python'],
      },
      {
        pt: 'Containerização com Docker e CI/CD com GitHub Actions; infraestrutura em GCP',
        en: 'Containerization with Docker and CI/CD with GitHub Actions; infrastructure on GCP',
        tags: ['docker', 'cicd', 'gcp', 'backend'],
      },
      {
        pt: 'Microsserviços distribuídos com filas de mensagens e componentes serverless',
        en: 'Distributed microservices with message queues and serverless components',
        tags: ['microservices', 'messaging', 'backend', 'gcp'],
      },
    ],
  },
  {
    id: 'teknisa',
    company: 'TEKNISA',
    role: {
      pt: 'Desenvolvedor Full-Stack',
      en: 'Full-Stack Developer',
    },
    period: {
      pt: 'ago/2025 — mar/2026',
      en: 'Aug 2025 — Mar 2026',
    },
    tags: ['react', 'typescript', 'frontend', 'ui', 'php', 'oracle', 'sql', 'cicd'],
    bullets: [
      {
        pt: 'Modernização de sistema legado com interfaces dinâmicas e responsivas em TypeScript/React orientadas por configuração (JSON)',
        en: 'Legacy system modernization with dynamic, responsive TypeScript/React UIs driven by JSON configuration',
        tags: ['react', 'typescript', 'frontend', 'ui'],
      },
      {
        pt: 'Integração backend em PHP; modelagem e consultas em Oracle (SQL/PL/SQL); CI/CD com GitLab em time Kanban',
        en: 'PHP backend integration; Oracle modeling and queries (SQL/PL/SQL); GitLab CI/CD in a Kanban team',
        tags: ['php', 'oracle', 'sql', 'backend', 'cicd'],
      },
    ],
  },
  {
    id: 'ycons',
    company: 'YCONS IT CONSULTING',
    role: {
      pt: 'Desenvolvedor Trainee',
      en: 'Trainee Developer',
    },
    period: {
      pt: 'nov/2024 — ago/2025',
      en: 'Nov 2024 — Aug 2025',
    },
    tags: ['react', 'javascript', 'php', 'dotnet', 'python', 'sql', 'automation', 'frontend'],
    bullets: [
      {
        pt: 'Websites e sistemas internos com React, JavaScript, PHP e .NET; automações com Python',
        en: 'Websites and internal systems with React, JavaScript, PHP, and .NET; Python automations',
        tags: ['react', 'javascript', 'php', 'dotnet', 'python', 'frontend', 'automation'],
      },
      {
        pt: 'Migrations, integrações e consultas SQL em bancos relacionais',
        en: 'Migrations, integrations, and SQL queries on relational databases',
        tags: ['sql', 'backend', 'api'],
      },
    ],
  },
  {
    id: 'expiral',
    company: 'FREELANCE: EXPIRAL',
    role: {
      pt: 'Desenvolvedor Full-Stack',
      en: 'Full-Stack Developer',
    },
    period: {
      pt: 'out/2024 — hoje',
      en: 'Oct 2024 — Present',
    },
    tags: ['react', 'mobile', 'nodejs', 'nestjs', 'api', 'nosql', 'ui', 'figma'],
    bullets: [
      {
        pt: 'App mobile (React Native/Expo) para gestão de validade de produtos; backend Node.js + Nest.js com banco NoSQL; prototipação no Figma',
        en: 'Mobile app (React Native/Expo) for product expiry management; Node.js + Nest.js backend with NoSQL; Figma prototyping',
        tags: ['react', 'mobile', 'nodejs', 'nestjs', 'api', 'nosql', 'figma', 'ui'],
      },
    ],
  },
]
