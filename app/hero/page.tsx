"use client";
import Navbar from "@/components/Layout/Navbar/Navbar";
import { ProofBento } from "@/components/Layout/ProofBento/ProofBento";
import React from "react";

interface CallToAction {
  text: string;
  href: string;
  variant: "primary" | "secondary";
}

const callToActions: CallToAction[] = [
  { text: "Book a Free Strategy Call", href: "#contact", variant: "primary" },
  { text: "See Our Results", href: "#results", variant: "secondary" },
];

function renderCallToAction(cta: CallToAction, index: number) {
  if (cta.variant === "primary") {
    return (
      <a
        key={index}
        href={cta.href}
        className="rounded-lg bg-primary px-3 py-2 sm:px-3.5 sm:py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring transition-colors"
      >
        {cta.text}
      </a>
    );
  }
  return (
    <a
      key={index}
      href={cta.href}
      className="text-xs sm:text-sm/6 font-semibold text-foreground hover:text-muted-foreground transition-colors"
    >
      {cta.text} <span aria-hidden="true">→</span>
    </a>
  );
}

export default function HeroSection() {
  const gradientFrom = "#FF5A3C"; // Ember Coral
  const gradientTo = "#FFB020"; // Amber

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Top gradient background */}
      {/* <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 min-h-screen"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            background: `linear-gradient(to top right, ${gradientFrom}, ${gradientTo})`,
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] min-h-screen"
        />
      </div> */}

      {/* Bottom gradient background */}
      {/* <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] min-h-screen"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            background: `linear-gradient(to top right, ${gradientFrom}, ${gradientTo})`,
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] min-h-screen"
        />
      </div> */}

      {/* No header/nav here on purpose — that's being built separately with GSAP */}

      <div className="relative isolate px-6 pt-4 overflow-hidden flex flex-col mt-32">
        <div className="mx-auto max-w-7xl pst-20 sm:pt-25">
          <div className="sm:mb-2 flex justify-center">
            <div className="relative inline-flex items-center justify-center rounded-full px-3 py-1.5 text-[10px] sm:px-4 sm:py-2 sm:text-xs md:px-5 md:py-2.5 md:text-sm lg:px-6 lg:py-3 lg:text-base xl:px-7 xl:py-3.5 xl:text-lg font-[200] text-neutral-300 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300">
              Free Growth Audit for New Businesses
              {/* <a
                href="#results"
                className="font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                <span aria-hidden="true" className="absolute inset-0" />
                See how <span aria-hidden="true">&rarr;</span>
              </a> */}
            </div>
          </div>

          <div className="text-center mt-6">
            <h1
              className=" mx-auto max-w-6xl text-center font-neue font-[400] tracking-tight text-balance text-foregrou text-4xl leading-tig sm:text-5xl sm:leading-tight md:text-6xl md:leading-[1] lg:text-7xl lg:leading-no xl:text-[5em] xl:leading-[0.95]
  "
            >
              Building Digital Solutions That Drive Business Growth!
            </h1>
            <p
              className="mx-auto mt-6 max-w-xs text-center text-sm leading-6 font-light text-muted- sm:mt-8 sm:max-w-2xl sm:text-lg sm:leading- md:max-w-3xl md:text-xl md:leading- lg:max-w-4xl lg:text-2xl lg:leading-10
  "
            >
              Apex Growth Media builds data-backed campaigns — Meta Ads, Google
              Ads, SEO, and AI-powered automation — that turn ad spend into
              pipeline, not just impressions.
            </p>

            <div className="mt-8 sm:mt-10 flex items-center justify-center gap-x-4 sm:gap-x-6">
              {callToActions.map((cta, index) =>
                renderCallToAction(cta, index),
              )}
            </div>
          </div>
        </div>
      </div>

      <ProofBento />
    </div>
  );
}
