import { useEffect, useState } from "react";

const NAV_LINKS = [ "About", "Services", "Sectors"];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050d09]/95 backdrop-blur-md border-b border-green-900/40 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[68px]">
        {/* ── Logo ── */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="17" stroke="#22c55e" strokeWidth="1.5" />
            <path d="M9 18 Q18 6 27 18 Q18 30 9 18Z" fill="#22c55e" opacity="0.85" />
          </svg>
          <div className="leading-tight">
            <div className="text-white text-[13px] font-black tracking-[0.2em] uppercase">
              ABC
            </div>
            <div className="text-green-400 text-[9px] tracking-[0.25em] uppercase font-medium">
              Global Solutions
            </div>
          </div>
        </div>

        {/* ── Desktop Links ── */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-green-300/55 hover:text-green-400 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* ── CTA Button ── */}
        <button className="hidden md:block border border-green-500/40 hover:border-green-400/70 hover:bg-green-500/8 text-green-400 text-[10px] tracking-[0.2em] uppercase font-semibold px-5 py-2.5 transition-all duration-200">
         CONTACT US
        </button>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden text-green-400 p-1"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-[#050d09]/98 border-t border-green-900/30`}
      >
        <div className="px-6 py-5 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-green-300/55 hover:text-green-400 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-200"
            >
              {link}
            </a>
          ))}
          <button className="mt-2 border border-green-500/40 text-green-400 text-[10px] tracking-[0.2em] uppercase font-semibold px-4 py-2.5 w-fit">
            CONTACT US
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;