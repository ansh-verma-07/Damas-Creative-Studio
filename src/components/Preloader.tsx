import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { animeTimeline } from "../lib/animeLite";

const words = ["Strategy", "Motion", "Emotion", "Identity"];

export default function Preloader() {
  const [done, setDone] = useState(() => sessionStorage.getItem("damas-preloaded") === "true");
  const [progress, setProgress] = useState(0);
  const split = useMemo(() => "DAMAS".split(""), []);

  useEffect(() => {
    if (done) return;
    const progressTimer = window.setInterval(() => {
      setProgress((value) => Math.min(100, value + Math.round(4 + Math.random() * 10)));
    }, 110);

    const timeline = animeTimeline([
      {
        targets: ".pre-logo-letter",
        keyframes: [
          { transform: "translateY(120%) rotate(8deg)", opacity: 0 },
          { transform: "translateY(0%) rotate(0deg)", opacity: 1 }
        ],
        options: { duration: 720 }
      },
      {
        targets: ".pre-word",
        keyframes: [
          { transform: "translateY(110%)", opacity: 0 },
          { transform: "translateY(0%)", opacity: 1 },
          { transform: "translateY(-110%)", opacity: 0 }
        ],
        options: { duration: 980 },
        at: 560
      },
      {
        targets: ".pre-orb",
        keyframes: [
          { transform: "scale(.3) translate3d(0,0,0)", filter: "blur(12px)", opacity: 0 },
          { transform: "scale(1.4) translate3d(20px,-20px,0)", filter: "blur(0px)", opacity: 1 },
          { transform: "scale(22) translate3d(0,0,0)", filter: "blur(4px)", opacity: 1 }
        ],
        options: { duration: 1150 },
        at: 1550
      }
    ]);

    const timeout = window.setTimeout(() => {
      clearInterval(progressTimer);
      setProgress(100);
      sessionStorage.setItem("damas-preloaded", "true");
      setDone(true);
    }, 2650);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(timeout);
      timeline.animations.forEach((animation) => animation.cancel());
    };
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[120] overflow-hidden bg-blue text-bone"
          exit={{ y: "-100%", filter: "blur(8px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pre-orb absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime shadow-glow" />
          <div className="container-soft relative z-10 flex h-full flex-col justify-between py-10">
            <div className="flex items-center justify-between text-sm font-black uppercase tracking-[0.24em] text-bone/70">
              <span>Creative system boot</span>
              <span>{progress}%</span>
            </div>
            <div>
              <div className="mb-10 flex overflow-hidden">
                {split.map((letter, index) => (
                  <span key={`${letter}-${index}`} className="pre-logo-letter headline text-[clamp(5rem,17vw,15rem)] text-lime opacity-0">
                    {letter}
                  </span>
                ))}
              </div>
              <div className="h-16 overflow-hidden text-3xl font-black uppercase tracking-[-0.04em] md:text-5xl">
                {words.map((word) => (
                  <div key={word} className="pre-word opacity-0">{word}</div>
                ))}
              </div>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-bone/15">
              <motion.div className="h-full bg-lime" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
