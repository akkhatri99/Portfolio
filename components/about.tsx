"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        While getting a degree in{" "}
        <span className="font-medium">Computer Sciences</span>, I decided to pursue my
        passion for programming. I joined <span className="bold italic">Vertika.tv</span>{" "}
        <span className="font-medium">as full-stack part-time developer where I learned industry knowledge and showcased my skills</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect and how it impacts normal user. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          C#, Angular, Node.js, SQL, and MongoDB
        </span>
        . I am also familiar with Prisma and Tailwind. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and reading books. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Azure and Machine learning</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
