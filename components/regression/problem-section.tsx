import { Card } from "@/components/ui/card"
import { User, Target, TrendingUp } from "lucide-react"

interface ProblemSectionProps {
  slug: string
}

export function ProblemSection({ slug }: ProblemSectionProps) {
  // This would typically come from a database or CMS
  const content = {
    persona: {
      name: "Sarah Chen",
      role: "Real Estate Analyst",
      challenge: "Predicting house prices based on features like square footage, location, and number of bedrooms.",
    },
    problem:
      "Sarah works for a real estate company and needs to estimate property values for new listings. She has historical data on thousands of homes with their features and sale prices. How can she build a model to predict prices for new properties?",
    realWorld: [
      "Pricing new property listings accurately",
      "Identifying undervalued investment opportunities",
      "Understanding which features drive property value",
      "Making data-driven recommendations to clients",
    ],
    whyItMatters:
      "Linear regression is the foundation of predictive modeling. It helps us understand relationships between variables and make informed predictions. In real estate, accurate price predictions can mean the difference between a good deal and a missed opportunity.",
  }

  return (
    <div className="space-y-8">
      {/* Persona Card */}
      <Card className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <User className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold">Meet {content.persona.name}</h2>
            <p className="mt-1 text-muted-foreground">{content.persona.role}</p>
            <p className="mt-3 leading-relaxed">{content.persona.challenge}</p>
          </div>
        </div>
      </Card>

      {/* Problem Description */}
      <div>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Target className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold">The Problem</h2>
        </div>
        <Card className="p-6">
          <p className="leading-relaxed">{content.problem}</p>
        </Card>
      </div>

      {/* Real-World Applications */}
      <div>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold">Real-World Applications</h2>
        </div>
        <Card className="p-6">
          <ul className="space-y-3">
            {content.realWorld.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Why It Matters */}
      <Card className="border-primary/20 bg-primary/5 p-6">
        <h3 className="mb-3 font-semibold">Why This Matters</h3>
        <p className="leading-relaxed text-muted-foreground">{content.whyItMatters}</p>
      </Card>
    </div>
  )
}
