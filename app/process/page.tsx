// "use client";

// import {
//   Headphones,
//   Search,
//   Map,
//   Rocket,
//   SlidersHorizontal,
//   TrendingUp,
//   LucideIcon,
// } from "lucide-react";

// interface Step {
//   number: string;
//   title: string;
//   description: string;
//   icon: LucideIcon;
//   area: string;
//   gradient: string;
//   accent: string;
// }

// // Brand palette only: blue #22D5ED and orange #FF5A3C, blended into soft gradients
// // over the dark card base — never used as flat saturated fills.
// const STEPS: Step[] = [
//   {
//     number: "01",
//     title: "Discover",
//     description:
//       "A short call to understand your business, goals, and current challenges.",
//     icon: Headphones,
//     area: "discover",
//     gradient: "bg-gradient-to-br from-[#22D5ED]/15 via-[#12161C] to-[#0B0E12]",
//     accent: "text-[#22D5ED]",
//   },
//   {
//     number: "02",
//     title: "Audit",
//     description:
//       "We review your website, ads, competitors, and opportunities to find what matters.",
//     icon: Search,
//     area: "audit",
//     gradient: "bg-gradient-to-br from-[#FF5A3C]/15 via-[#12161C] to-[#0B0E12]",
//     accent: "text-[#FF5A3C]",
//   },
//   {
//     number: "03",
//     title: "Strategy",
//     description:
//       "A tailored growth roadmap built around your budget and goals.",
//     icon: Map,
//     area: "strategy",
//     gradient: "bg-gradient-to-br from-[#22D5ED]/12 via-[#12161C] to-[#0B0E12]",
//     accent: "text-[#22D5ED]",
//   },
//   {
//     number: "04",
//     title: "Launch",
//     description: "Campaigns, tracking, and landing pages go live.",
//     icon: Rocket,
//     area: "launch",
//     gradient: "bg-gradient-to-br from-[#FF5A3C]/12 via-[#12161C] to-[#0B0E12]",
//     accent: "text-[#FF5A3C]",
//   },
//   {
//     number: "05",
//     title: "Optimize",
//     description:
//       "We test, measure, and refine every week to increase performance.",
//     icon: SlidersHorizontal,
//     area: "optimize",
//     gradient: "bg-gradient-to-br from-[#22D5ED]/15 via-[#12161C] to-[#0B0E12]",
//     accent: "text-[#22D5ED]",
//   },
//   {
//     number: "06",
//     title: "Scale",
//     description:
//       "Once the data proves a winner, we double down and scale with confidence.",
//     icon: TrendingUp,
//     area: "scale",
//     // The one cell where both brand colors meet — closing gradient ties the palette together.
//     gradient:
//       "bg-gradient-to-r from-[#FF5A3C]/20 via-[#12161C] to-[#22D5ED]/20",
//     accent: "text-[#F5F7FA]",
//   },
// ];

// function BentoCard({ step }: { step: Step }) {
//   const Icon = step.icon;
//   return (
//     <div
//       style={{ gridArea: step.area }}
//       className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.06] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12] sm:p-7 ${step.gradient}`}
//     >
//       <Icon
//         strokeWidth={1.5}
//         className={`pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 rotate-[-8deg] text-white/[0.06] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 sm:h-40 sm:w-40`}
//       />

//       <span className={`relative font-mono text-xs font-bold ${step.accent}`}>
//         {step.number}
//       </span>

//       <div className="relative">
//         <h3 className="text-2xl font-extrabold tracking-tight text-[#F5F7FA] sm:text-3xl">
//           {step.title}
//         </h3>
//         <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-[#8B94A3]">
//           {step.description}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default function ProcessBento() {
//   return (
//     <section className="px-6 py-24 sm:px-8">
//       <div className="mx-auto mb-14 max-w-[1180px]">
//         <span className="mb-3 inline-block font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#22D5ED]">
//           Our Process
//         </span>
//         <h2 className="max-w-[600px] text-4xl font-extrabold tracking-tight text-[#F5F7FA] md:text-5xl">
//           How We Work
//         </h2>
//         <p className="mt-6 max-w-[520px] text-lg leading-8 text-[#8B94A3]">
//           A simple, transparent process focused on measurable growth.
//         </p>
//       </div>

