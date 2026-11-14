import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-xl py-16 text-center">
        <p className="text-sm font-semibold tracking-wide text-amber">404</p>
        <h1 className="mt-3 text-4xl font-bold text-navy">Page not found</h1>
        <p className="mt-4 text-slate">
          The page you requested is not available. Return home or speak with our
          engineers about your project.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="ghost">
            Request a Quotation
          </Button>
        </div>
      </div>
    </Section>
  );
}
