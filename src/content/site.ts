export const siteConfig = {
  name: "Electech",
  legalName: "Electech Electromechanical Works LLC",
  tagline: "Engineering Confidence. Built on Trust.",
  taglineSupport: "Mechanical • Electrical • Plumbing • Maintenance",
  description:
    "MEP installation, upgrades and maintenance in Dubai for villas, offices, retail and hospitality. Electech Electromechanical Works LLC — more than 14 years of UAE operations.",
  footerTagline: "Engineering Confidence. Built on Trust.",
  // Until the real domain DNS is ready, never emit electechmep.com in canonical/OG/sitemap.
  url: (() => {
    const fallback = "https://electech-black.vercel.app";
    const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
    if (!configured) return fallback;
    try {
      const host = new URL(configured).hostname.replace(/^www\./, "");
      if (host === "electechmep.com") return fallback;
    } catch {
      return fallback;
    }
    return configured;
  })(),
  email: "info@electechmep.com",
  projectsEmail: "projects@electechmep.com",
  websiteDisplay: "www.electechmep.com",
  phone: "+971 4 880 6332",
  phoneTel: "+97148806332",
  whatsapp: "+971 58 645 2051",
  whatsappTel: "+971586452051",
  address: {
    lines: [
      "Hamsah-A Building, Oud Metha",
      "Dubai, UAE",
      "P.O. Box 87556",
    ],
    mapSearchUrl:
      "https://www.google.com/maps/search/?api=1&query=Hamsah+Building+Oud+Metha+Dubai",
    /** @deprecated Prefer mapSearchUrl — embed kept only until Contact Batch 3. */
    mapEmbedUrl:
      "https://www.google.com/maps?q=Hamsah+Building+Oud+Metha+Dubai&output=embed",
  },
  /** Removed from UI until establishment year confirmed — kept empty for legacy imports. */
  stats: [] as {
    value: number;
    label: string;
    suffix: string;
    prefix: string;
    textValue?: string;
  }[],
  copyrightYear: new Date().getFullYear(),
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
};

export type SiteConfig = typeof siteConfig;
