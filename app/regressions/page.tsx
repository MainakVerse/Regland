"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RegressionGrid } from "@/components/regression-grid"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"

export default function RegressionsPage() {
  const [searchQuery, setSearchQuery] = useState("")

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

            <div className="relative mt-8 max-w-2xl">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search regression models..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto max-w-screen-xl px-4">
            <RegressionGrid searchQuery={searchQuery} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
