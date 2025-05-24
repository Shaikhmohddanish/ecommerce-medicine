"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Slide {
  id: number
  image: string
  title: string
  subtitle: string
  cta: string
  ctaLink: string
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/slider-1.png?height=800&width=1600", // Your actual medicine product image
    title: "Regain Your Confidence",
    subtitle: "Effective ED medications to help you enjoy intimate moments again.",
    cta: "Shop ED Solutions",
    ctaLink: "#featured-products",
  },
  {
    id: 2,
    image: "/slider-2.png?height=800&width=1600",
    title: "Trusted Treatments, Discreet Delivery",
    subtitle: "Safe and FDA-approved tablets delivered right to your door.",
    cta: "Browse Medicines",
    ctaLink: "#featured-products",
  },
]


export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToSlide = useCallback(
    (index: number) => {
      if (!isAnimating) {
        setIsAnimating(true)
        setCurrentSlide(index)
        setTimeout(() => {
          setIsAnimating(false)
        }, 500) // Match this with the CSS transition duration
      }
    },
    [isAnimating],
  )

  const nextSlide = useCallback(() => {
    const newIndex = (currentSlide + 1) % slides.length
    goToSlide(newIndex)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length
    goToSlide(newIndex)
  }, [currentSlide, goToSlide])

  // Auto-advance slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-500 ease-in-out",
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center z-20">
              <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-xl space-y-3 md:space-y-5 animate-fade-in-up">
                  <h2 className="text-sm md:text-base font-medium text-primary-foreground bg-primary inline-block px-3 py-1 rounded-full">
                    Featured
                  </h2>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">{slide.title}</h1>
                  <p className="text-base md:text-xl text-gray-200 max-w-md">{slide.subtitle}</p>
                  <div className="pt-2 md:pt-4">
                    <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                      <a href={slide.ctaLink}>{slide.cta}</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none",
              index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/80",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
