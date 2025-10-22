"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Check, Play } from "lucide-react"

interface CodeSectionProps {
  slug: string
}

export function CodeSection({ slug }: CodeSectionProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const numpyCode = `import numpy as np

# Generate sample data
np.random.seed(42)
X = 2 * np.random.rand(100, 1)
y = 4 + 3 * X + np.random.randn(100, 1)

# Add bias term (column of ones)
X_b = np.c_[np.ones((100, 1)), X]

# Calculate optimal parameters using Normal Equation
# β = (X^T X)^(-1) X^T y
theta_best = np.linalg.inv(X_b.T.dot(X_b)).dot(X_b.T).dot(y)

print(f"Intercept: {theta_best[0][0]:.2f}")
print(f"Coefficient: {theta_best[1][0]:.2f}")

# Make predictions
X_new = np.array([[0], [2]])
X_new_b = np.c_[np.ones((2, 1)), X_new]
y_predict = X_new_b.dot(theta_best)

print(f"Predictions: {y_predict.flatten()}")`

  const sklearnCode = `from sklearn.linear_model import LinearRegression
import numpy as np

# Generate sample data
np.random.seed(42)
X = 2 * np.random.rand(100, 1)
y = 4 + 3 * X + np.random.randn(100, 1)

# Create and train the model
model = LinearRegression()
model.fit(X, y)

print(f"Intercept: {model.intercept_[0]:.2f}")
print(f"Coefficient: {model.coef_[0][0]:.2f}")

# Make predictions
X_new = np.array([[0], [2]])
y_predict = model.predict(X_new)

print(f"Predictions: {y_predict.flatten()}")

# Model evaluation
from sklearn.metrics import r2_score, mean_squared_error

y_pred = model.predict(X)
print(f"R² Score: {r2_score(y, y_pred):.4f}")
print(f"RMSE: {np.sqrt(mean_squared_error(y, y_pred)):.4f}")`

  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4 text-2xl font-semibold">Implementation</h2>
        <p className="leading-relaxed text-muted-foreground">
          See how to implement linear regression from scratch using NumPy, or use scikit-learn's optimized
          implementation. Both approaches produce the same results.
        </p>
      </div>

      <Tabs defaultValue="numpy" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="numpy">NumPy (From Scratch)</TabsTrigger>
          <TabsTrigger value="sklearn">scikit-learn</TabsTrigger>
        </TabsList>

        <TabsContent value="numpy" className="mt-4">
          <Card className="relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-2">
              <span className="text-sm font-medium">linear_regression_numpy.py</span>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" onClick={() => handleCopy(numpyCode, 0)} className="h-8 gap-2 px-3">
                  {copiedIndex === 0 ? (
                    <>
                      <Check className="h-3 w-3" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      Copy
                    </>
                  )}
                </Button>
                <Button size="sm" variant="ghost" className="h-8 gap-2 px-3">
                  <Play className="h-3 w-3" />
                  Run
                </Button>
              </div>
            </div>
            <pre className="overflow-x-auto p-4">
              <code className="text-sm font-mono">{numpyCode}</code>
            </pre>
          </Card>

          <Card className="mt-4 border-primary/20 bg-primary/5 p-4">
            <h3 className="mb-2 text-sm font-semibold">Understanding the Code</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>We use the Normal Equation to calculate optimal parameters directly</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Adding a bias term (column of ones) allows us to learn the intercept</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Matrix operations make the computation efficient even for large datasets</span>
              </li>
            </ul>
          </Card>
        </TabsContent>

        <TabsContent value="sklearn" className="mt-4">
          <Card className="relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-2">
              <span className="text-sm font-medium">linear_regression_sklearn.py</span>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" onClick={() => handleCopy(sklearnCode, 1)} className="h-8 gap-2 px-3">
                  {copiedIndex === 1 ? (
                    <>
                      <Check className="h-3 w-3" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      Copy
                    </>
                  )}
                </Button>
                <Button size="sm" variant="ghost" className="h-8 gap-2 px-3">
                  <Play className="h-3 w-3" />
                  Run
                </Button>
              </div>
            </div>
            <pre className="overflow-x-auto p-4">
              <code className="text-sm font-mono">{sklearnCode}</code>
            </pre>
          </Card>

          <Card className="mt-4 border-primary/20 bg-primary/5 p-4">
            <h3 className="mb-2 text-sm font-semibold">Why Use scikit-learn?</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Optimized C implementations for better performance</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Built-in evaluation metrics and utilities</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Consistent API across all regression models</span>
              </li>
            </ul>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Expected Output */}
      <div>
        <h3 className="mb-3 text-lg font-semibold">Expected Output</h3>
        <Card className="bg-secondary/50 p-4 font-mono text-sm">
          <div className="space-y-1">
            <p>Intercept: 4.21</p>
            <p>Coefficient: 2.77</p>
            <p>Predictions: [4.21 9.75]</p>
            <p className="mt-3 text-muted-foreground"># With scikit-learn:</p>
            <p>R² Score: 0.8615</p>
            <p>RMSE: 0.9845</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
