import { useEffect, useRef, useState } from "react";
import { getServices } from "../services/service/service.api";

// ─── Types ────────────────────────────────────────────────────────────────────
export interface Service {
  _id: string;
  name: string;
  details: string;
  more: string;
}

// ─── 3D Hexagon Gem Icon ──────────────────────────────────────────────────────
interface HexGemProps {
  active: boolean;
}

const HexGem: React.FC<HexGemProps> = ({ active }) => (
  <svg
    width="90"
    height="90"
    viewBox="0 0 90 90"
    fill="none"
    className={`transition-all duration-300 ${
      active
        ? "[filter:drop-shadow(0_8px_24px_rgba(34,197,94,0.45))]"
        : "[filter:drop-shadow(0_8px_24px_rgba(34,197,94,0.2))]"
    }`}
  >
    <polygon points="45,8 72,23 72,53 45,68 18,53 18,23" fill={active ? "#22c55e" : "#1a6b35"} />
    <polygon points="45,8 18,23 28,30 45,20" fill={active ? "#4ade80" : "#22c55e"} opacity="0.9" />
    <polygon points="45,8 72,23 62,30 45,20" fill={active ? "#16a34a" : "#166534"} opacity="0.85" />
    <polygon points="45,20 28,30 32,46 45,52 58,46 62,30" fill={active ? "#22c55e" : "#1a6b35"} opacity="0.7" />
    <polygon points="18,23 18,53 28,46 28,30" fill={active ? "#15803d" : "#0f4a22"} opacity="0.9" />
    <polygon points="72,23 72,53 62,46 62,30" fill={active ? "#16a34a" : "#166534"} opacity="0.6" />
    <polygon points="18,53 45,68 45,56 28,46" fill={active ? "#15803d" : "#0f4a22"} opacity="0.95" />
    <polygon points="72,53 45,68 45,56 62,46" fill={active ? "#16a34a" : "#166534"} opacity="0.7" />
    <polygon points="45,52 32,46 45,56 58,46" fill={active ? "#15803d" : "#0f4a22"} opacity="0.8" />
    <polygon points="45,12 55,20 45,22 35,20" fill="white" opacity="0.18" />
    <circle cx="36" cy="26" r="2.5" fill="white" opacity="0.22" />
  </svg>
);

// ─── Skeleton Card ────────────────────────────────────────────────────────────
const SkeletonCard: React.FC<{ delay: number }> = ({ delay }) => (
  <div
    className="shrink-0 w-[280px] min-h-[320px] rounded-xl border border-green-900/10
      bg-gradient-to-br from-[#0a1810] to-[#060e08] p-8 flex flex-col gap-4 animate-pulse"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-[72px] h-[72px] rounded-lg bg-green-500/[0.08]" />
    <div className="h-3.5 w-3/4 rounded bg-green-500/[0.07]" />
    <div className="h-3.5 w-[90%] rounded bg-green-500/[0.05]" />
    <div className="h-3.5 w-3/5 rounded bg-green-500/[0.05]" />
    <div className="mt-auto h-10 rounded-md bg-green-500/[0.06]" />
  </div>
);

// ─── Service Card ─────────────────────────────────────────────────────────────
interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative shrink-0 w-[280px] flex flex-col min-h-[320px] rounded-xl p-8 cursor-pointer
        transition-all duration-300
        ${
          hovered
            ? "bg-gradient-to-br from-[#0d1f12] to-[#091409] border border-green-400/40 -translate-y-1.5 shadow-[0_20px_60px_rgba(34,197,94,0.12)]"
            : "bg-gradient-to-br from-[#0a1810] to-[#060e08] border border-green-900/20 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
        }
      `}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Top edge glow */}
      <div
        className={`
          absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-[60%] rounded-sm
          bg-gradient-to-r from-transparent via-green-400/60 to-transparent
          transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Hex icon */}
      <div className="mb-6">
        <HexGem active={hovered} />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-white font-semibold text-[15px] leading-snug tracking-[0.01em] mb-3 font-serif">
          {service.name}
        </h3>
        <p className="text-green-300/50 text-[12.5px] leading-[1.75] mb-7 font-serif">
          {service.details}
        </p>
      </div>

      {/* Button */}
      <button
        className={`
          w-full py-[11px] px-4 rounded-md text-[12px] tracking-[0.06em] font-semibold
          uppercase font-serif flex items-center justify-center gap-1.5 transition-all duration-200
          ${
            hovered
              ? "border border-green-400/60 bg-green-500/10 text-green-400"
              : "border border-green-400/25 bg-transparent text-green-300/60"
          }
        `}
      >
        Learn More
        <span className="text-sm">↗</span>
      </button>
    </div>
  );
};

