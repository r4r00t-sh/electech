import type { NextConfig } from "next";

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
    ];
  },
};

export default nextConfig;