//       <div className="mx-auto max-w-[1180px] process-bento-grid">
//         {STEPS.map((step) => (
//           <BentoCard key={step.number} step={step} />
//         ))}
//       </div>

//       <style>{`
//         .process-bento-grid {
//           display: grid;
//           gap: 1rem;
//           grid-template-columns: 1fr;
//           grid-auto-rows: auto;
//           grid-template-areas:
//             "discover"
//             "audit"
//             "strategy"
//             "launch"
//             "scale"
//             "optimize";
//         }

//         .process-bento-grid > div {
//           min-height: 220px;
//         }

//         @media (min-width: 640px) and (max-width: 1023px) {
//           .process-bento-grid {
//             grid-template-columns: repeat(2, 1fr);
//             grid-auto-rows: 220px;
//             grid-template-areas:
//               "discover audit"
//               "strategy launch"
//               "scale optimize";
//           }
//         }

//         @media (min-width: 1024px) {
//           .process-bento-grid {
//             grid-template-columns: repeat(3, 1fr);
//             grid-auto-rows: 220px;
//             grid-template-areas:
//               "discover audit audit"
//               "discover strategy launch"
//               "scale scale optimize";
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import {
  Search,
  MessageSquare,
  Rocket,
  TrendingUp,
  LucideIcon,
} from "lucide-react";

interface Step {
  number: string;
  title: string;
  duration: string;
  description: string;
  icon: LucideIcon;
  accent: string; // hex, used for the icon badge + duration tag for this step
}

const STEPS: Step[] = [
  {
    number: "1",
    title: "Free Audit",
    duration: "1-2 Days",
    description:
      "We review your current presence — ads, site, SEO, socials — and find the fastest wins before you spend a rupee more.",
    icon: Search,
    accent: "#22D6EE",
  },
  {
    number: "2",
    title: "Strategy Call",
    duration: "2-3 Days",
    description:
      "We map a plan around your actual budget and goals — no templated package, no upsell pressure.",
    icon: MessageSquare,
    accent: "#FFB020",
  },
  {
    number: "3",
    title: "Launch",
    duration: "3-5 Days",
    description:
      "Campaigns go live within days, not months — real activity in your dashboard within the first week.",
    icon: Rocket,
    accent: "#FF5A3C",
  },
  {
    number: "4",
    title: "Optimize & Scale",
    duration: "Ongoing",
    description:
      "Weekly reporting, constant testing, and scaling whatever's actually working — dropping whatever isn't.",
    icon: TrendingUp,
    accent: "#6C63FF",
  },
];

// Fixed dimensions so the dashed connectors land exactly where cards are —
// no JS measurement needed, everything is deterministic pixel math.
const CARD_HEIGHT = 190;
const VERTICAL_GAP = 70;
const LANE_LEFT = 0;
const LANE_RIGHT = 260; // the two horizontal positions cards alternate between
const ANCHOR_X = 26; // where the connector's vertical stub aligns within a card

// true zigzag: even index -> left lane, odd index -> right lane
function laneFor(index: number) {
  return index % 2 === 0 ? LANE_LEFT : LANE_RIGHT;
}

function Connector({
  fromLane,
  toLane,
  accent,
}: {
  fromLane: number;
  toLane: number;
  accent: string;
}) {
  const startX = fromLane + ANCHOR_X;
  const endX = toLane + ANCHOR_X;
  const left = Math.min(startX, endX);
  const width = Math.abs(endX - startX) + 4;
  // local coordinates within this connector's own small svg box
  const localStartX = startX < endX ? 0 : width - 4;
  const localEndX = startX < endX ? width - 4 : 0;

  return (
    <svg
      width={width}
      height={VERTICAL_GAP}
      viewBox={`0 0 ${width} ${VERTICAL_GAP}`}
      fill="none"
      className="absolute"
      style={{ top: CARD_HEIGHT, left }}
      aria-hidden="true"
    >
      <path
        d={`M ${localStartX} 0 L ${localStartX} ${VERTICAL_GAP / 2} L ${localEndX} ${VERTICAL_GAP / 2} L ${localEndX} ${VERTICAL_GAP}`}
        stroke={accent}
        strokeWidth="1.5"
        strokeDasharray="4 5"
        strokeOpacity="0.55"
      />
    </svg>
  );
}

