import type { Metadata } from "next"
import type React from "react"
import { routeMetadata } from "@/lib/route-metadata"

export const metadata: Metadata = routeMetadata("/events", {
  title: "Events",
  description:
    "Upcoming conferences and special gatherings at Hope Of Glory International Ministries — dates, locations, and what to expect.",
  keywords: ["HOGIM events", "church conference Harare", "Christian events Zimbabwe"],
})

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children
}
