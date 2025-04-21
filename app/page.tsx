"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroImageTiles from "@/components/hero-image-tiles"
import FeatureSection from "@/components/feature-section"
import AdaptiveNeedsCarousel from "@/components/adaptive-needs-carousel"
import SpecialCutIcon from "@/components/special-cut-icon"
import RotatingDiamondTiles from "@/components/rotating-diamond-tiles"
import { GlassCard } from "@/components/glass-card"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative">
      <HeroImageTiles height="80vh" />

      <section className="py-4 md:py-8 bg-white/90 dark:bg-gray-950/90 relative overflow-hidden" id="excellence">
        {/* Further reduced padding to remove extra space */}
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-8">
            <SpecialCutIcon size="lg" className="mb-4 text-skblue-600 dark:text-skblue-400" animate={true} />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 shimmer-text">
              Excellence in Diamond Manufacturing
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              SK Diamond brings decades of expertise to every piece we craft. Our commitment to quality and precision
              ensures that each diamond meets the highest standards of brilliance and beauty.
            </p>
          </div>

          <FeatureSection />

          <div className="mt-12 text-center">
            <Link href="/services" passHref>
              <Button
                variant="outline"
                size="responsive"
                className="group border-skblue-600 text-skblue-600 hover:bg-skblue-600 hover:text-white dark:border-skblue-400 dark:text-skblue-400 dark:hover:bg-skblue-600 transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-gradient-to-r from-purple-50/90 to-skblue-50/90 dark:from-purple-900/90 dark:to-skblue-900/90 relative">
        {/* Reduced padding to remove extra space */}
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-6">
            <SpecialCutIcon size="lg" className="mb-4 text-purple-600 dark:text-purple-400" animate={true} />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Adapting to Your Needs</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
              At SK Diamond, we understand that each customer has unique requirements. Our expertise adapts to meet a
              diverse range of diamond manufacturing needs.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <AdaptiveNeedsCarousel />
          </div>
        </div>
      </section>

      {/* Replaced image section with rotating diamond tiles */}
      <section className="py-10 md:py-16 bg-white/90 dark:bg-gray-950/90 relative" id="special-cuts">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-8">
            <SpecialCutIcon size="lg" className="mb-4 text-skorange-500" animate={true} />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-skblue-600 dark:text-skblue-400">
              Signature Special Cuts
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
              Our signature cuts are designed to maximize brilliance and fire, creating diamonds that stand out with
              exceptional sparkle and character.
            </p>
          </div>

          <RotatingDiamondTiles />

          <div className="mt-8 text-center">
            <Link href="/special-cut" passHref>
              <Button
                size="responsive"
                className="group bg-skorange-500 hover:bg-skorange-600 text-white transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  View Special Cuts
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 relative" id="contact">
        {/* Improved background for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-skblue-600/50 to-skorange-500/50 backdrop-blur-md"></div>

        {/* Content with improved text visibility */}
        <div className="container px-4 md:px-6 relative z-10">
          <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl relative">
            <GlassCard className="border border-white/30 shadow-xl p-8 md:p-12">
              <div className="flex flex-col items-center justify-center text-center">
                <SpecialCutIcon size="lg" className="mb-6 text-white" animate={true} />
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white drop-shadow-md">
                  Ready to Experience Excellence?
                </h2>
                <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-md font-medium">
                  Contact SK Diamond today to learn more about our services and how we can help you create the perfect
                  diamond piece.
                </p>
                <Link
                  href="/contact"
                  className="inline-block"
                  onClick={(e) => {
                    if (window.location.pathname === "/contact") {
                      e.preventDefault()
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  }}
                >
                  <Button
                    size="lg"
                    className="group bg-white text-skblue-600 hover:bg-white/90 transition-all duration-300 font-semibold px-8"
                  >
                    <span className="flex items-center justify-center">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </main>
  )
}
