// @ts-nocheck
"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function PageShell({
  children,
  className = "",
  mainClassName = "",
}: {
  children: ReactNode | ((isReady: boolean) => ReactNode);
  className?: string;
  mainClassName?: string;
}) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.motion = "force";
    const frame = requestAnimationFrame(() => setIsReady(true));
    return () => {
      cancelAnimationFrame(frame);
      delete document.documentElement.dataset.motion;
    };
  }, []);

  const content = typeof children === "function" ? children(isReady) : children;

  return (
    <div
      className={`min-h-screen flex flex-col ${
        isReady ? "landing-sequence" : "opacity-0 scale-[0.98]"
      } ${className}`}
    >
      <Navbar animate={isReady} />
      <main className={`flex-1 ${mainClassName}`}>{content}</main>
      <Footer animate={isReady} />
    </div>
  );
}

export default PageShell;
