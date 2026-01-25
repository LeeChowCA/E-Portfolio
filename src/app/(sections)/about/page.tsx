// @ts-nocheck
import Image from "next/image";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { PageShell, RevealSection } from "@/components";
import SnapshotCarousel from "@/components/snapshot-carousel";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const SNAPSHOT_IMAGES = [
  { src: "/image/snapshot/1.jpg", alt: "Snapshot 1" },
  { src: "/image/snapshot/2.jpg", alt: "Snapshot 2" },
  { src: "/image/snapshot/3.jpg", alt: "Snapshot 3" },
  { src: "/image/snapshot/4.jpg", alt: "Snapshot 4" },
  { src: "/image/snapshot/5.jpg", alt: "Snapshot 5" },
  { src: "/image/snapshot/6.jpg", alt: "Snapshot 6" },
  { src: "/image/snapshot/7.jpg", alt: "Snapshot 7" },
  { src: "/image/snapshot/8.jpg", alt: "Snapshot 8" },
];

const SKILL_FOCUS = [
  {
    label: "Cooking",
    value: 80,
    note: "New food experiments",
  },
  {
    label: "Photograph",
    value: 72,
    note: "Capturing moments",
  },
  {
    label: "Body building",
    value: 88,
    note: "Discipline engine",
  },
  {
    label: "Biking",
    value: 64,
    note: "Endurance rides",
  },
  {
    label: "Developing",
    value: 96,
    note: "Core craft",
  },
];

const FUN_FACTS = [
  "Long rides and mountain air recharge me.",
  "I love cooking and trying new foods often.",
  "Biked to Tibet in 2016: 25 days, 2,170 km.",
  "Volunteered as an English teacher in rural regions for two months.",
  "Quiet moments help me reset, but I also enjoy being with people.",
  "I enjoy playing games when I need a quick creative break.",
  "I love building systems that feel effortless to use.",
  "Discipline from bodybuilding shapes how I ship products.",
  "I like traveling and exploring new places.",
];

const CURRENT_PRIORITIES = [
  {
    title: "Now",
    verb: "Deepen",
    detail: "AI product engineering and ship faster iterations.",
  },
  {
    title: "Next",
    verb: "Expand",
    detail: "system design depth with scalable data foundations.",
  },
  {
    title: "Later",
    verb: "Explore",
    detail: "product leadership and mentoring opportunities.",
  },
];

