'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Pill,
  RefreshCw,
  Syringe,
  Truck,
  Heart,
  Clock,
  ShieldCheck,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import ServiceCard from '@/components/ui/ServiceCard'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const services = [
  {
    icon: <Pill className="w-7 h-7" />,
    title: 'Prescription Refills',
    description:
      'Quick and easy prescription refills. Submit online, call us, or use our mobile-friendly system — your medication will be ready when you arrive.',
    href: '/prescriptions',
  },
  {
    icon: <RefreshCw className="w-7 h-7" />,
    title: 'Transfer Prescriptions',
    description:
      'Switching pharmacies? We handle everything — just give us your information and we\'ll take care of the rest.',
    href: '/prescriptions#transfer',
  },
  {
    icon: <Syringe className="w-7 h-7" />,
    title: 'Immunizations & Vaccines',
    description:
      'Stay protected with our comprehensive vaccination services. Walk-ins welcome for flu shots, COVID-19, shingles, and more.',
    href: '/services#immunizations',
  },
  {
    icon: <Truck className="w-7 h-7" />,
    title: 'Free Local Delivery',
    description:
      'Can\'t make it to the pharmacy? We offer free prescription delivery to your home or office within our service area.',
    href: '/services#delivery',
  },
]

const whyChooseUs = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Personalized Care',
    description:
      'We take the time to understand your unique health needs and provide tailored solutions that work for you.',
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Medication Savings',
    description:
      'Our pharmacists help you find the best prices and coordinate your benefits to maximize savings.',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Fast & Convenient',
    description:
      'Multiple ways to refill — online, by phone, or in person. Plus free local delivery right to your door.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Expert Guidance',
    description:
      'Our knowledgeable pharmacists are always available to answer questions and provide medication counseling.',
  },
]

const trustSignals = [
  'Licensed & Certified Pharmacists',
  'Most Insurance Plans Accepted',
  'Free Local Delivery',
  'Medication Savings Programs',
]

