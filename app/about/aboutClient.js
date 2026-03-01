"use client";

import BgLayout from '@/components/layout/bgLayout'
import Clients from '@/components/sections/clients'
import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { IconTarget, IconUsers, IconTrophy, IconHeart, IconRocket, IconBulb, IconHome, IconChevronRight } from '@tabler/icons-react'
import Link from 'next/link'

function AboutPage() {
  const teamStatsRef = useRef(null);
  const isInView = useInView(teamStatsRef, { once: true, margin: "-100px" });

  const [teamCounts, setTeamCounts] = useState({
    years: 0,
    members: 0,
    projects: 0,
    retention: 0
  });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const frameRate = 1000 / 60; // 60fps
      const totalFrames = duration / frameRate;

      const targets = {
        years: 10,
        members: 50,
        projects: 500,
        retention: 98
      };

      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setTeamCounts({
          years: Math.floor(easeOutQuart * targets.years),
          members: Math.floor(easeOutQuart * targets.members),
          projects: Math.floor(easeOutQuart * targets.projects),
          retention: Math.floor(easeOutQuart * targets.retention)
        });

        if (frame >= totalFrames) {
          clearInterval(counter);
          setTeamCounts(targets);
        }
      }, frameRate);

      return () => clearInterval(counter);
    }
  }, [isInView]);

  const values = [
    {
      icon: IconTarget,
      title: "Quality First",
      description: "We use only premium materials and construction techniques, ensuring every home meets the highest standards of durability and finish."
    },
    {
      icon: IconUsers,
      title: "Client-Centric",
      description: "Every family is unique. We provide personalized home solutions tailored to your lifestyle, preferences, and aspirations."
    },
    {
      icon: IconTrophy,
      title: "Excellence",
      description: "We maintain the highest standards in design, construction, and delivery for every residential and commercial project."
    },
    {
      icon: IconHeart,
      title: "Integrity",
      description: "Transparency, honesty, and ethical practices form the foundation of every homeowner relationship we build."
    },
    {
      icon: IconRocket,
      title: "Innovation",
      description: "We embrace modern construction technology and sustainable practices, delivering future-ready homes with smart features."
    },
    {
      icon: IconBulb,
      title: "Vastu Wisdom",
      description: "Every project is designed with Vastu Shastra principles, blending ancient wisdom with modern architecture for harmonious living."
    }
  ];

  const team = [
    {
      expertise: "10+ Years",
      description: "Real Estate Development Experience"
    },
    {
      expertise: "50+",
      description: "Skilled Architects & Engineers"
    },
    {
      expertise: "500+",
      description: "Happy Families Served"
    },
    {
      expertise: "100%",
      description: "RERA Compliant Projects"
    }
  ];

  return (
    <BgLayout>
      {/* Hero Section with Background Image */}
      <section className='relative h-[50vh] mt-27 lg:mt-20 flex items-center justify-center overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
            alt="About Us"
            className='w-full h-full object-cover'
          />
          {/* Overlay */}
          <div className='absolute inset-0 bg-black/70'></div>
        </div>

        {/* Content */}
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white'>
          {/* Breadcrumbs */}
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
            <span className='text-[#D9C3AB]'>About Us</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6'>
              About <span className='text-[#A07558]'>Rishika Builders</span>
            </h1>
            <p className='text-xl md:text-2xl text-[#D9C3AB] max-w-3xl mx-auto leading-relaxed'>
              Crafting luxury residences with Vastu-compliant design, enduring quality, and timeless elegance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
            >
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                Our <span className='text-[#E85002]'>Story</span>
              </h2>
              <div className='w-20 h-1 bg-[#E85002] mb-6'></div>
              <p className='text-lg text-gray-600 mb-4 leading-relaxed'>
                Rishika Builders was founded with a vision to redefine luxury living through thoughtful design, Vastu-compliant architecture, and uncompromising quality. What began as a passion for creating beautiful homes has evolved into one of the region&apos;s most trusted real estate development companies.
              </p>
              <p className='text-lg text-gray-600 mb-4 leading-relaxed'>
                Over the years, we&apos;ve crafted hundreds of dream residences — from luxury apartments and premium villas to expansive township developments. Every project reflects our commitment to using the finest materials, innovative construction techniques, and eco-friendly practices that stand the test of time.
              </p>
              <p className='text-lg text-gray-600 leading-relaxed'>
                Today, we&apos;re proud to be recognized as a premier real estate developer that combines architectural excellence with genuine care for homeowner satisfaction. Every home, every community, and every landmark project represents our dedication to building legacy, luxury, and lasting value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className='relative'
            >
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Our Story"
                className='rounded-2xl shadow-2xl w-full'
              />
              <div className='absolute -bottom-6 -right-6 w-64 h-64 bg-[#E85002]/20 rounded-full blur-3xl -z-10'></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Mission & Vision from mission-vision component */}
      <section className='py-10 '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Our <span className='text-[#E85002]'>Mission & Vision</span>
            </h2>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300'
            >
              <div className='w-16 h-16 bg-[#E85002] rounded-xl flex items-center justify-center mb-6'>
                <IconTarget size={32} className='text-white' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Our Mission</h3>
              <p className='text-gray-600 leading-relaxed'>
                To create homes that inspire — built on the foundations of Vastu wisdom, premium craftsmanship, and sustainable practices. We are committed to delivering residences that enhance quality of life and create lasting value for every family we serve.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300'
            >
              <div className='w-16 h-16 bg-[#E85002] rounded-xl flex items-center justify-center mb-6'>
                <IconRocket size={32} className='text-white' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Our Vision</h3>
              <p className='text-gray-600 leading-relaxed'>
                To be the region&apos;s most trusted real estate developer, recognized for setting new benchmarks in luxury, design, and homeowner satisfaction. We envision communities where every home is a masterpiece — thoughtfully designed, beautifully crafted, and built to last for generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Our Core <span className='text-[#E85002]'>Values</span>
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              These principles guide our commitment to excellence in real estate development and homeowner satisfaction.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  // viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className='bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
                >
                  <div className='w-14 h-14 bg-[#E85002] rounded-xl flex items-center justify-center mb-4'>
                    <Icon size={28} className='text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>{value.title}</h3>
                  <p className='text-gray-600 leading-relaxed'>{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients Component */}
      {/* <Clients /> */}

      {/* Team Stats */}
      <section className='py-10 bg-gradient-to-br from-[#E85002] to-[#333333] text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Building Excellence by Numbers
            </h2>
            <p className='text-xl text-[#D9C3AB] max-w-3xl mx-auto'>
              A team of skilled architects, engineers, and craftsmen committed to delivering your dream home
            </p>
          </motion.div>

          <div ref={teamStatsRef} className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              // viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0 * 0.1 }}
              className='text-center'
            >
              <div className='text-4xl md:text-5xl font-bold mb-2'>{teamCounts.years}+ Years</div>
              <div className='text-[#D9C3AB] font-medium'>Real Estate Development Experience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              // viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 1 * 0.1 }}
              className='text-center'
            >
              <div className='text-4xl md:text-5xl font-bold mb-2'>{teamCounts.members}+</div>
              <div className='text-[#D9C3AB] font-medium'>Skilled Architects & Engineers</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              // viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 2 * 0.1 }}
              className='text-center'
            >
              <div className='text-4xl md:text-5xl font-bold mb-2'>{teamCounts.projects}+</div>
              <div className='text-[#D9C3AB] font-medium'>Happy Families Served</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              // viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 3 * 0.1 }}
              className='text-center'
            >
              <div className='text-4xl md:text-5xl font-bold mb-2'>{teamCounts.retention}%</div>
              <div className='text-[#D9C3AB] font-medium'>RERA Compliance Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-10'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='bg-gradient-to-br from-[#E85002] to-[#333333] rounded-3xl p-12 text-white text-center relative overflow-hidden'
          >
            {/* Background decoration */}
            <div className='absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32'></div>
            <div className='absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24'></div>

            <div className='relative z-10'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Ready to Find Your Dream Home?
              </h2>
              <p className='text-xl text-[#D9C3AB] mb-8 max-w-2xl mx-auto'>
                Let&apos;s work together to find the perfect home for you and your family — crafted with luxury, love, and lasting value.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link
                  href='/contact'
                  className='inline-block bg-white text-[#E85002] px-8 py-4 rounded-lg font-semibold hover:bg-[#FBF8F5] transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
                >
                  Enquire Now
                </Link>
                <Link
                  href='/projects'
                  className='inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#E85002] transition-all duration-300'
                >
                  View Our Projects
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </BgLayout>
  )
}

export default AboutPage