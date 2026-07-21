// "use client";

// import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

// interface DifferentiatorCard {
//   index: string;
//   title: string;
//   description: string;
//   image: string;
// }

// const cards: DifferentiatorCard[] = [
//   {
//     index: "01",
//     title: "Results Talk. Vanity Metrics Don't.",
//     description:
//       "Every report ties back to leads, revenue, or booked calls — never just reach or impressions.",
//     image: "/about/1.png",
//   },
//   {
//     index: "02",
//     title: "Decisions Backed By Data, Not Gut Feel.",
//     description:
//       "Every decision is backed by performance data and continuous testing.",
//     image: "/about/2.png",
//   },
//   {
//     index: "03",
//     title: "Transparent Reporting.",
//     description:
//       "Know exactly where every rupee goes with reports you can actually understand.",
//     image: "/about/3.png",
//   },
//   {
//     index: "04",
//     title: "Strategies Built Around Your Business.",
//     description:
//       "Every campaign is tailored to your goals, audience, and budget.",
//     image: "/about/4.png",
//   },
//   {
//     index: "05",
//     title: "Built To Scale.",
//     description:
//       "We start lean, optimize fast, and scale only when the numbers make sense.",
//     image: "/about/5.png",
//   },
// ];

// function DifferentiatorCard({ card }: { card: DifferentiatorCard }) {
//   return (
//     <div className="group relative mr-6 h-[25rem] w-[20rem] shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-[#161B22] transition-all duration-500 hover:-translate-y-2">
//       {/* Background */}
//       <img
//         src={card.image}
//         alt={card.title}
//         className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//       />

//       {/* Overlay */}
//       <div
//         className="absolute inset-0 transition-opacity duration-500"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(11,14,18,.1) 0%, rgba(11,14,18,.45) 50%, rgba(11,14,18,.96) 100%)",
//         }}
//       />

//       {/* Shine */}
//       <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

//       <div className="relative z-10 flex h-full flex-col justify-between p-7">
//         <span className="w-fit rounded-full border border-white/15 bg-black/30 px-3 py-1 font-mono text-xs font-semibold text-white/80 backdrop-blur-md">
//           {card.index}
//         </span>

//         <div className="transition-all duration-500 group-hover:-translate-y-2">
//           <h3 className="mb-3 font-neue text-2xl font-medium leading-tight text-white">
//             {card.title}
//           </h3>

//           <p className="text-sm leading-7 text-white/70">{card.description}</p>

//           <button className="mt-6 flex items-center gap-2 text-sm font-medium text-[#22D6EE] transition-all group-hover:gap-3">
//             Learn More
//             <span>→</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function AboutDifferentiators() {
//   return (
//     <section className="px-6 py-24 sm:px-8">
//       <div className="mx-auto mb-16 max-w-[1180px]">
//         <span className="mb-3 inline-block font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#22D6EE]">
//           WHY CHOOSE APEX
//         </span>

//         <h2 className="max-w-[700px] font-neue text-4xl font-medium leading-tight text-[#F5F7FA] md:text-5xl">
//           Built For Businesses That Want Real Growth, Not Empty Promises.
//         </h2>

//         <p className="mt-6 max-w-[620px] text-lg leading-8 text-[#8B94A3]">
//           Every strategy we build is driven by data, transparency, and
//           measurable business growth. No recycled templates. No vanity metrics.
//           Just marketing that helps your business move forward.
//         </p>
//       </div>

//       <InfiniteSlider gap={24} speedOnHover={8}>
//         <div className="flex w-max h-[30em] items-center cursor-pointer">
//           {[...cards, ...cards].map((card, index) => (
//             <DifferentiatorCard key={index} card={card} />
//           ))}
//         </div>
//       </InfiniteSlider>

//       <div className="mx-auto mt-16 max-w-3xl text-center">
//         <h3 className="text-3xl font-neue font-medium text-white">
//           Ready to grow with a team that puts results first?
//         </h3>

//         <p className="mt-4 text-[#8B94A3] leading-7">
//           Whether you're launching your first campaign or scaling an established
//           brand, we'll help you build a strategy focused on long-term growth.
//         </p>

