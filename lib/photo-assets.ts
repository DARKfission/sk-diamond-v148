/**
 * PHOTO ASSETS MANAGEMENT
 *
 * This file centralizes all photo assets used throughout the website.
 * Update image URLs here to change them across the entire site.
 *
 * USAGE:
 * import { photos } from "@/lib/photo-assets";
 *
 * // Then use in components:
 * <Image src={photos.home.hero.diamond || "/placeholder.svg"} alt="Diamond" />
 */

// Types for better organization and type safety
interface PhotoAsset {
  url: string
  alt: string
  width?: number
  height?: number
}

// Logo and brand assets
export const brandAssets = {
  logo: {
    main: {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-L4KGQFmGxuA78kk0eIessao9LyPfPy.png",
      alt: "S K Diamond Logo",
    },
    icon: {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VsudsU0JAhppHn172QmmX6SnLAW8Uv.png",
      alt: "Special Cut Diamond Icon",
    },
  },
}

// Home page photos
export const homePhotos = {
  // Hero section images (currently using animated backgrounds instead of photos)
  hero: {
    // These are placeholder references for when you want to switch back to photos
    diamond: {
      url: "/placeholder.svg?height=400&width=400",
      alt: "Diamond showcase",
    },
    cutting: {
      url: "/placeholder.svg?height=400&width=400",
      alt: "Diamond cutting process",
    },
    polishing: {
      url: "/placeholder.svg?height=400&width=400",
      alt: "Diamond polishing",
    },
  },

  // Adapting to Your Needs carousel (currently using animated backgrounds)
  adaptiveNeeds: {
    manufacturing: {
      url: "/placeholder.svg?height=400&width=600",
      alt: "Precision Diamond Manufacturing",
    },
    cutting: {
      url: "/placeholder.svg?height=400&width=600",
      alt: "Specialized Diamond Cutting",
    },
    partnerships: {
      url: "/placeholder.svg?height=400&width=600",
      alt: "Jewelry Designer Partnerships",
    },
    industrial: {
      url: "/placeholder.svg?height=400&width=600",
      alt: "Industrial Diamond Solutions",
    },
  },

  // Special Cuts section
  specialCuts: {
    // Currently using component-based diamond displays
  },
}

// About page photos
export const aboutPhotos = {
  // Photos section was removed as requested
  // Placeholder for future photos
  team: {
    url: "/placeholder.svg?height=600&width=800",
    alt: "SK Diamond team",
  },
  workshop: {
    url: "/placeholder.svg?height=600&width=800",
    alt: "SK Diamond workshop",
  },
}

// Services page photos
export const servicesPhotos = {
  // Main services page
  diamondCutting: {
    url: "https://images.unsplash.com/photo-1615655114865-4cc35d41b08f?q=80&w=2070&auto=format&fit=crop",
    alt: "Laser diamond cutting process",
  },
  diamondPolishing: {
    url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2071&auto=format&fit=crop",
    alt: "Diamond manufacturing and polishing process",
  },
  customDesign: {
    url: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=2070&auto=format&fit=crop",
    alt: "Various diamond cutting shapes",
  },
  diamondRecutting: {
    url: "https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=2070&auto=format&fit=crop",
    alt: "Diamond splitting process",
  },
  qualityAssessment: {
    url: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2069&auto=format&fit=crop",
    alt: "Diamond under microscope inspection",
  },

  // Individual service pages - Diamond Cutting
  diamondCuttingPage: {
    main: {
      url: "https://images.unsplash.com/photo-1615655114865-4cc35d41b08f?q=80&w=2070&auto=format&fit=crop",
      alt: "Laser diamond cutting process",
    },
    technology: {
      url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop",
      alt: "Diamond cutting technology",
    },
    custom: {
      url: "https://images.unsplash.com/photo-1584307833174-a3bbb76ab367?q=80&w=2070&auto=format&fit=crop",
      alt: "Custom diamond cutting",
    },
  },

  // Individual service pages - Diamond Polishing
  diamondPolishingPage: {
    main: {
      url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2071&auto=format&fit=crop",
      alt: "Diamond polishing process",
    },
    multiStage: {
      url: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2069&auto=format&fit=crop",
      alt: "Multi-stage diamond polishing",
    },
    quality: {
      url: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=2033&auto=format&fit=crop",
      alt: "Diamond quality control",
    },
  },

  // Individual service pages - Custom Design
  customDesignPage: {
    main: {
      url: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=2070&auto=format&fit=crop",
      alt: "Various diamond cutting shapes",
    },
    creation: {
      url: "https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=2070&auto=format&fit=crop",
      alt: "Custom diamond cut creation",
    },
    process: {
      url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop",
      alt: "Custom diamond design process",
    },
  },

  // Individual service pages - Diamond Recutting
  diamondRecuttingPage: {
    main: {
      url: "https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=2070&auto=format&fit=crop",
      alt: "Diamond splitting process",
    },
    repair: {
      url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop",
      alt: "Diamond damage repair",
    },
    enhancement: {
      url: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2069&auto=format&fit=crop",
      alt: "Diamond value enhancement",
    },
  },

  // Individual service pages - Quality Assessment
  qualityAssessmentPage: {
    main: {
      url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2071&auto=format&fit=crop",
      alt: "Diamond under microscope inspection",
    },
    equipment: {
      url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop",
      alt: "Diamond testing equipment",
    },
    documentation: {
      url: "https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=2070&auto=format&fit=crop",
      alt: "Diamond assessment documentation",
    },
  },
}

