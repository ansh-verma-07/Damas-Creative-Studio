import { useState } from "react";
import { motion } from "framer-motion";
import CaseIndexRail from "../components/CaseIndexRail";
import MagneticButton from "../components/MagneticButton";
import KineticHeadline from "../components/KineticHeadline";
import PageTransition from "../components/PageTransition";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import { projects } from "../data/siteData";

const filters = ["All", "Branding", "Packaging", "Illustration"];

export default function Works() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <PageTransition>
      <section className="container-soft pt-40 md:pt-52">
        <Reveal>
          <SectionLabel>Works</SectionLabel>
          <KineticHeadline text="Our Brightest creations" className="max-w-5xl text-[clamp(4.8rem,10vw,10rem)] text-blue" />
        </Reveal>
        <Reveal delay={0.12} className="mt-8 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <p className="max-w-xl text-xl font-bold leading-snug text-moss/70">
            A showcase of projects with thoughtful design, clear strategy, layered visuals, and impactful results.
          </p>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className="relative rounded-full px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-blue"
              >
                {active === filter && <motion.span layoutId="filter" className="absolute inset-0 rounded-full bg-lime" transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} />}
                <span className="relative z-10">{filter}</span>
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      <CaseIndexRail />
      <section className="container-soft space-y-28 py-24">
        {filtered.map((project, index) => (
          <div id={`case-${index}`} key={project.title} className="scroll-mt-32">
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </section>

      <section className="bg-blue py-24 text-bone">
        <div className="container-soft grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <Reveal>
            <h2 className="headline max-w-4xl text-6xl text-lime md:text-8xl">Have a brief that needs more than a template?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <MagneticButton href="/contact" label="Let's Talk" />
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
