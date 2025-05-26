"use client"

import React from "react"

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-primary">Terms &amp; Conditions</h1>
      <div className="space-y-6 text-sm md:text-base">
        <p>
          Welcome to our ecommerce store. By accessing or using our website, you agree to be bound by these Terms &amp; Conditions. Please read them carefully before making a purchase.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">1. General</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>All products and prices are subject to change without notice.</li>
          <li>We reserve the right to refuse service to anyone for any reason at any time.</li>
          <li>All content on this site is the property of the store and may not be used without permission.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">2. Orders &amp; Payments</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Orders are subject to acceptance and availability.</li>
          <li>Payment must be made in full before products are shipped.</li>
          <li>We accept major credit/debit cards and other payment methods as listed at checkout.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Returns &amp; Refunds</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Returns are accepted within 30 days of delivery. Products must be unused and in original packaging.</li>
          <li>Refunds will be processed to the original payment method after inspection.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">4. Limitation of Liability</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>We are not liable for any indirect, incidental, or consequential damages arising from the use of our products or website.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes to Terms</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>We may update these Terms &amp; Conditions at any time. Please review this page periodically for changes.</li>
        </ul>
        <p className="mt-8">If you have any questions, please contact us via the information on our Contact page.</p>
      </div>
    </div>
  )
}
