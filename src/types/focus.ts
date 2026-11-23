export const FOCUS_PROFILES = ['fullstack', 'dotnet', 'python', 'react', 'backend'] as const

export type FocusProfile = (typeof FOCUS_PROFILES)[number]

export const FOCUS_TAGS = [
  'dotnet',
  'csharp',
  'python',
  'react',
  'typescript',
  'javascript',
  'api',
  'sql',
  'sqlserver',
  'postgresql',
  'oracle',
  'bigquery',
  'nosql',
  'nodejs',
  'nestjs',
  'php',
  'docker',
  'gcp',
  'cicd',
  'messaging',
  'microservices',
  'automation',
  'mobile',
  'ui',
  'figma',
  'data',
  'backend',
  'frontend',
] as const

export type FocusTag = (typeof FOCUS_TAGS)[number]

export function isFocusProfile(value: string): value is FocusProfile {
  return (FOCUS_PROFILES as readonly string[]).includes(value)
}

export function isFocusTag(value: string): value is FocusTag {
  return (FOCUS_TAGS as readonly string[]).includes(value)
}
