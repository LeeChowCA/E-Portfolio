// @ts-nocheck
"use client";

import { useState } from "react";
import Image from "next/image";
import { Typography, Button, Card, CardBody, Tooltip, Dialog, DialogBody } from "@material-tailwind/react";

const LMS_FEATURES = [
  {
    img: "/image/lms/langding_page.png",
    title: "Landing Page",
    desc: "Modern and responsive landing page showcasing course offerings and platform benefits."
  },
  {
    img: "/image/lms/dashboard_student.png",
    title: "Student Dashboard",
    desc: "Intuitive student interface for course management, progress tracking, and assignments."
  },
  {
    img: "/image/lms/dashboard_instructor.png",
    title: "Instructor Dashboard",
    desc: "Comprehensive instructor panel for course creation, student management, and analytics."
  },
  {
    img: "/image/lms/available_courses.png",
    title: "Course Catalog",
    desc: "Browse and enroll in available courses with detailed descriptions and previews."
  },
  {
    img: "/image/lms/course_view.png",
    title: "Course View",
    desc: "Interactive course viewing interface with lessons, materials, and progress tracking."
  },
  {
    img: "/image/lms/class_creation.png",
    title: "Class Creation",
    desc: "Easy-to-use interface for instructors to create and customize new courses."
  },
  {
    img: "/image/lms/curriculum_management.png",
    title: "Curriculum Management",
    desc: "Organize course content, lessons, and learning paths with drag-and-drop functionality."
  },
  {
    img: "/image/lms/AI_generate_quiz.png",
    title: "AI Quiz Generator",
    desc: "Generate interactive quizzes automatically using AI to enhance student learning."
  }
];

export function LMS() {
  const [activeImage, setActiveImage] = useState(null);
  const handleClose = () => setActiveImage(null);

  return (
    <section className="py-20 px-8">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <Typography 
            variant="h1" 
            color="blue-gray" 
            className="mb-4 text-4xl lg:text-5xl font-bold"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Featured Project: Learning Management System
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-600 lg:w-8/12 text-lg"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            A comprehensive Learning Management System built with modern web technologies. 
            Features include student and instructor dashboards, course management, AI-powered 
            quiz generation, and real-time collaboration tools.
          </Typography>
          
          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Next.js", "React", "TypeScript", "Mantine", "Supabase", "OpenAI API"].map((tech) => (
              <span 
                key={tech} 
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-center">
            <a
              href="https://language-cosmos-lms.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                color="blue"
                className="flex items-center gap-2"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                View Live Demo
              </Button>
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {LMS_FEATURES.map((feature, idx) => (
            <Card key={idx} className="mt-6 hover:shadow-lg transition-shadow duration-300" shadow={false}>
              <Tooltip content="Click to see the full image" placement="top">
                <button
                  type="button"
                  className="relative h-48 w-full overflow-hidden rounded-t-lg group cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  onClick={() => setActiveImage({ src: feature.img, title: feature.title })}
                  aria-label={`Open full image for ${feature.title}`}
                >
                  <Image
                    src={feature.img}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              </Tooltip>
              <CardBody className="p-6">
                <Typography 
                  variant="h5" 
                  color="blue-gray" 
                  className="mb-2 font-bold"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {feature.title}
                </Typography>
                <Typography 
                  className="text-gray-600 text-sm"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {feature.desc}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>

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

        {/* Key Features Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <Typography 
            variant="h3" 
            color="blue-gray" 
            className="mb-6 text-center font-bold"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Key Features & Achievements
          </Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <Typography 
                variant="h6" 
                color="blue-gray" 
                className="mb-2"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                User Management
              </Typography>
              <Typography 
                className="text-gray-600 text-sm"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Role-based authentication with separate student and instructor interfaces
              </Typography>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <Typography 
                variant="h6" 
                color="blue-gray" 
                className="mb-2"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                AI Integration
              </Typography>
              <Typography 
                className="text-gray-600 text-sm"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Automated quiz generation using OpenAI API for enhanced learning
              </Typography>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <Typography 
                variant="h6" 
                color="blue-gray" 
                className="mb-2"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Analytics
              </Typography>
              <Typography 
                className="text-gray-600 text-sm"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Real-time progress tracking and detailed performance analytics
              </Typography>
            </div>
          </div>

          {/* Project Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Typography 
                variant="h3" 
                color="blue" 
                className="font-bold"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                10K+
              </Typography>
              <Typography 
                className="text-gray-600"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Lines of Code
              </Typography>
            </div>
            <div>
              <Typography 
                variant="h3" 
                color="green" 
                className="font-bold"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                8
              </Typography>
              <Typography 
                className="text-gray-600"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Key Features
              </Typography>
            </div>
            <div>
              <Typography 
                variant="h3" 
                color="purple" 
                className="font-bold"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                3
              </Typography>
              <Typography 
                className="text-gray-600"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Months Development
              </Typography>
            </div>
            <div>
              <Typography 
                variant="h3" 
                color="red" 
                className="font-bold"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                100%
              </Typography>
              <Typography 
                className="text-gray-600"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Responsive Design
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LMS;
