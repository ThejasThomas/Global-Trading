interface FooterCol {
  title: string;
  links: { label: string; href: string }[];
}

const footerCols: FooterCol[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#" },
      { label: "About Us", href: "#about" },
      { label: "Our Services", href: "#services" },
      { label: "Sectors We Serve", href: "#sectors" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Global Trading & Export", href: "#" },
      { label: "Technical Consultancy", href: "#" },
      { label: "Technology Delivery", href: "#" },
      { label: "Solution Delivery", href: "#" },
      { label: "Infrastructure Projects", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "info@abcglobal.com", href: "mailto:info@abcglobal.com" },
      { label: "+971 4 000 0000", href: "tel:+97140000000" },
      { label: "Dubai, UAE", href: "#" },
      { label: "Mon – Fri: 9am – 6pm GST", href: "#" },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020a05] border-t border-green-900/20 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-green-500/3 rounded-full blur-[80px] pointer-events-none" />

      {/* ── CTA Band ── */}
      <div className="relative z-10 border-b border-green-900/20 bg-gradient-to-r from-green-950/30 via-[#020a05] to-[#020a05]">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-[clamp(18px,2.5vw,28px)] font-black text-white leading-tight tracking-tight mb-2">
              READY TO MOVE YOUR PROJECT
              <br />
              <span className="text-green-400">FORWARD?</span>
            </h3>
            <p className="text-green-300/40 text-[13px] leading-relaxed">
Consultative engineering expertise--from strategy and design through implenetation to measurable operational performance.            </p>
          </div>
          <div className="flex flex-wrap gap-4 flex-shrink-0">
            <button className="bg-green-500 hover:bg-green-400 active:bg-green-600 text-black font-black text-[10px] tracking-[0.2em] uppercase px-8 py-4 transition-colors duration-200 whitespace-nowrap">
              START A PROJECT
            </button>
            <button className="border border-green-500/35 hover:border-green-400/60 text-green-400 hover:text-green-300 text-[10px] tracking-[0.2em] uppercase font-semibold px-8 py-4 transition-all duration-200 whitespace-nowrap">
              SCHEDULE A CALL
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 xl:gap-14">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
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

            <p className="text-green-300/30 text-[12px] leading-[1.9] max-w-[280px] mb-8">
              Engineering excellence across borders. Your single window partner
              for global trade, technical consultancy, and infrastructure
              solutions since 2005.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center border border-green-900/30 hover:border-green-500/50 text-green-300/30 hover:text-green-400 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="text-white text-[10px] tracking-[0.28em] uppercase font-bold mb-6">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-green-300/32 hover:text-green-400 text-[12px] leading-snug transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="relative z-10 border-t border-green-900/15">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-green-300/22 text-[10px] tracking-[0.1em]">
            © {year} ABC Global Solutions LLC. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((t) => (
              <a
                key={t}
                href="#"
                className="text-green-300/22 hover:text-green-300/50 text-[10px] tracking-[0.08em] transition-colors duration-200"
              >
                {t}
              </a>
            ))}
          </div>
          <span className="text-green-300/20 text-[10px] tracking-[0.08em]">
            Powered by ABC Tech
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;