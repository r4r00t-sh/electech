import type { NextConfig } from "next";

const legacyProjectSlugs = [
  "mep-works-al-zahiya-villa",
  "mep-works-sofitel-hotel",
  "mep-works-amazon-ecommerce-office",
  "mep-works-real-image-headquarters",
  "mep-works-smart-salem-city-walk",
  "mep-works-innovative-food-outlet-imdaad",
  "mep-works-two-bedroom-flat",
  "mep-works-atelier-difc",
  "mep-works-etisalat-kifaf",
  "mep-works-gtz-shipping",
  "mep-works-anex-building-hamariya",
  "mep-works-ascentia-office",
  // older legacy titles if any remain bookmarked
  "luxurious-villa-transformation",
  "corporate-headquarters-upgrade-real-image",
  "healthcare-facility-upgrade-smart-salem",
  "two-bedroom-flat-dhiraj-kumar",
  "logistics-office-development-gtz",
  "government-office-modernization-anex",
  "commercial-office-revamp-ascentia",
];

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      { source: "/company-overview", destination: "/about", permanent: true },
      { source: "/company-overview/:path*", destination: "/about/:path*", permanent: true },
      { source: "/what-we-do", destination: "/solutions", permanent: true },
      { source: "/services", destination: "/solutions", permanent: true },
      { source: "/service/:path*", destination: "/solutions", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/blog/:slug", destination: "/insights/:slug", permanent: true },
      {
        source: "/insights/weekly-mep-progress-reports",
        destination: "/insights/mep-handover-package",
        permanent: true,
      },
      { source: "/projects-2", destination: "/projects", permanent: true },
      { source: "/hvac-installation", destination: "/solutions/mechanical-plumbing/hvac-installation", permanent: true },
      { source: "/electrical-installation", destination: "/solutions/electrical/electrical-installation", permanent: true },
      { source: "/plumbing-and-drainage-installation", destination: "/solutions/mechanical-plumbing/plumbing-drainage-installation", permanent: true },
      { source: "/fire-fighting", destination: "/solutions/fire-protection/fire-fighting-fire-alarm-installation", permanent: true },
      { source: "/solar-power-plant-installation", destination: "/solutions/electrical/solar-power-plant-installation", permanent: true },
      ...legacyProjectSlugs.map((slug) => ({
        source: `/projects/${slug}`,
        destination: "/projects",
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
