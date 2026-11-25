import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { buttonClass } from './buttonStyles'

type Variant = 'filled' | 'ghost' | 'ghostOnDark'

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
    <button type={type} className={buttonClass(variant, className)} {...props}>
      {children}
    </button>
  )
}
