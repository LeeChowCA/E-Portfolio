"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/warpedCity.png",
    title: "2D Game: Warped City",
    desc: "Developed using Unity and C#, player has multiple animations including jumping, running, ducking etc and can shoot enemies.",
    link:"/warpedcity"
  },
  {
    img: "/image/fps.png",
    title: "3D Game: FPS Game",
    desc: "Developed using Unity and C#, player can aim and shoot enemies. enemies will respawn after being killed. player can gain health back by picking up a health point.",
    link:"/fps"
  },
  {
    img: "/image/findTeammates.png",
    title: "Full Stack Website: Find Teammates",
    desc: "Full Stack website developed using Next.js, Firebase, Tailwind CSS, NextAuth. It's a website where you can find the teammates for your favorite sports. ",
    link:"https://findteammates.vercel.app"
  },
  {
    img: "/image/wordle.png",
    title: "AWS Serverless: Wordle Game",
    desc: "Developed the game using S3 to host the Frontend and cognito to secure the front end; Used Lambda function, API gateway as the web service, DynamoDB as the backend",
    link:"http://lee-wordle.s3-website-us-east-1.amazonaws.com/"
  },
  {
    img: "/image/blog-1.svg",
    title: "REST API: Python Flask",
    desc: "Developed the REST API using Python Flask-Smorest, SQLAlchemy and mailgun; Tested the API with Insomnia and docker; Deployed the API on Render",
    link:"https://github.com/LeeChowCA/REST_API_Python"
  },
  {
    img: "/image/blog2.svg",
    title: "Network Programming: Battleship Game using Python",
    desc: "Developed a multiplayer Battleship game using Python with socket programming for server-client communication; Implemented multi-threading to handle two clients simultaneously, ensuring smooth gameplay",
    link:"https://github.com/Lee-School/226_game"
  },
  // {
  //   img: "/image/blog3.svg",
  //   title: "Mobile App Development",
  //   desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  //   link:"/warpedcity"
  // },
  // {
  //   img: "/image/blog4.svg",
  //   title: "E-commerce development",
  //   desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
  //   link:"/warpedcity"
  // },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          So far, I’ve independently developed and collaborated on numerous projects. Below are some of the key ones I’ve completed.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
