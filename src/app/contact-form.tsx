// @ts-nocheck
"use client";

import Image from "next/image";
import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";
import { RevealSection } from "@/components";

export function ContactForm() {
  return (
    <div className="bg-white">
      <RevealSection
        id="contact"
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
              Contact
            </p>
            <h1
              className="font-bebas mt-4 text-6xl uppercase tracking-[0.08em] text-gray-900 sm:text-7xl"
            >
              contact.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Get in touch with me via social media or send me an email.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-600 sm:max-w-md">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-2 hover:border-gray-300"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A66C2] text-white">
                  in
                </span>
                LinkedIn
              </a>
              <a
                href="https://github.com/LeeChowCA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-2 hover:border-gray-300"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-white">
                  gh
                </span>
                GitHub
              </a>
              <a
                href="mailto:zhoujianpingls@outlook.com"
                className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-2 hover:border-gray-300"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-700">
                  @
                </span>
                Email
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-2 hover:border-gray-300"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E1306C] text-white">
                  ig
                </span>
                Instagram
              </a>
            </div>
          </div>
          <div className="relative mx-auto h-[360px] w-full max-w-xl">
            <div className="absolute inset-y-0 right-0 w-[70%] rounded-[40px] bg-[#F6F6F6]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-[320px] w-[320px] overflow-hidden rounded-[36px] bg-white shadow-[0_25px_50px_rgba(0,0,0,0.12)]">
                <Image
                  src="/image/developer.jpg"
                  alt="Contact portrait"
                  fill
                  sizes="(min-width: 1024px) 320px, 60vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="bg-[#F6F6F6] px-8 py-16" direction="right">
        <div className="container mx-auto mb-12 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Send me an email
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full lg:w-5/12 !text-gray-500"
          >
            Questions? Please feel free to reach out through the contact form.
          </Typography>
        </div>
        <div>
          <Card shadow={true} className="container mx-auto border border-gray/50">
            <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
              <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
                <Typography variant="h4" color="white" className="mb-2">
                  Contact Information
                </Typography>
                <Typography
                  variant="lead"
                  className="mx-auto mb-8 text-base !text-gray-500"
                >
                  Fill up the form and I will get back to you within 24 hours.
                </Typography>
                <div className="flex gap-5">
                  <PhoneIcon className="h-6 w-6 text-white" />
                  <Typography variant="h6" color="white" className="mb-2">
                    +1(250) 891 3382
                  </Typography>
                </div>
                <div className="flex my-2 gap-5">
                  <EnvelopeIcon className="h-6 w-6 text-white" />
                  <Typography variant="h6" color="white" className="mb-2">
                    zhoujianpingls@outlook.com
                  </Typography>
                </div>
                <div className="flex mb-10 gap-5">
                  <TicketIcon className="h-6 w-6 text-white" />
                  <Typography variant="h6" color="white" className="mb-2">
                    Open Support Ticket
                  </Typography>
                </div>
                <div className="flex items-center gap-5">
                  <IconButton variant="text" color="white">
                    <i className="fa-brands fa-facebook text-lg" />
                  </IconButton>
                  <IconButton variant="text" color="white">
                    <i className="fa-brands fa-instagram text-lg" />
                  </IconButton>
                  <IconButton variant="text" color="white">
                    <i className="fa-brands fa-github text-lg" />
                  </IconButton>
                </div>
              </div>
              <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
                <form
                  action="https://formspree.io/f/mnndjjpl"
                  method="POST"
                >
                  <div className="mb-8 grid gap-4 lg:grid-cols-2">
                    {/* @ts-ignore */}
                    <Input
                      color="gray"
                      size="lg"
                      variant="static"
                      label="First Name"
                      name="first-name"
                      placeholder="eg. Lucas"
                      containerProps={{
                        className: "!min-w-full mb-3 md:mb-0",
                      }}
                    />
                    {/* @ts-ignore */}
                    <Input
                      color="gray"
                      size="lg"
                      variant="static"
                      label="Last Name"
                      name="last-name"
                      placeholder="eg. Jones"
                      containerProps={{
                        className: "!min-w-full",
                      }}
                    />
                  </div>
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Email"
                    name="first-name"
                    placeholder="eg. lucas@mail.com"
                    containerProps={{
                      className: "!min-w-full mb-8",
                    }}
                  />
                  <Typography
                    variant="lead"
                    className="!text-blue-gray-500 text-sm mb-2"
                  >
                    What are you interested on?
                  </Typography>
                  <div className="-ml-3 mb-14 ">
                    {/* @ts-ignore */}
                    <Radio
                      color="gray"
                      name="type"
                      label="Design"
                      defaultChecked
                    />
                    {/* @ts-ignore */}
                    <Radio color="gray" name="type" label="Development" />
                    {/* @ts-ignore */}
                    <Radio color="gray" name="type" label="Support" />
                    {/* @ts-ignore */}
                    <Radio color="gray" name="type" label="Hire Me" />
                    {/* @ts-ignore */}
                    <Radio color="gray" name="type" label="Other" />
                  </div>
                  {/* @ts-ignore */}
                  <Textarea
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Your Message"
                    name="first-name"
                    containerProps={{
                      className: "!min-w-full mb-8",
                    }}
                  />
                  <div className="w-full flex justify-end">
                    <Button
                      type="submit"
                      className="w-full md:w-fit"
                      color="gray"
                      size="md"
                    >
                      Send message
                    </Button>
                  </div>
                </form>
              </div>
            </CardBody>
          </Card>
        </div>
      </RevealSection>
    </div>
  );
}

export default ContactForm;
