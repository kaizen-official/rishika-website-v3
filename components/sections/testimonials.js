"use client";

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const [direction, setDirection] = useState(0)

    const testimonials = [
        {
            name: "Rajesh Sharma",
            role: "Homeowner, Rishika Heights",
            content: "We moved into our Rishika Heights apartment last year, and it has been an incredible experience. The Vastu-compliant design, premium interiors, and clubhouse amenities exceeded our expectations. Truly a dream home!",
            rating: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
            company: "Rishika Heights"
        },
        {
            name: "Priya Malhotra",
            role: "Investor, Rishika Greens",
            content: "I invested in Rishika Greens plotted development and the returns have been outstanding. The location, infrastructure, and transparent dealing made the entire process smooth. Highly recommend for investors.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
            company: "Rishika Greens"
        },
        {
            name: "Amit & Neha Verma",
            role: "Homeowners, Rishika Enclave",
            content: "From booking to possession, Rishika Builders kept every promise. On-time delivery, excellent construction quality, and the after-sales support has been fantastic. Our villa is everything we dreamed of.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&q=80",
            company: "Rishika Enclave"
        },
        {
            name: "Dr. Sunita Reddy",
            role: "Homeowner, Rishika Residency",
            content: "The attention to detail in our apartment is remarkable — from the Italian marble flooring to the modular kitchen. The landscaped gardens and swimming pool make it feel like a resort. Best decision we ever made.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
            company: "Rishika Residency"
        },
        {
            name: "Vikram Patel",
            role: "Business Owner",
            content: "I purchased a commercial space in Rishika Business Park. The strategic location, modern design, and smart building features have been great for my business. Rishika Builders truly understands quality.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
            company: "Rishika Business Park"
        },
        {
            name: "Kavita & Suresh Joshi",
            role: "Homeowners, Rishika Paradise",
            content: "We were first-time home buyers and Rishika Builders made the journey effortless. The home loan assistance, transparent pricing, and Vastu-compliant floor plan gave us complete confidence in our purchase.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
            company: "Rishika Paradise"
        }
    ];

    const [itemsPerView, setItemsPerView] = useState(3); // Number of cards visible at once (responsive)

    // Responsive items per view
    useEffect(() => {
        const updateItems = () => {
            const w = window.innerWidth;
            if (w < 768) setItemsPerView(1);
            else if (w < 1024) setItemsPerView(2);
            else setItemsPerView(3);
        };

        updateItems();
        window.addEventListener('resize', updateItems);
        return () => window.removeEventListener('resize', updateItems);
    }, []);

    // Auto-advance slider
    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                handleNext();
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isHovered, currentIndex]);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Get visible testimonials with infinite wrapping
    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < itemsPerView; i++) {
            const index = (currentIndex + i) % testimonials.length;
            visible.push({ ...testimonials[index], key: `${currentIndex}-${i}` });
        }
        return visible;
    };

    return (
        <section className='py-10 '>
            <div className='w-full lg:max-w-[100rem] mx-auto px-4'>

                {/* Section Header */}
                <div className='text-center mb-16'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                            What Our <span className='text-[#E85002]'>Clients </span>Say
                        </h2>
                        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                            Don&apos;t just take our word for it. Hear from happy homeowners and investors who chose Rishika Builders.
                        </p>
                    </motion.div>
                </div>

                {/* Infinite Testimonials Slider */}
                <div
                    className='relative'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className='hidden md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:flex z-20 bg-white/90 hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 group'
                        aria-label="Previous testimonial"
                    >
                        <IconChevronLeft className='w-6 h-6 text-gray-700 group-hover:text-[#E85002]' />
                    </button>

                    <button
                        onClick={handleNext}
                        className='hidden md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:flex z-20 bg-white/90 hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 group'
                        aria-label="Next testimonial"
                    >
                        <IconChevronRight className='w-6 h-6 text-gray-700 group-hover:text-[#E85002]' />
                    </button>

                    <div className='overflow-hidden px-16'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            <AnimatePresence mode='popLayout' initial={false}>
                                {getVisibleTestimonials().map((testimonial, index) => (
                                    <motion.div
                                        key={testimonial.key}
                                        initial={{
                                            opacity: 0,
                                            x: direction > 0 ? 300 : -300
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0
                                        }}
                                        exit={{
                                            opacity: 0,
                                            x: direction > 0 ? -300 : 300
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                            opacity: { duration: 0.3 }
                                        }}
                                        whileHover={{
                                            y: -8,
                                            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                            transition: { duration: 0.2 }
                                        }}
                                        className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100'
                                    >
                                        {/* Rating Stars */}
                                        <div className='flex gap-1 mb-4'>
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className='w-5 h-5 text-yellow-400 fill-current'
                                                    viewBox='0 0 20 20'
                                                >
                                                    <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                                                </svg>
                                            ))}
                                        </div>

                                        {/* Testimonial Content */}
                                        <p className='text-gray-700 mb-6 leading-relaxed text-base'>
                                            &quot;{testimonial.content}&quot;
                                        </p>

                                        {/* Author Info */}
                                        <div className='flex items-center gap-4 pt-4 border-t border-gray-100'>
                                            <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#E85002] to-[#333333] flex items-center justify-center text-white font-bold text-lg flex-shrink-0'>
                                                <img src={testimonial.image} alt={testimonial.name} className='w-full h-full object-cover rounded-full' />
                                            </div>
                                            <div>
                                                <h4 className='font-semibold text-gray-900'>{testimonial.name}</h4>
                                                <p className='text-sm text-gray-600'>{testimonial.role}</p>
                                                <p className='text-xs text-[#E85002] font-medium mt-1'>{testimonial.company}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Mobile nav buttons (below cards) */}
                    <div className='flex md:hidden justify-center gap-4 mt-6'>
                        <button
                            onClick={handlePrev}
                            className='bg-white/90 hover:bg-white shadow rounded-full p-3 transition-all duration-200'
                            aria-label="Previous testimonial"
                        >
                            <IconChevronLeft className='w-5 h-5 text-gray-700' />
                        </button>

                        <button
                            onClick={handleNext}
                            className='bg-white/90 hover:bg-white shadow rounded-full p-3 transition-all duration-200'
                            aria-label="Next testimonial"
                        >
                            <IconChevronRight className='w-5 h-5 text-gray-700' />
                        </button>
                    </div>

                    {/* Pagination Dots */}
                    <div className='flex justify-center gap-2 mt-8'>
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'w-8 bg-[#E85002]'
                                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className='text-center mt-16'
                >
                    <p className='text-lg text-gray-600 mb-6'>
                        Join hundreds of satisfied clients who transformed their business with us
                    </p>
                    <Link href="/contact" description="Get in touch with us for your project">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='bg-[#E85002] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:bg-[#333333] transition-colors duration-300'
                        >
                            Start Your Project Today
                        </motion.button>
                    </Link>
                </motion.div>

            </div>
        </section>
    )
}

export default Testimonials