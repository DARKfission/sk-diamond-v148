import type { Metadata } from "next"
import ClientPage from "./client-page"

// Define service data for metadata generation
const serviceData = {
  "diamond-cutting": {
    title: "Diamond Cutting",
    description: "Our expert cutters transform rough diamonds into brilliant gems.",
  },
  "diamond-polishing": {
    title: "Diamond Polishing",
    description: "Our polishing process brings out the true brilliance of each diamond.",
  },
  "custom-design": {
    title: "Custom Design",
    description: "We work closely with clients to create custom diamond cuts and designs.",
  },
  "diamond-recutting": {
    title: "Diamond Recutting",
    description: "We transform older or damaged diamonds by recutting them to modern standards.",
  },
  "quality-assessment": {
    title: "Quality Assessment",
    description: "Our comprehensive quality assessment service evaluates diamonds.",
  },
}

// Generate metadata for the page
export function generateMetadata({ params }: { params: { service: string } }): Metadata {
  const service = serviceData[params.service as keyof typeof serviceData]

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    }
  }

  return {
    title: `${service.title} | SK Diamond`,
    description: service.description,
  }
}

// Generate static paths for all services
export function generateStaticParams() {
  return Object.keys(serviceData).map((service) => ({
    service,
  }))
}

// Main page component
export default function ServicePage({ params }: { params: { service: string } }) {
  return <ClientPage params={params} />
}
