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
      start: "2022",
      end: "2024",
      description:
        "• Extended the functionality of state of the art diffusion based protein models to work within our existing \
          generation system. Building on an opensource model, adding in conditional generation options whilst \
          maintaining the prior performance. Built in Pytorch. \
         • Led the design of a novel protein optimization platform, bringing together numerous protein property prediction, \
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
      end: "2022",
      description:
        "• Implemented portions of a generative multi-modal protein attention model using PyTorch, predicting a \
        number of protein properties, 3D structure, and sequence. \n \
        • Curated the data for, implemented, designed, and trained an antibody interaction model to predict the \
        binding strength (log Kd) value of an antibody and target pair. \n \
        • Fine-tuned the log Kd model on in-house data, which was able to rank from a set of prospective \
        antibodies, placing 57 successful binders within the top 70 candidates, 46 of which had high affinity."        
    },
    {
      company: "Ordaos Bio",
      link: "https://ordaos.bio",
      badges: ["Remote"],
      title: "AI Scientist Intern",
      logo: OrdaosLogo,
      start: "June 2020",
      end: "August 2020",
      description:
      "• Built a paper ingestion system that pulled all new papers from arXiv into a database as an Azure \
      microservice. \n \
      • Worked with a colleague on a convolution vision model to detect cancer in prostate tissue slides. \n  \
      • Using BERT embeddings on paper abstracts, built a paper recommendation service that recommended \
      the most relevant papers from our database of papers."
    },
    {
      company: "Business Modelling Associates",
      link: "https://www.businessmodelling.com/",
      badges: ['South Africa'],
      title: "Junior Data Scientist",
      logo: null,
      start: "2018",
      end: "2019",
      description:
      "• Designed, implemented, and validated models of the SARB (South African Reserve Bank) cash-flow system \
      using Tensorflow. \n \
      \n \
      • Improved the percentage accuracy over the prior existing model that predicted the movement of cash in \
      regions across the country by up to 40%. \n \
      • Assisted colleagues in building a model to optimize the routing of SARB cash in transit vehicles. \
      "
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
        "Python", "Educational"
      ],
      description: "Set of problems solved during my time at TU/e working on competitive programming problems.",
      logo: OrdaosLogo,
      link: {
        label: "CPPS",
        href: "https://github.com/lhmartin/CPPS",
      },
    },
    {
      title: "Python Machine Learning", 
      techStack: [
        "Python", "Educational",
      ],
      description: "A basic machine learning module for primarily self-education purposes.",
      logo: OrdaosLogo,
      link: {
        label: "PML",
        href: "https://github.com/lhmartin/PML",
      },
    },
    {
      title: "Context Tree weighting ", 
      techStack: [
        "Python", "Educational",
      ],
      description: "A compression algorithm called context tree weighting implemented in Python. Applied to DNA sequences",
      logo: OrdaosLogo,
      link: {
        label: "CTW",
        href: "https://github.com/lhmartin/CTW",
      },
    },
  ],
} as const;
