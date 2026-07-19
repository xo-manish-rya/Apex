export function CTA() {
  return (
    <section className="px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#FF5A3C] to-[#ffb066] px-8 py-16 text-center sm:px-16 sm:py-20">
        <h2 className="mx-auto max-w-[600px] font-neue font-[400] text-[2.5rem] leading-10 sm:leading-12 text-[#0B0E12] sm:text-[3em]">
          Ready to turn ad spend into revenue?
        </h2>
        <p className="mx-auto mt-4 max-w-[440px] font-[500] text-[1rem] text-[#0B0E12]/75 sm:text-md">
          Book a free strategy call — no pressure, no long pitch, just a clear
          plan built around your business.
        </p>
        <a
          href="#contact"
          className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#0B0E12] px-8 py-4 text-[15px] font-semibold text-[#F5F7FA] transition-colors hover:bg-black"
        >
          Book Your Free Strategy Call →
        </a>
      </div>
    </section>
  );
}
