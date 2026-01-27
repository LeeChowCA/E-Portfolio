// @ts-nocheck
"use client";

import { useState } from "react";
import Image from "next/image";
import { Button, Dialog, DialogBody, Tooltip, Typography } from "@material-tailwind/react";

const AGENT_GALLERY = [
  {
    title: "Steps surfaced during processing",
    desc: "Structured steps are shown while the agent works through a request.",
    img: "/image/agent/agent-steps-presented.png",
  },
  {
    title: "Follow-up prompts",
    desc: "Suggested next questions help users keep the investigation moving.",
    img: "/image/agent/agent-followup-suggestions.png",
  },
  {
    title: "Persistent chat history",
    desc: "Conversation history is saved and survives browser refreshes.",
    img: "/image/agent/agent-chat-history-saved.png",
  },
  {
    title: "Chat sessions tracked",
    desc: "Session records are stored with the deployed company ID.",
    img: "/image/agent/agent-chat-sessions-company-id.png",
  },
  {
    title: "Message actions",
    desc: "Users can copy, like, or dislike responses for quick feedback.",
    img: "/image/agent/agent-copy-like-dislike.png",
  },
  {
    title: "Source citations",
    desc: "Each response includes citations for verification.",
    img: "/image/agent/agent-citations.png",
  },
  {
    title: "Custom agent icon",
    desc: "Hand-designed avatar for the agent experience.",
    img: "/image/agent/agent-icon-design.png",
  },
  {
    title: "WordPress deployment",
    desc: "Agent embedded on a client site using Shadow DOM isolation.",
    img: "/image/agent/agent-wordpress-shadowdom.png",
  },
  {
    title: "Message logging",
    desc: "User prompts and agent replies are saved for analysis.",
    img: "/image/agent/agent-chat-messages-saved.png",
  },
];

export function AgentProject() {
  const [activeImage, setActiveImage] = useState(null);
  const handleClose = () => setActiveImage(null);

  return (
    <div className="bg-white">
      <section className="px-6 pb-10 pt-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                AI Agent Project
              </p>
              <h1
                className="font-bebas mt-4 text-6xl uppercase tracking-[0.08em] text-gray-900 sm:text-7xl"
              >
                Agent Intelligence
              </h1>
              <p className="mt-4 max-w-3xl text-lg text-gray-600">
                A production-ready AI agent that delivers source-backed answers,
                preserves conversation context, and integrates cleanly into client
                experiences. Built to feel trustworthy, fast, and transparent
                for real-world research workflows.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://mining-agent.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="md"
                    color="gray"
                    className="flex items-center gap-2"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    Try the live agent
                  </Button>
                </a>
                <span className="self-center text-xs uppercase tracking-[0.3em] text-gray-400">
                  Live demo
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.32em] text-gray-500">
              {[
                "Citations",
                "Session Memory",
                "Follow-up Prompts",
                "Feedback Signals",
                "Shadow DOM Embed",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Source-grounded responses",
                desc: "Every answer is anchored to citations so users can verify key claims instantly.",
              },
              {
                title: "Conversation continuity",
                desc: "Sessions persist across refreshes, preserving context and reducing repetition.",
              },
              {
                title: "Deployment-ready UI",
                desc: "Embedded with Shadow DOM isolation for clean, conflict-free client installs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_16px_26px_rgba(15,15,15,0.06)]"
              >
                <h3 className="text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl border border-gray-200 bg-[#F7F7F7] p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
              Workflow design
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-gray-900">
              How the agent operates
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              A structured loop keeps results accurate and transparent, while
              logging every interaction for future analysis.
            </p>
            <div className="mt-6 space-y-4 text-sm text-gray-600">
              {[
                "Ingests relevant documents and contextual data.",
                "Retrieves sources and highlights why they matter.",
                "Synthesizes a response with inline citations.",
                "Suggests follow-up prompts to deepen the analysis.",
                "Stores sessions, messages, and feedback signals.",
              ].map((step, index) => (
                <div key={step} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-semibold text-gray-700 shadow-sm">
                    {index + 1}
                  </span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-[0_16px_30px_rgba(15,15,15,0.06)]">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
              Delivery highlights
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-gray-900">
              Trust, speed, and control
            </h2>
            <div className="mt-6 space-y-5">
              {[
                {
                  title: "Transparent reasoning",
                  desc: "Step-by-step outputs make the agent feel like a partner, not a black box.",
                },
                {
                  title: "Feedback-driven improvements",
                  desc: "Copy, like, and dislike signals provide quick loops for tuning quality.",
                },
                {
                  title: "Operational visibility",
                  desc: "Session and message logs enable audits, analytics, and compliance checks.",
                },
                {
                  title: "Seamless client embed",
                  desc: "Shadow DOM integration keeps styling isolated on production sites.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-base font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F7] px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                Product tour
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-gray-900">
                Agent experience snapshots
              </h2>
            </div>
            <span className="text-xs uppercase tracking-[0.35em] text-gray-400">
              Click any image to zoom
            </span>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {AGENT_GALLERY.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_16px_26px_rgba(15,15,15,0.08)]"
              >
                <Tooltip content="Click to view full image" placement="top">
                  <button
                    type="button"
                    className="relative h-52 w-full overflow-hidden bg-gray-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
                    onClick={() => setActiveImage({ src: item.img, title: item.title })}
                    aria-label={`Open full image for ${item.title}`}
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1280px) 360px, (min-width: 768px) 45vw, 90vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </button>
                </Tooltip>
                <div className="px-6 pb-6 pt-4">
                  <h3 className="text-base font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {activeImage && (
        <Dialog
          open={Boolean(activeImage)}
          handler={handleClose}
          size="xl"
          className="bg-transparent shadow-none"
        >
          <DialogBody className="p-0">
            <div className="overflow-hidden rounded-lg bg-black">
              <div className="relative h-[80vh] w-full">
                <Image
                  src={activeImage.src}
                  alt={activeImage.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-between bg-white px-4 py-3">
                <span className="text-sm font-medium text-gray-900">
                  {activeImage.title}
                </span>
                <Button size="sm" variant="text" color="gray" onClick={handleClose}>
                  Close
                </Button>
              </div>
            </div>
          </DialogBody>
        </Dialog>
      )}

      <section className="px-6 pb-20 pt-12">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-[0_18px_32px_rgba(15,15,15,0.06)]">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <Typography
                  variant="h3"
                  color="blue-gray"
                  className="text-2xl font-semibold"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  Project outcomes
                </Typography>
                <p className="mt-2 max-w-2xl text-sm text-gray-600">
                  The agent experience blends research accuracy with a clean
                  interface, ensuring users stay informed and in control.
                </p>
              </div>
              <a href="mailto:zhoujianpingls@outlook.com">
                <Button
                  size="sm"
                  color="gray"
                  className="rounded-full"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  Contact for a demo
                </Button>
              </a>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Credible outputs",
                  desc: "Every response highlights the citations used to derive the answer.",
                },
                {
                  title: "Operational trail",
                  desc: "Sessions, messages, and metadata are logged for analytics and QA.",
                },
                {
                  title: "Adaptable deployment",
                  desc: "Drop-in widget that plays nicely with existing client sites.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-[#F7F7F7] p-5">
                  <h4 className="text-sm font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AgentProject;
