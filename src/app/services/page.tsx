'use client'

import { motion } from 'framer-motion'
import {
  Pill,
  RefreshCw,
  Syringe,
  Stethoscope,
  FlaskConical,
  HeartPulse,
  ClipboardList,
  Users,
  Truck,
  Package,
  PawPrint,
  ShoppingBag,
  ArrowRight,
  Phone,
  CheckCircle,
} from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const services = [
  {
    id: 'refills',
    icon: <Pill className="w-8 h-8" />,
    title: 'Prescription Refills',
    description:
      'Managing your medications should be simple and stress-free. Our streamlined refill process ensures you never run out of the medications you need.',
    features: [
      'Easy online refill requests',
      'Automated refill reminders',
      'Quick in-store pickup',
      'Same-day service available',
    ],
  },
  {
    id: 'transfer',
    icon: <RefreshCw className="w-8 h-8" />,
    title: 'Transfer Prescriptions',
    description:
      'Switching to River Park Pharmacy is easy. We handle all the paperwork and coordination with your previous pharmacy so you can focus on your health.',
    features: [
      'Hassle-free transfer process',
      'We contact your old pharmacy',
      'Insurance verification included',
      'No interruption in your medications',
    ],
  },
  {
    id: 'immunizations',
    icon: <Syringe className="w-8 h-8" />,
    title: 'Immunizations & Vaccines',
    description:
      'Protect yourself and your family with our comprehensive vaccination services. Our certified pharmacists provide safe, convenient immunizations.',
    features: [
      'Flu shots & boosters',
      'COVID-19 vaccines',
      'Shingles vaccines',
      'Travel vaccinations',
      'Pneumonia vaccines',
    ],
  },
  {
    id: 'counseling',
    icon: <Stethoscope className="w-8 h-8" />,
    title: 'Medication Counseling',
    description:
      'Understanding your medications is crucial for your health. Our pharmacists provide personalized counseling to help you get the most from your treatment.',
    features: [
      'One-on-one consultations',
      'Drug interaction reviews',
      'Side effect management',
      'Dosage guidance',
    ],
  },
  {
    id: 'compounding',
    icon: <FlaskConical className="w-8 h-8" />,
    title: 'Compounding Services',
    description:
      'When standard medications don\'t meet your needs, our compounding services create customized solutions tailored to your specific requirements.',
    features: [
      'Custom medication formulations',
      'Allergy-friendly alternatives',
      'Pediatric formulations',
      'Specialty dosage forms',
    ],
  },
  {
    id: 'mtm',
    icon: <ClipboardList className="w-8 h-8" />,
    title: 'Medication Therapy Management',
    description:
      'Our comprehensive MTM program helps optimize your medication regimen, ensuring maximum effectiveness and safety for better health outcomes.',
    features: [
      'Comprehensive medication reviews',
      'Personalized action plans',
      'Coordination with physicians',
      'Ongoing monitoring & support',
    ],
  },
  {
    id: 'wellness',
    icon: <HeartPulse className="w-8 h-8" />,
    title: 'Health Consultations',
    description:
      'Beyond prescriptions, we offer health consultations to help you make informed decisions about your wellness and preventive care.',
    features: [
      'Blood pressure monitoring',
      'Diabetes management support',
      'Wellness screenings',
      'Health education resources',
    ],
  },
  {
    id: 'senior',
    icon: <Users className="w-8 h-8" />,
    title: 'Senior Care Services',
    description:
      'We understand the unique healthcare needs of seniors. Our specialized services ensure our older community members receive attentive, compassionate care.',
    features: [
      'Medicare Part D assistance',
      'Medication synchronization',
      'Easy-open packaging',
      'Delivery services available',
    ],
  },
  {
    id: 'delivery',
    icon: <Truck className="w-8 h-8" />,
    title: 'Free Local Delivery',
    description:
      'Can\'t make it to the pharmacy? No problem. We bring your prescriptions directly to your home or office, free of charge within our local service area.',
    features: [
      'Free delivery within service area',
      'Same-day delivery available',
      'Convenient scheduling options',
      'Contactless delivery available',
      'Refrigerated medication handling',
    ],
  },
  {
    id: 'pillpack',
    icon: <Package className="w-8 h-8" />,
    title: 'Multi-Dose Pill Packaging',
    description:
      'Never miss a dose with our custom pill packaging service. We organize your medications by date and time, making it easy to stay on track with your regimen.',
    features: [
      'Medications sorted by date & time',
      'Easy-to-open packaging',
      'Clear labeling for each dose',
      'Ideal for multiple medications',
      'Great for caregivers & seniors',
    ],
  },
  {
    id: 'pet',
    icon: <PawPrint className="w-8 h-8" />,
    title: 'Pet Medications',
    description:
      'Your furry family members deserve great care too. We offer a wide selection of pet medications and can compound custom formulations for your pets.',
    features: [
      'Prescription pet medications',
      'Flea & tick preventatives',
      'Custom pet compounding',
      'Flavored medications available',
      'Competitive pricing',
    ],
  },
  {
    id: 'otc',
    icon: <ShoppingBag className="w-8 h-8" />,
    title: 'Over-the-Counter & Wellness',
    description:
      'Beyond prescriptions, we stock a comprehensive selection of health and wellness products to support your everyday needs.',
    features: [
      'Vitamins & supplements',
      'Cold, flu & allergy relief',
      'Pain relievers & first aid',
      'Oral health products',
      'Health & beauty essentials',
    ],
  },
]

export default function ServicesPage() {
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
              Our <span className="text-pharmacy-red">Pharmacy Services</span>
            </h1>
            <p className="body-text mb-8">
              From prescription refills and free local delivery to pet medications
              and custom pill packaging — River Park Pharmacy offers comprehensive
              services designed around your needs. We're here to make managing your
              health simple and affordable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/prescriptions" size="lg">
                Refill Prescription
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="tel:+15551234567" variant="secondary" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                (555) 123-4567
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <AnimatedSection>
                  <div
                    className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="flex items-center mb-4">
                        <div className="w-14 h-14 bg-pharmacy-red rounded-xl flex items-center justify-center text-white mr-4">
                          {service.icon}
                        </div>
                        <h2 className="heading-3 text-gray-900">
                          {service.title}
                        </h2>
                      </div>
                      <p className="body-text mb-6">{service.description}</p>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button href="/contact" variant="outline" size="sm">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                    <div
                      className={`${
                        index % 2 === 1 ? 'lg:order-1' : ''
                      }`}
                    >
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 flex items-center justify-center min-h-[280px]">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-4">
                            <div className="text-pharmacy-red">
                              {service.icon}
                            </div>
                          </div>
                          <p className="text-gray-500 font-montserrat text-sm">
                            {service.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
                {index < services.length - 1 && (
                  <div className="border-b border-gray-100 mt-16 md:mt-24"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="heading-2 text-gray-900 mb-4">
                  Have Questions About Our Services?
                </h2>
                <p className="body-text mb-6">
                  Our friendly pharmacists are here to help. Whether you have
                  questions about a specific service or need guidance on your
                  medications, don't hesitate to reach out.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/contact">
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button href="tel:+15551234567" variant="secondary">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div className="inline-block bg-pharmacy-red/5 rounded-2xl p-6">
                  <p className="text-gray-600 mb-2">Pharmacy Hours</p>
                  <p className="font-montserrat font-semibold text-gray-900">
                    Monday - Friday: 9 AM - 7 PM
                  </p>
                  <p className="font-montserrat font-semibold text-gray-900">
                    Saturday: 9 AM - 5 PM
                  </p>
                  <p className="text-gray-500 mt-2">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
