import { motion, useScroll, useTransform } from "framer-motion";

export default function AmbientField() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div style={{ y: y1, rotate }} className="ambient ambient-one" />
      <motion.div style={{ y: y2 }} className="ambient ambient-two" />
      <motion.div style={{ y: y1 }} className="ambient-grid" />
    </div>
  );
}
