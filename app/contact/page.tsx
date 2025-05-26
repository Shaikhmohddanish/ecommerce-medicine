"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
    }, 1200);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2 text-primary">Contact Us</h1>
          <p className="text-base text-gray-600 mb-4">
            Have a question or need help? Fill out the form and our team will get
            back to you as soon as possible.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-sm">support@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm">123 Main St, New York, NY 10001</span>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <a
              href="mailto:support@example.com"
              className="inline-flex items-center px-3 py-2 bg-primary text-white rounded hover:bg-primary/90 transition text-xs font-semibold"
            >
              <Mail className="h-4 w-4 mr-1" /> Email Us
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center px-3 py-2 bg-primary/10 text-primary rounded hover:bg-primary/20 transition text-xs font-semibold"
            >
              <Phone className="h-4 w-4 mr-1" /> Call Us
            </a>
          </div>
        </div>
        {/* Contact Form */}
        <form
          className="bg-white rounded-xl shadow-lg p-8 space-y-6 animate-fade-in"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-medium mb-1 text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none transition"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium mb-1 text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none transition"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium mb-1 text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none transition"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-2 rounded font-semibold hover:bg-primary/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
            ) : (
              <Send className="h-4 w-4" />
            )}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
