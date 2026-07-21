"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

interface CaseStudy {
  client: string;
  industry: string;
  tag: string; // e.g. "Meta Ads + Landing Pages"
  headline: string;
  description: string;
  metrics: { value: string; label: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    client: "Bright Leaf Foods",
    industry: "D2C / Food & Beverage",
    tag: "Meta Ads + Landing Pages",
    headline: "From flat sales to a 4-month waitlist.",
    description:
      "Rebuilt their funnel from ad creative to checkout — cutting cost-per-lead while scaling spend month over month. Illustrative example, showing the kind of result we build toward.",
    metrics: [
      { value: "312%", label: "Leads / month" },
      { value: "4.8x", label: "Average ROAS" },
      { value: "-38%", label: "Cost per lead" },
      { value: "89", label: "Days to scale" },
    ],
  },
  {
    client: "Nimbus Retail",
    industry: "E-commerce / Home Goods",
    tag: "Google Ads + SEO",
    headline: "Organic and paid, finally working together.",
    description:
      "Search and SEO were running as two disconnected efforts before Apex. Unified keyword strategy across both channels closed the gap between traffic and actual revenue.",
    metrics: [
      { value: "58%", label: "Organic traffic growth" },
      { value: "2.4x", label: "Conversion lift" },
      { value: "-24%", label: "Cost per acquisition" },
      { value: "6", label: "Months to compound" },
    ],
  },
  {
    client: "Fernway Realty",
    industry: "Real Estate",
    tag: "Social Management + Automation",
    headline: "Every lead followed up within minutes, not days.",
    description:
      "Automated lead scoring and instant follow-up sequences meant no inquiry sat cold waiting on an agent to notice it — even outside business hours.",
    metrics: [
      { value: "4x", label: "Engagement rate" },
      { value: "24/7", label: "Lead response coverage" },
      { value: "71%", label: "Faster first response" },
      { value: "3.1x", label: "Booked showings" },
    ],
  },
];

function CaseStudyBlock({ study, index }: { study: CaseStudy; index: number }) {
  const blockRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const metricRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isReversed = index % 2 === 1;

  useEffect(() => {
    if (!blockRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: blockRef.current,
          start: "top 82%",
          // toggleActions: "play none none reverse",
          once: true,
        },
      });

      // story side slides in from whichever edge it sits on
      tl.fromTo(
        textRef.current,
        { opacity: 0, x: isReversed ? 40 : -40 },
        { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" },
      )
        // metrics cascade in one by one, starting slightly before the
        // text finishes — this is the "add animation" part: instead of
        // the whole block popping in as one flat unit, each number gets
        // its own entrance
        .fromTo(
          metricRefs.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.12,
          },
          "-=0.4",
        );
    }, blockRef);

    return () => ctx.revert();
  }, [isReversed]);

  return (
    <div
      ref={blockRef}
      className={`flex flex-col gap-12 border-t border-white/[0.08] py-24 sm:gap-16 sm:py-12 lg:flex-row lg:gap-24 ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* story side */}
      <div ref={textRef} className="lg:w-[45%]">
        <span className="mb-4 inline-block font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#22D6EE]">
          {study.industry} · {study.tag}
        </span>
        <h2 className="mb-5 font-[var(--font-neue-machina)] text-[28px] font-bold leading-tight text-[#F5F7FA] sm:text-[36px]">
          {study.headline}
        </h2>
        <p className="max-w-[440px] text-[15px] leading-relaxed text-[#8B94A3]">
          {study.description}
        </p>
        <p className="mt-6 text-sm font-semibold text-[#F5F7FA]">
          {study.client}
        </p>
      </div>

      {/* metrics side — extra gap so each number reads as its own moment,
          not a cramped grid */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:w-[55%] lg:gap-x-12 lg:gap-y-14">
        {study.metrics.map((metric, i) => (
          <div
            key={metric.label}
            ref={(el) => {
              metricRefs.current[i] = el;
            }}
          >
            <div className="font-mono text-4xl font-extrabold text-[#F5F7FA] sm:text-5xl">
              {metric.value}
            </div>
            <p className="mt-2 text-[13px] text-[#8B94A3]">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ResultsShowcase() {
  return (
    <section id="results" className="px-6 sm:py-12 md:py-14 sm:px-8">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-4 w-full flex flex-col items-center justify-center">
          <span className="mb-3 inline-block font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#FF7A1A]">
            Results
          </span>

          <h1 className="text-[2em] font-medium text-center text-neutral-50 leading-8 md:leading-12 sm:text-[3.5em]">
            Real outcomes, not just impressions.
          </h1>
          <p className="mt-4 text-sm md:text-base text-center text-[#8B94A3]">
            A few of the results we build toward — scroll to see each one.
          </p>
        </div>

        <div>
          {caseStudies.map((study, i) => (
            <CaseStudyBlock key={study.client} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
