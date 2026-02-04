"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const categories = ["All", "Woodgrain", "Solid Colors", "Textures"]

const decors = [
  {
    id: "oak-natural",
    name: "Oak Natural",
    code: "H3303",
    category: "Woodgrain",
    image: "/images/decor/oak-natural.jpg",
    description: "Classic natural oak with warm honey undertones",
  },
  {
    id: "walnut-dark",
    name: "Dark Walnut",
    code: "H3704",
    category: "Woodgrain",
    image: "/images/decor/walnut-dark.jpg",
    description: "Rich dark walnut with elegant grain structure",
  },
  {
    id: "beech-light",
    name: "Light Beech",
    code: "H1582",
    category: "Woodgrain",
    image: "/images/decor/beech-light.jpg",
    description: "Pale beech with subtle golden grain pattern",
  },
  {
    id: "maple-cream",
    name: "Cream Maple",
    code: "H1887",
    category: "Woodgrain",
    image: "/images/decor/maple-cream.jpg",
    description: "Soft cream maple with delicate natural markings",
  },
  {
    id: "white-matte",
    name: "White Matte",
    code: "W980",
    category: "Solid Colors",
    image: "/images/decor/white-matte.jpg",
    description: "Pure white with smooth matte finish",
  },
  {
    id: "black-gloss",
    name: "Black High Gloss",
    code: "U999",
    category: "Solid Colors",
    image: "/images/decor/black-gloss.jpg",
    description: "Deep black with high-gloss reflective surface",
  },
  {
    id: "anthracite",
    name: "Anthracite",
    code: "U963",
    category: "Solid Colors",
    image: "/images/decor/anthracite.jpg",
    description: "Sophisticated dark grey matte finish",
  },
  {
    id: "grey-concrete",
    name: "Grey Concrete",
    code: "F187",
    category: "Textures",
    image: "/images/decor/grey-concrete.jpg",
    description: "Industrial concrete effect with subtle texture",
  },
  {
    id: "linen-texture",
    name: "Natural Linen",
    code: "F416",
    category: "Textures",
    image: "/images/decor/linen-texture.jpg",
    description: "Woven linen textile pattern in natural tones",
  },
]

export default function DecorCollectionPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedDecor, setSelectedDecor] = useState<typeof decors[0] | null>(null)

  const filteredDecors = activeCategory === "All"
    ? decors
    : decors.filter((d) => d.category === activeCategory)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-foreground py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/70">
                Décor Collection
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                Extensive range of finishes for every design vision
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Browse our comprehensive collection of woodgrain, solid colors, and textured finishes. Each décor is available across our laminated MDF and chipboard product lines.
              </p>
            </div>
          </div>
        </section>

        {/* Filter */}
        <section className="border-b border-border bg-background py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-foreground text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-muted"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {filteredDecors.map((decor) => (
                <button
                  key={decor.id}
                  type="button"
                  onClick={() => setSelectedDecor(decor)}
                  className="group overflow-hidden rounded-lg border border-border bg-card text-left transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={decor.image || "/placeholder.svg"}
                      alt={decor.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground">{decor.code}</p>
                    <h3 className="mt-1 font-medium text-foreground">{decor.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{decor.category}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Decor Modal */}
        {selectedDecor && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
            onClick={() => setSelectedDecor(null)}
            onKeyDown={(e) => e.key === "Escape" && setSelectedDecor(null)}
          >
            <div
              className="w-full max-w-2xl overflow-hidden rounded-lg bg-background"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <Image
                  src={selectedDecor.image || "/placeholder.svg"}
                  alt={selectedDecor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{selectedDecor.code}</p>
                    <h2 className="mt-1 text-2xl font-semibold text-foreground">{selectedDecor.name}</h2>
                    <p className="mt-2 text-muted-foreground">{selectedDecor.description}</p>
                  </div>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                    {selectedDecor.category}
                  </span>
                </div>
                <div className="mt-6 flex gap-4">
                  <Button asChild className="flex-1">
                    <Link href="/contact">Request Sample</Link>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedDecor(null)}
                    className="flex-1"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <section className="bg-background py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg border border-border bg-card p-8 lg:p-12">
              <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">
                    Need physical samples?
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Request sample chips to evaluate colors and textures before ordering. Available for qualified B2B customers.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link href="/contact">
                      Request Samples
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/technical">
                      <Download className="mr-2 h-4 w-4" />
                      Download Catalog
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
