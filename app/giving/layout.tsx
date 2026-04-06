import type { Metadata } from "next"
import type React from "react"
import { routeMetadata } from "@/lib/route-metadata"

export const metadata: Metadata = routeMetadata("/giving", {
  title: "Giving",
  description:
    "Partner with Hope Of Glory International Ministries — ways to give, bank details, Ecocash, and international options.",
  keywords: ["give to HOGIM", "church giving Zimbabwe", "ministry partnership", "Ecocash giving"],
})

export default function GivingLayout({ children }: { children: React.ReactNode }) {
  return children
}
