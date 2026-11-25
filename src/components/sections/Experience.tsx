import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useId, useMemo, useState, type HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import { useFocus } from '../../contexts/FocusContext'
import { experience } from '../../data/experience'
import { profile } from '../../data/profile'
import { useLocaleText } from '../../hooks/useLocaleText'
import { fadeSlideVariants, motionStagger, transition } from '../../lib/motion'
import { sortByFocus } from '../../lib/sortByFocus'
import type { ExperienceItem } from '../../types'
import { FadeIn } from '../ui/FadeIn'
import { Section } from '../layout/Section'
import { SectionHeader } from '../ui/SectionHeader'

export function Experience() {
  const { t, i18n } = useTranslation()
  const { profile: focus } = useFocus()
  const lt = useLocaleText()
  const resume = i18n.language.startsWith('pt') ? profile.resumePt : profile.resumeEn

  const items = useMemo(
    () =>
      experience.map((item) => ({
        ...item,
        bullets: sortByFocus(item.bullets, focus),
      })),
    [focus],
  )

  return (
    <Section id="experience">
      <FadeIn>
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow={t('experience.eyebrow')}
            title={t('experience.title')}
            className="mb-0"
          />
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 font-mono text-caption uppercase tracking-[0.12em] text-[var(--text-secondary)] underline-offset-4 transition-[color] duration-[var(--motion-fast)] ease-[var(--motion-ease)] hover:text-[var(--accent)] hover:underline"
          >
            {t('experience.resumeLink')}
          </a>
        </div>

        <ol className="space-y-0 border-t border-[var(--border-hairline)]">
          {items.map((item) => (
            <ExperienceRow key={item.id} item={item} lt={lt} />
          ))}
        </ol>
      </FadeIn>
    </Section>
  )
}

function ExperienceRow({
  item,
  lt,
}: {
  item: ExperienceItem
  lt: (text: { pt: string; en: string }) => string
}) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const reduced = useReducedMotion() ?? false

  return (
    <li className="border-b border-[var(--border-hairline)] py-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <div>
          <h3 className="font-display text-heading-sm font-bold tracking-tight">{item.company}</h3>
          <p className="mt-1 text-body-sm text-[var(--text-secondary)]">{lt(item.role)}</p>
        </div>
        <p className="font-mono text-caption uppercase tracking-wider text-[var(--text-secondary)]">
          {lt(item.period)}
        </p>
      </div>

      {item.highlight ? (
        <p className="mt-3 max-w-3xl text-body leading-[1.45] text-[var(--text-primary)]">
          {lt(item.highlight)}
        </p>
      ) : null}

      <button
        type="button"
        className="mt-3 inline-flex items-center gap-1.5 font-mono text-caption uppercase tracking-[0.12em] text-[var(--accent)] underline-offset-4 transition-[opacity] duration-[var(--motion-fast)] ease-[var(--motion-ease)] hover:underline"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? t('experience.hideDetails') : t('experience.showDetails')}
        <ChevronDown
          size={14}
          aria-hidden
          className={`transition-transform duration-[var(--motion-base)] ease-[var(--motion-ease)] ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>

      <div className="expand-grid" data-open={open ? 'true' : 'false'}>
        <div className="expand-inner">
          <div
            id={panelId}
            aria-hidden={!open}
            {...(!open ? ({ inert: true } as HTMLAttributes<HTMLDivElement>) : {})}
          >
            <ul className="mt-4 space-y-2 border-t border-[var(--border-hairline)] pt-4">
              {item.bullets.map((bullet, index) => (
                <motion.li
                  key={bullet.en}
                  initial={false}
                  animate={open ? 'visible' : 'hidden'}
                  variants={fadeSlideVariants(reduced, 6)}
                  transition={{
                    ...transition('base', reduced),
                    delay: open && !reduced ? index * motionStagger : 0,
                  }}
                  className="text-body-sm leading-[1.45] text-[var(--text-primary)]"
                >
                  — {lt(bullet)}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </li>
  )
}
