import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { GlassCard } from "@/components/ui/glass-card"
import PageHeader from "@/components/page-header"
import SpecialCutIcon from "@/components/special-cut-icon"

// Define service data
const serviceData = {
  "diamond-cutting": {
    title: "Diamond Cutting",
    description:
      "Our expert cutters transform rough diamonds into brilliant gems, maximizing their natural beauty and value.",
    image: "https://images.unsplash.com/photo-1615655114865-4cc35d41b08f?q=80&w=2070&auto=format&fit=crop",
    content: [
      {
        heading: "The Art of Diamond Cutting",
        text: "Diamond cutting is a precise art that requires years of expertise and a deep understanding of a diamond's natural properties. Our master cutters analyze each rough diamond to determine the optimal cut that will maximize its brilliance, fire, and overall beauty.",
        image: "https://images.unsplash.com/photo-1615655114865-4cc35d41b08f?q=80&w=2070&auto=format&fit=crop",
        alt: "Laser diamond cutting process",
      },
      {
        heading: "Advanced Cutting Technology",
        text: "We combine traditional cutting techniques with state-of-the-art technology to achieve the most precise cuts possible. Our advanced equipment allows us to create complex facet patterns that enhance a diamond's natural light performance.",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop",
        alt: "Diamond cutting technology",
      },
      {
        heading: "Customized Cutting Solutions",
        text: "Every diamond is unique, and our cutting approach is tailored to each stone's specific characteristics. We work closely with clients to understand their preferences and create cuts that align with their vision while maximizing the diamond's potential.",
        image: "https://images.unsplash.com/photo-1584307833174-a3bbb76ab367?q=80&w=2070&auto=format&fit=crop",
        alt: "Custom diamond cutting",
      },
    ],
  },
  "diamond-polishing": {
    title: "Diamond Polishing",
    description:
      "Our polishing process brings out the true brilliance of each diamond, creating a flawless finish that maximizes light reflection and sparkle.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2071&auto=format&fit=crop",
    content: [
      {
        heading: "Precision Polishing Techniques",
        text: "Diamond polishing is the crucial final step that brings out a diamond's true brilliance. Our expert polishers use specialized techniques to create a perfectly smooth surface that maximizes light reflection and creates the signature sparkle that diamonds are known for.",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2071&auto=format&fit=crop",
        alt: "Diamond polishing process",
      },
      {
        heading: "Multi-Stage Polishing Process",
        text: "Our comprehensive polishing process involves multiple stages, each using progressively finer abrasives to achieve a flawless finish. This meticulous approach ensures that every facet is polished to perfection, creating optimal light performance.",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2069&auto=format&fit=crop",
        alt: "Multi-stage diamond polishing",
      },
      {
        heading: "Quality Control",
        text: "Throughout the polishing process, our quality control experts conduct rigorous inspections to ensure that each diamond meets our exacting standards. We examine every facet under magnification to verify perfect symmetry and polish quality.",
        image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=2033&auto=format&fit=crop",
        alt: "Diamond quality control",
      },
    ],
  },
  "custom-design": {
    title: "Custom Design",
    description:
      "We work closely with clients to create custom diamond cuts and designs that meet their specific requirements and bring their vision to life.",
    image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=2070&auto=format&fit=crop",
    content: [
      {
        heading: "Collaborative Design Process",
        text: "Our custom design service begins with a detailed consultation to understand your vision and requirements. We work closely with you throughout the design process, providing sketches and 3D models to ensure that the final product perfectly matches your expectations.",
        image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=2070&auto=format&fit=crop",
        alt: "Various diamond cutting shapes",
      },
      {
        heading: "Unique Cut Creation",
        text: "For clients seeking truly one-of-a-kind diamonds, we can create custom cuts that showcase a diamond's unique characteristics. Our master cutters can design and execute proprietary facet patterns that create distinctive light patterns and visual effects.",
        image: "https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=2070&auto=format&fit=crop",
        alt: "Custom diamond cut creation",
      },
      {
        heading: "From Concept to Reality",
        text: "We handle every aspect of bringing your custom design to life, from initial concept to final execution. Our integrated approach ensures seamless coordination between design, cutting, and polishing to create a finished product that exceeds your expectations.",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop",
        alt: "Custom diamond design process",
      },
    ],
  },
  "diamond-recutting": {
    title: "Diamond Recutting",
    description:
      "We transform older or damaged diamonds by recutting them to modern standards, improving their appearance and value while preserving the original material.",
    image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=2033&auto=format&fit=crop",
    content: [
      {
        heading: "Revitalizing Older Diamonds",
        text: "Diamond recutting can breathe new life into older stones that may have outdated cuts, damage, or wear. Our expert cutters can transform these diamonds into modern, brilliant gems that meet today's standards for light performance and beauty.",
        image: "https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=2070&auto=format&fit=crop",
        alt: "Diamond splitting process",
      },
      {
        heading: "Damage Repair",
        text: "For diamonds with chips, scratches, or other damage, our recutting service can remove these imperfections while preserving as much of the original material as possible. This process not only improves the diamond's appearance but can also enhance its structural integrity.",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop",
        alt: "Diamond damage repair",
      },
      {
        heading: "Value Enhancement",
        text: "In many cases, recutting can significantly increase a diamond's value by improving its cut grade, symmetry, and overall appearance. Our experts carefully analyze each stone to determine the optimal recutting strategy that will maximize its potential value.",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2069&auto=format&fit=crop",
        alt: "Diamond value enhancement",
      },
    ],
  },
  "quality-assessment": {
    title: "Quality Assessment",
    description:
      "Our comprehensive quality assessment service evaluates diamonds based on the 4Cs and other important factors, providing detailed reports on their true value and quality.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2069&auto=format&fit=crop",
    content: [
      {
        heading: "Comprehensive Diamond Evaluation",
        text: "Our quality assessment service provides a thorough evaluation of a diamond's characteristics, including the 4Cs (cut, color, clarity, and carat weight) as well as additional factors that affect its value and beauty. This detailed analysis helps clients understand the true quality and worth of their diamonds.",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2071&auto=format&fit=crop",
        alt: "Diamond under microscope inspection",
      },
      {
        heading: "Advanced Testing Equipment",
        text: "We use state-of-the-art equipment and technology to conduct our assessments, including specialized microscopes, spectrophotometers, and other tools that allow us to accurately measure and evaluate a diamond's properties. This technical approach ensures precise and reliable results.",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop",
        alt: "Diamond testing equipment",
      },
      {
        heading: "Detailed Documentation",
        text: "Following our assessment, we provide clients with comprehensive documentation that details our findings and explains the diamond's characteristics in clear, understandable terms. This documentation serves as a valuable reference for insurance, resale, or personal knowledge.",
        image: "https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=2070&auto=format&fit=crop",
        alt: "Diamond assessment documentation",
      },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(serviceData).map((service) => ({
    service,
  }))
}

export function generateMetadata({ params }: { params: { service: string } }) {
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

export default async function ServicePage({
  params,
}: {
  params: { service: string }
}) {
  const service = serviceData[params.service as keyof typeof serviceData]
  const allServices = Object.keys(serviceData).map((key) => ({
    id: key,
    title: serviceData[key as keyof typeof serviceData].title,
  }))

  if (!service) {
    notFound()
  }

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