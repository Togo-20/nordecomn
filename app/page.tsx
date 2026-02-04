import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const products = [
  {
    title: "Ламинаттай MDF",
    description: "Premium melamine-faced MDF with extensive décor options for high-end furniture applications.",
    image: "/images/laminated-mdf.jpg",
    href: "/products/laminated-mdf",
  },
  {
    title: "Laminated Chipboard",
    description: "Cost-effective laminated panels ideal for cabinetry, shelving, and commercial interiors.",
    image: "/images/laminated-chipboard.jpg",
    href: "/products/laminated-chipboard",
  },
  {
    title: "MDF",
    description: "Raw medium-density fiberboard for painting, veneering, or custom finishing applications.",
    image: "/images/raw-mdf.jpg",
    href: "/products/mdf",
  },
  {
    title: "Particle Board",
    description: "Engineered wood panels for structural applications and substrate requirements.",
    image: "/images/particle-board.jpg",
    href: "/products/particle-board",
  },
]

const features = [
  "E0.5 Low Formaldehyde Emission",
  "Wide Décor Selection",
  "Consistent Quality & Supply",
  "Competitive Wholesale Pricing",
  "Technical Support Available",
  "Fast Regional Delivery",
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-foreground">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-panels.jpg"
              alt="Premium laminated panels in warehouse"
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/70">
                Authorized NORDECO Designs Dealer
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
                Premium Panel Solutions for Industry Professionals
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Supplying furniture manufacturers, interior contractors, and project developers with high-quality laminated MDF, chipboard, and engineered wood products.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild className="bg-background text-foreground hover:bg-background/90">
                  <Link href="/contact">
                    Request a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                  <Link href="/decor-collection">View Décor Collection</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="border-b border-border bg-background py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
                  Quality materials for demanding applications
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  As an authorized NORDECO Designs dealer, we provide access to a comprehensive range of laminated panels and engineered wood products, backed by consistent supply and expert technical support.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm font-medium text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Our Product Range
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Comprehensive selection of engineered wood products for every application
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <Link
                  key={product.title}
                  href={product.href}
                  className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-foreground">{product.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {product.description}
                    </p>
                    <div className="mt-4 flex items-center text-sm font-medium text-accent">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Application Showcase */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/modern-kitchen.jpg"
                  alt="Modern kitchen with laminated panels"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
                  Trusted by industry professionals
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Our panels are specified by leading furniture manufacturers, kitchen fabricators, and interior fit-out contractors for projects ranging from residential developments to large-scale commercial interiors.
                </p>
                <ul className="mt-8 space-y-4">
                  {["Furniture Manufacturing", "Kitchen & Cabinetry", "Office Fit-Outs", "Commercial Interiors"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <span className="font-medium text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button asChild variant="outline">
                    <Link href="/industries">
                      View Industries Served
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-foreground py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl text-balance">
                Ready to discuss your project?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/70">
                Contact our team for pricing, technical specifications, and availability. We offer competitive wholesale rates for qualified buyers.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild className="bg-background text-foreground hover:bg-background/90">
                  <Link href="/contact">
                    Request a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                  <Link href="/technical">
                    <Download className="mr-2 h-4 w-4" />
                    Download Catalog
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
