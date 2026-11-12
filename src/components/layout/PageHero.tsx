import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { PhotoMedia } from "@/components/ui/PhotoMedia";
import type { MediaRef } from "@/lib/media";

export function PageHero({
  title,
  intro,
  image,
  imageAlt,
  crumbs,
  media,
}: {
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
  crumbs: Crumb[];
  media?: MediaRef;
}) {
  const resolved: MediaRef = media ?? {
    src: image ?? "/images/pages/mep-industrial-systems.jpg",
    alt: imageAlt ?? "ElecTech MEP project photography",
  };

  return (
    <div>
      <div className="bg-white">
        <Breadcrumbs items={crumbs} />
      </div>
      <div className="relative overflow-hidden bg-[#0a1428]">
        <div className="absolute inset-0 z-0">
          <PhotoMedia
            image={resolved}
            priority
            sizes="100vw"
            objectPosition={resolved.objectPosition ?? "center right"}
          />
        </div>
        {/* Neutral scrim only behind text — left side */}
        <div className="pointer-events-none absolute inset-0 z-[1] photo-scrim-left" />
        <div className="container-site relative z-[2] py-14 md:py-16 lg:py-20">
          <h1 className="max-w-3xl text-[2.5rem] font-bold leading-tight !text-white md:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-[17px] text-white/90 md:text-lg">
            {intro}
          </p>
        </div>
      </div>
    </div>
  );
}
