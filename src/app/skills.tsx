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
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development:",
    children:
      " Crafting beautiful and functional web experiences is my specialty. Leveraging the latest technologies and best practices—including React and Next.js—I design and build websites that captivate and engage users.",
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    children:
      " I specialize in building responsive and intuitive mobile apps that deliver seamless experiences on both iOS and Android devices. Skilled in technologies like Swift, I manage every stage of the development process—from concept to deployment.",
  },
  {
    icon: SwatchIcon,
    title: "Technology Stack",
    children:
      "My tech stack includes Next.js and React for frontend, with Python Flask and Express for APIs. I work with MySQL, PostgreSQL, or MongoDB databases, and can also build serverless solutions using AWS Lambda, DynamoDB, and API Gateway.",
  },
  {
    icon: HashtagIcon,
    title: " Web Optimization",
    children:
      "I prioritize performance by optimizing websites and apps for speed, delivering a smooth, responsive experience that enhances user satisfaction and improves SEO.",
  },
  {
    icon: EyeIcon,
    title: "User-Centric Design",
    children:
      "I blend development with a strong sense of design, creating user interfaces that are both highly functional and visually appealing for a seamless user experience.",
  },
  {
    icon: DocumentTextIcon,
    title: "Testing and Quality Assurance",
    children:
      "I rigorously test and debug applications to ensure they are reliable and secure, providing users with a safe and seamless experience. Quality and peace of mind are always top priorities.",
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
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
          I&apos;m passionate about building immersive digital experiences that go beyond code.
          Creating engaging and impactful solutions is more than my profession—it&apos;s 
          my calling. Explore below to see how I can help you.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
