import { useState } from "react";

const sectors = [
  {
    num: "01",
    icon: "⚡",
    label: "Power & Energy",
    desc: "Sustainable energy solutions for Power Generation, Transmission, Distribution, and Renewables.",
  },
  {
    num: "02",
    icon: "🏗️",
    label: "Real Estate & Infrastructure",
    desc: "Smart Building Systems and Intelligent Infrastructure Solutions for large-scale projects.",
  },
  {
    num: "03",
    icon: "🏭",
    label: "Industrial & Manufacturing",
    desc: "Automation, Control Systems, Machinery, and Process Equipment for industry.",
  },
  {
    num: "04",
    icon: "🌾",
    label: "Agriculture & Water",
    desc: "Irrigation Systems, Water Management, Agri-Technology, and Rural Development.",
  },
  {
    num: "05",
    icon: "💻",
    label: "Institutional & Government",
    desc: "Public Sector Projects, Government Tenders, and Institutional Development Programs.",
  },
];

const philosophyCards = [
  {
    icon: "🔬",
    title: "Independent & Engineering-Led",
    desc: "Our Decisions Are Driven By Performance Data And Technical Excellence, Not Supplier Incentives.",
  },
  {
    icon: "🧩",
    title: "Unified Expertise",
    desc: "Engineering, Procurement, Project Execution From One Coordinated Group Of Specialists.",
  },
  {
    icon: "🔁",
    title: "Retrofit-Focused",
    desc: "Systematic Retrofit Approach Integrating And Cutting Existing Systems.",
  },
  {
    icon: "🌐",
    title: "Cross-Border Execution",
    desc: "Project Capabilities Spanning International Markets And Regions.",
  },
];

const commitments = [
  "Technical Integrity",
  "Long-term partnerships",
  "Long-term partnerships",
  "Responsible operational ethics",
];

const mapDots = [
  { x: 22, y: 32, label: "United Kingdom" },
  { x: 60, y: 28, label: "UAE" },
  { x: 70, y: 42, label: "India" },
  { x: 55, y: 62, label: "Kenya" },
  { x: 52, y: 72, label: "Tanzania" },
  { x: 48, y: 80, label: "South Africa" },
];

const mapLines = [
  [22, 32, 60, 28],
  [60, 28, 70, 42],
  [60, 28, 55, 62],
  [55, 62, 52, 72],
  [52, 72, 48, 80],
  [70, 42, 55, 62],
];

const bottomCards = [
  {
    icon: "🌍",
    title: "International Trade",
    desc: "End-to-End Sourcing And Trade Execution",
  },
  {
    icon: "🏗️",
    title: "Multi-Country Projects",
    desc: "Complex Deployments Across Regions",
  },
  {
    icon: "🤝",
    title: "OEM Partnerships",
    desc: "Endorsed Country Info, Global Partners",
  },
];

