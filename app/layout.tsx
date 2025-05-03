import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./client"

export const metadata: Metadata = {
  title: "SK Diamond | Premium Diamond Manufacturing",
  description:
    "SK Diamond specializes in high-quality diamond manufacturing, cutting, polishing, and custom designs with decades of expertise.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'