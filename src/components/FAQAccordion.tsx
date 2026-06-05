import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "../data/siteData";

export default function FAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-3">
      {faqs.map(([question, answer], index) => (
        <div key={question} className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-5 text-bone">
          <button
            type="button"
            onClick={() => setOpen(open === index ? -1 : index)}
            className="flex w-full items-center justify-between gap-5 text-left text-xl font-black"
          >
            {question}
            <motion.span animate={{ rotate: open === index ? 45 : 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
              <Plus className="text-lime" />
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="max-w-2xl pt-4 leading-relaxed text-bone/70">{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
