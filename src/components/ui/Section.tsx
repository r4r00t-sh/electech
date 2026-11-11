import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  tone?: "white" | "mist" | "navy";
  id?: string;
};

export function Section({ children, className, tone = "white", id }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "section-pad",
        tone === "white" && "bg-white",
        tone === "mist" && "bg-mist",
        tone === "navy" && "bg-navy text-white",
        className,
      )}
    >
      <div className="container-site">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? (
        <p
          className={cn(
            "mb-2 text-sm font-semibold",
            light ? "text-green" : "text-green",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-bold md:text-4xl",
          light ? "!text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-3 text-base md:text-lg",
            light ? "text-white/75" : "text-slate-dark",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
