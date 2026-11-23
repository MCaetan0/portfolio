import type { FocusTag } from './focus'

export type { FocusProfile, FocusTag } from './focus'
export { FOCUS_PROFILES, FOCUS_TAGS, isFocusProfile, isFocusTag } from './focus'

export type LocaleText = {
  pt: string
  en: string
}

export type ProjectCategory = 'Web' | 'Mobile' | 'Backend/API' | 'Automação' | 'DevOps'

export type ProjectLinks = {
  repo?: string
  demo?: string
  video?: string
}

export type Project = {
  id: string
  slug: string
  title: LocaleText
  shortDescription: LocaleText
  longDescription: LocaleText
  technologies: string[]
  category: ProjectCategory
  coverImage: string
  gallery?: string[]
  links?: ProjectLinks
  featured: boolean
  year: number
  tags: FocusTag[]
}

export type ExperienceBullet = LocaleText & {
  tags: FocusTag[]
}

export type ExperienceItem = {
  id: string
  company: string
  role: LocaleText
  period: LocaleText
  tags: FocusTag[]
  bullets: ExperienceBullet[]
}

export type SkillItem = {
  label: string
  tags: FocusTag[]
}

export type SkillGroup = {
  id: string
  category: LocaleText
  items: SkillItem[]
}

export type Profile = {
  name: string
  role: LocaleText
  location: LocaleText
  email: string
  github: string
  linkedin: string
  summary: LocaleText
  education: {
    degree: LocaleText
    institution: string
    period: string
  }[]
  languages: LocaleText[]
  resumePt: string
  resumeEn: string
}

export type Taggable = {
  tags: FocusTag[]
  featured?: boolean
}
