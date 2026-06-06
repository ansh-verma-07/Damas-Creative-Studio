import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import KineticHeadline from "../components/KineticHeadline";
import MagneticButton from "../components/MagneticButton";
import MarqueeRibbon from "../components/MarqueeRibbon";
import MorphWords from "../components/MorphWords";
import PageTransition from "../components/PageTransition";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import TypingReveal from "../components/TypingReveal";
import { heroImages, projects, services } from "../data/siteData";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 120]);
  const heroRotate = useTransform(scrollYProgress, [0, 0.35], [-4, 5]);

  return (
    <PageTransition>
      <section className="relative h-[100dvh] min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden px-4 pt-20 pb-4 md:pt-28 md:pb-8 lg:py-0">
        <div className="container-soft relative z-10 w-full">
          <div className="grid items-center gap-6 md:gap-12 md:grid-cols-[1.1fr_0.9fr] w-full">
            <div className="flex flex-col justify-center">
              <KineticHeadline text="BRINGING YOUR VISION TO LIFE." className="max-w-4xl text-[clamp(2.2rem,7vw,4.5rem)] md:text-[clamp(2.5rem,5vw,5.5rem)] lg:text-[clamp(3rem,5.2vw,6.2rem)] text-blue leading-none" />
              <Reveal delay={0.25} className="mt-3 md:mt-4 lg:mt-6 max-w-2xl overflow-visible">
                <p className="text-balance text-lg md:text-xl font-bold leading-snug text-blue/80">
                   Where imagination, strategy, and storytelling collide to build <MorphWords /> brand experiences that move people and grow businesses.
                </p>
              </Reveal>
              <Reveal delay={0.3} className="mt-2.5 md:mt-3 lg:mt-4">
                <p className="liquid-glass glass-light inline-flex rounded-full px-5 py-2.5 text-xs md:text-sm font-black uppercase tracking-[0.18em] text-blue">
                  <TypingReveal phrases={["Strategy in motion", "Systems with feeling", "Brands that breathe"]} />
                </p>
              </Reveal>
              <Reveal delay={0.35} className="mt-3 md:mt-5 lg:mt-6 flex flex-wrap gap-3 md:gap-4">
                <MagneticButton href="/contact" label="Get Started" />
                <MagneticButton href="/works" label="Explore Work" variant="ghost" />
              </Reveal>
            </div>
            <motion.div style={{ y: heroY }} className="relative w-full hidden md:block h-[28vh] xs:h-[32vh] lg:h-[45vh] lg:max-h-[500px] xl:h-[50vh] xl:max-h-[550px]">
              <motion.div style={{ rotate: heroRotate }} className="noise-card absolute right-0 top-[5%] h-[75%] lg:h-64 w-[78%] overflow-hidden organic-clip-alt shadow-soft">
                <img className="h-full w-full object-cover" src={heroImages[0]} alt="Abstract creative work" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 60, rotate: -12 }}
                animate={{ opacity: 1, y: 0, rotate: -5 }}
                transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="liquid-glass glass-light noise-card absolute bottom-[5%] right-[10%] h-[80%] lg:h-80 w-[86%] overflow-hidden rounded-[2rem] lg:rounded-[3rem] shadow-soft"
              >
                <video
                  className="h-full w-full object-cover opacity-95"
                  src="https://videos.pexels.com/video-files/3141208/3141208-uhd_2560_1440_25fps.mp4"
                  poster={heroImages[1]}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-x-5 bottom-5 rounded-full bg-blue/85 px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-lime backdrop-blur">
                  Live brand motion
                </div>
              </motion.div>
              <motion.div
                animate={{ rotate: [16, 10, 16], y: [0, -14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-5 top-[40%] lg:top-56 h-[30%] lg:h-32 w-16 lg:w-24 bg-lime shadow-glow"
                style={{ clipPath: "polygon(54% 0,100% 0,62% 40%,100% 40%,16% 100%,45% 55%,0 55%)" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-blue py-24 text-bone">
        <div className="container-soft grid items-center gap-14 md:grid-cols-[.85fr_1fr]">
          <Reveal>
            <SectionLabel tone="yellow">About Us</SectionLabel>
            <h2 className="headline text-6xl text-lime md:text-8xl">Ideas Crafted Into Impact</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-xl font-semibold leading-relaxed text-bone/75">
              We are a collective of designers, strategists, and storytellers who turn bold ideas into visual systems with resonance. The work is crisp, but never cold.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-black text-lime">
              Learn more <ArrowUpRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <MarqueeRibbon />

      <section className="py-24">
        <div className="container-soft">
          <Reveal className="mb-14 max-w-3xl">
            <SectionLabel>Services</SectionLabel>
            <h2 className="headline text-6xl text-blue md:text-8xl">How We Elevate Your Brand</h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 0.08}>
                  <Link to="/services" className="block cursor-pointer">
                    <motion.article whileHover={{ y: -14, rotate: index === 1 ? 1.5 : -1.5 }} className="noise-card group relative min-h-[420px] overflow-hidden rounded-[2.5rem] p-7 text-bone shadow-soft">
                      <img className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={service.image} alt="" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="relative z-10 flex h-full min-h-[360px] flex-col justify-between">
                        <Icon className="text-lime" size={34} />
                        <div>
                          <h3 className="headline mb-4 text-5xl">{service.title}</h3>
                          <p className="font-semibold leading-relaxed text-bone/80">{service.description}</p>
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-soft pb-24">
        <div className="grid gap-6 md:grid-cols-[.8fr_1.2fr_.7fr] md:items-center">
          <Reveal>
            <div className="liquid-glass glass-light living-panel rounded-[2.5rem] p-8 shadow-soft backdrop-blur">
              <p className="mb-16 text-sm font-black uppercase tracking-[0.22em] text-blue/50">Signal 01</p>
              <h3 className="headline text-5xl text-blue">Strategy that can move.</h3>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="noise-card h-[420px] overflow-hidden rounded-[4rem] shadow-soft md:-rotate-2">
              <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=90" alt="Immersive creative installation" />
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="rounded-[2rem] bg-blue p-7 text-bone shadow-soft md:translate-y-20">
              <p className="mb-10 text-sm font-black uppercase tracking-[0.22em] text-lime">Signal 02</p>
              <p className="text-xl font-bold leading-snug text-bone/80">A brand should not sit still. It should respond, breathe, and invite touch.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bone py-24">
        <div className="container-soft">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <SectionLabel>Featured Works</SectionLabel>
              <h2 className="headline max-w-3xl text-6xl text-moss md:text-8xl">Our Brightest Creations</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <MagneticButton href="/works" label="View All" variant="ghost" />
            </Reveal>
          </div>
          <div className="space-y-24">
            {projects.slice(0, 2).map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-blue/10">
        <div className="container-soft">
          <Reveal className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel>Capabilities</SectionLabel>
              <h2 className="headline text-6xl text-blue md:text-8xl">Tailored to Lead</h2>
            </div>
            <MagneticButton href="/services" label="View All Services" variant="ghost" />
          </Reveal>
          <div className="divide-y divide-blue/15">
            {services.map((service, index) => {
              return (
                <Reveal key={service.title} delay={index * 0.08}>
                  <Link
                    to="/services"
                    className="group flex flex-col justify-between py-8 md:flex-row md:items-center transition-all duration-500 hover:pl-4 hover:pr-4 rounded-[1.5rem] hover:bg-blue/5"
                  >
                    <div className="flex items-center gap-6">
                      <span className="headline text-4xl text-blue/30 group-hover:text-blue transition-colors">
                        0{index + 1}
                      </span>
                      <h3 className="headline text-3xl md:text-5xl text-blue transition-colors group-hover:translate-x-2 duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 md:mt-0">
                      {service.deliverables.slice(0, 3).map((del) => (
                        <span
                          key={del}
                          className="rounded-full border border-blue/10 bg-paper/60 px-4 py-1.5 text-xs font-bold text-moss/80 transition-colors group-hover:border-lime/40 group-hover:bg-lime/10"
                        >
                          {del}
                        </span>
                      ))}
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
