import { Button } from "@/components/ui/button"
import { ShoppingBag, Truck, CreditCard, LifeBuoy } from "lucide-react"
import { products } from "@/lib/products"
import FeaturedProducts from "@/components/featured-products"
import ImageSlider from "@/components/image-slider"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Powerpill - Buy ED Medications Online | Sildenafil, Tadalafil, Vardenafil",
  description: "Shop premium erectile dysfunction medications online. FDA-approved Sildenafil (25mg-200mg), Tadalafil (20mg-80mg), and Vardenafil (20mg-60mg). Doctor consultation included.",
  keywords: [
    "buy ED medication online",
    "sildenafil for sale",
    "tadalafil online",
    "vardenafil prescription",
    "erectile dysfunction treatment",
    "online ED pharmacy",
    "men's health medication",
    "prescription ED drugs"
  ],
  openGraph: {
    title: "Powerpill - Buy ED Medications Online | Sildenafil, Tadalafil, Vardenafil",
    description: "Shop premium erectile dysfunction medications online. FDA-approved medications with doctor consultation and discreet shipping.",
    url: "https://powerpill.us",
    images: [
      {
        url: "/images/powerpill-logo.png",
        width: 1200,
        height: 630,
        alt: "Powerpill - Premium ED Medications Online",
      },
    ],
  },
  alternates: {
    canonical: "https://powerpill.us",
  },
}

export default function Home() {
  // Get all products
  const allProducts = products

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": allProducts.slice(0, 6).map((product, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": product.name,
                "description": product.description,
                "image": `https://powerpill.us${product.image}`,
                "url": `https://powerpill.us/products/${product.id}`,
                "offers": {
                  "@type": "Offer",
                  "price": product.price,
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock"
                },
                "brand": {
                  "@type": "Brand",
                  "name": "Powerpill"
                }
              }
            }))
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Powerpill",
            "description": "Online pharmacy specializing in erectile dysfunction medications",
            "url": "https://powerpill.us",
            "telephone": "+1-800-692-1890",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1821 W. Verdugo Ave. Suite 102",
              "addressLocality": "Burbank",
              "addressRegion": "CA",
              "postalCode": "91506",
              "addressCountry": "US"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "medicalSpecialty": "Urology"
          })
        }}
      />
      
      <div className="flex flex-col min-h-screen">
      {/* Hero Section with Image Slider */}
      <section className="relative overflow-hidden">
        <ImageSlider />
      </section>

      {/* Featured Products Section */}
      <section id="featured-products" className="py-10 md:py-16 bg-gray-50 relative">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/placeholder.svg?height=600&width=1200&text=Pattern')",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-10">
            <div>
              <span className="text-primary font-medium text-sm md:text-base">Our Products</span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-1">Shop All Products</h2>
              <p className="text-gray-600 mt-1 md:mt-2 text-sm md:text-base">Quality products at great prices</p>
            </div>
          </div>

          <FeaturedProducts products={allProducts} />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <span className="text-primary font-medium text-sm md:text-base">Why Choose Us</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-1">Why Shop With Us</h2>
            <p className="text-gray-600 mt-1 md:mt-2 text-sm md:text-base">
              We're committed to providing the best shopping experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <div className="flex flex-col items-center text-center p-4 md:p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                <ShoppingBag className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Quality Products</h3>
              <p className="text-gray-600 text-sm md:text-base">
                We source only the highest quality products for our customers.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 md:p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                <Truck className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Fast Shipping</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Get your orders delivered quickly with our expedited shipping.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 md:p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                <CreditCard className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Secure Payments</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Shop with confidence with our secure payment methods.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 md:p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                <LifeBuoy className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Our customer service team is always ready to help you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
