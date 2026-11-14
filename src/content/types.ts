import type { BucketId } from "@/lib/buckets";

export type Story = {
  title: string;
  slug: string;
  /** Optional client subtitle under the title */
  subtitle?: string;
  heroImage: string;
  heroAlt: string;
  /** When false/undefined and no mapped works photo, show navy tile (no stock). */
  hasVerifiedPhoto?: boolean;
  primaryBucket: BucketId;
  secondaryBuckets: BucketId[];
  /** Omit when the client has not supplied a publishable client name. */
  client?: string;
  location: string;
  sector: string;
  scope: string;
  status: string;
  year?: string;
  summary: string;
  /** Short accurate scope text; no filler padding. */
  body: string;
  highlights?: string[];
  gallery: { src: string; alt: string }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
    verified: boolean;
  };
  featured?: boolean;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  buckets: BucketId[];
  featured?: boolean;
  storySlug?: string;
  verified: boolean;
};

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  category: string;
  author: string;
  publishedAt: string;
  readingTime: number;
  ogImage: string;
  ogAlt: string;
  featured?: boolean;
};

export type Certification = {
  id: string;
  name: string;
  description: string;
  badgeImage: string;
  order: number;
};

export type ClientLogo = {
  id: string;
  name: string;
  logo: string;
  url?: string;
  order: number;
};
