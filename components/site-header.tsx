"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ShoppingCart, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import { useState, useEffect } from "react"
import { useCart } from "@/lib/cart-context"

export function SiteHeader() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { cart } = useCart()

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/categories",
      label: "Categories",
      active: pathname === "/categories",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
    {
      href: "/about",
      label: "About Us",
      active: pathname === "/about",
    },
  ]

  // Product categories based on your actual products
  const categoryRoutes = [
    {
      href: "/categories/sildenafil",
      label: "Sildenafil",
      description: "25mg - 200mg available"
    },
    {
      href: "/categories/tadalafil",
      label: "Tadalafil",
      description: "20mg - 80mg available"
    },
    {
      href: "/categories/vardenafil",
      label: "Vardenafil",
      description: "20mg - 60mg available"
    },
  ]

  // Support/Info pages that exist
  const supportRoutes = [
    {
      href: "/faq",
      label: "FAQ",
    },
    {
      href: "/returns",
      label: "Returns & Refunds",
    },
    {
      href: "/privacy",
      label: "Privacy Policy",
    },
    {
      href: "/terms",
      label: "Terms & Conditions",
    },
  ]

  // Calculate total items in cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled ? "bg-white shadow-sm" : "bg-white"
      }`}
    >
      <div className="container flex h-16 items-center justify-between bg-white">
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="mr-1">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] max-w-[280px] p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                      <Image
                        src="/images/powerpill-logo.png"
                        alt="Powerpill Logo"
                        width={120}
                        height={40}
                        className="h-8 w-auto"
                        priority
                      />
                    </Link>
                    <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(false)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <nav className="p-4 space-y-2">
                    {routes.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        className={`block py-3 px-4 text-sm font-medium rounded-lg transition-colors ${
                          route.active 
                            ? "text-primary bg-primary/10" 
                            : "text-gray-700 hover:text-primary hover:bg-gray-50"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {route.label}
                      </Link>
                    ))}
                    
                    {/* Product Categories for mobile */}
                    <div className="pt-6">
                      <div className="px-4 pb-3">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          Product Categories
                        </h3>
                      </div>
                      <div className="space-y-1">
                        {categoryRoutes.map((category) => (
                          <Link
                            key={category.href}
                            href={category.href}
                            className="block py-3 px-4 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div>
                              <div className="font-medium">{category.label}</div>
                              <div className="text-xs text-gray-500 mt-1">{category.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Support/Info for mobile */}
                    <div className="pt-6">
                      <div className="px-4 pb-3">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          Support & Info
                        </h3>
                      </div>
                      <div className="space-y-1">
                        {supportRoutes.map((support) => (
                          <Link
                            key={support.href}
                            href={support.href}
                            className="block py-3 px-4 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {support.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </nav>
                </div>

                <div className="p-4 border-t border-gray-200">
                  <Button className="w-full" asChild>
                    <Link href="/cart" onClick={() => setIsMobileMenuOpen(false)}>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Cart {cartItemCount > 0 && `(${cartItemCount})`}
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center">
            <Image
              src="/images/powerpill-logo.png"
              alt="Powerpill Logo"
              width={140}
              height={48}
              className="h-10 w-auto md:h-12"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 ml-6">
            {routes.map((route) => {
              if (route.label === "Categories") {
                return (
                  <DropdownMenu key={route.href}>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className="text-sm font-medium transition-colors hover:text-primary h-auto p-0 flex items-center gap-1"
                      >
                        {route.label}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-64 mt-2">
                      {categoryRoutes.map((category) => (
                        <DropdownMenuItem key={category.href} asChild className="p-0">
                          <Link href={category.href} className="flex flex-col items-start p-3 w-full">
                            <span className="font-medium text-sm">{category.label}</span>
                            <span className="text-xs text-gray-500 mt-1">{category.description}</span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild className="p-0">
                        <Link href="/categories" className="font-medium p-3 w-full">View All Categories</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              }
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    route.active ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {route.label}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {/* Support dropdown for desktop */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="hidden md:flex text-sm font-medium transition-colors hover:text-primary h-auto p-0 items-center gap-1"
              >
                Support
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 mt-2">
              {supportRoutes.map((support) => (
                <DropdownMenuItem key={support.href} asChild className="p-0">
                  <Link href={support.href} className="w-full p-3 text-sm">{support.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
