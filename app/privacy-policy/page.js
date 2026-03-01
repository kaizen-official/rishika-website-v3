import PrivacyPageClient from './privacyClient'

export const metadata = {
  title: 'Privacy Policy | Rishika Builders',
  description: 'Read the privacy policy of Rishika Builders. Learn how we collect, use, and protect your personal information when you use our real estate services.',
  keywords: 'privacy policy, data protection, Rishika Builders privacy, personal information',
  openGraph: {
    title: 'Privacy Policy | Rishika Builders',
    description: 'Read the privacy policy of Rishika Builders. Learn how we collect, use, and protect your personal information when you use our real estate services.',
    url: 'https://www.rishikabuilders.com/privacy-policy',
    siteName: 'Rishika Builders',
    images: [
      {
        url: 'https://www.rishikabuilders.com/projects/hero-image.webp',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy Rishika Builders',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Rishika Builders',
    description: 'Read the privacy policy of Rishika Builders. Learn how we collect, use, and protect your personal information when you use our real estate services.',
    images: ['https://www.rishikabuilders.com/services/services-hero.webp'],
  },
  alternates: {
    canonical: 'https://www.rishikabuilders.com/privacy-policy',
  },
}

export default function PrivcyPage() {
  return <PrivacyPageClient />
}
