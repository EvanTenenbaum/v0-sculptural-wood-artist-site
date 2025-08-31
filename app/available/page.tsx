import { Header } from "@/components/header"
import { AvailableGrid } from "@/components/available-grid"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import availableWorks from "@/data/available.json"

export default function AvailablePage() {
  const shopAllUrl = process.env.SHOP_ALL_URL || "#"

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl font-light mb-6">Available Works</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg mb-8">
              Functional pieces crafted with the same attention to detail as our sculptural works. Each utilitarian
              object celebrates the natural beauty of California wood.
            </p>
            {shopAllUrl !== "#" && (
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href={shopAllUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  Shop All
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            )}
          </div>
          <AvailableGrid availableWorks={availableWorks} />
        </div>
      </div>
    </main>
  )
}
