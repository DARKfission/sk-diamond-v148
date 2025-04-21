"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { MapPin, Phone, Mail, Send, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GlassCard } from "@/components/ui/glass-card"
import PageHeader from "@/components/page-header"
import SpecialCutIcon from "@/components/special-cut-icon"
import PhoneInput from "react-phone-number-input"
import { parsePhoneNumber } from "libphonenumber-js"
import "react-phone-number-input/style.css"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [phoneValue, setPhoneValue] = useState("")
  const [countryName, setCountryName] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle phone number changes and detect country
  useEffect(() => {
    if (phoneValue) {
      try {
        const phoneNumber = parsePhoneNumber(phoneValue)
        if (phoneNumber && phoneNumber.country) {
          // Get country name from country code
          const regionNames = new Intl.DisplayNames(["en"], { type: "region" })
          setCountryName(regionNames.of(phoneNumber.country))

          // Update the form data with the formatted phone number
          setFormData((prev) => ({ ...prev, phone: phoneValue }))
        } else {
          setCountryName(null)
        }
      } catch (error) {
        setCountryName(null)
      }
    } else {
      setCountryName(null)
    }
  }, [phoneValue])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send form data to API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: `New Inquiry from Website: ${formData.subject}`,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      // Form submitted successfully
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
      setPhoneValue("")
      setCountryName(null)

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      // Handle error state here
      alert("There was an error submitting the form. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Determine button color based on submission state
  const getButtonClasses = () => {
    if (submitSuccess) {
      return "bg-green-500 hover:bg-green-600 text-white transition-colors duration-500"
    }
    if (isSubmitting) {
      return "bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-500"
    }
    return "bg-skorange-500 hover:bg-skorange-600 text-white transition-colors duration-500"
  }

  return (
    <main className="flex flex-col min-h-screen relative">
      <PageHeader
        title="Contact Us"
        description="Get in touch with S K Diamond for inquiries, appointments, or custom orders"
      />

      <section className="py-8 md:py-12 bg-transparent relative z-10">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <GlassCard className="shadow-lg h-full">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <SpecialCutIcon size="md" className="mr-2 text-skorange-500" animate={true} />
                    <CardTitle>Contact Information</CardTitle>
                  </div>
                  <CardDescription>Reach out to us through any of these channels</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-skorange-500 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-muted-foreground text-justify">
                          S K Diamond,
                          <br />
                          Surat, Gujarat, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-skorange-500 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-muted-foreground">
                          <a href="tel:+4915203215624" className="hover:text-skorange-500 transition-colors">
                            +49 1520 3215624
                          </a>
                          <br />
                          <a href="tel:+917990308040" className="hover:text-skorange-500 transition-colors">
                            +91 7990308040
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-skorange-500 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground">
                          <a href="mailto:info@sk-diamond.com" className="hover:text-skorange-500 transition-colors">
                            info@sk-diamond.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </GlassCard>
            </div>

            <div className="lg:col-span-2">
              <GlassCard className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <SpecialCutIcon size="md" className="mr-2 text-skorange-500" animate={true} />
                    <CardTitle>Send Us a Message</CardTitle>
                  </div>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitSuccess ? (
                    <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6 flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Thank you for your message! We'll get back to you shortly.</span>
                    </div>
                  ) : null}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <div className="space-y-2">
                        <PhoneInput
                          international
                          countryCallingCodeEditable={true}
                          defaultCountry="IN"
                          value={phoneValue}
                          onChange={setPhoneValue as (value: string) => void}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        {countryName && (
                          <p className="text-xs text-muted-foreground">
                            Detected country: <span className="font-medium text-skorange-500">{countryName}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Inquiry about special cut diamonds"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please provide details about your inquiry..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className={`w-full relative overflow-hidden group ${getButtonClasses()}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </span>
                      ) : submitSuccess ? (
                        <span className="flex items-center justify-center">
                          <Check className="mr-2 h-4 w-4" />
                          Sent Successfully
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          Send Message
                          <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}

                      {/* Success ripple effect animation */}
                      {submitSuccess && (
                        <span className="absolute inset-0 bg-green-500/20 animate-ping rounded-md"></span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-transparent relative z-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 flex items-center">
              <SpecialCutIcon size="lg" className="mr-2 text-skorange-500" animate={true} />
              Visit Our Workshop
            </h2>
            <p className="text-muted-foreground max-w3xl mx-auto mb-6">
              Schedule a visit to our workshop to see our diamond manufacturing process in action
            </p>
          </div>

          <GlassCard className="mx-auto max-w-4xl overflow-hidden shadow-xl">
            <div className="p-4 border-b border-white/20 dark:border-white/20 flex items-center justify-between">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-skorange-500 mr-2" />
                <h3 className="font-medium font-cinzel text-lg">S K Diamond Workshop</h3>
              </div>
              <a
                href="https://maps.app.goo.gl/2vFnEGhJMj6Ybain6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-skblue-600 dark:text-skblue-400 hover:text-skorange-500 dark:hover:text-skorange-400"
              >
                Open in Google Maps
              </a>
            </div>
            <div className="relative w-full h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4455.643044892849!2d72.82795787596699!3d21.212277580483317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f8d00d0a731%3A0xa57e56726ff8bf39!2sS%20K%20Diamond!5e0!3m2!1sen!2sde!4v1743256698940!5m2!1sen!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="S K Diamond Location"
                className="absolute inset-0"
              ></iframe>
            </div>
            <div className="p-4 bg-white/10 dark:bg-gray-900/10 text-sm">
              <p className="flex items-center font-medium">
                <MapPin className="h-4 w-4 mr-2 text-skorange-500" />S K Diamond, Surat, Gujarat, India
              </p>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  )
}
