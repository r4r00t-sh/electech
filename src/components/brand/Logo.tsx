import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  light,
  priority,
}: {
  className?: string;
  light?: boolean;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label="ElecTech MEP home"
    >
      <Image
        src="/images/brand/electech-logo.png"
        alt="ElecTech Electromechanical Works LLC"
        width={156}
        height={115}
        priority={priority}
        className={cn(
          "h-11 w-auto md:h-12",
          light && "brightness-0 invert",
        )}
      />
    </Link>
  );
}
