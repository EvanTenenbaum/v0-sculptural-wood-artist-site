import Image from "next/image"
import { Header } from "@/components/header"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h1 className="font-serif text-5xl font-light mb-6">About</h1>
                <div className="prose prose-lg max-w-none leading-relaxed space-y-6 text-foreground">
                  <p>
                    I am a sculptural wood artist based in Northern California, where I create contemporary vessels and
                    forms from locally sourced materials. My work explores the intersection of traditional craftsmanship
                    and modern aesthetic sensibilities.
                  </p>
                  <p>
                    Each piece begins with the wood itself—coast redwood, valley oak, California walnut—trees that have
                    fallen naturally or been removed for safety reasons. I believe in working with rather than against
                    the material, allowing the natural grain and character of the wood to guide the final form.
                  </p>
                  <p>
                    My studio practice is rooted in sustainability and respect for the natural world. Every piece is
                    handcrafted using traditional techniques, finished with natural oils and waxes, and designed to be a
                    lasting addition to its owner's life.
                  </p>
                  <p>
                    The work has been exhibited throughout Northern California and is held in private collections across
                    the United States. I also create functional pieces—cutting boards, serving vessels, and other
                    utilitarian objects—that bring the same attention to craft and material into everyday use.
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="font-serif text-2xl font-medium mb-4">Studio Practice</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Located in Mendocino County, California</p>
                  <p>Working exclusively with locally sourced, ethically harvested wood</p>
                  <p>Traditional hand tools and techniques</p>
                  <p>Natural finishes: tung oil, linseed oil, carnauba wax</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                <Image
                  src="/artist-portrait-evan-tenenbaum-in-studio-with.png"
                  alt="Evan Tenenbaum in his studio workspace"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="/woodworking-studio-tools-and-workspace-northe.png"
                  alt="Traditional woodworking tools and workspace"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
