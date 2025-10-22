import Link from "next/link"
import { Github } from "lucide-react"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/30 py-12">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
               <div className="h-8 w-8 rounded-lg bg-primary">
                <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
              </div>
              <span className="font-serif text-lg font-bold">Regressions</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Open-source regression models explained through stories, math, code, and visualizations.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/regressions" className="text-muted-foreground transition-colors hover:text-foreground">
                  All Regressions
                </Link>
              </li>
              <li>
                <Link href="/create" className="text-muted-foreground transition-colors hover:text-foreground">
                  Create a Model
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-muted-foreground transition-colors hover:text-foreground">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com" className="text-muted-foreground transition-colors hover:text-foreground">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://github.com" className="text-muted-foreground transition-colors hover:text-foreground">
                  Contributors
                </a>
              </li>
              <li>
                <a href="https://github.com" className="text-muted-foreground transition-colors hover:text-foreground">
                  Contributing Guide
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/license" className="text-muted-foreground transition-colors hover:text-foreground">
                  MIT License
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/code-of-conduct" className="text-muted-foreground transition-colors hover:text-foreground">
                  Code of Conduct
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 Regressions. Reimagined. Open source under MIT License.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
