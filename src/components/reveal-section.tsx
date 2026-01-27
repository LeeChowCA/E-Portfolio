// @ts-nocheck
"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealDirection = "up" | "left" | "right";

export function RevealSection({
  children,
  className = "",
  direction = "up",
  id,
}: {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  id?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const directionClass =
    direction === "left" ? "reveal-left" : direction === "right" ? "reveal-right" : "reveal";

  return (
    <section
      ref={ref}
      id={id}
      className={`${directionClass} ${isVisible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

export default RevealSection;
