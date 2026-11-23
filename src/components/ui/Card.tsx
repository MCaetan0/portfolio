import type { ReactNode } from 'react'

type CardVariant = 'light' | 'dark'

type CardProps = {
  variant?: CardVariant
  children: ReactNode
  className?: string
}

export function Card({ variant = 'light', children, className = '' }: CardProps) {
  const styles =
    variant === 'dark'
      ? 'bg-[var(--surface-dark-card)] text-[var(--text-on-dark)] border border-transparent'
      : 'bg-[var(--surface-card)] text-[var(--text-primary)] border border-[var(--border-hairline)]'

  return (
    <div className={`rounded-[var(--radius-card)] p-6 sm:p-7 ${styles} ${className}`}>{children}</div>
  )
}
