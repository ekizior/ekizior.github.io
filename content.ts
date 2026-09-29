import type { StaticImageData } from "next/image";
import headshot from "@/public/images/headshot.jpg";
import gravitas from "@/public/images/gravitas.png";
import microfabrication from "@/public/images/microfabrication.jpg";
import rockysMysteryDungeon from "@/public/images/rockys-mystery-dungeon.png";

export type Period = { start: number; end?: number | "Present" };

export type ProfileLink = { label: string; href: string };

export type LedgerEntry = {
  role: string;
  org: string;
  period: Period;
  note?: string;
};

export type Picture = { src: StaticImageData; alt: string; pixelated?: boolean };

export type Project = {
  title: string;
  year: number;
  url?: string;
  image?: Picture;
  description: string;
  tags: string[];
};

export type Content = {
  meta: { title: string; description: string; url: string };
  name: string;
  photo: Picture;
  tagline: string;
  location: string;
  links: ProfileLink[];
  about: string;
  experience: LedgerEntry[];
  projects: Project[];
  education: LedgerEntry[];
  footer: {
    copyright: string;
    updated: { label: string; dateTime: string };
    signoff: string;
  };
};

export const content: Content = {
  meta: {
    title: "Erik Kizior",
    description: "Software & hardware engineer · M.S. EE at Stanford",
    url: "https://ekizior.github.io",
  },
  name: "Erik Kizior",
  photo: { src: headshot, alt: "Portrait of Erik Kizior" },
  tagline: "Software & hardware engineer · M.S. EE at Stanford",
  location: "Stanford, CA",
  links: [
    { label: "GitHub", href: "https://github.com/ekizior" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/erikkizior/" },
    { label: "Email", href: "mailto:kiziorerik@gmail.com" },
  ],
  about:
    "I'm an electrical engineering master's student at Stanford who works across the stack, from agentic AI systems down to RTL. This summer at Meta I built an AI platform that triages product signals for Instagram. The summer before, at Amazon, I built a generative-AI engine that automates security threat reviews. At Stanford's Tambe Lab I research hardware for machine learning. At Berkeley I spent two years teaching data structures, most recently leading a 48-person staff for an 800+ student course. I care about systems that are measurable, reliable, and easy for the next engineer to pick up.",
  experience: [
    {
      role: "Graduate Researcher",
      org: "Stanford University, Tambe Lab",
      period: { start: 2026, end: "Present" },
      note: "Computer architecture research on hardware systems for machine learning.",
    },
    {
      role: "Software Engineer Intern",
      org: "Meta, Instagram Metrics",
      period: { start: 2026 },
      note: "Designed and shipped an agentic AI platform (Hack, React) that classifies UI-detected signals into Instagram's metric catalog. It reached ~14% higher coverage than human triage at ~98% precision and saves an estimated 152 engineer-hours per year.",
    },
    {
      role: "Software Development Engineer Intern",
      org: "Amazon, Application Security",
      period: { start: 2025 },
      note: "Built a generative-AI threat analysis engine on AWS (Bedrock, Lambda, Step Functions) that uses a two-stage RAG pipeline to read design diagrams and flag security threats. It supports 20+ security engineers and saves ~120 engineer-hours per year.",
    },
    {
      role: "Undergraduate Researcher",
      org: "UC Berkeley, MRI Reconstruction",
      period: { start: 2024, end: 2025 },
      note: "Trained a PyTorch U-Net to reconstruct MRI scans from undersampled k-space data (fastMRI, 56k+ samples), reaching >0.95 SSIM. Cut training time by more than 10x with distributed GPU training on the Savio HPC cluster.",
    },
    {
      role: "Head TA & Instructor",
      org: "UC Berkeley EECS, CS61B/CS61BL",
      period: { start: 2023, end: 2025 },
      note: "Co-taught the summer course to 350+ students with 96.7% satisfaction, then led a 48-person teaching staff for an 800+ student course. Built autograders and internal course tooling along the way.",
    },
    {
      role: "Tutor Enrichment Director",
      org: "The Music Connection",
      period: { start: 2023, end: 2025 },
      note: "Recruited 50+ tutors per semester for free K–12 music lessons in Berkeley and Oakland. Built a Gmail API tool that automated tutor–family matching and raised pairings by 37.5%.",
    },
  ],
  projects: [
    {
      title: "Gravitas",
      year: 2024,
      url: "https://huanger2.itch.io/gravitas",
      image: { src: gravitas, alt: "Gravitas title screen" },
      description:
        "An original game developed with Unity. See if you can solve all of the levels!",
      tags: ["Unity", "C#", "Game Development"],
    },
    {
      title: "Rocky's Mystery Dungeon",
      year: 2024,
      image: {
        src: rockysMysteryDungeon,
        alt: "Pixel-art corgi character from Rocky's Mystery Dungeon",
        pixelated: true,
      },
      description:
        "A recreation of Pokemon Mystery Dungeon. Navigate randomly generated 2D worlds while fighting enemies.",
      tags: ["Java", "Artificial Intelligence", "Game Development"],
    },
    {
      title: "Semiconductor Device Microfabrication",
      year: 2024,
      image: { src: microfabrication, alt: "Probe station testing a fabricated silicon wafer" },
      description:
        "Carried out a four-mask process in Berkeley's Microfabrication laboratory to fabricate functional semiconductor devices, simple IC circuits, and surface microstructures on a Silicon wafer.",
      tags: ["MOSFETs", "MEMS", "Microfabrication", "Semiconductor Physics"],
    },
    {
      title: "DNN Hardware Accelerator",
      year: 2026,
      url: "https://github.com/ekizior",
      description:
        "A full RTL-to-GDS 4×4 systolic array for ResNet-18 on SkyWater 130nm, later re-implemented in Catapult HLS and scaled to 16×16.",
      tags: ["Verilog", "C++ HLS", "Synopsys", "Cadence Innovus", "SKY130"],
    },
    {
      title: "Pipelined RISC-V CPU",
      year: 2024,
      description:
        "A 3-stage RV32I processor on FPGA whose forwarding logic resolves every read-after-write hazard without stalling.",
      tags: ["Verilog", "RISC-V", "FPGA"],
    },
    {
      title: "Secure File Sharing System",
      year: 2023,
      description:
        "End-to-end encrypted file storage and sharing using AES, RSA, and SHA-256, tested against man-in-the-middle and replay attacks.",
      tags: ["Go", "Cryptography"],
    },
    {
      title: "Git from Scratch",
      year: 2024,
      description:
        "A version-control system with commits, branching, and merge conflict resolution, built on SHA-1 content-addressed snapshots.",
      tags: ["Java", "File Systems"],
    },
    {
      title: "Pacman AI Agents",
      year: 2024,
      description:
        "A* search, minimax with alpha-beta pruning, Q-learning, and HMM-based ghost tracking from noisy sensor data.",
      tags: ["Python", "Reinforcement Learning", "Probabilistic Inference"],
    },
    {
      title: "Voice-Controlled Car",
      year: 2022,
      description:
        "A custom mic board with a bandpass filter that feeds PCA and k-means speech classification to drive an Arduino car.",
      tags: ["Arduino", "Python", "Signal Processing"],
    },
  ],
  education: [
    {
      role: "M.S. Electrical Engineering",
      org: "Stanford University",
      period: { start: 2025, end: 2027 },
    },
    {
      role: "B.S. Electrical Engineering & Computer Science",
      org: "UC Berkeley",
      period: { start: 2021, end: 2025 },
      note: "Cum Laude · Tau Beta Pi · Eta Kappa Nu · Outstanding GSI Award",
    },
  ],
  footer: {
    copyright: "© 2026 Erik Kizior",
    updated: { label: "September 2026", dateTime: "2026-09" },
    signoff: "Thanks for stopping by.",
  },
};
