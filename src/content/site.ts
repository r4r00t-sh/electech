export const siteConfig = {
  name: "Electech",
  legalName: "Electech Electromechanical Works LLC",
  tagline: "Engineering Confidence. Built on Trust.",
  taglineSupport: "Mechanical • Electrical • Plumbing • Maintenance",
  description:
    "Electech Electromechanical Works LLC delivers dependable MEP installation, system upgrades and maintenance services for commercial offices, residential villas, retail and hospitality projects across the UAE. More than 14 years of operational experience.",
  footerTagline:
    "Electech Electromechanical Works LLC - Delivering reliable MEP solutions through technical expertise, accountability and trusted relationships.",
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
  phone: "+971 4 880 6332",
  phoneTel: "+97148806332",
  whatsapp: "+971 58 645 2051",
  whatsappTel: "+971586452051",
  address: {
    lines: [
      "Hamsah-A Building, Al Karama",
      "Dubai, UAE",
      "P.O. Box 87556",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps?q=Hamsah-A+Building+Al+Karama+Dubai&output=embed",
  },
  copyrightYear: new Date().getFullYear(),
  social: {
    linkedin: "https://www.linkedin.com/company/electech-mep",
  },
  stats: [
    { value: 2012, label: "Established", suffix: "", prefix: "" },
    { value: 14, label: "Years in the UAE", suffix: "+", prefix: "" },
    { value: 500, label: "Projects delivered", suffix: "+", prefix: "" },
    {
      value: 0,
      label: "Sectors served",
      suffix: "",
      prefix: "",
      textValue:
        "Residential, Commercial, Retail, Hospitality, F&B, Industrial & Building Maintenance",
    },
  ],
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
};

export type SiteConfig = typeof siteConfig;
