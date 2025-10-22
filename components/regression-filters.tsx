"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function RegressionFilters() {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")

  const categories = ["All", "Basic", "Regularization", "Non-Linear", "Generalized", "Time Series", "Bayesian"]
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"]

  return (
    <div className="mb-8 space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search regression models..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Category Filters */}
      <div>
        <p className="mb-3 text-sm font-medium">Category</p>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category.toLowerCase() ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.toLowerCase())}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Difficulty Filters */}
      <div>
        <p className="mb-3 text-sm font-medium">Difficulty</p>
        <div className="flex flex-wrap gap-2">
          {difficulties.map((difficulty) => (
            <Button
              key={difficulty}
              variant={selectedDifficulty === difficulty.toLowerCase() ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedDifficulty(difficulty.toLowerCase())}
            >
              {difficulty}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
