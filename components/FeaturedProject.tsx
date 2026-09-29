import Image from "next/image";
import type { ReactNode } from "react";
import type { Picture } from "@/content";

type FeaturedProjectProps = {
  heading: ReactNode;
  year: number;
  image: Picture;
  children: ReactNode;
};

export function FeaturedProject({ heading, year, image, children }: FeaturedProjectProps) {
  return (
    <li className="flex flex-col gap-4 sm:flex-row sm:gap-6">
      <div
        className={`relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-md border border-line sm:w-52 ${
          image.pixelated ? "bg-white" : ""
        }`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 640px) 208px, 100vw"
          className={image.pixelated ? "object-contain [image-rendering:pixelated]" : "object-cover"}
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-6">
          <h3 className="font-medium text-heading">{heading}</h3>
          <time dateTime={String(year)} className="shrink-0 font-mono text-xs">
            {year}
          </time>
        </div>
        {children}
      </div>
    </li>
  );
}
