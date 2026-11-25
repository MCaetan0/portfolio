import { Link, Navigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getProjectBySlug } from '../data/projects'
import { useLocaleText } from '../hooks/useLocaleText'
import { ProjectGallery } from '../components/projects/ProjectGallery'
import { Badge } from '../components/ui/Badge'
import { buttonLinkClass } from '../components/ui/buttonStyles'

export function ProjectDetail() {
  const { slug } = useParams()
  const { t } = useTranslation()
  const lt = useLocaleText()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) return <Navigate to="/404" replace />

  const title = lt(project.title)

  return (
    <article className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
      <Link
        to="/#projects"
        className="font-mono text-body-sm text-[var(--text-secondary)] transition-opacity duration-[var(--motion-fast)] ease-[var(--motion-ease)] hover:underline"
      >
        {t('projects.back')}
      </Link>

      <header className="mt-6 mb-10">
        <p className="mb-2 font-mono text-caption uppercase tracking-[0.18em] text-[var(--accent)]">
          {t('projects.eyebrow')}
        </p>
        <h1 className="font-display text-heading-lg font-bold leading-[1.05] tracking-tight sm:text-display sm:leading-[0.95]">
          {title}
        </h1>
        <p className="mt-3 font-mono text-caption text-[var(--text-secondary)]">
          {project.category} · {t('projects.year')} {project.year}
        </p>
      </header>

      <img
        src={project.coverImage}
        alt={title}
        className="mb-10 w-full rounded-[var(--radius-card)] border border-[var(--border-hairline)] object-cover"
      />

      <div className="mb-10 space-y-4 whitespace-pre-line text-body leading-[1.4]">
        {lt(project.longDescription)}
      </div>

      <section className="mb-10">
        <h2 className="mb-4 font-mono text-body-sm text-[var(--text-secondary)]">{t('projects.stack')}</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </section>

      {(project.links?.repo || project.links?.demo || project.links?.video) && (
        <section className="mb-10">
          <h2 className="mb-4 font-mono text-body-sm text-[var(--text-secondary)]">
            {t('projects.links')}
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                className={buttonLinkClass('ghost')}
              >
                {t('projects.repo')}
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className={buttonLinkClass('filled')}
              >
                {t('projects.demo')}
              </a>
            )}
            {project.links.video && (
              <a
                href={project.links.video}
                target="_blank"
                rel="noreferrer"
                className={buttonLinkClass('ghost')}
              >
                {t('projects.video')}
              </a>
            )}
          </div>
        </section>
      )}

      {project.gallery && project.gallery.length > 0 && (
        <section>
          <h2 className="mb-4 font-mono text-body-sm text-[var(--text-secondary)]">
            {t('projects.gallery')}
          </h2>
          <ProjectGallery images={project.gallery} title={title} />
        </section>
      )}
    </article>
  )
}
