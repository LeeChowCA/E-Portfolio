"use client";

import Image from "next/image";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { RevealSection } from "@/components";

const PROJECTS = [
  {
    img: "/image/gorillaNote.png",
    title: "Gorilla Note(Full Stack with ChatGPT API)",
    desc:
      "It's a web app for taking notes. Users can ask AI questions in real time about the note content, developed with Next.js, Supabase, ShadCN, Prisma, ChatGPT API and deployed on Vercel.",
    link: "https://goat-notes-git-main-leechowcas-projects.vercel.app",
  },
  {
    img: "/image/rocketDrone.png",
    title: "Rocket Drone",
    desc:
      "Rebuilt the Learning Management System (LMS) for the website from the ground up. Utilized Agile methodologies and implemented a CI/CD pipeline to ensure efficient development and continuous deployment.",
    link: "https://www.rocketdrones.com",
  },
  {
    img: "/image/warpedCity.png",
    title: "2D Game: Warped City",
    desc:
      "Developed using Unity and C#, player has multiple animations including jumping, running, ducking and can shoot enemies.",
    link: "/warpedcity",
  },
  {
    img: "/image/fps.png",
    title: "3D Game: FPS Game",
    desc:
      "Developed using Unity and C#, player can aim and shoot enemies. Enemies respawn after being killed. Player can gain health back by picking up a health point.",
    link: "/fps",
  },
  {
    img: "/image/findTeammates.png",
    title: "Full Stack Website: Find Teammates",
    desc:
      "Full stack website developed using Next.js, Firebase, Tailwind CSS, NextAuth. It's a website where you can find the teammates for your favorite sports.",
    link: "https://findteammates.vercel.app",
  },
  {
    img: "/image/express.png",
    title: "Express API",
    desc:
      "Developed a RESTful API using Express.js and Node.js, providing a robust backend for web applications. Implemented JWT authentication and integrated with MongoDB for data storage.",
    link: "https://github.com/LeeChowCA/ExpressAPI",
  },
  {
    img: "/image/wordle.png",
    title: "AWS Serverless: Wordle Game",
    desc:
      "Developed the game using S3 to host the frontend and Cognito to secure it. Used Lambda function, API Gateway as the web service, and DynamoDB as the backend.",
    link: "http://lee-wordle.s3-website-us-east-1.amazonaws.com/",
  },
  {
    img: "/image/blog-1.svg",
    title: "REST API: Python Flask",
    desc:
      "Developed the REST API using Python Flask-Smorest, SQLAlchemy and Mailgun. Tested the API with Insomnia and Docker. Deployed the API on Render.",
    link: "https://github.com/LeeChowCA/REST_API_Python",
  },
  {
    img: "/image/blog2.svg",
    title: "Network Programming: Battleship Game using Python",
    desc:
      "Developed a multiplayer Battleship game using Python with socket programming for server-client communication. Implemented multi-threading to handle two clients simultaneously, ensuring smooth gameplay.",
    link: "https://github.com/Lee-School/226_game",
  },
  {
    img: "/image/tetris.png",
    title: "Tetris Game",
    desc:
      "Developed a Tetris game using C++ focusing on smooth gameplay mechanics and captivating visuals.",
    link: "https://github.com/LeeChowCA/Tetris",
  },
];

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const FEATURED_PROJECTS = [
  {
    kicker: "FULL-STACK LMS",
    title: "Learning Management System",
    shortTitle: "LMS Platform",
    desc:
      "A full-stack LMS with student and instructor dashboards, course management, and AI-powered quizzes.",
    img: "/image/lms/dashboard_student.png",
    link: "/lms",
  },
  {
    kicker: "AI AGENT",
    title: "AI Agent Project",
    shortTitle: "AI Agent",
    desc:
      "An AI agent that automates workflows, answers questions, and orchestrates tools with context.",
    img: "/image/developer.jpg",
    link: "https://goat-notes-git-main-leechowcas-projects.vercel.app",
  },
  {
    kicker: "3D FPS GAME",
    title: "FPS Game",
    shortTitle: "FPS Game",
    desc:
      "3D FPS built in Unity with aiming, shooting, enemy respawns, and health pickups.",
    img: "/image/fps.png",
    link: "/fps",
  },
];

const OTHER_PROJECTS = PROJECTS;

