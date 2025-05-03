import PageHeader from "@/components/page-header"
import { GlassCard } from "@/components/ui/glass-card"

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col min-h-screen relative">
      <PageHeader title="Privacy Policy" description="How we collect, use, and protect your information" />

      <section className="py-16 md:py-24 bg-white/90 dark:bg-gray-950/90 relative z-10">
        <div className="container px-4 md:px-6">
          <GlassCard className="p-6 md:p-8 max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Introduction</h2>
              <p className="text-justify">
                At SK Diamond, we take your privacy seriously. This Privacy Policy explains how we collect, use, and
                protect your personal information when you use our website or services.
              </p>

              <h2>Information We Collect</h2>
              <p className="text-justify">We may collect the following types of information:</p>
              <ul>
                <li>
                  <strong className="text-justify">Personal Information:</strong> Name, email address, phone number, and
                  other contact details that you provide when filling out forms on our website.
                </li>
                <li>
                  <strong className="text-justify">Usage Information:</strong> Information about how you use our
                  website, including pages visited and actions taken.
                </li>
                <li>
                  <strong className="text-justify">Device Information:</strong> Information about the device you use to
                  access our website, such as IP address, browser type, and operating system.
                </li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p className="text-justify">We use your information to:</p>
              <ul>
                <li>Provide, maintain, and improve our website and services</li>
                <li>Process and fulfill your requests and orders</li>
                <li>Communicate with you about your inquiries or orders</li>
                <li>Send you updates, marketing communications, and newsletters (if you have opted in)</li>
                <li>Analyze website usage to improve user experience</li>
              </ul>

              <h2>Data Protection</h2>
              <p className="text-justify">
                <strong>We do not share any data with third parties. Your data is safe with us.</strong>
              </p>
              <p className="text-justify">
                We implement appropriate security measures to protect your personal information from unauthorized
                access, alteration, disclosure, or destruction. These measures include internal reviews of our data
                collection, storage, and processing practices, as well as physical security measures to guard against
                unauthorized access to systems where we store personal data.
              </p>

              <h2>Your Rights</h2>
              <p className="text-justify">You have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Request restriction of processing your personal information</li>
                <li>Request transfer of your personal information</li>
                <li>Withdraw consent at any time, where we rely on consent to process your personal information</li>
              </ul>

              <h2>Changes to This Privacy Policy</h2>
              <p className="text-justify">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated" date.
              </p>

              <h2>Contact Us</h2>
              <p className="text-justify">
                If you have any questions about this Privacy Policy, please contact us through our{" "}
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
