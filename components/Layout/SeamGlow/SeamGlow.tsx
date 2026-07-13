interface SeamGlowProps {
  from?: string;
  to?: string;
  size?: string; // tailwind width, e.g. "w-[40rem]"
  rotate?: number;
  opacity?: number;
  offsetX?: string; // e.g. "left-1/2", "left-[30%]", "right-[10%]"
}

const BLOB_CLIP =
  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)";

/**
 * Drop this between any two section components to get a glow exactly at
 * their boundary. Uses `h-0` so it takes zero layout space — it never
 * pushes the next section down — but still sits in real DOM flow between
 * whatever comes before and after it, so the glow always lands precisely
 * at that seam regardless of how tall either section is.
 *
 * Usage:
 *   <HeroSection />
 *   <SeamGlow />
 *   <ServicesGrid />
 *   <SeamGlow from="#22D6EE" to="#6C63FF" rotate={-20} />
 *   <ProcessSteps />
 */
export function SeamGlow({
  from = "#FF5A3C", // Ember Coral
  to = "#FFB020", // Amber
  size = "w-[34rem] sm:w-[52rem]",
  rotate = 12,
  opacity = 0.22,
  offsetX = "left-1",
}: SeamGlowProps) {
  const needsCenterTranslate = offsetX === "left-1/2";

  return (
    <div className="relative h-0">
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-0 -z-10 -translate-y-1/2 blur-3xl ${offsetX} ${
          needsCenterTranslate ? "-translate-x-1/2" : ""
        }`}
      >
        <div
          style={{
            clipPath: BLOB_CLIP,
            background: `linear-gradient(to top right, ${from}, ${to})`,
            opacity,
            transform: `rotate(${rotate}deg)`,
          }}
          className={`aspect-[1155/678] ${size}`}
        />
      </div>
    </div>
  );
}
