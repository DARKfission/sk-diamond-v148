"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Home, Info, Phone, Gem, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { useTheme } from "next-themes"
import { Logo } from "./logo"
import { useMobile } from "@/hooks/use-mobile"

// Service sub-items for dropdown
const serviceItems = [
  { name: "Diamond Cutting", href: "/services/diamond-cutting" },
  { name: "Diamond Polishing", href: "/services/diamond-polishing" },
  { name: "Custom Design", href: "/services/custom-design" },
  { name: "Diamond Recutting", href: "/services/diamond-recutting" },
  { name: "Quality Assessment", href: "/services/quality-assessment" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Simplified scroll handler that only handles scroll state
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false)
  }, [pathname])

  const isDarkMode = mounted && theme === "dark"

  // Update the navItems array to use more distinct icons for Services and Special Cut
  const navItems = [
    { name: "HOME", href: "/", icon: <Home className="h-5 w-5 font-bold" /> },
    { name: "ABOUT", href: "/about", icon: <Info className="h-5 w-5 font-bold" /> },
    {
      name: "SERVICES",
      href: "/services",
      hasDropdown: true,
      items: serviceItems,
      icon: <Gem className="h-5 w-5 font-bold" />,
    },
    {
      name: "SPECIAL CUT",
      href: "/special-cut",
      icon: <Sparkles className="h-5 w-5 font-bold" />,
    },
    { name: "CONTACT", href: "/contact", icon: <Phone className="h-5 w-5 font-bold" /> },
    // Media page temporarily hidden - will be restored later
    // { name: "MEDIA", href: "/media", icon: <ImageIcon className="h-5 w-5 font-bold" /> },
  ]

  // Check if current path is a service sub-page
  const isServiceSubPage = pathname.startsWith("/services/")

  // Function to check if a nav item is active
  const isActive = (href: string) => {
    if (href === "/") return pathname === href
    if (href === "/services") return pathname === href || pathname.startsWith("/services/")
    return pathname === href
  }

  // Update the handleNavItemClick function to ensure consistent scroll behavior
  const handleNavItemClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMenuOpen(false)

    // If it's the same page or a non-hash link, scroll to top
    if (pathname === href || !href.includes("#")) {
      if (pathname === href) {
        e.preventDefault()
      }

      // Use setTimeout to ensure navigation happens first if needed
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 100)
    }
  }

  // Text color classes based on theme
  const textColor = isDarkMode ? "text-white" : "text-skblue-800"
  const textColorHover = isDarkMode ? "hover:text-skorange-400" : "hover:text-skorange-600"
  const activeTextColor = isDarkMode ? "text-skorange-400" : "text-skorange-600"
  const logoTextColor = isDarkMode ? "text-white" : "text-skblue-800"
  const logoHoverColor = isDarkMode ? "group-hover:text-skorange-400" : "group-hover:text-skorange-600"
  const dropdownTextColor = isDarkMode ? "text-white/90" : "text-skblue-800"
  const dropdownHoverBg = isDarkMode ? "hover:bg-white/10" : "hover:bg-skblue-50"
  const dropdownActiveBg = isDarkMode ? "bg-skorange-500/20" : "bg-skorange-100"
  const mobileMenuBorderColor = isDarkMode ? "border-white/10" : "border-skblue-200"

  // Header background color - more contrast with logo
  const headerBgColor = isDarkMode
    ? "bg-gray-900/90 backdrop-blur-md border-b border-white/10"
    : "bg-white/90 backdrop-blur-md border-b border-skblue-100"

  return (
    <>
      {/* Fixed controls that are always visible */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
        <Button
          variant="outline"
          size="icon"
          className={`rounded-full shadow-lg ${isDarkMode ? "bg-gray-800/90 border-gray-700 hover:bg-gray-700" : "bg-white/90 border-gray-200 hover:bg-gray-100"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {isMenuOpen ? <X className="h-6 w-6 font-bold" /> : <Menu className="h-6 w-6 font-bold" />}
        </Button>

        <div className="shadow-lg rounded-full">
          <ThemeToggle />
        </div>
      </div>

      {/* Main header that's only visible at the top of the page */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
          isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        } ${headerBgColor}`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-center">
            {/* Logo with blurry 3D effect - centered for all views */}
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center space-x-5 group" // Increased spacing between logo and text
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-skorange-500/30 dark:bg-skorange-400/30 blur-xl rounded-full transform scale-110"></div>
                  <Logo size="lg" />
                </div>
                <span
                  className={`text-2xl tracking-tight font-bold ${logoTextColor} ${logoHoverColor} transition-colors duration-300 font-cinzel`}
                >
                  S K Diamond
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu with opening animation - adjusted to not cover the entire screen */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-skblue-600/10 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="fixed top-16 right-4 z-40 w-64 max-w-[80%] p-2"
              initial={{ y: -20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.95 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 500,
                duration: 0.4,
              }}
            >
              <GlassCard
                intensity="high"
                className="p-4 bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-700 shadow-xl"
              >
                <nav className="grid gap-3">
                  {navItems.map((item) =>
                    item.hasDropdown ? (
                      <div key={item.name} className="space-y-2">
                        <Link
                          href={item.href}
                          className={`text-base font-medium py-2 flex items-center justify-between transition-colors ${
                            isActive(item.href) && !isServiceSubPage
                              ? activeTextColor
                              : `${textColor} ${textColorHover}`
                          }`}
                          onClick={(e) => handleNavItemClick(e, item.href)}
                        >
                          <span className="flex items-center">
                            {item.icon}
                            <span className="ml-1.5">{item.name}</span>
                          </span>
                          <ChevronDown className="h-4 w-4" />
                        </Link>
                        <div className={`pl-4 space-y-2 border-l-2 ${mobileMenuBorderColor}`}>
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`text-sm font-medium py-1 block transition-colors ${
                                pathname === subItem.href
                                  ? activeTextColor
                                  : `${textColor} opacity-80 ${textColorHover}`
                              }`}
                              onClick={(e) => handleNavItemClick(e, subItem.href)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`text-base font-medium py-2 transition-colors flex items-center ${
                          isActive(item.href) ? activeTextColor : `${textColor} ${textColorHover}`
                        }`}
                        onClick={(e) => handleNavItemClick(e, item.href)}
                      >
                        {item.icon}
                        <span className="ml-1.5">{item.name}</span>
                      </Link>
                    ),
                  )}
                </nav>
              </GlassCard>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
