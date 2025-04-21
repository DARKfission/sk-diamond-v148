"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const progressInterval = useRef<NodeJS.Timeout | null>(null)

  const testimonials = [
    {
      quote:
        "SK Diamond's craftsmanship is unparalleled. Their special cut diamonds have a brilliance that truly stands out from the rest.",
      author: "Sarah Johnson",
      title: "Jewelry Designer",
      avatar: "/placeholder.svg?height=200&width=200",
    },
    {
      quote:
        "Working with SK Diamond has been a pleasure. Their attention to detail and commitment to quality is evident in every piece they produce.",
      author: "Michael Chen",
      title: "Luxury Retailer",
      avatar: "/placeholder.svg?height=200&width=200",
    },
    {
      quote:
        "The custom diamond cutting service from SK Diamond exceeded my expectations. They transformed my heirloom diamond into a stunning modern piece.",
      author: "Emily Rodriguez",
      title: "Private Client",
      avatar: "/placeholder.svg?height=200&width=200",
    },
  ]

  useEffect(() => {
    startProgressBar()

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current)
      }
    }
  }, [currentIndex])

  const startProgressBar = () => {
    setProgress(0)

    if (progressInterval.current) {
      clearInterval(progressInterval.current)
    }

    const intervalTime = 50 // Update every 50ms for smooth animation
    const testimonialDuration = 8000 // 8 seconds per testimonial
    const incrementAmount = 100 / (testimonialDuration / intervalTime)

    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + incrementAmount
        if (newProgress >= 100) {
          nextTestimonial()
          return 0
        }
        return newProgress
      })
    }, intervalTime)
  }

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setProgress(0)

    if (progressInterval.current) {
      clearInterval(progressInterval.current)
      startProgressBar()
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Quote className="h-12 w-12 text-skblue-600 dark:text-skblue-400 mb-4" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-skblue-600 dark:text-skblue-400">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Hear from our satisfied clients about their experience working with SK Diamond
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            <div className="relative h-1 bg-gray-200 dark:bg-gray-700 rounded-full mb-4">
              <motion.div
                className="absolute top-0 left-0 h-full bg-skorange-500"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <GlassCard className="p-8 md:p-12">
                  <blockquote className="text-xl md:text-2xl italic mb-8 text-skblue-600 dark:text-skblue-400">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <motion.div
                      className="relative h-16 w-16 rounded-full overflow-hidden mr-4"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <Image
                        src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[currentIndex].author}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div>
                      <p className="font-bold">{testimonials[currentIndex].author}</p>
                      <p className="text-muted-foreground">{testimonials[currentIndex].title}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-skblue-600 text-skblue-600 hover:bg-skblue-600 hover:text-white dark:border-skblue-400 dark:text-skblue-400"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full p-0 min-w-[12px] ${
                  currentIndex === index ? "bg-skorange-500" : "bg-gray-300 dark:bg-gray-700 hover:bg-skorange-500/70"
                }`}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-skblue-600 text-skblue-600 hover:bg-skblue-600 hover:text-white dark:border-skblue-400 dark:text-skblue-400"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
