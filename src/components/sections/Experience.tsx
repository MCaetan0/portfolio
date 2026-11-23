import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useFocus } from '../../contexts/FocusContext'
import { experience } from '../../data/experience'
import { useLocaleText } from '../../hooks/useLocaleText'
import { sortByFocus } from '../../lib/sortByFocus'
import type { ExperienceItem } from '../../types'
import { Section } from '../layout/Section'
import { SectionHeader } from '../ui/SectionHeader'

export function Experience() {
  const { t } = useTranslation()
  const { profile } = useFocus()
  const lt = useLocaleText()

  const items = useMemo(
    () =>
      experience.map((item) => ({
        ...item,
        bullets: sortByFocus(item.bullets, profile),
      })),
    [profile],
  )

  return (
    <Section id="experience">
      <SectionHeader eyebrow={t('experience.eyebrow')} title={t('experience.title')} />

      <ol className="relative border-l border-[var(--border-hairline)] pl-6 md:hidden">
        {items.map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className="relative pb-10 last:pb-0"
          >
            <span
              className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)]"
              aria-hidden
            />
            <ExperienceBody item={item} lt={lt} compact />
          </motion.li>
        ))}
      </ol>

      <ol className="relative hidden md:block">
        <span
          className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-[var(--border-hairline)]"
          aria-hidden
        />
        {items.map((item, index) => {
          const left = index % 2 === 0
          return (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: left ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative grid grid-cols-2 gap-10 pb-14 last:pb-0"
            >
              <span
                className="absolute top-2 left-1/2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[var(--accent)] bg-[var(--surface-canvas)]"
                aria-hidden
              />
              {left ? (
                <>
                  <div className="pr-8 text-right">
                    <ExperienceBody item={item} lt={lt} align="right" />
                  </div>
                  <div aria-hidden />
                </>
              ) : (
                <>
                  <div aria-hidden />
                  <div className="pl-8 text-left">
                    <ExperienceBody item={item} lt={lt} align="left" />
                  </div>
                </>
              )}
            </motion.li>
          )
        })}
      </ol>
    </Section>
  )
}

function ExperienceBody({
  item,
  lt,
  align = 'left',
  compact = false,
}: {
  item: ExperienceItem
  lt: (text: { pt: string; en: string }) => string
  align?: 'left' | 'right'
  compact?: boolean
}) {
  const listAlign = align === 'right' ? 'items-end' : 'items-start'

  return (
    <div className={align === 'right' ? 'ml-auto max-w-md' : 'max-w-md'}>
      <p className="font-mono text-caption uppercase tracking-wider text-[var(--text-secondary)]">
        {lt(item.period)}
      </p>
      <h3 className="mt-1 font-display text-heading-sm font-bold tracking-tight">{item.company}</h3>
      <p className="mb-3 text-body-sm text-[var(--text-secondary)]">{lt(item.role)}</p>
      <ul className={`flex flex-col gap-2 ${listAlign}`}>
        {item.bullets.map((bullet) => (
          <li
            key={bullet.en}
            className={`text-body-sm leading-[1.45] text-[var(--text-primary)] ${
              compact ? '' : 'max-w-prose'
            } ${align === 'right' ? 'text-right' : 'text-left'}`}
          >
            {align === 'right' ? (
              <>
                {lt(bullet)} —
              </>
            ) : (
              <>
                — {lt(bullet)}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
