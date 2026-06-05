import { motion, useMotionValue, useSpring } from "framer-motion";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import RollingText from "./RollingText";

type CommonProps = PropsWithChildren<{
  label: string;
  variant?: "primary" | "dark" | "ghost";
  className?: string;
}>;

type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as?: "a" };
type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { as: "button" };
type MagneticButtonProps = AnchorProps | ButtonProps;

const variants = {
  primary: "bg-lime text-blue shadow-glow",
  dark: "bg-blue text-bone",
  ghost: "bg-white/60 text-blue ring-1 ring-blue/15 backdrop-blur-xl"
};

export default function MagneticButton(props: MagneticButtonProps) {
  const { label, variant = "primary", className = "" } = props;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 16, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 180, damping: 16, mass: 0.35 });

  const move = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.22);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.22);
  };

  const leave = () => {
    x.set(0);
    y.set(0);
  };

  const base = `magnetic-hit liquid-link inline-flex min-h-14 items-center justify-center rounded-full px-7 text-sm font-extrabold uppercase tracking-[0.02em] transition-colors duration-500 ease-premium ${variants[variant]} ${className}`;

  if (props.as === "button") {
    const { as: _as, children: _children, label: _label, variant: _variant, className: _className, ...buttonProps } = props;
    return (
      <motion.button
        style={{ x: springX, y: springY }}
        onMouseMove={move}
        onMouseLeave={leave}
        whileTap={{ scale: 0.96 }}
        className={base}
        {...buttonProps}
      >
        <RollingText>{label}</RollingText>
      </motion.button>
    );
  }

  const { as: _as, children: _children, label: _label, variant: _variant, className: _className, href = "#", ...anchorProps } = props;
  const internal = href.startsWith("/");
  const content = <RollingText>{label}</RollingText>;
  if (internal) {
    return (
      <motion.span style={{ x: springX, y: springY }} onMouseMove={move} onMouseLeave={leave} whileTap={{ scale: 0.96 }}>
        <Link className={base} to={href} {...anchorProps}>
          {content}
        </Link>
      </motion.span>
    );
  }
  return (
    <motion.a
      style={{ x: springX, y: springY }}
      onMouseMove={move}
      onMouseLeave={leave}
      whileTap={{ scale: 0.96 }}
      className={base}
      href={href}
      {...anchorProps}
    >
      {content}
    </motion.a>
  );
}
