import type { Testimonial } from "./types";
import { stories } from "./stories";

function showUnverifiedTestimonials() {
  const env = process.env.SHOW_UNVERIFIED_TESTIMONIALS;
  if (env === "true") return true;
  if (env === "false") return false;
  // Default: show unverified in non-production (preview/dev); hide in production
  return process.env.NODE_ENV !== "production";
}

/** Derived from story testimonials */
export const testimonials: Testimonial[] = stories
  .filter((s) => s.testimonial)
  .map((s, i) => ({
    id: `story-${s.slug}`,
    quote: s.testimonial!.quote,
    name: s.testimonial!.author,
    role: s.testimonial!.role,
    company: s.testimonial!.company,
    buckets: [s.primaryBucket, ...s.secondaryBuckets],
    featured: Boolean(s.featured) || i < 3,
    storySlug: s.slug,
    verified: s.testimonial!.verified,
  }));

function visibleTestimonials() {
  if (showUnverifiedTestimonials()) return testimonials;
  return testimonials.filter((t) => t.verified);
}

export function getTestimonialsByBucket(
  bucket: Testimonial["buckets"][number],
  limit = 3,
) {
  const all = visibleTestimonials();
  const matched = all.filter((t) => t.buckets.includes(bucket));
  if (matched.length >= limit) return matched.slice(0, limit);
  if (matched.length === 0) return [];
  // Prefer matched; do not pad with unrelated entries when few remain
  return matched.slice(0, limit);
}

export function getFeaturedTestimonials(limit = 3) {
  const all = visibleTestimonials();
  const featured = all.filter((t) => t.featured);
  const pool = featured.length ? featured : all;
  return pool.slice(0, limit);
}
