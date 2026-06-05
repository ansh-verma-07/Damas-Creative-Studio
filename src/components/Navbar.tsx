import { Menu, Sparkles, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "../data/siteData";
import RollingText from "./RollingText";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-5 z-50 px-4"
    >
      <nav className="liquid-glass glass-blue mx-auto flex w-fit max-w-full items-center gap-2 rounded-full p-2 shadow-soft">
        <Link
          to="/"
          className="grid size-10 shrink-0 place-items-center rounded-full bg-lime text-blue transition-transform duration-500 ease-premium hover:rotate-90"
          onClick={() => setOpen(false)}
          aria-label="Home"
        >
          <Sparkles size={18} strokeWidth={2.7} />
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.slice(1).map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }: { isActive: boolean }) =>
                `rounded-full px-5 py-3 text-sm font-extrabold transition-colors duration-500 ease-premium ${
                  isActive ? "bg-lime text-blue" : "bg-paper text-blue hover:bg-bone"
                }`
              }
            >
              <RollingText>{item.label}</RollingText>
            </NavLink>
          ))}
        </div>
        <button
          type="button"
          className="grid size-10 place-items-center rounded-full bg-paper text-blue md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.96 }}
          className="liquid-glass glass-blue container-soft mt-3 rounded-[2rem] p-3 shadow-soft md:hidden"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-full px-5 py-4 font-extrabold text-paper hover:bg-paper hover:text-blue"
            >
              {item.label}
            </NavLink>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
