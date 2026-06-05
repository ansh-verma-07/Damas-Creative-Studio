export type TimelineStep = {
  targets: string | Element | Element[];
  keyframes: Keyframe[];
  options?: KeyframeAnimationOptions;
  at?: number;
};

export function animeTimeline(steps: TimelineStep[]) {
  const animations: Animation[] = [];
  const start = performance.now();

  steps.forEach((step) => {
    const targets =
      typeof step.targets === "string"
        ? Array.from(document.querySelectorAll(step.targets))
        : Array.isArray(step.targets)
          ? step.targets
          : [step.targets];

    targets.forEach((target, index) => {
      const delay = (step.at ?? 0) + Number(step.options?.delay ?? 0) + index * 35;
      const animation = target.animate(step.keyframes, {
        duration: 900,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "both",
        ...step.options,
        delay
      });
      animations.push(animation);
    });
  });

  return {
    animations,
    finished: Promise.allSettled(animations.map((animation) => animation.finished)),
    elapsed: () => performance.now() - start
  };
}
