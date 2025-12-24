'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  href?: string
  delay?: number
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  delay = 0,
}: ServiceCardProps) {
  const CardContent = () => (
    <>
      <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-pharmacy-red mb-4 group-hover:bg-pharmacy-red group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-montserrat font-semibold text-lg text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </>
  )

  const cardClasses =
    'group card bg-white p-6 h-full flex flex-col items-start'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
    >
      {href ? (
        <Link href={href} className={cardClasses}>
          <CardContent />
        </Link>
      ) : (
        <div className={cardClasses}>
          <CardContent />
        </div>
      )}
    </motion.div>
  )
}
