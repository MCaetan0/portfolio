import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FOCUS_PROFILE_CONFIG } from '../../config/focusProfiles'
import { useFocus } from '../../contexts/FocusContext'
import { skills } from '../../data/skills'
import { useLocaleText } from '../../hooks/useLocaleText'
import { sortByFocus, sortSkillGroupsByFocus } from '../../lib/sortByFocus'
import { Section } from '../layout/Section'
import { SectionHeader } from '../ui/SectionHeader'

export function Skills() {
  const { t } = useTranslation()
  const { profile } = useFocus()
  const lt = useLocaleText()

  const orderedGroups = useMemo(() => {
    const groupOrder = FOCUS_PROFILE_CONFIG[profile].skillGroupOrder
    const groups = sortSkillGroupsByFocus(skills, groupOrder)
    return groups.map((group) => ({
      ...group,
      items: sortByFocus(group.items, profile),
    }))
  }, [profile])

  return (
    <Section id="skills">
      <SectionHeader eyebrow={t('skills.eyebrow')} title={t('skills.title')} />
      <div className="overflow-hidden rounded-[var(--radius-card)] border border-[var(--border-hairline)]">
        {orderedGroups.map((group, gi) => (
          <div
            key={group.id}
            className={gi > 0 ? 'border-t border-[var(--border-hairline)]' : ''}
          >
            <div className="grid gap-0 md:grid-cols-[200px_1fr]">
              <h3 className="border-b border-[var(--border-hairline)] px-5 py-4 font-mono text-caption uppercase tracking-[0.14em] text-[var(--text-secondary)] md:border-b-0 md:border-r">
                {lt(group.category)}
              </h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3">
                {group.items.map((item, i) => (
                  <li
                    key={item.label}
                    className={`px-5 py-4 text-body-sm ${
                      i % 2 === 1 ? 'border-l border-[var(--border-hairline)]' : ''
                    } ${i >= 2 ? 'sm:border-l sm:border-[var(--border-hairline)]' : ''} border-t border-[var(--border-hairline)] first:border-t-0 sm:[&:nth-child(-n+3)]:border-t-0`}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
