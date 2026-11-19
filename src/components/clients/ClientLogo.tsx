import Image from "next/image";
import type { ClientRecord } from "@/content/clients";
import { clientLogoDisplaySize } from "@/content/clients";
import { cn } from "@/lib/utils";

export function ClientLogo({
  client,
  maxHeight = 56,
  className,
}: {
  client: ClientRecord;
  maxHeight?: number;
  className?: string;
}) {
  const { cssH, imgW, imgH } = clientLogoDisplaySize(client, maxHeight);
  const tileDark = Boolean(client.lightLogo);

  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center rounded-md border border-navy/10 p-3 transition",
        tileDark ? "bg-navy" : "bg-white",
        className,
      )}
    >
      <Image
        src={client.logo}
        alt={client.name}
        width={imgW}
        height={imgH}
        className={cn(
          "w-auto object-contain transition duration-200",
          "grayscale group-hover:grayscale-0 group-focus-within:grayscale-0",
          "motion-reduce:grayscale-0",
        )}
        style={{ maxHeight: cssH, height: cssH }}
      />
    </div>
  );
}
