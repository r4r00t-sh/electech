import type { MetadataRoute } from "next";
import { stories } from "@/content/stories";
import { posts } from "@/content/posts";
import { getSiteUrl } from "@/lib/seo";

const staticRoutes = [
  "",
  "/about",
  "/about/who-we-are",
  "/about/vision-mission",
  "/about/why-choose-us",
  "/about/certifications",
  "/clients",
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
  "/insights",
  "/contact",
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
    ...stories.map((story) => ({
      url: `${origin}/projects/${story.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...posts.map((post) => ({
      url: `${origin}/insights/${post.slug}`,
      lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
