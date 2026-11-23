import { Link2, Mail, SquareCode } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useFocus } from '../../contexts/FocusContext'
import { profile } from '../../data/profile'
import { buttonLinkClass } from '../ui/buttonStyles'

export function Hero() {
  const { t, i18n } = useTranslation()
  const { profile: focus } = useFocus()
  const resume = i18n.language.startsWith('pt') ? profile.resumePt : profile.resumeEn
  const firstName = profile.name.split(' ')[0]
  const lastName = profile.name.split(' ').slice(1).join(' ')
  const headline = t(`focus.${focus}.headline`)

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pb-14 pt-16 sm:px-10 sm:pb-20 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-5 font-mono text-caption uppercase tracking-[0.2em] text-[var(--accent)]">
            {t('hero.eyebrow')}
          </p>

          <h1 className="font-display font-extrabold tracking-tight text-[var(--text-primary)]">
            <span className="block text-[clamp(3.25rem,11vw,6.5rem)] leading-[0.88]">
              {firstName}
            </span>
            <span className="mt-1 block max-w-5xl text-[clamp(2rem,6.5vw,3.75rem)] leading-[0.95] text-[var(--text-secondary)]">
              {lastName}
            </span>
          </h1>

          <div className="mt-8 max-w-xl">
            <p className="font-sans text-heading-sm font-semibold text-[var(--text-primary)]">
              {headline}
            </p>
            <p className="mt-3 text-subheading leading-[1.4] text-[var(--text-secondary)]">
              {t('hero.tagline')}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className={buttonLinkClass('filled')}>
              {t('hero.ctaProjects')}
            </a>
            <a href={resume} download className={buttonLinkClass('ghost')}>
              {t('hero.ctaResume')}
            </a>
            <div className="ml-1 flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-card)] border border-[var(--border-strong)]"
              >
                <SquareCode size={18} aria-hidden />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-card)] border border-[var(--border-strong)]"
              >
                <Link2 size={18} aria-hidden />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-card)] border border-[var(--border-strong)]"
              >
                <Mail size={18} aria-hidden />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Heat rhythm — inspired by sunset bands, not a category menu clone */}
      <div className="heat-strip h-2 w-full" aria-hidden />
    </section>
  )
}
