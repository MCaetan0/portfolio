import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { buttonLinkClass } from '../components/ui/buttonStyles'

export function NotFound() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-6 py-20 sm:px-10">
      <p className="mb-3 font-mono text-caption uppercase tracking-[0.18em] text-[var(--accent)]">
        {t('notFound.eyebrow')}
      </p>
      <h1 className="font-display text-heading-lg font-bold tracking-tight sm:text-display sm:leading-[0.95]">
        {t('notFound.title')}
      </h1>
      <p className="mt-4 text-subheading text-[var(--text-secondary)]">{t('notFound.body')}</p>
      <div className="mt-8">
        <Link to="/" className={buttonLinkClass('filled')}>
          {t('notFound.cta')}
        </Link>
      </div>
    </section>
  )
}
