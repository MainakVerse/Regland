const steps = [
  {
    title: "Discover",
    description: "Browse 50+ regression models organized by complexity and use case.",
  },
  {
    title: "Read the Story",
    description: "Meet a persona with a real problem that needs solving with data.",
  },
  {
    title: "Understand the Logic",
    description: "Learn the mathematical intuition with clear explanations and diagrams.",
  },
  {
    title: "Run the Code",
    description: "Execute working examples in NumPy or scikit-learn, copy and adapt.",
  },
  {
    title: "Visualize Results",
    description: "Interact with graphs, adjust parameters, and see the model in action.",
  },
]

export function Timeline() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Your Learning Journey</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From curiosity to mastery in five simple steps.
          </p>
        </div>

        <div className="mt-16">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-border" />
              <div className="relative grid grid-cols-5 gap-4">
                {steps.map((step, index) => (
                  <div key={step.title} className="relative flex flex-col">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground">
                        <span className="font-semibold">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex h-full min-h-[180px] flex-col rounded-lg border border-border bg-card p-4 text-center shadow-sm">
                      <h3 className="mb-2 font-semibold">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline - Stacked vertically */}
          <div className="md:hidden">
            <div className="relative space-y-8 pl-8">
              <div className="absolute left-3 top-0 h-full w-0.5 bg-border" />
              {steps.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="absolute -left-8 flex h-6 w-6 items-center justify-center rounded-full border-4 border-background bg-primary text-xs font-semibold text-primary-foreground">
                    {index + 1}
                  </div>
                  <div className="flex min-h-[140px] flex-col rounded-lg border border-border bg-card p-4 shadow-sm">
                    <h3 className="mb-2 font-semibold">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
