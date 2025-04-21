import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Example of how to use the photo assets in components
 */
export function getPhotoUrl(photoPath: string): string {
  // This is just an example function showing how you might
  // implement dynamic photo loading based on the photo-assets.ts file

  // In a real implementation, you would import from photo-assets.ts
  // and use the imported object to look up the photo URL

  return `/placeholder.svg?path=${photoPath}`
}
