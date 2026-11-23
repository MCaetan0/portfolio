import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 px-6 py-16 sm:px-10 sm:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}
