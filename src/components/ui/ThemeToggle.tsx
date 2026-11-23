import { Moon, Sun } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../contexts/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation()
  const label = theme === 'dark' ? t('nav.themeToLight') : t('nav.themeToDark')

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-card)] text-[var(--text-primary)] hover:bg-[color-mix(in_srgb,var(--text-primary)_6%,transparent)]"
    >
      {theme === 'dark' ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
    </button>
  )
}
