import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getProductsByCategory } from "@/lib/products"

const categories = [
  {
    id: "sildenafil",
    title: "Sildenafil",
    description: "The original ED treatment with proven effectiveness",
    details: "Available in 25mg, 50mg, 100mg, 120mg, 150mg, and 200mg strengths",
    image: "/images/sildenafil-100.webp",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "tadalafil", 
    title: "Tadalafil (Calis)",
    description: "Long-lasting treatment with up to 36 hours of effectiveness",
    details: "Available in 20mg, 40mg, 60mg, and 80mg strengths",
    image: "/images/calis-20.webp",
    color: "from-green-500 to-green-600"
  },
  {
    id: "vardenafil",
    title: "Vardenafil (Lavitra)", 
    description: "Fast-acting solution for on-demand results",
    details: "Available in 20mg, 40mg, and 60mg strengths",
    image: "/images/lavitra-20.webp",
    color: "from-purple-500 to-purple-600"
  }
]

export default function CategoriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Product Categories
            </h1>
            <p className="text-gray-600 text-lg">
              Explore our range of FDA-approved ED medications. Choose the treatment that's right for you.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const productCount = getProductsByCategory(category.id).length
              return (
                <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`h-24 bg-gradient-to-r ${category.color}`} />
                  <CardHeader>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-4">{category.details}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">
                        {productCount} Products Available
                      </span>
                      <Button asChild size="sm">
                        <Link href={`/categories/${category.id}`}>
                          View Products
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Why Choose Our Products?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">FDA</span>
                </div>
                <h3 className="font-semibold mb-2">FDA Approved</h3>
                <p className="text-sm text-gray-600">All medications are FDA-approved and safe</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold">24h</span>
                </div>
                <h3 className="font-semibold mb-2">Fast Delivery</h3>
                <p className="text-sm text-gray-600">Quick and discreet shipping</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">🔒</span>
                </div>
                <h3 className="font-semibold mb-2">Private & Secure</h3>
                <p className="text-sm text-gray-600">Your privacy is our priority</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
