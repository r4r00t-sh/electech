import type { BucketId } from "@/lib/buckets";

export type Story = {
  title: string;
  slug: string;
  heroImage: string;
  heroAlt: string;
  primaryBucket: BucketId;
  secondaryBuckets: BucketId[];
  client: string;
  location: string;
  sector: string;
  scope: string;
  year: string;
  summary: string;
  body: string;
  gallery: { src: string; alt: string }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  results: { label: string; value: string }[];
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
