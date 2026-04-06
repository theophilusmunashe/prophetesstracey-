import type { Metadata } from "next"
import type React from "react"
import { routeMetadata } from "@/lib/route-metadata"

export const metadata: Metadata = routeMetadata("/about", {
  title: "About",
  description:
    "Meet Prophetess Tracey Pilime and Hope Of Glory International Ministries — mission, vision, ministries, and our heart for Harare, Zimbabwe and the nations.",
  keywords: [
    "Prophetess Tracey Pilime biography",
    "HOGIM mission vision",
    "Hope Of Glory ministries",
    "Harare church",
  ],
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
