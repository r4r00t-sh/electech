"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { trackEvent } from "@/lib/analytics";

type EventName =
  | "click_to_call"
  | "whatsapp_click"
  | "email_click"
  | "project_to_contact";

export function TrackedAnchor({
  event,
  context,
  ...props
}: ComponentProps<"a"> & { event: EventName; context?: string }) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackEvent(event, context ? { context } : undefined);
        props.onClick?.(e);
      }}
    />
  );
}

export function TrackedNextLink({
  event,
  context,
  ...props
}: ComponentProps<typeof Link> & { event: EventName; context?: string }) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        trackEvent(event, context ? { context } : undefined);
        props.onClick?.(e);
      }}
    />
  );
}
