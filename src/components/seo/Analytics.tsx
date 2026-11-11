"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";

export function Analytics() {
  const [allowed, setAllowed] = useState(false);
  const gaId = siteConfig.gaId;

  useEffect(() => {
    const check = () => {
      try {
        setAllowed(localStorage.getItem("electech-cookie-consent") === "accepted");
      } catch {
        setAllowed(false);
      }
    };
    check();
    window.addEventListener("electech-consent", check);
    return () => window.removeEventListener("electech-consent", check);
  }, []);

  if (!gaId || !allowed) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${gaId}');`}
      </Script>
    </>
  );
}
