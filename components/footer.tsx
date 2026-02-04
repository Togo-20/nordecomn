import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

const productLinks = [
  { href: "/products/laminated-mdf", label: "Ламинаттай MDF" },
  { href: "/products/laminated-chipboard", label: "Ламинаттай Chipboard" },
  { href: "/products/mdf", label: "MDF хавтан" },
  { href: "/products/particle-board", label: "ДСП хавтан" },
]

const companyLinks = [
  { href: "/about", label: "Бидний тухай" },
  { href: "/decor-collection", label: "Бэлэн бүтээгдэхүүн" },
  { href: "/technical", label: "Техникийн мэдээлэл" },
  { href: "/industries", label: "Ажиллагааны төрөл" },
  { href: "/contact", label: "Холбоо барих" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <span className="text-xl font-semibold">NORDECO</span>
              <span className="ml-2 text-sm opacity-70">Design</span>
            </div>
            <p className="text-sm leading-relaxed opacity-70">
              NORDECO DESIGN брендийн ДСП хавтан албан ёсны эрхтэй борлуулагч.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Бүтээгдэхүүний төрөл</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-70 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Компани</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-70 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Холбоо барих</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 opacity-70" />
                <span className="text-sm opacity-70">9904-3323, 8583-2723</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 opacity-70" />
                <span className="text-sm opacity-70">degi527@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 opacity-70" />
                <span className="text-sm opacity-70">
                  100 айл<br />
                  Зөгийний үүр<br />
                  2 давхар 8 тоот<br />
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm opacity-70">
              © {new Date().getFullYear()} NORDECO DESIGN брендийн ДСП хавтан албан ёсны борлуулагч.
            </p>
            <div className="flex gap-6">
              
              <Link href="/privacy" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
