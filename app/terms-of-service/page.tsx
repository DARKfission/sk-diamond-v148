import PageHeader from "@/components/page-header"
import { GlassCard } from "@/components/ui/glass-card"

export default function TermsOfServicePage() {
  return (
    <main className="flex flex-col min-h-screen relative">
      <PageHeader
        title="Terms of Service"
        description="The terms and conditions governing your use of our website and services"
      />

      <section className="py-16 md:py-24 bg-white/90 dark:bg-gray-950/90 relative z-10">
        <div className="container px-4 md:px-6">
          <GlassCard className="p-6 md:p-8 max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Introduction</h2>
              <p className="text-justify">
                These Terms of Service ("Terms") govern your use of the SK Diamond website and services. By accessing or
                using our website, you agree to be bound by these Terms.
              </p>

              <h2>Use of Our Website and Services</h2>
              <p className="text-justify">
                You may use our website and services for lawful purposes only and in accordance with these Terms. You
                agree not to:
              </p>
              <ul>
                <li>
                  Use our website in any way that violates any applicable local, state, national, or international law
                  or regulation
                </li>
                <li>
                  Use our website to transmit or upload any material that contains viruses, trojan horses, worms, or any
                  other harmful programs
                </li>
                <li>
                  Attempt to gain unauthorized access to our website, server, or any systems connected to our website
                </li>
                <li>Collect or track the personal information of others</li>
                <li>Impersonate or attempt to impersonate SK Diamond, an SK Diamond employee, or another user</li>
              </ul>

              <h2>Intellectual Property</h2>
              <p className="text-justify">
                The content on our website, including but not limited to text, graphics, logos, images, audio clips,
                digital downloads, and data compilations, is the property of SK Diamond or its content suppliers and is
                protected by international copyright laws.
              </p>
              <p className="text-justify">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly
                perform, republish, download, store, or transmit any of the material on our website without our prior
                written consent.
              </p>

              <h2>Data Privacy</h2>
              <p className="text-justify">
                <strong>We do not share any data with third parties. Your data is safe with us.</strong>
              </p>
              <p className="text-justify">
                Our Privacy Policy, which is incorporated into these Terms by reference, explains how we collect, use,
                and protect your information. By using our website, you consent to our collection and use of information
                as described in our Privacy Policy.
              </p>

              <h2>Product Information and Pricing</h2>
              <p className="text-justify">
                We strive to provide accurate information about our products and services. However, we do not warrant
                that product descriptions or other content on our website are accurate, complete, reliable, current, or
                error-free.
              </p>
              <p className="text-justify">
                All prices are subject to change without notice. We reserve the right to correct any errors,
                inaccuracies, or omissions, and to change or update information at any time without prior notice.
              </p>

              <h2>Disclaimer of Warranties</h2>
              <p className="text-justify">
                Our website and all content, products, and services included on or otherwise made available to you
                through our website are provided on an "as is" and "as available" basis, without any warranties of any
                kind, either express or implied.
              </p>

              <h2>Limitation of Liability</h2>
              <p className="text-justify">
                In no event shall SK Diamond, its directors, officers, employees, agents, partners, or suppliers be
                liable for any indirect, incidental, special, consequential, or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access
                to or use of or inability to access or use our website or any content on our website.
              </p>

              <h2>Changes to These Terms</h2>
              <p className="text-justify">
                We may revise these Terms from time to time. The most current version will always be posted on our
                website. By continuing to access or use our website after revisions become effective, you agree to be
                bound by the revised Terms.
              </p>

              <h2>Contact Us</h2>
              <p className="text-justify">
                If you have any questions about these Terms, please contact us through our{" "}
                <a href="/contact" className="text-skblue-600 dark:text-skblue-400 hover:underline">
                  Contact Page
                </a>
                .
              </p>

              <p className="text-sm text-muted-foreground mt-8">Last Updated: April 8, 2025</p>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  )
}
