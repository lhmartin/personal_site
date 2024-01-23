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
      title: "Competitive Programming and Problem Solving", 
      techStack: [
        "Python"
      ],
      description: "Set of problems solved during my time at TU/e working on competitive programming problems.",
      logo: OrdaosLogo,
      link: {
        label: "CPPS",
        href: "https://github.com/lhmartin/CPPS",
      },
    },
  ],
} as const;
