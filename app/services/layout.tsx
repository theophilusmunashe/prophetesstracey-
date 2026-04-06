import type { Metadata } from "next"
import type React from "react"
import { routeMetadata } from "@/lib/route-metadata"

export const metadata: Metadata = routeMetadata("/services", {
  title: "Services & schedule",
  description:
    "Weekly service times at Hope Of Glory — Sunday worship, prophetic and deliverance services, School of Spirit, partners, diaspora Zoom, and how to join live on Facebook.",
  keywords: [
    "HOGIM service times",
    "Harare church schedule",
    "live church Facebook",
    "prophetic service",
    "deliverance service Harare",
  ],
})

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
