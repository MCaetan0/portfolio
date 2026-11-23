type Variant = 'filled' | 'ghost' | 'ghostOnDark'

export const buttonVariants: Record<Variant, string> = {
  filled:
    'bg-[var(--btn-filled-bg)] text-[var(--btn-filled-fg)] border border-transparent hover:opacity-90',
  ghost:
    'bg-transparent text-[var(--btn-ghost-fg)] border border-[var(--btn-ghost-border)] hover:bg-[color-mix(in_srgb,var(--btn-ghost-fg)_7%,transparent)]',
  ghostOnDark:
    'bg-transparent text-[var(--text-on-dark)] border border-[var(--text-on-dark)] hover:bg-white/10',
}

export function buttonLinkClass(variant: Variant = 'ghost') {
  return `inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] px-6 py-3.5 font-sans text-body-sm font-semibold tracking-wide transition-opacity ${buttonVariants[variant]}`
}
