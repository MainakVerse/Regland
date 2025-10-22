"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary">
              <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
            </div>
            <span className="font-serif text-xl font-bold">Regressions</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/regressions" className="text-sm font-medium transition-colors hover:text-primary">
            All Regressions
          </Link>
          <Link href="/create" className="text-sm font-medium transition-colors hover:text-primary">
            Create a Model
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </a>
          <Button size="sm">Star on GitHub</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <Link
              href="/regressions"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Regressions
            </Link>
            <Link
              href="/create"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Create a Model
            </Link>
            <Button size="sm" className="w-full">
              <Github className="mr-2 h-4 w-4" />
              Star on GitHub
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
