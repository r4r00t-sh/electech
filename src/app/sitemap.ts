import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { stories } from "@/content/stories";
import { posts } from "@/content/posts";

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
  "/solutions/electrical/solar-power-plant-installation",
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

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...stories.map((story) => ({
      url: `${siteConfig.url}/projects/${story.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...posts.map((post) => ({
      url: `${siteConfig.url}/insights/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
