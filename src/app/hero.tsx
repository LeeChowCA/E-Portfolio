// @ts-nocheck
"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <>
      <header className="bg-white p-8">
        <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
          <div className="row-start-2 lg:row-auto">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-4 lg:text-5xl !leading-tight text-3xl"
            >
              Welcome to Lee&apos;s Web <br /> Development Portofolio!
            </Typography>
            <Typography
              variant="lead"
              className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
            >
              Hello! It’s wonderful to connect with you. I’m Lee Zhou,
              a dedicated web developer with a love for blending creativity and functionality.
              Here, you’ll discover my journey through the ever-evolving world of web development—where innovative ideas come to life through clean,
              efficient code.
            </Typography>

            <Typography variant="lead"
              className=" !text-gray-800 md:pr-16 xl:pr-28 font-bold mt-24">
                CONTACT ME AT : zhoujianpingls@outlook.com
            </Typography>
            {/* <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Your email
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              <Input color="gray" label="Enter your email" size="lg" />
              <Button color="gray" className="w-full px-4 md:w-[12rem]">
                Contact Me
              </Button>
            </div>
          </div>
          <Typography variant="small" className="font-normal !text-gray-500">
            Read my{" "}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </Typography> */}
          </div>
          <Image
            width={1024}
            height={1024}
            alt="team work"
            src="/image/portfolio.png"
            className="h-[36rem] w-full rounded-xl object-cover"
          />
        </div>
      </header>
    </>
  );
}

export default Hero;
