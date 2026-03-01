"use client";

import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* WhatsApp Floating Chat Button */}
        <div className="hidden md:block fixed bottom-4 right-4 z-100">
          <button
            onClick={() => window.open("https://wa.me/917740000635", "_blank")}
            className="bg-green-500 p-3 rounded-full shadow-lg animate-bounce"
          >
            <FaWhatsapp size={40} />
          </button>
        </div>

        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12'>

          {/* Company Info */}
          <div>
            <img src="/full-logo-black.png" alt="Rishika Builders Logo" className='w-60 mb-4 brightness-0 invert' />
            <p className='text-gray-400 text-sm mb-4'>
              Not just spaces. Statements of legacy — Luxury redefined by Rishika Builders. Purpose with Precision, Trust Built In.
            </p>
            {/* Social Links */}
            <div className='flex gap-4'>
              <motion.a
                href="https://www.facebook.com/p/Rishika-Buildtech-Pvt-Ltd-Sonipat-100076082258325/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className='bg-[#E85002] p-2 rounded-full hover:bg-[#333333] transition-colors'
              >
                <FaFacebook size={20} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/rishika_group_of_companies"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className='bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 p-2 rounded-full hover:opacity-90 transition-opacity'
              >
                <FaInstagram size={20} />
              </motion.a>
              {/* <motion.a
                href="https://www.linkedin.com/company/rishikabuilders"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className='bg-[#E85002] p-2 rounded-full hover:bg-[#333333] transition-colors'
              >
                <FaLinkedin size={20} />
              </motion.a> */}
              {/* <motion.a
                href="https://www.youtube.com/@rishikabuilders"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className='bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors'
              >
                <FaYoutube size={20} />
              </motion.a> */}
            </div>
            {/* <div className='mt-4'>
              <Link href="/certifications" className='text-gray-300 hover:text-white transition-colors text-lg underline hover:no-underline'>
                Certifications & Safety
              </Link>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li><Link href="/" className='text-gray-400 hover:text-white transition-colors'>Home</Link></li>
              <li><Link href="/about" className='text-gray-400 hover:text-white transition-colors'>About Us</Link></li>
              <li><Link href="/projects" className='text-gray-400 hover:text-white transition-colors'>Projects</Link></li>
              <li><Link href="/amenities" className='text-gray-400 hover:text-white transition-colors'>Amenities</Link></li>
              <li><Link href="/careers" className='text-gray-400 hover:text-white transition-colors'>Careers</Link></li>
              <li><Link href="/contact" className='text-gray-400 hover:text-white transition-colors'>Contact Us</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Projects</h3>
            <ul className='space-y-2'>
              <li><Link href="/projects/luxury-apartments" className='text-gray-400 hover:text-white transition-colors'>Luxury Apartments</Link></li>
              <li><Link href="/projects/premium-villas" className='text-gray-400 hover:text-white transition-colors'>Premium Villas</Link></li>
              <li><Link href="/projects/residential-plots" className='text-gray-400 hover:text-white transition-colors'>Residential Plots</Link></li>
              <li><Link href="/projects/commercial-spaces" className='text-gray-400 hover:text-white transition-colors'>Commercial Spaces</Link></li>
              <li><Link href="/projects/independent-floors" className='text-gray-400 hover:text-white transition-colors'>Independent Floors</Link></li>
              <li><Link href="/projects/township-projects" className='text-gray-400 hover:text-white transition-colors'>Township Projects</Link></li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Amenities</h3>
            <ul className='space-y-2'>
              <li><Link href="/amenities/clubhouse" className='text-gray-400 hover:text-white transition-colors'>Clubhouse & Lounge</Link></li>
              <li><Link href="/amenities/swimming-pool" className='text-gray-400 hover:text-white transition-colors'>Swimming Pool</Link></li>
              <li><Link href="/amenities/landscaped-gardens" className='text-gray-400 hover:text-white transition-colors'>Landscaped Gardens</Link></li>
              <li><Link href="/amenities/fitness-center" className='text-gray-400 hover:text-white transition-colors'>Fitness Center</Link></li>
              <li><Link href="/amenities/childrens-play-area" className='text-gray-400 hover:text-white transition-colors'>Children&apos;s Play Area</Link></li>
              <li><Link href="/amenities/smart-security" className='text-gray-400 hover:text-white transition-colors'>Smart Security</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3'>
                <FaMapMarkerAlt size={20} className='text-[#A07558] flex-shrink-0 mt-1' />
                <span className='text-gray-400 text-sm'>
                  109-110, Ist Floor,<br />
                  MG Mall, Sec-14,<br />
                  Sonipat, Haryana
                </span>
              </li>
              <li className='flex items-center gap-3'>
                <FaPhoneAlt size={20} className='text-[#A07558] flex-shrink-0' />
                <a href="tel:+917740000635" className='text-gray-400 hover:text-white transition-colors'>
                  +91 77400 00635
                </a>
              </li>
              <li className='flex items-center gap-3'>
                <MdEmail size={20} className='text-[#A07558] flex-shrink-0' />
                <a href="mailto:info@rishikabuilders.com" className='text-[15px] text-gray-400 hover:text-white transition-colors break-all'>
                  info@rishikabuilders.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-gray-800 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-400 text-sm text-center md:text-left'>
              © {currentYear} Rishika Builders. All rights reserved.
            </p>
            <div className='flex gap-6 text-sm'>
              <Link href="/privacy-policy" className='text-gray-400 hover:text-white transition-colors'>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
