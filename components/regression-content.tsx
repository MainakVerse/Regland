"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Lightbulb, Code2, LineChart, Github, Share2 } from "lucide-react"
import { ProblemSection } from "@/components/regression/problem-section"
import { LogicSection } from "@/components/regression/logic-section"
import { CodeSection } from "@/components/regression/code-section"
import { VisualizationSection } from "@/components/regression/visualization-section"

interface RegressionContentProps {
  regression: {
    title: string
    subtitle: string
    description: string
    category: string
    difficulty: string
  }
  slug: string
}

export function RegressionContent({ regression, slug }: RegressionContentProps) {
  const [activeTab, setActiveTab] = useState("problem")

  return (
    <main className="pb-16">
      {/* Header Section */}
      <section className="border-b border-border bg-secondary/30 py-12">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground">
              Home
            </a>
            <span>/</span>
            <a href="/regressions" className="hover:text-foreground">
              Regressions
            </a>
            <span>/</span>
            <span className="text-foreground">{regression.title}</span>
          </div>

          <div className="mt-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary">{regression.category}</Badge>
              <Badge variant="outline">{regression.difficulty}</Badge>
            </div>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-balance md:text-5xl">
              {regression.title}
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">{regression.subtitle}</p>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{regression.description}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Github className="mr-2 h-4 w-4" />
                View Source
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-12">
        <div className="container mx-auto max-w-screen-xl px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="problem" className="gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Problem</span>
              </TabsTrigger>
              <TabsTrigger value="logic" className="gap-2">
                <Lightbulb className="h-4 w-4" />
                <span className="hidden sm:inline">Logic</span>
              </TabsTrigger>
              <TabsTrigger value="code" className="gap-2">
                <Code2 className="h-4 w-4" />
                <span className="hidden sm:inline">Code</span>
              </TabsTrigger>
              <TabsTrigger value="visualization" className="gap-2">
                <LineChart className="h-4 w-4" />
                <span className="hidden sm:inline">Visualization</span>
              </TabsTrigger>
            </TabsList>

            <div className="mt-8">
              <TabsContent value="problem" className="mt-0">
                <ProblemSection slug={slug} />
              </TabsContent>

              <TabsContent value="logic" className="mt-0">
                <LogicSection slug={slug} />
              </TabsContent>

              <TabsContent value="code" className="mt-0">
                <CodeSection slug={slug} />
              </TabsContent>

              <TabsContent value="visualization" className="mt-0">
                <VisualizationSection slug={slug} />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
