import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Overview } from "@/components/overview"
import { Timeline } from "@/components/timeline"
import { StarBanner } from "@/components/star-banner"
import { ConnectForm } from "@/components/connect-form"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <Overview />
        <Timeline />
        <StarBanner />
        <ConnectForm />
      </main>
      <SiteFooter />
    </div>
  )
}
