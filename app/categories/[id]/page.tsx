import { notFound } from "next/navigation"
import { products, getProductsByCategory } from "@/lib/products"
import FeaturedProducts from "@/components/featured-products"

interface CategoryPageProps {
  params: {
    id: string
  }
}

const categoryInfo = {
  sildenafil: {
    title: "Sildenafil Products",
    description: "Effective ED medication available in multiple strengths (25mg - 200mg). Proven results for improved performance and confidence.",
    subtitle: "The original ED treatment"
  },
  tadalafil: {
    title: "Tadalafil (Calis) Products", 
    description: "Long-lasting ED medication with up to 36 hours of effectiveness (20mg - 80mg). Perfect for spontaneous moments.",
    subtitle: "Extended duration treatment"
  },
  vardenafil: {
    title: "Vardenafil (Lavitra) Products",
    description: "Fast-acting ED solution for on-demand results (20mg - 60mg). Quick onset for reliable performance.",
    subtitle: "Rapid action formula"
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { id } = params
  const category = id.toLowerCase()
  
  // Check if category exists
  if (!categoryInfo[category as keyof typeof categoryInfo]) {
    notFound()
  }
  
  const categoryProducts = getProductsByCategory(category)
  const info = categoryInfo[category as keyof typeof categoryInfo]
  
  if (categoryProducts.length === 0) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Category Header */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm md:text-base">{info.subtitle}</span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 mb-4">{info.title}</h1>
            <p className="text-gray-600 text-lg">{info.description}</p>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
              <span>✓ FDA Approved</span>
              <span>✓ Discreet Packaging</span>
              <span>✓ Fast Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
              Available Products ({categoryProducts.length})
            </h2>
            <p className="text-gray-600">Choose the strength that's right for you</p>
          </div>
          
          <FeaturedProducts products={categoryProducts} />
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  return [
    { id: 'sildenafil' },
    { id: 'tadalafil' },
    { id: 'vardenafil' },
  ]
}
