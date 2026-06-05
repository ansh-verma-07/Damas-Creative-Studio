import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.25 });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[115] h-1 w-full origin-left bg-lime shadow-glow"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
