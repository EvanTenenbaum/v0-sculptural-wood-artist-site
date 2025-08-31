import { Header } from "@/components/header"

export default function WritingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl font-light mb-6">Writing</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              Reflections on craft, material, and the relationship between maker and wood.
            </p>
          </div>

          <div className="space-y-12">
            <article className="border-b border-border pb-8">
              <h2 className="font-serif text-2xl font-medium mb-4">On Working with Redwood</h2>
              <p className="text-muted-foreground text-sm mb-4">January 2024</p>
              <div className="prose prose-lg max-w-none leading-relaxed space-y-4">
                <p>
                  There is something profound about working with a tree that has lived for centuries. Each ring tells a
                  story of seasons, of drought and abundance, of fire and recovery. When I hold a piece of coast
                  redwood, I am holding time itself.
                </p>
                <p>
                  The wood speaks first through its grain—long, straight lines that flow like water, interrupted
                  occasionally by the swirling patterns where a branch once grew. These interruptions are not flaws but
                  gifts, moments where the tree's history becomes visible in the finished piece.
                </p>
                <p>
                  My role is not to impose form but to listen, to find the vessel or sculpture that already exists
                  within the wood and help it emerge. This requires patience, respect, and a willingness to let the
                  material guide the process as much as my own vision.
                </p>
              </div>
            </article>

            <article className="border-b border-border pb-8">
              <h2 className="font-serif text-2xl font-medium mb-4">The Ethics of Sourcing</h2>
              <p className="text-muted-foreground text-sm mb-4">November 2023</p>
              <div className="prose prose-lg max-w-none leading-relaxed space-y-4">
                <p>
                  Every piece of wood I work with comes from somewhere. It grew in a specific place, under particular
                  conditions, as part of an ecosystem that extends far beyond the individual tree. Understanding this
                  connection is essential to my practice.
                </p>
                <p>
                  I source exclusively from trees that have fallen naturally or been removed for safety reasons. No tree
                  is cut specifically for my work. This approach requires patience—sometimes waiting years for the right
                  piece—but it ensures that my art contributes to rather than detracts from the health of our forests.
                </p>
              </div>
            </article>

            <article>
              <h2 className="font-serif text-2xl font-medium mb-4">Modern Heirlooms</h2>
              <p className="text-muted-foreground text-sm mb-4">September 2023</p>
              <div className="prose prose-lg max-w-none leading-relaxed space-y-4">
                <p>
                  What makes an object worthy of being passed down through generations? In our age of mass production
                  and planned obsolescence, the concept of the heirloom has become almost foreign. Yet I believe there
                  is still a place for objects made to last, to be treasured, to carry stories forward.
                </p>
                <p>
                  Each piece I create is intended to be a modern heirloom—something that will grow more beautiful with
                  age, that will develop its own patina of use and care, that will connect future generations to the
                  natural world through the warmth and grain of wood.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  )
}
