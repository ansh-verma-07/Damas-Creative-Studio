type RollingTextProps = {
  children: string;
};

export default function RollingText({ children }: RollingTextProps) {
  return (
    <span className="roll" aria-label={children}>
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  );
}
