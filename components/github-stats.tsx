import { Card } from "@/components/ui/card"
import { Star, GitFork, Users } from "lucide-react"
import { getGitHubStats } from "@/lib/github"

export async function GitHubStats() {
  const stats = await getGitHubStats()

  if (!stats) {
    return null
  }

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <Card className="p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Star className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-2xl font-semibold">{stats.stars.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Stars</p>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <GitFork className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-2xl font-semibold">{stats.forks.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Forks</p>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-2xl font-semibold">50+</p>
            <p className="text-sm text-muted-foreground">Contributors</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
