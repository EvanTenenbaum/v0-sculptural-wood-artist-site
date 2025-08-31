import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedWorks } from "@/components/featured-works"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedWorks />
    </main>
  )
}
