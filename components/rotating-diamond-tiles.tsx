"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Diamond, Sparkles, Gem, Star, Zap, Award } from "lucide-react"
import { useTheme } from "next-themes"

const diamondCuts = [
  {
    name: "SK Brilliant",
    description: "Our signature round brilliant cut with 58 precisely calculated facets for maximum light return.",
    icon: <Diamond className="h-8 w-8" />,
  },
  {
    name: "SK Princess",
    description: "Modern take on the classic princess cut with enhanced brilliance and square shape.",
    icon: <Sparkles className="h-8 w-8" />,
  },
  {
    name: "SK Oval",
    description: "Elongated diamond with our proprietary faceting pattern that eliminates the 'bow-tie' effect.",
    icon: <Gem className="h-8 w-8" />,
  },
  {
    name: "SK Cushion",
    description: "Soft pillow shape with unique faceting for a distinctive pattern of light and dark.",
    icon: <Star className="h-8 w-8" />,
  },
  {
    name: "SK Emerald",
    description: "Enhanced step-cut design with precisely calculated facets for improved brilliance.",
    icon: <Zap className="h-8 w-8" />,
  },
  {
    name: "SK Pear",
    description: "Teardrop shape with exceptional sparkle and perfect symmetry.",
    icon: <Award className="h-8 w-8" />,
  },
]

export default function RotatingDiamondTiles() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {diamondCuts.map((cut, index) => (
          <motion.div
            key={cut.name}
            className={`relative rounded-lg p-6 cursor-pointer transition-all duration-300 overflow-hidden ${
              hoveredIndex === index
                ? isDarkMode
                  ? "bg-gradient-to-br from-purple-700 to-skblue-700 shadow-lg" // Keep dark mode gradient
                  : "bg-gradient-to-br from-teal-500 to-emerald-400 shadow-lg" // New teal-green gradient for light mode
                : isDarkMode
                  ? "bg-gray-800/50"
                  : "bg-gray-50/80" // Slightly darker background when not hovered for better contrast
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative z-10">
              <motion.div
                className={`mb-4 ${
                  hoveredIndex === index ? "text-white" : isDarkMode ? "text-white" : "text-teal-600" // New icon color in light mode
                }`}
                animate={
                  hoveredIndex === index
                    ? {
                        scale: [1, 1.05, 1],
                        transition: {
                          duration: 1.2,
                          ease: "easeInOut",
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                        },
                      }
                    : {}
                }
              >
                {cut.icon}
              </motion.div>
              <h3
                className={`text-lg font-bold mb-2 ${
                  hoveredIndex === index ? "text-white" : isDarkMode ? "text-white" : "text-teal-800" // New title color in light mode
                }`}
              >
                {cut.name}
              </h3>
              <p
                className={`text-sm text-justify ${
                  hoveredIndex === index ? "text-white/90" : isDarkMode ? "text-gray-300" : "text-gray-700" // Darker text for better contrast in light mode
                }`}
              >
                {cut.description}
              </p>
            </div>

            {/* Enhanced hover effects - only show when hovered */}
            {hoveredIndex === index && (
              <>
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 opacity-20"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {cut.icon}
                </motion.div>

                <motion.div
                  className="absolute bottom-0 left-0 w-32 h-32 opacity-10"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {cut.icon}
                </motion.div>

                {/* Add floating icon effect */}
                <motion.div
                  className="absolute top-1/4 right-1/4 w-16 h-16 opacity-5"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0.8, 1, 0.8],
                    opacity: 0.05,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                >
                  {cut.icon}
                </motion.div>

                {/* Add sparkle effect on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 ${
                    !isDarkMode && "mix-blend-overlay" // Adjust blend mode for better effect in light mode
                  }`}
                  initial={{ opacity: 0, top: "100%", left: "100%" }}
                  animate={{
                    opacity: [0, 0.1, 0],
                    top: ["100%", "-20%"],
                    left: ["100%", "-20%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                />
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
