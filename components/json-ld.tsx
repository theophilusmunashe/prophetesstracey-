import { getSiteUrl, SITE } from "@/lib/site-config"

/** Organization + WebSite structured data for Google rich results */
export function JsonLd() {
  const url = getSiteUrl()
  const logo = `${url}/icon.svg`

  const organization = {
    "@context": "https://schema.org",
    "@type": "Church",
    "@id": `${url}/#organization`,
    name: SITE.name,
    alternateName: SITE.shortName,
    description: SITE.description,
    url,
    logo: { "@type": "ImageObject", url: logo },
    sameAs: [SITE.facebookUrl],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Harare",
      addressCountry: "ZW",
    },
  }

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${url}/#organization` },
    inLanguage: "en",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organization, website]),
      }}
    />
  )
}
