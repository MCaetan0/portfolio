import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useFocus } from '../../contexts/FocusContext'
import { principles } from '../../data/principles'
import { useLocaleText } from '../../hooks/useLocaleText'
import { sortByFocus } from '../../lib/sortByFocus'
import { Section } from '../layout/Section'
import { FadeIn } from '../ui/FadeIn'
import { SectionHeader } from '../ui/SectionHeader'

export function HowIWork() {
  const { t } = useTranslation()
  const { profile } = useFocus()
  const lt = useLocaleText()

  const ordered = useMemo(() => sortByFocus(principles, profile), [profile])

  return (
    <Section id="how">
      <FadeIn>
        <SectionHeader eyebrow={t('how.eyebrow')} title={t('how.title')} />
        <ul className="grid gap-0 border border-[var(--border-hairline)] md:grid-cols-2">
          {ordered.map((item, index) => (
            <li
              key={item.id}
              className={`border-[var(--border-hairline)] p-6 sm:p-7 ${
                index % 2 === 1 ? 'md:border-l' : ''
              } ${index >= 2 ? 'border-t' : ''} ${index === 1 ? 'border-t md:border-t-0' : ''}`}
            >
              <h3 className="font-display text-heading-sm font-bold tracking-tight">
                {lt(item.title)}
              </h3>
              <p className="mt-3 text-body leading-[1.45] text-[var(--text-secondary)]">
                {lt(item.body)}
              </p>
            </li>
          ))}
        </ul>
      </FadeIn>
    </Section>
  )
}
