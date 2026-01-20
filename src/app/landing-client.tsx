// @ts-nocheck
"use client";

import { useEffect, useState } from "react";
import { Navbar, Footer } from "@/components";
import Hero from "./hero";
import FeaturedProjects from "./featured-projects";

export default function LandingClient() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.motion = "force";
    const frame = requestAnimationFrame(() => setIsReady(true));
    return () => {
      cancelAnimationFrame(frame);
      delete document.documentElement.dataset.motion;
    };
  }, []);

  return (
    <div
      className={`min-h-screen lg:h-screen flex flex-col ${
        isReady ? "landing-sequence" : "opacity-0 scale-[0.98]"
      }`}
    >
      <Navbar animate={isReady} />
      <main className="flex-1 flex flex-col min-h-0">
        <Hero compact animate={isReady} />
        <FeaturedProjects compact animate={isReady} />
      </main>
      <Footer compact animate={isReady} />
    </div>
  );
}
