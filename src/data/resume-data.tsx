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
    "AI Scientist — protein design, generative models, deep learning",
  summary:
    "AI Scientist with 5+ years building deep learning systems for computational protein design. " +
    "Work spans diffusion and flow-based generative models, GNNs, and LLMs. " +
    "At Ordaos Bio, designed the generative pipelines and optimization platform behind the company's core offerings — including a 10x binding improvement on a SARS-CoV-2 antibody.",
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
        "• Architected automated protein design pipelines integrating RFAntibody, Bindcraft, and internal methods — deployed as Docker containers on a Kubernetes cluster with Redis queuing and dynamic resource scaling.\n" +
        "• Ported several recent DL research papers into the internal codebase, replacing non-commercial components with licensed equivalents.",
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
        "• Integrated diffusion-based protein generative models into the internal generation system; fine-tuned with classifier-free guidance for conditional generation without degrading benchmark performance. Built in PyTorch and PyTorch Lightning.\n" +
        "• Designed Ordaos' core protein optimization platform — combining structure prediction, interaction scoring, and numerical property models to drive design decisions. Used to achieve a 10x binding improvement on a SARS-CoV-2 antibody while maintaining resilience to target mutation.",
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
        "• Built components of a multi-modal protein attention model in PyTorch, predicting sequence, atomic positions, and biophysical properties.\n" +
        "• Designed and trained a log Kd model for antibody-antigen binding affinity prediction. After fine-tuning on internal data, the model ranked prospective antibodies such that 57 successful binders fell within the top 70 candidates.",
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
        "• Built an Azure microservice to continuously ingest new arXiv papers into an internal database.\n" +
        "• Embedded paper abstracts with BERT and built a similarity-based recommendation system to surface relevant literature.",
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
        "• Built Keras/TensorFlow models to forecast regional cash-flow requirements across the South African Reserve Bank's network, outperforming the existing baseline by up to 40%.",
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
      title: "ESM-Drift",
      techStack: ["Python", "PyTorch", "ESMFold", "Generative Models"],
      description: "One-step protein structure generation by applying drift-based generative modeling to ESMFold embeddings, based on the 'Generative Modeling via Drifting' paper.",
      logo: OrdaosLogo,
      projectPage: "/projects/esm-drift",
      link: {
        label: "ESM-Drift",
        href: "https://github.com/lhmartin/ESM-Drift",
      },
    },
    {
      title: "DesignCampaign",
      techStack: ["Python", "Protein Design"],
      description: "Open-source tool for visualizing, curating, and filtering protein drug design campaigns. Built to manage large sets of design candidates across multiple runs.",
      logo: OrdaosLogo,
      link: {
        label: "DesignCampaign",
        href: "https://github.com/lhmartin/DesignCampaign",
      },
    },
    {
      title: "Transformer",
      techStack: ["Python", "PyTorch"],
      description: "PyTorch implementation of the original 'Attention Is All You Need' transformer, trained on German-to-English translation.",
      logo: OrdaosLogo,
      link: {
        label: "transformer",
        href: "https://github.com/lhmartin/transformer",
      },
    },
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
