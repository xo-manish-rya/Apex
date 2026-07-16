"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

type Testimonial = {
  name: string;
  company: string;
  quote: string;
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Chen",
    company: "Lumen Skincare",
    quote:
      "Within four months our CAC dropped 38% and revenue doubled. They built our entire growth engine.",
    avatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },
  {
    name: "Marcus Reid",
    company: "Northwind Capital",
    quote:
      "Clear numbers tied to pipeline. No vanity metrics, no jargon. The most transparent agency relationship we've ever had.",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },
  {
    name: "Priya Anand",
    company: "Verde Athletics",
    quote:
      "They treated our budget like their own money. Every dollar tracked, every campaign purposeful. We finally trust our data.",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },
  {
    name: "David Okafor",
    company: "Helix Health",
    quote:
      "When algorithms shifted they pivoted in days, not quarters. Cost-per-lead stayed flat while competitors scrambled.",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },
  {
    name: "Elena Vasquez",
    company: "Atlas Travel Co.",
    quote:
      "Two years in and bookings keep climbing. They built systems, not just campaigns. The compounding effect is the real differentiator.",
    avatar:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },
  {
    name: "Jonas Berg",
    company: "Fjord Outdoor",
    quote:
      "No copied playbooks. Every strategy built around our seasonality, margins, and audience. Felt like an in-house team.",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },
];

const CARD_H = 130;
const CARD_GAP = 148;
const AUTO_INTERVAL = 3000;
const TRANSITION =
  "transform 800ms cubic-bezier(0.22, 1, 0.36, 1), opacity 700ms ease, filter 700ms ease";

function getCardStyle(offset: number): React.CSSProperties {
  const base: React.CSSProperties = {
    transition: TRANSITION,
    willChange: "transform, opacity, filter",
  };

  if (offset === 0) {
    return {
      ...base,
      transform: `translate(-50%, -50%) scale(1)`,
      opacity: 1,
      filter: "blur(0px)",
      zIndex: 30,
    };
  }
  if (offset === -1) {
    return {
      ...base,
      transform: `translate(-50%, calc(-50% - ${CARD_GAP}px)) scale(0.88)`,
      opacity: 0.45,
      filter: "blur(1.5px)",
      zIndex: 20,
    };
  }
  if (offset === 1) {
    return {
      ...base,
      transform: `translate(-50%, calc(-50% + ${CARD_GAP}px)) scale(0.88)`,
      opacity: 0.45,
      filter: "blur(1.5px)",
      zIndex: 20,
    };
  }
  const dir = offset > 0 ? 1 : -1;
  return {
    ...base,
    transform: `translate(-50%, calc(-50% + ${dir * CARD_GAP * 2.2}px)) scale(0.78)`,
    opacity: 0,
    filter: "blur(6px)",
    zIndex: 0,
  };
}

function TestimonialCard({ t, active }: { t: Testimonial; active: boolean }) {
  return (
    <div
      className="relative flex h-full w-full items-center gap-5 overflow-hidden rounded-2xl border bg-[#161B22] px-5 py-5"
      style={{
        borderColor: active
          ? "rgba(255,122,26,0.30)"
          : "rgba(255,255,255,0.07)",
        boxShadow: active
          ? "0 0 0 1px rgba(255,122,26,0.12), 0 24px 64px -16px rgba(255,122,26,0.28), 0 8px 32px -8px rgba(0,0,0,0.7)"
          : "0 4px 20px -8px rgba(0,0,0,0.6)",
        transition: "border-color 700ms ease, box-shadow 700ms ease",
      }}
    >
      {active && (
        <span className="absolute bottom-4 left-0 top-4 w-[3px] rounded-r-full bg-[#FF7A1A]" />
      )}

      <img
        src={t.avatar}
        alt={t.name}
        loading="lazy"
        className="h-[72px] w-[72px] shrink-0 rounded-full object-cover"
        style={{
          boxShadow: active
            ? "0 0 0 2px rgba(255,122,26,0.5)"
            : "0 0 0 2px rgba(255,255,255,0.08)",
          transition: "box-shadow 700ms ease",
        }}
      />

      <div className="min-w-0 flex-1 pr-8">
        <p className="text-[15px] font-semibold leading-tight text-[#F5F7FA]">
          {t.name}
        </p>
        <p className="mb-2 text-[12px] text-[#8B94A3]">{t.company}</p>
        <p className="line-clamp-2 text-[13px] leading-relaxed text-[#8B94A3]">
          {t.quote}
        </p>
      </div>

      <span
        className="pointer-events-none absolute right-4 top-3 select-none font-serif text-[52px] font-bold leading-none"
        style={{
          color: active ? "rgba(255,122,26,0.22)" : "rgba(255,255,255,0.07)",
          transition: "color 700ms ease",
        }}
        aria-hidden
      >
        &ldquo;
      </span>
    </div>
  );
}

