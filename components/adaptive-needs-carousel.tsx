"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { useMobile } from "@/hooks/use-mobile"
import { Diamond, Sparkles, Gem, Star } from "lucide-react"

interface NeedItem {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  gradientColors: string
  patternType: "facets" | "sparkles" | "geometric" | "dots"
}

export default function AdaptiveNeedsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const progressInterval = useRef<NodeJS.Timeout | null>(null)
  const durationSeconds = 8 // How long each slide stays
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"
  const isMobile = useMobile()

  const needs: NeedItem[] = [
    {
      id: 1,
      title: "Precision Diamond Manufacturing",
      description:
        "Our state-of-the-art manufacturing processes ensure each diamond is cut with exceptional precision to maximize brilliance and value.",
      icon: <Diamond className="h-12 w-12 text-white" />,
      gradientColors: isDarkMode
        ? "from-purple-800 via-skblue-700 to-purple-800"
        : "from-purple-600 via-skblue-500 to-purple-600",
      patternType: "facets",
    },
    {
      id: 2,
      title: "Specialized Diamond Cutting",
      description:
        "We offer specialized cutting services that bring out the unique characteristics of each diamond, creating distinctive and exceptional pieces.",
      icon: <Sparkles className="h-12 w-12 text-white" />,
      gradientColors: isDarkMode
        ? "from-skblue-800 via-purple-700 to-skblue-800"
        : "from-skblue-600 via-purple-500 to-skblue-600",
      patternType: "sparkles",
    },
    {
      id: 3,
      title: "Jewelry Designer Partnerships",
      description:
        "We collaborate with jewelry designers to provide perfectly cut diamonds that bring their creative visions to life with exceptional brilliance.",
      icon: <Gem className="h-12 w-12 text-white" />,
      gradientColors: isDarkMode
        ? "from-skorange-700 via-skblue-800 to-skorange-700"
        : "from-skorange-500 via-skblue-600 to-skorange-500",
      patternType: "geometric",
    },
    {
      id: 4,
      title: "Industrial Diamond Solutions",
      description:
        "Our expertise extends to industrial applications, providing precisely cut diamonds for specialized technical and manufacturing needs.",
      icon: <Star className="h-12 w-12 text-white" />,
      gradientColors: isDarkMode
        ? "from-skblue-800 via-skorange-700 to-skblue-800"
        : "from-skblue-600 via-skorange-500 to-skblue-600",
      patternType: "dots",
    },
  ]

  useEffect(() => {
    // Start progress bar
    startProgressBar()

    // Clear interval on component unmount
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current)
      }
    }
  }, [activeIndex])

  const startProgressBar = () => {
    // Reset progress
    setProgress(0)

    // Clear any existing interval
    if (progressInterval.current) {
      clearInterval(progressInterval.current)
    }

    // Set up new interval
    const intervalTime = 50 // Update every 50ms for smooth animation
    const incrementAmount = 100 / ((durationSeconds * 1000) / intervalTime)

    progressInterval.current = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          // When we reach 100%, move to next slide and reset progress
          setActiveIndex((prevIndex) => (prevIndex + 1) % needs.length)
          return 0
        }
        return prevProgress + incrementAmount
      })
    }, intervalTime)
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index)
    // Reset progress bar when manually changing slides
    if (progressInterval.current) {
      clearInterval(progressInterval.current)
    }
    startProgressBar()
  }

  // Determine indicator size based on device
  const indicatorSize = isMobile ? "text-base" : "text-xl"

  // Determine indicator spacing based on device
  const indicatorSpacing = isMobile ? "space-x-4" : "space-x-6"

  // Function to render pattern based on type
  const renderPattern = (patternType: string) => {
    switch (patternType) {
      case "facets":
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white"
                  style={{
                    width: `${30 + Math.random() * 20}px`,
                    height: `${30 + Math.random() * 20}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    borderRadius: "2px",
                    transform: `rotate(${Math.random() * 45}deg)`,
                  }}
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 8 + Math.random() * 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: Math.random() * 5,
                  }}
                />
              ))}
            </div>
          </div>
        )
      case "sparkles":
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 15 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: `${3 + Math.random() * 5}px`,
                    height: `${3 + Math.random() * 5}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    boxShadow: "0 0 8px 2px rgba(255, 255, 255, 0.5)",
                  }}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 6 + Math.random() * 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: Math.random() * 5,
                  }}
                />
              ))}
            </div>
          </div>
        )
      case "geometric":
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 8 }).map((_, i) => {
                const size = 40 + Math.random() * 30
                const sides = Math.floor(3 + Math.random() * 3) // 3 to 5 sides
                const points = []

                // Generate polygon points
                for (let j = 0; j < sides; j++) {
                  const angle = (j / sides) * Math.PI * 2
                  const x = (Math.cos(angle) * size) / 2
                  const y = (Math.sin(angle) * size) / 2
                  points.push(`${x},${y}`)
                }

                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                      rotate: [0, 10, 0, -10, 0],
                    }}
                    transition={{
                      duration: 12 + Math.random() * 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: Math.random() * 5,
                    }}
                  >
                    <svg width={size} height={size} viewBox={`${-size / 2} ${-size / 2} ${size} ${size}`}>
                      <polygon points={points.join(" ")} fill="white" opacity="0.5" />
                    </svg>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )
      case "dots":
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0">
              {Array.from({ length: 40 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: `${2 + Math.random() * 3}px`,
                    height: `${2 + Math.random() * 3}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 8 + Math.random() * 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: Math.random() * 5,
                  }}
                />
              ))}
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl relative">
      {/* Stack all slides with absolute positioning */}
      {needs.map((need, index) => (
        <motion.div
          key={`need-${index}`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: activeIndex === index ? 1 : 0,
            zIndex: activeIndex === index ? 10 : 0,
          }}
          transition={{
            opacity: { duration: 0.8, ease: "easeInOut" },
            zIndex: { delay: activeIndex === index ? 0 : 0.8 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0">
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${need.gradientColors}`}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{ backgroundSize: "200% 200%" }}
            />

            {/* Pattern overlay */}
            {renderPattern(need.patternType)}

            {/* Radial overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30" />
          </div>

          {/* Content overlay with improved mobile responsiveness */}
          <div className="absolute inset-0 flex flex-col justify-center p-3 sm:p-6 md:p-12">
            <AnimatePresence mode="wait">
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="max-w-full md:max-w-xl mx-auto text-center"
                >
                  {/* Animated icon */}
                  <motion.div
                    className="mx-auto mb-4 md:mb-6 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    {need.icon}
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 leading-tight hero-text-shadow">
                    {need.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-2 md:mb-4 line-clamp-3 sm:line-clamp-none hero-text-shadow">
                    {need.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}

      {/* Custom symbol "𖢻" indicators */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-0 right-0 z-20">
        <div className="flex justify-center">
          <div className="flex space-x-3 sm:space-x-4 md:space-x-6 px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-full bg-black/20 backdrop-blur-sm">
            {needs.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative group"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`
                  custom-symbol 
                  ${indicatorSize}
                  transition-all duration-300
                  ${activeIndex === index ? "active" : "inactive"}
                `}
                >
                  𖢻
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
