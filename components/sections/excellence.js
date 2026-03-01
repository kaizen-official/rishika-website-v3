"use client";

import { TagCloud } from "@/components/ui/interactive-icon-cloud"
import { motion } from "motion/react"
import {
  IconBuilding,
  IconHome,
  IconLeaf,
  IconShieldCheck,
  IconBulb,
  IconDroplet,
  IconSolarPanel,
  IconWall,
  IconRuler,
  IconPaint,
  IconLock,
  IconFlame
} from '@tabler/icons-react'

const expertise = [
  { name: "RCC Structure", icon: IconBuilding, color: "#E85002", description: "Earthquake-resistant" },
  { name: "Vastu Design", icon: IconHome, color: "#A07558", description: "Vedic architecture" },
  { name: "Green Building", icon: IconLeaf, color: "#22C55E", description: "Eco-certified" },
  { name: "RERA Compliant", icon: IconShieldCheck, color: "#3B82F6", description: "Fully approved" },
  { name: "Smart Homes", icon: IconBulb, color: "#F59E0B", description: "IoT-enabled" },
  { name: "Water Mgmt", icon: IconDroplet, color: "#06B6D4", description: "Rainwater harvesting" },
  { name: "Solar Power", icon: IconSolarPanel, color: "#EF4444", description: "Rooftop panels" },
  { name: "Premium Walls", icon: IconWall, color: "#8B5CF6", description: "AAC block technology" },
  { name: "Precision Build", icon: IconRuler, color: "#333333", description: "Engineered accuracy" },
  { name: "Designer Finish", icon: IconPaint, color: "#EC4899", description: "Premium interiors" },
  { name: "Smart Security", icon: IconLock, color: "#1D4ED8", description: "AI surveillance" },
  { name: "Fire Safety", icon: IconFlame, color: "#DC2626", description: "Full compliance" },
]

const realEstateTags = [
  "Luxury Villas", "Premium Apartments", "Gated Community",
  "Vastu Compliant", "RERA Approved", "Green Building",
  "Swimming Pool", "Clubhouse", "Landscape Gardens",
  "24/7 Security", "Power Backup", "Covered Parking",
  "Children's Play Area", "Gymnasium", "Jogging Track",
  "Smart Homes", "Penthouse", "Duplex",
  "Township Living", "Rooftop Terrace", "Rainwater Harvesting",
  "Solar Powered", "Italian Marble", "Modular Kitchen",
  "Home Automation", "Concierge Service", "Fire Safety",
  "Earthquake Resistant", "Designer Lobby", "Infinity Pool",
]

export function ConstructionExcellence() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built with <span className="text-[#E85002]">Excellence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We integrate world-class construction standards, smart technologies, and sustainable practices into every project we deliver.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Expertise Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {expertise.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-2 cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${item.color}15` }}>
                      <Icon
                        size={28}
                        style={{ color: item.color }}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <p className="text-sm font-semibold text-gray-800 text-center">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500 text-center">
                      {item.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Side - 3D Tag Cloud */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-xl aspect-square">
              {/* Glow effect behind cloud */}
              <div className="absolute inset-0 bg-[#E85002]/10 rounded-full blur-3xl"></div>

              <div className="relative">
                <TagCloud tags={realEstateTags} />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
