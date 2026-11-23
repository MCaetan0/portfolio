type SectionHeaderProps = {
  eyebrow: string
  title: string
  className?: string
}

export function SectionHeader({ eyebrow, title, className = '' }: SectionHeaderProps) {
  return (
    <header className={`mb-10 ${className}`}>
      <p className="mb-2 font-mono text-caption uppercase tracking-[0.18em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="font-display text-heading-lg font-bold leading-[1.05] tracking-tight text-[var(--text-primary)]">
        {title}
      </h2>
    </header>
  )
}
