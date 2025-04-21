import type { ReactNode } from "react"
import { GlassCard } from "@/components/ui/glass-card"

interface PageHeaderProps {
  title: string
  description?: string
  children?: ReactNode
}

export default function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <section className="py-10 md:py-16 relative mt-16">
      <GlassCard className="absolute inset-0 z-0" intensity="medium" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-cinzel">{title}</h1>
          {description && <p className="text-muted-foreground max-w-3xl mx-auto text-center">{description}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}
