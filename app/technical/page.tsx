import type { Metadata } from "next"
import Link from "next/link"
import { Download, Shield, Leaf, Award, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Technical Information | NORDECO Designs",
  description: "Technical specifications, certifications, emission standards, and downloadable product datasheets for NORDECO Designs panel products.",
}

const certifications = [
  {
    icon: Leaf,
    title: "E0.5 Emission Class",
    description: "Ultra-low formaldehyde emission certification. Our products meet the strictest environmental standards for indoor air quality.",
    standard: "EN 13986 / EN 717-1",
  },
  {
    icon: Shield,
    title: "Quality Management",
    description: "ISO 9001:2015 certified manufacturing processes ensuring consistent product quality and traceability.",
    standard: "ISO 9001:2015",
  },
  {
    icon: Award,
    title: "FSC Certification",
    description: "Forest Stewardship Council chain of custody certification for sustainably sourced wood fiber materials.",
    standard: "FSC-C123456",
  },
]

const datasheets = [
  {
    title: "Laminated MDF Technical Datasheet",
    description: "Complete specifications including mechanical properties, dimensions, and surface characteristics.",
    size: "PDF, 1.2 MB",
  },
  {
    title: "Laminated Chipboard Technical Datasheet",
    description: "Detailed product specifications and application guidelines for laminated particle board.",
    size: "PDF, 980 KB",
  },
  {
    title: "Raw MDF Product Guide",
    description: "Technical data for unlaminated MDF including density, thickness tolerances, and machining properties.",
    size: "PDF, 850 KB",
  },
  {
    title: "Particle Board Specifications",
    description: "Complete specifications for structural particle board grades including P3 and P5.",
    size: "PDF, 920 KB",
  },
  {
    title: "Décor Collection Catalog",
    description: "Full color catalog of available décor finishes with matching edge-banding references.",
    size: "PDF, 4.5 MB",
  },
  {
    title: "Edge Banding Compatibility Guide",
    description: "Reference guide for matching ABS and PVC edge-banding with décor panels.",
    size: "PDF, 680 KB",
  },
]

const standards = [
  {
    category: "Physical Properties",
    items: [
      { property: "Density (MDF)", value: "700-780 kg/m³", standard: "EN 323" },
      { property: "Density (Chipboard)", value: "620-680 kg/m³", standard: "EN 323" },
      { property: "Moisture Content", value: "5-9%", standard: "EN 322" },
      { property: "Thickness Tolerance", value: "±0.2mm", standard: "EN 324-1" },
    ],
  },
  {
    category: "Mechanical Properties",
    items: [
      { property: "Bending Strength (MDF)", value: "≥30 N/mm²", standard: "EN 310" },
      { property: "Internal Bond (MDF)", value: "≥0.60 N/mm²", standard: "EN 319" },
      { property: "Screw Holding (Face)", value: "≥1100 N", standard: "EN 320" },
      { property: "Screw Holding (Edge)", value: "≥800 N", standard: "EN 320" },
    ],
  },
  {
    category: "Surface Properties",
    items: [
      { property: "Surface Soundness", value: "≥1.0 N/mm²", standard: "EN 311" },
      { property: "Scratch Resistance", value: "Grade 3-4", standard: "EN 438-2" },
      { property: "Stain Resistance", value: "Grade 4-5", standard: "EN 438-2" },
      { property: "Light Fastness", value: "Grade 4+", standard: "EN ISO 4892-2" },
    ],
  },
]

export default function TechnicalPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-foreground py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/70">
                Technical Information
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                Standards, certifications, and specifications
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Access detailed technical data, compliance information, and downloadable resources for all NORDECO Designs products.
              </p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Certifications & Standards
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <cert.icon className="h-10 w-10 text-accent" />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{cert.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {cert.description}
                  </p>
                  <p className="mt-4 text-xs font-medium text-accent">{cert.standard}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Standards */}
        <section className="border-y border-border bg-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Technical Standards
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our products are manufactured and tested to European standards
            </p>

            <div className="mt-8 space-y-8">
              {standards.map((section) => (
                <div key={section.category}>
                  <h3 className="text-lg font-semibold text-foreground">{section.category}</h3>
                  <div className="mt-4 overflow-hidden rounded-lg border border-border">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border bg-card">
                          <th className="px-6 py-3 text-left text-sm font-medium text-foreground">
                            Property
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-foreground">
                            Value
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-foreground">
                            Test Standard
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {section.items.map((item, index) => (
                          <tr
                            key={item.property}
                            className={index % 2 === 0 ? "bg-background" : "bg-card"}
                          >
                            <td className="px-6 py-4 text-sm text-foreground">{item.property}</td>
                            <td className="px-6 py-4 text-sm font-medium text-foreground">
                              {item.value}
                            </td>
                            <td className="px-6 py-4 text-sm text-muted-foreground">
                              {item.standard}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Downloads */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Downloadable Resources
            </h2>
            <p className="mt-4 text-muted-foreground">
              Access technical datasheets and product documentation
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {datasheets.map((doc) => (
                <div
                  key={doc.title}
                  className="flex items-start gap-4 rounded-lg border border-border bg-card p-6"
                >
                  <div className="rounded-lg bg-secondary p-3">
                    <FileText className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{doc.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{doc.description}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{doc.size}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="shrink-0">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download {doc.title}</span>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-foreground py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl text-balance">
                Need specific technical information?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/70">
                Our technical team can provide detailed specifications, testing data, and application guidance.
              </p>
              <div className="mt-10">
                <Button size="lg" asChild className="bg-background text-foreground hover:bg-background/90">
                  <Link href="/contact">
                    Contact Technical Support
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
