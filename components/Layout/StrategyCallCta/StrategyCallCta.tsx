import { ArrowUpRight } from "lucide-react";

const CHECKLIST = [
  "Audit of your ad accounts & SEO",
  "Competitor gap analysis included",
  "Custom growth roadmap — yours to keep",
];

export default function StrategyCallCta() {
  return (
    <section className="relative overflow-hidden px-5 py-24 md:px-10 lg:px-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full bg-orange-500/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111111] p-10 md:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-[80px]" />

          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-sm text-orange-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />
                Free Strategy Session
              </div>
              <h2 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                Your next success story starts here.
              </h2>
              <p className="text-base leading-relaxed text-white/50">
                Book a free 30-minute strategy call. We'll audit your current
                growth channels, identify the biggest leaks, and show you what
                we'd do differently — no fluff.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {CHECKLIST.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-orange-500/25 bg-orange-500/15">
                    <svg
                      className="h-2.5 w-2.5 text-orange-400"
                      fill="none"
                      viewBox="0 0 10 8"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M1 4l2.5 2.5L9 1"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-white/60">{item}</span>
                </div>
              ))}

              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <button className="group flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/25">
                  Book free strategy call
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
                <button className="flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-7 py-3.5 text-sm font-medium text-white/70 transition-all duration-200 hover:border-white/25 hover:text-white">
                  See all services
                </button>
              </div>

              <p className="mt-1 text-xs text-white/25">
                No commitment required. 100% free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
