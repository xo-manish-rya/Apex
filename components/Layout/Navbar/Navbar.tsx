"use client";
import { useEffect, useState } from "react";
import Hamburger from "../../Hamburger/Hamburger";
import MobileMenu from "../../Mobile/MobileMenu/MobileMenu";
import Image from "next/image";
// import logo from "../public/logo.png";
// import logo from "../../public/logo.png";

interface NavLink {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
}

const navLinks: NavLink[] = [
  {
    name: "Services",
    href: "#services",
    dropdown: [
      { name: "Meta Ads", href: "#services" },
      { name: "Google Ads", href: "#services" },
      { name: "SEO & Local SEO", href: "#services" },
      { name: "Social Media Management", href: "#services" },
      { name: "Website & Landing Pages", href: "#services" },
      { name: "Marketing Automation & AI", href: "#services" },
    ],
  },
  { name: "Results", href: "#result" },
  { name: "Process", href: "#process" },
  {
    name: "Pricing",
    href: "pricing",
    dropdown: [
      { name: "Starter", href: "#pricing" },
      { name: "Growth", href: "#pricing" },
      { name: "Scale", href: "#pricing" },
    ],
  },
  { name: "FAQ", href: "#faq" },
];

const mobileLinks = navLinks.map(({ name, href }) => ({ name, href }));

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      id="navbar"
      // z-[70] — must stay ABOVE MobileMenu's z-40 so the hamburger/X
      // button is always clickable, even while the full-screen menu is open
      className="fixed inset-x-0 z-[70] flex justify-center "
    >
      <nav
        onMouseLeave={() => setOpenDropdown(null)}
        className="relative z-50 flex w-full max-w-[1500px] items-center justify-between rounded-full px-3 pt-6 pb-3 backdrop-blur-sm sm:px-4"
      >
        {/* logo */}
        <a href="#" className="flex items-center gap-2 px-2 sm:px-3">
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 md:gap-1">
            {/* Apex<span className="text-[#22D6EE]">Growth</span> */}
            <Image
              width={100}
              height={100}
              src="/logo.png"
              alt="Apex Media Growth"
              className="h-10 w-10 sm:h-11 sm:w-11 md:h-16 md:w-16 object-contain"
            />
            <div className="flex flex-col leading-[1] -sm:space-y-1.5">
              <span className="font-neue font-[300] text-[1.05em] md:text-[0.9em] lg:text-[1.25em]">
                Apex
              </span>
              <span className="whitespace-nowrap font-neue font-[300] text-[1.05em] md:text-[0.9em] lg:text-[1.25em]">
                Growth Media
              </span>
            </div>
          </div>
        </a>

        {/* center links — hidden on mobile */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
            >
              <a
                href={link.href}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-[#8B94A3] transition-colors hover:bg-white/[0.06] hover:text-[#F5F7FA]"
              >
                <div className="text-neutral-50 font-[400] text-sm sm:text-base md:text-[0.95em] lg:text-xl xl:text-xl">
                  {link.name}
                </div>
                {link.dropdown && (
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 4l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </a>

              {link.dropdown && openDropdown === link.name && (
                <div className="absolute left-0 top-full pt-3">
                  <div className="min-w-[220px] rounded-2xl border border-white/[0.08] bg-[#161B22] p-2 shadow-xl">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-sm text-[#8B94A3] transition-colors hover:bg-white/[0.06] hover:text-[#F5F7FA]"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* right side actions */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden whitespace-nowrap rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-[#0B0E12] transition-colors hover:bg-[#ff7256] md:inline-flex sm:px-5 md:px-3 md:text-xs"
          >
            Get Started
          </a>

          <Hamburger
            isOpen={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="md:hidden"
          />
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={mobileLinks}
      />
    </header>
  );
};

export default Navbar;
