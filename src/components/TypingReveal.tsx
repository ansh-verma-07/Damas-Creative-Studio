import { useEffect, useState } from "react";

type TypingRevealProps = {
  phrases: string[];
  className?: string;
};

export default function TypingReveal({ phrases, className = "" }: TypingRevealProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    const complete = count >= phrase.length;
    const timeout = window.setTimeout(() => {
      if (complete) {
        setCount(0);
        setPhraseIndex((index) => (index + 1) % phrases.length);
      } else {
        setCount((value) => value + 1);
      }
    }, complete ? 1450 : 34 + Math.random() * 32);

    return () => window.clearTimeout(timeout);
  }, [count, phraseIndex, phrases]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{phrases[phraseIndex].slice(0, count)}</span>
      <span className="ml-1 h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-current" aria-hidden="true" />
    </span>
  );
}
