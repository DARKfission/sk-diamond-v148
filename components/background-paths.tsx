"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { useTheme } from "next-themes"

// Line configuration
const NUM_LINES = 100
const LINE_WIDTH_MIN = 0.7
const LINE_WIDTH_MAX = 1.8
const LINE_OPACITY_MIN = 0.2
const LINE_OPACITY_MAX = 0.7
const LINE_LENGTH_MIN = 40
const LINE_LENGTH_MAX = 120
const LINE_SPEED_MIN = 1.5 // Increased minimum speed
const LINE_SPEED_MAX = 3.5 // Increased maximum speed

// Theme colors
const THEME_COLORS = {
  dark: {
    background: "transparent",
    lines: [
      "#154978", // SK Blue
      "#f78846", // SK Orange
      "#FFFFFF", // White
    ],
  },
  light: {
    background: "transparent",
    lines: [
      "#154978", // SK Blue
      "#f78846", // SK Orange
      "#333333", // Dark Gray
    ],
  },
}

type Line = {
  x: number
  y: number
  angle: number
  length: number
  width: number
  opacity: number
  speed: number
  color: string
}

export default function BackgroundPaths() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const requestRef = useRef<number | null>(null)
  const lines = useRef<Line[]>([])
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Get current theme colors
  const getThemeColors = useCallback(() => {
    return theme === "dark" ? THEME_COLORS.dark : THEME_COLORS.light
  }, [theme])

  // Initialize lines from edges
  const initializeLines = useCallback(
    (width: number, height: number) => {
      const newLines: Line[] = []
      const themeColors = getThemeColors()

      for (let i = 0; i < NUM_LINES; i++) {
        // Determine which edge to start from
        const edge = Math.floor(Math.random() * 4)
        let x, y

        switch (edge) {
          case 0: // Top edge
            x = Math.random() * width
            y = 0
            break
          case 1: // Right edge
            x = width
            y = Math.random() * height
            break
          case 2: // Bottom edge
            x = Math.random() * width
            y = height
            break
          case 3: // Left edge
            x = 0
            y = Math.random() * height
            break
          default:
            x = 0
            y = 0
        }

        // Assign one of the theme-specific colors
        const colorIndex = Math.floor(Math.random() * themeColors.lines.length)
        const color = themeColors.lines[colorIndex]

        // Create line with random properties
        newLines.push({
          x,
          y,
          angle: 0, // Will be calculated based on mouse position
          length: LINE_LENGTH_MIN + Math.random() * (LINE_LENGTH_MAX - LINE_LENGTH_MIN),
          width: LINE_WIDTH_MIN + Math.random() * (LINE_WIDTH_MAX - LINE_WIDTH_MIN),
          opacity: LINE_OPACITY_MIN + Math.random() * (LINE_OPACITY_MAX - LINE_OPACITY_MIN),
          speed: LINE_SPEED_MIN + Math.random() * (LINE_SPEED_MAX - LINE_SPEED_MIN), // Faster speed
          color,
        })
      }

      lines.current = newLines
    },
    [getThemeColors],
  )

  // Update line positions
  const updateLines = useCallback(() => {
    const { width, height } = dimensions
    const mousePosition = mousePositionRef.current

    lines.current.forEach((line) => {
      // Calculate angle to mouse - direct calculation for immediate response
      const dx = mousePosition.x - line.x
      const dy = mousePosition.y - line.y
      line.angle = Math.atan2(dy, dx)

      // Move line toward mouse with increased speed
      line.x += Math.cos(line.angle) * line.speed
      line.y += Math.sin(line.angle) * line.speed

      // Check if line has reached close to mouse position
      const distance = Math.sqrt(dx * dx + dy * dy)
      if (distance < 10) {
        // Reset line to a random edge
        const edge = Math.floor(Math.random() * 4)

        switch (edge) {
          case 0: // Top edge
            line.x = Math.random() * width
            line.y = 0
            break
          case 1: // Right edge
            line.x = width
            line.y = Math.random() * height
            break
          case 2: // Bottom edge
            line.x = Math.random() * width
            line.y = height
            break
          case 3: // Left edge
            line.x = 0
            line.y = Math.random() * height
            break
        }
      }
    })
  }, [dimensions])

  // Draw lines
  const drawLines = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      const isDark = theme === "dark"

      lines.current.forEach((line) => {
        // Calculate end point
        const endX = line.x + Math.cos(line.angle) * line.length
        const endY = line.y + Math.sin(line.angle) * line.length

        // Draw line
        ctx.beginPath()
        ctx.moveTo(line.x, line.y)
        ctx.lineTo(endX, endY)

        // Create gradient for line
        const gradient = ctx.createLinearGradient(line.x, line.y, endX, endY)

        // Use the line's color with opacity
        const baseColor = line.color

        // Adjust opacity calculation based on theme
        const startOpacity = isDark ? line.opacity * 0.3 : line.opacity * 0.4
        const endOpacity = isDark ? line.opacity : line.opacity * 1.2

        // Convert opacity to hex
        const startOpacityHex = Math.round(startOpacity * 255)
          .toString(16)
          .padStart(2, "0")
        const endOpacityHex = Math.round(Math.min(1, endOpacity) * 255)
          .toString(16)
          .padStart(2, "0")

        gradient.addColorStop(0, `${baseColor}${startOpacityHex}`)
        gradient.addColorStop(1, `${baseColor}${endOpacityHex}`)

        ctx.strokeStyle = gradient
        ctx.lineWidth = line.width
        ctx.stroke()
      })
    },
    [theme],
  )

  // Animation loop with optimized performance
  const animateCanvas = useCallback(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, dimensions.width, dimensions.height)

    // Update and draw lines
    updateLines()
    drawLines(ctx)

    requestRef.current = requestAnimationFrame(animateCanvas)
  }, [dimensions, updateLines, drawLines])

  // Handle mouse movement with immediate update
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePositionRef.current = { x: event.clientX, y: event.clientY }
    }

    // Set initial mouse position to center of screen
    mousePositionRef.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Calculate canvas dimensions and initialize lines
  useEffect(() => {
    setMounted(true)

    const handleResize = () => {
      if (canvasRef.current) {
        const width = window.innerWidth
        const height = window.innerHeight

        // Update canvas dimensions
        setDimensions({ width, height })
        canvasRef.current.width = width
        canvasRef.current.height = height

        // Reinitialize lines
        initializeLines(width, height)
      }
    }

    // Initial setup
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [initializeLines])

  // Start animation loop
  useEffect(() => {
    if (mounted && dimensions.width > 0 && dimensions.height > 0) {
      requestRef.current = requestAnimationFrame(animateCanvas)
    }

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [animateCanvas, dimensions, mounted])

  // Reinitialize lines when theme changes
  useEffect(() => {
    if (mounted && dimensions.width > 0 && dimensions.height > 0) {
      initializeLines(dimensions.width, dimensions.height)
    }
  }, [theme, dimensions.width, dimensions.height, initializeLines, mounted])

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ position: "fixed", top: 0, left: 0 }}
    />
  )
}
