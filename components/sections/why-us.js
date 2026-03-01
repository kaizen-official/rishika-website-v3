"use client";

import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { IconCheck } from '@tabler/icons-react'

function WhyUS() {
  const features = [
    {
      title: "Vastu-Compliant Foundations",
      description: "Every project is designed with Vastu principles at its core, ensuring harmonious living spaces that bring prosperity, peace, and positive energy to your home."
    },
    {
      title: "Refined Engineering & Timeless Design",
      description: "Our team of expert architects and engineers combines cutting-edge construction technology with timeless aesthetics, delivering homes that stand as statements of legacy."
    },
    {
      title: "Transparent & Trust-Driven Process",
      description: "From booking to possession, we maintain complete transparency with on-time delivery, RERA compliance, and dedicated relationship managers for every homebuyer."
    }
  ];

  return (
    <section className='py-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                Why Choose <span className='text-[#E85002]'>Us</span>
              </h2>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='text-2xl md:text-3xl font-semibold text-gray-700 mb-6'
            >
              Your Legacy, Crafted with Precision
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-lg text-gray-600 mb-8 leading-relaxed'
            >
              In the world of luxury real estate, choosing the right builder defines your legacy. We combine modern engineering with heritage-inspired design to create spaces that transcend generations.
            </motion.p>

            {/* Features */}
            <div className='space-y-6 mb-8'>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                  className='flex gap-4'
                >
                  <div className='flex-shrink-0'>
                    <div className='w-8 h-8 rounded-full bg-[#E85002] flex items-center justify-center'>
                      <IconCheck size={20} className='text-white' />
                    </div>
                  </div>
                  <div>
                    <h4 className='text-xl font-semibold text-gray-800 mb-2'>
                      {feature.title}
                    </h4>
                    <p className='text-gray-600 leading-relaxed'>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link
                href="/about"
                className='inline-block bg-[#E85002] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#333333] transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
              >
                About Us
              </Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='relative'
          >
            <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                alt="Why Choose Rishika Builders"
                className='w-full h-auto object-cover'
              />

              {/* Decorative Elements */}
              <div className='absolute -top-4 -right-4 w-24 h-24 bg-[#E85002] rounded-full opacity-20 blur-2xl'></div>
              <div className='absolute -bottom-4 -left-4 w-32 h-32 bg-[#A07558] rounded-full opacity-20 blur-2xl'></div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className='absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 hidden lg:block'
            >
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-full bg-[#E85002] flex items-center justify-center text-white font-bold text-xl'>
                  ✓
                </div>
                <div>
                  <p className='text-2xl font-bold text-gray-800'>500+</p>
                  <p className='text-sm text-gray-600'>Happy Families</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default WhyUS