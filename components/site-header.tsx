"use client"

import Link from "next/link"
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
      label: "Tadalafil (Calis)",
      description: "20mg - 80mg available"
    },
    {
      href: "/categories/vardenafil",
      label: "Vardenafil (Lavitra)",
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
            <SheetContent side="left" className="w-[80%] max-w-[300px] p-0">
              <div className="flex flex-col h-full">
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between mb-4">
                    <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                      <span className="text-xl font-bold">Powerpill</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <div className="flex-1 overflow-auto py-4">
                  <nav className="flex flex-col px-4 space-y-1">
                    {routes.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        className={`py-3 px-2 text-base rounded-md transition-colors ${
                          route.active 
                            ? "text-primary font-medium bg-primary/10" 
                            : "text-gray-700 hover:text-primary hover:bg-gray-50"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {route.label}
                      </Link>
                    ))}
                    
                    {/* Product Categories for mobile */}
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <p className="text-sm font-semibold text-gray-900 mb-3 px-2">Product Categories</p>
                      <div className="space-y-1">
                        {categoryRoutes.map((category) => (
                          <Link
                            key={category.href}
                            href={category.href}
                            className="block py-3 px-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="flex flex-col">
                              <span className="font-medium text-sm">{category.label}</span>
                              <span className="text-xs text-gray-500 mt-1">{category.description}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Support/Info for mobile */}
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <p className="text-sm font-semibold text-gray-900 mb-3 px-2">Support & Info</p>
                      <div className="space-y-1">
                        {supportRoutes.map((support) => (
                          <Link
                            key={support.href}
                            href={support.href}
                            className="block py-3 px-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {support.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </nav>
                </div>

                <div className="p-4 border-t mt-auto">
                  <Button className="w-full" asChild>
                    <Link href="/cart" onClick={() => setIsMobileMenuOpen(false)}>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Cart ({cartItemCount})
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center">
            <span className="text-lg md:text-xl font-bold">Powerpill</span>
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
