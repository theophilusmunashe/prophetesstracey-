/**
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://yourdomain.com) for correct canonical & OG URLs.
 */
export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (url) return url.replace(/\/$/, "")
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`
  return "http://localhost:3000"
}

export const SITE = {
  name: "Hope Of Glory International Ministries",
  shortName: "HOGIM",
  description:
    "A prophetic ministry reaching the nations with hope, healing, and deliverance. Led by Prophetess Tracey Pilime — prophecy, healing & deliverance. Harare, Zimbabwe & online.",
  locale: "en_US",
  twitterHandle: "@prophetesstraceypilime",
  facebookUrl: "https://www.facebook.com/prophetesstraceypilime",
  founder: "Prophetess Tracey Pilime",
} as const
