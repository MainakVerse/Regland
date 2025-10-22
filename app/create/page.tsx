import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CreateModelForm } from "@/components/create-model-form"

export default function CreatePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        {/* Header */}
        <section className="border-b border-border bg-secondary/30 py-12">
          <div className="container mx-auto max-w-screen-xl px-4">
            <h1 className="font-serif text-4xl font-bold leading-tight text-balance md:text-5xl">
              Create Your Own Model
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Build and visualize your own regression model with custom data. Experiment with different parameters and
              see the results in real-time.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="py-12">
          <div className="container mx-auto max-w-screen-xl px-4">
            <CreateModelForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
