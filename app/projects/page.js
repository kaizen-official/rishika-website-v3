import ProjectsPageClient from './projectsClient'

export const metadata = {
  title: 'Our Projects - Premium Real Estate Developments | Rishika Builders',
  description: 'Explore our range of premium real estate projects including luxury apartments, premium villas, residential plots, commercial spaces, and township developments.',
  keywords: 'real estate projects, luxury apartments, premium villas, residential plots, commercial spaces, township developments, RERA approved',
  openGraph: {
    title: 'Our Projects - Premium Real Estate Developments | Rishika Builders',
    description: 'Explore our range of premium real estate projects including luxury apartments, premium villas, residential plots, commercial spaces, and township developments.',
    url: 'https://www.rishikabuilders.com/projects',
    siteName: 'Rishika Builders',
    images: [
      {
        url: 'https://www.rishikabuilders.com/projects/hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Real Estate Projects',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Projects - Premium Real Estate Developments | Rishika Builders',
    description: 'Explore our range of premium real estate projects including luxury apartments, premium villas, residential plots, commercial spaces, and township developments.',
    images: ['https://www.rishikabuilders.com/projects/hero-image.webp'],
  },
  alternates: {
    canonical: 'https://www.rishikabuilders.com/projects',
  },
}

export default function ServicesPage() {
  return <ProjectsPageClient />
}
