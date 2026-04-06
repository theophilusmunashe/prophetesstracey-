import type React from "react"
import type { Metadata, Viewport } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import AppShell from "@/components/app-shell"
import { JsonLd } from "@/components/json-ld"
import { buildDefaultMetadata } from "@/lib/metadata-defaults"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const poppins = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = buildDefaultMetadata()

export const viewport: Viewport = {
  themeColor: "#0d2818",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${poppins.variable} font-sans antialiased`}>
        <JsonLd />
        <AppShell>{children}</AppShell>
        <Analytics />
      </body>
    </html>
  )
}
