// @ts-nocheck
"use client";

import Image from "next/image";

type SnapshotImage = {
  src: string;
  alt: string;
};

export default function SnapshotCarousel({
  images,
}: {
  images: SnapshotImage[];
}) {
  return (
    <div className="relative overflow-hidden">
      <div
        className="snapshot-marquee-track flex gap-4 px-1 pb-2"
        style={{ ["--marquee-duration" as string]: `${Math.max(images.length * 3.8, 20)}s` }}
      >
        {[...images, ...images].map((item, index) => (
          <div
            key={`${item.alt}-${index}`}
            aria-hidden={index >= images.length}
            className="shrink-0 w-[11.5rem] sm:w-56 lg:w-64"
          >
            <div className="h-full rounded-2xl border border-gray-200 bg-white p-2 shadow-[0_10px_20px_rgba(0,0,0,0.08)]">
              <div className="relative h-28 w-full overflow-hidden rounded-xl sm:h-32 lg:h-36">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 16rem, 50vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
