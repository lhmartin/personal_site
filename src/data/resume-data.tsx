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
    "Deep Learning Practitioner working in Biotech",
  summary:
    "Senior AI Scientist with 5+ years of experience building deep learning systems for computational protein design. " +
    "Specialized in diffusion- and flow-based generative models, graph neural networks, and large language models applied to biotech. " +
    "Leading protein design pipelines and optimization platforms at Ordaos Bio that have achieved 10x improvements in antibody binding affinity.",
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
      school: "New York University, Courant Institute of Mathematics",
      degree: "Master of Science, Computer Science",
      start: "2019",
      end: "2021",
    },
    {
      school: "Eindhoven University of Technology",
      degree: "Bachelor of Electrical Engineering",
      start: "2014",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Ordaos Bio",
      link: "https://ordaos.bio",
      badges: ["NYC"],
      title: "Senior AI Scientist",
      logo: OrdaosLogo,
      start: "01/2025",
      end: "Present",
      description:
        "• Led the development of robust automated protein design pipelines, combining open-source methods such as RFAntibody and Bindcraft alongside internal design methods. Deployed as Docker containers to a cloud-agnostic Kubernetes environment managed by a Redis queue, scaling resources based on demand.\n" +
        "• Rapidly re-implemented and integrated multiple state-of-the-art deep learning research papers into the internal codebase, updating external code to use commercially licensed components.",
    },
    {
      company: "Ordaos Bio",
      link: "https://ordaos.bio",
      badges: ["NYC"],
      title: "AI Scientist II",
      logo: OrdaosLogo,
      start: "02/2022",
      end: "01/2025",
      description:
        "• Extended the sampling functionality of state-of-the-art diffusion-based generative protein models to work within the existing internal generation system. Fine-tuned an open-source model to add conditional classifier-free guidance whilst maintaining prior performance metrics. Built in PyTorch and PyTorch Lightning.\n" +
        "• Led the design of a novel protein optimization platform combining prediction, interaction, and numerical models of protein properties — a core Ordaos offering that improved a SARS-CoV-2 spike protein antibody binding by 10x whilst remaining resilient to target evolution.",
    },
    {
      company: "Ordaos Bio",
      link: "https://ordaos.bio",
      badges: ["NYC"],
      title: "AI Scientist I",
      logo: OrdaosLogo,
      start: "03/2021",
      end: "02/2022",
      description:
        "• Implemented portions of a generative multi-modal protein attention model using PyTorch, predicting protein properties, atomic positions, and sequence.\n" +
        "• Curated data for, implemented, and trained an antibody interaction model to predict binding strength of an antibody-target pair. Fine-tuned on internal data, placing 57 successful binders within the top 70 candidates.",
    },
    {
      company: "Ordaos Bio",
      link: "https://ordaos.bio",
      badges: ["Remote"],
      title: "AI Scientist Intern",
      logo: OrdaosLogo,
      start: "06/2020",
      end: "12/2020",
      description:
        "• Built an automated Azure microservice to pull all new arXiv research papers into an ingestion system and deposit processed information into a database.\n" +
        "• Using a BERT model, embedded all paper abstracts within the internal database and created a paper recommendation system using those embeddings.",
    },
    {
      company: "Business Modelling Associates",
      link: "https://www.businessmodelling.com/",
      badges: ["South Africa"],
      title: "Junior Data Scientist",
      logo: null,
      start: "07/2018",
      end: "12/2018",
      description:
        "• Designed, coded, and tested models of the South African Reserve Bank cash-flow system using Keras with TensorFlow backend, predicting necessary cash movement around the country to maintain stable reserves.\n" +
        "• Beat the existing baseline model accuracy by up to 40%.",
    },
  ],
  skills: [
    "Python",
    "PyTorch",
    "PyTorch Lightning",
    "Docker",
    "CometML",
    "WandB",
    "scikit-learn",
    "PyMol",
    "Biotite",
    "Machine Learning",
    "Deep Learning",
    "Diffusion Models",
    "Flow-based Generative Models",
    "Large Language Models",
    "Graph Neural Networks",
    "Data Visualization",
    "Gen AI",
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
