const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050d09]">
      {/* ── Grid Overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,197,94,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.055) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Ambient Glows ── */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-green-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-green-700/6 blur-[80px] pointer-events-none" />

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12 pt-28 pb-20">
        {/* Left: Text */}
        <div className="flex-1 min-w-0">
          {/* <p className="text-green-400/80 text-[10px] tracking-[0.45em] uppercase font-semibold mb-7">
            Since 2005
          </p> */}

          <h1 className="text-[clamp(38px,5.5vw,72px)] font-black text-white leading-[1.0] tracking-[-0.02em] mb-7">
            GLOBAL TRADING &<br />
            <span className="text-green-400">INTELLIGENT</span>
            <br />
            INFRASTRUCTURE
            <br />
            SOLUTIONS
          </h1>

          <p className="text-green-300/45 text-[14px] sm:text-[15px] leading-[1.85] max-w-[480px] mb-10">
            We deliver end-to-end solutions across global trade, technical
            consultancy, and technology delivery — engineered for performance,
            built for scale.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-green-500 hover:bg-green-400 active:bg-green-600 text-black font-black text-[10px] tracking-[0.2em] uppercase px-8 py-4 transition-colors duration-200">
              DISCUSS A PROJECT
            </button>
            <button className="border border-green-500/35 hover:border-green-400/60 text-green-400 hover:text-green-300 text-[10px] tracking-[0.2em] uppercase font-semibold px-8 py-4 transition-all duration-200">
              EXPLORE OUR CAPABILITIES→
            </button>
          </div>
        </div>

        {/* Right: Decorative Silhouette */}
        <div className="hidden lg:flex flex-shrink-0 w-[260px] xl:w-[320px] justify-center items-center">
          <div className="relative opacity-30">
            {/* Glow behind figure */}
            <div className="absolute inset-0 bg-green-500/10 rounded-full blur-3xl scale-150" />
            <svg viewBox="0 0 300 400" fill="none" className="relative w-full">
              {/* Ground glow */}
              <ellipse cx="150" cy="370" rx="130" ry="22" fill="#22c55e" opacity="0.15" />
              {/* Body */}
              <rect x="108" y="90" width="84" height="245" rx="8" fill="#16a34a" opacity="0.3" />
              {/* Head */}
              <circle cx="150" cy="62" r="42" fill="#15803d" opacity="0.4" />
              {/* Left pillar */}
              <rect x="54" y="180" width="36" height="155" rx="4" fill="#22c55e" opacity="0.15" />
              {/* Right pillar */}
              <rect x="210" y="158" width="36" height="177" rx="4" fill="#22c55e" opacity="0.15" />
              {/* Arm lines */}
              <line x1="108" y1="160" x2="54" y2="190" stroke="#22c55e" strokeWidth="2" opacity="0.2" />
              <line x1="192" y1="160" x2="246" y2="190" stroke="#22c55e" strokeWidth="2" opacity="0.2" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Bottom Fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050d09] via-[#050d09]/70 to-transparent pointer-events-none" />

      {/* ── Scroll Indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-green-400 text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-green-400 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;