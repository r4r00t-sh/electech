import testimonialsData from "../../data/testimonials.json";
import type { Testimonial } from "./types";
import type { BucketId } from "@/lib/buckets";

function showUnverifiedTestimonials() {
  const env = process.env.SHOW_UNVERIFIED_TESTIMONIALS;
  if (env === "true") return true;
  if (env === "false") return false;
  return process.env.NODE_ENV !== "production";
}

/** Client Success Stories & Testimonials — editable in data/testimonials.json */
export const testimonials = testimonialsData as Testimonial[];

function visibleTestimonials() {
  if (showUnverifiedTestimonials()) return testimonials;
  return testimonials.filter((t) => t.verified);
}

export function getAllTestimonials() {
  return visibleTestimonials();
}

export function getTestimonialsByBucket(
  bucket: Testimonial["buckets"][number],
  limit = 3,
) {
  const all = visibleTestimonials();
  const matched = all.filter((t) => t.buckets.includes(bucket as BucketId));
  if (matched.length >= limit) return matched.slice(0, limit);
  if (matched.length === 0) return [];
  return matched.slice(0, limit);
}

export function getFeaturedTestimonials(limit = 12) {
  const all = visibleTestimonials();
  const featured = all.filter((t) => t.featured);
  const pool = featured.length ? featured : all;
  return pool.slice(0, limit);
}
