"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How soon will I see results?",
    answer:
      "Most clients see initial signal within 2–3 weeks; meaningful scale by month 2–3, depending on channel and starting budget.",
  },
  {
    question: "Do I need a long-term contract?",
    answer:
      "No lock-in required. We work month-to-month so the relationship continues because it's working, not because of a contract.",
  },
  {
    question: "What budget do I need to start?",
    answer:
      "We build plans across a range of budgets, including lean SME-friendly starting spends. Your free audit will include a realistic number for your goals.",
  },
  {
    question: "Which industries do you work with?",
    answer:
      "Local businesses, D2C brands, real estate, healthcare, and SaaS startups make up most of our current client base.",
  },
];

function FAQRow({
  item,
  isOpen,
  onClick,
}: {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-white/[0.08]">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-base font-semibold text-[#F5F7FA] sm:text-lg">
          {item.question}
        </span>
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.12] text-[#22D6EE] transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>

      {/* same CSS-only grid-rows expand technique used on the Services page */}
      <div
        className="grid transition-[grid-template-rows] duration-400 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="max-w-[640px] pb-6 text-[14.5px] leading-relaxed text-[#8B94A3]">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 py-16 sm:px-8">
      <div className="mx-auto max-w-[760px]">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block font-mono text-xl font-bold uppercase tracking-[0.14em] text-neutral-500">
            FAQ
          </span>
          <h2 className="font-[var(--font-neue-machina)] text-[28px] font-bold text-[#F5F7FA] sm:text-[38px]">
            Questions we hear before day one
          </h2>
        </div>

        <div className="border-t border-white/[0.08]">
          {faqs.map((item, i) => (
            <FAQRow
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
