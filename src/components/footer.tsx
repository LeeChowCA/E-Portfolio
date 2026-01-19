// @ts-nocheck

import Link from "next/link";
import { NAV_ITEMS, SOCIAL_LINKS } from "./site-links";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-[#F6F6F6] px-8 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
        <Link href="/#about" className="flex items-center gap-3 text-gray-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-xs font-bold tracking-[0.3em]">
            LZ
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-900">
            Lee Zhou
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-6">
          <nav>
            <ul className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.25em] text-gray-600 md:text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition-colors duration-200 hover:text-gray-900"
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
                  className="text-gray-600 transition-colors duration-200 hover:text-gray-900"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-6 text-center text-xs uppercase tracking-[0.2em] text-gray-500">
        (c) {CURRENT_YEAR} Lee Zhou. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
