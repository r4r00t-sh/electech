import { Button } from "@/components/ui/Button";

export function CtaBanner({
  title = "Planning an MEP project? Talk to our engineers",
  description = "Tell us about your fit-out, upgrade or maintenance brief. We will respond with clear next steps.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="rounded-md bg-navy px-6 py-10 md:px-10 md:py-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-bold !text-white md:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-white/75">{description}</p>
        </div>
        <Button href="/contact" className="shrink-0">
          Get a Quote
        </Button>
      </div>
    </div>
  );
}
