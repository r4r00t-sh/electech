import { notFound } from "next/navigation";

/**
 * Insights unpublished until at least one technically reviewed article exists.
 * Keep route file so content can be re-enabled without rebuilding structure.
 */
export default function InsightsPage() {
  notFound();
}
