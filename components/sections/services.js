"use client";

import { HoverExpand_001 } from "../ui/hover-expand";
import { motion } from "motion/react";

function Services() {
    const images = [
        {
            src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
            text: "Luxury Apartments",
            description: "Premium Vastu-compliant apartments with world-class amenities, timeless aesthetics, and modern luxury living spaces.",
            link: "/projects/luxury-apartments",
            alt: "Luxury Apartments",
            code: "# 01",
        },
        {
            src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
            text: "Premium Villas",
            description: "Exclusive villa communities with refined engineering, spacious layouts, and curated lifestyle experiences.",
            link: "/projects/premium-villas",
            alt: "Premium Villas",
            code: "# 02",
        },
        {
            src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
            text: "Residential Plots",
            description: "Prime residential plots in strategic locations with Vastu-friendly orientations and complete infrastructure.",
            link: "/projects/residential-plots",
            alt: "Residential Plots",
            code: "# 03",
        },
        {
            src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
            text: "Commercial Spaces",
            description: "Premium commercial developments designed for modern businesses with strategic locations and high ROI potential.",
            link: "/projects/commercial-spaces",
            alt: "Commercial Spaces",
            code: "# 04",
        },
        {
            src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
            text: "Independent Floors",
            description: "Elegantly crafted independent floors offering privacy, luxury, and the freedom of independent living.",
            link: "/projects/independent-floors",
            alt: "Independent Floors",
            code: "# 05",
        },
        {
            src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
            text: "Township Projects",
            description: "Integrated township developments with parks, schools, hospitals, and all amenities for a self-sustaining community.",
            link: "/projects/township-projects",
            alt: "Township Projects",
            code: "# 06",
        },
    ];

  return(
    <section className="py-10">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-center mx-auto mb-4"
        >
            Our <span style={{ color: '#E85002' }}>Premium</span> Projects
        </motion.h2>
        
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-center mx-auto max-w-3xl mb-4"
        >
            Discover our portfolio of luxury residences, premium villas, and commercial spaces — each crafted with Vastu-compliant foundations, refined engineering, and timeless aesthetics.
        </motion.p>
        
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            {/* Desktop view - HoverExpand */}
            <HoverExpand_001 images={images} className=""/>
            
            {/* Mobile/Tablet view - Card Grid */}
            <div className="lg:hidden px-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {images.map((image, index) => (
                    <motion.a
                        key={index}
                        href={image.link}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative overflow-hidden rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
                    >
                        {/* Image Container */}
                        <div className="relative h-full overflow-hidden">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        </div>
                        
                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
                                {image.text}
                            </h3>
                            <p className="text-white/90 text-sm leading-relaxed mb-4">
                                {image.description}
                            </p>
                            <div className="flex items-center text-white group-hover:translate-x-2 transition-transform duration-300">
                                <span className="text-sm font-semibold">Explore Details</span>
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </motion.div>
    </section>
  );
}

export default Services;