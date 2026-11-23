import type { SkillGroup } from '../types'

export const skills: SkillGroup[] = [
  {
    id: 'languages',
    category: { pt: 'Linguagens', en: 'Languages' },
    items: [
      { label: 'Python', tags: ['python', 'automation', 'data'] },
      { label: 'C# (.NET)', tags: ['dotnet', 'csharp', 'backend'] },
      { label: 'TypeScript', tags: ['typescript', 'react', 'frontend'] },
      { label: 'JavaScript', tags: ['javascript', 'frontend'] },
      { label: 'PHP', tags: ['php', 'backend'] },
      { label: 'SQL', tags: ['sql', 'data', 'backend'] },
    ],
  },
  {
    id: 'frontend',
    category: { pt: 'Frontend', en: 'Frontend' },
    items: [
      { label: 'React', tags: ['react', 'frontend', 'ui'] },
      { label: 'React Native', tags: ['react', 'mobile', 'frontend'] },
      { label: 'HTML/CSS', tags: ['frontend', 'ui'] },
      { label: 'Figma', tags: ['figma', 'ui'] },
    ],
  },
  {
    id: 'backend',
    category: { pt: 'Backend', en: 'Backend' },
    items: [
      { label: 'APIs RESTful', tags: ['api', 'backend'] },
      { label: 'Node.js', tags: ['nodejs', 'backend', 'api'] },
      { label: 'Nest.js', tags: ['nestjs', 'nodejs', 'backend', 'api'] },
      { label: 'MVC', tags: ['backend'] },
      { label: 'Microsserviços', tags: ['microservices', 'backend', 'messaging'] },
      { label: 'Mensageria', tags: ['messaging', 'backend', 'microservices'] },
      { label: 'Sistemas distribuídos', tags: ['microservices', 'backend'] },
    ],
  },
  {
    id: 'databases',
    category: { pt: 'Bancos de Dados', en: 'Databases' },
    items: [
      { label: 'PostgreSQL', tags: ['postgresql', 'sql', 'data'] },
      { label: 'SQL Server', tags: ['sqlserver', 'sql', 'dotnet', 'data'] },
      { label: 'Oracle', tags: ['oracle', 'sql', 'data'] },
      { label: 'BigQuery', tags: ['bigquery', 'data', 'python', 'gcp'] },
      { label: 'NoSQL', tags: ['nosql', 'data', 'backend'] },
    ],
  },
  {
    id: 'devops',
    category: { pt: 'Cloud / DevOps', en: 'Cloud / DevOps' },
    items: [
      { label: 'GCP', tags: ['gcp', 'backend'] },
      { label: 'Docker', tags: ['docker', 'backend', 'cicd'] },
      { label: 'Nginx', tags: ['backend'] },
      { label: 'Git', tags: ['cicd'] },
      { label: 'GitHub Actions', tags: ['cicd'] },
      { label: 'GitLab CI/CD', tags: ['cicd'] },
      { label: 'Agile', tags: [] },
    ],
  },
]