export default function AboutPage() {
  const sortedSkillFocus = [...SKILL_FOCUS].sort((a, b) => b.value - a.value);
  const topSkill = sortedSkillFocus[0];

  return (
    <PageShell className="bg-white text-gray-900">
        <RevealSection
          className="relative overflow-hidden px-6 pb-16 pt-14 lg:pb-20 lg:pt-20"
          direction="left"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 top-12 h-48 w-48 rounded-full bg-[#F4F4F4]" />
            <div className="absolute right-0 top-32 h-64 w-64 rounded-full bg-[#F8F8F8]" />
          </div>
          <div className="container mx-auto relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
                About
              </p>
              <h1
                className={`${bebas.className} mt-3 text-6xl uppercase tracking-[0.08em] text-gray-900 sm:text-7xl`}
              >
                about.
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Full-stack and AI-focused developer building products that pair
                clear architecture with real-world impact. I care about robust
                data foundations, clean UX, and shipping systems that scale.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
                <span className="rounded-full border border-gray-200 px-3 py-1">
                  Full-stack delivery
                </span>
                <span className="rounded-full border border-gray-200 px-3 py-1">
                  AI automation
                </span>
                <span className="rounded-full border border-gray-200 px-3 py-1">
                  Data engineering
                </span>
              </div>
              <div className="mt-8 grid gap-4 text-sm text-gray-600 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-400">
                    Email
                  </p>
                  <a
                    href="mailto:zhoujianpingls@outlook.com"
                    className="font-semibold text-gray-900"
                  >
                    zhoujianpingls@outlook.com
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-400">
                    Phone
                  </p>
                  <span className="font-semibold text-gray-900">
                    +1 (250) 891 3382
                  </span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-400">
                    Portfolio
                  </p>
                  <a
                    href="https://e-portfolio-liart.vercel.app"
                    className="font-semibold text-gray-900"
                    target="_blank"
                    rel="noreferrer"
                  >
                    e-portfolio-liart.vercel.app
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-400">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/LeeChowCA"
                    className="font-semibold text-gray-900"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/LeeChowCA
                  </a>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/resume/Resume_Lee_Web.pdf"
                  className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white"
                >
                  View resume
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative aspect-square w-[clamp(16rem,30vw,24rem)]">
                <div className="absolute inset-0 rounded-full bg-white shadow-[0_30px_80px_rgba(0,0,0,0.12)]" />
                <Image
                  src="/image/developer.jpg"
                  alt="Lee Zhou portrait"
                  fill
                  className="rounded-full object-cover"
                  sizes="(min-width: 1280px) 24rem, (min-width: 768px) 30vw, 16rem"
                />
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection className="px-6 pb-16" direction="right">
          <div className="container mx-auto">
            <div className="h-px w-full bg-gray-200/80" />
            <div className="mt-6 px-1 sm:px-4">
              <SnapshotCarousel images={SNAPSHOT_IMAGES} />
            </div>
          </div>
        </RevealSection>
{/* 
        <section className="px-6 py-16">
          <div className="container mx-auto grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_14px_26px_rgba(15,15,15,0.08)]">
              <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                Full-stack builder
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-gray-900">
                Systems that ship
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>Product engineering with Next.js and React</li>
                <li>Scalable backend services and data modeling</li>
                <li>Secure auth, payments, and production deployments</li>
                <li>Clear UX with performance in mind</li>
              </ul>
            </div>

            <div className="relative hidden h-52 w-52 items-center justify-center lg:flex">
              <div className="absolute inset-0 rounded-full bg-[#F4F4F4]" />
              <div className="absolute inset-4 rounded-full bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]" />
              <Image
                src="/image/developer-avatar.png"
                alt="Developer avatar"
                width={160}
                height={160}
                className="relative z-10 rounded-full"
              />
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_14px_26px_rgba(15,15,15,0.08)]">
              <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                AI developer
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-gray-900">
                Intelligence at scale
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>LangChain and LangGraph agent orchestration</li>
                <li>Vector search, embeddings, and RAG workflows</li>
                <li>Automated ingestion pipelines with n8n</li>
                <li>Evaluation, tracing, and model monitoring</li>
              </ul>
            </div>
          </div>
        </section> */}

        <RevealSection className="bg-[#F6F6F6] px-6 py-16" direction="left">
          <div className="container mx-auto grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative h-72 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_18px_30px_rgba(0,0,0,0.08)]">
              <Image
                src="/image/snapshot/4.jpg"
                alt="Adventure highlight"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                Random facts
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-gray-900">
                Beyond the code
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-gray-600">
                {FUN_FACTS.map((fact) => (
                  <li key={fact} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gray-400" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealSection>

        <RevealSection className="bg-[#F6F6F6] px-6 py-16" direction="right">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-3xl font-semibold text-gray-900">
                Skills focus
              </h2>
              <span className="text-xs uppercase tracking-[0.35em] text-gray-400">
                Based on consistent practice and focus
              </span>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_0.9fr]">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_16px_28px_rgba(0,0,0,0.08)] lg:p-10">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                      Ranked focus bars
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                      Clarity first
                    </h3>
                  </div>
                  <span className="text-xs uppercase tracking-[0.35em] text-gray-400">
                    Sorted high to low
                  </span>
                </div>
                <div className="mt-8 space-y-4">
                  {sortedSkillFocus.map((item) => {
                    const isTopSkill = item.label === topSkill.label;
                    return (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-gray-200 bg-white px-4 py-3.5 shadow-[0_10px_20px_rgba(0,0,0,0.06)] sm:px-5"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="text-sm font-semibold text-gray-900">
                                {item.label}
                              </p>
                              {isTopSkill ? (
                                <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-700">
                                  Primary Focus
                                </span>
                              ) : null}
                            </div>
                            <p className="text-xs text-gray-500">{item.note}</p>
                            {isTopSkill ? (
                              <p className="mt-1 text-xs font-medium text-gray-600">
                                Core craft · Systems · AI products
                              </p>
                            ) : null}
                          </div>
                          <span className="w-12 text-right text-xs font-semibold text-gray-500 tabular-nums">
                            {item.value}%
                          </span>
                        </div>
                        <div className="mt-3.5 h-2.5 w-full rounded-full bg-gray-100">
                          <div
                            className={`h-full rounded-full ${
                              isTopSkill ? "bg-amber-500" : "bg-gray-800/80"
                            }`}
                            style={{ width: `${item.value}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_16px_28px_rgba(0,0,0,0.08)] lg:p-10">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                  Current priorities
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                  Execution timeline
                </h3>
                <div className="mt-8 space-y-5">
                  {CURRENT_PRIORITIES.map((priority) => (
                    <div
                      key={priority.title}
                      className="rounded-2xl border border-gray-200 bg-gray-50/70 px-4 py-4"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
                        {priority.title}
                      </p>
                      <p className="mt-2 text-sm text-gray-700">
                        <span className="font-semibold text-gray-900">
                          {priority.verb}
                        </span>{" "}
                        {priority.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection className="px-6 py-16" direction="left">
          <div className="container mx-auto rounded-3xl border border-gray-200 bg-white p-8 shadow-[0_16px_32px_rgba(0,0,0,0.08)]">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-semibold text-gray-900">
                  Want the full story?
                </h2>
                <p className="mt-3 text-sm text-gray-600">
                  Explore my featured projects or reach out to collaborate on
                  full-stack and AI-driven products.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/work"
                  className="rounded-full bg-gray-900 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white"
                >
                  View work
                </Link>
                <a
                  href="mailto:zhoujianpingls@outlook.com"
                  className="rounded-full border border-gray-300 px-5 py-2 text-xs uppercase tracking-[0.3em] text-gray-700"
                >
                  Contact me
                </a>
              </div>
            </div>
          </div>
        </RevealSection>
    </PageShell>
  );
}
