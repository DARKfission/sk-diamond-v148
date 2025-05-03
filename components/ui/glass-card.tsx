"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  intensity?: "low" | "medium" | "high"
  mode?: "auto" | "light" | "dark"
}

export function GlassCard({ children, className, intensity = "medium", mode = "auto" }: GlassCardProps) {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine if we're in dark mode
  const isDarkMode = mounted
    ? mode === "dark" || (mode === "auto" && (theme === "dark" || resolvedTheme === "dark"))
    : false

  const intensityMapLight = {
    low: "bg-white/40 backdrop-blur-sm border border-white/30",
    medium: "bg-white/50 backdrop-blur-md border border-white/40",
    high: "bg-white/60 backdrop-blur-lg border border-white/50",
  }

  const intensityMapDark = {
    low: "bg-gray-900/40 backdrop-blur-sm border border-gray-700/30",
    medium: "bg-gray-900/50 backdrop-blur-md border border-gray-700/40",
    high: "bg-gray-900/60 backdrop-blur-lg border border-gray-700/50",
  }

  const intensityMap = isDarkMode ? intensityMapDark : intensityMapLight

  return <div className={cn("rounded-lg", intensityMap[intensity], className)}>{children}</div>
}
