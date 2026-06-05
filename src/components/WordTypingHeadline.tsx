import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type WordTypingHeadlineProps = {
  text: string;
  className?: string;
};

export default function WordTypingHeadline({ text, className = "" }: WordTypingHeadlineProps) {
  const prefersReducedMotion = useReducedMotion();
  const words = useMemo(() => text.split(" "), [text]);
  const [visibleWords, setVisibleWords] = useState(prefersReducedMotion ? words.length : 0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleWords(words.length);
      return;
    }

    setVisibleWords(0);
    const timer = window.setInterval(() => {
      setVisibleWords((count) => {
        if (count >= words.length) {
          window.clearInterval(timer);
          return count;
        }
        return count + 1;
      });
    }, 145);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion, words.length]);

  return (
    <h1 className={`headline ${className}`} aria-label={text}>
      {words.slice(0, visibleWords).map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={prefersReducedMotion ? false : { opacity: 0, y: "0.5em", filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block pr-[0.18em]"
        >
          {word}
          {index < visibleWords - 1 ? "\u00a0" : ""}
        </motion.span>
      ))}
      {!prefersReducedMotion && (
        <motion.span
          aria-hidden="true"
          className="ml-2 inline-block h-[0.82em] w-[3px] translate-y-[0.1em] bg-current"
          animate={{ opacity: [0.15, 1, 0.15] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </h1>
  );
}
