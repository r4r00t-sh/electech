"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, Mail, MessageCircle, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { BUCKETS } from "@/lib/buckets";
import { siteConfig } from "@/content/site";
import { cn, whatsappLink } from "@/lib/utils";

const nav = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Who We Are", href: "/about/who-we-are" },
      { label: "Vision and Mission", href: "/about/vision-mission" },
      { label: "Why Choose Us", href: "/about/why-choose-us" },
      { label: "Our Clients", href: "/clients" },
      { label: "Certifications", href: "/about/certifications" },
    ],
  },
  { label: "Our Solutions", href: "/solutions", mega: true },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const solutionChildren = [
  {
    ...BUCKETS[0],
    pages: [{ label: "MEP Solutions", href: "/solutions/mep" }],
  },
  {
    ...BUCKETS[1],
    pages: [
      { label: "Overview", href: "/solutions/mechanical-plumbing" },
      { label: "HVAC Installation", href: "/solutions/mechanical-plumbing/hvac-installation" },
      {
        label: "Plumbing and Drainage",
        href: "/solutions/mechanical-plumbing/plumbing-drainage-installation",
      },
    ],
  },
  {
    ...BUCKETS[2],
    pages: [
      { label: "Overview", href: "/solutions/electrical" },
      { label: "Electrical Installation", href: "/solutions/electrical/electrical-installation" },
      {
        label: "Extra Low Voltage",
        href: "/solutions/electrical/extra-low-voltage-installation",
      },
      {
        label: "Solar Power Plant",
        href: "/solutions/electrical/solar-power-plant-installation",
      },
    ],
  },
  {
    ...BUCKETS[3],
    pages: [
      { label: "Overview", href: "/solutions/fire-protection" },
      {
        label: "Fire Fighting & Fire Alarm",
        href: "/solutions/fire-protection/fire-fighting-fire-alarm-installation",
      },
      {
        label: "Fire Stopping Sealant",
        href: "/solutions/fire-protection/fire-stopping-sealant-application",
      },
    ],
  },
  {
    ...BUCKETS[4],
    pages: [{ label: "Maintenance Contract", href: "/solutions/maintenance" }],
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

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

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="hidden border-b border-navy/10 bg-mist md:block">
        <div className="container-site flex h-9 items-center justify-end gap-5 text-xs text-slate-dark">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="inline-flex items-center gap-1.5 hover:text-green"
          >
            <Phone className="h-3.5 w-3.5 text-green" />
            {siteConfig.phone}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-1.5 hover:text-green"
          >
            <Mail className="h-3.5 w-3.5 text-green" />
            {siteConfig.email}
          </a>
          <a
            href={whatsappLink(siteConfig.whatsappTel)}
            target="_blank"
            rel="noopener noreferrer"
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
              item.mega ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-dark hover:bg-mist hover:text-navy"
                    aria-expanded={megaOpen}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  <div
                    className={cn(
                      "absolute left-1/2 top-full z-50 w-[min(92vw,920px)] -translate-x-1/2 pt-2 transition",
                      megaOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0",
                    )}
                  >
                    <div className="rounded-md border border-navy/10 bg-white p-4 shadow-sm">
                      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                        {solutionChildren.map((bucket) => (
                          <div key={bucket.id} className="rounded-md bg-mist p-3">
                            <Link
                              href={bucket.href}
                              className="font-display text-sm font-bold text-navy hover:text-green"
                            >
                              {bucket.label}
                            </Link>
                            <p className="mt-1 text-xs text-slate">{bucket.summary}</p>
                            <ul className="mt-2 space-y-1">
                              {bucket.pages.map((page) => (
                                <li key={page.href}>
                                  <Link
                                    href={page.href}
                                    className="text-sm text-slate-dark hover:text-green"
                                  >
                                    {page.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : item.children ? (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-dark hover:bg-mist hover:text-navy"
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 min-w-[220px] pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
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

          <div className="hidden lg:block">
            <Button href="/contact">Get a Quote</Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-navy/15 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 top-[72px] z-40 bg-white transition lg:hidden",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav className="container-site flex h-full flex-col gap-2 overflow-y-auto py-6 pb-28">
          {nav.map((item) => (
            <div key={item.label} className="border-b border-navy/10 pb-3">
              <Link
                href={item.href}
                className="block py-2 font-display text-lg font-semibold text-navy"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.mega
                ? solutionChildren.map((bucket) => (
                    <div key={bucket.id} className="mb-3 ml-2">
                      <p className="mt-2 text-xs font-semibold text-slate">
                        {bucket.short}
                      </p>
                      {bucket.pages.map((page) => (
                        <Link
                          key={page.href}
                          href={page.href}
                          className="block py-1.5 text-sm text-slate-dark"
                          onClick={() => setMobileOpen(false)}
                        >
                          {page.label}
                        </Link>
                      ))}
                    </div>
                  ))
                : null}
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="ml-2 block py-1.5 text-sm text-slate-dark"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <Button href="/contact" className="mt-4 w-full">
            Get a Quote
          </Button>
        </nav>
      </div>
    </header>
  );
}
