import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const regressions = [
  {
    slug: "linear-regression",
    title: "Linear Regression",
    description: "The foundation of predictive modeling using ordinary least squares.",
    category: "Basic",
    difficulty: "Beginner",
  },
  {
    slug: "ridge-regression",
    title: "Ridge Regression",
    description: "L2 regularization to prevent overfitting and improve generalization.",
    category: "Regularization",
    difficulty: "Intermediate",
  },
  {
    slug: "lasso-regression",
    title: "Lasso Regression",
    description: "L1 regularization for feature selection and sparse models.",
    category: "Regularization",
    difficulty: "Intermediate",
  },
  {
    slug: "elastic-net",
    title: "Elastic Net",
    description: "Combines L1 and L2 regularization for balanced feature selection.",
    category: "Regularization",
    difficulty: "Intermediate",
  },
  {
    slug: "polynomial-regression",
    title: "Polynomial Regression",
    description: "Model non-linear relationships using polynomial features.",
    category: "Non-Linear",
    difficulty: "Beginner",
  },
  {
    slug: "logistic-regression",
    title: "Logistic Regression",
    description: "Binary classification using the logistic sigmoid function.",
    category: "Generalized",
    difficulty: "Beginner",
  },
  {
    slug: "poisson-regression",
    title: "Poisson Regression",
    description: "Model count data and rates using the Poisson distribution.",
    category: "Generalized",
    difficulty: "Intermediate",
  },
  {
    slug: "quantile-regression",
    title: "Quantile Regression",
    description: "Estimate conditional quantiles instead of conditional means.",
    category: "Basic",
    difficulty: "Intermediate",
  },
  {
    slug: "robust-regression",
    title: "Robust Regression",
    description: "Resistant to outliers using alternative loss functions.",
    category: "Basic",
    difficulty: "Intermediate",
  },
  {
    slug: "bayesian-regression",
    title: "Bayesian Linear Regression",
    description: "Probabilistic approach with uncertainty quantification.",
    category: "Bayesian",
    difficulty: "Advanced",
  },
  {
    slug: "gaussian-process",
    title: "Gaussian Process Regression",
    description: "Non-parametric Bayesian approach for flexible modeling.",
    category: "Bayesian",
    difficulty: "Advanced",
  },
  {
    slug: "arima",
    title: "ARIMA",
    description: "Autoregressive integrated moving average for time series.",
    category: "Time Series",
    difficulty: "Advanced",
  },
]

export function RegressionGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {regressions.map((regression) => (
        <Link key={regression.slug} href={`/regressions/${regression.slug}`}>
          <Card className="group h-full p-6 transition-all hover:border-primary hover:shadow-md">
            <div className="mb-4 flex items-center gap-2">
              <Badge variant="secondary">{regression.category}</Badge>
              <Badge variant="outline">{regression.difficulty}</Badge>
            </div>
            <h3 className="mb-2 font-serif text-xl font-semibold group-hover:text-primary">{regression.title}</h3>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{regression.description}</p>
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}
