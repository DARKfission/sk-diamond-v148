import { CheckCircle } from "lucide-react"
import PageHeader from "@/components/page-header"
import SpecialCutIcon from "@/components/special-cut-icon"

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen relative">
      <PageHeader title="About SK Diamond" description="A legacy of excellence in diamond manufacturing" />

      <section className="py-16 md:py-24 bg-white/90 dark:bg-gray-950/90 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-skblue-600 dark:text-skblue-400 flex items-center justify-center">
              <SpecialCutIcon size="md" className="mr-2 text-skorange-500" animate={true} />
              Our Story
            </h2>
            <p className="text-muted-foreground mb-6 text-center">
              Founded in 1985, SK Diamond has grown from a small family workshop to a leading name in diamond
              manufacturing. Our journey began with a simple mission: to transform rough diamonds into breathtaking
              works of art through precision cutting and polishing.
            </p>
            <p className="text-muted-foreground mb-6 text-center">
              Over the decades, we have perfected our craft, combining traditional techniques with cutting-edge
              technology to create diamonds of exceptional quality and brilliance.
            </p>
            <p className="text-muted-foreground text-center">
              Today, SK Diamond is recognized worldwide for our commitment to excellence, ethical practices, and
              innovative designs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50/90 dark:bg-gray-900/90 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-skblue-600 dark:text-skblue-400 flex items-center">
              <SpecialCutIcon size="lg" className="mr-2 text-skorange-500" animate={true} />
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">At SK Diamond, our values guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Excellence",
                description:
                  "We strive for perfection in every diamond we craft, ensuring each piece meets our rigorous standards.",
              },
              {
                title: "Integrity",
                description: "We operate with complete transparency and ethical practices throughout our supply chain.",
              },
              {
                title: "Innovation",
                description:
                  "We continuously explore new techniques and designs to push the boundaries of diamond craftsmanship.",
              },
              {
                title: "Sustainability",
                description: "We are committed to responsible sourcing and minimizing our environmental impact.",
              },
              {
                title: "Craftsmanship",
                description: "We honor the tradition of diamond cutting while embracing modern precision technology.",
              },
              {
                title: "Customer Focus",
                description:
                  "We prioritize building lasting relationships with our clients through exceptional service.",
              },
            ].map((value, index) => (
              <div key={index} className="glow-box about-value-card" data-index={index}>
                <span></span>
                <div className="glow-content">
                  <div className="flex items-start mb-4 justify-center">
                    <CheckCircle className="h-5 w-5 text-skorange-500 dark:text-skorange-400 mr-2 mt-0.5" />
                    <h3 className="text-xl font-semibold glow-title">{value.title}</h3>
                  </div>
                  <p className="glow-description">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white/90 dark:bg-gray-950/90 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-skblue-600 dark:text-skblue-400 flex items-center justify-center">
              <SpecialCutIcon size="md" className="mr-2 text-skorange-500" animate={true} />
              Our Expertise
            </h2>
            <p className="text-muted-foreground mb-6 text-center">
              With decades of experience in diamond manufacturing, our team of master craftsmen combines traditional
              techniques with cutting-edge technology to create diamonds of exceptional quality.
            </p>
            <p className="text-muted-foreground mb-6 text-center">
              Our expertise spans every aspect of the diamond manufacturing process, from initial assessment and
              planning to precision cutting, polishing, and final quality control.
            </p>
            <p className="text-muted-foreground text-center">
              We specialize in creating both traditional and innovative cuts, always striving to maximize each diamond's
              natural beauty and brilliance.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
