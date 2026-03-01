import CareersPageClient from './careersClient'

export const metadata = {
  title: 'Careers - Join Our Real Estate Team | Rishika Builders',
  description: 'Explore exciting career opportunities at Rishika Builders. Join our team of architects, engineers, sales professionals, and project managers. Apply now and grow with us!',
  keywords: 'careers at Rishika Builders, job opportunities, real estate jobs, architect jobs, project manager jobs, sales jobs, hiring, work with us, join our team',
  openGraph: {
    title: 'Careers - Join Our Real Estate Team | Rishika Builders',
    description: 'Explore exciting career opportunities at Rishika Builders. Join our team of architects, engineers, sales professionals, and project managers. Apply now and grow with us!',
    url: 'https://www.rishikabuilders.com/careers',
    siteName: 'Rishika Builders',
    images: [
      {
        url: 'https://www.rishikabuilders.com/careers/hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Careers at Rishika Builders',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers - Join Our Real Estate Team | Rishika Builders',
    description: 'Explore exciting career opportunities at Rishika Builders. Join our team of architects, engineers, and project managers.',
    images: ['https://www.rishikabuilders.com/careers/hero-image.webp'],
  },
  alternates: {
    canonical: 'https://www.rishikabuilders.com/careers',
  },
}

export default function CareersPage() {
  return <CareersPageClient />
}
