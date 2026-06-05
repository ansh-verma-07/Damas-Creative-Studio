import { motion } from "framer-motion";

const words = ["memorable", "tactile", "cinematic", "alive"];

export default function MorphWords() {
  return (
    <span className="relative mx-1 inline-block h-[1.08em] min-w-[6.1em] overflow-hidden align-[-0.08em] text-blue sm:min-w-[6.5em]">
      {words.map((word, index) => (
        <motion.span
          key={word}
          className="absolute left-0 top-0 whitespace-nowrap font-black"
          animate={{
            y: ["110%", "0%", "0%", "-110%"],
            opacity: [0, 1, 1, 0],
            filter: ["blur(8px)", "blur(0px)", "blur(0px)", "blur(8px)"]
          }}
          transition={{
            duration: 4,
            delay: index * 1,
            repeat: Infinity,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
