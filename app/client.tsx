"use client"

import type React from "react"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import BackgroundPaths from "@/components/background-paths"
import { montserrat, playfair, cinzel } from "./fonts"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  // Scroll to top on route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])

  return (
    <html lang="en" suppressHydrationWarning scroll-behavior="smooth">
      <head>
        <style jsx global>{`
          .font-cinzel {
            font-family: var(--font-cinzel);
          }
        `}</style>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased theme-transition",
          montserrat.variable,
          playfair.variable,
          cinzel.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          <BackgroundPaths />
          <div className="relative flex min-h-screen flex-col z-10">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
