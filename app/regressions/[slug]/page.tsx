import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RegressionContent } from "@/components/regression-content"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const regressions = {
  "linear-regression": {
    title: "Linear Regression",
    subtitle: "The Foundation of Predictive Modeling",
    description:
      "Learn how to model relationships between variables using the simplest yet most powerful regression technique.",
    category: "Basic",
    difficulty: "Beginner",
  },
  "ridge-regression": {
    title: "Ridge Regression",
    subtitle: "L2 Regularization for Better Generalization",
    description: "Prevent overfitting by adding a penalty term to the loss function, creating more robust models.",
    category: "Regularization",
    difficulty: "Intermediate",
  },
  "lasso-regression": {
    title: "Lasso Regression",
    subtitle: "L1 Regularization for Feature Selection",
    description: "Automatically select important features while shrinking less important coefficients to zero.",
    category: "Regularization",
    difficulty: "Intermediate",
  },
  "elastic-net": {
    title: "Elastic Net",
    subtitle: "Combining L1 and L2 Regularization",
    description:
      "Get the best of both worlds with a hybrid approach that balances feature selection and coefficient shrinkage.",
    category: "Regularization",
    difficulty: "Intermediate",
  },
  "polynomial-regression": {
    title: "Polynomial Regression",
    subtitle: "Modeling Non-Linear Relationships",
    description: "Capture curved patterns in your data by transforming features into polynomial terms.",
    category: "Non-Linear",
    difficulty: "Beginner",
  },
  "logistic-regression": {
    title: "Logistic Regression",
    subtitle: "Binary Classification Made Simple",
    description: "Predict probabilities and classify outcomes using the logistic sigmoid function.",
    category: "Generalized",
    difficulty: "Beginner",
  },
  "poisson-regression": {
    title: "Poisson Regression",
    subtitle: "Modeling Count Data and Rates",
    description: "Perfect for analyzing event counts, customer arrivals, or any discrete occurrence data.",
    category: "Generalized",
    difficulty: "Intermediate",
  },
  "quantile-regression": {
    title: "Quantile Regression",
    subtitle: "Beyond the Mean",
    description: "Estimate any quantile of your response distribution, not just the average.",
    category: "Basic",
    difficulty: "Intermediate",
  },
  "robust-regression": {
    title: "Robust Regression",
    subtitle: "Resistant to Outliers",
    description: "Build models that aren't thrown off by extreme values or anomalous data points.",
    category: "Basic",
    difficulty: "Intermediate",
  },
  "bayesian-regression": {
    title: "Bayesian Linear Regression",
    subtitle: "Probabilistic Modeling with Uncertainty",
    description: "Incorporate prior knowledge and quantify uncertainty in your predictions.",
    category: "Bayesian",
    difficulty: "Advanced",
  },
  "gaussian-process": {
    title: "Gaussian Process Regression",
    subtitle: "Non-Parametric Bayesian Approach",
    description: "Flexible modeling with automatic uncertainty estimates and kernel-based learning.",
    category: "Bayesian",
    difficulty: "Advanced",
  },
  arima: {
    title: "ARIMA",
    subtitle: "Time Series Forecasting",
    description: "Model temporal dependencies with autoregressive integrated moving average techniques.",
    category: "Time Series",
    difficulty: "Advanced",
  },
}

export function generateStaticParams() {
  return Object.keys(regressions).map((slug) => ({
    slug,
  }))
}

export default function RegressionPage({ params }: { params: { slug: string } }) {
  const regression = regressions[params.slug as keyof typeof regressions]

  if (!regression) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <RegressionContent regression={regression} slug={params.slug} />
      <SiteFooter />
    </div>
  )
}