// ─── Road SVG Background ──────────────────────────────────────────────────────
const RoadBackground: React.FC = () => (
  <div className="absolute bottom-0 left-0 right-0 h-[260px] z-[1] overflow-hidden pointer-events-none">
    <svg viewBox="0 0 1200 260" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
      <defs>
        <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#050d07" stopOpacity="1" />
          <stop offset="60%" stopColor="#0a1a0c" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0d1f10" stopOpacity="0.6" />
        </linearGradient>
        <filter id="roadGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path d="M400,0 L800,0 L1200,260 L0,260 Z" fill="url(#roadGrad)" opacity="0.5" />
      <path d="M420,0 L780,0 L1180,260 L20,260 Z" fill="rgba(15,30,18,0.3)" />
      {([0, 1, 2, 3, 4, 5, 6, 7] as number[]).map((i) => {
        const y1 = i * 35;
        const y2 = y1 + 22;
        const p1 = y1 / 260;
        const p2 = y2 / 260;
        return (
          <line
            key={i}
            x1={600 - p1 * 30} y1={y1}
            x2={600 - p2 * 30} y2={y2}
            stroke="rgba(34,197,94,0.25)"
            strokeWidth={1 + p2 * 2}
            filter="url(#roadGlow)"
          />
        );
      })}
      <path d="M600,0 L200,260" stroke="rgba(34,197,94,0.12)" strokeWidth="1" fill="none" />
      <path d="M600,0 L1000,260" stroke="rgba(34,197,94,0.12)" strokeWidth="1" fill="none" />
      <path d="M600,0 L50,260" stroke="rgba(34,197,94,0.07)" strokeWidth="0.5" fill="none" />
      <path d="M600,0 L1150,260" stroke="rgba(34,197,94,0.07)" strokeWidth="0.5" fill="none" />
      <ellipse cx="600" cy="5" rx="120" ry="18" fill="rgba(34,197,94,0.08)" />
      <ellipse cx="600" cy="5" rx="60" ry="8" fill="rgba(74,222,128,0.12)" />
      <rect x="0" y="0" width="1200" height="260" fill="url(#roadGrad)" />
    </svg>
  </div>
);

// ─── Nav Arrow Button ─────────────────────────────────────────────────────────
interface NavBtnProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}

const NavBtn: React.FC<NavBtnProps> = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-200
      ${
        disabled
          ? "border-green-900/20 text-green-900/30 cursor-not-allowed opacity-40"
          : "border-green-500/30 text-green-400 hover:border-green-400/70 hover:bg-green-500/10 cursor-pointer"
      }
    `}
  >
    {direction === "left" ? (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ) : (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )}
  </button>
);

// ─── Services Section ─────────────────────────────────────────────────────────
const ServicesSection: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  const CARD_WIDTH = 280 + 16; // card width + gap

  // ── Fetch ──
  useEffect(() => {
    const fetchServices = async (): Promise<void> => {
      try {
        const res = await getServices(1, 10);
        setServices(res.data.services ?? []);
      } catch (err) {
        console.error("Failed to fetch services:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  // ── Sync arrow disabled state ──
  const syncArrows = (): void => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // First sync after services render
    syncArrows();

    el.addEventListener("scroll", syncArrows, { passive: true });

    // Also watch for resize (e.g. window resizing changes visible width)
    const ro = new ResizeObserver(syncArrows);
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", syncArrows);
      ro.disconnect();
    };
  }, [services]); // re-attach once services are in the DOM

  // ── Scroll handlers ──
  const scrollLeft = (): void => {
    scrollRef.current?.scrollBy({ left: -CARD_WIDTH, behavior: "smooth" });
  };

  const scrollRight = (): void => {
    scrollRef.current?.scrollBy({ left: CARD_WIDTH, behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#050d07] pt-20 overflow-hidden min-h-[520px] font-serif">

      {/* Ambient radial glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none
        bg-[radial-gradient(ellipse,rgba(34,197,94,0.04)_0%,transparent_70%)]" />

      {/* Road fade overlay (above SVG) */}
      <div className="absolute bottom-0 left-0 right-0 h-[260px] z-[2] pointer-events-none
        bg-gradient-to-b from-[#050d07] via-transparent to-[#050d07]" />

      {/* Road SVG */}
      <RoadBackground />

      {/* ── Main content ── */}
      <div className="relative z-[3]">

        {/* Header row: title left, arrows right */}
        <div className="flex items-center justify-between mb-12 px-12">
  
  {/* Center wrapper */}
  <div className="flex-1 text-center">
    <h2 className="text-[clamp(22px,3vw,40px)] font-black tracking-[0.07em] uppercase m-0">
      <span className="text-green-400">OUR</span>{" "}
      <span className="text-white">SERVICES</span>
    </h2>
  </div>

  {/* Arrows */}
  {!loading && services.length > 0 && (
    <div className="flex items-center gap-2">
      <NavBtn direction="left" onClick={scrollLeft} disabled={!canScrollLeft} />
      <NavBtn direction="right" onClick={scrollRight} disabled={!canScrollRight} />
    </div>
  )}
</div>

        {/* Skeleton */}
        {loading && (
          <div className="flex gap-4 px-12 pb-28 overflow-hidden">
            {[0, 1, 2, 3].map((i) => (
              <SkeletonCard key={i} delay={i * 120} />
            ))}
          </div>
        )}

        {/* Cards carousel */}
        {!loading && (
          <div
            ref={scrollRef}
            className="flex gap-4 px-12 pb-28 overflow-x-auto scroll-smooth
              [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {services.map((service, i) => (
              <ServiceCard key={service._id} service={service} index={i} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default ServicesSection;