import { getPriorityTags } from '../config/focusProfiles'
import type { FocusProfile, FocusTag, Taggable } from '../types'

export type SortByFocusOptions = {
  /** When true, featured items win ties (and rank above non-featured with equal score). */
  preferFeatured?: boolean
}

/**
 * Relevance score: earlier priority tags weigh more.
 * Index 0 → weight = length, index 1 → length-1, etc.
 */
export function scoreTags(itemTags: FocusTag[], priorityTags: FocusTag[]): number {
  if (priorityTags.length === 0) return 0
  let score = 0
  for (let i = 0; i < priorityTags.length; i++) {
    const tag = priorityTags[i]
    if (itemTags.includes(tag)) {
      score += priorityTags.length - i
    }
  }
  return score
}

/**
 * Pure sort: higher relevance first. Never removes items.
 * With preferFeatured, featured items sort above non-featured when scores tie
 * (and featured still wins even if slightly lower score is not the case —
 * featured is a secondary key after score).
 */
export function sortByFocus<T extends Taggable>(
  items: readonly T[],
  profile: FocusProfile,
  options: SortByFocusOptions = {},
): T[] {
  const { preferFeatured = false } = options
  const priorityTags = getPriorityTags(profile)

  if (profile === 'fullstack' || priorityTags.length === 0) {
    if (!preferFeatured) return [...items]
    return [...items].sort((a, b) => {
      const af = a.featured ? 1 : 0
      const bf = b.featured ? 1 : 0
      return bf - af
    })
  }

  return [...items].sort((a, b) => {
    const scoreA = scoreTags(a.tags, priorityTags)
    const scoreB = scoreTags(b.tags, priorityTags)
    if (scoreA !== scoreB) return scoreB - scoreA

    if (preferFeatured) {
      const af = a.featured ? 1 : 0
      const bf = b.featured ? 1 : 0
      if (af !== bf) return bf - af
    }

    return 0
  })
}

export function sortSkillGroupsByFocus<T extends { id: string }>(
  groups: readonly T[],
  groupOrder: string[],
): T[] {
  const order = new Map(groupOrder.map((id, i) => [id, i]))
  return [...groups].sort((a, b) => {
    const ai = order.get(a.id) ?? Number.MAX_SAFE_INTEGER
    const bi = order.get(b.id) ?? Number.MAX_SAFE_INTEGER
    return ai - bi
  })
}
