import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/sculptural-wood-art-piece-in-natural-light--northe.png"
          alt="Featured sculptural wood artwork"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 text-center text-white max-w-2xl px-6">
        <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 gallery-fade">Modern Heirlooms</h1>
        <p className="text-lg md:text-xl font-light leading-relaxed gallery-fade">
          Sculptural wood pieces handcrafted from ethically sourced materials. Rooted in Northern California.
        </p>
      </div>
    </section>
  )
}
