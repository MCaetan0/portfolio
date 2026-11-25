import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../contexts/ThemeContext'
import { transition } from '../../lib/motion'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation()
  const label = theme === 'dark' ? t('nav.themeToLight') : t('nav.themeToDark')
  const reduced = useReducedMotion() ?? false

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-card)] text-[var(--text-primary)] transition-[background-color] duration-[var(--motion-fast)] ease-[var(--motion-ease)] hover:bg-[color-mix(in_srgb,var(--text-primary)_6%,transparent)]"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, rotate: reduced ? 0 : -45 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: reduced ? 0 : 45 }}
          transition={transition('fast', reduced)}
        >
          {theme === 'dark' ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
