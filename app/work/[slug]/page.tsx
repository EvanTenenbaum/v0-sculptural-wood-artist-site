import { notFound } from "next/navigation"
import { ArtworkDetail } from "@/components/artwork-detail"
import { Header } from "@/components/header"
import artworks from "@/data/artworks.json"

interface ArtworkPageProps {
  params: {
    slug: string
  }
}

export default function ArtworkPage({ params }: ArtworkPageProps) {
  const artwork = artworks.find((work) => work.slug === params.slug)

  if (!artwork) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24">
        <ArtworkDetail artwork={artwork} />
      </div>
    </main>
  )
}

export function generateStaticParams() {
  return artworks.map((artwork) => ({
    slug: artwork.slug,
  }))
}
