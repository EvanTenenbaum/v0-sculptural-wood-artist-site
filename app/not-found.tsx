import Link from "next/link"
import { Header } from "@/components/header"

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="font-serif text-6xl font-light mb-6">404</h1>
          <h2 className="font-serif text-2xl font-medium mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            The page you're looking for doesn't exist. Perhaps it was moved or the URL was mistyped.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-accent transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  )
}
