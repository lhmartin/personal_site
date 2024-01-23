import {
  OrdaosLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Luke Martin",
  initials: "LM",
  location: "New York City, USA, ",
  locationLink: "https://www.google.com/maps/place/NYC",
  about:
    "Deep Learning Practioner working in Biotech",
  summary:
    "As a Deep Learning Researcher and Engineer, I am working on advancing protein design at Ordaos Bio.",
  avatarUrl: "https://avatars.githubusercontent.com/u/16001690?v=4",
  personalWebsiteUrl: "https://www.lukeheinmartin.com/",
  contact: {
    email: "contact@lukeheinmartin.com",
    tel: "+1 609 384 5954",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/lhmartin/",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/luke-martin/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/lhmartin1",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "New York University",
      degree: "Master's Degree in Computer Science",
      start: "2019",
      end: "2021",
    },
    {
      school: "Eindhoven University of Technology",
      degree: "Bachelor's Degree in Electrical Engineering",
      start: "2014",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Ordaos Bio",
      link: "https://ordaos.bio",
      badges: [],
      title: "AI Scientist II",
      logo: OrdaosLogo,
      start: "2021",
      end: "2024",
      description:
        "Extended the functionality of state of the art diffusion based protein models to work within our existing \
         generation system. Building on an opensource model, adding in conditional generation options whilst \
maintaining the prior performance. Built in Pytorch. \
Led the design of a novel protein optimization platform, bringing together numerous protein property prediction, \
interaction, and numerical models. This technology is a core feature of Ordaos’ offerings and has been able to \
improve binding by 10x, with resilience to target evolution.",
    },
    {
      company: "Ordaos Bio",
      link: "https://ordaos.bio",
      badges: [],
      title: "AI Scientist I",
      logo: OrdaosLogo,
      start: "2021",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Ordaos Bio",
      link: "https://ordaos.bio",
      badges: ["Remote"],
      title: "AI Scientist Intern",
      logo: OrdaosLogo,
      start: "2021",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
  ],
  skills: [
    "Deep Learning",
    "Pytorch",
    "Pytorch Lighting",
    "Pytorch",
    "Graph Neural Networks",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: OrdaosLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: OrdaosLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: OrdaosLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: OrdaosLogo,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: OrdaosLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: OrdaosLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: OrdaosLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: OrdaosLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: OrdaosLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: OrdaosLogo,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: OrdaosLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: OrdaosLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: OrdaosLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: OrdaosLogo,
    },
  ],
} as const;
