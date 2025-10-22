"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { RotateCcw } from "lucide-react"

interface VisualizationSectionProps {
  slug: string
}

export function VisualizationSection({ slug }: VisualizationSectionProps) {
  const [slope, setSlope] = useState([3])
  const [intercept, setIntercept] = useState([4])
  const [noise, setNoise] = useState([1])

  const handleReset = () => {
    setSlope([3])
    setIntercept([4])
    setNoise([1])
  }

  // Generate data points based on parameters
  const generatePoints = () => {
    const points = []
    for (let i = 0; i < 50; i++) {
      const x = (i / 50) * 10
      const y = intercept[0] + slope[0] * x + (Math.random() - 0.5) * noise[0] * 2
      points.push({ x, y })
    }
    return points
  }

  const points = generatePoints()

  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4 text-2xl font-semibold">Interactive Visualization</h2>
        <p className="leading-relaxed text-muted-foreground">
          Adjust the parameters below to see how they affect the regression line and data points in real-time.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Controls */}
        <Card className="p-6 lg:col-span-1">
          <div className="space-y-6">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <Label htmlFor="slope">Slope (β₁)</Label>
                <span className="text-sm font-medium">{slope[0].toFixed(1)}</span>
              </div>
              <Slider id="slope" min={-5} max={5} step={0.1} value={slope} onValueChange={setSlope} />
              <p className="mt-2 text-xs text-muted-foreground">Controls the steepness of the line</p>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between">
                <Label htmlFor="intercept">Intercept (β₀)</Label>
                <span className="text-sm font-medium">{intercept[0].toFixed(1)}</span>
              </div>
              <Slider id="intercept" min={-10} max={10} step={0.1} value={intercept} onValueChange={setIntercept} />
              <p className="mt-2 text-xs text-muted-foreground">Where the line crosses the y-axis</p>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between">
                <Label htmlFor="noise">Noise Level</Label>
                <span className="text-sm font-medium">{noise[0].toFixed(1)}</span>
              </div>
              <Slider id="noise" min={0} max={5} step={0.1} value={noise} onValueChange={setNoise} />
              <p className="mt-2 text-xs text-muted-foreground">Amount of random variation in data</p>
            </div>

            <Button onClick={handleReset} variant="outline" className="w-full gap-2 bg-transparent">
              <RotateCcw className="h-4 w-4" />
              Reset to Defaults
            </Button>
          </div>

          <div className="mt-6 rounded-lg bg-secondary p-4">
            <h3 className="mb-2 text-sm font-semibold">Current Equation</h3>
            <p className="font-mono text-sm">
              y = {intercept[0].toFixed(2)} + {slope[0].toFixed(2)}x
            </p>
          </div>
        </Card>

        {/* Visualization */}
        <Card className="p-6 lg:col-span-2">
          <div className="aspect-video w-full rounded-lg bg-secondary/30 p-4">
            <svg viewBox="0 0 400 300" className="h-full w-full">
              {/* Grid lines */}
              <g stroke="currentColor" strokeWidth="0.5" opacity="0.1">
                {[...Array(11)].map((_, i) => (
                  <line key={`h-${i}`} x1="40" y1={30 + i * 24} x2="380" y2={30 + i * 24} />
                ))}
                {[...Array(11)].map((_, i) => (
                  <line key={`v-${i}`} x1={40 + i * 34} y1="30" x2={40 + i * 34} y2="270" />
                ))}
              </g>

              {/* Axes */}
              <g stroke="currentColor" strokeWidth="2" opacity="0.3">
                <line x1="40" y1="270" x2="380" y2="270" />
                <line x1="40" y1="30" x2="40" y2="270" />
              </g>

              {/* Regression line */}
              <line
                x1="40"
                y1={270 - ((intercept[0] + slope[0] * 0) * 240) / 50}
                x2="380"
                y2={270 - ((intercept[0] + slope[0] * 10) * 240) / 50}
                stroke="hsl(var(--primary))"
                strokeWidth="2"
              />

              {/* Data points */}
              {points.map((point, i) => (
                <circle
                  key={i}
                  cx={40 + (point.x / 10) * 340}
                  cy={270 - (point.y / 50) * 240}
                  r="3"
                  fill="hsl(var(--primary))"
                  opacity="0.6"
                />
              ))}

              {/* Labels */}
              <text x="200" y="295" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.5">
                X (Feature)
              </text>
              <text
                x="15"
                y="150"
                textAnchor="middle"
                fontSize="12"
                fill="currentColor"
                opacity="0.5"
                transform="rotate(-90 15 150)"
              >
                Y (Target)
              </text>
            </svg>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-lg bg-secondary/50 p-3">
              <p className="text-xs text-muted-foreground">Data Points</p>
              <p className="mt-1 text-lg font-semibold">{points.length}</p>
            </div>
            <div className="rounded-lg bg-secondary/50 p-3">
              <p className="text-xs text-muted-foreground">Slope</p>
              <p className="mt-1 text-lg font-semibold">{slope[0].toFixed(2)}</p>
            </div>
            <div className="rounded-lg bg-secondary/50 p-3">
              <p className="text-xs text-muted-foreground">Intercept</p>
              <p className="mt-1 text-lg font-semibold">{intercept[0].toFixed(2)}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Insights */}
      <Card className="border-primary/20 bg-primary/5 p-6">
        <h3 className="mb-3 font-semibold">What You're Seeing</h3>
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>
              <strong>Blue line:</strong> The regression line defined by y = {intercept[0].toFixed(2)} +{" "}
              {slope[0].toFixed(2)}x
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>
              <strong>Blue dots:</strong> Individual data points with random noise
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>
              <strong>Slope:</strong> A positive slope means y increases as x increases; negative means it decreases
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>
              <strong>Noise:</strong> Higher noise makes the relationship less clear and predictions less accurate
            </span>
          </li>
        </ul>
      </Card>
    </div>
  )
}
