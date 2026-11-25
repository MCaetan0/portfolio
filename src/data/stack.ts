import type { StackItem } from '../types'

/** Core stack shown in the hero — reordered by active focus profile. */
export const coreStack: StackItem[] = [
  { label: 'C# · ASP.NET Core', tags: ['csharp', 'dotnet', 'api', 'backend'] },
  { label: 'Python', tags: ['python', 'automation', 'data'] },
  { label: 'EF Core', tags: ['dotnet', 'csharp', 'backend', 'sql'] },
  { label: 'PostgreSQL / BigQuery', tags: ['postgresql', 'bigquery', 'sql', 'data'] },
  { label: 'RabbitMQ', tags: ['messaging', 'microservices', 'backend'] },
  { label: 'Docker · GCP', tags: ['docker', 'gcp', 'cicd', 'backend'] },
]
