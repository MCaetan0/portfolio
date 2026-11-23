import { useTranslation } from 'react-i18next'
import { profile } from '../../data/profile'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="heat-strip h-1.5 w-full" aria-hidden />
      <div className="border-t border-[var(--border-hairline)] px-6 py-10 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-caption text-[var(--text-secondary)]">
            © {year} {profile.name}. {t('footer.rights')}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-body-sm">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:underline">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="hover:underline">
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
