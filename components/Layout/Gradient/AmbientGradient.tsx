"use client";

interface AmbientBackgroundProps {
  from?: string;
  to?: string;
}

/**
 * Renders once in app/layout.tsx, sits fixed behind the entire app.
 * Because it's `fixed` (not `absolute` inside a section), it never scrolls
 * and there's no per-section container edge for the blur to be clipped
 * against — so no hard seams between Hero -> ProofBento -> ServicesGrid etc.
 */
export function AmbientBackground({
  from = "#FF5A3C", // Ember Coral
  to = "#FFB020", // Amber
}: AmbientBackgroundProps) {
  const gradientFrom = "#FF5A3C"; // Ember Coral
  const gradientTo = "#FFB020"; // Amber
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0B0E12]"
    >
      {/* top-left glow */}

      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 min-h-screen"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            background: `linear-gradient(to top right, ${gradientFrom}, ${gradientTo})`,
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] min-h-screen"
        />
      </div>

      {/* secondary glow, offset lower/right, keeps it from reading as one flat symmetrical blob */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] min-h-screen"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            background: `linear-gradient(to top right, ${gradientFrom}, ${gradientTo})`,
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] min-h-screen"
        />
      </div>
    </div>
  );
}
