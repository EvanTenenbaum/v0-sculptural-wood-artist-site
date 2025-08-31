import Image from "next/image"
import Link from "next/link"

const featuredArtworks = [
  {
    slug: "redwood-vessel-01",
    title: "Redwood Vessel",
    species: "Coast Redwood",
    location: "Mendocino County",
    image: "/sculptural-redwood-wood-vessel--organic-form--natu.png",
  },
  {
    slug: "oak-sculpture-02",
    title: "Oak Embrace",
    species: "Valley Oak",
    location: "Sonoma County",
    image: "/sculptural-oak-wood-piece--flowing-curves--handcra.png",
  },
  {
    slug: "walnut-form-03",
    title: "Walnut Flow",
    species: "California Walnut",
    location: "Napa Valley",
    image: "/sculptural-walnut-wood-form--smooth-finish--artist.png",
  },
]

export function FeaturedWorks() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-light mb-4">Recent Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each piece celebrates the natural beauty of California wood, transformed through careful craftsmanship into
            lasting forms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtworks.map((artwork) => (
            <Link key={artwork.slug} href={`/work/${artwork.slug}`} className="group artwork-hover">
              <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-[4/3] relative">
                  <Image src={artwork.image || "/placeholder.svg"} alt={artwork.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-medium mb-2">{artwork.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {artwork.species} • {artwork.location}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <Link
            href="/work"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-accent transition-colors mr-4"
          >
            View All Works
          </Link>
          <Link
            href="/available"
            className="inline-flex items-center px-8 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Shop Utilitarian Pieces
          </Link>
        </div>
      </div>
    </section>
  )
}
