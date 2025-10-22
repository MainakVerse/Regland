import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Plus } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="container mx-auto max-w-screen-xl px-4 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-serif text-4xl font-bold leading-tight text-balance md:text-6xl lg:text-7xl">
          Regressions. Reimagined.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          50 classic regression models — explained as stories. Learn the idea, see the math, run the code, and visualize
          results. Open-source. Zero cost.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/regressions">
              Explore Regressions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/create">
              <Plus className="mr-2 h-4 w-4" />
              Create a Model
            </Link>
          </Button>
          <Button size="lg" variant="ghost" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Star on GitHub
            </a>
          </Button>
        </div>

        <div className="relative mt-16 h-32 overflow-hidden md:h-40">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,60 C150,90 350,30 600,60 C850,90 1050,30 1200,60 L1200,120 L0,120 Z"
              fill="#4da6ff"
              opacity="0.3"
            />
            <path
              d="M0,70 C200,100 400,40 600,70 C800,100 1000,40 1200,70 L1200,120 L0,120 Z"
              fill="#4da6ff"
              opacity="0.2"
            />
            <path
              d="M0,80 C250,110 450,50 600,80 C750,110 950,50 1200,80 L1200,120 L0,120 Z"
              fill="#4da6ff"
              opacity="0.15"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
