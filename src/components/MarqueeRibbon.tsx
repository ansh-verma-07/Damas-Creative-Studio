import { motion } from "framer-motion";

const line = ["Brand systems", "Motion language", "Digital storytelling", "Launch rhythm", "Visual culture"];

export default function MarqueeRibbon() {
  return (
    <div className="mask-fade overflow-hidden bg-blue py-5 text-bone">
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, ease: "linear", repeat: Infinity }}
      >
        {[...line, ...line, ...line, ...line].map((item, index) => (
          <span key={`${item}-${index}`} className="headline text-4xl text-lime md:text-6xl">
            {item} <span className="text-bone/35">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
