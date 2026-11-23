import type { FocusProfile } from '../types'

/** Neutral tracking-looking codes → focus profile. Add new codes here. */
export const FOCUS_CODES: Record<string, FocusProfile> = {
  k7: 'dotnet',
  a3: 'react',
  p2: 'python',
  b9: 'backend',
}

/** Short path slug → focus code (used by /go/... redirects and the dev links page). */
export const FOCUS_SHORT_LINKS: Record<string, keyof typeof FOCUS_CODES> = {
  x1: 'k7',
  r2: 'a3',
  p1: 'p2',
  b1: 'b9',
}

export function resolveFocusCode(code: string | null | undefined): FocusProfile | null {
  if (!code) return null
  return FOCUS_CODES[code] ?? null
}
