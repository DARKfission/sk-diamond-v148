import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  showText?: boolean
}

export function Logo({ className, size = "md", showText = false }: LogoProps) {
  const sizeMap = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
    xl: "h-20 w-20",
  }

  return (
    <div className={cn("flex items-center relative", className)}>
      <div className={cn("relative z-10", sizeMap[size])}>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-L4KGQFmGxuA78kk0eIessao9LyPfPy.png"
          alt="S K Diamond Logo"
          fill
          className="object-contain drop-shadow-lg"
        />
      </div>
      {showText && <span className="ml-2 text-lg font-bold font-cinzel">S K Diamond</span>}
    </div>
  )
}
