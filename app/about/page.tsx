import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Truck, Users, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Бидний тухай | NORDECO Design Authorized Dealer",
  description: "Learn about our company, our authorization as a NORDECO Designs dealer, and our commitment to quality panel products for the furniture and construction industry.",
}

const values = [
  {
    icon: Award,
    title: "Authorized Dealer",
    description: "Official NORDECO Designs partner with full access to the complete product range and technical support.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every product meets stringent quality standards with low formaldehyde emission certification.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    description: "Efficient warehousing and delivery network ensuring timely supply to your facility.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated team with deep product knowledge to assist with specifications and applications.",
  },
]

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Active Clients" },
  { value: "50+", label: "Décor Options" },
  { value: "98%", label: "On-Time Delivery" },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-foreground py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/70">
                About Us
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                Your trusted partner in premium panel products
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                As an authorized NORDECO Designs dealer, we bridge the gap between world-class manufacturing and local industry needs, providing consistent access to premium laminated boards and engineered wood products.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/warehouse.jpg"
                  alt="Our warehouse facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
                  Built on reliability and expertise
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    For over 15 years, we have served the furniture manufacturing and interior fit-out industry with dedication to quality and service. Our partnership with NORDECO Designs allows us to offer a comprehensive range of laminated panels that meet the most demanding specifications.
                  </p>
                  <p className="leading-relaxed">
                    Our modern warehouse facility maintains extensive inventory across all product lines and décor options, ensuring rapid fulfillment of orders. We understand that production schedules depend on reliable material supply, and we build our operations around this principle.
                  </p>
                  <p className="leading-relaxed">
                    Beyond supply, we provide technical consultation to help clients select the right products for their specific applications, whether for residential furniture, commercial interiors, or large-scale development projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                What sets us apart
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Our commitment to excellence defines every aspect of our operation
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="rounded-lg border border-border bg-card p-6">
                  <value.icon className="h-10 w-10 text-accent" />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-border bg-background py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-semibold text-foreground">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
                  A team dedicated to your success
                </h2>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  Our sales and technical team brings decades of combined experience in the panel products industry. We understand the specific needs of furniture manufacturers, cabinetry shops, and interior contractors, and we tailor our service accordingly.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  From initial product selection to ongoing supply management, we work alongside your team to ensure your material requirements are met consistently and cost-effectively.
                </p>
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/contact">
                      Contact Our Team
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-lg lg:order-2">
                <Image
                  src="/images/team.jpg"
                  alt="Our team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-foreground py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl text-balance">
                Ready to partner with us?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/70">
                Let us discuss how we can support your production needs with reliable supply and competitive pricing.
              </p>
              <div className="mt-10">
                <Button size="lg" asChild className="bg-background text-foreground hover:bg-background/90">
                  <Link href="/contact">
                    Request a Quote
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
