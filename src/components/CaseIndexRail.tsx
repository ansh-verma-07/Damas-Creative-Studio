import { motion } from "framer-motion";
import { projects } from "../data/siteData";

export default function CaseIndexRail() {
  return (
    <div className="pointer-events-none sticky top-1/2 z-40 hidden h-0 -translate-y-1/2 justify-end pr-3 lg:flex xl:pr-6">
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="pointer-events-auto flex min-h-[300px] w-16 flex-col items-center justify-between rounded-full bg-white/70 px-2 py-3 shadow-soft backdrop-blur-xl xl:translate-x-2"
      >
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={`#case-${index}`}
            className={`grid h-8 w-12 place-items-center rounded-full text-xs font-black text-blue transition duration-300 ease-premium hover:bg-lime ${
              index === 0 ? "bg-white shadow-soft" : ""
            }`}
          >
            {index + 1}
          </a>
        ))}
      </motion.div>
    </div>
  );
}
