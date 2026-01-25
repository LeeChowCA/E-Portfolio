"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { Bebas_Neue } from "next/font/google";
import { RevealSection, SkillCard } from "@/components";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const SKILL_HIGHLIGHTS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Systems",
    meta: "React / Next.js",
    note: "Core craft",
  },
  {
    icon: SwatchIcon,
    title: "AI Agent Dev",
    meta: "Tooling + RAG",
    note: "Automation",
  },
  {
    icon: EyeIcon,
    title: "Backend Dev",
    meta: "APIs + Data",
    note: "Scalable services",
  },
];

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development",
    children:
      "Crafting beautiful and functional web experiences is my specialty. Leveraging modern best practices, including React and Next.js, I design and build websites that captivate and engage users.",
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    children:
      "I build responsive and intuitive mobile apps that deliver seamless experiences on iOS and Android. Skilled in Swift, I manage every stage of the development process from concept to deployment.",
  },
  {
    icon: SwatchIcon,
    title: "AI Agent Development",
    children:
      "I build LLM-powered agents that orchestrate tools, automate workflows, and deliver reliable, context-aware results with clear evaluation loops.",
  },
  {
    icon: HashtagIcon,
    title: "Web Optimization",
    children:
      "I prioritize performance by optimizing websites and apps for speed, delivering a smooth, responsive experience that enhances user satisfaction and improves SEO.",
  },
  {
    icon: EyeIcon,
    title: "Backend Development",
    children:
      "I design secure, scalable APIs and services with thoughtful data modeling, authentication, and observability for production-ready systems.",
  },
  {
    icon: DocumentTextIcon,
    title: "Testing and Quality Assurance",
    children:
      "I rigorously test and debug applications to ensure they are reliable and secure, providing users with a safe and seamless experience. Quality and peace of mind are always top priorities.",
  },
];

export function Skills() {
  const primaryHighlight = SKILL_HIGHLIGHTS[0];
  const secondaryHighlight = SKILL_HIGHLIGHTS[1];
  const tertiaryHighlight = SKILL_HIGHLIGHTS[2];
  const PrimaryIcon = primaryHighlight.icon;
  const SecondaryIcon = secondaryHighlight.icon;
  const TertiaryIcon = tertiaryHighlight.icon;

  return (
    <div className="bg-white">
      <RevealSection
        id="skills"
        className="relative overflow-hidden bg-white px-6 pb-16 pt-20"
        direction="left"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-12 h-56 w-56 rounded-full bg-[#F4F4F4]" />
          <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-[#F9F9F9]" />
        </div>
        <div className="container mx-auto relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
              Welcome
            </p>
            <h1
              className={`${bebas.className} mt-4 text-6xl uppercase tracking-[0.08em] text-gray-900 sm:text-7xl`}
            >
              skills.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              A focused toolkit for turning ideas into reliable, user-ready
              products.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              From frontend polish to AI automation and backend systems, I build
              with clarity and speed.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-gray-400">
              <span className="rounded-full border border-gray-200 bg-white px-4 py-2">
                AI agents
              </span>
              <span className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Full-stack builds
              </span>
              <span className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Backend systems
              </span>
            </div>
          </div>
          <div className="relative mx-auto h-[360px] w-full max-w-xl">
            <div className="absolute right-6 top-4 flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-xs text-gray-600 shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-gray-900 text-[10px] font-semibold text-white">
                OK
              </span>
              Skill focus
            </div>
            <div className="absolute right-10 top-16 h-1 w-48 rounded-full bg-gray-200">
              <div className="absolute left-1/2 -top-2 h-5 w-5 rounded-full border border-gray-300 bg-white shadow-sm" />
            </div>

            <div className="absolute left-0 top-20 w-[72%] rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_18px_30px_rgba(0,0,0,0.12)]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
                  <PrimaryIcon className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {primaryHighlight.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    {primaryHighlight.meta}
                  </p>
                  <p className="mt-1 text-[11px] text-gray-400">
                    {primaryHighlight.note}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-28 w-[46%] rounded-2xl border border-gray-200 bg-white p-3 shadow-[0_16px_26px_rgba(0,0,0,0.1)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                  <SecondaryIcon className="h-5 w-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {secondaryHighlight.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    {secondaryHighlight.meta}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-12 w-[58%] rounded-2xl border border-gray-200 bg-white p-3 shadow-[0_16px_26px_rgba(0,0,0,0.1)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                    <TertiaryIcon className="h-5 w-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {tertiaryHighlight.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {tertiaryHighlight.meta}
                    </p>
                  </div>
                </div>
                <span className="text-gray-400">*</span>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                {tertiaryHighlight.note}
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection
        className="bg-[#F6F6F6] px-8 pb-16 pt-16"
        direction="right"
      >
        <div className="container mx-auto mb-16 text-center">
          <Typography color="blue-gray" className="mb-2 font-bold uppercase">
            my skills
          </Typography>
          <Typography variant="h1" color="blue-gray" className="mb-4">
            What I do
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full !text-gray-500 lg:w-10/12"
          >
            I&apos;m passionate about building immersive digital experiences that go
            beyond code. Creating engaging and impactful solutions is more than
            my profession - it&apos;s my calling. Explore below to see how I can help you.
          </Typography>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((props, idx) => (
            <SkillCard key={idx} {...props} />
          ))}
        </div>
      </RevealSection>
    </div>
  );
}

export default Skills;
