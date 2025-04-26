// app/services/[service]/page.tsx

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { GlassCard } from "@/components/ui/glass-card"
import PageHeader from "@/components/page-header"
import SpecialCutIcon from "@/components/special-cut-icon"

type Params = { service: string }

const serviceData = {
  // ... your serviceData as is ...
  // (no changes needed in the serviceData itself)
  "diamond-cutting": { /* ... */ },
  "diamond-polishing": { /* ... */ },
  "custom-design": { /* ... */ },
  "diamond-recutting": { /* ... */ },
  "quality-assessment": { /* ... */ },
}

export function generateStaticParams() {
  return Object.keys(serviceData).map((service) => ({
    service,
  }))
}

export function generateMetadata({ params }: { params: Params }) {
  const service = serviceData[params.service as keyof typeof serviceData]

  if (!service) {
    return {
      title: "Service Not Found | SK Diamond",
      description: "The requested service could not be found.",
    }
  }

  return {
    title: `${service.title} | SK Diamond Services`,
    description: service.description,
  }
}

export default function ServicePage({ params }: { params: Params }) {
  const service = serviceData[params.service as keyof typeof serviceData]

  if (!service) {
    notFound()
  }

  const allServices = Object.keys(serviceData).map((key) => ({
    id: key,
    title: serviceData[key as keyof typeof serviceData].title,
  }))

  return (
    <main className="flex flex-col min-h-screen relative">
      <PageHeader title={service.title} description={service.description}>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {allServices.map((s) => (
            <Link key={s.id} href={`/services/${s.id}`}>
              <Button
                variant={params.service === s.id ? "default" : "outline"}
                size="sm"
                className={
                  params.service === s.id
                    ? "bg-skblue-600 hover:bg-skblue-700 text-white"
                    : "border-skblue-600 text-skblue-600 hover:bg-skblue-600 hover:text-white dark:border-skblue-400 dark:text-skblue-400 dark:hover:bg-skblue-600"
                }
              >
                {s.title}
              </Button>
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/services">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1 border-skblue-600 text-skblue-600 hover:bg-skblue-600 hover:text-white dark:border-skblue-400 dark:text-skblue-400 dark:hover:bg-skblue-600"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Button>
          </Link>
        </div>
      </PageHeader>

      {service.content.map((section, index) => (
        <section
          key={index}
          className={`py-16 md:py-24 ${index % 2 === 0 ? "bg-white/20 dark:bg-gray-950/20" : "bg-gray-50/20 dark:bg-gray-900/20"}`}
        >
          <div className="container px-4 md:px-6">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className={index % 2 !== 0 ? "md:order-2" : ""}>
                <GlassCard className="p-6">
                  <SpecialCutIcon
                    size="lg"
                    color={index % 2 === 0 ? "primary" : "secondary"}
                    animate={true}
                    className="mb-4"
                  />
                  <h2 className="text-3xl font-bold tracking-tight mb-6">{section.heading}</h2>
                  <p className="text-muted-foreground mb-6 text-justify">{section.text}</p>
                </GlassCard>
              </div>
              <div className={index % 2 !== 0 ? "md:order-1" : ""}>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image src={section.image || "/placeholder.svg"} alt={section.alt} fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 md:py-24 bg-gradient-to-br from-skblue-600 to-skorange-500 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <SpecialCutIcon size="xl" color="white" animate={true} className="mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to Experience Our {service.title} Service?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-center">
              Contact SK Diamond today to discuss your specific needs and how our {service.title.toLowerCase()} service
              can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" passHref>
                <Button size="lg" className="group bg-white text-skblue-600 hover:bg-white/90">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/services" passHref>
                <Button
                  size="lg"
                  className="group bg-white/20 border-white text-white hover:bg-white/30 hover:border-white shadow-md"
                >
                  Explore Other Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
