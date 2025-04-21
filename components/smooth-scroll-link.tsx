"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import type { ReactNode } from "react"

interface SmoothScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
  offset?: number
}

export default function SmoothScrollLink({ href, children, className = "", offset = 100 }: SmoothScrollLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Check if it's an external link
    if (href.startsWith("http")) {
      window.open(href, "_blank")
      return
    }

    // Check if it's a hash link on the same page
    if (href.includes("#")) {
      const targetId = href.replace(/.*#/, "")
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        // Get the top position of the target, adjusting for the offset
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset

        // Smooth scroll to the target
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })

        // Update URL hash without scrolling
        window.history.pushState(null, "", href)
      } else {
        // If target doesn't exist on this page, navigate to the page
        router.push(href)

        // Scroll to top after navigation
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" })
        }, 100)
      }
    } else {
      // Regular navigation to a different page
      router.push(href)

      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 100)
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
