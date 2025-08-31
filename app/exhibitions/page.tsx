import { Header } from "@/components/header"

export default function ExhibitionsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl font-light mb-6">Exhibitions</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              Selected exhibitions and shows featuring sculptural wood works.
            </p>
          </div>

          <div className="space-y-12">
            <div className="border-l-2 border-accent pl-8">
              <h2 className="font-serif text-2xl font-medium mb-2">Upcoming</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl mb-1">Northern California Craft Fair</h3>
                  <p className="text-muted-foreground text-sm mb-2">Petaluma, CA • March 2024</p>
                  <p className="leading-relaxed">
                    Showcasing new sculptural vessels alongside functional pieces at this annual celebration of regional
                    craftsmanship.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-muted pl-8">
              <h2 className="font-serif text-2xl font-medium mb-2">Past Exhibitions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl mb-1">Wood & Form</h3>
                  <p className="text-muted-foreground text-sm mb-2">Mendocino Art Center • October 2023</p>
                  <p className="leading-relaxed">
                    Group exhibition exploring contemporary approaches to wood as sculptural medium. Featured three
                    large-scale vessels.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-1">Artisans of the Coast</h3>
                  <p className="text-muted-foreground text-sm mb-2">Sebastopol Center for the Arts • June 2023</p>
                  <p className="leading-relaxed">
                    Solo exhibition featuring twelve sculptural pieces created from locally sourced California woods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
