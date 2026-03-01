"use client";

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { IconChevronDown } from '@tabler/icons-react'
import Link from 'next/link';

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Are your projects RERA registered?",
      answer: "Yes, all Rishika Builders projects are fully RERA registered and compliant with all regulatory requirements. We maintain complete transparency in our documentation, approvals, and project timelines. RERA registration ensures that your investment is protected, construction timelines are adhered to, and all project details are publicly available. You can verify our registration details on the official RERA website for your state."
    },
    {
      question: "What is the typical possession timeline?",
      answer: "Our possession timelines vary by project type and scale. Residential apartments are typically delivered within 24-36 months from launch, villas within 18-30 months, and plotted developments within 12-18 months. We are committed to on-time delivery and maintain a strong track record. During the construction phase, we provide regular progress updates and site visit opportunities so you stay informed every step of the way."
    },
    {
      question: "Do you offer Vastu-compliant homes?",
      answer: "Absolutely. Vastu compliance is a core design principle at Rishika Builders. All our projects are designed with Vastu Shastra guidelines ensuring auspicious entrance placements, optimal room orientations, natural light flow, and positive energy circulation. Our in-house Vastu consultants work closely with architects to ensure every floor plan harmonizes modern living with traditional wisdom, giving you a home that feels right in every way."
    },
    {
      question: "What payment plans are available?",
      answer: "We offer flexible payment plans tailored to your financial comfort, including construction-linked plans (CLP), down payment plans with attractive discounts, and EMI-based options with partner banks. We also assist with home loan processing through our tie-ups with major banks like SBI, HDFC, ICICI, and Axis. Our sales team will help you choose the best plan and guide you through the entire financial process."
    },
    {
      question: "What amenities do your projects include?",
      answer: "Our projects feature world-class amenities including a clubhouse, swimming pool, landscaped gardens, fitness center, children's play area, jogging track, multipurpose hall, indoor games, 24/7 security with CCTV, smart home features, EV charging stations, and dedicated parking. Amenities vary by project — premium projects include additional features like rooftop lounges, co-working spaces, and private theatres."
    },
    {
      question: "Can I visit the construction site?",
      answer: "Yes, we encourage site visits and conduct organized tours for prospective buyers. You can schedule a free site visit through our website or by contacting our sales team. During the visit, you'll see the construction progress, sample flats (where available), the surrounding neighborhood, and get a firsthand feel of the project. Our representatives will be present to answer all your queries and walk you through the project details."
    },
    {
      question: "What is the quality of construction?",
      answer: "Quality is the cornerstone of Rishika Builders. We use premium materials including high-grade steel (Fe 500D), M30+ grade concrete, UPVC/aluminum windows, branded electrical and plumbing fittings (Havells, Jaquar, Kohler), vitrified tiles, and anti-termite treated structures. Our projects undergo rigorous quality checks at every stage, and we follow IS codes for earthquake-resistant construction ensuring your home stands strong for generations."
    },
    {
      question: "Do you provide home loan assistance?",
      answer: "Yes, we provide complete home loan assistance. Our dedicated finance team helps you with documentation, eligibility assessment, and loan processing through our partner banks. Most of our projects are pre-approved by leading banks including SBI, HDFC, ICICI, Axis Bank, and Bank of Baroda, ensuring faster loan approvals. We guide you through every step — from application to disbursement — making the process hassle-free."
    },
    {
      question: "What after-sales support do you provide?",
      answer: "Rishika Builders provides comprehensive after-sales support including a dedicated customer care team, warranty on structural elements and fittings, assistance with property registration and documentation, and a maintenance support team for the initial years post-possession. We also facilitate the formation of a Residents' Welfare Association (RWA) and ensure smooth handover of common area maintenance to the society."
    },
    {
      question: "How do I book a property with Rishika Builders?",
      answer: "Booking is simple — you can start by filling out the enquiry form on our website, calling our sales team, or visiting our sales office. After selecting your preferred unit, you'll need to fill out the application form and pay a booking amount. Our team will then guide you through the agreement, payment schedule, and all documentation. The entire process is transparent and supported by our experienced sales and legal teams."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className='py-10'>
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>

        {/* Header */}
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='text-4xl md:text-5xl font-bold mb-4'
          >
            Frequently Asked <span className='text-[#E85002]'>Questions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-lg text-gray-600 max-w-3xl mx-auto'
          >
            Get answers to common questions about our projects, home buying process, payment plans, and more.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className='bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300'
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFaq(index)}
                className='w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-300'
              >
                <h3 className='text-lg font-semibold text-gray-900 pr-4'>
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className='flex-shrink-0'
                >
                  <IconChevronDown size={24} className='text-[#E85002]' />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='overflow-hidden'
                  >
                    <div className='px-6 pb-6'>
                      <p className='text-gray-600 leading-relaxed'>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='text-center mt-12 p-8 bg-[#E85002] rounded-2xl'
        >
          <h3 className='text-3xl font-bold text-gray-50 mb-3'>
            Still have questions?
          </h3>
          <p className='text-gray-100 text-xl mb-6'>
            Can&apos;t find the answer you&apos;re looking for? Our real estate experts are here to help.
          </p>
          <Link
            href='/contact'
            className='inline-block bg-white text-[#E85002] px-8 py-3 rounded-lg text-xl font-semibold hover:bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
          >
            Get in Touch
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default Faqs