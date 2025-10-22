import { Button } from "@/components/ui/button"
import { Github, Star } from "lucide-react"

export function StarBanner() {
  return (
    <section className="border-y border-border bg-accent/50 py-16">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Star className="h-8 w-8 fill-primary text-primary" />
          </div>
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Star Us on GitHub</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            If this helps, give us a star on GitHub — it fuels contributors and keeps the project free.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                Star on GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                View Contributors
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">MIT License • Open Source • Community Driven</p>
        </div>
      </div>
    </section>
  )
}
