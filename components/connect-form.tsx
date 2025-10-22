"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function ConnectForm() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="py-24">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-lg border border-border bg-card p-8 shadow-sm md:p-12">
            <h2 className="font-serif text-3xl font-bold md:text-4xl">Stay Connected</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Get updates on new regression models, contributor highlights, and community events. No spam, just quality
              content.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" size="lg">
                Subscribe
              </Button>
            </form>
            <p className="mt-4 text-xs text-muted-foreground">
              By subscribing, you agree to receive occasional emails. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
