import type { LucideIcon } from "lucide-react";
import { BadgeCheck, Brush, Compass, Layers3, Sparkles, Workflow } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  deliverables: string[];
};

export type Project = {
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
  images: string[];
  accent: string;
};

export type Article = {
  title: string;
  summary: string;
  image: string;
  category: string;
  readTime: string;
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" }
];

export const heroImages = [
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=90",
  "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=90",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=90"
];

export const services: Service[] = [
  {
    icon: Brush,
    title: "Brand Identity",
    description: "Visual systems with expressive marks, type, color, and campaign-ready guidelines.",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=900&q=90",
    deliverables: ["Logo & Mark Systems", "Color & Typography Rules", "Brand Guidelines", "Stationery & Collateral", "Packaging Systems"]
  },
  {
    icon: Compass,
    title: "Brand Strategy",
    description: "Positioning, narrative, and launch direction for companies moving into their next chapter.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=90",
    deliverables: ["Market Research", "Competitive Analysis", "Brand Architecture", "Positioning & Narrative", "Naming & Nomenclature"]
  },
  {
    icon: Layers3,
    title: "Creative Direction",
    description: "Cohesive art direction across websites, campaigns, product launches, and content systems.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=90",
    deliverables: ["Website & App Art Direction", "Campaign & Photoshoots", "Content Strategy", "Motion Guidelines", "Interactive Prototypes"]
  }
];

export const process = [
  { icon: Sparkles, title: "Discover", text: "We map ambition, audience, and constraints until the strongest direction becomes obvious." },
  { icon: Workflow, title: "Shape", text: "Strategy turns into mood, motion, hierarchy, and a flexible visual operating system." },
  { icon: BadgeCheck, title: "Launch", text: "We polish details, test the experience, and hand off systems built to keep moving." }
];

export const projects: Project[] = [
  {
    title: "Velocity Motors",
    category: "Packaging",
    date: "Jun 2024",
    description: "A high-performance identity for a new era of electric sports cars, fast and emotionally charged.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=90",
    images: [
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=700&q=90",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=700&q=90"
    ],
    accent: "#b8ff12"
  },
  {
    title: "Lumen Atelier",
    category: "Branding",
    date: "Feb 2025",
    description: "A refined visual language for an interiors studio balancing quiet luxury with tactile detail.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=90",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=90"
    ],
    accent: "#0040ff"
  },
  {
    title: "Nimble Apparel",
    category: "Illustration",
    date: "Aug 2024",
    description: "A flexible campaign system for an apparel brand built around movement, texture, and play.",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=90",
    images: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=90",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=90"
    ],
    accent: "#fcd718"
  },
  {
    title: "Heritage Motor",
    category: "Branding",
    date: "Oct 2025",
    description: "A cinematic identity that brings classic automobiles back to life through craft and restraint.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=90",
    images: [
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=700&q=90",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=700&q=90"
    ],
    accent: "#063d30"
  },
  {
    title: "Root & Rise",
    category: "Branding",
    date: "Nov 2023",
    description: "A warm visual ecosystem for a wellness brand rooted in ritual, community, and renewal.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=90",
    images: [
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=90",
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=700&q=90"
    ],
    accent: "#e4d7c2"
  }
];

export const articles: Article[] = [
  {
    title: "Designing Products with Clear Purpose",
    summary: "How mission-led design turns digital products into richer, more meaningful experiences.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1000&q=90",
    category: "Design",
    readTime: "6 min"
  },
  {
    title: "The Future of Modern Fashion Websites",
    summary: "Why modern fashion brands need digital experiences as stylish as their collections.",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=90",
    category: "Web",
    readTime: "8 min"
  },
  {
    title: "How Creative Teams Build Brand Systems",
    summary: "A look at workflows that keep branding consistent across every touchpoint.",
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=1000&q=90",
    category: "Brand",
    readTime: "5 min"
  },
  {
    title: "Starting and Growing a Career in Web Design",
    summary: "Web design blends creativity and technology into roles with lasting demand.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=90",
    category: "Career",
    readTime: "7 min"
  },
  {
    title: "Top Web Design Trends to Watch in 2025",
    summary: "The design shifts shaping richer, calmer, more editorial web experiences.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=90",
    category: "Trends",
    readTime: "9 min"
  },
  {
    title: "The Rise of Modern Tech Startup Websites",
    summary: "Why startups need clear, high trust systems to communicate and attract users.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=90",
    category: "Startup",
    readTime: "6 min"
  }
];

export const faqs = [
  ["How do projects usually start?", "We begin with a short strategy sprint: goals, audience, references, timeline, and the sharpest possible creative direction."],
  ["Can you work with an existing brand?", "Yes. We can extend, refine, or rebuild an existing system while keeping the parts your audience already recognizes."],
  ["Do you design and build websites?", "Yes. We design premium web experiences and can partner through production with motion, responsive systems, and launch support."],
  ["How long does a full project take?", "Most focused brand and web projects take four to eight weeks depending on complexity, content readiness, and review rhythm."]
];
