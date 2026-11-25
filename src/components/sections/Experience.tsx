import { useId, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useFocus } from '../../contexts/FocusContext'
import { experience } from '../../data/experience'
import { profile } from '../../data/profile'
import { useLocaleText } from '../../hooks/useLocaleText'
import { sortByFocus } from '../../lib/sortByFocus'
import type { ExperienceItem } from '../../types'
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
          className="shrink-0 font-mono text-caption uppercase tracking-[0.12em] text-[var(--text-secondary)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
        >
          {t('experience.resumeLink')}
        </a>
      </div>

      <ol className="space-y-0 border-t border-[var(--border-hairline)]">
        {items.map((item) => (
          <ExperienceRow key={item.id} item={item} lt={lt} />
        ))}
      </ol>
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
        className="mt-3 font-mono text-caption uppercase tracking-[0.12em] text-[var(--accent)] underline-offset-4 hover:underline"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? t('experience.hideDetails') : t('experience.showDetails')}
      </button>

      <ul
        id={panelId}
        hidden={!open}
        className="mt-4 space-y-2 border-t border-[var(--border-hairline)] pt-4"
      >
        {item.bullets.map((bullet) => (
          <li key={bullet.en} className="text-body-sm leading-[1.45] text-[var(--text-primary)]">
            — {lt(bullet)}
          </li>
        ))}
      </ul>
    </li>
  )
}
