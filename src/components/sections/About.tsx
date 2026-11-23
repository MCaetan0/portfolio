import { useTranslation } from 'react-i18next'
import { useFocus } from '../../contexts/FocusContext'
import { profile } from '../../data/profile'
import { useLocaleText } from '../../hooks/useLocaleText'
import { Section } from '../layout/Section'
import { SectionHeader } from '../ui/SectionHeader'

export function About() {
  const { t } = useTranslation()
  const { profile: focus } = useFocus()
  const lt = useLocaleText()
  const summary = t(`focus.${focus}.summary`)

  return (
    <Section id="about">
      <SectionHeader eyebrow={t('about.eyebrow')} title={t('about.title')} />
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <p className="max-w-2xl text-subheading leading-[1.45] text-[var(--text-primary)]">
          {summary}
        </p>
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 font-mono text-body-sm text-[var(--text-secondary)]">
              {t('about.education')}
            </h3>
            <ul className="space-y-4">
              {profile.education.map((item) => (
                <li key={item.institution} className="border-t border-[var(--border-hairline)] pt-3">
                  <p className="font-bold">{lt(item.degree)}</p>
                  <p className="text-body-sm text-[var(--text-secondary)]">
                    {item.institution} · {item.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-mono text-body-sm text-[var(--text-secondary)]">
              {t('about.languages')}
            </h3>
            <ul className="space-y-2">
              {profile.languages.map((lang) => (
                <li key={lang.en} className="text-body-sm">
                  {lt(lang)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
