import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { transition } from '../../lib/motion'

/** Soft fade when switching PT/EN. */
export function LocaleFade({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { i18n } = useTranslation()
  const reduced = useReducedMotion() ?? false
  const lang = i18n.language.startsWith('pt') ? 'pt' : 'en'

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={lang}
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition('fast', reduced)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
