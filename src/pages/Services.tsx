import { useState, useMemo } from "react";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import FAQAccordion from "../components/FAQAccordion";
import KineticHeadline from "../components/KineticHeadline";
import MagneticButton from "../components/MagneticButton";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import { services, process } from "../data/siteData";

const configuratorOptions = [
  { id: "strategy", label: "Brand Strategy & Positioning", duration: 3 },
  { id: "identity", label: "Visual Identity & Logo Design", duration: 4 },
  { id: "web", label: "Web Design & Development", duration: 6 },
  { id: "creative", label: "Creative & Art Direction", duration: 4 },
  { id: "packaging", label: "Packaging & Print Collateral", duration: 3 },
  { id: "motion", label: "Motion & Interaction Design", duration: 3 }
];

export default function Services() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (id: string) => {
    setSelectedOptions((prev) =>
      prev.includes(id) ? prev.filter((o) => o !== id) : [...prev, id]
    );
  };

  const estimatedTimeline = useMemo(() => {
    if (selectedOptions.length === 0) return null;
    const selectedDurations = configuratorOptions
      .filter((opt) => selectedOptions.includes(opt.id))
      .map((opt) => opt.duration);
    
    const maxVal = Math.max(...selectedDurations);
    const minVal = Math.min(...selectedDurations);
    
    // Add a bit of padding for multiple tasks
    if (selectedOptions.length === 1) {
      return `${maxVal} to ${maxVal + 1} Weeks`;
    } else if (selectedOptions.length <= 3) {
      return `${Math.max(maxVal, minVal + 2)} to ${maxVal + 3} Weeks`;
    } else {
      return `${Math.max(maxVal + 2, 8)} to ${maxVal + 6} Weeks`;
    }
  }, [selectedOptions]);

  const queryParams = useMemo(() => {
    const labels = configuratorOptions
      .filter((opt) => selectedOptions.includes(opt.id))
      .map((opt) => encodeURIComponent(opt.label))
      .join(",");
    return labels ? `?services=${labels}` : "";
  }, [selectedOptions]);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="container-soft pt-40 md:pt-52">
        <Reveal>
          <SectionLabel>Services</SectionLabel>
          <KineticHeadline text="Design for Distinction" className="max-w-5xl text-[clamp(4.8rem,10vw,10rem)] text-blue" />
        </Reveal>
        <Reveal delay={0.12} className="mt-8 max-w-2xl">
          <p className="text-xl font-bold leading-snug text-moss/70 md:text-2xl">
            We build cohesive brand identities, high-performing websites, and expressive art direction that command attention and drive real value.
          </p>
        </Reveal>
      </section>

      {/* Services List Section */}
      <section className="container-soft py-20 space-y-32">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;
          return (
            <div 
              key={service.title} 
              className={`grid gap-12 md:grid-cols-2 md:items-center ${isEven ? "" : "md:flex-row-reverse"}`}
            >
              {/* Image Card */}
              <Reveal 
                delay={0.05} 
                className={`noise-card h-[380px] md:h-[500px] overflow-hidden shadow-soft ${isEven ? "organic-clip" : "organic-clip-alt"} ${isEven ? "" : "md:order-last"}`}
              >
                <img 
                  className="h-full w-full object-cover transition-transform duration-700 ease-premium hover:scale-105" 
                  src={service.image} 
                  alt={service.title} 
                />
              </Reveal>

              {/* Service Info Content */}
              <Reveal delay={0.1} className="flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-5">
                  <span className="grid size-12 place-items-center rounded-full bg-blue/5 text-blue">
                    <Icon size={22} />
                  </span>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-blue/60">0{index + 1} / Capability</p>
                </div>
                <h2 className="headline mb-5 text-5xl md:text-7xl text-blue leading-none">{service.title}</h2>
                <p className="mb-8 text-lg md:text-xl font-semibold leading-relaxed text-moss/75">{service.description}</p>
                
                {/* Deliverables List */}
                <div className="border-t border-blue/10 pt-6">
                  <h4 className="text-xs font-black uppercase tracking-[0.18em] text-blue mb-4">Core Deliverables</h4>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.deliverables.map((del) => (
                      <li key={del} className="flex items-center gap-2.5 text-base font-bold text-moss/70">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-lime" />
                        {del}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          );
        })}
      </section>

      {/* Process Section */}
      <section className="bg-blue py-24 text-bone">
        <div className="container-soft">
          <Reveal className="mb-16">
            <SectionLabel tone="yellow">How We Work</SectionLabel>
            <h2 className="headline max-w-4xl text-6xl text-lime md:text-8xl">Our Collaborative Journey</h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={index * 0.1}>
                  <div className="liquid-glass glass-light p-8 rounded-[2.5rem] shadow-soft relative overflow-hidden group hover:border-lime/30 transition-all duration-500 min-h-[280px] flex flex-col justify-between">
                    <div className="absolute top-0 right-0 p-8 text-[7rem] font-black text-lime/5 select-none transition-colors duration-500 group-hover:text-lime/10 leading-none">
                      0{index + 1}
                    </div>
                    <Icon className="text-lime" size={36} />
                    <div className="mt-8">
                      <h3 className="headline text-4xl mb-3 text-bone">{step.title}</h3>
                      <p className="font-semibold leading-relaxed text-bone/70">{step.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Configurator Section */}
      <section className="py-24 bg-bone/45">
        <div className="container-soft">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr]">
            <Reveal>
              <SectionLabel>Interactive Planner</SectionLabel>
              <h2 className="headline text-5xl md:text-7xl text-blue mb-6 leading-none">Configure Your Project</h2>
              <p className="text-lg font-semibold leading-relaxed text-moss/70 mb-8">
                Select the creative services you require. Our interactive planner calculates a suggested timeline to help kickstart your project.
              </p>
              
              {/* Dynamic timeline read-out */}
              <div className="liquid-glass glass-blue p-8 rounded-[2rem] text-bone shadow-soft min-h-[160px] flex flex-col justify-center">
                {estimatedTimeline ? (
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-lime">Estimated Timeline</p>
                    <p className="headline text-5xl mt-2 text-white">{estimatedTimeline}</p>
                    <p className="text-sm font-bold text-bone/60 mt-3">Ready to bring this timeline to life? Send it over to our team.</p>
                  </div>
                ) : (
                  <div>
                    <HelpCircle className="text-lime mb-3" size={32} />
                    <p className="text-lg font-bold text-bone/90">Select one or more services to estimate a project delivery window.</p>
                  </div>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-2">
                {configuratorOptions.map((opt) => {
                  const isSelected = selectedOptions.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleOption(opt.id)}
                      className={`group flex items-start gap-4 p-6 rounded-[2rem] text-left transition-all duration-500 border-2 ${
                        isSelected
                          ? "bg-blue border-blue text-bone shadow-soft scale-[1.02]"
                          : "bg-white/60 hover:bg-white border-blue/5 hover:border-blue/15 text-blue"
                      }`}
                    >
                      <span className={`grid size-7 shrink-0 place-items-center rounded-full mt-0.5 border ${
                        isSelected 
                          ? "bg-lime border-lime text-blue" 
                          : "border-blue/20 text-transparent"
                      }`}>
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <div>
                        <h4 className="font-extrabold text-lg leading-snug">{opt.label}</h4>
                        <p className={`text-xs mt-1.5 font-bold uppercase tracking-[0.1em] ${
                          isSelected ? "text-lime/90" : "text-blue/55"
                        }`}>
                          ~ {opt.duration} Weeks
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
              <div className="mt-8 flex justify-end">
                <MagneticButton
                  href={`/contact${queryParams}`}
                  label={selectedOptions.length > 0 ? "Request Timeline Proposal" : "Let's Work Together"}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-blue py-24 text-bone">
        <div className="container-soft grid gap-12 md:grid-cols-[.8fr_1fr]">
          <Reveal>
            <SectionLabel tone="yellow">FAQs</SectionLabel>
            <h2 className="headline text-6xl text-bone md:text-8xl">Have Questions?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQAccordion />
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
