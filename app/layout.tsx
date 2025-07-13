import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CartProvider } from "@/lib/cart-context"
import { Toaster } from "@/components/ui/toaster"
import { QuickViewProvider } from "@/lib/quick-view-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Powerpill - Your One-Stop Shop",
  description: "Shop the latest products at affordable prices",
  generator: 'v0.dev',
  icons: {
    icon: [
      {
        url: '/images/powerpill-favicon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/images/powerpill-favicon.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    shortcut: '/images/powerpill-favicon.png',
    apple: [
      {
        url: '/images/powerpill-favicon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <QuickViewProvider>
            <div className="relative min-h-screen flex flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
              <Toaster />
            </div>
          </QuickViewProvider>
        </CartProvider>
      </body>
    </html>
  )
}
