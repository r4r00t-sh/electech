import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { BUCKETS } from "@/lib/buckets";
import { siteConfig } from "@/content/site";
import { whatsappLink } from "@/lib/utils";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Who We Are", href: "/about/who-we-are" },
  { label: "Why Choose Us", href: "/about/why-choose-us" },
  { label: "Our Clients", href: "/clients" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-site grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            {siteConfig.footerTagline}
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold text-white">
            Quick links
          </h3>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 hover:text-green"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold text-white">
            Our Solutions
          </h3>
          <ul className="mt-4 space-y-2">
            {BUCKETS.map((bucket) => (
              <li key={bucket.id}>
                <Link
                  href={bucket.href}
                  className="text-sm text-white/70 hover:text-green"
                >
                  {bucket.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>
              {siteConfig.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-flex items-center gap-2 hover:text-green"
              >
                <Phone className="h-4 w-4 text-green" />
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink(siteConfig.whatsappTel)}
                className="inline-flex items-center gap-2 hover:text-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 text-green" />
                WhatsApp {siteConfig.whatsapp}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 hover:text-green"
              >
                <Mail className="h-4 w-4 text-green" />
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-4 text-[14px] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <a href="#main" className="font-medium text-white/70 hover:text-green">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
