import {
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaLinkedin,
  FaGithub,
  FaDownload,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodechef,
} from "react-icons/si";

import { heroSkills } from "../data";

const platformIcons = {
  LeetCode: <SiLeetcode />,
  GeeksforGeeks: <SiGeeksforgeeks />,
  CodeChef: <SiCodechef />,
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedin />,
};

export default function Hero() {
  return (
    <>
      <style>{`
        @media (max-width: 768px){

          .hero-content{
            grid-template-columns:1fr !important;
            gap:3rem !important;
            text-align:center;
          }

          .hero-right{
            align-items:center !important;
          }

          .hero-buttons{
            justify-content:center;
          }

        }

        .hero-btn{
          transition:.3s;
        }

        .hero-btn:hover{
          transform:translateY(-3px);
        }

      `}</style>

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "7rem clamp(1.2rem,4vw,4rem)",
          position: "relative",
          overflow: "hidden",
          background: "#fff",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Background */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            fontSize: "min(26vw,280px)",
            fontWeight: 900,
            color: "rgba(139,0,0,.04)",
            pointerEvents: "none",
            userSelect: "none",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          CJ
        </div>

        <div
          className="hero-content"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "4rem",
            alignItems: "center",
            width: "100%",
            maxWidth: "1200px",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* LEFT */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: ".6rem",
                marginBottom: "1rem",
                color: "#666",
                fontWeight: 600,
                fontSize: ".85rem",
                textTransform: "uppercase",
                letterSpacing: ".18em",
                flexWrap: "wrap",
              }}
            >
              <FaLaptopCode color="#8B0000" />
              Web Developer · DSA Enthusiast · 3rd Year B.Tech
            </div>

            <h1
              style={{
                fontSize: "clamp(3rem,9vw,6rem)",
                lineHeight: ".95",
                marginBottom: "1.5rem",
                fontWeight: 900,
                color: "#8B0000",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              CHARUL
              <br />
              JAIN
            </h1>

            <p
              style={{
                maxWidth: "480px",
                color: "#555",
                fontSize: "1.08rem",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              Building fast, modern web experiences while solving challenging
              DSA problems every day. Passionate about creating elegant
              interfaces and scalable applications.
            </p>

                      {/* BUTTONS */}
          <div
            className="hero-buttons"
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            {/* Hire Me */}
            <a
              href="#contact"
              className="hero-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: ".7rem",
                background: "#8B0000",
                color: "#fff",
                textDecoration: "none",
                padding: "0.95rem 1.7rem",
                borderRadius: "8px",
                fontWeight: 700,
              }}
            >
              Hire Me
              <FaArrowRight />
            </a>

            {/* Resume */}
            <a
              href="/charul_final_resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: ".7rem",
                border: "2px solid #8B0000",
                color: "#8B0000",
                textDecoration: "none",
                padding: "0.95rem 1.7rem",
                borderRadius: "8px",
                fontWeight: 700,
              }}
            >
              <FaDownload />
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="hero-right"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "1rem",
          }}
        >
          <div
            style={{
              fontSize: ".75rem",
              letterSpacing: ".18em",
              color: "#888",
              textTransform: "uppercase",
            }}
          >
            What I Do
          </div>

          {heroSkills.map((skill, index) => (
            <div
              key={skill}
              style={{
                display: "flex",
                alignItems: "center",
                gap: ".8rem",
                fontSize: "1rem",
                color: index === 0 ? "#8B0000" : "#999",
                borderRight:
                  index === 0
                    ? "3px solid #8B0000"
                    : "3px solid transparent",
                paddingRight: "1rem",
              }}
            >
              <FaCode
                size={14}
                color={index === 0 ? "#8B0000" : "#bbb"}
              />
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Decoration */}
      <div
        style={{
          position: "absolute",
          right: "-40px",
          bottom: "-40px",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,0,0,.08), transparent 70%)",
        }}
      />
    </section>

    {/* PLATFORM STRIP */}
    <div
      style={{
        background: "#8B0000",
        padding: "1.5rem clamp(1rem,4vw,4rem)",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <div
        style={{
          color: "rgba(255,255,255,.6)",
          textTransform: "uppercase",
          letterSpacing: ".15em",
          fontSize: ".75rem",
          fontWeight: 700,
        }}
      >
        Problem Solved On
      </div>

      {Object.entries(platformIcons).map(([name, icon]) => (
        <div
          key={name}
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".6rem",
            color: "rgba(255,255,255,.85)",
            fontWeight: 600,
            fontSize: ".95rem",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ fontSize: "1.3rem" }}>{icon}</span>
          {name}
        </div>
      ))}
    </div>
  </>
);
}