// @ts-nocheck
"use client";

import Link from "next/link";
import { Navbar as MTNavbar } from "@material-tailwind/react";
import { NAV_ITEMS, SOCIAL_LINKS } from "./site-links";

export function Navbar() {
  return (
    <MTNavbar
      shadow={false}
      fullWidth
      className="sticky top-0 z-50 rounded-none border-0 bg-[#111111]"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 py-3">
        <Link href="/#about" className="flex items-center gap-3 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-xs font-bold tracking-[0.3em]">
            LZ
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white/90">
            Lee Zhou
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-6">
          <nav>
            <ul className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.25em] text-white/70 md:text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="text-white/70 transition-colors duration-200 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </MTNavbar>
  );
}

export default Navbar;
