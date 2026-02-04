import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Décor Collection | NORDECO Designs",
  description: "Browse our extensive range of woodgrain, solid color, and textured décor finishes for laminated MDF and chipboard products.",
}

export default function DecorCollectionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
