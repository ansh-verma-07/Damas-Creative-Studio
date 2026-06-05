import KineticHeadline from "../components/KineticHeadline";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";

export default function Privacy() {
  const lastUpdated = "June 2026";

  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "We collect information that you voluntarily provide to us when you fill out contact forms, start projects, subscribe to newsletters, or contact us. This includes your name, email address, phone number, budget requirements, project details, and any other communication you share.",
    },
    {
      title: "2. How We Use Information",
      content:
        "We use your information to reply to your inquiries, deliver creative and digital services, process payments, send updates, and improve our website experience. We will never sell, rent, or lease your personal information to third parties.",
    },
    {
      title: "3. Cookies & Analytical Data",
      content:
        "We use functional cookies and basic website analytics to monitor traffic patterns, inspect user interaction, and improve our digital representation. You can control cookie preferences within your browser settings.",
    },
    {
      title: "4. Third-Party Services",
      content:
        "To provide our services, we may partner with secure third-party platforms (such as hosting providers, design tools, or payment processors). These partners only access your data to perform specific tasks on our behalf and are obligated to keep it confidential.",
    },
    {
      title: "5. Data Security & Retention",
      content:
        "We implement industry-standard security measures to protect your personal details. We retain your information for as long as necessary to fulfill our service agreements, comply with legal requirements, or resolve disputes.",
    },
    {
      title: "6. Your Rights & Access",
      content:
        "You have the right to request access to the personal data we hold about you, request corrections, or request its complete erasure. To exercise these rights, please contact us at privacy@damas.studio.",
    },
  ];

  return (
    <PageTransition>
      <section className="container-soft min-h-[100dvh] pt-36 pb-24 md:pt-48">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
          {/* Left Column: Sticky Summary */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <Reveal>
              <SectionLabel tone="yellow">Privacy Policy</SectionLabel>
              <KineticHeadline
                text="Privacy Policy"
                className="text-[clamp(3.5rem,8vw,7.5rem)] text-blue"
              />
            </Reveal>
            <Reveal delay={0.1} className="mt-6">
              <p className="text-xl font-bold leading-snug text-moss/70">
                Your trust and data security are fundamental to our creative partnership.
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
