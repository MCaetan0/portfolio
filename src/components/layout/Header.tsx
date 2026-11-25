import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { fadeSlideVariants, transition } from '../../lib/motion'
import { LanguageToggle } from '../ui/LanguageToggle'
import { ThemeToggle } from '../ui/ThemeToggle'

const NAV_IDS = ['projects', 'how', 'experience', 'contact'] as const
const NAV_IDS_LIST: string[] = [...NAV_IDS]

export function Header() {
  const { t } = useTranslation()
  const location = useLocation()
  /** Menu stays open only while pathname matches — route changes close it without an effect. */
  const [openPath, setOpenPath] = useState<string | null>(null)
  const open = openPath === location.pathname
  const setOpen = (next: boolean | ((prev: boolean) => boolean)) => {
    const value = typeof next === 'function' ? next(open) : next
    setOpenPath(value ? location.pathname : null)
  }
  const [scrolled, setScrolled] = useState(false)
  const activeId = useScrollSpy(NAV_IDS_LIST, 140)
  const onHome = location.pathname === '/'
  const reduced = useReducedMotion() ?? false

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenPath(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const links = NAV_IDS.map((id) => ({
    id,
    label: t(`nav.${id}`),
    href: onHome ? `#${id}` : `/#${id}`,
  }))

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b text-[var(--text-primary)] backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-[var(--motion-base)] ease-[var(--motion-ease)] ${
        scrolled
          ? 'border-[var(--border-hairline)] bg-[var(--surface-nav)] shadow-[0_1px_0_0_var(--border-hairline)]'
          : 'border-transparent bg-[var(--surface-nav)]'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5 sm:px-10">
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`font-sans text-body-sm transition-[opacity,color] duration-[var(--motion-fast)] ease-[var(--motion-ease)] hover:opacity-100 ${
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-card)] transition-[background-color] duration-[var(--motion-fast)] ease-[var(--motion-ease)] hover:bg-[color-mix(in_srgb,var(--text-primary)_6%,transparent)] lg:hidden"
            aria-label={open ? t('nav.closeMenu') : t('nav.menu')}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.button
            key="mobile-overlay"
            type="button"
            aria-label={t('nav.closeMenu')}
            className="fixed inset-0 top-[57px] z-40 bg-[color-mix(in_srgb,var(--text-primary)_28%,transparent)] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition('base', reduced)}
            onClick={() => setOpen(false)}
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.nav
            key="mobile-nav"
            aria-label="Mobile"
            className="relative z-50 overflow-hidden border-t border-[var(--border-hairline)] bg-[var(--surface-canvas)] lg:hidden"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={transition('base', reduced)}
          >
            <motion.ul
              className="flex flex-col gap-1 px-6 py-4"
              variants={{
                visible: {
                  transition: { staggerChildren: reduced ? 0 : 0.04 },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {links.map((link) => (
                <motion.li
                  key={link.id}
                  variants={fadeSlideVariants(reduced, 6)}
                  transition={transition('fast', reduced)}
                >
                  <a
                    href={link.href}
                    className="block py-2.5 text-body-sm transition-opacity duration-[var(--motion-fast)] ease-[var(--motion-ease)]"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
