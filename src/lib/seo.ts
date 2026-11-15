import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

/** Absolute production site origin — never use preview-deployment hosts. */
export function getSiteUrl() {
  return siteConfig.url.replace(/\/$/, "");
}

export function pageMetadata({
  title,
  description,
  path = "",
  image = "/images/pages/mep-industrial-systems.jpg",
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  /** When true, use the title as-is (no "| Electech" template append). */
  absoluteTitle?: boolean;
}): Metadata {
  const origin = getSiteUrl();
  const url = `${origin}${path}`;
  const absoluteImage = image.startsWith("http") ? image : `${origin}${image}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: absoluteImage, width: 1200, height: 630, alt: title }],
      locale: "en_AE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteImage],
    },
  };
}

export function organizationSchema() {
  const origin = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: origin,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    logo: `${origin}/images/brand/electech-logo.png`,
    image: `${origin}/images/brand/electech-logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hamsah-A Building, Oud Metha",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
      postalCode: "87556",
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  const origin = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: origin,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${origin}${item.path}`,
      })),
    ],
  };
}