const testimonials = [
  {
    name: 'Maria S.',
    rating: 5,
    text: 'The pharmacists here truly care about their customers. They took the time to explain my medications and even helped me find a more affordable option. Best pharmacy experience I\'ve ever had!',
    image: '/images/testimonials/maria.jpg',
    initials: 'MS',
  },
  {
    name: 'James T.',
    rating: 5,
    text: 'I switched from a big chain pharmacy and the difference is night and day. Free delivery, no long waits, and they actually know my name. Highly recommend River Park Pharmacy!',
    image: '/images/testimonials/james.jpg',
    initials: 'JT',
  },
  {
    name: 'Linda M.',
    rating: 5,
    text: 'The pill packaging service has been a lifesaver for my elderly mother. Everything is organized by day and time — no more confusion about which medications to take. Thank you!',
    image: '/images/testimonials/linda.jpg',
    initials: 'LM',
  },
  {
    name: 'Robert K.',
    rating: 5,
    text: 'After my surgery, the team helped coordinate all my new medications and even called to check on me. You don\'t get that kind of service from the big chains. Forever grateful!',
    image: '/images/testimonials/robert.jpg',
    initials: 'RK',
  },
  {
    name: 'Susan W.',
    rating: 5,
    text: 'They saved me over $200 a month by finding generic alternatives and manufacturer coupons. The pharmacist took the time to review all my medications — amazing service!',
    image: '/images/testimonials/susan.jpg',
    initials: 'SW',
  },
  {
    name: 'David L.',
    rating: 5,
    text: 'My dog needed compounded medication that other pharmacies couldn\'t provide. River Park made it happen within 24 hours. They truly go above and beyond!',
    image: '/images/testimonials/david.jpg',
    initials: 'DL',
  },
  {
    name: 'Patricia H.',
    rating: 5,
    text: 'The immunization process was quick and painless. No appointment needed, and the pharmacist was so friendly and professional. Got my flu shot in under 10 minutes!',
    image: '/images/testimonials/patricia.jpg',
    initials: 'PH',
  },
  {
    name: 'Michael R.',
    rating: 5,
    text: 'As someone with multiple chronic conditions, having a pharmacy that knows my history is invaluable. They catch potential drug interactions and always have my medications ready on time.',
    image: '/images/testimonials/michael.jpg',
    initials: 'MR',
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-red-50/20 pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <h1 className="heading-1 text-gray-900 mb-6">
                Your Health, Our Priority:{' '}
                <span className="text-pharmacy-red">Your Trusted Neighborhood Pharmacy</span>
              </h1>
              <p className="body-text mb-8 max-w-xl">
                At River Park Pharmacy, we deliver personalized care with a
                personal touch. From free local delivery to medication savings
                programs, our dedicated pharmacists go the extra mile to support
                your health journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/prescriptions" size="lg">
                  Refill Prescription
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button href="tel:+15551234567" variant="secondary" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call the Pharmacy
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              className="relative hidden lg:block"
            >
              <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-pharmacy-red/10 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-medical-blue/10 rounded-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-pharmacy-red rounded-xl flex items-center justify-center">
                      <Pill className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-montserrat font-semibold text-gray-900">
                        Quick Refills
                      </h3>
                      <p className="text-sm text-gray-500">
                        Ready in minutes
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      'Submit prescription online',
                      'Get notified when ready',
                      'Pick up at your convenience',
                    ].map((step, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{step}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm text-gray-500 mb-2">
                      Need help? Call us:
                    </p>
                    <a
                      href="tel:+15551234567"
                      className="text-lg font-montserrat font-semibold text-medical-blue hover:text-medical-blue-dark transition-colors"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Pharmacy Services"
            subtitle="We offer a comprehensive range of pharmacy services to meet all your healthcare needs."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
                delay={index * 0.1}
              />
            ))}
          </div>
          <AnimatedSection delay={0.4} className="text-center mt-10">
            <Button href="/services" variant="outline">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Why Choose River Park Pharmacy"
            subtitle="We're more than just a pharmacy — we're your trusted healthcare partner in the community."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <AnimatedSection
                key={item.title}
                delay={index * 0.1}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pharmacy-red to-pharmacy-red-dark rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50 overflow-hidden">
        <div className="container-custom">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Don't just take our word for it — hear from the families and individuals we serve every day."
          />

          {/* Slider Container */}
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-pharmacy-red hover:shadow-xl transition-all hidden md:flex"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-pharmacy-red hover:shadow-xl transition-all hidden md:flex"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slides Track */}
            <div className="overflow-hidden mx-0 md:mx-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="grid md:grid-cols-3 gap-6"
                >
                  {[0, 1, 2].map((offset) => {
                    const index = (currentSlide + offset) % testimonials.length
                    const testimonial = testimonials[index]
                    return (
                      <div
                        key={`${currentSlide}-${offset}`}
                        className={`bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow h-full flex flex-col ${offset > 0 ? 'hidden md:flex' : ''
                          } ${offset > 1 ? 'md:hidden lg:flex' : ''}`}
                      >
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-yellow-400"
                            />
                          ))}
                        </div>
                        <div className="relative flex-grow">
                          <Quote className="w-8 h-8 text-pharmacy-red/20 absolute -top-2 -left-2" />
                          <p className="text-gray-600 leading-relaxed relative z-10 pl-4">
                            {testimonial.text}
                          </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center">
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0 bg-gradient-to-br from-pharmacy-red to-pharmacy-red-dark flex items-center justify-center">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none'
                                e.currentTarget.nextElementSibling?.classList.remove('hidden')
                              }}
                            />
                            <span className="hidden text-white font-montserrat font-bold text-sm">
                              {testimonial.initials}
                            </span>
                          </div>
                          <div>
                            <p className="font-montserrat font-semibold text-gray-900">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-gray-500">Verified Customer</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center items-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide
                    ? 'bg-pharmacy-red w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Mobile Swipe Hint */}
            <p className="text-center text-gray-400 text-sm mt-4 md:hidden">
              Swipe or tap arrows to see more
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-12 bg-gradient-to-r from-medical-blue to-medical-blue-dark">
        <div className="container-custom">
          <AnimatedSection direction="fade">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {trustSignals.map((signal, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center text-center"
                >
                  <CheckCircle className="w-5 h-5 text-white/80 mr-2 flex-shrink-0" />
                  <span className="text-white font-montserrat font-medium text-sm md:text-base">
                    {signal}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <AnimatedSection>
                  <h2 className="heading-2 text-gray-900 mb-4">
                    Visit Us Today
                  </h2>
                  <p className="body-text mb-8">
                    Stop by our pharmacy and experience the personalized care
                    that sets us apart. Our friendly team is ready to assist you
                    with all your healthcare needs.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-pharmacy-red mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-montserrat font-semibold text-gray-900">
                          Our Location
                        </p>
                        <p className="text-gray-600">
                          123 River Park Drive, Suite 100
                          <br />
                          Your City, ST 12345
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-pharmacy-red mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-montserrat font-semibold text-gray-900">
                          Phone Number
                        </p>
                        <a
                          href="tel:+15551234567"
                          className="text-medical-blue hover:text-medical-blue-dark transition-colors"
                        >
                          (555) 123-4567
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-pharmacy-red mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-montserrat font-semibold text-gray-900">
                          Business Hours
                        </p>
                        <p className="text-gray-600">
                          Mon - Fri: 9:00 AM - 7:00 PM
                          <br />
                          Sat: 9:00 AM - 5:00 PM | Sun: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button href="/contact">
                    Get Directions
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </AnimatedSection>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 md:p-12 flex items-center justify-center min-h-[300px] lg:min-h-0">
                <AnimatedSection delay={0.2} direction="fade">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                      <MapPin className="w-10 h-10 text-pharmacy-red" />
                    </div>
                    <p className="text-gray-600 font-montserrat">
                      Map placeholder
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Interactive map coming soon
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-pharmacy-red">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="heading-2 text-white mb-4">
              Ready to Experience Better Pharmacy Care?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join the River Park Pharmacy family today. Transfer your
              prescriptions and discover the difference personalized care makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/prescriptions"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-pharmacy-red font-montserrat font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Transfer Prescription
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
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
