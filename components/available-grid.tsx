import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface AvailableWork {
  title: string
  species: string
  location: string
  dimensions: string
  image: string
  externalLink: string
}

interface AvailableGridProps {
  availableWorks: AvailableWork[]
}

export function AvailableGrid({ availableWorks }: AvailableGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {availableWorks.map((work, index) => (
        <div key={index} className="bg-card rounded-lg overflow-hidden shadow-sm artwork-hover">
          <div className="aspect-[4/3] relative">
            <Image
              src={work.image || "/placeholder.svg"}
              alt={`${work.title} - ${work.species} from ${work.location}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="font-serif text-xl font-medium mb-2">{work.title}</h3>
            <p className="text-muted-foreground text-sm mb-1">
              {work.species} • {work.location}
            </p>
            <p className="text-muted-foreground text-xs mb-4">{work.dimensions}</p>
            <Button asChild className="w-full bg-primary hover:bg-accent text-primary-foreground">
              <a
                href={work.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              >
                View & Purchase
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
