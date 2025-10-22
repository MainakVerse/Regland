"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Play, Download, Share2 } from "lucide-react"

export function CreateModelForm() {
  const [modelType, setModelType] = useState("linear")
  const [dataInput, setDataInput] = useState("")

  const handleRun = () => {
    console.log("Running model:", modelType, dataInput)
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Configuration Panel */}
      <Card className="p-6 lg:col-span-1">
        <h2 className="mb-6 text-xl font-semibold">Model Configuration</h2>

        <div className="space-y-6">
          <div>
            <Label htmlFor="model-type">Model Type</Label>
            <Select value={modelType} onValueChange={setModelType}>
              <SelectTrigger id="model-type" className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="linear">Linear Regression</SelectItem>
                <SelectItem value="ridge">Ridge Regression</SelectItem>
                <SelectItem value="lasso">Lasso Regression</SelectItem>
                <SelectItem value="polynomial">Polynomial Regression</SelectItem>
                <SelectItem value="logistic">Logistic Regression</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="data-input">Data Input</Label>
            <Textarea
              id="data-input"
              placeholder="Enter your data (CSV format)&#10;x,y&#10;1,2&#10;2,4&#10;3,6"
              value={dataInput}
              onChange={(e) => setDataInput(e.target.value)}
              className="mt-2 min-h-[200px] font-mono text-sm"
            />
            <p className="mt-2 text-xs text-muted-foreground">Or upload a CSV file</p>
            <Button variant="outline" size="sm" className="mt-2 w-full bg-transparent">
              Upload CSV
            </Button>
          </div>

          <div>
            <Label htmlFor="test-size">Test Size (%)</Label>
            <Input id="test-size" type="number" defaultValue="20" min="10" max="50" className="mt-2" />
          </div>

          <div>
            <Label htmlFor="random-state">Random State</Label>
            <Input id="random-state" type="number" defaultValue="42" className="mt-2" />
          </div>

          <Button onClick={handleRun} className="w-full gap-2">
            <Play className="h-4 w-4" />
            Run Model
          </Button>
        </div>
      </Card>

      {/* Results Panel */}
      <Card className="p-6 lg:col-span-2">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Results</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>

        {/* Placeholder for results */}
        <div className="space-y-6">
          <div className="aspect-video rounded-lg border border-border bg-secondary/30 p-8">
            <div className="flex h-full items-center justify-center text-center">
              <div>
                <p className="text-muted-foreground">Configure your model and click "Run Model" to see results</p>
                <p className="mt-2 text-sm text-muted-foreground">Visualization and metrics will appear here</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="bg-secondary/50 p-4">
              <p className="text-sm text-muted-foreground">R² Score</p>
              <p className="mt-2 text-2xl font-semibold">—</p>
            </Card>
            <Card className="bg-secondary/50 p-4">
              <p className="text-sm text-muted-foreground">RMSE</p>
              <p className="mt-2 text-2xl font-semibold">—</p>
            </Card>
            <Card className="bg-secondary/50 p-4">
              <p className="text-sm text-muted-foreground">MAE</p>
              <p className="mt-2 text-2xl font-semibold">—</p>
            </Card>
          </div>

          <Card className="bg-secondary/50 p-4">
            <h3 className="mb-3 font-semibold">Model Parameters</h3>
            <div className="space-y-2 font-mono text-sm">
              <p>Coefficients: —</p>
              <p>Intercept: —</p>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  )
}
