import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import MagneticButton from "./MagneticButton";

export default function Footer() {
  return (
    <footer className="bg-bone py-12 text-blue">
      <div className="container-soft">
        <div className="mb-12 grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link to="/" className="mb-6 inline-flex items-center gap-3 text-3xl font-black tracking-[-0.06em]">
              <span className="grid size-11 place-items-center rounded-full bg-lime">✦</span>
              Damas
            </Link>
            <p className="max-w-sm text-lg font-semibold text-blue/75">
              A creative studio shaping distinctive brands, expressive websites, and visual systems with feeling.
            </p>
          </div>
          <div>
            <p className="mb-5 font-black uppercase">Visit Us</p>
            <p className="max-w-xs text-lg font-semibold text-blue/75">7814 Harrison Blvd. Wilmington, 19804 United States</p>
          </div>
          <div>
            <p className="mb-5 font-black uppercase">Contact Us</p>
            <a className="mb-3 flex items-center gap-2 text-lg font-semibold" href="mailto:hello@damas.studio">
              hello@damas.studio <ArrowUpRight size={17} />
            </a>
            <a className="flex items-center gap-2 text-lg font-semibold" href="tel:+12345678910">
              +1 (234) 567-8910 <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div className="mb-12 overflow-hidden rounded-organic bg-blue px-6 py-14 text-bone md:px-12">
          <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <h2 className="headline max-w-3xl text-6xl text-lime md:text-8xl">LET'S CREATE TOGETHER</h2>
            <MagneticButton href="/contact" label="Start a Project" />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-blue/15 pt-6 text-sm font-bold md:flex-row">
          <span>© 2026 Damas Creative. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-blueSoft transition duration-300">Terms</Link>
            <Link to="/privacy" className="hover:text-blueSoft transition duration-300">Privacy</Link>
            <Link to="/refund" className="hover:text-blueSoft transition duration-300">Refund</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
