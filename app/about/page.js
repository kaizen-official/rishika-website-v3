import AboutPageClient from './aboutClient'

export const metadata = {
  title: 'About Us - Premium Real Estate Developer | Rishika Builders',
  description: 'Learn about Rishika Builders, a trusted luxury real estate developer crafting Vastu-compliant homes with premium interiors. Building dream residences with enduring quality and timeless design.',
  keywords: 'about Rishika Builders, real estate developer, luxury homes, Vastu compliant, premium residences, our story, our team, company values, mission and vision',
  openGraph: {
    title: 'About Us - Premium Real Estate Developer | Rishika Builders',
    description: 'Learn about Rishika Builders, a trusted luxury real estate developer crafting Vastu-compliant homes with premium interiors. Building dream residences with enduring quality and timeless design.',
    url: 'https://www.rishikabuilders.com/about',
    siteName: 'Rishika Builders',
    images: [
      {
        url: 'https://www.rishikabuilders.com/about/hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'About Rishika Builders',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Premium Real Estate Developer | Rishika Builders',
    description: 'Learn about Rishika Builders, a trusted luxury real estate developer crafting Vastu-compliant homes with premium interiors.',
    images: ['https://www.rishikabuilders.com/about/hero-image.webp'],
  },
  alternates: {
    canonical: 'https://www.rishikabuilders.com/about',
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
