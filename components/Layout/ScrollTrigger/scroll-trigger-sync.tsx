"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Must be rendered INSIDE <ReactLenis root>, since it reads the Lenis
 * instance via context. This is the exact integration Lenis's own docs
 * specify for GSAP ScrollTrigger — without it, ScrollTrigger listens to
 * native scroll events while Lenis is intercepting/smoothing scroll
 * itself, so trigger positions silently drift out of sync with what's
 * actually on screen.
 *
 * Renders nothing — it's purely a wiring/side-effect component.
 */
export function ScrollTriggerSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      // gsap.ticker gives time in seconds, lenis.raf expects milliseconds
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.off("scroll", ScrollTrigger.update);
    };
  }, [lenis]);

  return null;
}
