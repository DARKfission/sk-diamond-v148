import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | SK Diamond",
  description:
    "Explore our comprehensive diamond manufacturing services including cutting, polishing, custom design, recutting, and quality assessment.",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">{children}</div>
    </div>
  )
}
