import type { MetadataRoute } from "next";
import { getPublishedStories } from "@/content/stories";
import { getSiteUrl } from "@/lib/seo";

const staticRoutes = [
  "",
  "/about",
  "/about/who-we-are",
  "/about/vision-mission",
  "/about/why-choose-us",
  "/about/certifications",
  "/solutions",
  "/solutions/mep",
  "/solutions/mechanical-plumbing",
  "/solutions/mechanical-plumbing/hvac-installation",
  "/solutions/mechanical-plumbing/plumbing-drainage-installation",
  "/solutions/electrical",
  "/solutions/electrical/electrical-installation",
  "/solutions/electrical/extra-low-voltage-installation",
  // Solar Power Plant held pending client confirmation — excluded from sitemap
  "/solutions/fire-protection",
  "/solutions/fire-protection/fire-fighting-fire-alarm-installation",
  "/solutions/fire-protection/fire-stopping-sealant-application",
  "/solutions/maintenance",
  "/projects",
  "/industries",
  "/careers",
  "/contact",
  // /privacy is noindex — excluded from sitemap
  // /insights unpublished until reviewed articles exist
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const origin = getSiteUrl();

  return [
    ...staticRoutes.map((path) => ({
      url: `${origin}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...getPublishedStories().map((story) => ({
      url: `${origin}/projects/${story.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    // Insights posts excluded while unpublished
  ];
}
