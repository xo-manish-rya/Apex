interface DifferentiatorCard {
  index: string;
  title: string;
  description: string;
  image: string; // local path under /public
}

const cards: DifferentiatorCard[] = [
  {
    index: "01",
    title: "Results Talk. Vanity Metrics Don't.",
    description:
      "Every report ties back to leads, revenue, or booked calls — never just reach or impressions.",
    image: "/images/differentiators/results.jpg",
  },
  {
    index: "02",
    title: "Decisions Backed By Data, Not Gut Feel.",
    description:
      "No guesswork, no gut-feel creative direction — every change is tested before it scales.",
    image: "/images/differentiators/data.jpg",
  },
  {
    index: "03",
    title: "Same Dashboard. Zero Smoke And Mirrors.",
    description:
      "Full transparency, always — you see the exact numbers we're using to make decisions.",
    image: "/images/differentiators/transparency.jpg",
  },
  {
    index: "04",
    title: "Built Around You. Never A Template.",
    description:
      "No repackaged decks — every plan is built around your business, your budget, your goals.",
    image: "/images/differentiators/strategy.jpg",
  },
  {
    index: "05",
    title: "Starts Lean. Scales As You Grow.",
    description:
      "Affordable entry points for SMEs and startups, with room to grow as results compound.",
    image: "/images/differentiators/growth.jpg",
  },
];

function DifferentiatorCard({ card }: { card: DifferentiatorCard }) {
  return (
    <div className="relative mr-5 h-[25rem] w-[20rem] shrink-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#161B22] sm:h-[25rem] sm:w-[20rem]">
      {/* background image */}
      <img
        src={card.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* dark gradient overlay — keeps text legible over ANY photo without
          needing to color-match or crop images perfectly beforehand */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,14,18,0.15) 0%, rgba(11,14,18,0.55) 55%, rgba(11,14,18,0.92) 100%)",
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between p-7">
        <span className="font-mono text-xs font-bold text-[#F5F7FA]/70">
          {card.index}
        </span>

        <div>
          <h3 className="mb-3 font-[var(--font-neue-machina)] text-xl font-bold leading-[1.2] text-[#F5F7FA] sm:text-2xl">
            {card.title}
          </h3>
          <p className="text-[13.5px] leading-relaxed text-[#F5F7FA]/70">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AboutDifferentiators() {
  return (
    <section className="px-6 py-24 sm:px-8">
      <div className="mx-auto mb-14 max-w-[1180px]">
        <span className="mb-3 inline-block font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#22D6EE]">
          For Businesses
        </span>
        <h2 className="max-w-[640px] font-[var(--font-neue-machina)] text-[28px] font-bold leading-[1.15] text-[#F5F7FA] sm:text-[42px]">
          Built For Brands That Want Proof, Not Promises.
        </h2>
        <p className="mt-4 max-w-[560px] text-base text-[#8B94A3]">
          Five things that shape how we work with every client — not marketing
          copy, just how decisions actually get made day to day.
        </p>
      </div>

      {/* marquee — pure CSS animation, no scroll-linking, works identically
          on mobile with zero special-casing needed */}
      <div className="group overflow-hidden">
        <div className="flex w-max animate-[marquee-scroll_30s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...cards, ...cards].map((card, i) => (
            <DifferentiatorCard key={i} card={card} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
