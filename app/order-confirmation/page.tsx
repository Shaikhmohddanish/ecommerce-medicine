import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Package, ArrowRight } from "lucide-react"

export default function OrderConfirmationPage() {
  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0")}`

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 md:h-12 md:w-12 text-green-600" />
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mb-2">Thank You for Your Order!</h1>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Your order has been received and is now being processed. We'll send you a confirmation email shortly.
          </p>

          <div className="bg-gray-50 rounded-lg p-4 md:p-6 mb-8 inline-block">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Package className="h-5 w-5 text-primary" />
              <span className="font-semibold">Order Number:</span>
            </div>
            <p className="text-xl font-mono">{orderNumber}</p>
          </div>

          <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
            <h3 className="font-semibold text-lg">What's Next?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  1
                </div>
                <p className="text-sm">
                  <span className="font-medium">Order Processing:</span> We're preparing your items for shipment.
                </p>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  2
                </div>
                <p className="text-sm">
                  <span className="font-medium">Shipping:</span> Once your order ships, we'll send you a tracking
                  number.
                </p>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  3
                </div>
                <p className="text-sm">
                  <span className="font-medium">Delivery:</span> Your package will arrive within 3-5 business days.
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="/products">Continue Shopping</Link>
            </Button>
            <Button asChild>
              <Link href="/account/orders" className="flex items-center">
                Track Your Order <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
