"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

const HoverExpand_001 = ({
  images,
  className,
}) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 30 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={cn("relative hidden lg:block w-full mx-auto px-10", className)}
    >
      <div className="flex w-full items-stretch gap-2 h-[34rem]">
        {images.map((image, index) => {
          const isActive = activeImage === index;
          return (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-2xl"
              animate={{
                flex: isActive ? 5 : 1,
              }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              onClick={() => {
                if (image.link) {
                  window.location.href = image.link;
                }
              }}
              onHoverStart={() => setActiveImage(index)}
            >
              {/* Image */}
              <motion.img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 size-full object-cover"
                animate={{ scale: isActive ? 1.05 : 1.15 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />

              {/* Dark gradient overlay */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: isActive
                    ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)"
                    : "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)",
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Number badge — always visible */}
              <div className="absolute top-4 left-4 z-10">
                <motion.span
                  className="text-white/40 font-black text-xl tracking-tight"
                  animate={{ opacity: 1 }}
                >
                  {image.code}
                </motion.span>
              </div>

              {/* Active state — full content */}
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="absolute bottom-0 left-0 right-0 p-8 z-10"
                  >
                    {/* Accent line */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: 48 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="h-[3px] bg-[#E85002] mb-4 rounded-full"
                    />

                    <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
                      {image.text}
                    </h3>
                    <p className="text-white/75 text-sm leading-relaxed max-w-md mb-5">
                      {image.description}
                    </p>

                    {/* CTA pill */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#E85002] hover:border-[#E85002] transition-all duration-300"
                    >
                      Explore Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Inactive state — vertical text */}
              <AnimatePresence mode="wait">
                {!isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <p className="text-white font-bold text-lg tracking-[0.2em] uppercase [writing-mode:vertical-lr] rotate-180">
                      {image.text}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom accent bar on active */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-[#E85002]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isActive ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Active indicator dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveImage(index)}
            className="relative h-2 rounded-full overflow-hidden"
            animate={{
              width: activeImage === index ? 32 : 8,
              backgroundColor: activeImage === index ? "#E85002" : "#d1d5db",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export { HoverExpand_001 };
