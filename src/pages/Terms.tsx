import KineticHeadline from "../components/KineticHeadline";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";

export default function Terms() {
  const lastUpdated = "June 2026";

  const sections = [
    {
      title: "1. The Agreement",
      content:
        "By accessing or using the services provided by Damas Creative ('we', 'us', or 'our'), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services or access our digital properties. These terms apply to all clients, visitors, users, and others who access or use our services.",
    },
    {
      title: "2. Creative & Project Scope",
      content:
        "All projects are governed by a signed Service Agreement or Statement of Work (SOW). Any changes to scope, design requirements, or deliverables requested after project kickoff may be subject to additional fees. We pride ourselves on transparent, structured milestone approvals to ensure clarity and excellence at every step.",
    },
    {
      title: "3. Intellectual Property",
      content:
        "Unless specified otherwise in our written contract, all preliminary designs, assets, ideas, concepts, and draft materials developed by us remain the property of Damas Creative. Upon final approval and receipt of full payment, ownership of the finalized deliverables transfers to the client, subject to our right to display the work in our portfolio, case studies, and promotional materials.",
    },
    {
      title: "4. Client Obligations",
      content:
        "Successful creative partnership requires mutual collaboration. You agree to provide timely feedback, assets, and approvals. Delays in providing requested materials or approvals may result in timeline extensions and rescheduling fees to keep our studio pipeline organized.",
    },
    {
      title: "5. Termination",
      content:
        "Either party may terminate a project as specified in the individual SOW. Upon termination, client agrees to pay for all hours worked and milestones achieved up to the termination date. All preliminary creative designs remain the exclusive property of Damas Creative.",
    },
    {
      title: "6. Limitation of Liability",
      content:
        "In no event shall Damas Creative, its directors, employees, or partners be liable for any indirect, incidental, special, or consequential damages resulting from your use of or inability to use our services, websites, or deliverables.",
    },
  ];

  return (
    <PageTransition>
      <section className="container-soft min-h-[100dvh] pt-36 pb-24 md:pt-48">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
          {/* Left Column: Sticky Summary */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <Reveal>
              <SectionLabel>Legal Policies</SectionLabel>
              <KineticHeadline
                text="Terms of Service"
                className="text-[clamp(3.5rem,8vw,7.5rem)] text-blue"
              />
            </Reveal>
            <Reveal delay={0.1} className="mt-6">
              <p className="text-xl font-bold leading-snug text-moss/70">
                These terms govern the creative and digital services provided by Damas Creative.
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
