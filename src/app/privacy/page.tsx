'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function PrivacyPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-red-50/20 pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-1 text-gray-900 mb-6">Privacy Policy</h1>
            <p className="body-text">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto prose prose-gray">
            <div className="space-y-8">
              <div>
                <h2 className="heading-3 text-gray-900 mb-4">Information We Collect</h2>
                <p className="body-text">
                  River Park Pharmacy collects information necessary to provide pharmaceutical services, including personal identification information, prescription details, and health insurance information. We handle all patient information in accordance with HIPAA regulations and applicable state and federal laws.
                </p>
              </div>

              <div>
                <h2 className="heading-3 text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="body-text">
                  We use your information to fill prescriptions, provide pharmaceutical care, process insurance claims, communicate about your medications, and improve our services. We do not sell or share your personal information with third parties for marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="heading-3 text-gray-900 mb-4">Data Security</h2>
                <p className="body-text">
                  We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. All patient records are stored securely and accessed only by authorized personnel.
                </p>
              </div>

              <div>
                <h2 className="heading-3 text-gray-900 mb-4">Your Rights</h2>
                <p className="body-text">
                  You have the right to access, correct, or request deletion of your personal information. You may also request a copy of your pharmacy records. To exercise these rights, please contact us directly.
                </p>
              </div>

              <div>
                <h2 className="heading-3 text-gray-900 mb-4">Contact Us</h2>
                <p className="body-text">
                  If you have questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <p className="body-text mt-4">
                  River Park Pharmacy, LLC<br />
                  123 River Park Drive, Suite 100<br />
                  Your City, ST 12345<br />
                  Phone: (555) 123-4567<br />
                  Email: privacy@riverparkpharmacy.com
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
