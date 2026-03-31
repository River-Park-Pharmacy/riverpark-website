import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers | River Park Pharmacy',
  description: 'Join the River Park Pharmacy team. Explore career opportunities at our community pharmacy in the Bronx. We are hiring pharmacy technicians, cashiers, and more.',
  openGraph: {
    title: 'Careers | River Park Pharmacy',
    description: 'Explore career opportunities at River Park Pharmacy. Join our team and make a difference in our community.',
  },
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
