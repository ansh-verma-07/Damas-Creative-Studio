import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "../data/siteData";
import MagneticButton from "./MagneticButton";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const flip = index % 2 === 1;
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className={`group grid items-center gap-8 md:grid-cols-2 ${flip ? "md:[&_.copy]:order-2" : ""}`}
    >
      <div className="copy relative z-10">
        <div className="mb-7 flex max-w-md justify-between text-sm font-black uppercase tracking-[0.18em] text-moss/70">
          <span>{project.date}</span>
          <span>{project.category}</span>
        </div>
        <h3 className="headline mb-6 text-5xl text-moss md:text-7xl">{project.title}</h3>
        <p className="mb-8 max-w-md text-lg font-semibold leading-relaxed text-moss/70">{project.description}</p>
        <MagneticButton href="#" label="See Project" variant="ghost" />
      </div>
      <div className="relative min-h-[430px]">
        <motion.div
          whileHover={{ y: -12, rotate: flip ? 1.8 : -1.8 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={`noise-card living-panel absolute inset-0 overflow-hidden organic-clip ${flip ? "rotate-2" : "-rotate-2"}`}
        >
          <img className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105" src={project.image} alt={project.title} />
        </motion.div>
        {project.images.map((image, imageIndex) => (
          <motion.img
            key={image}
            src={image}
            alt=""
            className={`absolute size-24 rounded-3xl object-cover shadow-soft ring-4 ring-paper md:size-28 ${
              imageIndex === 0 ? "left-4 top-6" : "bottom-8 right-4"
            }`}
            whileHover={{ scale: 1.08, rotate: imageIndex === 0 ? -6 : 6 }}
          />
        ))}
        <div
          className="absolute -bottom-6 left-8 flex size-16 items-center justify-center rounded-full text-blue shadow-glow"
          style={{ backgroundColor: project.accent }}
        >
          <ArrowUpRight />
        </div>
      </div>
    </motion.article>
  );
}
