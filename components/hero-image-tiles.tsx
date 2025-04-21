"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Diamond, Sparkles, Gem } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useMobile } from "@/hooks/use-mobile"

interface HeroTile {
  title: string
  description: string
  icon: React.ReactNode
  gradientColors: string
  animationType: "gentle-particles" | "soft-facets" | "smooth-lines"
  buttons?: {
    primary?: {
      text: string
      href: string
      icon?: React.ReactNode
      className?: string
    }
    secondary?: {
      text: string
      href: string
      icon?: React.ReactNode
      className?: string
    }
  }
}

interface HeroImageTilesProps {
  height?: string
  tiles?: HeroTile[]
  autoRotate?: boolean
  rotationInterval?: number
  showIndicators?: boolean
  indicatorPosition?: "bottom" | "top"
  indicatorStyle?: "default" | "minimal"
}

export default function HeroImageTiles({
  height = "80vh",
  tiles,
  autoRotate = true,
  rotationInterval = 6000,
  showIndicators = true,
  indicatorPosition = "bottom",
  indicatorStyle = "default",
}: HeroImageTilesProps) {
  const [currentTile, setCurrentTile] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"
  const isMobile = useMobile()

  // Default tiles if none provided
  const defaultTiles: HeroTile[] = [
    {
      title: "Excellence in Diamond Manufacturing",
      description: "Crafting brilliance with precision and expertise",
      icon: <Diamond className="h-16 w-16 text-white" />,
      gradientColors: isDarkMode
        ? "from-skblue-800 via-purple-700 to-skblue-800"
        : "from-skblue-700 via-purple-600 to-skblue-700",
      animationType: "gentle-particles",
      buttons: {
        primary: {
          text: "Our Services",
          href: "/services",
          icon: <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />,
          className: "bg-white text-skblue-600 hover:bg-white/90",
        },
        secondary: {
          text: "Contact Us",
          href: "/contact",
          className: "bg-transparent border-white text-white hover:bg-white/10",
        },
      },
    },
    {
      title: "Signature Special Cuts",
      description: "Unique designs for maximum brilliance",
      icon: <Sparkles className="h-16 w-16 text-white" />,
      gradientColors: isDarkMode
        ? "from-purple-700 via-skblue-800 to-purple-700"
        : "from-purple-600 via-skblue-700 to-purple-600",
      animationType: "soft-facets",
      buttons: {
        primary: {
          text: "Special Cuts",
          href: "/special-cut",
          icon: <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />,
          className: "bg-white text-skblue-600 hover:bg-white/90",
        },
        secondary: {
          text: "Contact Us",
          href: "/contact",
          className: "bg-transparent border-white text-white hover:bg-white/10",
        },
      },
    },
    {
      title: "Custom Diamond Solutions",
      description: "Tailored manufacturing for your needs",
      icon: <Gem className="h-16 w-16 text-white" />,
      gradientColors: isDarkMode
        ? "from-purple-800 via-skorange-700 to-purple-800"
        : "from-purple-700 via-skorange-600 to-purple-700",
      animationType: "smooth-lines",
      buttons: {
        primary: {
          text: "Our Services",
          href: "/services",
          icon: <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />,
          className: "bg-white text-skblue-600 hover:bg-white/90",
        },
        secondary: {
          text: "Contact Us",
          href: "/contact",
          className: "bg-transparent border-white text-white hover:bg-white/10",
        },
      },
    },
  ]

  // Use provided tiles or default ones
  const heroTiles = tiles || defaultTiles

  useEffect(() => {
    setIsLoaded(true)

    // Start auto-rotation if enabled
    if (autoRotate) {
      startAutoRotation()
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
      }
    }
  }, [autoRotate])

  useEffect(() => {
    // Reset and restart auto-rotation when tile changes or theme changes
    if (autoRotate && progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current)
      startAutoRotation()
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
      }
    }
  }, [currentTile, theme, autoRotate, rotationInterval])

  const startAutoRotation = () => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current)
    }

    // Auto-rotate based on provided interval
    progressIntervalRef.current = setInterval(() => {
      setCurrentTile((prevTile) => (prevTile + 1) % heroTiles.length)
    }, rotationInterval)
  }

  const goToTile = (index: number) => {
    setCurrentTile(index)

    // Reset auto-rotation timer if auto-rotate is enabled
    if (autoRotate) {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
      }
      startAutoRotation()
    }
  }

  // Determine indicator size based on device
  const indicatorSize = isMobile ? "text-base" : "text-xl"

  // Determine indicator spacing based on device
  const indicatorSpacing = isMobile ? "space-x-4" : "space-x-6"

  // Function to render animation based on type
  const renderAnimation = (animationType: string, index: number) => {
    switch (animationType) {
      case "gentle-particles":
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-15">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    boxShadow: "0 0 5px 1px rgba(255, 255, 255, 0.3)",
                  }}
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 10 + Math.random() * 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: Math.random() * 5,
                  }}
                />
              ))}
            </div>
          </div>
        )
      case "soft-facets":
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 10 }).map((_, i) => {
                const size = 30 + Math.random() * 20
                return (
                  <motion.div
                    key={i}
                    className="absolute bg-white"
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      transform: `rotate(${Math.random() * 45}deg)`,
                      borderRadius: "2px",
                    }}
                    animate={{
                      opacity: [0.1, 0.3, 0.1],
                      rotate: [`${Math.random() * 45}deg`, `${Math.random() * 45 + 20}deg`, `${Math.random() * 45}deg`],
                    }}
                    transition={{
                      duration: 15 + Math.random() * 10,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: Math.random() * 5,
                    }}
                  />
                )
              })}
            </div>
          </div>
        )
      case "smooth-lines":
        return (
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-[1px] bg-white/10 w-full left-0"
                style={{ top: `${20 + i * 20}%` }}
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 20 + i * 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            ))}
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={`reverse-${i}`}
                className="absolute h-[1px] bg-white/8 w-full left-0"
                style={{ top: `${10 + i * 20}%` }}
                animate={{
                  x: ["100%", "-100%"],
                }}
                transition={{
                  duration: 25 + i * 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section className="relative w-full overflow-hidden" id="hero" style={{ height: height, minHeight: "500px" }}>
      {/* Responsive container for the tiles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-2 sm:px-4 md:px-6 h-full flex items-center">
          <div className="w-full max-w-6xl mx-auto aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl relative">
            {/* Stack all tiles with absolute positioning */}
            {heroTiles.map((tile, index) => (
              <motion.div
                key={`tile-${index}`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentTile === index ? 1 : 0,
                  zIndex: currentTile === index ? 10 : 0,
                }}
                transition={{
                  opacity: { duration: 0.8, ease: "easeInOut" },
                  zIndex: { delay: currentTile === index ? 0 : 0.8 },
                }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${tile.gradientColors}`}
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

                  {/* Animation overlay */}
                  {renderAnimation(tile.animationType, index)}

                  {/* Radial overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30" />
                </div>

                {/* Content overlay with improved mobile responsiveness */}
                <div className="absolute inset-0 flex flex-col justify-center p-3 sm:p-6 md:p-12">
                  <AnimatePresence mode="wait">
                    {currentTile === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="max-w-full md:max-w-xl"
                      >
                        {/* Animated icon */}
                        <motion.div
                          className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4 md:mb-6"
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, 0, -5, 0],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                          style={{ zIndex: 1 }}
                        >
                          {tile.icon}
                        </motion.div>

                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-1 md:mb-4 leading-tight hero-text-shadow">
                          {tile.title}
                        </h1>
                        <p className="text-sm sm:text-base md:text-xl text-white/90 mb-3 md:mb-6 line-clamp-2 sm:line-clamp-none hero-text-shadow">
                          {tile.description}
                        </p>

                        {(tile.buttons?.primary || tile.buttons?.secondary) && (
                          <div
                            className="flex flex-row flex-wrap gap-2 md:gap-4 mt-2 sm:mt-4 relative"
                            style={{ zIndex: 2 }}
                          >
                            {tile.buttons?.primary && (
                              <div className="flex-1 min-w-[120px] max-w-[200px]">
                                <Link href={tile.buttons.primary.href} passHref>
                                  <Button
                                    size="sm"
                                    className={`w-full h-8 sm:h-10 group transition-all duration-300 text-xs sm:text-sm ${tile.buttons.primary.className || "bg-white text-skblue-600 hover:bg-white/90"}`}
                                  >
                                    <span className="flex items-center justify-center whitespace-nowrap">
                                      {tile.buttons.primary.text}
                                      {tile.buttons.primary.icon && (
                                        <span className="inline-flex ml-1 sm:ml-2">{tile.buttons.primary.icon}</span>
                                      )}
                                    </span>
                                  </Button>
                                </Link>
                              </div>
                            )}
                            {tile.buttons?.secondary && (
                              <div className="flex-1 min-w-[120px] max-w-[200px]">
                                <Link href={tile.buttons.secondary.href} passHref>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className={`w-full h-8 sm:h-10 group transition-all duration-300 text-xs sm:text-sm ${tile.buttons.secondary.className || "bg-transparent border-white text-white hover:bg-white/10"}`}
                                  >
                                    <span className="flex items-center justify-center whitespace-nowrap">
                                      {tile.buttons.secondary.text}
                                    </span>
                                  </Button>
                                </Link>
                              </div>
                            )}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}

            {/* Custom symbol "𖢻" indicators */}
            {showIndicators && (
              <div
                className={`absolute ${indicatorPosition === "bottom" ? "bottom-2 sm:bottom-4 md:bottom-6" : "top-2 sm:top-4 md:top-6"} left-0 right-0 z-20`}
              >
                <div className="flex justify-center">
                  <div
                    className={`flex ${indicatorSpacing} px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-full ${indicatorStyle === "default" ? "bg-black/20 backdrop-blur-sm" : ""}`}
                  >
                    {heroTiles.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToTile(index)}
                        className="relative group"
                        aria-label={`Go to slide ${index + 1}`}
                      >
                        <div
                          className={`
                          custom-symbol 
                          ${indicatorSize}
                          transition-all duration-300
                          ${currentTile === index ? "active" : "inactive"}
                        `}
                        >
                          𖢻
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
