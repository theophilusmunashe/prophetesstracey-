import type { Metadata } from "next"
import { getSiteUrl, SITE } from "@/lib/site-config"

type RouteMetaOpts = {
  title: string
  description: string
  keywords?: string[]
}

/**
 * Per-route SEO for segment layouts. Root layout supplies defaults and title template.
 */
export function routeMetadata(path: string, opts: RouteMetaOpts): Metadata {
  const base = getSiteUrl()
  const pathname = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`
  const canonical = `${base}${pathname || "/"}`
  const ogTitle = `${opts.title} | ${SITE.name}`

  return {
    title: opts.title,
    description: opts.description,
    ...(opts.keywords?.length ? { keywords: opts.keywords } : {}),
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description: opts.description,
      url: canonical,
    },
    twitter: {
      title: ogTitle,
      description: opts.description,
    },
  }
}
