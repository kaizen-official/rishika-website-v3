import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#ffffff' },
  ],
};

export const metadata = {
  metadataBase: new URL('https://www.rishikabuilders.com'),
  title: {
    default: "Rishika Builders - Luxury Redefined, Legacy Built",
    template: "%s | Rishika Builders"
  },
  description: "Rishika Builders crafts enduring legacies through Vastu-compliant foundations, refined engineering, and timeless aesthetics. From luxury residences to premium estates — Purpose with Precision, Trust Built In.",
  keywords: [
    "luxury real estate",
    "premium residences",
    "Vastu-compliant homes",
    "luxury apartments",
    "premium villas",
    "real estate developer",
    "luxury builder",
    "residential projects",
    "commercial real estate",
    "premium estates",
    "modern luxury living",
    "Rishika Builders",
    "real estate investment",
    "luxury flats",
    "gated community",
    "smart homes",
    "sustainable construction",
    "property developer",
    "new launch projects",
    "ready to move homes",
  ],
  authors: [{ name: "Rishika Builders" }],
  creator: "Rishika Builders",
  publisher: "Rishika Builders",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.rishikabuilders.com',
    siteName: 'Rishika Builders',
    title: 'Rishika Builders - Luxury Redefined, Legacy Built',
    description: 'Crafting enduring legacies through Vastu-compliant foundations, refined engineering, and timeless aesthetics. Purpose with Precision, Trust Built In.',
    images: [
      {
        url: '/full-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'Rishika Builders Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rishika Builders - Luxury Redefined, Legacy Built',
    description: 'Crafting enduring legacies through Vastu-compliant foundations, refined engineering, and timeless aesthetics.',
    images: ['/full-logo-black.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.rishikabuilders.com',
  },
  category: 'real estate',
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Rishika Builders',
    url: 'https://www.rishikabuilders.com',
    logo: 'https://www.rishikabuilders.com/full-logo-black.png',
    description: 'Rishika Builders crafts enduring legacies through Vastu-compliant foundations, refined engineering, and timeless aesthetics. Luxury redefined.',
    email: 'info@rishikabuilders.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    sameAs: [],
    offers: {
      '@type': 'AggregateOffer',
      offerCount: '3',
      offers: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Project',
            name: 'Luxury Residences',
            description: 'Premium Vastu-compliant luxury residences with timeless design and modern amenities',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Project',
            name: 'Premium Villas',
            description: 'Exclusive villa projects with world-class amenities and refined engineering',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Project',
            name: 'Commercial Spaces',
            description: 'Premium commercial developments designed for modern businesses',
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
