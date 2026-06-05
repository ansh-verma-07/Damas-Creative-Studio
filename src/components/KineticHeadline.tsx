import { motion } from "framer-motion";

type KineticHeadlineProps = {
  text: string;
  className?: string;
};

export default function KineticHeadline({ text, className = "" }: KineticHeadlineProps) {
  return (
    <h1 className={`headline ${className}`} aria-label={text}>
      {text.split(" ").map((word, wordIndex, words) => (
        <span key={`${word}-${wordIndex}`} aria-hidden="true">
          <span className="inline-block overflow-hidden pb-[.08em]">
            <motion.span
              className="inline-block"
              initial={{ y: "115%", rotate: 4, filter: "blur(12px)" }}
              animate={{ y: 0, rotate: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: wordIndex * 0.055, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          </span>
          {wordIndex < words.length - 1 ? " " : ""}
        </span>
      ))}
    </h1>
  );
}
