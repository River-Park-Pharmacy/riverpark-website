'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function TermsPage() {
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
            <h1 className="heading-1 text-gray-900 mb-6">Terms of Service</h1>
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
                <h2 className="heading-3 text-gray-900 mb-4">Acceptance of Terms</h2>
                <p className="body-text">
                  By accessing and using the River Park Pharmacy website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.
                </p>
              </div>

              <div>
                <h2 className="heading-3 text-gray-900 mb-4">Pharmacy Services</h2>
                <p className="body-text">
                  River Park Pharmacy provides pharmaceutical services in accordance with all applicable federal and state laws. Our services include prescription dispensing, medication counseling, immunizations, and other pharmacy-related services. All prescriptions require a valid order from a licensed healthcare provider.
                </p>
              </div>

              <div>
                <h2 className="heading-3 text-gray-900 mb-4">Website Use</h2>
                <p className="body-text">
                  This website is provided for informational purposes and to facilitate pharmacy services. The information on this website is not intended to replace professional medical advice. Always consult with your healthcare provider or pharmacist for medical questions.
                </p>
              </div>

              <div>
                <h2 className="heading-3 text-gray-900 mb-4">Online Refill Requests</h2>
                <p className="body-text">
                  Online refill requests submitted through this website are subject to verification by our pharmacy staff. Submitting a refill request does not guarantee that the prescription will be filled. We will contact you if there are any issues with your request.
                </p>
              </div>

              <div>
                <h2 className="heading-3 text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="body-text">
                  River Park Pharmacy strives to provide accurate information on this website, but we make no warranties about the completeness, reliability, or accuracy of this information. Any action you take based on the information on this website is at your own risk.
                </p>
              </div>

              <div>
                <h2 className="heading-3 text-gray-900 mb-4">Contact Information</h2>
                <p className="body-text">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="body-text mt-4">
                  River Park Pharmacy, LLC<br />
                  123 River Park Drive, Suite 100<br />
                  Your City, ST 12345<br />
                  Phone: (555) 123-4567<br />
                  Email: info@riverparkpharmacy.com
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
