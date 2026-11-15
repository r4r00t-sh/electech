import { notFound } from "next/navigation";
import { posts } from "@/content/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

/** Insights posts stay unpublished until client technical review. */
export default async function BlogPostPage() {
  notFound();
}
