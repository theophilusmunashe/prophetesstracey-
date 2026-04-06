import type { Metadata } from "next"
import type React from "react"
import { routeMetadata } from "@/lib/route-metadata"

export const metadata: Metadata = routeMetadata("/sermons", {
  title: "Sermons",
  description:
    "Watch and listen to sermons and teachings from Prophetess Tracey Pilime and Hope Of Glory — on YouTube and Facebook.",
  keywords: ["Prophetess Tracey Pilime sermons", "HOGIM teachings", "prophetic messages online"],
})

export default function SermonsLayout({ children }: { children: React.ReactNode }) {
  return children
}
