import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const routes = ["", "/about", "/services", "/events", "/sermons", "/giving"]
  const now = new Date()

  return routes.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }))
}
