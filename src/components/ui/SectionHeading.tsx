'use client'

import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
    >
      <h2 className="heading-2 text-gray-900 mb-4">{title}</h2>
      {subtitle && (
        <p className="body-text max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  )
}
