import { useState, useEffect } from "react";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../data";

export default function Navbar() {
  const [mobile, setMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const resize = () => {
      setMobile(window.innerWidth < 768);

      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: mobile ? "1rem 1.2rem" : "1.2rem 4rem",
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #e8e8e8",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".6rem",
            color: "#8B0000",
            fontWeight: 700,
            letterSpacing: ".15em",
            fontSize: mobile ? ".9rem" : "1rem",
          }}
        >
          <div style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "0.15em", color: "#8B0000" }}>
        ✦ CHARUL JAIN
      </div>
        </div>

        {/* Desktop Links */}
        {!mobile && (
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              fontSize: ".85rem",
              fontWeight: 500,
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  color: "#666",
                  textDecoration: "none",
                  transition: ".3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#8B0000")}
                onMouseLeave={(e) => (e.target.style.color = "#666")}
              >
                {link}
              </a>
            ))}
          </div>
        )}

        {/* Right Side */}
        {!mobile ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".45rem",
              border: "1px solid #8B0000",
              borderRadius: "30px",
              padding: ".35rem .9rem",
              color: "#8B0000",
              fontSize: ".8rem",
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22c55e",
                animation: "pulse 1.5s infinite",
              }}
            />
            Open to Work
          </div>
        ) : (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#8B0000",
              fontSize: "1.3rem",
            }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {mobile && menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: 0,
            right: 0,
            background: "#fff",
            borderBottom: "1px solid #eee",
            boxShadow: "0 10px 25px rgba(0,0,0,.05)",
            zIndex: 99,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "1rem 1.5rem",
                textDecoration: "none",
                color: "#555",
                fontWeight: 500,
                borderBottom: "1px solid #f5f5f5",
              }}
            >
              {link}
            </a>
          ))}

          <div
            style={{
              padding: "1rem 1.5rem",
              color: "#8B0000",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: ".5rem",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22c55e",
              }}
            />
            Open to Work
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse{
          0%,100%{
            opacity:1;
            transform:scale(1);
          }
          50%{
            opacity:.45;
            transform:scale(.8);
          }
        }
      `}</style>
    </>
  );
}
