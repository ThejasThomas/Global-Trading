import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NAV_LINKS = [ "About", "Services", "Sectors"];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();

const user = JSON.parse(localStorage.getItem("user") || "{}");
const token = localStorage.getItem("token");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleLogout = () => {
  toast(
    ({ closeToast }) => (
      <div className="flex flex-col gap-3">
        <p className="text-sm text-white"> ⚠️ Are you sure you want to logout?</p>

        <div className="flex gap-3 justify-end">
          <button
            onClick={() => {
              closeToast();
            }}
            className="px-3 py-1 text-xs border border-gray-500 text-gray-300 rounded"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              closeToast();
              navigate("/login");
            }}
            className="px-3 py-1 text-xs border border-red-500 text-red-400 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    ),
    {
      autoClose: false,
      closeOnClick: false,
      draggable: false,
    }
  );
};

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
            {token && (
  <span className="text-green-400 text-xs ml-2">
    {user.name || "User"}
  </span>
)}
          </div>
        </div>

        {/* ── Desktop Links ── */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
  <a
    key={link}
    href={`#${link.toLowerCase()}`}
    className="text-green-300/55 hover:text-green-400 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-200"
  >
    {link}
  </a>
))}
        </div>

        <div className="hidden md:flex items-center gap-4">
  
  {/* ADMIN */}
  {token && user.role === "admin" && (
    <button
      onClick={() => navigate("/admin/dashboard")}
      className="border border-green-500/40 text-green-400 text-[10px] px-4 py-2"
    >
      Dashboard
    </button>
  )}

  {/* USER */}
  {token && user.role === "user" && (
    <button
      onClick={() => navigate("/home")}
      className="border border-green-500/40 text-green-400 text-[10px] px-4 py-2"
    >
      Home
    </button>
  )}

  {/* LOGOUT */}
  {token && (
    <button
      onClick={handleLogout}
      className="border border-red-500/40 text-red-400 text-[10px] px-4 py-2"
    >
      Logout
    </button>
  )}

  {/* NOT LOGGED */}
  {!token && (
    <button
      onClick={() => navigate("/login")}
      className="border border-green-500/40 text-green-400 text-[10px] px-4 py-2"
    >
      Login
    </button>
  )}
</div>

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
          {/* USER */}
{token && user.role === "user" && (
  <button
    onClick={() => navigate("/home")}
    className="border border-green-500/40 text-green-400 text-[10px] px-4 py-2 w-fit"
  >
    Home
  </button>
)}

{/* ADMIN */}
{token && user.role === "admin" && (
  <button
    onClick={() => navigate("/admin/dashboard")}
    className="border border-green-500/40 text-green-400 text-[10px] px-4 py-2 w-fit"
  >
    Dashboard
  </button>
)}

{/* LOGOUT */}
{token && (
  <button
    onClick={handleLogout}
    className="border border-red-500/40 text-red-400 text-[10px] px-4 py-2 w-fit"
  >
    Logout
  </button>
)}

{/* LOGIN */}
{!token && (
  <button
    onClick={() => navigate("/login")}
    className="border border-green-500/40 text-green-400 text-[10px] px-4 py-2 w-fit"
  >
    Login
  </button>
)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;