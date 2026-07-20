const footerLinks = {
  Company: [
    { name: "Services", href: "#services" },
    { name: "Results", href: "#results" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
  ],
  Resources: [
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] px-6 py-16 sm:px-8">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* brand column */}
          <div>
            <a
              href="/"
              className="font-[var(--font-neue-machina)] text-xl font-extrabold text-[#F5F7FA]"
            >
              Apex<span className="text-[#22D6EE]">Growth</span>
            </a>
            <p className="mt-4 max-w-[280px] text-[14px] leading-relaxed text-[#8B94A3]">
              Data-backed marketing campaigns that turn ad spend into pipeline —
              not just impressions.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.1em] text-[#8B94A3]">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[14px] text-[#F5F7FA]/80 transition-colors hover:text-[#22D6EE]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* contact column */}
          <div>
            <h4 className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.1em] text-[#8B94A3]">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-[14px] text-[#F5F7FA]/80">
              <li>
                <a
                  href="mailto:hello@apexgrowthmedia.com"
                  className="transition-colors hover:text-[#22D6EE]"
                >
                  hello@apexgrowthmedia.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+910000000000"
                  className="transition-colors hover:text-[#22D6EE]"
                >
                  +91 00000 00000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 sm:flex-row">
          <p className="text-[13px] text-[#8B94A3]">
            © {new Date().getFullYear()} Apex Growth Media. All rights reserved.
          </p>
          <div className="flex gap-6 text-[13px] text-[#8B94A3]">
            <a href="#" className="transition-colors hover:text-[#F5F7FA]">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-[#F5F7FA]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
