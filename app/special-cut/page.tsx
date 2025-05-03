import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import PageHeader from "@/components/page-header"
import SpecialCutIcon from "@/components/special-cut-icon"

export default function SpecialCutPage() {
  const specialCuts = [
    {
      name: "SK Brilliant",
      description:
        "Our signature round brilliant cut features 58 precisely calculated facets that maximize light return and brilliance. The SK Brilliant is designed to create exceptional fire and scintillation, making it our most popular special cut.",
      image: "/images/brilliant-cut-diamond.png", // Updated to use the provided image
      alt: "SK Brilliant cut diamond",
    },
    {
      name: "SK Princess",
      description:
        "Our modern take on the classic princess cut features additional facets that enhance brilliance while maintaining the square shape. The SK Princess combines the elegance of a square cut with the fire of a round brilliant.",
      image: "/images/princess-cut-diamond.png", // Updated to use the provided image
      alt: "SK Princess cut diamond",
    },
    {
      name: "SK Marquise",
      description:
        "The SK Marquise cut features an elegant elongated shape with pointed ends, creating a stunning visual effect that maximizes carat weight appearance. Our proprietary faceting pattern eliminates the bow-tie effect common in standard marquise cuts.",
      image: "/images/marquise-diamond.png", // Updated to use the provided marquise image
      alt: "SK Marquise cut diamond",
    },
    {
      name: "SK Cushion",
      description:
        "Combining the softness of a pillow shape with the brilliance of a round cut, our SK Cushion features a unique faceting arrangement that creates a distinctive pattern of light and dark that sets it apart from traditional cushion cuts.",
      image: "/images/cushion-cut-diamond.png", // Updated to use the provided image
      alt: "SK Cushion cut diamond",
    },
    {
      name: "SK Emerald",
      description:
        "Our SK Emerald cut enhances the traditional step-cut design with precisely calculated facets that improve brilliance while maintaining the elegant hall-of-mirrors effect that makes emerald cuts so distinctive.",
      image: "/images/emerald-cut-diamond.png", // Updated to use the provided image
      alt: "SK Emerald cut diamond",
    },
    {
      name: "SK Pear",
      description:
        "The SK Pear combines the brilliance of a round cut with the elegance of a marquise, creating a teardrop shape with exceptional sparkle. Our special faceting pattern ensures perfect symmetry and eliminates the bow-tie effect.",
      image: "/images/pear-cut-diamond.png", // Updated to use the provided image
      alt: "SK Pear shaped diamond",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen relative">
      <PageHeader
        title="Special Cut Diamonds"
        description="Exclusive diamond cuts designed and perfected by SK Diamond"
      />

      <section className="py-16 md:py-24 bg-white/90 dark:bg-gray-950/90">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 flex items-center">
              <SpecialCutIcon size="lg" className="mr-2 text-skorange-500" animate={true} />
              Our Signature Cuts
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-justify">
              At SK Diamond, we've developed a range of proprietary diamond cuts that showcase our expertise and
              innovation in diamond manufacturing. Each special cut is designed to maximize the diamond's natural beauty
              and brilliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {specialCuts.map((cut, index) => (
              <div key={index} className="glow-box special-cut-card" data-index={index}>
                <span></span>
                <div className="glow-content special-cut-content">
                  <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={cut.image || "/placeholder.svg"}
                      alt={`${cut.name} diamond cut`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex items-center mb-3 justify-center">
                    <SpecialCutIcon size="sm" className="mr-2 text-skorange-500" />
                    <h3 className="text-xl font-bold glow-title">{cut.name}</h3>
                  </div>
                  <p className="glow-description text-justify">{cut.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50/90 dark:bg-gray-900/90">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6 flex items-center">
                <SpecialCutIcon size="md" className="mr-2 text-skorange-500" animate={true} />
                The SK Diamond Difference
              </h2>
              <p className="text-muted-foreground mb-6 text-justify">
                What sets our special cuts apart is our commitment to maximizing each diamond's potential. Our master
                cutters analyze each rough diamond to determine the optimal cut that will enhance its natural
                characteristics.
              </p>
              <p className="text-muted-foreground mb-6 text-justify">
                Using proprietary cutting techniques and advanced technology, we create diamonds with exceptional
                brilliance, fire, and scintillation. Each special cut is designed to showcase the diamond's unique
                beauty in a way that standard cuts cannot achieve.
              </p>
              <p className="text-muted-foreground text-justify">
                When you choose an SK Diamond special cut, you're getting a truly unique piece that represents the
                pinnacle of diamond craftsmanship.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1615655114865-4cc35d41b08f?q=80&w=2070&auto=format&fit=crop"
                alt="Diamond cutting process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white/90 dark:bg-gray-950/90">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 flex items-center">
              <SpecialCutIcon size="lg" className="mr-2 text-skorange-500" animate={true} />
              Interested in Our Special Cuts?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-justify">
              Contact SK Diamond today to learn more about our special cut diamonds and how they can elevate your
              jewelry collection.
            </p>
            <Link href="/contact" passHref>
              <Button size="lg" className="group">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
