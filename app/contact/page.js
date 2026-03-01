import ContactPageClient from './contactClient'

export const metadata = {
  title: 'Contact Us - Get in Touch with Real Estate Experts | Rishika Builders',
  description: 'Contact Rishika Builders for luxury apartments, villas, residential plots, and commercial spaces. Fill our enquiry form or call us. We are here to help you find your dream home.',
  keywords: 'contact Rishika Builders, get in touch, real estate consultation, property inquiry, home buying, enquire now, phone number, email address',
  openGraph: {
    title: 'Contact Us - Get in Touch with Real Estate Experts | Rishika Builders',
    description: 'Contact Rishika Builders for luxury apartments, villas, residential plots, and commercial spaces. Fill our enquiry form or call us.',
    url: 'https://www.rishikabuilders.com/contact',
    siteName: 'Rishika Builders',
    images: [
      {
        url: 'https://www.rishikabuilders.com/contact/hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Contact Rishika Builders',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Get in Touch with Real Estate Experts | Rishika Builders',
    description: 'Contact Rishika Builders for luxury apartments, villas, residential plots, and commercial spaces.',
    images: ['https://www.rishikabuilders.com/contact/hero-image.webp'],
  },
  alternates: {
    canonical: 'https://www.rishikabuilders.com/contact',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
