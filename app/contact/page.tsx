"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+976 9904-3323",
    description: "Мягмар-Ням 9:00  - 18:00",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sales@nordeco-dealer.com",
    description: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "123 Industrial Way, Suite 100",
    description: "Manufacturing District",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday - Friday",
    description: "8:00 AM - 6:00 PM",
  },
]

const productOptions = [
  "Laminated MDF",
  "Laminated Chipboard",
  "MDF (Raw)",
  "Particle Board",
  "Multiple Products",
  "Other / Not Sure",
]

const industryOptions = [
  "Furniture Manufacturing",
  "Kitchen & Cabinetry",
  "Office Interiors",
  "Commercial Fit-Out",
  "Construction / Development",
  "Other",
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-foreground py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/70">
                Contact Us
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                Request a quote or get in touch
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Fill out the form below to request pricing, product information, or to discuss your project requirements with our team.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-xl font-semibold text-foreground">Contact Information</h2>
                <p className="mt-2 text-muted-foreground">
                  Reach out to our sales team for inquiries and quotations.
                </p>

                <div className="mt-8 space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="rounded-lg bg-secondary p-3">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{item.value}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <div className="rounded-lg border border-border bg-card p-6 lg:p-8">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center py-12 text-center">
                      <div className="rounded-full bg-accent/10 p-4">
                        <CheckCircle className="h-12 w-12 text-accent" />
                      </div>
                      <h3 className="mt-6 text-2xl font-semibold text-foreground">
                        Thank you for your inquiry
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Our team will review your request and get back to you within 24 hours.
                      </p>
                      <Button className="mt-8" onClick={() => setIsSubmitted(false)}>
                        Submit Another Inquiry
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name *</Label>
                          <Input
                            id="company"
                            name="company"
                            required
                            placeholder="Your company name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="name">Contact Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            required
                            placeholder="Your full name"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="you@company.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="product">Product Interest *</Label>
                          <select
                            id="product"
                            name="product"
                            required
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <option value="">Select product</option>
                            {productOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="industry">Industry *</Label>
                          <select
                            id="industry"
                            name="industry"
                            required
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <option value="">Select industry</option>
                            {industryOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Project Details / Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Please describe your requirements, including quantities, specifications, and project timeline if known."
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="consent"
                          name="consent"
                          required
                          className="mt-1 h-4 w-4 rounded border-input"
                        />
                        <Label htmlFor="consent" className="text-sm font-normal text-muted-foreground">
                          I agree to be contacted regarding my inquiry and understand that my information will be handled according to the{" "}
                          <Link href="/privacy" className="text-foreground underline hover:no-underline">
                            Privacy Policy
                          </Link>
                          .
                        </Label>
                      </div>

                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          "Submitting..."
                        ) : (
                          <>
                            Submit Inquiry
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map placeholder / Additional Info */}
        <section className="border-t border-border bg-secondary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg border border-border bg-card p-6 text-center">
                <h3 className="font-semibold text-foreground">Warehouse Location</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  123 Industrial Way, Suite 100<br />
                  Manufacturing District<br />
                  State, ZIP 12345
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6 text-center">
                <h3 className="font-semibold text-foreground">Delivery Area</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We deliver throughout the region with our own fleet. Contact us for delivery schedules and rates.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6 text-center">
                <h3 className="font-semibold text-foreground">Sample Requests</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Physical samples are available for qualified B2B customers. Include sample requests in your inquiry.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
