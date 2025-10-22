import { BookOpen, Code2, LineChart, Lightbulb } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Problem Description",
    description: "Why this matters — real-world context and use cases explained through personas and stories.",
  },
  {
    icon: Lightbulb,
    title: "Logic of Regression",
    description: "The math & intuition — understand the core concepts with minimal equations and clear diagrams.",
  },
  {
    icon: Code2,
    title: "Code of Working",
    description: "Run it, tweak it — executable code with NumPy from scratch and scikit-learn implementations.",
  },
  {
    icon: LineChart,
    title: "Graphical Representation",
    description: "See it in motion — interactive visualizations with parameter controls and real datasets.",
  },
]

export function Overview() {
  return (
    <section className="border-t border-border bg-secondary/30 py-24">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Four Parts. One Complete Story.</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Each regression page is structured to guide you from problem to solution, combining narrative, theory,
            practice, and visualization.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
