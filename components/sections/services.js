"use client";

import { HoverExpand_001 } from "../ui/hover-expand";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

function Services() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const images = [
        {
            src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
            text: "Luxury Apartments",
            description: "Premium Vastu-compliant apartments with world-class amenities, timeless aesthetics, and modern luxury living spaces.",
            link: "/projects/luxury-apartments",
            alt: "Luxury Apartments",
            code: "01",
        },
        {
            src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
            text: "Premium Villas",
            description: "Exclusive villa communities with refined engineering, spacious layouts, and curated lifestyle experiences.",
            link: "/projects/premium-villas",
            alt: "Premium Villas",
            code: "02",
        },
        {
            src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
            text: "Residential Plots",
            description: "Prime residential plots in strategic locations with Vastu-friendly orientations and complete infrastructure.",
            link: "/projects/residential-plots",
            alt: "Residential Plots",
            code: "03",
        },
        {
            src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
            text: "Commercial Spaces",
            description: "Premium commercial developments designed for modern businesses with strategic locations and high ROI potential.",
            link: "/projects/commercial-spaces",
            alt: "Commercial Spaces",
            code: "04",
        },
        {
            src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
            text: "Independent Floors",
            description: "Elegantly crafted independent floors offering privacy, luxury, and the freedom of independent living.",
            link: "/projects/independent-floors",
            alt: "Independent Floors",
            code: "05",
        },
        {
            src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
            text: "Township Projects",
            description: "Integrated township developments with parks, schools, hospitals, and all amenities for a self-sustaining community.",
            link: "/projects/township-projects",
            alt: "Township Projects",
            code: "06",
        },
    ];

    const headingWords = ["What", "We", "Build."];

  return(
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E85002]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#A07558]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto ">

            {/* Top bar — label + line */}
            {/* <div className="flex items-center gap-4 mb-8">
                <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-xs font-bold uppercase tracking-[0.3em] text-[#E85002] bg-[#E85002]/10 px-4 py-1.5 rounded-full"
                >
                    Our Portfolio
                </motion.span>
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 h-px bg-gradient-to-r from-[#E85002]/30 to-transparent"
                    style={{ transformOrigin: "left" }}
                />
            </div> */}

            {/* Heading — word-by-word stagger */}
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4">
                {headingWords.map((word, i) => (
                    <motion.span
                        key={word}
                        initial={{ opacity: 0, y: 40, rotateX: 45 }}
                        animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                        className="text-5xl md:text-7xl font-black tracking-tight text-gray-900"
                        style={{ perspective: 400 }}
                    >
                        {word === "Build." ? (
                            <span className="text-[#E85002]">{word}</span>
                        ) : word}
                    </motion.span>
                ))}
            </div>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-gray-500 text-lg max-w-xl mb-12 leading-relaxed"
            >
                From luxury apartments to integrated townships — every project is a signature of precision, passion, and timeless living.
            </motion.p>
        </div>

        {/* Desktop — Hover Expand (edge-to-edge) */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto"
        >
            <HoverExpand_001 images={images} />
        </motion.div>

        {/* Mobile/Tablet — Magazine-style stacked cards */}
        <div className="lg:hidden px-4 sm:px-6 mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {images.map((image, index) => (
                    <motion.a
                        key={index}
                        href={image.link}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="group relative overflow-hidden rounded-2xl h-72 sm:h-80"
                    >
                        {/* Image */}
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                        {/* Number */}
                        <span className="absolute top-4 left-4 text-white/25 text-5xl font-black">
                            {image.code}
                        </span>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                            <div className="w-8 h-[2px] bg-[#E85002] mb-3 rounded-full group-hover:w-12 transition-all duration-300" />
                            <h3 className="text-xl font-bold text-white mb-1.5 tracking-tight">
                                {image.text}
                            </h3>
                            <p className="text-white/60 text-xs leading-relaxed line-clamp-2 mb-3">
                                {image.description}
                            </p>
                            <div className="inline-flex items-center gap-1.5 text-[#E85002] text-xs font-semibold group-hover:gap-3 transition-all duration-300">
                                Explore
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    </section>
  );
}

export default Services;