//         <a
//           href="#contact"
//           className="mt-8 inline-flex items-center rounded-full bg-[#FF5A3C] px-7 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-[#ff6b4f]"
//         >
//           Book a Free Strategy Call →
//         </a>
//       </div>
//     </section>
//   );
// }

"use client";

import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";

interface DifferentiatorCard {
  index: string;
  title: string;
  description: string;
  image: string;
}

const cards: DifferentiatorCard[] = [
  {
    index: "01",
    title: "Results Talk. Vanity Metrics Don't.",
    description:
      "Every report ties back to leads, revenue, or booked calls — never just reach or impressions.",
    image: "/about/1.png",
  },
  {
    index: "02",
    title: "Decisions Backed By Data, Not Gut Feel.",
    description:
      "Every decision is backed by performance data and continuous testing.",
    image: "/about/2.png",
  },
  {
    index: "03",
    title: "Transparent Reporting.",
    description:
      "Know exactly where every rupee goes with reports you can actually understand.",
    image: "/about/3.png",
  },
  {
    index: "04",
    title: "Strategies Built Around Your Business.",
    description:
      "Every campaign is tailored to your goals, audience, and budget.",
    image: "/about/4.png",
  },
  {
    index: "05",
    title: "Built To Scale.",
    description:
      "We start lean, optimize fast, and scale only when the numbers make sense.",
    image: "/about/5.png",
  },
];

function DifferentiatorCard({ card }: { card: DifferentiatorCard }) {
  return (
    <div className="group relative mr-6 h-[25rem] w-[20rem] shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-[#161B22] transition-all duration-500 hover:-translate-y-2 hover:border-white/20">
      {/* Background */}
      <img
        src={card.image}
        alt={card.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,14,18,.1) 0%, rgba(11,14,18,.45) 50%, rgba(11,14,18,.96) 100%)",
        }}
      />

      {/* Shine */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      {/* Progressive Blur */}
      <ProgressiveBlur
        className="pointer-events-none absolute bottom-0 left-0 h-[45%] w-full z-[1]"
        blurIntensity={5}
      />

      <div className="relative z-10 flex h-full flex-col justify-end p-7">
        <div className="transition-all duration-500 group-hover:-translate-y-2">
          <h3 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-white">
            {card.title}
          </h3>

          <p className="text-sm leading-7 text-white/70">{card.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function AboutDifferentiators() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-8">
      <div className="relative mx-auto mb-16 max-w-[1180px] flex flex-col items-center justify-center">
        <span className="mb-3 inline-block text-center font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#FF7A1A]">
          WHY CHOOSE APEX
        </span>

        <h2 className="max-w-[700px] text-4xl text-center font-extrabold leading-12 tracking-tight text-[#F5F7FA] md:text-5xl">
          Built Around Performance.
        </h2>

        <p className="mt-6 max-w-[620px] text-center text-lg leading-8 text-[#8B94A3]">
          Every strategy we build is driven by data, transparency, and
          measurable business growth. No recycled templates. No vanity metrics.
          Just marketing that helps your business move forward.
        </p>
      </div>

      <InfiniteSlider gap={24} speedOnHover={8}>
        <div className="flex w-max h-[30em] items-center cursor-pointer">
          {[...cards, ...cards].map((card, index) => (
            <DifferentiatorCard key={index} card={card} />
          ))}
        </div>
      </InfiniteSlider>

      <div className="relative mx-auto mt-16 max-w-3xl text-center">
        <h3 className="text-3xl font-extrabold tracking-tight text-white">
          Ready to grow with a team that puts results first?
        </h3>

        <p className="mt-4 text-[#8B94A3] leading-7">
          Whether you're launching your first campaign or scaling an established
          brand, we'll help you build a strategy focused on long-term growth.
        </p>

        {/* <a
          href="#contact"
          className="mt-8 inline-flex items-center rounded-full bg-[#FF5A3C] px-7 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-[#ff6b4f]"
        >
          Book a Free Strategy Call →
        </a> */}
      </div>
    </section>
  );
}
