import type { Transition, Variants } from 'framer-motion'

/** Durations in seconds (Framer Motion). */
export const motionDuration = {
  fast: 0.15,
  base: 0.25,
  slow: 0.4,
} as const

/** Durations in milliseconds (CSS / setTimeout). */
export const motionDurationMs = {
  fast: 150,
  base: 250,
  slow: 400,
} as const

/** Soft ease — no bounce. */
export const motionEase = [0.22, 1, 0.36, 1] as const

export const motionEaseCss = 'cubic-bezier(0.22, 1, 0.36, 1)'

/** Stagger between list items when expanding (~35ms). */
export const motionStagger = 0.035

export type MotionSpeed = keyof typeof motionDuration

export function transition(
  speed: MotionSpeed = 'base',
  reduced = false,
): Transition {
  if (reduced) {
    return { duration: 0.01, ease: 'linear' }
  }
  return { duration: motionDuration[speed], ease: motionEase }
}

export function fadeSlideVariants(
  reduced = false,
  distance = 8,
): Variants {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      exit: { opacity: 0 },
    }
  }
  return {
    hidden: { opacity: 0, y: distance },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -distance / 2 },
  }
}

export const pageVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}
