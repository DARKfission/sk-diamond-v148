import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ClientPage from "./client-page"

// Define service data for metadata generation
const serviceData = {
  "diamond-cutting": {
    title: "Diamond Cutting",
    description:
      "Our expert cutters transform rough diamonds into brilliant gems, maximizing their natural beauty and value.",
  },
  "diamond-polishing": {
    title: "Diamond Polishing",
    description:
      "Our polishing process brings out the true brilliance of each diamond, creating a flawless finish that maximizes light reflection and sparkle.",
  },
  "custom-design": {
    title: "Custom Design",
    description:
      "We work closely with clients to create custom diamond cuts and designs that meet their specific requirements and bring their vision to life.",
  },
  "diamond-recutting": {
    title: "Diamond Recutting",
    description:
      "We transform older or damaged diamonds by recutting them to modern standards, improving their appearance and value while preserving the original material.",
  },
  "quality-assessment": {
    title: "Quality Assessment",
    description:
      "Our comprehensive quality assessment service evaluates diamonds based on the 4Cs and other important factors, providing detailed reports on their true value and quality.",
  },
}

// Define the type for the params
type ServiceParams = {
  service: string
}

// Generate static paths for all services
export function generateStaticParams(): ServiceParams[] {
  return Object.keys(serviceData).map((service) => ({
    service,
  }))
}

// Generate metadata for each service page
export async function generateMetadata({
  params,
}: {
  params: Promise<ServiceParams>
}): Promise<Metadata> {
  const resolvedParams = await params
  const service = serviceData[resolvedParams.service as keyof typeof serviceData]

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

// Main page component
export default async function ServicePage({
  params,
}: {
  params: Promise<ServiceParams>
}) {
  const resolvedParams = await params
  const serviceId = resolvedParams.service

  // Check if service exists
  const service = serviceData[serviceId as keyof typeof serviceData]
  if (!service) {
    notFound()
  }

  return <ClientPage />
}
