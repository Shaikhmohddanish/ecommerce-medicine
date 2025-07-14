"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingPhone() {
  const phoneNumber = "+1-888-419-4055"

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Pulse animation ring */}
      <div className="absolute inset-0 bg-green-600 rounded-full animate-ping opacity-30"></div>
      <Button
        onClick={handleCall}
        size="lg"
        className="relative h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-green-600 hover:bg-green-700 text-white border-2 border-white hover:scale-110"
        aria-label={`Call us at ${phoneNumber}`}
      >
        <Phone className="h-6 w-6" />
      </Button>
    </div>
  )
}
