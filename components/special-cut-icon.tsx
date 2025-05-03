"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Diamond } from "lucide-react"

interface SpecialCutIconProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  color?: "primary" | "secondary" | "white" | "current"
  className?: string
  animate?: boolean
  pulseEffect?: boolean
  floatEffect?: boolean
  useDefaultDiamond?: boolean
}

export default function SpecialCutIcon({
  size = "md",
  color = "primary",
  className = "",
  animate = false,
  pulseEffect = true,
  floatEffect = false,
  useDefaultDiamond = false,
}: SpecialCutIconProps) {
  const sizeMap = {
    xs: "h-3 w-3",
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-full w-full", // Uses full container size
  }

  const colorMap = {
    primary: "text-skblue-600 dark:text-skblue-400",
    secondary: "text-skorange-500 dark:text-skorange-400",
    white: "text-white",
    current: "text-current",
  }

  // If using default diamond icon instead of custom image
  if (useDefaultDiamond) {
    // If not animated, just return the static icon
    if (!animate) {
      return (
        <div className={cn(sizeMap[size], colorMap[color], className, "diamond-shape")}>
          <Diamond className="w-full h-full" />
        </div>
      )
    }

    // Combine animations based on props
    const animations: any = {
      animate: {},
    }

    if (pulseEffect) {
      animations.animate = {
        ...animations.animate,
        scale: [1, 1.1, 1],
      }
    }

    if (floatEffect) {
      animations.animate = {
        ...animations.animate,
        y: [0, -5, 0],
      }
    }

    return (
      <motion.div
        className={cn(sizeMap[size], colorMap[color], className, "diamond-shape")}
        initial={{ scale: 1 }}
        animate={animations.animate}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Diamond className="w-full h-full" />
      </motion.div>
    )
  }

  // If not animated, just return the static icon
  if (!animate) {
    return (
      <div className={cn(sizeMap[size], className, "relative")}>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VsudsU0JAhppHn172QmmX6SnLAW8Uv.png"
          alt="Special Cut Diamond"
          fill
          className="object-contain"
        />
      </div>
    )
  }

  // Combine animations based on props
  const animations: any = {
    animate: {},
  }

  if (pulseEffect) {
    animations.animate = {
      ...animations.animate,
      scale: [1, 1.1, 1],
    }
  }

  if (floatEffect) {
    animations.animate = {
      ...animations.animate,
      y: [0, -5, 0],
    }
  }

  return (
    <motion.div
      className={cn(sizeMap[size], className, "relative")}
      initial={{ scale: 1 }}
      animate={animations.animate}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VsudsU0JAhppHn172QmmX6SnLAW8Uv.png"
        alt="Special Cut Diamond"
        fill
        className="object-contain"
      />
    </motion.div>
  )
}
