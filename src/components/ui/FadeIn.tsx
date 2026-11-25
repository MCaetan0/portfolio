import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeSlideVariants, transition } from '../../lib/motion'

type FadeInProps = {
  children: ReactNode
  className?: string
  delay?: number
}

/** Section / block entrance on scroll — uses `slow` token. */
export function FadeIn({ children, className = '', delay = 0 }: FadeInProps) {
  const reduced = useReducedMotion() ?? false

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeSlideVariants(reduced, 12)}
      transition={{ ...transition('slow', reduced), delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  )
}
