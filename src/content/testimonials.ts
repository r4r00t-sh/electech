import type { Testimonial } from "./types";
import { stories } from "./stories";

/** Derived from story testimonials + featured banner set */
export const testimonials: Testimonial[] = stories.map((s, i) => ({
  id: `story-${s.slug}`,
  quote: s.testimonial.quote,
  name: s.testimonial.author,
  role: s.testimonial.role,
  company: s.testimonial.company,
  buckets: [s.primaryBucket, ...s.secondaryBuckets],
  featured: Boolean(s.featured) || i < 3,
  storySlug: s.slug,
}));

export function getTestimonialsByBucket(
  bucket: Testimonial["buckets"][number],
  limit = 3,
) {
  return testimonials.filter((t) => t.buckets.includes(bucket)).slice(0, limit);
}

export function getFeaturedTestimonials(limit = 3) {
  const featured = testimonials.filter((t) => t.featured);
  return (featured.length ? featured : testimonials).slice(0, limit);
}
