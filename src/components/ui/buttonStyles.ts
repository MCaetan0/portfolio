type Variant = 'filled' | 'ghost' | 'ghostOnDark'

export const buttonVariants: Record<Variant, string> = {
  filled:
    'bg-[var(--btn-filled-bg)] text-[var(--btn-filled-fg)] border border-transparent hover:opacity-90',
  ghost:
    'bg-transparent text-[var(--btn-ghost-fg)] border border-[var(--btn-ghost-border)] hover:bg-[color-mix(in_srgb,var(--btn-ghost-fg)_7%,transparent)]',
  ghostOnDark:
    'bg-transparent text-[var(--text-on-dark)] border border-[var(--text-on-dark)] hover:bg-white/10',
}

const motionClass =
  'transition-[opacity,background-color,border-color,color,transform] duration-[var(--motion-fast)] ease-[var(--motion-ease)] hover:-translate-y-px'

export function buttonLinkClass(variant: Variant = 'ghost') {
  return `inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] px-6 py-3.5 font-sans text-body-sm font-semibold tracking-wide ${motionClass} ${buttonVariants[variant]}`
}

export function buttonClass(variant: Variant = 'filled', className = '') {
  return `inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] px-6 py-3.5 font-sans text-body-sm font-semibold tracking-wide disabled:opacity-50 ${motionClass} ${buttonVariants[variant]} ${className}`
}
