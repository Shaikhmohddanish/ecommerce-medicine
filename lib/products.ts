import type { Product } from "./types"

export const products: Product[] = [
  // SILDENAFIL
  {
    id: "sildenafil-25",
    name: "Sildenafil 25mg",
    description: "Mild dose for beginners. Reliable and effective in improving blood flow for better performance.",
    price: 100, // Handled in variations/pricing table
    image: "/images/sildenafil-25.webp",
    images: ["/images/sildenafil-25.webp"],
    variations: ["100 pills", "200 pills", "300 pills", "500 pills"],
    category: "sildenafil",
    featured: true,
    inStock: true,
    rating: 4.8,
  },
  {
    id: "sildenafil-50",
    name: "Sildenafil 50mg",
    description: "Popular option for treating ED. Delivers proven results and improved intimacy.",
    price: 100,
    image: "/images/sildenafil-50.webp",
    images: ["/images/sildenafil-50.webp"],
    variations: ["100 pills", "200 pills", "300 pills", "500 pills"],
    category: "sildenafil",
    featured: true,
    inStock: true,
    rating: 4.9,
  },
  {
    id: "sildenafil-100",
    name: "Sildenafil 100mg",
    description: "Maximum strength for those needing stronger support. Trusted by millions worldwide.",
    price: 100,
    image: "/images/sildenafil-100.webp",
    images: ["/images/sildenafil-100.webp"],
    variations: ["100 pills", "200 pills", "300 pills", "500 pills"],
    category: "sildenafil",
    featured: true,
    inStock: true,
    rating: 5.0,
  },
  {
    id: "sildenafil-120",
    name: "Sildenafil 120mg",
    description: "Extra strong formula for optimal performance. Take your confidence to the next level.",
    price: 100,
    image: "/images/sildenafil-120.webp",
    images: ["/images/sildenafil-120.webp"],
    variations: ["100 pills", "200 pills", "300 pills", "500 pills"],
    category: "sildenafil",
    featured: false,
    inStock: true,
    rating: 4.7,
  },
  {
    id: "sildenafil-150",
    name: "Sildenafil 150mg",
    description: "High dose for advanced support. Ideal for those seeking potent, lasting results.",
    price: 100,
    image: "/images/sildenafil-150.webp",
    images: ["/images/sildenafil-150.webp"],
    variations: ["100 pills", "200 pills", "300 pills", "500 pills"],
    category: "sildenafil",
    featured: false,
    inStock: true,
    rating: 4.9,
  },
  {
    id: "sildenafil-200",
    name: "Sildenafil 200mg",
    description: "Our strongest Sildenafil. For those who need reliable, top-tier performance.",
    price: 100,
    image: "/images/sildenafil-200.webp",
    images: ["/images/sildenafil-200.webp"],
    variations: ["100 pills", "200 pills", "300 pills", "500 pills"],
    category: "sildenafil",
    featured: false,
    inStock: true,
    rating: 4.8,
  },

  // TADALAFIL
  {
    id: "calis-20",
    name: "Tadalafil 20mg",
    description: "Enjoy up to 36 hours of effectiveness with our most popular daily option.",
    price: 100,
    image: "/images/calis-20.webp",
    images: ["/images/calis-20.webp"],
    variations: ["100 pills", "200 pills", "300 pills", "500 pills"],
    category: "tadalafil",
    featured: true,
    inStock: true,
    rating: 4.9,
  },
  {
    id: "calis-40",
    name: "Tadalafil 40mg",
    description: "Double the strength for men who want even more reliable results.",
    price: 100,
    image: "/images/calis-40.webp",
    images: ["/images/calis-40.webp"],
    variations: ["100 pills", "200 pills", "300 pills", "500 pills"],
    category: "tadalafil",
    featured: false,
    inStock: true,
    rating: 4.8,
  },
  {
    id: "calis-60",
    name: "Tadalafil 60mg",
    description: "Strong support and longer-lasting effects for complete peace of mind.",
    price: 100,
    image: "/images/calis-60.webp",
    images: ["/images/calis-60.webp"],
    variations: ["100 pills", "200 pills", "300 pills", "500 pills"],
    category: "tadalafil",
    featured: false,
    inStock: true,
    rating: 4.8,
  },
  {
    id: "calis-80",
    name: "Tadalafil 80mg",
    description: "Our highest strength for enhanced performance and lasting confidence.",
    price: 100,
    image: "/images/calis-80.webp",
    images: ["/images/calis-80.webp"],
    variations: ["100 pills", "200 pills", "300 pills", "500 pills"],
    category: "tadalafil",
    featured: false,
    inStock: true,
    rating: 4.8,
  },

  // VARDENAFIL
  {
    id: "lavitra-20",
    name: "Vardenafil 20mg",
    description: "Fast-acting ED solution for on-demand results and spontaneous moments.",
    price: 100,
    image: "/images/lavitra-20.webp",
    images: ["/images/lavitra-20.webp"],
    variations: ["100 pills", "200 pills", "300 pills", "500 pills"],
    category: "vardenafil",
    featured: true,
    inStock: true,
    rating: 4.8,
  },
  {
    id: "lavitra-40",
    name: "Vardenafil 40mg",
    description: "Increased potency for those needing a stronger ED solution.",
    price: 100,
    image: "/images/lavitra-40.webp",
    images: ["/images/lavitra-40.webp"],
    variations: ["100 pills", "200 pills", "300 pills", "500 pills"],
    category: "vardenafil",
    featured: false,
    inStock: true,
    rating: 4.8,
  },
  {
    id: "lavitra-60",
    name: "Vardenafil 60mg",
    description: "Extra-strength dose for reliable, powerful performance when it matters.",
    price: 100,
    image: "/images/lavitra-60.webp",
    images: ["/images/lavitra-60.webp"],
    variations: ["100 pills", "200 pills", "300 pills", "500 pills"],
    category: "vardenafil",
    featured: false,
    inStock: true,
    rating: 4.7,
  },
]


export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}

export function getRelatedProducts(id: string): Product[] {
  const product = products.find((product) => product.id === id)
  if (!product) return []

  return products.filter((p) => p.category === product.category && p.id !== id)
}
