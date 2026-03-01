"use client";

import React from 'react'
import { motion } from 'motion/react'
import { IconCheck } from '@tabler/icons-react'

function Offering() {
  const offerings = [
    {
      heading: "LUXURY INTERIORS",
      description: "Handcrafted interiors with premium finishes — Italian marble floors, modular kitchens, and designer bathrooms that exude sophistication.",
      points: [
        "Italian marble flooring",
        "Modular kitchen with premium fittings",
        "Designer bathroom fixtures",
        "Premium wooden flooring options",
        "Smart home automation ready",
        "Custom interior design packages"
      ],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      imagePosition: "right"
    },
    {
      heading: "VASTU-COMPLIANT DESIGN",
      description: "Every home is designed with Vastu Shastra principles ensuring positive energy flow, harmony, and prosperity for the residents.",
      points: [
        "Vastu-optimized floor plans",
        "Auspicious entrance placement",
        "Natural light optimization",
        "Energy flow alignment",
        "Proper room orientation",
        "Sacred geometry principles"
      ],
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      imagePosition: "left"
    },
    {
      heading: "SMART HOME TECHNOLOGY",
      description: "Future-ready homes integrated with smart technology for lighting, security, climate control, and energy management.",
      points: [
        "Smart lighting control",
        "Video door phone system",
        "Centralized air conditioning",
        "EV charging infrastructure",
        "High-speed internet wiring",
        "Energy monitoring systems"
      ],
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
      imagePosition: "right"
    },
    {
      heading: "SUSTAINABLE CONSTRUCTION",
      description: "Eco-friendly construction practices with rainwater harvesting, solar panels, and green building certifications.",
      points: [
        "Rainwater harvesting systems",
        "Solar panel integration",
        "Seismic-resistant structure",
        "Green building certification",
        "Low VOC paints & finishes",
        "Waste management systems"
      ],
      image: "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800&q=80",
      imagePosition: "left"
    }
  ];

  return (
    <section className='py-10'>
      <div className='max-w-7xl mx-auto px-4 '>

        {/* Section Header */}
        <div
          // initial={{ opacity: 0, y: 20 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true, margin: "-100px" }}
          // transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            Premium <span className='text-[#E85002]'>Living Features</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Every Rishika home comes with premium features designed for modern living — from Vastu-compliant layouts to smart home technology and sustainable construction.
          </p>
        </div>

        {/* Offerings */}
        <div className='space-y-10'>
          {offerings.map((offering, index) => (
            <div key={index} className='relative'>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${offering.imagePosition === 'left' ? 'lg:grid-flow-dense' : ''
                }`}>

                {/* Content Side */}
                <div
                  // initial={{ opacity: 0, x: offering.imagePosition === 'right' ? -50 : 50 }}
                  // whileInView={{ opacity: 1, x: 0 }}
                  // viewport={{ once: true, margin: "0px" }}
                  // transition={{ duration: 0.6, delay: 0.2 }}
                  className={offering.imagePosition === 'left' ? 'lg:col-start-2' : ''}
                >
                  <div className='mb-6'>
                    <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                      {offering.heading}
                    </h3>
                    <div className='w-20 h-1 bg-[#E85002] mb-6'></div>
                    <p className='text-lg md:text-xl text-gray-600 leading-relaxed'>
                      {offering.description}
                    </p>
                  </div>

                  {/* Points Grid */}
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                    {offering.points.map((point, pointIndex) => (
                      <div
                        key={pointIndex}
                        // initial={{ opacity: 0, y: 10 }}
                        // whileInView={{ opacity: 1, y: 0 }}
                        // viewport={{ once: true, margin: "0px" }}
                        // transition={{ duration: 0.3, delay: 0.3 + (pointIndex * 0.05) }}
                        // whileHover={{ scale: 1.02, x: 5 }}
                        className='flex items-center gap-3 p-3 shadow-xl rounded-lg bg-gray-50 hover:bg-[#D9C3AB]/30 transition-all duration-300 group cursor-default'
                      >
                        <div className='w-6 h-6 rounded-full bg-[#D9C3AB]/30 group-hover:bg-[#E85002] flex items-center justify-center transition-all duration-300 shrink-0'>
                          {/* <IconCheck size={16} className='text-[#E85002] group-hover:text-white transition-colors duration-300' /> */}
                          <p className='text-[#E85002] group-hover:text-white transition-colors duration-300'>✓</p>
                        </div>
                        <span className='text-gray-700 group-hover:text-gray-900 text-base md:text-lg font-medium transition-colors duration-300'>
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Side */}
                <div
                  // initial={{ opacity: 0, x: offering.imagePosition === 'right' ? 50 : 50 }}
                  // whileInView={{ opacity: 1, x: 0 }}
                  // viewport={{ once: true, margin: "0px" }}
                  // transition={{ duration: 0.6 }}
                  className={offering.imagePosition === 'left' ? 'lg:col-start-1 lg:row-start-1' : ''}
                >
                  <div className='relative rounded-2xl overflow-hidden shadow-2xl group'>
                    <img
                      // whileHover={{ scale: 1.05 }}
                      // transition={{ duration: 0.4 }}
                      src={offering.image}
                      alt={offering.heading}
                      className='w-full h-auto object-cover'
                    />

                    {/* Gradient Overlay on Hover */}
                    {/* <div className='absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div> */}
                  </div>

                  {/* Decorative Elements */}
                  {/* <div className={`absolute -z-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl ${
                    offering.imagePosition === 'right' ? '-right-20' : '-left-20'
                  } top-1/2 -translate-y-1/2`}></div> */}
                </div>

              </div>

              {/* Separator Line (except for last item) */}
              {index < offerings.length - 1 && (
                <div className='mt-24 border-b border-gray-200'></div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Offering