import { describe, expect, it } from 'vitest'
import { scoreTags, sortByFocus, sortSkillGroupsByFocus } from './sortByFocus'
import type { FocusTag, Taggable } from '../types'

type Item = Taggable & { id: string }

const items: Item[] = [
  { id: 'a', tags: ['react', 'typescript', 'ui'] as FocusTag[], featured: false },
  { id: 'b', tags: ['dotnet', 'csharp', 'api'] as FocusTag[], featured: true },
  { id: 'c', tags: ['python', 'bigquery', 'data'] as FocusTag[], featured: false },
  { id: 'd', tags: ['docker', 'gcp', 'cicd'] as FocusTag[], featured: true },
]

describe('scoreTags', () => {
  it('weights earlier priority tags higher', () => {
    const priority: FocusTag[] = ['dotnet', 'csharp', 'api']
    expect(scoreTags(['dotnet'], priority)).toBe(3)
    expect(scoreTags(['api'], priority)).toBe(1)
    expect(scoreTags(['dotnet', 'api'], priority)).toBe(4)
  })

  it('returns 0 when no priorities', () => {
    expect(scoreTags(['react'], [])).toBe(0)
  })
})

describe('sortByFocus', () => {
  it('keeps featured-first default for fullstack', () => {
    const sorted = sortByFocus(items, 'fullstack', { preferFeatured: true })
    expect(sorted.map((i) => i.id)).toEqual(['b', 'd', 'a', 'c'])
  })

  it('never drops items', () => {
    const sorted = sortByFocus(items, 'react', { preferFeatured: true })
    expect(sorted).toHaveLength(items.length)
  })

  it('ranks react-related items first for react profile', () => {
    const sorted = sortByFocus(items, 'react', { preferFeatured: true })
    expect(sorted[0].id).toBe('a')
  })

  it('ranks dotnet-related items first for dotnet profile', () => {
    const sorted = sortByFocus(items, 'dotnet', { preferFeatured: true })
    expect(sorted[0].id).toBe('b')
  })

  it('uses featured as tiebreaker when scores match', () => {
    const tied: Item[] = [
      { id: 'x', tags: ['api'] as FocusTag[], featured: false },
      { id: 'y', tags: ['api'] as FocusTag[], featured: true },
    ]
    const sorted = sortByFocus(tied, 'backend', { preferFeatured: true })
    expect(sorted.map((i) => i.id)).toEqual(['y', 'x'])
  })
})

describe('sortSkillGroupsByFocus', () => {
  it('orders groups by configured ids', () => {
    const groups = [{ id: 'devops' }, { id: 'frontend' }, { id: 'backend' }]
    const sorted = sortSkillGroupsByFocus(groups, ['frontend', 'backend', 'devops'])
    expect(sorted.map((g) => g.id)).toEqual(['frontend', 'backend', 'devops'])
  })
})
