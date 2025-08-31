import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

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

interface ArtworkGridProps {
  artworks: Artwork[]
}

export function ArtworkGrid({ artworks }: ArtworkGridProps) {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {artworks.map((artwork) => (
        <Link key={artwork.slug} href={`/work/${artwork.slug}`} className="group artwork-hover">
          <div className="bg-card rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-[4/3] relative">
              <Image
                src={artwork.images[0] || "/placeholder.svg"}
                alt={artwork.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4">
                <Badge className={getStatusColor(artwork.status)}>{artwork.status}</Badge>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl font-medium mb-2 group-hover:text-accent transition-colors">
                {artwork.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-1">
                {artwork.species} • {artwork.location}
              </p>
              <p className="text-muted-foreground text-xs">{artwork.dimensions}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
