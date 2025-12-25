'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie } from 'lucide-react'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container-custom">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-8 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0 hidden md:block">
                  <div className="w-14 h-14 bg-gradient-to-br from-pharmacy-red/10 to-medical-blue/10 rounded-full flex items-center justify-center">
                    <Cookie className="w-7 h-7 text-pharmacy-red" />
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="font-montserrat font-semibold text-gray-900 text-lg mb-2">
                    We value your privacy
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
                    By clicking &quot;Accept All&quot;, you consent to our use of cookies. Read our{' '}
                    <Link href="/cookies" className="text-medical-blue hover:underline font-medium">
                      Cookie Policy
                    </Link>{' '}
                    to learn more.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0">
                  <button
                    onClick={declineCookies}
                    className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                  >
                    Decline
                  </button>
                  <button
                    onClick={acceptCookies}
                    className="px-5 py-2.5 text-sm font-medium text-white bg-pharmacy-red hover:bg-pharmacy-red/90 rounded-lg transition-colors duration-200 shadow-sm"
                  >
                    Accept All
                  </button>
                </div>

                <button
                  onClick={declineCookies}
                  className="absolute top-4 right-4 md:static md:ml-2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close cookie banner"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
