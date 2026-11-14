"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site";
import { whatsappLink } from "@/lib/utils";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-white/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2 p-2">
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-3 py-3 text-sm font-semibold text-white"
        >
          <Phone className="h-4 w-4 text-green" />
          Call
        </a>
        <a
          href={whatsappLink(
            siteConfig.whatsappTel,
            "Hello Electech — I would like to discuss a project.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-green px-3 py-3 text-sm font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
