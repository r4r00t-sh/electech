import Link from "next/link";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { TrackedAnchor } from "@/components/analytics/TrackedLink";
import { BUCKETS } from "@/lib/buckets";
import { siteConfig } from "@/content/site";
import { whatsappLink } from "@/lib/utils";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy notice", href: "/privacy" },
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
          <p className="mt-3 text-sm font-medium text-white/85">
            {siteConfig.legalName}
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold text-white">Company</h3>
          <ul className="mt-4 space-y-2">
            {companyLinks.map((link) => (
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
          <h3 className="font-display text-sm font-bold text-white">Services</h3>
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
            <li>
              <Link
                href="/solutions/building-intelligence"
                className="text-sm text-white/70 hover:text-green"
              >
                Building Intelligence
              </Link>
            </li>
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
                href={siteConfig.address.mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-green"
              >
                <MapPin className="h-4 w-4 text-green" />
                View on map
              </a>
            </li>
            <li>
              <TrackedAnchor
                href={`tel:${siteConfig.phoneTel}`}
                event="click_to_call"
                context="footer"
                className="inline-flex items-center gap-2 hover:text-green"
              >
                <Phone className="h-4 w-4 text-green" />
                {siteConfig.phone}
              </TrackedAnchor>
            </li>
            <li>
              <TrackedAnchor
                href={whatsappLink(siteConfig.whatsappTel)}
                event="whatsapp_click"
                context="footer"
                className="inline-flex items-center gap-2 hover:text-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 text-green" />
                WhatsApp {siteConfig.whatsapp}
              </TrackedAnchor>
            </li>
            <li>
              <TrackedAnchor
                href={`mailto:${siteConfig.email}`}
                event="email_click"
                context="footer"
                className="inline-flex items-center gap-2 hover:text-green"
              >
                <Mail className="h-4 w-4 text-green" />
                {siteConfig.email}
              </TrackedAnchor>
            </li>
            <li className="text-white/55">{siteConfig.websiteDisplay}</li>

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
