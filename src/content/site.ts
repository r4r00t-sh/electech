export const siteConfig = {
  name: "ElecTech MEP",
  legalName: "Electech Electromechanical Works LLC",
  tagline: "Engineering the systems that power your spaces.",
  description:
    "One-stop MEP and fire safety contractor in Dubai, UAE. Precision delivery since 2012 for fit-out firms, developers, hospitality, healthcare and commercial owners.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://www.electechmep.com",
  email: "info@electechmep.com",
  phone: "+971 (4) 880 6332",
  phoneTel: "+97148806332",
  whatsapp: "+971 58 645 2051",
  whatsappTel: "+971586452051",
  address: {
    lines: [
      "Hamsah Building, Oud Metha",
      "P.O. Box 87556",
      "Dubai, United Arab Emirates",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps?q=Hamsah+Building+Oud+Metha+Dubai&output=embed",
  },
  /** Dynamic copyright year in the footer */
  copyrightYear: new Date().getFullYear(),
  social: {
    linkedin: "https://www.linkedin.com/company/electech-mep",
  },
  stats: [
    { value: 2012, label: "Established", suffix: "", prefix: "" },
    { value: 12, label: "Years in the UAE", suffix: "+", prefix: "" },
    {
      value: 0,
      label: "Projects delivered",
      suffix: "+",
      prefix: "",
      placeholder: "[CLIENT TO PROVIDE]",
    },
    {
      value: 0,
      label: "Sectors served",
      suffix: "+",
      prefix: "",
      placeholder: "[CLIENT TO PROVIDE]",
    },
  ],
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
};

export type SiteConfig = typeof siteConfig;
