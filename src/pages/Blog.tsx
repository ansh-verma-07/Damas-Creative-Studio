import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import FAQAccordion from "../components/FAQAccordion";
import KineticHeadline from "../components/KineticHeadline";
import MagneticButton from "../components/MagneticButton";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import { articles } from "../data/siteData";

export default function Blog() {
  const [query, setQuery] = useState("");
  const visibleArticles = useMemo(
    () => articles.filter((article) => `${article.title} ${article.summary} ${article.category}`.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <PageTransition>
      <section className="container-soft pt-40 md:pt-52">
        <Reveal>
          <SectionLabel>Blog</SectionLabel>
          <KineticHeadline text="Inside the Journal" className="max-w-5xl text-[clamp(4.8rem,10vw,10rem)] text-blue" />
        </Reveal>
        <Reveal delay={0.12} className="mt-8 max-w-2xl">
          <p className="text-xl font-bold leading-snug text-moss/70">
            Discover fresh ideas, practical tips, and creative insights designed to inspire better digital experiences.
          </p>
        </Reveal>
        <Reveal delay={0.18} className="liquid-glass glass-light relative mt-10 max-w-xl rounded-full">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-blue/55" size={20} />
          <input
            value={query}
            onChange={(event: { target: { value: string } }) => setQuery(event.target.value)}
            className="h-16 w-full rounded-full border-0 bg-transparent pl-14 pr-6 text-lg font-bold text-moss shadow-soft outline-none ring-1 ring-blue/10 transition focus:ring-blue"
            placeholder="Search articles..."
          />
        </Reveal>
      </section>

      <section className="container-soft py-20">
        <Reveal>
          <article className="liquid-glass glass-blue grid overflow-hidden rounded-[3rem] text-bone shadow-soft md:grid-cols-2">
            <div className="flex min-h-[430px] flex-col justify-between p-8 md:p-12">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-lime">Featured</p>
              <h2 className="headline max-w-xl text-5xl md:text-7xl">Preserving Stories Through Timeless Visual Systems</h2>
              <div>
                <p className="mb-7 max-w-md font-semibold leading-relaxed text-bone/70">How classic ideas are brought back to life through craftsmanship, restraint, and expressive digital systems.</p>
                <MagneticButton href="#" label="Read Full Article" />
              </div>
            </div>
            <div className="noise-card min-h-[430px]">
              <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1200&q=90" alt="Featured editorial article" />
            </div>
          </article>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {visibleArticles.map((article, index) => (
            <Reveal key={article.title} delay={index * 0.05}>
              <article className="group">
                <div className={`noise-card mb-6 h-72 overflow-hidden shadow-soft ${index % 2 ? "organic-clip-alt md:mt-12" : "organic-clip"}`}>
                  <img className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-110" src={article.image} alt={article.title} />
                </div>
                <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-blue/55">{article.category} / {article.readTime}</p>
                <h3 className="headline mb-4 text-4xl text-blue">{article.title}</h3>
                <p className="font-semibold leading-relaxed text-moss/70">{article.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-blue py-24">
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
