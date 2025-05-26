"use client"

import React from "react"

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-primary">Privacy Policy</h1>
      <div className="space-y-6 text-sm md:text-base">
        <p>
          We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Personal information you provide during checkout (name, address, email, etc.).</li>
          <li>Order and payment details.</li>
          <li>Usage data such as pages visited and actions taken on our site.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To process and fulfill your orders.</li>
          <li>To communicate with you about your order or account.</li>
          <li>To improve our website and services.</li>
          <li>To comply with legal obligations.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Security</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>We implement industry-standard security measures to protect your data.</li>
          <li>Your payment information is encrypted and processed securely.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">4. Sharing Your Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>We do not sell or rent your personal information to third parties.</li>
          <li>We may share data with service providers only as necessary to fulfill your order.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes to This Policy</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>We may update this Privacy Policy from time to time. Please review this page periodically for changes.</li>
        </ul>
        <p className="mt-8">If you have any questions about our privacy practices, please contact us via the information on our Contact page.</p>
      </div>
    </div>
  )
}
