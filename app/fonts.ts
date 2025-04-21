// Update the font imports to use a more reliable decorative font
import { Montserrat, Playfair_Display, Cinzel } from "next/font/google"

// Define your fonts
export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

// Replace Black Chancery with Cinzel for better compatibility
export const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800", "900"],
})
