"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Check } from "lucide-react"
import Link from "next/link"

export default function PhotoStorageGuide() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-serif font-bold mb-8 text-center">Photo Storage Options for Your Website</h1>

      <Tabs defaultValue="vercel" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="vercel">Vercel Blob</TabsTrigger>
          <TabsTrigger value="cloudinary">Cloudinary</TabsTrigger>
          <TabsTrigger value="aws">AWS S3</TabsTrigger>
        </TabsList>

        <TabsContent value="vercel">
          <GlassCard className="mb-8">
            <CardHeader>
              <CardTitle className="font-serif">Vercel Blob Storage</CardTitle>
              <CardDescription>The simplest option for your Next.js website hosted on Vercel</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Vercel Blob is a storage solution built directly into the Vercel platform, making it the easiest
                  option for storing and serving images on your website.
                </p>

                <h3 className="text-lg font-medium mt-4">Benefits:</h3>
                <ul className="space-y-2">
                  {[
                    "Seamless integration with Next.js and Vercel",
                    "Simple API for uploading and managing files",
                    "Automatic CDN distribution for fast loading worldwide",
                    "No separate account needed if you're already using Vercel",
                    "Generous free tier (5GB storage and 500GB bandwidth)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-lg font-medium mt-4">How to use:</h3>
                <ol className="list-decimal ml-5 space-y-2">
                  <li>
                    Install the @vercel/blob package:{" "}
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">npm install @vercel/blob</code>
                  </li>
                  <li>Create an upload endpoint in your API routes</li>
                  <li>Create a simple upload form or interface</li>
                  <li>Use the returned URLs in your Image components</li>
                </ol>

                <div className="mt-6">
                  <Link href="https://vercel.com/docs/storage/vercel-blob" target="_blank" rel="noopener noreferrer">
                    <Button className="flex items-center">
                      Learn more about Vercel Blob
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </GlassCard>
        </TabsContent>

        <TabsContent value="cloudinary">
          <GlassCard className="mb-8">
            <CardHeader>
              <CardTitle className="font-serif">Cloudinary</CardTitle>
              <CardDescription>Advanced image management with powerful transformation capabilities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Cloudinary is a specialized media management platform that offers advanced image optimization,
                  transformation, and delivery features.
                </p>

                <h3 className="text-lg font-medium mt-4">Benefits:</h3>
                <ul className="space-y-2">
                  {[
                    "Powerful image transformations (resize, crop, effects) via URL parameters",
                    "Automatic optimization for different devices and browsers",
                    "AI-powered features like background removal and auto-cropping",
                    "Comprehensive media management dashboard",
                    "Good free tier with 25GB storage and 25GB bandwidth",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-lg font-medium mt-4">How to use:</h3>
                <ol className="list-decimal ml-5 space-y-2">
                  <li>Create a free Cloudinary account</li>
                  <li>
                    Install the Cloudinary SDK:{" "}
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">npm install next-cloudinary</code>
                  </li>
                  <li>Configure your Cloudinary credentials in environment variables</li>
                  <li>Use the CldImage component or Cloudinary's upload widget</li>
                </ol>

                <div className="mt-6">
                  <Link
                    href="https://cloudinary.com/documentation/nextjs_integration"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="flex items-center">
                      Learn more about Cloudinary
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </GlassCard>
        </TabsContent>

        <TabsContent value="aws">
          <GlassCard className="mb-8">
            <CardHeader>
              <CardTitle className="font-serif">AWS S3</CardTitle>
              <CardDescription>Enterprise-grade storage with complete control and scalability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Amazon S3 (Simple Storage Service) is a highly scalable object storage service that can handle any
                  amount of data and offers the most control over your storage infrastructure.
                </p>

                <h3 className="text-lg font-medium mt-4">Benefits:</h3>
                <ul className="space-y-2">
                  {[
                    "Virtually unlimited storage capacity",
                    "Highly reliable with 99.999999999% durability",
                    "Complete control over access permissions and policies",
                    "Can be combined with CloudFront CDN for faster delivery",
                    "Cost-effective for large-scale storage needs",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-lg font-medium mt-4">How to use:</h3>
                <ol className="list-decimal ml-5 space-y-2">
                  <li>Create an AWS account and set up an S3 bucket</li>
                  <li>Configure CORS settings to allow uploads from your domain</li>
                  <li>
                    Install the AWS SDK:{" "}
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      npm install @aws-sdk/client-s3
                    </code>
                  </li>
                  <li>Create secure upload endpoints using server actions or API routes</li>
                  <li>Use the returned URLs with Next.js Image component</li>
                </ol>

                <div className="mt-6">
                  <Link href="https://aws.amazon.com/s3/" target="_blank" rel="noopener noreferrer">
                    <Button className="flex items-center">
                      Learn more about AWS S3
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </GlassCard>
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <GlassCard>
          <CardHeader>
            <CardTitle className="font-serif">Recommended Approach</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              For your SK Diamond website, we recommend using <strong>Vercel Blob Storage</strong> for the following
              reasons:
            </p>
            <ul className="space-y-2">
              {[
                "Seamless integration with your existing Next.js and Vercel setup",
                "Simple API that requires minimal configuration",
                "Built-in CDN for fast global image delivery",
                "Sufficient free tier for a business website with hundreds of product images",
                "Unified billing and management with your existing Vercel account",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm">
                <strong>Note:</strong> If you need advanced image transformations (like automatic resizing or applying
                filters), consider using Cloudinary alongside Vercel Blob. You can store original images in Vercel Blob
                and use Cloudinary for on-the-fly transformations.
              </p>
            </div>
          </CardContent>
        </GlassCard>
      </div>
    </div>
  )
}
