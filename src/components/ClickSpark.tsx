import { animate } from "framer-motion";
import { useEffect } from "react";

export default function ClickSpark() {
  useEffect(() => {
    const burst = (className: string, x: number, y: number) => {
      const element = document.createElement("span");
      element.className = className;
      document.body.appendChild(element);
      return { element, x, y };
    };

    const onPointerDown = (event: PointerEvent) => {
      const ring = burst("spark-ring", event.clientX - 17, event.clientY - 17);
      animate(
        ring.element,
        {
          x: [ring.x, ring.x],
          y: [ring.y, ring.y],
          scale: [0.3, 1.15],
          rotate: [0, 12],
          opacity: [0.75, 0]
        },
        {
          duration: 0.46,
          ease: [0.22, 1, 0.36, 1],
          onComplete: () => ring.element.remove()
        }
      );

      const squiggle = burst("spark-squiggle", event.clientX - 18, event.clientY - 10);
      animate(
        squiggle.element,
        {
          x: [squiggle.x, squiggle.x + 7],
          y: [squiggle.y, squiggle.y - 13],
          scale: [0.35, 0.95],
          rotate: [-12, 12],
          opacity: [0.85, 0]
        },
        {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
          onComplete: () => squiggle.element.remove()
        }
      );

      for (let i = 0; i < 5; i += 1) {
        const stroke = burst("spark-stroke", event.clientX - 10, event.clientY - 1);
        const angle = (Math.PI * 2 * i) / 5;
        const distance = 18 + Math.random() * 18;
        animate(
          stroke.element,
          {
            x: [stroke.x, stroke.x + Math.cos(angle) * distance],
            y: [stroke.y, stroke.y + Math.sin(angle) * distance],
            scaleX: [0.2, 1, 0],
            rotate: [(angle * 180) / Math.PI, (angle * 180) / Math.PI + 20],
            opacity: [1, 1, 0]
          },
          {
            duration: 0.38,
            ease: [0.22, 1, 0.36, 1],
            onComplete: () => stroke.element.remove()
          }
        );
      }

      for (let i = 0; i < 6; i += 1) {
        const spark = document.createElement("span");
        spark.className = "spark";
        document.body.appendChild(spark);
        const angle = (Math.PI * 2 * i) / 6;
        const distance = 20 + Math.random() * 26;
        animate(
          spark,
          {
            x: [event.clientX, event.clientX + Math.cos(angle) * distance],
            y: [event.clientY, event.clientY + Math.sin(angle) * distance],
            scale: [0.45, 0],
            rotate: [0, 180 + Math.random() * 120],
            opacity: [0.9, 0]
          },
          {
            duration: 0.48,
            ease: [0.22, 1, 0.36, 1],
            onComplete: () => spark.remove()
          }
        );
      }
    };
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return null;
}
