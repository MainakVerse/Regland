import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { BookOpen, Code2, Users, Heart } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="border-b border-border bg-secondary/30 py-12">
          <div className="container mx-auto max-w-screen-xl px-4">
            <h1 className="font-serif text-4xl font-bold leading-tight text-balance md:text-5xl">Documentation</h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Learn how to use the platform, contribute new models, and understand the project structure.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="grid gap-6 md:grid-cols-2">
              <Link href="/docs/getting-started">
                <Card className="group h-full p-6 transition-all hover:border-primary hover:shadow-md">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="mb-2 text-xl font-semibold group-hover:text-primary">Getting Started</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Learn how to navigate the platform and make the most of each regression model.
                  </p>
                </Card>
              </Link>

              <Link href="/docs/contributing">
                <Card className="group h-full p-6 transition-all hover:border-primary hover:shadow-md">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="mb-2 text-xl font-semibold group-hover:text-primary">Contributing</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Add new regression models, improve documentation, or fix bugs. All contributions welcome.
                  </p>
                </Card>
              </Link>

              <Link href="/docs/api">
                <Card className="group h-full p-6 transition-all hover:border-primary hover:shadow-md">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="mb-2 text-xl font-semibold group-hover:text-primary">API Reference</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Technical documentation for developers who want to integrate or extend the platform.
                  </p>
                </Card>
              </Link>

              <Link href="/docs/support">
                <Card className="group h-full p-6 transition-all hover:border-primary hover:shadow-md">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="mb-2 text-xl font-semibold group-hover:text-primary">Support</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Get help, report issues, or join the community discussion on GitHub.
                  </p>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
