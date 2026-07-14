"use client";

import {
  Headphones,
  Search,
  Map,
  Rocket,
  SlidersHorizontal,
  TrendingUp,
  LucideIcon,
} from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  area: string;
  gradient: string;
  accent: string;
}

// Brand palette only: blue #22D5ED and orange #FF5A3C, blended into soft gradients
// over the dark card base — never used as flat saturated fills.
const STEPS: Step[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "A short call to understand your business, goals, and current challenges.",
    icon: Headphones,
    area: "discover",
    gradient: "bg-gradient-to-br from-[#22D5ED]/15 via-[#12161C] to-[#0B0E12]",
    accent: "text-[#22D5ED]",
  },
  {
    number: "02",
    title: "Audit",
    description:
      "We review your website, ads, competitors, and opportunities to find what matters.",
    icon: Search,
    area: "audit",
    gradient: "bg-gradient-to-br from-[#FF5A3C]/15 via-[#12161C] to-[#0B0E12]",
    accent: "text-[#FF5A3C]",
  },
  {
    number: "03",
    title: "Strategy",
    description:
      "A tailored growth roadmap built around your budget and goals.",
    icon: Map,
    area: "strategy",
    gradient: "bg-gradient-to-br from-[#22D5ED]/12 via-[#12161C] to-[#0B0E12]",
    accent: "text-[#22D5ED]",
  },
  {
    number: "04",
    title: "Launch",
    description: "Campaigns, tracking, and landing pages go live.",
    icon: Rocket,
    area: "launch",
    gradient: "bg-gradient-to-br from-[#FF5A3C]/12 via-[#12161C] to-[#0B0E12]",
    accent: "text-[#FF5A3C]",
  },
  {
    number: "05",
    title: "Optimize",
    description:
      "We test, measure, and refine every week to increase performance.",
    icon: SlidersHorizontal,
    area: "optimize",
    gradient: "bg-gradient-to-br from-[#22D5ED]/15 via-[#12161C] to-[#0B0E12]",
    accent: "text-[#22D5ED]",
  },
  {
    number: "06",
    title: "Scale",
    description:
      "Once the data proves a winner, we double down and scale with confidence.",
    icon: TrendingUp,
    area: "scale",
    // The one cell where both brand colors meet — closing gradient ties the palette together.
    gradient:
      "bg-gradient-to-r from-[#FF5A3C]/20 via-[#12161C] to-[#22D5ED]/20",
    accent: "text-[#F5F7FA]",
  },
];

function BentoCard({ step }: { step: Step }) {
  const Icon = step.icon;
  return (
    <div
      style={{ gridArea: step.area }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.06] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12] sm:p-7 ${step.gradient}`}
    >
      <Icon
        strokeWidth={1.5}
        className={`pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 rotate-[-8deg] text-white/[0.06] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 sm:h-40 sm:w-40`}
      />

      <span className={`relative font-mono text-xs font-bold ${step.accent}`}>
        {step.number}
      </span>

      <div className="relative">
        <h3 className="text-2xl font-extrabold tracking-tight text-[#F5F7FA] sm:text-3xl">
          {step.title}
        </h3>
        <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-[#8B94A3]">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function ProcessBento() {
  return (
    <section className="px-6 py-24 sm:px-8">
      <div className="mx-auto mb-14 max-w-[1180px]">
        <span className="mb-3 inline-block font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#22D5ED]">
          Our Process
        </span>
        <h2 className="max-w-[600px] text-4xl font-extrabold tracking-tight text-[#F5F7FA] md:text-5xl">
          How We Work
        </h2>
        <p className="mt-6 max-w-[520px] text-lg leading-8 text-[#8B94A3]">
          A simple, transparent process focused on measurable growth.
        </p>
      </div>

      <div className="mx-auto max-w-[1180px] process-bento-grid">
        {STEPS.map((step) => (
          <BentoCard key={step.number} step={step} />
        ))}
      </div>

      <style>{`
        .process-bento-grid {
          display: grid;
          gap: 1rem;
          grid-template-columns: 1fr;
          grid-auto-rows: auto;
          grid-template-areas:
            "discover"
            "audit"
            "strategy"
            "launch"
            "scale"
            "optimize";
        }

        .process-bento-grid > div {
          min-height: 220px;
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .process-bento-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 220px;
            grid-template-areas:
              "discover audit"
              "strategy launch"
              "scale optimize";
          }
        }

        @media (min-width: 1024px) {
          .process-bento-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 220px;
            grid-template-areas:
              "discover audit audit"
              "discover strategy launch"
              "scale scale optimize";
          }
        }
      `}</style>
    </section>
  );
}
