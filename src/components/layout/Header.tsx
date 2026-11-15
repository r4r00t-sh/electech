"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, MessageCircle, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { BUCKETS } from "@/lib/buckets";
import { siteConfig } from "@/content/site";
import { trackEvent } from "@/lib/analytics";
import { cn, whatsappLink } from "@/lib/utils";

const nav = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Who We Are", href: "/about/who-we-are" },
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Why Choose Us", href: "/about/why-choose-us" },
      { label: "Our Clients", href: "/clients" },
      { label: "Certifications", href: "/about/certifications" },
    ],
  },
  {
    label: "Services",
    href: "/solutions",
    children: BUCKETS.map((b) => ({
      label: b.short,
      href: b.href,
    })),
  },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) setMobileSection(null);
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="hidden border-b border-navy/10 bg-mist md:block">
        <div className="container-site flex h-9 items-center justify-end gap-5 text-xs text-slate-dark">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            onClick={() => trackEvent("click_to_call", { context: "header" })}
            className="inline-flex items-center gap-1.5 hover:text-green"
          >
            <Phone className="h-3.5 w-3.5 text-green" />
            Call {siteConfig.phone}
          </a>
          <a
            href={whatsappLink(siteConfig.whatsappTel)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { context: "header" })}
            className="inline-flex items-center gap-1.5 hover:text-green"
          >
            <MessageCircle className="h-3.5 w-3.5 text-green" />
            WhatsApp
          </a>
        </div>
      </div>

      <div
        className={cn(
          "border-b border-navy/10 transition-[height,box-shadow]",
          scrolled && "shadow-sm",
        )}
      >
        <div
          className={cn(
            "container-site flex items-center justify-between gap-4 transition-[height]",
            scrolled ? "h-16" : "h-[72px]",
          )}
        >
          <Logo priority />

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-dark hover:bg-mist hover:text-navy"
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 min-w-[240px] pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                    <div className="rounded-md border border-navy/10 bg-white p-2 shadow-sm">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-md px-3 py-2 text-sm text-slate-dark hover:bg-mist hover:text-navy"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-dark hover:bg-mist hover:text-navy"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button href="/contact">Request a Quotation</Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Button href="/contact" className="!px-3 !py-2 text-xs">
              Request a Quotation
            </Button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-navy/15"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 top-[72px] z-40 bg-white transition lg:hidden",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav className="container-site flex h-full flex-col gap-1 overflow-y-auto py-6 pb-28">
          {nav.map((item) => {
            const hasDropdown = Boolean(item.children);
            const sectionOpen = mobileSection === item.label;

            if (!hasDropdown) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="border-b border-navy/10 py-3 font-display text-lg font-semibold text-navy"
                  onClick={closeMobile}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.label} className="border-b border-navy/10">
                <div className="flex items-center gap-1">
                  <Link
                    href={item.href}
                    className="flex-1 py-3 font-display text-lg font-semibold text-navy"
                    onClick={closeMobile}
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-md text-navy"
                    aria-expanded={sectionOpen}
                    aria-label={`${sectionOpen ? "Collapse" : "Expand"} ${item.label}`}
                    onClick={() =>
                      setMobileSection((current) =>
                        current === item.label ? null : item.label,
                      )
                    }
                  >
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform",
                        sectionOpen && "rotate-180",
                      )}
                    />
                  </button>
                </div>
                {sectionOpen && item.children ? (
                  <div className="mb-3 space-y-0.5 pl-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-2 py-2.5 text-sm text-slate-dark hover:bg-mist"
                        onClick={closeMobile}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
          <Button href="/contact" className="mt-4 w-full" onClick={closeMobile}>
            Request a Quotation
          </Button>
        </nav>
      </div>
    </header>
  );
}
