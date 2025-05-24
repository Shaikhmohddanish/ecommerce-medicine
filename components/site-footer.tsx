import Link from "next/link"
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="col-span-2 md:col-span-1 space-y-3 md:space-y-4">
            <h3 className="text-lg font-bold">ShopEase</h3>
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

          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-sm text-gray-600 hover:text-primary">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-sm text-gray-600 hover:text-primary">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-sm text-gray-600 hover:text-primary">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-sm text-gray-600 hover:text-primary">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-gray-600 hover:text-primary">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-600 hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 space-y-3">
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
        </div>

        <div className="border-t mt-8 md:mt-12 pt-6 text-center text-xs md:text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
