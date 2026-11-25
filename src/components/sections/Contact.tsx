import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { profile } from '../../data/profile'
import { useLocaleText } from '../../hooks/useLocaleText'
import { motionDurationMs, transition } from '../../lib/motion'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'
import { FadeIn } from '../ui/FadeIn'
import { SectionHeader } from '../ui/SectionHeader'

export function Contact() {
  const { t } = useTranslation()
  const lt = useLocaleText()
  const [copied, setCopied] = useState(false)
  const reduced = useReducedMotion() ?? false

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), motionDurationMs.slow * 5)
    } catch {
      setCopied(false)
    }
  }

  return (
    <Section id="contact">
      <FadeIn>
        <SectionHeader eyebrow={t('contact.eyebrow')} title={t('contact.title')} />
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-body-sm text-[var(--text-secondary)]">{t('contact.email')}</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-1 block font-display text-heading-sm font-bold transition-[color] duration-[var(--motion-fast)] ease-[var(--motion-ease)] hover:underline"
            >
              {profile.email}
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="ghost" onClick={copyEmail} aria-live="polite">
              <span className="relative inline-flex h-4 w-4 items-center justify-center">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? 'check' : 'copy'}
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: reduced ? 1 : 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: reduced ? 1 : 0.85 }}
                    transition={transition('fast', reduced)}
                  >
                    {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
                  </motion.span>
                </AnimatePresence>
              </span>
              {copied ? t('contact.copied') : t('contact.copy')}
            </Button>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-[var(--radius-pill)] border border-[var(--btn-ghost-border)] px-6 py-3.5 text-body-sm font-semibold transition-[background-color,transform] duration-[var(--motion-fast)] ease-[var(--motion-ease)] hover:-translate-y-px hover:bg-[color-mix(in_srgb,var(--btn-ghost-fg)_7%,transparent)]"
            >
              {t('contact.github')}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-[var(--radius-pill)] border border-[var(--btn-ghost-border)] px-6 py-3.5 text-body-sm font-semibold transition-[background-color,transform] duration-[var(--motion-fast)] ease-[var(--motion-ease)] hover:-translate-y-px hover:bg-[color-mix(in_srgb,var(--btn-ghost-fg)_7%,transparent)]"
            >
              {t('contact.linkedin')}
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-[var(--border-hairline)] pt-6 text-body-sm text-[var(--text-secondary)] sm:grid-cols-2">
          <div>
            <p className="mb-2 font-mono text-caption uppercase tracking-[0.14em]">
              {t('contact.education')}
            </p>
            <ul className="space-y-1">
              {profile.education.map((item) => (
                <li key={item.institution}>
                  {lt(item.degree)} — {item.institution}, {item.period.split('–').pop()?.trim()}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 font-mono text-caption uppercase tracking-[0.14em]">
              {t('contact.languages')}
            </p>
            <p>{profile.languages.map((lang) => lt(lang)).join(' · ')}</p>
          </div>
        </div>
      </FadeIn>
    </Section>
  )
}
