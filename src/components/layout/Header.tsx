import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { LanguageToggle } from '../ui/LanguageToggle'
import { ThemeToggle } from '../ui/ThemeToggle'

const NAV_IDS = ['about', 'experience', 'projects', 'skills', 'contact'] as const
const NAV_IDS_LIST: string[] = [...NAV_IDS]

export function Header() {
  const { t } = useTranslation()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const activeId = useScrollSpy(NAV_IDS_LIST, 140)
  const onHome = location.pathname === '/'

  const pathname = location.pathname
  const [menuPath, setMenuPath] = useState(pathname)
  if (menuPath !== pathname) {
    setMenuPath(pathname)
    if (open) setOpen(false)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const links = NAV_IDS.map((id) => ({
    id,
    label: t(`nav.${id}`),
    href: onHome ? `#${id}` : `/#${id}`,
  }))

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-hairline)] bg-[var(--surface-nav)] text-[var(--text-primary)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5 sm:px-10">
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`font-sans text-body-sm transition-opacity hover:opacity-100 ${
                onHome && activeId === link.id
                  ? 'font-bold text-[var(--accent)]'
                  : 'opacity-75'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-3 lg:flex-none">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-card)] lg:hidden"
            aria-label={open ? t('nav.closeMenu') : t('nav.menu')}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-[var(--border-hairline)] px-6 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="block py-2.5 text-body-sm"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