function StepCard({ step }: { step: Step }) {
  const Icon = step.icon;

  return (
    <div
      className="relative flex overflow-visible"
      style={{ height: CARD_HEIGHT }}
    >
      {/* rotated duration tag, attached to the card's left edge */}
      <div
        className="flex w-8 shrink-0 items-center justify-center rounded-l-2xl"
        style={{ backgroundColor: `${step.accent}1A` }}
      >
        <span
          className="whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-wider"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            color: step.accent,
          }}
        >
          {step.duration}
        </span>
      </div>

      {/* the card body */}
      <div className="flex-1 rounded-r-2xl border border-l-0 border-white/[0.08] bg-[#161B22] p-6 sm:p-7">
        <div className="mb-4 flex items-center gap-3">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
            style={{ backgroundColor: `${step.accent}22`, color: step.accent }}
          >
            <Icon strokeWidth={1.75} className="h-4 w-4" />
          </span>
          <h3 className="font-[var(--font-neue-machina)] text-lg font-bold text-[#F5F7FA] sm:text-xl">
            {step.number}. {step.title}
          </h3>
        </div>
        <p className="max-w-[360px] text-[13.5px] leading-relaxed text-[#8B94A3]">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function ProcessCascade() {
  return (
    <section id="process" className="px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-6">
          <div className="w-full">
            <span className="mb-4 inline-block rounded-full bg-[#22D6EE]/15 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.12em]">
              Our Process
            </span>
            <h2 className="mt-6 text-4xl font-[500] flex items-center justify-center flex-col text-center leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
              <span>From First Call To Compounding</span>
              <span> Growth.</span>
            </h2>
            <p className="mt-4 max-w-[480px] text-base text-[#8B94A3]">
              No templated onboarding, no black-box reporting — here's exactly
              what happens after you reach out.
            </p>
          </div>

          {/* small time-range indicator, echoing the reference's date pill */}
          {/* <div className="flex shrink-0 overflow-hidden rounded-lg border border-white/[0.08]">
            <div className="bg-[#161B22] px-4 py-2.5 text-xs font-semibold text-[#8B94A3]">
              Reach Out
            </div>
            <div className="bg-[#FF5A3C] px-4 py-2.5 text-xs font-semibold text-[#0B0E12]">
              Live In Days
            </div>
          </div> */}
        </div>

        {/* desktop: true zigzag — alternates between two lanes, not a
            one-directional staircase */}
        <div className="mt-16 hidden lg:block">
          {STEPS.map((step, i) => {
            const lane = laneFor(i);
            const nextLane = i < STEPS.length - 1 ? laneFor(i + 1) : null;
            return (
              <div
                key={step.number}
                className="relative"
                style={{ marginLeft: lane }}
              >
                <StepCard step={step} />
                {nextLane !== null && (
                  <Connector
                    fromLane={lane}
                    toLane={nextLane}
                    accent={step.accent}
                  />
                )}
                {nextLane !== null && <div style={{ height: VERTICAL_GAP }} />}
              </div>
            );
          })}
        </div>

        {/* mobile/tablet: plain stacked list, no stagger, no connectors —
            precise cascading math only makes sense at full width */}
        <div className="mt-12 flex flex-col gap-5 lg:hidden">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="rounded-2xl border border-white/[0.08] bg-[#161B22] p-6"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: `${step.accent}22`,
                        color: step.accent,
                      }}
                    >
                      <Icon strokeWidth={1.75} className="h-4 w-4" />
                    </span>
                    <h3 className="font-[var(--font-neue-machina)] text-lg font-bold text-[#F5F7FA]">
                      {step.number}. {step.title}
                    </h3>
                  </div>
                  <span
                    className="rounded-full px-2.5 py-1 font-mono text-[10px] font-bold uppercase"
                    style={{
                      backgroundColor: `${step.accent}1A`,
                      color: step.accent,
                    }}
                  >
                    {step.duration}
                  </span>
                </div>
                <p className="text-[13.5px] leading-relaxed text-[#8B94A3]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
