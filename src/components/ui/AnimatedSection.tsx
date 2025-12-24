'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
}

const directionVariants = {
  up: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
  down: { initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } },
  fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const variant = directionVariants[direction]

  return (
    <motion.div
      initial={variant.initial}
      whileInView={variant.animate}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
