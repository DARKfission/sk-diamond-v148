"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Diamond, Gem, Sparkles, BadgeCheck, Zap, ShieldCheck } from "lucide-react"

export default function FeatureSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const features = [
    {
      icon: <Diamond className="h-10 w-10" />,
      title: "Expert Cutting",
      description: "Precision diamond cutting by master craftsmen with decades of experience.",
    },
    {
      icon: <Gem className="h-10 w-10" />,
      title: "Premium Polishing",
      description: "Meticulous polishing techniques that bring out each diamond's natural brilliance.",
    },
    {
      icon: <Sparkles className="h-10 w-10" />,
      title: "Special Cuts",
      description: "Signature diamond cuts designed to maximize fire and brilliance.",
    },
    {
      icon: <BadgeCheck className="h-10 w-10" />,
      title: "Quality Assurance",
      description: "Rigorous quality control at every stage of the manufacturing process.",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Custom Solutions",
      description: "Tailored diamond manufacturing services to meet your specific needs.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      title: "Ethical Sourcing",
      description: "Commitment to responsible and sustainable diamond sourcing practices.",
    },
  ]

  return (
    <div className="relative">
      <motion.div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.1,
                },
              },
            }}
            className="glow-box feature-tile"
            data-index={index}
          >
            <span></span>
            <div className="glow-content">
              <div className="glow-icon-wrapper">{feature.icon}</div>
              <h3 className="glow-title">{feature.title}</h3>
              <p className="glow-description">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
