import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useFocus } from '../../contexts/FocusContext'
import { getSortedProjects, projects } from '../../data/projects'
import type { ProjectCategory } from '../../types'
import { ProjectCard } from '../projects/ProjectCard'
import { ProjectFilter } from '../projects/ProjectFilter'
import { Section } from '../layout/Section'
import { SectionHeader } from '../ui/SectionHeader'

const MIN_PROJECTS_FOR_FILTER = 6

export function Projects() {
  const { t } = useTranslation()
  const { profile } = useFocus()
  const [category, setCategory] = useState('')
  const [technology, setTechnology] = useState('')
  const all = useMemo(() => getSortedProjects(profile), [profile])
  const showFilter = projects.length >= MIN_PROJECTS_FOR_FILTER

  const categories = useMemo(
    () => [...new Set(all.map((p) => p.category))] as ProjectCategory[],
    [all],
  )
  const technologies = useMemo(
    () => [...new Set(all.flatMap((p) => p.technologies))].sort(),
    [all],
  )

  const filtered = all.filter((p) => {
    if (!showFilter) return true
    const catOk = !category || p.category === category
    const techOk = !technology || p.technologies.includes(technology)
    return catOk && techOk
  })

  return (
    <Section id="projects">
      <SectionHeader eyebrow={t('projects.eyebrow')} title={t('projects.title')} />
      {showFilter ? (
        <ProjectFilter
          categories={categories}
          technologies={technologies}
          category={category}
          technology={technology}
          onCategoryChange={setCategory}
          onTechnologyChange={setTechnology}
        />
      ) : null}
      {filtered.length === 0 ? (
        <p className="text-[var(--text-secondary)]">{t('projects.empty')}</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      )}
    </Section>
  )
}
