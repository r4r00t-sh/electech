"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/content/site";
import { trackEvent } from "@/lib/analytics";
import { whatsappLink } from "@/lib/utils";

export function ContactActionLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={`tel:${siteConfig.phoneTel}`}
        onClick={() => trackEvent("click_to_call", { context: "contact" })}
        className="inline-flex items-center gap-2 rounded-md bg-navy px-4 py-2.5 text-[15px] font-semibold text-white hover:bg-navy/90"
      >
        <Phone className="h-4 w-4 text-green" />
        Call {siteConfig.phone}
      </a>
      <a
        href={whatsappLink(siteConfig.whatsappTel)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("whatsapp_click", { context: "contact" })}
        className="inline-flex items-center gap-2 rounded-md bg-green px-4 py-2.5 text-[15px] font-semibold text-white hover:bg-green/90"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp {siteConfig.whatsapp}
      </a>
      <a
        href={`mailto:${siteConfig.email}`}
        onClick={() => trackEvent("email_click", { context: "contact" })}
        className="inline-flex items-center gap-2 rounded-md border border-navy/15 bg-white px-4 py-2.5 text-[15px] font-semibold text-navy hover:border-navy/30"
      >
        <Mail className="h-4 w-4 text-green" />
        Email {siteConfig.email}
      </a>

    </div>
  );
}
