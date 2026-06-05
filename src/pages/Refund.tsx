import KineticHeadline from "../components/KineticHeadline";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";

export default function Refund() {
  const lastUpdated = "June 2026";

  const sections = [
    {
      title: "1. Retainers & Initials Deposits",
      content:
        "All projects require an initial deposit or retainer fee before research, strategy, or design work begins. This deposit secures your project placement in our studio schedule and is non-refundable, as it covers the costs of immediate resource planning and initial setup.",
    },
    {
      title: "2. Milestone Approvals",
      content:
        "Our design and development processes are broken down into transparent, collaborative milestones (e.g., Discovery, Shape, Delivery). Once a milestone has been reviewed, approved, and signed off by the client, the corresponding milestone payment is non-refundable. Subsequent work depends on these approvals.",
    },
    {
      title: "3. Scope Changes & Cancellations",
      content:
        "If a project is cancelled mid-way by the client, any payment made for already completed milestones or hours worked will not be refunded. However, any unearned project fees for pending phases that have not yet started will be credited back, minus a standard cancellation fee.",
    },
    {
      title: "4. Creative Satisfaction Guarantee",
      content:
        "We are dedicated to building systems and websites that you love. Every project includes structured feedback rounds where we collaborate closely to align and adjust the work. We do not offer refunds based on subjective creative differences once feedback stages have been concluded.",
    },
    {
      title: "5. Contact Us",
      content:
        "If you have any questions about our refund policy, billing, or client sign-off process, please reach out to us at accounts@damas.studio before project kickoff.",
    },
  ];

  return (
    <PageTransition>
      <section className="container-soft min-h-[100dvh] pt-36 pb-24 md:pt-48">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
          {/* Left Column: Sticky Summary */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <Reveal>
              <SectionLabel tone="lime">Refund Policy</SectionLabel>
              <KineticHeadline
                text="Refund Policy"
                className="text-[clamp(3.5rem,8vw,7.5rem)] text-blue"
              />
            </Reveal>
            <Reveal delay={0.1} className="mt-6">
              <p className="text-xl font-bold leading-snug text-moss/70">
                Transparent rules and milestone-based approvals for our creative collaborations.
              </p>
              <div className="mt-8 inline-block rounded-full bg-blue/5 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-blue">
                Last Updated: {lastUpdated}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Detailed Policy Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 0.08}>
                <div className="rounded-[2rem] bg-white/50 p-8 shadow-soft backdrop-blur-sm border border-blue/5 hover:border-blue/10 transition duration-300">
                  <h2 className="headline mb-4 text-3xl text-blue md:text-4xl">
                    {section.title}
                  </h2>
                  <p className="text-lg font-semibold leading-relaxed text-moss/80">
                    {section.content}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
