"use client";

import BgLayout from '@/components/layout/bgLayout';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { IconHome, IconChevronRight, IconBuilding, IconHome as IconHomeElevator, IconTool, IconArrowsUpDown, IconPackage, IconCertificate, IconPhone, IconUsers } from '@tabler/icons-react';
import Link from 'next/link';
import categoriesData from './categories.json';

function ProjectsPage() {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  const [serviceCounts, setServiceCounts] = useState({
    projects: 0,
    ratings: 0,
    years: 0
  });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const frameRate = 1000 / 60; // 60fps
      const totalFrames = duration / frameRate;

      const targets = {
        projects: 500,
        ratings: 100,
        years: 15
      };

      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setServiceCounts({
          projects: Math.floor(easeOutQuart * targets.projects),
          ratings: Math.floor(easeOutQuart * targets.ratings),
          years: Math.floor(easeOutQuart * targets.years)
        });

        if (frame >= totalFrames) {
          clearInterval(counter);
          setServiceCounts(targets);
        }
      }, frameRate);

      return () => clearInterval(counter);
    }
  }, [isInView]);

  const iconMap = {
    IconBuilding: <IconBuilding size={48} />,
    IconArrowsUpDown: <IconArrowsUpDown size={48} />,
    IconTool: <IconTool size={48} />,
    IconPackage: <IconPackage size={48} />,
    IconHomeElevator: <IconHomeElevator size={48} />,
    IconCertificate: <IconCertificate size={48} />,
    IconUsers: <IconUsers size={48} />,
    IconPhone: <IconPhone size={48} />
  };

  const categories = categoriesData;

  return (
    <BgLayout>
      {/* Hero Section */}
      <section className='relative h-[50vh] mt-27 lg:mt-20 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
            alt="Our Projects"
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/70'></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white'>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='flex items-center justify-center gap-2 text-sm mb-6'
          >
            <Link href='/' className='flex items-center gap-1 hover:text-[#D9C3AB] transition-colors'>
              <IconHome size={18} />
              <span>Home</span>
            </Link>
            <IconChevronRight size={16} className='text-[#D9C3AB]' />
            <span className='text-[#D9C3AB]'>Projects</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
              Our <span className='text-[#A07558]'>Projects</span>
            </h1>
            <p className='text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed'>
              Premium real estate developments crafted for modern living — luxury apartments, villas, plots, and commercial spaces across prime locations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Our Complete <span className='text-[#E85002]'>Project Range</span>
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              From luxury apartments to premium villas, explore our comprehensive range of RERA-approved real estate developments.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='group'
              >
                <Link href={`/projects/${category.slug}`}>
                  <div className='flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#A07558] cursor-pointer'>
                    {/* Image */}
                    <div className='relative h-69 overflow-hidden'>
                      <img
                        src={category.image}
                        alt={category.title}
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                      {/* <div className='absolute top-4 left-4 text-white'>
                        {iconMap[category.icon]}
                      </div> */}
                    </div>

                    <div className='p-6 flex flex-col flex-grow'>
                      {/* Title */}
                      <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E85002] transition-colors'>
                        {category.title}
                      </h3>

                      {/* Description */}
                      <p className='text-gray-600 leading-relaxed mb-4 flex-grow'>
                        {category.description}
                      </p>

                      {/* Features */}
                      <div className='space-y-2 mb-4'>
                        {category.features.map((feature, idx) => (
                          <div key={idx} className='flex items-center gap-2 text-sm text-gray-500'>
                            <div className='w-1.5 h-1.5 bg-[#E85002] rounded-full'></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className='flex flex-row justify-center items-center gap-2 bg-[#E85002] rounded-lg text-white py-2 px-2 w-full text-center font-semibold group-hover:gap-4 transition-all'>
                        <span>View Details</span>
                        <IconChevronRight size={20} className='group-hover:translate-x-1 transition-transform' />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Why Choose <span className='text-[#E85002]'>Rishika Builders?</span>
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              We combine architectural excellence, quality construction, and dedicated service to deliver your dream home.
            </p>
          </motion.div>

          <div ref={statsRef} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 * 0.1 }}
              className='text-center p-6'
            >
              <div className='text-5xl font-bold text-[#E85002] mb-3'>{serviceCounts.projects}+</div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>Homes Delivered</h3>
              <p className='text-gray-600'>Successfully delivered across residential and commercial projects</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 * 0.1 }}
              className='text-center p-6'
            >
              <div className='text-5xl font-bold text-[#E85002] mb-3'>{serviceCounts.ratings}%</div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>Client Satisfaction</h3>
              <p className='text-gray-600'>Happy homeowners across all our developments</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 2 * 0.1 }}
              className='text-center p-6'
            >
              <div className='text-5xl font-bold text-[#E85002] mb-3'>{serviceCounts.years}+</div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>Years Experience</h3>
              <p className='text-gray-600'>Expertise in real estate development and construction</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 3 * 0.1 }}
              className='text-center p-6'
            >
              <div className='text-5xl font-bold text-[#E85002] mb-3'>24/7</div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>Customer Support</h3>
              <p className='text-gray-600'>Round-the-clock assistance for all your property needs</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='bg-gradient-to-r from-[#E85002] to-[#333333] rounded-3xl p-12 text-center text-white shadow-2xl'
          >
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Ready to Find Your Dream Home?
            </h2>
            <p className='text-xl text-[#D9C3AB] mb-8 max-w-2xl mx-auto'>
              Let&apos;s help you find the perfect property for your family or business.
            </p>
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <Link href='/contact'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='bg-white text-[#E85002] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300'
                >
                  Enquire Now
                </motion.button>
              </Link>
              <Link href='tel:+917740000635'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#E85002] transition-all duration-300'
                >
                  Call: +91 77400 00635
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </BgLayout>
  );
}

export default ProjectsPage;