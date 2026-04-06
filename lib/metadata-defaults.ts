import type { Metadata } from "next"
import { getSiteUrl, SITE } from "@/lib/site-config"

export function buildDefaultMetadata(): Metadata {
  const base = getSiteUrl()
  const ogImage = `${base}/services.png`

  return {
    metadataBase: new URL(base),
    title: {
      default: `${SITE.name} | ${SITE.founder}`,
      template: `%s | ${SITE.name}`,
    },
    description: SITE.description,
    keywords: [
      "Hope Of Glory",
      "HOGIM",
      "Prophetess Tracey Pilime",
      "prophetic ministry",
      "church Harare",
      "Zimbabwe church",
      "deliverance",
      "healing ministry",
      "live service Facebook",
      "Christian ministry",
    ],
    authors: [{ name: SITE.name, url: base }],
    creator: SITE.name,
    publisher: SITE.name,
    formatDetection: { email: false, address: false, telephone: false },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url: base,
      siteName: SITE.name,
      title: `${SITE.name} | ${SITE.founder}`,
      description: SITE.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — worship and teaching`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE.name} | ${SITE.founder}`,
      description: SITE.description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
    },
    alternates: { canonical: base },
    category: "religion",
  }
}
