import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { pageVariants, transition } from '../../lib/motion'

export function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation()
  const reduced = useReducedMotion() ?? false

  useEffect(() => {
    if (location.hash) return
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }, [location.pathname, location.hash, reduced])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition('fast', reduced)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
