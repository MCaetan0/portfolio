import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { buttonVariants } from './buttonStyles'

type Variant = keyof typeof buttonVariants

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  children: ReactNode
  className?: string
}

export function Button({
  variant = 'filled',
  className = '',
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] px-6 py-3.5 font-sans text-body-sm font-semibold tracking-wide transition-opacity disabled:opacity-50 ${buttonVariants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
