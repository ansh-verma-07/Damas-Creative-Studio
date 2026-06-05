type SectionLabelProps = {
  children: string;
  tone?: "blue" | "lime" | "yellow";
};

export default function SectionLabel({ children, tone = "blue" }: SectionLabelProps) {
  const color = tone === "lime" ? "text-lime" : tone === "yellow" ? "text-[#f4cd17]" : "text-blue";
  return <p className={`mb-4 text-sm font-black uppercase tracking-[0.24em] ${color}`}>{children}</p>;
}
