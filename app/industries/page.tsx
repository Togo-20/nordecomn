import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Industries Served | NORDECO Designs",
  description: "We supply premium panel products to furniture manufacturers, kitchen fabricators, office fit-out contractors, and commercial interior specialists.",
}

const industries = [
  {
    title: "Furniture Manufacturing",
    description: "From residential furniture to contract manufacturing, our panels provide the foundation for quality furniture production across all market segments.",
    image: "/images/industries/furniture.jpg",
    applications: [
      "Living room furniture",
      "Bedroom sets and wardrobes",
      "Home office desks",
      "Entertainment units",
      "Children's furniture",
      "Contract furniture for hospitality",
    ],
    products: ["Laminated MDF", "Laminated Chipboard", "Raw MDF"],
  },
  {
    title: "Kitchen & Cabinetry",
    description: "High-performance panels for kitchen cabinets, bathroom vanities, and custom cabinetry that demand durability and aesthetic appeal.",
    image: "/images/industries/kitchen.jpg",
    applications: [
      "Kitchen cabinet carcasses",
      "Cabinet doors and fronts",
      "Bathroom vanity units",
      "Utility room storage",
      "Built-in wardrobes",
      "Custom closet systems",
    ],
    products: ["Laminated MDF", "Laminated Chipboard", "MDF for painted doors"],
  },
  {
    title: "Office Interiors",
    description: "Professional-grade panels for workstations, partition systems, and office furniture that meet the demands of commercial environments.",
    image: "/images/industries/office.jpg",
    applications: [
      "Workstation systems",
      "Executive desks",
      "Filing and storage units",
      "Reception counters",
      "Meeting room furniture",
      "Acoustic panel cores",
    ],
    products: ["Laminated Chipboard", "Laminated MDF", "Particle Board"],
  },
  {
    title: "Commercial & Retail",
    description: "Display fixtures, retail shelving, and commercial installations requiring both visual appeal and structural performance.",
    image: "/images/industries/retail.jpg",
    applications: [
      "Retail display fixtures",
      "Shop fitting and shelving",
      "Exhibition stands",
      "Restaurant furniture",
      "Hotel room furniture",
      "Healthcare facility casework",
    ],
    products: ["Laminated MDF", "Laminated Chipboard", "Raw MDF"],
  },
]

export default function IndustriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-foreground py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/70">
                Industries Served
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                Partnering with industry professionals across sectors
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                From furniture manufacturers to commercial fit-out specialists, we supply the panel products that form the backbone of quality interior projects.
              </p>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {industries.map((industry, index) => (
                <div
                  key={industry.title}
                  className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src={industry.image || "/placeholder.svg"}
                        alt={industry.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                      {industry.title}
                    </h2>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {industry.description}
                    </p>

                    <div className="mt-8">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                        Applications
                      </h3>
                      <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {industry.applications.map((app) => (
                          <li key={app} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 shrink-0 text-accent" />
                            <span className="text-sm text-muted-foreground">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                        Recommended Products
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {industry.products.map((product) => (
                          <span
                            key={product}
                            className="rounded-full bg-secondary px-3 py-1 text-sm text-foreground"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
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
                Let us support your next project
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/70">
                Whether you are a furniture manufacturer, interior contractor, or project developer, we have the products and expertise to meet your requirements.
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
      </main>

      <Footer />
    </div>
  )
}
