const NAMES = [
  "Sofitel",
  "Amazon",
  "Etisalat",
  "Imdaad",
  "Real Image",
  "Ascentia",
  "GTZ Shipping",
  "Atelier",
  "Smart Salem",
];

/** Greyscale text wordmarks until official logo files are supplied. */
export function ClientLogoStrip({
  title = "Trusted by organisations across the UAE",
}: {
  title?: string;
}) {
  return (
    <div>
      <p className="mb-6 text-center text-sm font-semibold text-slate-dark">
        {title}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {NAMES.map((name) => (
          <span
            key={name}
            className="font-display text-sm font-semibold tracking-wide text-slate grayscale md:text-base"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