export default function Testimonial() {
  const [center, setCenter] = useState(1);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const n = TESTIMONIALS.length;

  // Respect prefers-reduced-motion: stop the auto-advance and freeze ambient glow pulsing.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Pause autoplay when the tab isn't visible, so it doesn't burn cycles or desync while backgrounded.
  useEffect(() => {
    const handleVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    timer.current = setInterval(() => {
      setCenter((c) => (c + 1) % n);
    }, AUTO_INTERVAL);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, reducedMotion, n]);

  const offsetOf = (i: number) => {
    let d = i - center;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  const SLIDER_H = CARD_H + CARD_GAP * 2 + 40;
  const activeTestimonial = TESTIMONIALS[center];

  return (
    <section className="relative min-h-screen w-full overflow-hidden text-[#F5F7FA]">
      {/* Ambient glows */}

      {/* <div className="grain pointer-events-none absolute inset-0" /> */}

      {/* Screen-reader announcement of the active testimonial, since the visual swap has no text alternative */}
      <span className="sr-only" aria-live="polite">
        {activeTestimonial.name} from {activeTestimonial.company}:{" "}
        {activeTestimonial.quote}
      </span>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:gap-10 lg:py-28">
        {/* LEFT: static content */}
        <div className="flex flex-col lg:pr-10">
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FF7A1A]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A1A]" />
            Client Experience
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
            Partnerships Built On Transparency.
          </h1>

          <p className="mt-6 max-w-[440px] text-[15px] leading-relaxed text-[#8B94A3] sm:text-base">
            We believe the best marketing partnerships are built on clear
            communication, measurable growth, and complete transparency.
            Here&apos;s what every client can expect when working with Apex
            Growth Media.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {TESTIMONIALS.slice(0, 4).map((t) => (
                  <img
                    key={t.name}
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="h-8 w-8 rounded-full object-cover ring-2 ring-[#0B0E12]"
                  />
                ))}
              </div>
              <div className="text-xs leading-snug text-[#8B94A3]">
                <p className="font-semibold text-[#F5F7FA]">120+ clients</p>
                <p>trust Apex Growth Media</p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3.5">
            {[
              "Clear Communication",
              "Reports That Matter",
              "Strategies That Evolve",
              "Long-Term Growth Focus",
              "Transparent Partnership",
              "Built Around You",
            ].map((f) => (
              <div
                key={f}
                className="flex items-center gap-2 text-[13px] text-[#8B94A3]"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF7A1A]/70" />
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: vertical slider */}
        <div
          className="relative mx-auto w-full max-w-[420px]"
          style={{ height: SLIDER_H }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(document.hidden)}
        >
          {TESTIMONIALS.map((t, i) => {
            const offset = offsetOf(i);
            const style = getCardStyle(offset);
            return (
              <div
                key={t.name}
                className="absolute left-1/2 top-1/2 w-[calc(100%-8px)]"
                style={{ height: CARD_H, ...style }}
                aria-hidden={offset !== 0}
              >
                <TestimonialCard t={t} active={offset === 0} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Signature quote + CTA band */}
      <div className="relative mx-auto max-w-7xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.025] px-8 py-12 sm:px-14 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#FF7A1A]/10 blur-[80px]" />

          <span
            className="pointer-events-none select-none font-serif text-[80px] font-bold leading-none text-[#FF7A1A]/20"
            aria-hidden
          >
            &ldquo;
          </span>

          <p className="-mt-4 max-w-3xl text-2xl leading-snug text-[#F5F7FA] sm:text-[28px] lg:text-[32px]">
            Great marketing isn&apos;t about spending more. It&apos;s about
            making smarter decisions backed by data.
          </p>
          <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#8B94A3]">
            — Apex Growth Media
          </p>

          <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-white/[0.07] pt-8 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-[500] tracking-tight text-[#F5F7FA] sm:text-2xl">
                Ready To Build Something That Lasts?
              </h3>
              <p className="mt-2 max-w-md text-sm text-[#8B94A3]">
                Whether launching your first campaign or scaling an established
                business, we&apos;ll help you grow with confidence.
              </p>
            </div>
            <a
              href="#book"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#FF7A1A] px-7 py-4 text-sm font-semibold text-[#0B0E12] transition-all duration-300 hover:bg-[#FF8A33] hover:shadow-[0_0_44px_-8px_rgba(255,122,26,0.7)] active:scale-[0.98]"
            >
              Book Free Strategy Call
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
