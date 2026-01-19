// @ts-nocheck
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

function Hero({ compact = false }) {
  const sectionRef = useRef(null);
  const centerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSide, setHoveredSide] = useState(null);

  const heroImages = {
    developer: { src: "/image/developer.jpg", alt: "Developer portrait" },
    developerAvatar: { src: "/image/developer-avatar.png", alt: "Developer avatar" },
    bodybuilder: { src: "/image/bodyBuilding.jpg", alt: "Bodybuilder portrait" },
  };

  const hoverImageMap = {
    left: "bodybuilder",
    right: "developerAvatar",
  };

  
  const fadeClass = isVisible ? "animate-fade-up" : "opacity-0 translate-y-6";

  const activeImageKey = hoveredSide ? hoverImageMap[hoveredSide] : "developer";
  const isDeveloperActive = activeImageKey === "developer";
  const isDeveloperAvatarActive = activeImageKey === "developerAvatar";
  const isBodybuilderActive = activeImageKey === "bodybuilder";
  const sectionClassName = compact
    ? "relative flex flex-col flex-1 overflow-hidden bg-white px-4 pb-12 pt-10 sm:px-6 sm:pb-14 sm:pt-14 lg:px-8"
    : "relative overflow-hidden bg-white px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8";
  const gridClassName = compact
    ? "container mx-auto grid grid-cols-1 items-center gap-8 sm:gap-9 lg:grid-cols-[1fr_auto_1fr]"
    : "container mx-auto grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-[1fr_auto_1fr]";
  const contentPaddingClass = compact
    ? "relative z-10 px-4 py-7 sm:px-6 sm:py-9"
    : "relative z-10 px-4 py-8 sm:px-6 sm:py-10";
  const titleClassName = compact
    ? `${bebas.className} mt-3 text-5xl uppercase tracking-[0.08em] text-[#111111] sm:text-6xl lg:text-6xl xl:text-6xl`
    : `${bebas.className} mt-3 text-5xl uppercase tracking-[0.08em] text-[#111111] sm:text-6xl lg:text-6xl xl:text-7xl`;
  const codeTitleClassName = compact
    ? `${bebas.className} mt-3 text-5xl uppercase tracking-[0.08em] text-gray-900 sm:text-6xl lg:text-6xl xl:text-6xl`
    : `${bebas.className} mt-3 text-5xl uppercase tracking-[0.08em] text-gray-900 sm:text-6xl lg:text-6xl xl:text-7xl`;
  const imageWrapClassName = compact
    ? "relative aspect-square w-[clamp(14rem,30vw,26rem)]"
    : "relative aspect-square w-[clamp(14rem,32vw,28rem)]";
  const contactClassName = compact
    ? `container mx-auto mt-auto pt-6 text-center ${fadeClass}`
    : `container mx-auto mt-12 text-center ${fadeClass}`;

  const handleMouseMove = (event) => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const centerRect = centerRef.current?.getBoundingClientRect();
    if (centerRect) {
      if (event.clientX >= centerRect.left && event.clientX <= centerRect.right) {
        setHoveredSide(null);
        return;
      }
      const nextSide = event.clientX < centerRect.left ? "left" : "right";
      setHoveredSide((prev) => (prev === nextSide ? prev : nextSide));
      return;
    }
    const nextSide = event.clientX < rect.left + rect.width / 2 ? "left" : "right";
    setHoveredSide((prev) => (prev === nextSide ? prev : nextSide));
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);


  return (
    <section
      id="about"
      ref={sectionRef}
      className={sectionClassName}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredSide(null)}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#F1F1F1] opacity-70" />
        <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-[#F6F6F6] opacity-80" />
        <div className="absolute left-1/2 top-16 hidden h-[70%] w-px -translate-x-1/2 bg-gray-200 lg:block" />
      </div>

      <div className={gridClassName}>
        <div
          className={`order-1 min-w-0 text-center lg:order-1 lg:text-right relative ${fadeClass} before:content-[''] before:absolute before:inset-0 before:bg-[url('/image/hero-grid.svg')] before:bg-cover before:bg-center before:opacity-[0.06] before:pointer-events-none`}
          style={{ animationDelay: "0ms" }}
        >
          <div className={contentPaddingClass}>
            <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
              Strength
            </p>
            <h1
              className={titleClassName}
            >
              Bodybuilder
            </h1>
            <Typography className="mt-4 text-sm text-gray-600 sm:text-base">
              Built on discipline, routine, and performance. I bring that same
              focus into every project I ship.
            </Typography>
          </div>
        </div>

        <div
          className={`order-2 flex justify-center lg:order-2 ${fadeClass}`}
          style={{ animationDelay: "120ms" }}
          ref={centerRef}
        >
          <div className={imageWrapClassName}>
            <div className="absolute inset-0 rounded-full bg-white shadow-[0_30px_70px_rgba(0,0,0,0.15)]" />
            <Image
              src={heroImages.developer.src}
              alt={heroImages.developer.alt}
              fill
              priority
              className={`rounded-full object-cover transition-all duration-500 ease-out ${
                isDeveloperActive ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
              }`}
              sizes="(min-width: 1280px) 28rem, (min-width: 640px) 32vw, 14rem"
            />
            <Image
              src={heroImages.developerAvatar.src}
              alt={heroImages.developerAvatar.alt}
              fill
              className={`rounded-full object-cover transition-all duration-500 ease-out ${
                isDeveloperAvatarActive ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
              }`}
              sizes="(min-width: 1280px) 28rem, (min-width: 640px) 32vw, 14rem"
            />
            <Image
              src={heroImages.bodybuilder.src}
              alt={heroImages.bodybuilder.alt}
              fill
              className={`rounded-full object-cover transition-all duration-500 ease-out ${
                isBodybuilderActive ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
              }`}
              sizes="(min-width: 1280px) 28rem, (min-width: 640px) 32vw, 14rem"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/40 via-transparent to-white/10" />
          </div>
        </div>

        <div
          className={`order-3 min-w-0 text-center lg:text-left relative ${fadeClass} before:content-[''] before:absolute before:inset-0 before:bg-[url('/image/hero-code.svg')] before:bg-cover before:bg-center before:opacity-[0.05] before:pointer-events-none`}
          style={{ animationDelay: "220ms" }}
        >
          <div className={contentPaddingClass}>
            <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
              Code
            </p>
            <h2
              className={codeTitleClassName}
            >
              {"<developer>"}
            </h2>
            <Typography className="mt-4 text-sm text-gray-600 sm:text-base">
              Front-end developer who builds fast, elegant, and scalable web
              experiences with a focus on clarity and craft.
            </Typography>
          </div>
        </div>
      </div>

      <div className={contactClassName} style={{ animationDelay: "320ms" }}>
        <Typography className="text-xs uppercase tracking-[0.4em] text-gray-500">
          Contact me at
        </Typography>
        <a
          href="mailto:zhoujianpingls@outlook.com"
          className="mt-2 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-gray-900"
        >
          zhoujianpingls@outlook.com
        </a>
      </div>
    </section>
  );
}

export default Hero;
