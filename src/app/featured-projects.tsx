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
];

export function FeaturedProjects() {
  return (
    <section id="work" className="relative bg-[#F1F1F1] px-8 py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-12 left-1/4 h-36 w-36 rounded-full bg-white/70" />
        <div className="absolute bottom-8 right-16 h-48 w-48 rounded-full bg-white/60" />
      </div>

      <div className="container mx-auto relative">
        <div className="mb-12 text-center animate-fade-up">
          <div className="flex items-center justify-center gap-6 text-xs uppercase tracking-[0.35em] text-gray-500">
            <span className="h-px w-16 bg-gray-300" />
            <span>Some of my latest work</span>
            <span className="h-px w-16 bg-gray-300" />
          </div>
          <Typography variant="h2" color="blue-gray" className="mt-4">
            Featured Projects
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {FEATURED_PROJECTS.map((project, index) => {
            const isExternal = project.href?.startsWith("http");

            return (
              <div
                key={project.title}
                className="group overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] animate-fade-up"
                style={{ animationDelay: `${120 + index * 120}ms` }}
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                    {project.kicker}
                  </p>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mt-2 font-bold"
                  >
                    {project.title}
                  </Typography>
                  <Typography className="mt-3 text-sm text-gray-600">
                    {project.desc}
                  </Typography>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    {project.href ? (
                      isExternal ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" color="gray">
                            {project.cta}
                          </Button>
                        </a>
                      ) : (
                        <Link href={project.href}>
                          <Button size="sm" color="gray">
                            {project.cta}
                          </Button>
                        </Link>
                      )
                    ) : (
                      <Button size="sm" color="gray" disabled>
                        Coming Soon
                      </Button>
                    )}
                  </div>
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
