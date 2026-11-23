import type { FocusProfile, FocusTag } from '../types'

export type FocusProfileConfig = {
  priorityTags: FocusTag[]
  skillGroupOrder: string[]
}

export const FOCUS_PROFILE_CONFIG: Record<FocusProfile, FocusProfileConfig> = {
  fullstack: {
    priorityTags: [],
    skillGroupOrder: ['languages', 'frontend', 'backend', 'databases', 'devops'],
  },
  dotnet: {
    priorityTags: ['dotnet', 'csharp', 'api', 'sql', 'sqlserver', 'backend'],
    skillGroupOrder: ['languages', 'backend', 'databases', 'devops', 'frontend'],
  },
  python: {
    priorityTags: ['python', 'automation', 'api', 'bigquery', 'data', 'sql'],
    skillGroupOrder: ['languages', 'backend', 'databases', 'devops', 'frontend'],
  },
  react: {
    priorityTags: ['react', 'typescript', 'frontend', 'ui', 'mobile', 'javascript'],
    skillGroupOrder: ['frontend', 'languages', 'backend', 'databases', 'devops'],
  },
  backend: {
    priorityTags: [
      'api',
      'microservices',
      'messaging',
      'docker',
      'gcp',
      'cicd',
      'backend',
      'sql',
    ],
    skillGroupOrder: ['backend', 'databases', 'devops', 'languages', 'frontend'],
  },
}

export function getPriorityTags(profile: FocusProfile): FocusTag[] {
  return FOCUS_PROFILE_CONFIG[profile].priorityTags
}
