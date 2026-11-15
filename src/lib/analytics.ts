type AnalyticsEvent =
  | "quote_submit"
  | "click_to_call"
  | "whatsapp_click"
  | "email_click"
  | "drawing_upload"
  | "project_to_contact"
  | "careers_submit";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Fire a GA4 event only when consent has loaded gtag. */
export function trackEvent(
  event: AnalyticsEvent,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined") return;
  try {
    if (localStorage.getItem("electech-cookie-consent") !== "accepted") return;
  } catch {
    return;
  }
  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}