export default function SectorsSection() {
const [hoveredSector, setHoveredSector] = useState<number | null>(null);
  return (
    <section
      style={{
        background: "#05100a",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        color: "#d4e8d8",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Noise texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.4,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* ── SECTORS WE SERVE ── */}
        <div style={{ padding: "80px 48px 60px", borderBottom: "1px solid rgba(34,197,94,0.1)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "clamp(20px, 3vw, 38px)",
                  fontWeight: "900",
                  letterSpacing: "0.06em",
                  color: "#fff",
                  margin: "0 0 12px",
                  textTransform: "uppercase",
                  fontFamily: "'Georgia', serif",
                }}
              >
                SECTORS{" "}
                <span style={{ color: "#4ade80" }}>WE SERVE</span>
              </h2>
              <p
                style={{
                  color: "rgba(134,200,150,0.5)",
                  fontSize: "12px",
                  maxWidth: "480px",
                  margin: "0 auto",
                  lineHeight: "1.8",
                  letterSpacing: "0.02em",
                }}
              >
                Our expertise spans across critical sectors, delivering tailored solutions that drive efficiency and sustainability.
              </p>
            </div>

            {/* Sectors Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "1px",
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.12)",
              }}
            >
              {sectors.map((s, i) => (
                <div
                  key={s.label}
                  onMouseEnter={() => setHoveredSector(i)}
                  onMouseLeave={() => setHoveredSector(null)}
                  style={{
                    background: hoveredSector === i ? "rgba(34,197,94,0.07)" : "#070f0b",
                    padding: "28px 20px",
                    cursor: "pointer",
                    transition: "background 0.25s",
                    borderRight: i < 4 ? "1px solid rgba(34,197,94,0.08)" : "none",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      fontSize: "10px",
                      color: "rgba(74,222,128,0.4)",
                      letterSpacing: "0.12em",
                      fontFamily: "monospace",
                      marginBottom: "16px",
                    }}
                  >
                    {s.num}
                  </div>
                  <div style={{ fontSize: "22px", marginBottom: "10px" }}>{s.icon}</div>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "700",
                      color: hoveredSector === i ? "#4ade80" : "rgba(200,230,210,0.85)",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                      lineHeight: "1.4",
                      transition: "color 0.2s",
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "rgba(134,180,150,0.45)",
                      lineHeight: "1.7",
                    }}
                  >
                    {s.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── ENGINEERING-FIRST PHILOSOPHY ── */}
        <div style={{ padding: "80px 48px", borderBottom: "1px solid rgba(34,197,94,0.08)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.4em",
                color: "rgba(74,222,128,0.5)",
                textTransform: "uppercase",
                marginBottom: "8px",
                fontFamily: "monospace",
              }}
            >
              WHY COMMON
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "60px",
                alignItems: "start",
              }}
            >
              {/* Left: Title + Cards */}
              <div>
                <h2
                  style={{
                    fontSize: "clamp(24px, 3.5vw, 46px)",
                    fontWeight: "900",
                    color: "#fff",
                    lineHeight: "1.05",
                    letterSpacing: "-0.01em",
                    textTransform: "uppercase",
                    margin: "0 0 36px",
                  }}
                >
                  ENGINEERING-FIRST
                  <br />
                  <span style={{ color: "#4ade80" }}>PHILOSOPHY</span>
                </h2>
                <p
                  style={{
                    fontSize: "12px",
                    color: "rgba(134,180,150,0.5)",
                    lineHeight: "1.9",
                    marginBottom: "40px",
                    maxWidth: "440px",
                  }}
                >
                  Operating at the intersection of engineering, commercial, and technology,
                  enabling clients to assess, design, and deploy reliable national-active
                  startups, automations, optimizations, and sustainability journeys.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1px",
                    background: "rgba(34,197,94,0.08)",
                    border: "1px solid rgba(34,197,94,0.1)",
                  }}
                >
                  {philosophyCards.map((c, i) => (
                    <div
                      key={c.title}
                      style={{
                        background: "#070f0b",
                        padding: "22px 18px",
                        borderRight: i % 2 === 0 ? "1px solid rgba(34,197,94,0.08)" : "none",
                        borderBottom: i < 2 ? "1px solid rgba(34,197,94,0.08)" : "none",
                      }}
                    >
                      <div style={{ fontSize: "18px", marginBottom: "10px" }}>{c.icon}</div>
                      <div
                        style={{
                          fontSize: "10px",
                          fontWeight: "700",
                          color: "rgba(200,230,210,0.8)",
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                          marginBottom: "6px",
                          lineHeight: "1.4",
                        }}
                      >
                        {c.title}
                      </div>
                      <div
                        style={{
                          fontSize: "10px",
                          color: "rgba(134,180,150,0.4)",
                          lineHeight: "1.7",
                        }}
                      >
                        {c.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Our Commitment */}
              <div>
                <div
                  style={{
                    border: "1px solid rgba(34,197,94,0.15)",
                    background: "rgba(8,20,12,0.8)",
                    padding: "32px",
                    marginBottom: "24px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.4em",
                      color: "rgba(74,222,128,0.6)",
                      textTransform: "uppercase",
                      marginBottom: "16px",
                      fontFamily: "monospace",
                    }}
                  >
                    OUR{" "}
                    <span style={{ color: "#4ade80" }}>COMMITMENT</span>
                  </div>
                  <p
                    style={{
                      fontSize: "11px",
                      color: "rgba(134,180,150,0.55)",
                      lineHeight: "1.85",
                      marginBottom: "24px",
                    }}
                  >
                    We are committed to delivering measurable value through every engagement.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {commitments.map((c, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          fontSize: "11px",
                          color: "rgba(180,220,190,0.6)",
                        }}
                      >
                        <div
                          style={{
                            width: "5px",
                            height: "5px",
                            borderRadius: "50%",
                            background: "#4ade80",
                            flexShrink: 0,
                          }}
                        />
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    border: "1px solid rgba(34,197,94,0.1)",
                    padding: "20px 24px",
                    background: "rgba(8,18,10,0.6)",
                    fontSize: "11px",
                    color: "rgba(134,180,150,0.4)",
                    lineHeight: "1.8",
                    fontStyle: "italic",
                  }}
                >
                  Strong backing from our Audits, R&D and Technology in every project.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── WORLDWIDE OPERATIONS ── */}
        <div style={{ padding: "80px 48px 60px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.4em",
                color: "rgba(74,222,128,0.5)",
                textTransform: "uppercase",
                marginBottom: "6px",
                fontFamily: "monospace",
              }}
            >
              GLOBAL OUTLOOK
            </p>
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 38px)",
                fontWeight: "900",
                color: "#fff",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              WORLDWIDE{" "}
              <span style={{ color: "#4ade80" }}>OPERATIONS</span>
            </h2>
            <p
              style={{
                fontSize: "11px",
                color: "rgba(134,180,150,0.45)",
                lineHeight: "1.8",
                marginBottom: "40px",
                maxWidth: "560px",
              }}
            >
              Operating from Dubai with strong operational ties across India, Africa, and other international markets,
              supporting projects and exports worldwide.
            </p>

            {/* Map */}
            <div
              style={{
                border: "1px solid rgba(34,197,94,0.12)",
                background: "rgba(5,12,8,0.9)",
                padding: "32px",
                marginBottom: "1px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "50%",
                  height: "60%",
                  background: "radial-gradient(ellipse, rgba(34,197,94,0.04) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              <svg
                viewBox="0 0 900 420"
                style={{ width: "100%", display: "block" }}
                fill="none"
              >
                {/* World map simplified continents */}
                {/* North America */}
                <path d="M60,60 L180,50 L200,80 L190,140 L160,160 L130,155 L100,140 L70,110 Z" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.15)" strokeWidth="0.5" />
                {/* South America */}
                <path d="M130,175 L185,170 L200,210 L195,270 L165,300 L140,280 L120,240 L115,195 Z" fill="rgba(34,197,94,0.07)" stroke="rgba(34,197,94,0.12)" strokeWidth="0.5" />
                {/* Europe */}
                <path d="M340,45 L420,40 L440,65 L435,95 L400,105 L360,100 L335,80 Z" fill="rgba(34,197,94,0.1)" stroke="rgba(34,197,94,0.18)" strokeWidth="0.5" />
                {/* Africa */}
                <path d="M360,115 L430,110 L455,140 L450,210 L420,260 L385,265 L355,230 L345,170 L350,130 Z" fill="rgba(34,197,94,0.09)" stroke="rgba(34,197,94,0.15)" strokeWidth="0.5" />
                {/* Middle East */}
                <path d="M460,100 L530,95 L545,125 L535,155 L490,160 L460,140 Z" fill="rgba(34,197,94,0.1)" stroke="rgba(34,197,94,0.2)" strokeWidth="0.5" />
                {/* Asia */}
                <path d="M540,40 L720,35 L760,70 L750,130 L700,155 L620,150 L560,130 L530,100 Z" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.14)" strokeWidth="0.5" />
                {/* India */}
                <path d="M590,155 L635,150 L650,185 L630,225 L600,225 L580,190 Z" fill="rgba(34,197,94,0.12)" stroke="rgba(34,197,94,0.22)" strokeWidth="0.5" />
                {/* Australia */}
                <path d="M690,230 L780,225 L800,270 L780,310 L720,315 L685,285 Z" fill="rgba(34,197,94,0.07)" stroke="rgba(34,197,94,0.12)" strokeWidth="0.5" />

                {/* Connection lines */}
                {mapLines.map(([x1p, y1p, x2p, y2p], i) => (
                  <line
                    key={i}
                    x1={(x1p / 100) * 900}
                    y1={(y1p / 100) * 420}
                    x2={(x2p / 100) * 900}
                    y2={(y2p / 100) * 420}
                    stroke="#4ade80"
                    strokeWidth="0.75"
                    strokeDasharray="4 6"
                    opacity="0.35"
                  />
                ))}

                {/* Map dots with labels */}
                {mapDots.map((d, i) => {
                  const cx = (d.x / 100) * 900;
                  const cy = (d.y / 100) * 420;
                  return (
                    <g key={i}>
                      <circle cx={cx} cy={cy} r="14" fill="rgba(74,222,128,0.05)" />
                      <circle cx={cx} cy={cy} r="6" fill="rgba(74,222,128,0.2)" />
                      <circle cx={cx} cy={cy} r="3" fill="#4ade80" opacity="0.9" />
                      <circle cx={cx} cy={cy} r="1.5" fill="#fff" />
                      <text
                        x={cx}
                        y={cy - 18}
                        textAnchor="middle"
                        fontSize="9"
                        fill="rgba(134,200,150,0.7)"
                        fontFamily="monospace"
                        letterSpacing="0.05em"
                      >
                        {d.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Bottom 3 cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1px",
                background: "rgba(34,197,94,0.08)",
              }}
            >
              {bottomCards.map((c) => (
                <div
                  key={c.title}
                  style={{
                    background: "#070f0b",
                    padding: "28px 24px",
                    borderTop: "1px solid rgba(34,197,94,0.12)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div style={{ fontSize: "22px" }}>{c.icon}</div>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "700",
                      color: "rgba(200,230,210,0.8)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {c.title}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "rgba(134,180,150,0.4)",
                      lineHeight: "1.7",
                    }}
                  >
                    {c.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}