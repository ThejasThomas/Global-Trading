const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative bg-[#050d09] border-b border-green-900/20 py-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* TOP */}
        <div className="mb-12">
          <p className="text-green-400/80 text-[10px] tracking-[0.45em] uppercase font-semibold mb-5">
            WHAT WE DO
          </p>

          {/* 🔥 STACKED (IMPORTANT CHANGE) */}
          <div className="max-w-3xl">
            <h2 className="text-[clamp(22px,3.5vw,44px)] font-black text-white leading-[1.1] tracking-tight mb-6">
              YOUR SINGLE WINDOW
              <br />
              PARTNER FOR{" "}
              <span className="text-green-400">GLOBAL SOLUTIONS</span>
            </h2>

            <p className="text-green-300/45 text-[14px] leading-[1.9]">
              ABC Technologies LLC operates as a single-window partner for global clients seeking reliable sourcing, technical expertise, and deployment of advanced engineering and technology solutions.
            </p>
          </div>
        </div>

        {/* BUTTON */}
        <button className="mt-6 border border-green-500/35 hover:border-green-400/60 text-green-400 hover:text-green-300 text-[10px] tracking-[0.2em] uppercase font-semibold px-7 py-3.5 transition-all duration-200">
          Learn More About Us →
        </button>

      </div>
    </section>
  );
};

export default AboutSection;