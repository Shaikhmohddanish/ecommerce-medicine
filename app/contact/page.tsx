"use client";

import React from "react";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-primary">Contact Us</h1>
      <div className="space-y-6 text-sm md:text-base">
        <p>
          Have a question or need help? Fill out the form below and our team will
          get back to you as soon as possible.
        </p>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded font-semibold hover:bg-primary/90 transition"
          >
            Send Message
          </button>
        </form>
        <div className="pt-6 border-t mt-8">
          <p className="text-xs text-gray-500">
            You can also reach us at{" "}
            <a
              href="mailto:support@example.com"
              className="text-primary underline"
            >
              support@example.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
