import type React from "react"
import type { Metadata, Viewport } from "next"
import { Montserrat, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Hope Of Glory International Ministries | Prophetess Tracey Pilime",
  description:
    "A prophetic ministry reaching the nations with the message of hope, healing, and deliverance. Led by Prophetess Tracey Pilime - Voice of Prophecy, Healing & Deliverance.",
  generator: "v0.app",
  keywords: [
    "church",
    "ministry",
    "prophetic",
    "healing",
    "deliverance",
    "Zimbabwe",
    "Prophetess Tracey Pilime",
    "HOGIM",
  ],
}

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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
