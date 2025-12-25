'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function CookiePolicyPage() {
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
            <h1 className="heading-1 text-gray-900 mb-6">Cookie Policy</h1>
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
                <h2 className="heading-3 text-gray-900 mb-4">What Are Cookies</h2>
                <p className="body-text">
                  Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners. Cookies help us enhance your experience on our website.
                </p>
              </div>

              <div>
                <h2 className="heading-3 text-gray-900 mb-4">How We Use Cookies</h2>
                <p className="body-text">
                  River Park Pharmacy uses cookies to improve your browsing experience, analyze website traffic, and understand how visitors interact with our website. We use cookies for the following purposes:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li className="body-text"><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and cannot be disabled. They enable core functionality such as security, network management, and accessibility.</li>
                  <li className="body-text"><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.</li>
                  <li className="body-text"><strong>Functional Cookies:</strong> These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.</li>
                </ul>
              </div>

              <div>
                <h2 className="heading-3 text-gray-900 mb-4">Types of Cookies We Use</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full mt-4 border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 pr-4 font-semibold text-gray-900">Cookie Type</th>
                        <th className="text-left py-3 pr-4 font-semibold text-gray-900">Purpose</th>
                        <th className="text-left py-3 font-semibold text-gray-900">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 pr-4 body-text">Session Cookies</td>
                        <td className="py-3 pr-4 body-text">Maintain your session while browsing</td>
                        <td className="py-3 body-text">Session</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 pr-4 body-text">Preference Cookies</td>
                        <td className="py-3 pr-4 body-text">Remember your settings and preferences</td>
                        <td className="py-3 body-text">1 year</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 pr-4 body-text">Analytics Cookies</td>
                        <td className="py-3 pr-4 body-text">Track website usage and performance</td>
                        <td className="py-3 body-text">2 years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="heading-3 text-gray-900 mb-4">Third-Party Cookies</h2>
                <p className="body-text">
                  We may use third-party services that set their own cookies, such as analytics providers. These third parties have their own privacy and cookie policies, and we encourage you to review them. We do not have control over these third-party cookies.
                </p>
              </div>

              <div>
                <h2 className="heading-3 text-gray-900 mb-4">Managing Cookies</h2>
                <p className="body-text">
                  Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or to alert you when cookies are being sent. Please note that if you disable cookies, some features of our website may not function properly.
                </p>
                <p className="body-text mt-4">
                  To manage cookies in your browser:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li className="body-text"><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                  <li className="body-text"><strong>Firefox:</strong> Settings → Privacy & Security → Cookies</li>
                  <li className="body-text"><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                  <li className="body-text"><strong>Edge:</strong> Settings → Privacy, Search, and Services → Cookies</li>
                </ul>
              </div>

              <div>
                <h2 className="heading-3 text-gray-900 mb-4">Updates to This Policy</h2>
                <p className="body-text">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this page periodically for the latest information on our cookie practices.
                </p>
              </div>

              <div>
                <h2 className="heading-3 text-gray-900 mb-4">Contact Us</h2>
                <p className="body-text">
                  If you have questions about our use of cookies or this Cookie Policy, please contact us at:
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
