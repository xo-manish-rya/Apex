"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1800) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();

          function tick(now: number) {
            const progress = Math.min((now - start) / duration, 1);
            // ease-out cubic — fast start, gentle settle, feels less mechanical than linear
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}

export function ProofBento() {
  const { value: adSpend, ref: adSpendRef } = useCountUp(210, 1800); // renders as ₹2.10Cr+

  return (
    <section className="px-6 pt-20 md:pb-20 mt-32 sm:px-8">
      <div className="mx-auto max-w-[1180px] rounded-[28px] border border-white/[0.06] p-3 sm:p-4">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_1fr_1.05fr] lg:grid-rows-[auto_auto] sm:gap-4">
          {/* left feature card — glowing orb, spans both rows */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#10141B] p-7 lg:col-start-1 lg:row-start-1 lg:row-span-2">
            <h3 className="relative z-10 text-[2.5rem] font-manrope font-[300] leading-[1.05] text-[#F5F7FA]">
              Book Your
              <br />
              Growth Audit
            </h3>

            {/* the orb */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[42%] h-[340px] w-[340px] -translate-x-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, rgba(34,214,238,0.55), rgba(34,214,238,0.08) 55%, transparent 75%)",
              }}
            />

            <div className="relative z-10 mt-16 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0B0E12] text-2xl">
                📊
              </div>
            </div>

            <p className="relative z-10 mt-4 text-center text-[1rem] font-manrope font-[400] text-[#8B94A3]">
              Apex Growth Media
            </p>

            {/* huge cropped counter number, signature move */}
            <div
              ref={adSpendRef}
              className="relative z-0 -mb-4 mt-4 select-none text-center font-manrope text-[4rem] font-[800] leading-none text-[#F5F7FA]/25 sm:text-[76px]"
            >
              ₹{(adSpend / 100).toFixed(2)}Cr+
            </div>

            <button className="relative z-10 mt-6 w-full rounded-xl border border-white/[0.1] bg-[#161B22] px-5 py-3 text-sm font-[400] text-[#22D6EE] transition-colors hover:border-[#22D6EE]/40">
              Get in touch →
            </button>
          </div>

          {/* stat card 1 */}
          <div className="rounded-2xl border border-white/[0.06] p-6 lg:col-start-2 lg:row-start-1">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg text-[#22D6EE]">
                <img src="/Arrow.svg" alt="" />
              </span>
              <span className="font-manrope text-5xl font-[300] text-[#F5F7FA]">
                40+
              </span>
            </div>
            <p className="mb-8 text-lg font-manrope font-[400] text-[#F5F7FA]">
              Brands Scaled
            </p>
            <p className="text-[1.3rem] font-manrope font-[100]">
              Across e-commerce, real estate, healthcare, and local services.
            </p>
          </div>

          {/* stat card 2 */}
          <div className="rounded-2xl border border-white/[0.06] p-6 lg:col-start-3 lg:row-start-1">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg ">
                <img src="/Star.svg" alt="" />
              </span>
              <span className="font-manrope text-5xl font-[300] text-[#F5F7FA]">
                4.8x
              </span>
            </div>
            <p className="mb-8 text-lg font-manrope font-[400] text-[#F5F7FA]">
              Average ROAS
            </p>
            <p className="text-[1.3rem] font-manrope font-[100] text-neutral-50">
              Verified across active, currently-managed ad accounts.
            </p>
          </div>

          {/* bottom-left wide banner card */}
          <div className="rounded-2xl border border-white/[0.06] p-7 lg:col-start-2 lg:col-span-2 lg:row-start-2 sm:p-8">
            <div className="flex flex-wrap items-center gap-3 font-[var(--font-neue-machina)] text-3xl font-bold text-[#F5F7FA] sm:text-4xl">
              UNLOCK
              <span className="flex -space-x-3">
                <span className="h-9 w-9 rounded-full border-2 border-[#0F1319] bg-[#1D2430]" />
                <span className="h-9 w-9 rounded-full border-2 border-[#0F1319] bg-[#22D6EE]/30" />
                <span className="h-9 w-9 rounded-full border-2 border-[#0F1319] bg-[#FF5A3C]/30" />
              </span>
              YOUR
            </div>

            <button className="my-5 flex h-10 w-16 items-center justify-center rounded-full border border-[#FF5A3C]/50 text-[#FF5A3C] transition-colors hover:bg-[#FF5A3C]/10">
              →
            </button>

            <div className="text-3xl font-[600] uppercase leading-[1.1] text-[#F5F7FA] sm:text-4xl">
              Full Growth Potential, Starting Today!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
