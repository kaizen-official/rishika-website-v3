import BgLayout from "@/components/layout/bgLayout";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import WhyUS from "@/components/sections/why-us";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Lazy load below-the-fold sections
const Clients = dynamic(() => import("@/components/sections/clients"), {
  loading: () => <div className="h-48" />,
});
const MissionVision = dynamic(() => import("@/components/sections/mission-vision"), {
  loading: () => <div className="h-48" />,
});
const ContactForm = dynamic(() => import("@/components/sections/form"), {
  loading: () => <div className="h-48" />,
});
const Offering = dynamic(() => import("@/components/sections/offering"), {
  loading: () => <div className="h-48" />,
});
const Faqs = dynamic(() => import("@/components/sections/faqs"), {
  loading: () => <div className="h-48" />,
});

export const metadata = {
  title: 'Rishika Builders - Luxury Redefined, Legacy Built',
  description: 'Rishika Builders crafts enduring legacies through Vastu-compliant foundations, refined engineering, and timeless aesthetics. From luxury residences to premium estates. Purpose with Precision, Trust Built In.',
  keywords: 'luxury real estate, premium residences, Vastu-compliant homes, luxury apartments, premium villas, real estate developer, Rishika Builders, luxury builder, residential projects',
  openGraph: {
    title: 'Rishika Builders - Luxury Redefined, Legacy Built',
    description: 'Crafting enduring legacies through Vastu-compliant foundations, refined engineering, and timeless aesthetics. Purpose with Precision, Trust Built In.',
    url: 'https://www.rishikabuilders.com',
    siteName: 'Rishika Builders',
    images: [
      {
        url: 'https://www.rishikabuilders.com/full-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'Rishika Builders',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rishika Builders - Luxury Redefined, Legacy Built',
    description: 'Crafting enduring legacies through Vastu-compliant foundations, refined engineering, and timeless aesthetics.',
    images: ['https://www.rishikabuilders.com/full-logo-black.png'],
  },
  alternates: {
    canonical: 'https://www.rishikabuilders.com',
  },
}

export default function Home() {
  return (
    <BgLayout>
      <video
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        fetchPriority="high"
        className="pt-28 lg:pt-20 w-full h-auto max-h-screen object-cover"
      />

      <Services />
      <WhyUS />
      <Suspense fallback={<div className="h-48" />}>
        {/* <Clients /> */}
      </Suspense>
      <Suspense fallback={<div className="h-48" />}>
        <MissionVision />
      </Suspense>
      <Suspense fallback={<div className="h-48" />}>
        <ContactForm />
      </Suspense>
      <Suspense fallback={<div className="h-48" />}>
        <Offering />
      </Suspense>
      <Suspense fallback={<div className="h-48" />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div className="h-48" />}>
        <Faqs />
      </Suspense>
    </BgLayout>
  );
}