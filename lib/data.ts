import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import cogentImg from "@/public/cogent.png";
import cogentCRON from "@/public/cogentCRON.png";
import ecommerceCRM from "@/public/ecommerceCRM.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Junior Software Engineer",
    location: "Vertika.tv, Karachi, Pakistan",
    description:
      "Started my professional career as a FullStack Software Engineer. Transformed the main product from Flask to Balzor Engine.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2021 - Jun 2022",
  },
  {
    title: "Software Engineer",
    location: "Spursol, Karachi, Pakistan",
    description:
      "I worked as a FullStack Software Engineer for 1.5 years. My major highlight of the job was that I wrote a product from scratch which ended up producing revenue for the company.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2022 - Oct 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Cogent.",
    description:
      "Worked as a Full-Stack Software Engineer to create a BI tool for Mortgage Industry of USA, which helps Lenders and Appraisals take better decisions for their company.",
    tags: ["Angular", ".NET 6", "MongoDB", "gRPC", "Dapper", "Redis"],
    imageUrl: cogentImg,
    websiteURL: "https://app.vlcogent.com/login"
  },
  {
    title: "Cogent CRON",
    description:
      "A CRON Job for Cogent which fetches data from parent product in SQL, cleans it, and pushes it to MongoDB to be used by Cogent.",
    tags: [".NET 6", "Azure CRON", "Microsoft SQL", "MongoDB", "Redis"],
    imageUrl: cogentCRON,
    websiteURL: "https://app.vlcogent.com/login"
  },
  {
    title: "Ecommerce CRM",
    description:
      "A complete CRM solution for E-Commerce websites where they can track their revenue to adding products to payment solution.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Planet Scale"],
    imageUrl: ecommerceCRM,
    websiteURL: "https://ecommerce-pgukr722e-akkhatri99s-projects.vercel.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Angular",
  "Next.js",
  "Node.js",
  "Git",
  "Prisma",
  "MongoDB",
  "Redis",
  "gRPC",
  "C#",
  ".NET",
  "SQL",
  "Razor",
  "Blazor",
  "Identity Server 4",
  "Clean Architecture",
  "Microservices",
  "CQRS",
] as const;
