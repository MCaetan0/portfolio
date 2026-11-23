type BadgeProps = {
  children: string
  className?: string
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-[var(--radius-card)] border border-[var(--border-hairline)] px-2.5 py-1 font-mono text-caption text-[var(--text-primary)] ${className}`}
    >
      {children}
    </span>
  )
}
