'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  MessageSquare,
} from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Visit Us',
    details: ['123 River Park Drive', 'Suite 100', 'Your City, ST 12345'],
    action: {
      label: 'Get Directions',
      href: 'https://maps.google.com',
    },
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Call Us',
    details: ['(555) 123-4567', 'Fax: (555) 123-4568'],
    action: {
      label: 'Call Now',
      href: 'tel:+15551234567',
    },
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email Us',
    details: ['info@riverparkpharmacy.com', 'refills@riverparkpharmacy.com'],
    action: {
      label: 'Send Email',
      href: 'mailto:info@riverparkpharmacy.com',
    },
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Business Hours',
    details: [
      'Monday - Friday: 9:00 AM - 7:00 PM',
      'Saturday: 9:00 AM - 5:00 PM',
      'Sunday: Closed',
    ],
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert(
      'Thank you for your message! We will get back to you as soon as possible.'
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-red-50/20 pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-1 text-gray-900 mb-6">
              Get in <span className="text-pharmacy-red">Touch</span>
            </h1>
            <p className="body-text mb-8">
              Have questions about your prescriptions or our services? We'd love
              to hear from you. Reach out by phone, email, or visit us in
              person.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+15551234567" className="btn-primary">
                <Phone className="w-5 h-5 mr-2" />
                (555) 123-4567
              </a>
              <a href="#contact-form" className="btn-secondary">
                <MessageSquare className="w-5 h-5 mr-2" />
                Send a Message
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={info.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 h-full shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-pharmacy-red/10 rounded-xl flex items-center justify-center text-pharmacy-red mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.action && (
                    <a
                      href={info.action.href}
                      className="inline-flex items-center text-medical-blue hover:text-medical-blue-dark font-medium text-sm transition-colors"
                    >
                      {info.action.label}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section id="contact-form" className="section-padding bg-white scroll-mt-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-gray-50 rounded-2xl p-6 md:p-10">
                <div className="mb-8">
                  <h2 className="heading-3 text-gray-900 mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-montserrat font-medium text-gray-700 mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmacy-red focus:border-pharmacy-red transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-montserrat font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmacy-red focus:border-pharmacy-red transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-montserrat font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmacy-red focus:border-pharmacy-red transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-montserrat font-medium text-gray-700 mb-2"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmacy-red focus:border-pharmacy-red transition-colors bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="prescription">Prescription Inquiry</option>
                        <option value="refill">Refill Request</option>
                        <option value="transfer">Transfer Prescription</option>
                        <option value="services">Services Question</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-montserrat font-medium text-gray-700 mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharmacy-red focus:border-pharmacy-red transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-2">
                    <p className="text-sm text-gray-500">* Required fields</p>
                    <Button type="submit" size="lg">
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </form>
              </div>
            </AnimatedSection>

            {/* Map Placeholder */}
            <AnimatedSection delay={0.2}>
              <div className="h-full min-h-[400px] lg:min-h-0">
                <div className="bg-gray-100 rounded-2xl h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                      <MapPin className="w-10 h-10 text-pharmacy-red" />
                    </div>
                    <h3 className="font-montserrat font-semibold text-gray-900 mb-2">
                      Find Us on the Map
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      123 River Park Drive, Suite 100
                      <br />
                      Your City, ST 12345
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-sm"
                    >
                      Open in Google Maps
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="heading-3 text-gray-900 mb-4">
                  Need Immediate Assistance?
                </h2>
                <p className="body-text">
                  For urgent prescription needs or time-sensitive questions,
                  please call us directly. Our pharmacists are ready to help
                  during business hours.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
                <a
                  href="tel:+15551234567"
                  className="btn-primary flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (555) 123-4567
                </a>
                <a
                  href="mailto:info@riverparkpharmacy.com"
                  className="btn-secondary flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section-padding bg-pharmacy-red">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="heading-2 text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Looking for quick answers? Here are some common questions our
              patients ask.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
              {[
                'How do I transfer my prescriptions?',
                'What insurance plans do you accept?',
                'Do you offer delivery services?',
                'How long does a refill take?',
                'Do you compound medications?',
                'What vaccines do you provide?',
              ].map((question, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-lg p-4 text-white text-sm"
                >
                  {question}
                </div>
              ))}
            </div>
            <p className="text-white/80 text-sm mt-8">
              Call us at{' '}
              <a href="tel:+15551234567" className="underline hover:text-white">
                (555) 123-4567
              </a>{' '}
              for answers to these and any other questions.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
