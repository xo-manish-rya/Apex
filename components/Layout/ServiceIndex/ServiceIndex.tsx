"use client";

import { useState } from "react";

interface ServiceItem {
  index: string;
  title: string;
  tag: string; // short right-aligned label, e.g. "Facebook & Instagram"
  description: string;
  stat: { value: string; label: string };
  included: string[];
  isAI?: boolean;
}

const services: ServiceItem[] = [
  {
    index: "01",
    title: "Meta Ads",
    tag: "Facebook & Instagram",
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
    tag: "Search, Display & YouTube",
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
    tag: "Organic Growth",
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
    tag: "Content & Community",
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
    tag: "Design & Build",
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
    tag: "Automated Growth",
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
    // isAI: true,
  },
];

function ServiceRow({ service }: { service: ServiceItem }) {
  const [open, setOpen] = useState(false);
  const accent = service.isAI ? "#6C63FF" : "#22D6EE";

  return (
    <div className="border-b border-white/[0.08]">
      <button
        onClick={() => setOpen((o) => !o)}
        className="group flex w-full items-center justify-between gap-6 py-8 text-left transition-colors hover:bg-white/[0.02] sm:py-10"
      >
        <div className="flex min-w-0 items-baseline gap-5 sm:gap-8">
          <span className="text-sm text-neutral-400 sm:text-base">
            {service.index}
          </span>
          <span className="text-2xl font-semiBold text-neutral-50 transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl">
            {service.title}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-4 sm:gap-8">
          <span className="hidden text-md font-light text-[#8B94A3] sm:block">
            {service.tag}
          </span>
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300"
            style={{
              borderColor: open ? accent : "rgba(245,247,250,0.15)",
              color: open ? accent : "#8B94A3",
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
            }}
          >
            +
          </span>
        </div>
      </button>

      {/* CSS-only smooth expand: animating grid-template-rows between 0fr
          and 1fr avoids needing to measure content height in JS */}
      <div
        className="grid transition-[grid-template-rows] duration-500 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 gap-8 pb-10 sm:grid-cols-[1.3fr_1fr] sm:gap-12 sm:pl-[3.25rem] sm:pb-14">
            <div>
              <p className="max-w-[520px] text-[1rem] font-medium leading-relaxed text-[#8B94A3]">
                {service.description}
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-md font-semibold text-[#FF5A3C] transition-colors hover:text-[#ff7256]"
              >
                Get a Custom Plan for {service.title} →
              </a>
            </div>

            <div>
              <div className="mb-6">
                <span
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: accent }}
                >
                  {service.stat.value}
                </span>
                <p className="mt-1 text-[0.85rem] text-[#8B94A3]">
                  {service.stat.label}
                </p>
              </div>

              <ul className="space-y-2.5">
                {service.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[1rem] text-[#F5F7FA]"
                  >
                    <span style={{ color: accent }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ServicesIndex = () => {
  return (
    <section id="services" className="px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-16 w-full flex flex-col items-center mb-20">
          <span className="mb-3 inline-block font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#FF7A1A]">
            Service
          </span>
          <h1 className="text-[2em] font-medium text-center text-neutral-50 leading-8 md:leading-12 sm:text-[3.5em]">
            Six ways we grow your revenue.
          </h1>
          <p className="mt-8 text-center text-sm md:text-base text-neutral-400">
            Every service ties back to one thing: measurable pipeline, not
            vanity metrics. Click any service to see what's actually included.
          </p>
        </div>

        <div className="border-t border-white/[0.08]">
          {services.map((service) => (
            <ServiceRow key={service.index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesIndex;
