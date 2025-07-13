import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CartProvider } from "@/lib/cart-context"
import { Toaster } from "@/components/ui/toaster"
import { QuickViewProvider } from "@/lib/quick-view-context"
import GoogleAnalytics from "@/components/google-analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Powerpill - Premium ED Medications & Health Solutions Online",
    template: "%s | Powerpill"
  },
  description: "Buy premium erectile dysfunction medications online. FDA-approved Sildenafil, Tadalafil, and Vardenafil at affordable prices. Fast, discreet shipping with doctor consultation.",
  keywords: [
    "erectile dysfunction",
    "ED medication",
    "sildenafil",
    "tadalafil", 
    "vardenafil",
    "online pharmacy",
    "prescription medicine",
    "men's health",
    "sexual health",
    "FDA approved",
    "doctor consultation",
    "discreet shipping"
  ],
  authors: [{ name: "Powerpill Healthcare" }],
  creator: "Powerpill",
  publisher: "Powerpill Healthcare",
  generator: 'Next.js',
  applicationName: "Powerpill",
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  themeColor: "#0ea5e9",
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://powerpill.us",
    siteName: "Powerpill",
    title: "Powerpill - Premium ED Medications & Health Solutions Online",
    description: "Buy premium erectile dysfunction medications online. FDA-approved Sildenafil, Tadalafil, and Vardenafil at affordable prices. Fast, discreet shipping with doctor consultation.",
    images: [
      {
        url: "/images/powerpill-logo.png",
        width: 1200,
        height: 630,
        alt: "Powerpill - Premium ED Medications Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@powerpill",
    creator: "@powerpill",
    title: "Powerpill - Premium ED Medications & Health Solutions Online",
    description: "Buy premium erectile dysfunction medications online. FDA-approved medications with doctor consultation and discreet shipping.",
    images: ["/images/powerpill-logo.png"],
  },
  alternates: {
    canonical: "https://powerpill.us",
  },
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://powerpill.us" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Powerpill",
              "url": "https://powerpill.us",
              "logo": "https://powerpill.us/images/powerpill-logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-692-1890",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1821 W. Verdugo Ave. Suite 102",
                "addressLocality": "Burbank",
                "addressRegion": "CA",
                "postalCode": "91506",
                "addressCountry": "US"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Powerpill",
              "url": "https://powerpill.us",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://powerpill.us/products?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
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
