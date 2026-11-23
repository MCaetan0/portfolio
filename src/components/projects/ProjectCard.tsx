import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { Project } from '../../types'
import { useLocaleText } from '../../hooks/useLocaleText'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { buttonLinkClass } from '../ui/buttonStyles'

type ProjectCardProps = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useTranslation()
  const lt = useLocaleText()
  const variant = index % 2 === 0 ? 'dark' : 'light'

  return (
    <Card
      variant={variant}
      className="group flex h-full flex-col gap-4 transition-[border-color] duration-200"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="font-mono text-caption uppercase tracking-wider opacity-75">
          {project.category}
          {project.featured ? ` · ${t('projects.featured')}` : ''}
        </p>
        <Link
          to={`/projects/${project.slug}`}
          className={variant === 'dark' ? buttonLinkClass('ghostOnDark') : buttonLinkClass('ghost')}
        >
          {t('projects.view')}
        </Link>
      </div>

      <Link
        to={`/projects/${project.slug}`}
        className="block overflow-hidden rounded-[calc(var(--radius-card)-2px)]"
      >
        <img
          src={project.coverImage}
          alt={lt(project.title)}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </Link>

      <div className="mt-auto space-y-3">
        <div>
          <h3 className="font-display text-heading-sm font-bold tracking-tight">
            <Link to={`/projects/${project.slug}`}>{lt(project.title)}</Link>
          </h3>
          <p className="mt-2 text-body-sm leading-[1.45] opacity-85">{lt(project.shortDescription)}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              className={variant === 'dark' ? 'border-white/20 text-[var(--text-on-dark)]' : ''}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  )
}
