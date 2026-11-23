import { resolveFocusCode } from '../config/focusCodes'
import type { FocusProfile } from '../types'

export const FOCUS_STORAGE_KEY = 'portfolio-focus'

/**
 * Reads ?ref=, stores valid profile in sessionStorage, strips only `ref` from the URL.
 * Safe to call before React mounts (no flash of default content).
 */
export function bootstrapFocusFromUrl(): FocusProfile {
  if (typeof window === 'undefined') return 'fullstack'

  try {
    const url = new URL(window.location.href)
    const code = url.searchParams.get('ref')
    const fromUrl = resolveFocusCode(code)

    if (fromUrl) {
      sessionStorage.setItem(FOCUS_STORAGE_KEY, fromUrl)
    }

    if (url.searchParams.has('ref')) {
      url.searchParams.delete('ref')
      const search = url.searchParams.toString()
      const next = `${url.pathname}${search ? `?${search}` : ''}${url.hash}`
      window.history.replaceState(window.history.state, '', next)
    }
  } catch {
    /* ignore malformed URL / storage errors */
  }

  return readStoredFocus()
}

export function readStoredFocus(): FocusProfile {
  try {
    const raw = sessionStorage.getItem(FOCUS_STORAGE_KEY)
    if (
      raw === 'dotnet' ||
      raw === 'python' ||
      raw === 'react' ||
      raw === 'backend' ||
      raw === 'fullstack'
    ) {
      return raw
    }
  } catch {
    /* ignore */
  }
  return 'fullstack'
}
