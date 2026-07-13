"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface ServiceItem {
  index: string;
  title: string;
  description: string;
  stat: { value: string; label: string };
  included: string[];
  isAI?: boolean;
}

const services: ServiceItem[] = [
  {
    index: "01",
    title: "Meta Ads",
    description:
      "We don't just run ads. We build funnels that turn scrollers into buyers — audience research, creative testing, and weekly optimization, all reported in plain numbers.",
    stat: { value: "3.9x", label: "Avg ROAS across active accounts" },
    included: [
      "Audience research & testing",
      "Creative strategy & production",
      "A/B testing at scale",
      "Weekly optimization",
      "Transparent live dashboard",
    ],
  },
  {
    index: "02",
    title: "Google Ads",
    description:
      "Capture demand the moment someone's ready to buy — not just brand awareness, but bottom-of-funnel intent across every Google surface that matters.",
    stat: { value: "2.4x", label: "Avg conversion lift in 90 days" },
    included: [
      "Keyword & intent mapping",
      "Search + Display + YouTube setup",
      "Negative keyword hygiene",
      "Landing page alignment",
      "Weekly bid & budget tuning",
    ],
  },
  {
    index: "03",
    title: "SEO & Local SEO",
    description:
      "Rank where your customers are already searching, and stay there — technical fixes, content strategy, and local presence built to compound over time.",
    stat: { value: "58%", label: "Avg organic traffic growth, 6 months" },
    included: [
      "Technical SEO audit",
      "Local listings & Google Business Profile",
      "Content & on-page strategy",
      "Backlink outreach",
      "Monthly ranking reports",
    ],
  },
  {
    index: "04",
    title: "Social Media Management",
    description:
      "Content and community that turns followers into a warm pipeline — consistent posting, real engagement, and a brand voice people actually remember.",
    stat: { value: "4x", label: "Avg engagement rate increase" },
    included: [
      "Content calendar & production",
      "Community management",
      "Platform-specific strategy",
      "Influencer/UGC coordination",
      "Monthly performance recap",
    ],
  },
  {
    index: "05",
    title: "Website & Landing Pages",
    description:
      "Pages built to convert clicks into booked calls, not just to look nice — fast, mobile-first, and structured around a single clear action.",
    stat: { value: "2.1x", label: "Avg landing page conversion rate" },
    included: [
      "Conversion-focused UX",
      "Mobile-first build",
      "Speed & Core Web Vitals",
      "A/B tested layouts",
      "CMS handoff & training",
    ],
  },
  {
    index: "06",
    title: "Marketing Automation & AI",
    description:
      "AI-powered lead scoring, chatbots, and follow-up sequences that work while you sleep — so no lead goes cold waiting on a human to reply.",
    stat: { value: "24/7", label: "Automated lead response coverage" },
    included: [
      "AI lead scoring",
      "Automated follow-up sequences",
      "Chatbot deployment",
      "CRM integration",
      "Ongoing workflow tuning",
    ],
    isAI: true,
  },
];

export function ServicesSplit() {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const current = services[active];
  const accent = current.isAI ? "#6C63FF" : "#22D6EE";

  function selectService(nextIndex: number) {
    if (nextIndex === active || !panelRef.current) return;

    // fade out, THEN swap content, THEN fade back in —
    // avoids needing two overlapping DOM copies for a crossfade
    gsap.killTweensOf(panelRef.current);
    gsap.to(panelRef.current, {
      opacity: 0,
      y: 8,
      duration: 0.18,
      ease: "power2.in",
      onComplete: () => setActive(nextIndex),
    });
  }

  useEffect(() => {
    if (!panelRef.current) return;

    // skip the fade-in on first mount if you'd rather it just appear —
    // left in so it also has a nice entrance the first time the page loads
    isFirstRender.current = false;

    gsap.fromTo(
      panelRef.current,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
    );
  }, [active]);

  return (
    <section id="services" className="px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-16 max-w-[640px]">
          <span className="mb-3 inline-block font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#22D6EE]">
            What We Do
          </span>
          <h1 className="font-[var(--font-neue-machina)] text-[32px] font-bold text-[#F5F7FA] sm:text-[48px]">
            Six ways we grow your revenue.
          </h1>
          <p className="mt-4 text-base text-[#8B94A3]">
            Click any service on the left to see exactly what's included.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* left — persistent list, acts like tabs */}
          <div className="border-t border-white/[0.08]">
            {services.map((service, i) => {
              const isActive = i === active;
              const itemAccent = service.isAI ? "#6C63FF" : "#22D6EE";
              return (
                <button
                  key={service.index}
                  onClick={() => selectService(i)}
                  className="flex w-full items-baseline gap-5 border-b border-white/[0.08] py-6 text-left transition-colors sm:gap-8"
                >
                  <span
                    className="font-mono text-sm transition-colors sm:text-base"
                    style={{ color: isActive ? itemAccent : "#8B94A3" }}
                  >
                    {service.index}
                  </span>
                  <span
                    className="font-[var(--font-neue-machina)] text-xl font-bold transition-colors sm:text-2xl"
                    style={{ color: isActive ? "#F5F7FA" : "#8B94A3" }}
                  >
                    {service.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* right — detail panel, content swaps via GSAP fade */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div
              ref={panelRef}
              className="rounded-2xl border border-white/[0.08] bg-[#161B22] p-8 sm:p-10"
            >
              <p className="max-w-[460px] text-[15px] leading-relaxed text-[#8B94A3]">
                {current.description}
              </p>

              <div className="my-7 h-px w-full bg-white/[0.08]" />

              <span
                className="font-mono text-3xl font-bold"
                style={{ color: accent }}
              >
                {current.stat.value}
              </span>
              <p className="mb-6 mt-1 text-[13px] text-[#8B94A3]">
                {current.stat.label}
              </p>

              <ul className="mb-8 space-y-2.5">
                {current.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[14px] text-[#F5F7FA]"
                  >
                    <span style={{ color: accent }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF5A3C] transition-colors hover:text-[#ff7256]"
              >
                Get a Custom Plan for {current.title} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
