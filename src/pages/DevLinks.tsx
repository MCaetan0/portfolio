import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FOCUS_CODES, FOCUS_SHORT_LINKS } from '../config/focusCodes'
import { FOCUS_PROFILE_CONFIG } from '../config/focusProfiles'
import type { FocusProfile } from '../types'

const ORIGIN = typeof window !== 'undefined' ? window.location.origin : ''

const PROFILES: FocusProfile[] = ['fullstack', 'dotnet', 'python', 'react', 'backend']

function codeForProfile(profile: FocusProfile): string | null {
  const entry = Object.entries(FOCUS_CODES).find(([, p]) => p === profile)
  return entry?.[0] ?? null
}

function shortForCode(code: string): string | null {
  const entry = Object.entries(FOCUS_SHORT_LINKS).find(([, c]) => c === code)
  return entry?.[0] ?? null
}

export function DevLinks() {
  const [copied, setCopied] = useState<string | null>(null)

  if (!import.meta.env.DEV) {
    return null
  }

  const copy = async (label: string, value: string) => {
    await navigator.clipboard.writeText(value)
    setCopied(label)
    window.setTimeout(() => setCopied(null), 1500)
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-16 sm:px-10">
      <p className="font-mono text-caption uppercase tracking-[0.18em] text-[var(--accent)]">
        Dev only
      </p>
      <h1 className="mt-2 font-display text-heading-lg font-bold tracking-tight">
        Focus links
      </h1>
      <p className="mt-3 max-w-2xl text-body-sm text-[var(--text-secondary)]">
        This page exists only in development. Open a link in a new tab to preview the home with that
        focus. Production builds exclude this route.
      </p>

      <ul className="mt-10 space-y-6">
        {PROFILES.map((profile) => {
          const code = codeForProfile(profile)
          const short = code ? shortForCode(code) : null
          const refUrl = code ? `${ORIGIN}/?ref=${code}` : `${ORIGIN}/`
          const goUrl = short ? `${ORIGIN}/go/${short}` : null
          const tags = FOCUS_PROFILE_CONFIG[profile].priorityTags.join(', ') || '(default)'

          return (
            <li
              key={profile}
              className="rounded-[var(--radius-card)] border border-[var(--border-hairline)] p-5"
            >
              <h2 className="font-display text-heading-sm font-bold">{profile}</h2>
              <p className="mt-1 font-mono text-caption text-[var(--text-secondary)]">
                priority: {tags}
              </p>
              <div className="mt-4 flex flex-col gap-2 text-body-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <code className="rounded bg-[color-mix(in_srgb,var(--text-primary)_6%,transparent)] px-2 py-1">
                    {refUrl}
                  </code>
                  <button
                    type="button"
                    className="underline"
                    onClick={() => copy(`${profile}-ref`, refUrl)}
                  >
                    {copied === `${profile}-ref` ? 'Copied' : 'Copy'}
                  </button>
                  <a href={refUrl} className="underline" target="_blank" rel="noreferrer">
                    Open
                  </a>
                </div>
                {goUrl && (
                  <div className="flex flex-wrap items-center gap-2">
                    <code className="rounded bg-[color-mix(in_srgb,var(--text-primary)_6%,transparent)] px-2 py-1">
                      {goUrl}
                    </code>
                    <button
                      type="button"
                      className="underline"
                      onClick={() => copy(`${profile}-go`, goUrl)}
                    >
                      {copied === `${profile}-go` ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                )}
              </div>
            </li>
          )
        })}
      </ul>

      <p className="mt-10">
        <Link to="/" className="underline">
          ← Back to home
        </Link>
      </p>
    </section>
  )
}
