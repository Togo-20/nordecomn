import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Laminated MDF | NORDECO Designs",
  description: "Premium melamine-faced MDF panels with extensive décor options. Ideal for high-end furniture, cabinetry, and interior applications.",
}

const specifications = [
  { label: "Thickness", value: "6mm, 9mm, 12mm, 15mm, 18mm, 25mm" },
  { label: "Standard Sizes", value: "2440 x 1220mm, 2800 x 2070mm" },
  { label: "Core Material", value: "High-density MDF (700-780 kg/m³)" },
  { label: "Surface Finish", value: "Melamine paper, smooth or textured" },
  { label: "Emission Class", value: "E0.5 (Ultra-low formaldehyde)" },
  { label: "Edge Options", value: "Raw, ABS edge-banding available" },
]

const applications = [
  "Kitchen cabinets and doors",
  "Wardrobes and closet systems",
  "Office furniture and desks",
  "Retail fixtures and displays",
  "Wall paneling and cladding",
  "Bathroom vanities",
]

const features = [
  "Smooth, consistent surface finish",
  "Superior screw-holding capacity",
  "Excellent machinability for routing and profiling",
  "Wide range of décor options available",
  "Matched edge-banding solutions",
  "Consistent thickness and flatness",
]

export default function LaminatedMDFPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-foreground py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <Link
                href="/products/laminated-chipboard"
                className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground"
              >
                ← Products
              </Link>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-primary-foreground sm:text-5xl">
                Laminated MDF
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Premium melamine-faced medium-density fiberboard combining the superior machining properties of MDF with durable, decorative surfaces. Perfect for high-end furniture and interior applications requiring fine detail work.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild className="bg-background text-foreground hover:bg-background/90">
                  <Link href="/contact">Request Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <Link href="/technical">
                    <Download className="mr-2 h-4 w-4" />
                    Download Datasheet
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/laminated-mdf.jpg"
                alt="Laminated MDF panel"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="border-b border-border bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Technical Specifications
          </h2>
          <div className="mt-8 overflow-hidden rounded-lg border border-border">
            <table className="w-full">
              <tbody className="divide-y divide-border">
                {specifications.map((spec, index) => (
                  <tr key={spec.label} className={index % 2 === 0 ? "bg-card" : "bg-secondary"}>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{spec.label}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features & Applications */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Product Features
              </h2>
              <ul className="mt-8 space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Applications
              </h2>
              <ul className="mt-8 space-y-4">
                {applications.map((application) => (
                  <li key={application} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span className="text-muted-foreground">{application}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-border bg-card p-8 lg:p-12">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold text-foreground">
                  Need a custom specification?
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Contact us for special sizes, finishes, or volume pricing inquiries.
                </p>
              </div>
              <Button asChild>
                <Link href="/contact">
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="border-t border-border bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Related Products
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { title: "Laminated Chipboard", href: "/products/laminated-chipboard" },
              { title: "MDF", href: "/products/mdf" },
              { title: "Particle Board", href: "/products/particle-board" },
            ].map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="group flex items-center justify-between rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <span className="font-medium text-foreground">{product.title}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
