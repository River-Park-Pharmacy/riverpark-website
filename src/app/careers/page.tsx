'use client'

import { motion } from 'framer-motion'
import {
  Heart,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  Briefcase,
  MapPin,
  Calendar,
  CalendarClock,
  Send,
  Phone,
  Mail,
  ArrowRight,
} from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { company, contactInfo, careers } from '@/content'

const reasonIcons: Record<string, React.ReactNode> = {
  'Community Impact': <Heart className="w-7 h-7" />,
  'Professional Growth': <TrendingUp className="w-7 h-7" />,
  'Supportive Team Culture': <Users className="w-7 h-7" />,
  'Work-Life Balance': <Clock className="w-7 h-7" />,
}

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-red-50/20 pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-1 text-gray-900 mb-4 md:mb-6">
              Join the <span className="text-pharmacy-red">{company.name}</span> Team
            </h1>
            <p className="body-text mb-6 md:mb-8">
              {careers.hero.subtitle}
            </p>
            <Button href="#open-position" variant="primary" size="lg">
              View Open Position
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <SectionHeading
            title={careers.whyJoinUs.title}
            subtitle={careers.whyJoinUs.subtitle}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careers.whyJoinUs.reasons.map((reason, index) => (
              <AnimatedSection key={reason.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 h-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  <div className="w-14 h-14 bg-pharmacy-red/10 rounded-xl flex items-center justify-center text-pharmacy-red mb-4">
                    {reasonIcons[reason.title] || <Heart className="w-7 h-7" />}
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-medical-blue rounded-2xl mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h2 className="heading-2 text-gray-900 mb-4">
                {careers.benefits.title}
              </h2>
              <p className="body-text mb-6">
                {careers.benefits.subtitle}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-6 md:p-12 shadow-lg">
                <ul className="space-y-4">
                  {careers.benefits.list.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Open Position Section */}
      <section id="open-position" className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <SectionHeading
            title={careers.openPositions.title}
            subtitle={careers.openPositions.subtitle}
          />
          {careers.openPositions.positions.map((position, index) => (
            <AnimatedSection key={position.title} delay={index * 0.1}>
              <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="font-montserrat font-bold text-xl md:text-2xl text-gray-900">
                    {position.title}
                  </h3>
                  <span className="inline-flex items-center mt-2 sm:mt-0 px-4 py-1.5 bg-pharmacy-red/10 text-pharmacy-red text-sm font-semibold rounded-full">
                    {position.type}
                  </span>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-500 text-sm mb-6">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1.5" />
                    Bronx, NY
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    {position.schedule}
                  </div>
                  <div className="flex items-center">
                    <CalendarClock className="w-4 h-4 mr-1.5" />
                    Posted: {position.datePosted}
                  </div>
                  <div className="flex items-center text-pharmacy-red font-medium">
                    <CalendarClock className="w-4 h-4 mr-1.5" />
                    Deadline: {position.deadline}
                  </div>
                </div>

                <p className="body-text mb-6">{position.description}</p>

                {/* Job Duties */}
                <div className="mb-6">
                  <h4 className="font-montserrat font-semibold text-gray-900 mb-3">
                    Job Duties:
                  </h4>
                  <ul className="space-y-3">
                    {position.duties.map((duty, dutyIndex) => (
                      <li key={dutyIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-pharmacy-red mr-2.5 mt-0.5 flex-shrink-0" />
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div className="mb-8">
                  <h4 className="font-montserrat font-semibold text-gray-900 mb-3">
                    Education & Experience Requirements:
                  </h4>
                  <ul className="space-y-3">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-medical-blue mr-2.5 mt-0.5 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <a
                    href={`mailto:${contactInfo.email}?subject=Application - ${position.title}`}
                    className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-pharmacy-red text-white font-montserrat font-semibold rounded-lg hover:bg-pharmacy-red-dark transition-colors"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Apply for This Position
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-pharmacy-red">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="heading-2 text-white mb-4">
              {careers.ctaSection.title}
            </h2>
            <p className="text-white/90 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
              {careers.ctaSection.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.email}?subject=Career Inquiry - River Park Pharmacy`}
                className="inline-flex items-center justify-center px-6 md:px-8 py-4 bg-white text-pharmacy-red font-montserrat font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Send className="w-5 h-5 mr-2" />
                Email Your Resume
              </a>
              <a
                href={contactInfo.phoneLink}
                className="inline-flex items-center justify-center px-6 md:px-8 py-4 bg-transparent text-white border-2 border-white font-montserrat font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
            <p className="text-white/70 text-sm mt-6">
              <Mail className="w-4 h-4 inline mr-1" />
              Send your resume to{' '}
              <a href={`mailto:${contactInfo.email}`} className="text-white underline hover:no-underline">
                {contactInfo.email}
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
