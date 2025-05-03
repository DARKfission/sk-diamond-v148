"use client"

import type React from "react"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import SpecialCutIcon from "./special-cut-icon"

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-200 relative z-20">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <SpecialCutIcon size="md" className="text-skorange-500" />
              <span className="text-xl tracking-tight text-white font-cinzel">S K Diamond</span>
            </Link>
            <div className="mb-6">
              <p className="text-gray-400 mb-3 text-sm max-w-xs text-justify">
                Premium diamond manufacturing with decades of expertise. We specialize in high-quality diamond cutting,
                polishing, and custom designs.
              </p>
            </div>
            <div className="flex space-x-3">
              {/* Social media buttons with enhanced hover effects */}
              <SocialButton icon={<Facebook className="h-5 w-5" />} href="https://facebook.com" label="Facebook" />
              <SocialButton icon={<Twitter className="h-5 w-5" />} href="https://twitter.com" label="Twitter" />
              <SocialButton
                icon={<Instagram className="h-5 w-5" />}
                href="https://www.instagram.com/s_k_diamond/"
                label="Instagram"
              />
              <SocialButton icon={<Linkedin className="h-5 w-5" />} href="https://linkedin.com" label="LinkedIn" />
            </div>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Services", href: "/services" },
                  { name: "Special Cut", href: "/special-cut" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                      onClick={(e) => {
                        if (window.location.pathname === link.href) {
                          e.preventDefault()
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { name: "Diamond Cutting", href: "/services/diamond-cutting" },
                  { name: "Diamond Polishing", href: "/services/diamond-polishing" },
                  { name: "Custom Design", href: "/services/custom-design" },
                  { name: "Quality Assessment", href: "/services/quality-assessment" },
                ].map((service) => (
                  <li key={service.name}>
                    <Link href={service.href} className="text-gray-400 hover:text-white transition-colors">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 text-sm mb-4">Have questions or need assistance? We're here to help.</p>
            <Link
              href="/contact"
              onClick={(e) => {
                if (window.location.pathname === "/contact") {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              }}
            >
              <Button className="w-full bg-skorange-500 hover:bg-skorange-600 text-white">Contact Us</Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} S K Diamond. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Enhanced social media buttons with purple hover effect
function SocialButton({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-button-wrapper">
      <div className="social-button">
        <div className="social-button-icon-container">{icon}</div>
      </div>
    </a>
  )
}
