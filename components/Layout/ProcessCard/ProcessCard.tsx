"use client";

import Image from "next/image";
import clsx from "clsx";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

interface ProcessCardProps {
  step: ProcessStep;
  className?: string;
}

export default function ProcessCard({ step, className }: ProcessCardProps) {
  return (
    <div
      className={clsx(
        "group relative overflow-hidden rounded-3xl",
        "border border-white/10",
        "bg-white/[0.03] backdrop-blur-xl",
        "transition-all duration-500",
        "hover:border-[#FF5A3C]/40",
        "hover:shadow-[0_0_60px_rgba(255,90,60,.18)]",
        className,
      )}
    >
      {/* Background Image */}
      <Image
        src={step.image}
        alt={step.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-[#0B0E12]/95" />

      {/* Orange Glow */}
      <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-[#FF5A3C]/20 blur-[120px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-7">
        {/* Top */}
        <div className="flex items-start justify-between">
          <span className="font-mono text-sm tracking-widest text-[#22D6EE]">
            {step.number}
          </span>

          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#F5F7FA]/80 backdrop-blur">
            Process
          </div>
        </div>

        {/* Middle */}
        <div>
          <h3 className="font-neue text-3xl font-medium text-[#F5F7FA]">
            {step.title}
          </h3>

          <p className="mt-4 max-w-sm text-[15px] leading-7 text-[#AAB2C0]">
            {step.description}
          </p>
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap gap-2">
          {step.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border border-white/10
                bg-white/5
                px-3
                py-1
                text-xs
                text-[#D7DCE5]
                transition-all
                duration-300
                group-hover:border-[#FF5A3C]/40
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Border */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent transition-all duration-500 group-hover:ring-[#FF5A3C]/30" />
    </div>
  );
}
