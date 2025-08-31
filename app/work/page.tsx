import { ArtworkGrid } from "@/components/artwork-grid"
import { Header } from "@/components/header"
import artworks from "@/data/artworks.json"

export default function WorkPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl font-light mb-6">Works</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              Sculptural pieces that celebrate the natural beauty and character of California wood. Each work is unique,
              handcrafted with respect for the material and its origins.
            </p>
          </div>
          <ArtworkGrid artworks={artworks} />
        </div>
      </div>
    </main>
  )
}