// Special Cut page photos
export const specialCutPhotos = {
  // Diamond cut images
  skBrilliant: {
    url: "/images/brilliant-cut-diamond.png",
    alt: "SK Brilliant cut diamond",
  },
  skPrincess: {
    url: "/images/princess-cut-diamond.png",
    alt: "SK Princess cut diamond",
  },
  skMarquise: {
    url: "/images/marquise-diamond.png",
    alt: "SK Marquise cut diamond",
  },
  skCushion: {
    url: "/images/cushion-cut-diamond.png",
    alt: "SK Cushion cut diamond",
  },
  skEmerald: {
    url: "/images/emerald-cut-diamond.png",
    alt: "SK Emerald cut diamond",
  },
  skPear: {
    url: "/images/pear-cut-diamond.png",
    alt: "SK Pear shaped diamond",
  },

  // Process image
  cuttingProcess: {
    url: "https://images.unsplash.com/photo-1615655114865-4cc35d41b08f?q=80&w=2070&auto=format&fit=crop",
    alt: "Diamond cutting process",
  },
}

// Contact page photos
export const contactPhotos = {
  // Currently using Google Maps embed for location
}

// Media Gallery photos (currently disabled)
export const mediaGalleryPhotos = {
  // Manufacturing category
  manufacturing: [
    {
      url: "https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=2070&auto=format&fit=crop",
      alt: "Diamond cutting process",
      category: "manufacturing",
    },
    {
      url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2071&auto=format&fit=crop",
      alt: "Diamond polishing workshop",
      category: "manufacturing",
    },
    {
      url: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=2033&auto=format&fit=crop",
      alt: "Diamond quality inspection",
      category: "manufacturing",
    },
    {
      url: "https://images.unsplash.com/photo-1615655114865-4cc35d41b08f?q=80&w=2070&auto=format&fit=crop",
      alt: "Diamond cutting machine",
      category: "manufacturing",
    },
    {
      url: "https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=2070&auto=format&fit=crop",
      alt: "Diamond workshop overview",
      category: "manufacturing",
    },
    {
      url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2071&auto=format&fit=crop",
      alt: "Diamond sorting process",
      category: "manufacturing",
    },
  ],

  // Products category
  products: [
    {
      url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop",
      alt: "Polished diamond close-up",
      category: "products",
    },
    {
      url: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2069&auto=format&fit=crop",
      alt: "Special cut diamond",
      category: "products",
    },
    {
      url: "https://images.unsplash.com/photo-1584307833174-a3bbb76ab367?q=80&w=2070&auto=format&fit=crop",
      alt: "SK Brilliant cut diamond",
      category: "products",
    },
    {
      url: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=2070&auto=format&fit=crop",
      alt: "SK Princess cut diamond",
      category: "products",
    },
    {
      url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop",
      alt: "SK Oval cut diamond",
      category: "products",
    },
    {
      url: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2069&auto=format&fit=crop",
      alt: "SK Cushion cut diamond",
      category: "products",
    },
  ],
}

// Testimonial photos
export const testimonialPhotos = {
  sarahJohnson: {
    url: "/placeholder.svg?height=200&width=200",
    alt: "Sarah Johnson, Jewelry Designer",
  },
  michaelChen: {
    url: "/placeholder.svg?height=200&width=200",
    alt: "Michael Chen, Luxury Retailer",
  },
  emilyRodriguez: {
    url: "/placeholder.svg?height=200&width=200",
    alt: "Emily Rodriguez, Private Client",
  },
}

// Export a combined object for easy importing
export const photos = {
  brand: brandAssets,
  home: homePhotos,
  about: aboutPhotos,
  services: servicesPhotos,
  specialCut: specialCutPhotos,
  contact: contactPhotos,
  media: mediaGalleryPhotos,
  testimonials: testimonialPhotos,
}

/**
 * USAGE EXAMPLES:
 *
 * // Import the entire photos object
 * import { photos } from "@/lib/photo-assets";
 * <Image src={photos.services.diamondCutting.url || "/placeholder.svg"} alt={photos.services.diamondCutting.alt} />
 *
 * // Import specific sections
 * import { servicesPhotos } from "@/lib/photo-assets";
 * <Image src={servicesPhotos.diamondCutting.url || "/placeholder.svg"} alt={servicesPhotos.diamondCutting.alt} />
 *
 * // For media gallery or other arrays
 * {photos.media.manufacturing.map((photo) => (
 *   <Image key={photo.alt} src={photo.url || "/placeholder.svg"} alt={photo.alt} />
 * ))}
 */
