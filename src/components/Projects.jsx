import { skills, projects } from "../data";

import {
  FaRobot,
  FaSpa,
  FaWallet,
  FaLaughBeam,
  FaCode,
} from "react-icons/fa";

const projectIcons = {
  SakshatAI: <FaRobot size={60} />,
  BitSnipAI: <FaCode size={60} />,
  Bellezaa: <FaSpa size={60} />,
  Finova: <FaWallet size={60} />,
  "Meme Forge Pro": <FaLaughBeam size={60} />,
};

const tag = (t) => (
  <span
    key={t}
    style={{
      fontSize: "0.7rem",
      fontWeight: 600,
      letterSpacing: "0.08em",
      padding: "0.35rem 0.7rem",
      borderRadius: "20px",
      background: "#f9f0f0",
      color: "#8B0000",
      whiteSpace: "nowrap",
    }}
  >
    {t}
  </span>
);

export default function Projects() {
  return (
    <>
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1100px;
          margin: auto;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .card {
          border: 1px solid #e8e8e8;
          transition: 0.3s;
        }

        .card:hover {
          border-color: #8B0000;
          transform: translateY(-6px);
        }

        @media (max-width: 992px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .skills-section,
          .projects-section {
            padding: 4rem 1.5rem !important;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .project-actions {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 1rem;
          }

          .action-buttons {
            width: 100%;
          }

          .action-buttons a {
            flex: 1;
            text-align: center;
          }

          .thumbnail {
            height: 170px !important;
          }
        }
      `}</style>

      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="skills-section"
        style={{
          padding: "6rem 4rem",
          background: "#fff",
          fontFamily: "'Inter',sans-serif",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div
            style={{
              fontSize: ".75rem",
              fontWeight: 700,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "#8B0000",
              marginBottom: "1rem",
            }}
          >
            What I Bring
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(2rem,4vw,3rem)",
            }}
          >
            Skills & Technologies
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map((s) => (
            <div
              key={s.name}
              className="card"
              style={{
                padding: "2rem",
                background: "#fff",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  marginBottom: "1rem",
                }}
              >
                {s.icon}
              </div>

              <h3
                style={{
                  marginBottom: ".7rem",
                  color: "#222",
                }}
              >
                {s.name}
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: 1.7,
                  fontSize: ".95rem",
                }}
              >
                {s.desc}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: ".6rem",
                  marginTop: "1.3rem",
                }}
              >
                {s.tags.map(tag)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="projects-section"
        style={{
          padding: "6rem 4rem",
          background: "#fafafa",
          fontFamily: "'Inter',sans-serif",
        }}
      >
        <div style={{ marginBottom: "4rem" }}>
          <div
            style={{
              fontSize: ".75rem",
              fontWeight: 700,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "#8B0000",
              marginBottom: "1rem",
            }}
          >
            My Work
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(2rem,4vw,3rem)",
            }}
          >
            Featured Projects
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <div
              key={p.title}
              className="card"
              style={{
                background: "#fff",
                overflow: "hidden",
              }}
            >
              {/* ================= THUMBNAIL ================= */}

              <div
                className="thumbnail"
                style={{
                  height: 220,
                  background: p.color,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "18px",
                    left: "18px",
                    background: "rgba(255,255,255,.15)",
                    color: "#fff",
                    padding: ".35rem .8rem",
                    fontSize: ".7rem",
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                  }}
                >
                  {p.type}
                </span>

                <div
                  style={{
                    color: "#fff",
                    opacity: 0.95,
                  }}
                >
                  {projectIcons[p.title]}
                </div>
              </div>

              {/* ================= BODY ================= */}

              <div style={{ padding: "1.8rem" }}>
                <h3
                  style={{
                    marginBottom: ".8rem",
                    color: "#222",
                  }}
                >
                  {p.title}
                </h3>

                <p
                  style={{
                    color: "#666",
                    lineHeight: 1.7,
                    marginBottom: "1.3rem",
                  }}
                >
                  {p.desc}
                </p>

                {/* Tags */}

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: ".6rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {p.tags.map(tag)}
                </div>

                {/* Buttons */}

                <div
                  className="project-actions"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="action-buttons"
                    style={{
                      display: "flex",
                      gap: ".8rem",
                    }}
                  >
                    {/* Live Demo */}

                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        background: "#8B0000",
                        color: "#fff",
                        padding: ".7rem 1.2rem",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: ".85rem",
                      }}
                    >
                      Live Demo
                    </a>

                    {/* GitHub */}

                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        border: "1px solid #8B0000",
                        color: "#8B0000",
                        padding: ".7rem 1.2rem",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: ".85rem",
                      }}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}