import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RegressionGrid } from "@/components/regression-grid"
import { RegressionFilters } from "@/components/regression-filters"

export default function RegressionsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        {/* Header */}
        <section className="border-b border-border bg-secondary/30 py-12">
          <div className="container mx-auto max-w-screen-xl px-4">
            <h1 className="font-serif text-4xl font-bold leading-tight text-balance md:text-5xl">
              All Regression Models
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Explore 50 regression models organized by category and difficulty. Each model includes a real-world
              problem, mathematical intuition, working code, and interactive visualizations.
            </p>
          </div>
        </section>

        {/* Filters and Grid */}
        <section className="py-12">
          <div className="container mx-auto max-w-screen-xl px-4">
            <RegressionFilters />
            <RegressionGrid />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
