"use client"

import React from "react"

export default function ShippingPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-primary">Shipping Policy</h1>
      <div className="space-y-6 text-sm md:text-base">
        <p>
          We strive to deliver your order as quickly and efficiently as possible. Please review our shipping policy below for details on shipping times, costs, and procedures.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Shipping Methods &amp; Costs</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>We offer standard and expedited shipping options at checkout.</li>
          <li>Shipping costs are calculated based on your order total and delivery address.</li>
          <li>Free shipping is available on orders over $50.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">2. Order Processing</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Orders are processed within 1-2 business days after payment is received.</li>
          <li>You will receive a confirmation email with tracking information once your order ships.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Delivery Times</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Standard shipping: 3-7 business days.</li>
          <li>Expedited shipping: 1-3 business days.</li>
          <li>Delivery times may vary based on location and carrier delays.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">4. International Shipping</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>We currently ship only within the United States.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">5. Lost or Damaged Packages</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>If your package is lost or arrives damaged, please contact us immediately for assistance.</li>
        </ul>
        <p className="mt-8">For any shipping-related questions, please reach out via our Contact page.</p>
      </div>
    </div>
  )
}
