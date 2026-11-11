import Image from "next/image";
import {
  Building2,
  Cable,
  Flame,
  Wrench,
  Settings2,
} from "lucide-react";
import type { MediaRef } from "@/lib/media";
import type { BucketId } from "@/lib/buckets";
import { cn } from "@/lib/utils";

const bucketIcons: Record<BucketId, typeof Wrench> = {
  mep: Settings2,
  "mechanical-plumbing": Wrench,
  electrical: Cable,
  "fire-protection": Flame,
  maintenance: Building2,
};

export function PhotoMedia({
  image,
  className,
  sizes = "100vw",
  priority,
  objectPosition,
  fill = true,
}: {
  image: MediaRef;
  className?: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
  fill?: boolean;
}) {
  if (image.placeholder || !image.src) {
    const Icon = image.bucket ? bucketIcons[image.bucket] : Settings2;
    return (
      <div
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-3 bg-navy-deep text-white/70",
          className,
        )}
        role="img"
        aria-label={image.alt}
      >
        <Icon className="h-10 w-10 text-green" aria-hidden />
        <span className="max-w-[12rem] px-3 text-center text-[14px] leading-snug text-white/55">
          [CLIENT TO PROVIDE photo]
        </span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        className={cn("object-cover", className)}
        style={objectPosition ? { objectPosition } : undefined}
        sizes={sizes}
      />
    );
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={1200}
      height={800}
      priority={priority}
      className={cn("h-full w-full object-cover", className)}
      style={objectPosition ? { objectPosition } : undefined}
      sizes={sizes}
    />
  );
}
