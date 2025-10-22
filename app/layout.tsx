import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lora, Fira_Code } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-serif",
})

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sans",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Regressions",
  description:
    "50 classic regression models — explained as stories. Learn the idea, see the math, run the code, and visualize results.",
  generator: "MainakVerse",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${playfair.variable} ${firaCode.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
