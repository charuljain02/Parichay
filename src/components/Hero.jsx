import { useEffect, useState } from "react";

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
  /* ================================
     WHAT I DO ANIMATION
  ================================= */

  const [activeSkill, setActiveSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % heroSkills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        /* ================================
           RESPONSIVE
        ================================= */

        @media (max-width: 768px) {

          .hero-content {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            text-align: center;
          }

          .hero-right {
            align-items: center !important;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-intro {
            justify-content: center !important;
            text-align: center;
          }

          .hero-description {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .hero-title {
            font-size: clamp(3.5rem, 15vw, 5rem) !important;
          }

          .platform-strip {
            gap: 1.2rem !important;
          }
        }

        @media (max-width: 480px) {

          .hero-section {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }

          .hero-content {
            grid-template-columns: 1fr !important;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
            width: 100%;
          }

          .hero-btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }

          .hero-intro {
            font-size: .72rem !important;
            letter-spacing: .12em !important;
          }

          .hero-title {
            font-size: clamp(3rem, 18vw, 4rem) !important;
          }

          .hero-description {
            font-size: .95rem !important;
          }

          .platform-strip {
            gap: 1rem !important;
          }

        }

        /* ================================
           BUTTON ANIMATION
        ================================= */

        .hero-btn {
          transition:
            transform .3s ease,
            box-shadow .3s ease,
            background .3s ease,
            color .3s ease;
        }

        .hero-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(139, 0, 0, .18);
        }

        .hire-btn:hover {
          background: #650000 !important;
        }

        .resume-btn:hover {
          background: #8B0000 !important;
          color: #fff !important;
        }

        /* ================================
           WHAT I DO ANIMATION
        ================================= */

        .hero-skill {
          transition:
            color .5s ease,
            transform .5s ease,
            border-color .5s ease,
            opacity .5s ease;
        }

        .hero-skill:hover {
          transform: translateX(-5px);
        }

        .skill-icon {
          transition:
            color .5s ease,
            transform .5s ease;
        }

        /* ================================
           PLATFORM HOVER
        ================================= */

        .platform-item {
          transition: transform .3s ease;
        }

        .platform-item:hover {
          transform: translateY(-3px);
        }

        .platform-icon {
          transition: transform .3s ease;
        }

        .platform-item:hover .platform-icon {
          transform: scale(1.15);
        }

      `}</style>

      {/* ================================
          HERO SECTION
      ================================= */}

      <section
        className="hero-section"
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

        {/* ================================
            BACKGROUND
        ================================= */}

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

        {/* ================================
            MAIN CONTENT
        ================================= */}

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

          {/* ================================
              LEFT
          ================================= */}

          <div>

            {/* INTRO */}

            <div
              className="hero-intro"
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

            {/* NAME */}

            <h1
              className="hero-title"
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

            {/* DESCRIPTION */}

            <p
              className="hero-description"
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

            {/* ================================
                BUTTONS
            ================================= */}

            <div
              className="hero-buttons"
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >

              {/* HIRE ME */}

              <a
                href="#contact"
                className="hero-btn hire-btn"
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

              {/* RESUME */}

              <a
                href="/charul_final_resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn resume-btn"
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

          {/* ================================
              RIGHT
          ================================= */}

          <div
            className="hero-right"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "1rem",
            }}
          >

            {/* TITLE */}

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

            {/* ================================
                ANIMATED SKILLS
            ================================= */}

            {heroSkills.map((skill, index) => {

              const isActive = index === activeSkill;

              return (
                <div
                  key={skill}
                  className="hero-skill"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".8rem",
                    fontSize: "1rem",

                    /* RED ACTIVE ITEM */

                    color: isActive
                      ? "#8B0000"
                      : "#999",

                    /* RED BORDER ACTIVE ITEM */

                    borderRight: isActive
                      ? "3px solid #8B0000"
                      : "3px solid transparent",

                    paddingRight: "1rem",

                    /* SMOOTH MOVEMENT */

                    transform: isActive
                      ? "translateX(-5px)"
                      : "translateX(0)",

                    fontWeight: isActive
                      ? 600
                      : 400,

                    opacity: isActive
                      ? 1
                      : 0.9,
                  }}
                >

                  {/* CODE ICON */}

                  <FaCode
                    className="skill-icon"
                    size={14}
                    color={
                      isActive
                        ? "#8B0000"
                        : "#bbb"
                    }
                    style={{
                      transform: isActive
                        ? "scale(1.2)"
                        : "scale(1)",
                    }}
                  />

                  {skill}

                </div>
              );
            })}

          </div>
        </div>

        {/* ================================
            DECORATION
        ================================= */}

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
            pointerEvents: "none",
          }}
        />

      </section>

      {/* ================================
          PLATFORM STRIP
      ================================= */}

      <div
        className="platform-strip"
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

        {/* TITLE */}

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

        {/* PLATFORMS */}

        {Object.entries(platformIcons).map(([name, icon]) => (

          <div
            key={name}
            className="platform-item"
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

            <span
              className="platform-icon"
              style={{
                fontSize: "1.3rem",
                display: "flex",
              }}
            >
              {icon}
            </span>

            {name}

          </div>

        ))}

      </div>
    </>
  );
}