function ProjectLink({ href, className, children }) {
  const isExternal = href.startsWith("http");
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function Projects() {
  return (
    <div className="bg-white">
      <RevealSection
        id="projects"
        className="relative overflow-hidden px-6 pb-16 pt-20"
        direction="left"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-12 h-56 w-56 rounded-full bg-[#F4F4F4]" />
          <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-[#F9F9F9]" />
        </div>
        <div className="container mx-auto relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
              Portfolio
            </p>
            <h1
              className={`${bebas.className} mt-4 text-6xl uppercase tracking-[0.08em] text-gray-900 sm:text-7xl`}
            >
              portfolio.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              A focused collection of digital products, experiments, and systems I
              have crafted end to end.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              I have collaborated with startups, agencies, and teams to build
              experiences that move fast without sacrificing quality.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-gray-400">
              <span className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Product systems
              </span>
              <span className="rounded-full border border-gray-200 bg-white px-4 py-2">
                Full-stack builds
              </span>
              <span className="rounded-full border border-gray-200 bg-white px-4 py-2">
                AI workflows
              </span>
            </div>
          </div>
          <div className="relative mx-auto h-[360px] w-full max-w-xl">
            <div className="absolute right-6 top-4 flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-xs text-gray-600 shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-gray-900 text-[10px] font-semibold text-white">
                OK
              </span>
              Make it pop
            </div>
            <div className="absolute right-10 top-16 h-1 w-48 rounded-full bg-gray-200">
              <div className="absolute left-1/3 -top-2 h-5 w-5 rounded-full border border-gray-300 bg-white shadow-sm" />
            </div>
            <div className="absolute left-0 top-20 w-[72%] rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_18px_30px_rgba(0,0,0,0.12)]">
              <div className="flex gap-4">
                <div className="relative h-16 w-24 overflow-hidden rounded-lg">
                  <Image
                    src={FEATURED_PROJECTS[0].img}
                    alt={FEATURED_PROJECTS[0].title}
                    fill
                    sizes="(min-width: 1024px) 140px, 40vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {FEATURED_PROJECTS[0].shortTitle || FEATURED_PROJECTS[0].title}
                  </p>
                  <p className="text-xs text-gray-500">Featured build</p>
                  <p className="mt-1 text-[11px] text-gray-400">
                    Recently shipped
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-28 w-[46%] rounded-2xl border border-gray-200 bg-white p-3 shadow-[0_16px_26px_rgba(0,0,0,0.1)]">
              <div className="relative h-24 w-full overflow-hidden rounded-xl">
                <Image
                  src={FEATURED_PROJECTS[1].img}
                  alt={FEATURED_PROJECTS[1].title}
                  fill
                  sizes="(min-width: 1024px) 180px, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-3">
                <p className="text-sm font-semibold text-gray-900">
                  {FEATURED_PROJECTS[1].shortTitle || FEATURED_PROJECTS[1].title}
                </p>
                <p className="text-xs text-gray-500">Production systems</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-12 w-[58%] rounded-2xl border border-gray-200 bg-white p-3 shadow-[0_16px_26px_rgba(0,0,0,0.1)]">
              <div className="relative h-24 w-full overflow-hidden rounded-xl">
                <Image
                  src={FEATURED_PROJECTS[2].img}
                  alt={FEATURED_PROJECTS[2].title}
                  fill
                  sizes="(min-width: 1024px) 220px, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-sm font-semibold text-gray-900">
                <span>{FEATURED_PROJECTS[2].shortTitle || FEATURED_PROJECTS[2].title}</span>
                <span className="text-gray-400">*</span>
              </div>
              <p className="text-xs text-gray-500">Playful builds</p>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="bg-[#F7F7F7] px-6 py-16" direction="right">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                Featured projects
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-gray-900">
                Three signature builds
              </h2>
            </div>
            <span className="text-xs uppercase tracking-[0.35em] text-gray-400">
              Selected work
            </span>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {FEATURED_PROJECTS.map((project) => (
              <ProjectLink
                key={project.title}
                href={project.link}
                className="group block"
              >
                <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_18px_28px_rgba(15,15,15,0.08)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_22px_34px_rgba(15,15,15,0.12)]">
                  <div className="p-4 pb-2">
                    <div className="relative h-44 w-full overflow-hidden rounded-xl bg-gray-100">
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1280px) 360px, (min-width: 768px) 45vw, 90vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                      {project.kicker}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <p className="mt-3 rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-600">
                      {project.desc}
                    </p>
                  </div>
                </article>
              </ProjectLink>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="px-6 py-16" direction="left">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                Other projects
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-gray-900">
                More experiments and builds
              </h2>
            </div>
            <span className="text-xs uppercase tracking-[0.35em] text-gray-400">
              Full catalog
            </span>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {OTHER_PROJECTS.map((project) => (
              <ProjectLink
                key={project.title}
                href={project.link}
                className="group block"
              >
                <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_18px_28px_rgba(15,15,15,0.08)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_22px_34px_rgba(15,15,15,0.12)]">
                  <div className="p-4 pb-2">
                    <div className="relative h-44 w-full overflow-hidden rounded-xl bg-gray-100">
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1280px) 360px, (min-width: 768px) 40vw, 90vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                      Project
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <p className="mt-3 rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-600">
                      {project.desc}
                    </p>
                  </div>
                </article>
              </ProjectLink>
            ))}
          </div>
        </div>
      </RevealSection>
    </div>
  );
}

export default Projects;
