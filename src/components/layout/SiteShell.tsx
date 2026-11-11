import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileBar } from "./MobileBar";
import { CookieNotice } from "@/components/seo/CookieNotice";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" className="pb-20 md:pb-0">
        {children}
      </main>
      <Footer />
      <MobileBar />
      <CookieNotice />
    </>
  );
}
