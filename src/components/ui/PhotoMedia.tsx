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
  const position = objectPosition ?? image.objectPosition;

  if (image.placeholder || !image.src) {
    const Icon = image.bucket ? bucketIcons[image.bucket] : Settings2;
    return (
      <div
        className={cn(
          "flex h-full w-full items-center justify-center bg-navy-deep text-white/70",
          className,
        )}
        role="img"
        aria-label={image.alt}
      >
        {/* TODO(image): dedicated photo — see docs/image-todo.md */}
        <Icon className="h-10 w-10 text-green" aria-hidden />
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
        style={position ? { objectPosition: position } : undefined}
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
      style={position ? { objectPosition: position } : undefined}
      sizes={sizes}
    />
  );
}
