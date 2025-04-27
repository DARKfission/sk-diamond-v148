import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import PageHeader from "@/components/page-header"
import SpecialCutIcon from "@/components/special-cut-icon"

// Apply justify text alignment to body text
export default function ServicesPage() {
  const services = [
    {
      title: "Diamond Cutting",
      description:
        "Our expert cutters transform rough diamonds into brilliant gems, maximizing their natural beauty and value. Using state-of-the-art technology and traditional techniques, we create cuts that enhance each diamond's unique characteristics.",
      image: "https://images.unsplash.com/photo-1615655114865-4cc35d41b08f?q=80&w=2070&auto=format&fit=crop",
      alt: "Laser diamond cutting process",
      href: "/services/diamond-cutting",
      reverse: false,
    },
    {
      title: "Diamond Polishing",
      description:
        "Our polishing process brings out the true brilliance of each diamond. Our skilled artisans use precise techniques to create a flawless finish that maximizes light reflection and sparkle, resulting in diamonds with exceptional fire and brilliance.",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2071&auto=format&fit=crop",
      alt: "Diamond manufacturing and polishing process",
      href: "/services/diamond-polishing",
      reverse: true,
    },
    {
      title: "Custom Design",
      description:
        "We work closely with clients to create custom diamond cuts and designs that meet their specific requirements. Whether you're looking for a unique engagement ring or a special piece for your collection, our team can bring your vision to life.",
      image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=2070&auto=format&fit=crop",
      alt: "Various diamond cutting shapes",
      href: "/services/custom-design",
      reverse: false,
    },
    {
      title: "Diamond Recutting",
      description:
        "We can transform older or damaged diamonds by recutting them to modern standards. This process can significantly improve a diamond's appearance and value while preserving as much of the original material as possible.",
      image: "https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=2070&auto=format&fit=crop",
      alt: "Diamond splitting process",
      href: "/services/diamond-recutting",
      reverse: true,
    },
    {
      title: "Quality Assessment",
      description:
        "Our comprehensive quality assessment service evaluates diamonds based on the 4Cs (cut, color, clarity, and carat) and other important factors. We provide detailed reports that help clients understand the true value and quality of their diamonds.",
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2069&auto=format&fit=crop",
      alt: "Diamond under microscope inspection",
      href: "/services/quality-assessment",
      reverse: false,
    },
  ]

  return (
    <main className="flex flex-col min-h-screen relative">
      <PageHeader title="Our Services" description="Comprehensive diamond manufacturing solutions">
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <Button
                variant="outline"
                size="sm"
                className="border-skblue-600 text-skblue-600 hover:bg-skblue-600 hover:text-white dark:border-skblue-400 dark:text-skblue-400 dark:hover:bg-skblue-600"
              >
                {service.title}
              </Button>
            </Link>
          ))}
        </div>
      </PageHeader>

      {services.map((service, index) => (
        <section
          key={index}
          className={`py-16 md:py-24 ${index % 2 === 0 ? "bg-white/20 dark:bg-gray-950/20" : "bg-gray-50/20 dark:bg-gray-900/20"}`}
        >
          <div className="container px-4 md:px-6">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${service.reverse ? "md:flex-row-reverse" : ""}`}
            >
              <div className={`order-2 ${service.reverse ? "md:order-1" : "md:order-2"}`}>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image src={service.image || "/placeholder.svg"} alt={service.alt} fill className="object-cover" />
                </div>
              </div>
              <div className={`order-1 ${service.reverse ? "md:order-2" : "md:order-1"}`}>
                <GlassCard className="p-6">
                  <SpecialCutIcon
                    size="lg"
                    color={index % 2 === 0 ? "primary" : "secondary"}
                    animate={true}
                    className="mb-4"
                  />
                  <h2 className="text-3xl font-bold tracking-tight mb-6">{service.title}</h2>
                  <p className="text-muted-foreground mb-6 text-justify">{service.description}</p>
                  <Link href={service.href}>
                    <Button
                      variant="outline"
                      className="group border-skblue-600 text-skblue-600 hover:bg-skblue-600 hover:text-white dark:border-skblue-400 dark:text-skblue-400 dark:hover:bg-skblue-600"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 flex items-center">
              <SpecialCutIcon size="lg" className="mr-2 text-skorange-500" animate={true} />
              Ready to Work With Us?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-center">
              Contact SK Diamond today to discuss your diamond manufacturing needs and how our services can help you
              achieve your goals.
            </p>
            <Link href="/contact" passHref>
              <Button size="lg" className="group bg-skorange-500 hover:bg-skorange-600 text-white">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
