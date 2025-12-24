'use client'

import { motion } from 'framer-motion'
import {
  Heart,
  Users,
  Award,
  Handshake,
  Target,
  ArrowRight,
  Phone,
  CheckCircle,
} from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const values = [
  {
    icon: <Heart className="w-7 h-7" />,
    title: 'Compassionate Care',
    description:
      'We treat every patient with kindness, empathy, and respect, understanding that healthcare is deeply personal.',
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: 'Excellence',
    description:
      'We are committed to the highest standards of pharmaceutical care, continuously improving our services.',
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: 'Community',
    description:
      'We are proud to serve our local community and actively participate in initiatives that promote health and wellness.',
  },
  {
    icon: <Handshake className="w-7 h-7" />,
    title: 'Trust & Integrity',
    description:
      'We build lasting relationships through honesty, transparency, and consistent reliability.',
  },
]

const team = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Lead Pharmacist',
    bio: 'With over 15 years of experience, Dr. Mitchell leads our team with expertise in medication therapy management and patient counseling.',
  },
  {
    name: 'Michael Chen, PharmD',
    role: 'Clinical Pharmacist',
    bio: 'Michael specializes in immunizations and chronic disease management, bringing a patient-centered approach to every interaction.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Pharmacy Technician',
    bio: 'Emily ensures smooth pharmacy operations and is known for her friendly demeanor and attention to detail.',
  },
]

const communityInvolvement = [
  'Health education workshops at local schools',
  'Free blood pressure screenings monthly',
  'Medication disposal programs',
  'Senior health awareness events',
  'Local charity partnerships',
  'Free local prescription delivery',
  'Medication savings consultations',
]

export default function AboutPage() {
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
              About <span className="text-pharmacy-red">River Park</span>{' '}
              Pharmacy
            </h1>
            <p className="body-text mb-8">
              We're more than a pharmacy — we're your neighbors, your healthcare
              partners, and your advocates. Your family's health is our goal and
              priority, and we take pride in answering every question with care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pharmacy-red rounded-2xl mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="heading-2 text-gray-900 mb-4">Our Mission</h2>
              <p className="body-text mb-6">
                At River Park Pharmacy, our mission is to provide exceptional,
                personalized pharmaceutical care that empowers our community to
                live healthier lives. We believe that every patient deserves
                individual attention, expert guidance, and compassionate service —
                all at prices that won't break the bank.
              </p>
              <p className="body-text">
                Since opening our doors, we've been committed to building
                lasting relationships with our patients. We take the time to
                understand your unique health needs, help you navigate insurance
                benefits, and work alongside you and your healthcare providers
                to ensure the best possible outcomes.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
                <blockquote className="text-xl md:text-2xl font-montserrat text-gray-700 italic mb-6">
                  "Your health is our priority. We're here to serve you with
                  the care and attention you deserve."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pharmacy-red rounded-full flex items-center justify-center text-white font-montserrat font-bold mr-4">
                    RP
                  </div>
                  <div>
                    <p className="font-montserrat font-semibold text-gray-900">
                      River Park Pharmacy Team
                    </p>
                    <p className="text-gray-500 text-sm">
                      Your Neighborhood Pharmacy
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Core Values"
            subtitle="These principles guide everything we do and define who we are as your community pharmacy."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 h-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-pharmacy-red/10 rounded-xl flex items-center justify-center text-pharmacy-red mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Meet Our Team"
            subtitle="Our dedicated professionals are here to provide you with expert care and personalized attention."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <div className="bg-gray-50 rounded-2xl p-6 h-full hover:bg-gray-100 transition-colors">
                  <div className="w-20 h-20 bg-gradient-to-br from-pharmacy-red to-pharmacy-red-dark rounded-2xl flex items-center justify-center text-white font-montserrat font-bold text-2xl mb-6 mx-auto">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div className="text-center">
                    <h3 className="font-montserrat font-semibold text-xl text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-pharmacy-red font-medium text-sm mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                <h3 className="font-montserrat font-semibold text-xl text-gray-900 mb-6">
                  How We Give Back
                </h3>
                <ul className="space-y-4">
                  {communityInvolvement.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-medical-blue rounded-2xl mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="heading-2 text-gray-900 mb-4">
                Community Involvement
              </h2>
              <p className="body-text mb-6">
                We believe that a healthy community is a thriving community.
                That's why we actively participate in local health initiatives
                and educational programs. From free health screenings to
                medication safety workshops, we're dedicated to making a
                positive impact beyond our pharmacy walls.
              </p>
              <p className="body-text">
                Our commitment to community wellness extends to partnerships
                with local organizations, schools, and senior centers. We're
                proud to be a trusted health resource for families throughout
                our neighborhood.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-pharmacy-red">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="heading-2 text-white mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join the River Park Pharmacy family today. Whether you need a
              prescription filled or just have questions, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-pharmacy-red font-montserrat font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Visit Us Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white font-montserrat font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
