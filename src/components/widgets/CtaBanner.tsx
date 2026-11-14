import { Button } from "@/components/ui/Button";

export function CtaBanner({
  title = "Planning an MEP Project?",
  description = "From a villa water-system upgrade to a commercial office MEP installation, our team can review your requirements and propose a practical scope of work.",
  buttonLabel = "Request a Quotation",
}: {
  title?: string;
  description?: string;
  buttonLabel?: string;
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
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}
