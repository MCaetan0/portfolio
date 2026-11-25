import { useTranslation } from 'react-i18next'
import { setAppLanguage } from '../../i18n'

export function LanguageToggle() {
  const { i18n, t } = useTranslation()
  const isPt = i18n.language.startsWith('pt')

  return (
    <div
      role="group"
      aria-label={t('nav.language')}
      className="inline-flex items-center gap-1 font-mono text-caption uppercase tracking-wider text-[var(--text-primary)]"
    >
      <button
        type="button"
        onClick={() => setAppLanguage('pt')}
        className={`rounded px-1.5 py-1 transition-[opacity,color] duration-[var(--motion-fast)] ease-[var(--motion-ease)] ${
          isPt ? 'font-medium text-[var(--accent)]' : 'opacity-55 hover:opacity-100'
        }`}
        aria-pressed={isPt}
      >
        PT
      </button>
      <span aria-hidden className="opacity-40">
        /
      </span>
      <button
        type="button"
        onClick={() => setAppLanguage('en')}
        className={`rounded px-1.5 py-1 transition-[opacity,color] duration-[var(--motion-fast)] ease-[var(--motion-ease)] ${
          !isPt ? 'font-medium text-[var(--accent)]' : 'opacity-55 hover:opacity-100'
        }`}
        aria-pressed={!isPt}
      >
        EN
      </button>
    </div>
  )
}
