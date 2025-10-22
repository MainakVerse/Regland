import { Card } from "@/components/ui/card"
import { Lightbulb, Brain, Calculator } from "lucide-react"

interface LogicSectionProps {
  slug: string
}

export function LogicSection({ slug }: LogicSectionProps) {
  return (
    <div className="space-y-8">
      {/* Intuition */}
      <div>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Lightbulb className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold">The Intuition</h2>
        </div>
        <Card className="p-6">
          <p className="leading-relaxed">
            Imagine drawing a line through a scatter plot of data points. Linear regression finds the "best fit" line
            that minimizes the distance between the line and all the points. This line represents the relationship
            between your input features (like square footage) and your target variable (like price).
          </p>
          <div className="mt-6 rounded-lg bg-secondary p-4">
            <p className="text-sm font-medium">Key Insight</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The "best fit" is determined by minimizing the sum of squared errors — the vertical distances between each
              point and the line. This is why it's also called "Ordinary Least Squares" (OLS) regression.
            </p>
          </div>
        </Card>
      </div>

      {/* Mathematical Foundation */}
      <div>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Calculator className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold">The Mathematics</h2>
        </div>
        <Card className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 font-semibold">The Model</h3>
              <div className="rounded-lg bg-secondary p-4 font-mono text-sm">
                <p>y = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ + ε</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Where y is the predicted value, β₀ is the intercept, β₁...βₙ are coefficients, x₁...xₙ are features, and
                ε is the error term.
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-semibold">The Objective</h3>
              <div className="rounded-lg bg-secondary p-4 font-mono text-sm">
                <p>minimize: Σ(yᵢ - ŷᵢ)²</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We minimize the sum of squared differences between actual values (yᵢ) and predicted values (ŷᵢ).
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-semibold">The Solution</h3>
              <div className="rounded-lg bg-secondary p-4 font-mono text-sm">
                <p>β = (XᵀX)⁻¹Xᵀy</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The optimal coefficients can be calculated using this closed-form solution, where X is the feature
                matrix and y is the target vector.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Assumptions */}
      <div>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Brain className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold">Key Assumptions</h2>
        </div>
        <Card className="p-6">
          <ul className="space-y-4">
            {[
              {
                title: "Linearity",
                description: "The relationship between features and target is linear",
              },
              {
                title: "Independence",
                description: "Observations are independent of each other",
              },
              {
                title: "Homoscedasticity",
                description: "Constant variance of errors across all levels of features",
              },
              {
                title: "Normality",
                description: "Errors are normally distributed",
              },
            ].map((assumption, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{assumption.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{assumption.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  )
}
