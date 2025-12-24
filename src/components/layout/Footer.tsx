import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Prescriptions', href: '/prescriptions' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const services = [
  { name: 'Prescription Refills', href: '/prescriptions' },
  { name: 'Transfer Prescriptions', href: '/prescriptions#transfer' },
  { name: 'Immunizations', href: '/services#immunizations' },
  { name: 'Medication Counseling', href: '/services#counseling' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="River Park Pharmacy"
                width={56}
                height={56}
                className="w-14 h-14 bg-white rounded-full p-1"
              />
              <div className="ml-3">
                <span className="text-lg font-montserrat font-bold text-white">
                  River Park
                </span>
                <span className="text-lg font-montserrat font-bold text-medical-blue ml-1">
                  Pharmacy
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted neighborhood pharmacy providing personalized care and
              exceptional service to our community since day one.
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Licensed Pharmacy
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-pharmacy-red mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  123 River Park Drive
                  <br />
                  Suite 100
                  <br />
                  Your City, ST 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-pharmacy-red mr-3 flex-shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-pharmacy-red mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@riverparkpharmacy.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  info@riverparkpharmacy.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-pharmacy-red mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Mon - Fri: 9:00 AM - 7:00 PM
                  <br />
                  Saturday: 9:00 AM - 5:00 PM
                  <br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} River Park Pharmacy, LLC. All
              rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
