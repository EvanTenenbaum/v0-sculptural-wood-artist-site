"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { InquiryModal } from "@/components/inquiry-modal"

interface Artwork {
  slug: string
  title: string
  year: number
  species: string
  location: string
  dimensions: string
  finish: string
  status: "Available" | "Reserved" | "Sold"
  images: string[]
  alt: string
}

interface ArtworkDetailProps {
  artwork: Artwork
}

export function ArtworkDetail({ artwork }: ArtworkDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isInquiryOpen, setIsInquiryOpen] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % artwork.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + artwork.images.length) % artwork.images.length)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-accent text-accent-foreground"
      case "Reserved":
        return "bg-secondary text-secondary-foreground"
      case "Sold":
        return "bg-muted text-muted-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="container mx-auto px-6 max-w-6xl pb-16">
      <div className="mb-8">
        <Link
          href="/work"
          className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Works
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Carousel */}
        <div className="space-y-4">
          <div className="aspect-[4/3] relative bg-muted rounded-lg overflow-hidden">
            <Image
              src={artwork.images[currentImageIndex] || "/placeholder.svg"}
              alt={artwork.alt}
              fill
              className="object-cover"
              priority
            />
            {artwork.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Navigation */}
          {artwork.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto">
              {artwork.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                    index === currentImageIndex ? "border-accent" : "border-transparent"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${artwork.title} view ${index + 1}`}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Artwork Information */}
        <div className="space-y-8">
          <div>
            <div className="flex items-start justify-between mb-4">
              <h1 className="font-serif text-4xl font-light">{artwork.title}</h1>
              <Badge className={getStatusColor(artwork.status)}>{artwork.status}</Badge>
            </div>
            <p className="text-muted-foreground text-lg mb-2">{artwork.year}</p>
            <p className="text-foreground text-lg mb-1">
              {artwork.species} • {artwork.location}
            </p>
            <p className="text-muted-foreground mb-4">{artwork.dimensions}</p>
            <p className="text-muted-foreground">{artwork.finish}</p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={() => setIsInquiryOpen(true)}
              className="w-full bg-primary hover:bg-accent text-primary-foreground"
              size="lg"
            >
              Inquire
            </Button>
            <p className="text-sm text-muted-foreground text-center">
              Each work is unique. Shipping is arranged after purchase; the studio will confirm crating and transit.
            </p>
          </div>
        </div>
      </div>

      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} artworkTitle={artwork.title} />
    </div>
  )
}
