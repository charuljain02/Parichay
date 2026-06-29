import { stats } from "../data";

export default function About() {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .about-section{
            grid-template-columns:1fr !important;
            gap:3rem !important;
            padding:4rem 1.5rem !important;
          }

          .about-stats{
            grid-template-columns:1fr 1fr !important;
            gap:1rem !important;
          }

          .about-image{
            height:280px !important;
          }

          .about-heading{
            font-size:2rem !important;
          }

          .about-cj{
            font-size:4.5rem !important;
          }
        }

        @media (max-width:480px){
          .about-section{
            padding:3rem 1.2rem !important;
          }

          .about-stats{
            grid-template-columns:1fr !important;
          }

          .about-image{
            height:240px !important;
          }

          .about-heading{
            font-size:1.8rem !important;
          }

          .about-cj{
            font-size:3.8rem !important;
          }
        }
      `}</style>

      <section
        id="about"
        className="about-section"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          padding: "6rem 4rem",
          background: "#fafafa",
          alignItems: "center",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Left */}
        <div>
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#8B0000",
              marginBottom: "1rem",
            }}
          >
            About Me
          </div>

          <h2
            className="about-heading"
            style={{
              fontSize: "clamp(2rem,3.5vw,3rem)",
              fontWeight: 700,
              fontFamily: "'Playfair Display', serif",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
              color: "#1a1a1a",
            }}
          >
            A developer who loves both code and logic
          </h2>

         <p
  style={{
    fontSize: "1rem",
    lineHeight: 1.9,
    color: "#555",
    marginBottom: "1.5rem",
  }}
>
  I'm <strong style={{ color: "#8B0000" }}>Charul Jain</strong>, a passionate
  third-year B.Tech Computer Science student focused on building modern,
  responsive web applications and writing clean, efficient code. I enjoy
  transforming ideas into user-friendly digital experiences while continuously
  improving my problem-solving skills through Data Structures and Algorithms.
</p>

<p
  style={{
    fontSize: "1rem",
    lineHeight: 1.9,
    color: "#555",
    marginBottom: "2rem",
  }}
>
  Currently exploring the <strong>MERN Stack</strong>, React, Node.js, Express,
  and MongoDB, I'm always eager to learn new technologies and work on projects
  that create real-world impact. My goal is to contribute to innovative teams,
  build scalable software, and grow as a full-stack developer.
</p>

          <div
            className="about-stats"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
              marginTop: "2rem",
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  borderLeft: "3px solid #8B0000",
                  paddingLeft: "1rem",
                }}
              >
                <div
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: 700,
                    fontFamily: "'Playfair Display', serif",
                    color: "#8B0000",
                  }}
                >
                  {s.num}
                </div>

                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "#666",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
{/* Right */}
<div
  className="about-image"
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    minHeight: "450px",
  }}
>
  {/* Background Circle */}
  <div
    style={{
      position: "absolute",
      width: "330px",
      height: "330px",
      borderRadius: "50%",
      background:
        "linear-gradient(135deg, rgba(139,0,0,.12), rgba(139,0,0,.02))",
      zIndex: 0,
    }}
  />

  {/* Decorative Ring */}
  <div
    style={{
      position: "absolute",
      width: "360px",
      height: "360px",
      borderRadius: "50%",
      border: "2px dashed rgba(139,0,0,.18)",
      animation: "spin 25s linear infinite",
      zIndex: 0,
    }}
  />

  {/* Profile Image */}
  <img
    src="/image.png"
    alt="Charul Jain"
    style={{
      width: "290px",
      height: "320px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "8px solid #fff",
      boxShadow: "0 25px 60px rgba(0,0,0,.18)",
      zIndex: 2,
      transition: ".35s",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.04)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";
    }}
  />

  {/* Experience Card */}
  <div
    style={{
      position: "absolute",
      right: "5%",
      bottom: "12%",
      background: "#fff",
      padding: "16px 22px",
      borderRadius: "16px",
      boxShadow: "0 15px 35px rgba(0,0,0,.12)",
      zIndex: 3,
    }}
  >
    <div
      style={{
        fontSize: "1.6rem",
        fontWeight: "700",
        color: "#8B0000",
      }}
    >
      3rd Year
    </div>

    <div
      style={{
        color: "#666",
        fontSize: ".9rem",
      }}
    >
      B.Tech CSE
    </div>
  </div>

  {/* Floating Badge */}
  <div
    style={{
      position: "absolute",
      left: "6%",
      top: "12%",
      background: "#8B0000",
      color: "#fff",
      padding: "12px 18px",
      borderRadius: "999px",
      fontWeight: "600",
      boxShadow: "0 12px 30px rgba(139,0,0,.3)",
      zIndex: 3,
    }}
  >
    Full Stack Developer
  </div>
</div>
            
       
      </section>
    </>
          );
}