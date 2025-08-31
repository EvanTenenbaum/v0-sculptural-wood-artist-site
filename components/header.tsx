"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl font-light tracking-wide text-foreground hover:text-accent transition-colors"
            onClick={closeMobileMenu}
          >
            Evan Tenenbaum
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/work" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Work
            </Link>
            <Link
              href="/exhibitions"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Exhibitions
            </Link>
            <Link href="/writing" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Writing
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              About
            </Link>
            <Link
              href="/available"
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
            >
              Available Works
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-border">
            <div className="flex flex-col space-y-4 pt-6">
              <Link
                href="/work"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                onClick={closeMobileMenu}
              >
                Work
              </Link>
              <Link
                href="/exhibitions"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                onClick={closeMobileMenu}
              >
                Exhibitions
              </Link>
              <Link
                href="/writing"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                onClick={closeMobileMenu}
              >
                Writing
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link
                href="/available"
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                onClick={closeMobileMenu}
              >
                Available Works
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
