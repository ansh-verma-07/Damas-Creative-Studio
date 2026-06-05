import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import KineticHeadline from "../components/KineticHeadline";
import MagneticButton from "../components/MagneticButton";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";

const budgets = ["<$5,000", "<$10,000", ">$10,000"];

export default function Contact() {
  const [budget, setBudget] = useState(budgets[1]);
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
    setTimeout(() => setSent(false), 2200);
  };

  return (
    <PageTransition>
      <section className="container-soft grid min-h-screen gap-12 pt-40 md:grid-cols-[1fr_.92fr] md:pt-52">
        <Reveal>
          <KineticHeadline text="Let's Build Something Together." className="max-w-4xl text-[clamp(4.5rem,9vw,9.5rem)] text-[#f20f0f]" />
          <p className="mt-8 max-w-xl text-xl font-bold leading-snug text-[#f20f0f]/80">
            Have a project or need help? Fill out the form, and we will get back to you soon.
          </p>
          <div className="mt-12 grid gap-4 text-blue">
            <a href="mailto:hello@damas.studio" className="flex items-center gap-3 text-lg font-black"><Mail size={20} /> hello@damas.studio <ArrowUpRight size={16} /></a>
            <a href="tel:+12345678910" className="flex items-center gap-3 text-lg font-black"><Phone size={20} /> +1 (234) 567-8910 <ArrowUpRight size={16} /></a>
            <p className="flex items-start gap-3 text-lg font-black"><MapPin className="mt-1" size={20} /> 7814 Harrison Blvd. Wilmington, 19804 United States</p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <form onSubmit={submit} className="liquid-glass glass-blue rounded-[2.8rem] p-6 text-bone shadow-soft md:p-9">
            <div className="grid gap-6">
              <label className="grid gap-2 font-black">
                Name
                <input required className="rounded-[1.4rem] border border-white/10 bg-white/[0.07] px-5 py-4 font-semibold outline-none transition focus:border-lime" />
              </label>
              <label className="grid gap-2 font-black">
                Email
                <input type="email" required className="rounded-[1.4rem] border border-white/10 bg-white/[0.07] px-5 py-4 font-semibold outline-none transition focus:border-lime" />
              </label>
              <div>
                <p className="mb-3 font-black">Your Budget</p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {budgets.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setBudget(item)}
                      className={`rounded-full px-4 py-3 text-sm font-black transition duration-300 ${
                        budget === item ? "bg-lime text-blue" : "bg-white/[0.07] text-bone hover:bg-white/[0.12]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <label className="grid gap-2 font-black">
                Your Project
                <textarea required rows={6} className="resize-none rounded-[1.4rem] border border-white/10 bg-white/[0.07] px-5 py-4 font-semibold outline-none transition focus:border-lime" />
              </label>
              <MagneticButton as="button" type="submit" label={sent ? "Message Sent" : "Submit"} className="w-full" />
            </div>
          </form>
        </Reveal>
      </section>
      <section className="container-soft pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Response", "Within 24 hours"],
            ["Studio Hours", "Mon - Fri / 10:00 - 18:00"],
            ["Best For", "Brand systems, launch sites, motion"]
          ].map(([label, value], index) => (
            <Reveal key={label} delay={index * 0.08}>
              <div className={`liquid-glass glass-light living-panel rounded-[2.4rem] p-7 shadow-soft backdrop-blur ${index === 1 ? "md:translate-y-10" : ""}`}>
                <p className="mb-12 text-sm font-black uppercase tracking-[0.2em] text-blue/50">{label}</p>
                <p className="headline text-4xl text-blue">{value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
