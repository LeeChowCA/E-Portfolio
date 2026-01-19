// @ts-nocheck
"use client";

import Image from "next/image";
import Link from "next/link";
import { Typography, Button } from "@material-tailwind/react";

const FEATURED_PROJECTS = [
  {
    kicker: "Full-stack LMS",
    title: "Learning Management System",
    desc: "A full-stack LMS with student and instructor dashboards, course management, and AI-powered quizzes.",
    img: "/image/lms/langding_page.png",
    tags: ["Dashboards", "Course Builder", "AI Quizzes"],
    cta: "View Live Demo",
    href: "https://language-cosmos-lms.vercel.app/",
  },
  {
    kicker: "AI Agent",
    title: "AI Agent Project",
    desc: "An AI agent that automates workflows, answers questions, and orchestrates tools with context.",
    img: "/image/portfolio.png",
    tags: ["Automation", "RAG", "Tooling"],
    cta: "View Project",
    href: "",
  },
  {
    kicker: "3D FPS Game",
    title: "FPS Game",
    desc: "3D FPS built in Unity with aiming, shooting, enemy respawns, and health pickups.",
    img: "/image/fps.png",
    tags: ["Unity", "C#", "3D"],
    cta: "View Project",
    href: "/fps",
  },
];

export function FeaturedProjects({ compact = false }) {
  const sectionClassName = compact
    ? "relative bg-[#F1F1F1] px-6 py-14"
    : "relative bg-[#F1F1F1] px-8 py-20";
  const contentClassName = compact
    ? "container mx-auto relative max-w-[1180px]"
    : "container mx-auto relative max-w-[1200px]";
  const headerClassName = compact
    ? "mb-8 text-center animate-fade-up"
    : "mb-12 text-center animate-fade-up";
  const headerLineClassName = compact
    ? "flex items-center justify-center gap-3 text-[9px] uppercase tracking-[0.3em] text-gray-500"
    : "flex items-center justify-center gap-6 text-xs uppercase tracking-[0.35em] text-gray-500";
  const titleClassName = compact ? "mt-2 text-xl" : "mt-4";
  const gridClassName = compact
    ? "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
    : "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center";
  const cardClassName = compact
    ? "group w-full max-w-[320px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_14px_26px_rgba(15,15,15,0.1)] animate-fade-up"
    : "group w-full max-w-[360px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_18px_28px_rgba(15,15,15,0.08)] animate-fade-up";
  const imageClassName = compact
    ? "relative h-36 w-full overflow-hidden rounded-xl bg-white"
    : "relative h-52 w-full overflow-hidden";
  const imageWrapperClassName = compact ? "p-4 pb-2" : "";
  const cardBodyClassName = compact ? "px-4 pb-5 pt-1" : "p-6";
  const descClassName = compact
    ? "mt-1 text-[11px] leading-snug text-gray-600 max-h-[3.9em] overflow-hidden"
    : "mt-3 text-sm text-gray-600";
  const tagClassName = compact
    ? "rounded-full bg-gray-100 px-2 py-0.5 text-[9px] font-medium text-gray-700"
    : "rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700";
  const showExtras = !compact;

  return (
    <section id="work" className={sectionClassName}>
      {!compact && (
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-12 left-1/4 h-36 w-36 rounded-full bg-gray-100/70" />
          <div className="absolute bottom-8 right-16 h-48 w-48 rounded-full bg-gray-100/60" />
        </div>
      )}

      <div className={contentClassName}>
        <div className={headerClassName}>
          <div className={headerLineClassName}>
            <span className="h-px w-16 bg-gray-300" />
            <span>Some of my latest work</span>
            <span className="h-px w-16 bg-gray-300" />
          </div>
          {/* <Typography variant="h2" color="blue-gray" className={titleClassName}>
            Featured Projects
          </Typography> */}
        </div>

        <div className={gridClassName}>
          {FEATURED_PROJECTS.map((project, index) => {
            const isExternal = project.href?.startsWith("http");
            const tags = project.tags;
            const buttonClassName = compact ? "h-7 px-3 text-[10px]" : "";
            const ctaButton = project.href ? (
              isExternal ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" color="gray" className={buttonClassName}>
                    {project.cta}
                  </Button>
                </a>
              ) : (
                <Link href={project.href}>
                  <Button size="sm" color="gray" className={buttonClassName}>
                    {project.cta}
                  </Button>
                </Link>
              )
            ) : (
              <Button size="sm" color="gray" disabled className={buttonClassName}>
                Coming Soon
              </Button>
            );

            return (
              <div
                key={project.title}
                className={cardClassName}
                style={{ animationDelay: `${120 + index * 120}ms` }}
              >
                <div className={imageWrapperClassName}>
                  <div className={imageClassName}>
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                </div>
                <div className={cardBodyClassName}>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                    {project.kicker}
                  </p>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className={compact ? "mt-2 text-base font-bold" : "mt-2 font-bold"}
                  >
                    {project.title}
                  </Typography>
                  <Typography className={descClassName}>
                    {project.desc}
                  </Typography>

                  {showExtras ? (
                    <>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span key={tag} className={tagClassName}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6">{ctaButton}</div>
                    </>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
