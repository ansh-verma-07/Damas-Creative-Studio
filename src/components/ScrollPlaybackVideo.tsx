import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

type ScrollPlaybackVideoProps = {
  src: string;
};

export default function ScrollPlaybackVideo({ src }: ScrollPlaybackVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.35 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      video.play().catch((err) => {
        console.log("Autoplay blocked or failed:", err);
      });
    } else {
      video.pause();
    }
  }, [isInView]);

  return (
    <section ref={containerRef} className="bg-blue text-bone py-24">
      <div className="container-soft">
        <div className="mb-8 grid gap-6 md:grid-cols-[.75fr_1fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-lime">Brand Film</p>
            <h2 className="headline max-w-3xl text-6xl text-bone md:text-8xl">Momentum you can feel.</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-xl text-lg font-semibold leading-relaxed text-bone/70 md:justify-self-end"
          >
            A cinematic glimpse into our process and culture, capturing the energy, visual rhythm, and purpose we bring to every brand identity.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="liquid-glass glass-light noise-card relative h-[62vh] min-h-[430px] overflow-hidden rounded-[2.5rem] shadow-soft"
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={src}
            muted
            playsInline
            loop
            preload="metadata"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue/40 via-transparent to-black/15" />
        </motion.div>
      </div>
    </section>
  );
}
