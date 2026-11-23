import { useTranslation } from 'react-i18next'
import type { ProjectCategory } from '../../types'

type ProjectFilterProps = {
  categories: ProjectCategory[]
  technologies: string[]
  category: string
  technology: string
  onCategoryChange: (value: string) => void
  onTechnologyChange: (value: string) => void
}

export function ProjectFilter({
  categories,
  technologies,
  category,
  technology,
  onCategoryChange,
  onTechnologyChange,
}: ProjectFilterProps) {
  const { t } = useTranslation()

  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end">
      <label className="flex flex-1 flex-col gap-2 text-body-sm">
        <span className="font-mono text-caption text-[var(--text-secondary)]">
          {t('projects.filterCategory')}
        </span>
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="rounded-[var(--radius-card)] border border-[var(--border-strong)] bg-[var(--surface-canvas)] px-4 py-3"
        >
          <option value="">{t('projects.all')}</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-1 flex-col gap-2 text-body-sm">
        <span className="font-mono text-caption text-[var(--text-secondary)]">
          {t('projects.filterTech')}
        </span>
        <select
          value={technology}
          onChange={(e) => onTechnologyChange(e.target.value)}
          className="rounded-[var(--radius-card)] border border-[var(--border-strong)] bg-[var(--surface-canvas)] px-4 py-3"
        >
          <option value="">{t('projects.all')}</option>
          {technologies.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}
