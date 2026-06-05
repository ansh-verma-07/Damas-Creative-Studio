import Reveal from "../components/Reveal";
import PageTransition from "../components/PageTransition";
import SectionLabel from "../components/SectionLabel";
import ScrollPlaybackVideo from "../components/ScrollPlaybackVideo";
import WordTypingHeadline from "../components/WordTypingHeadline";
import { process } from "../data/siteData";

const values = ["Clarity before decoration", "Motion with purpose", "Systems that can breathe", "Details that earn trust"];
const aboutFilm = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4";

export default function About() {
  return (
    <PageTransition>
      <section className="container-soft min-h-[100dvh] pt-32 md:pt-40 pb-12 flex flex-col justify-center">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-12">
          <Reveal>
            <SectionLabel>About Damas</SectionLabel>
            <WordTypingHeadline text="A studio for brands with a pulse." className="max-w-5xl text-[clamp(3rem,8vw,8rem)] text-blue" />
          </Reveal>
          <Reveal delay={0.12} className="max-w-2xl lg:mb-4">
            <p className="text-xl font-bold leading-snug text-moss/75 md:text-2xl">
              We blend strategy, visual craft, motion, and digital product thinking to create identities that feel alive in every interaction.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-blue py-24 text-bone">
        <div className="container-soft grid gap-12 md:grid-cols-[.85fr_1fr]">
          <Reveal>
            <SectionLabel tone="yellow">Brand Story</SectionLabel>
            <h2 className="headline text-6xl text-lime md:text-8xl">Built for meaningful momentum.</h2>
          </Reveal>
          <div className="grid gap-6">
            <Reveal>
              <p className="text-xl font-semibold leading-relaxed text-bone/75">
                The reference uses dramatic scale, punchy colors, and confident whitespace. We keep that spirit, then soften the edges with organic layouts, layered imagery, and motion that feels tactile.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl font-semibold leading-relaxed text-bone/75">
                Our mission is simple: create brands that are easy to understand, hard to forget, and flexible enough to evolve after launch.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <ScrollPlaybackVideo src={aboutFilm} />

      <section className="py-24">
        <div className="container-soft">
          <Reveal className="mb-14">
            <SectionLabel>Process</SectionLabel>
            <h2 className="headline max-w-4xl text-6xl text-blue md:text-8xl">From fuzzy idea to visual system.</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={index * 0.1}>
                  <article className={`rounded-[2.5rem] bg-white/70 p-8 shadow-soft backdrop-blur ${index === 1 ? "md:mt-14" : ""}`}>
                    <Icon className="mb-16 text-blue" size={38} />
                    <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-blue/50">0{index + 1}</p>
                    <h3 className="headline mb-4 text-5xl text-blue">{step.title}</h3>
                    <p className="font-semibold leading-relaxed text-moss/70">{step.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-soft pb-28">
        <div className="grid gap-6 md:grid-cols-[1fr_.78fr]">
          <Reveal>
            <div className="noise-card h-[540px] overflow-hidden rounded-[3rem] shadow-soft">
              <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=90" alt="Creative team collaborating" />
            </div>
          </Reveal>
          <div className="grid gap-5">
            {values.map((value, index) => (
              <Reveal key={value} delay={index * 0.07}>
                <div className="rounded-[2rem] bg-blue p-7 text-bone shadow-soft">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-lime">Value {index + 1}</p>
                  <h3 className="headline mt-8 text-4xl">{value}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
