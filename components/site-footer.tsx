import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gray-100 border-t relative">
      <div
        className="absolute inset-0 bg-opacity-5"
        style={{
          backgroundImage: "url('/placeholder.svg?height=600&width=1200&text=Pattern')",
        }}
      ></div>
      <div className="container py-8 md:py-12 px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
          {/* Newsletter first on mobile */}
          <div className="order-1 md:order-3 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider">Newsletter</h3>
            <p className="text-sm text-gray-600">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="flex flex-col space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-3 py-2 border rounded-l-md text-sm flex-1"
                  required
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-primary text-primary-foreground rounded-r-md text-sm flex items-center justify-center"
                >
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

          <div className="order-2 md:order-1 space-y-3 md:space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/powerpill-logo.png"
                alt="Powerpill Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-600">Your one-stop shop for quality products at affordable prices.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div className="order-3 md:order-2 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="text-sm text-gray-600 hover:text-primary">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-primary">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/cancellation-refund-policy" className="text-sm text-gray-600 hover:text-primary">
                  Cancellation &amp; Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/telemedicine-consent" className="text-sm text-gray-600 hover:text-primary">
                  Telemedicine Consent
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
