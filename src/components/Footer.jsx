import { footerLinks } from "../data";

export default function Footer() {
  return (
    <>
      <style>{`
        .footer{
          background:#111;
          color:#fff;
          font-family:'Inter',sans-serif;
        }

        .footer-link{
          color:rgba(255,255,255,.65);
          text-decoration:none;
          transition:.3s ease;
          display:block;
          margin-bottom:.8rem;
          font-size:.95rem;
        }

        .footer-link:hover{
          color:#fff;
          transform:translateX(4px);
        }

        .footer-title{
          margin-bottom:1.2rem;
          font-size:1rem;
          font-weight:700;
          letter-spacing:.05em;
        }

        @media (max-width:900px){

          .footer{
            padding:3rem 2rem !important;
            flex-direction:column;
            align-items:center;
            text-align:center;
            gap:2.5rem !important;
          }

          .footer-right{
            width:100%;
            justify-content:center;
            gap:3rem !important;
            flex-wrap:wrap;
          }

        }

        @media (max-width:600px){

          .footer{
            padding:2.5rem 1.3rem !important;
          }

          .footer-right{
            flex-direction:column;
            gap:2rem !important;
          }

          .footer-section{
            width:100%;
          }

          .footer-brand h2{
            font-size:1.5rem !important;
          }

          .footer-brand p{
            font-size:.85rem !important;
          }

        }
      `}</style>

      <footer
        className="footer"
        style={{
          padding: "3rem 4rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "4rem",
          flexWrap: "wrap",
        }}
      >
        {/* Brand */}

        <div className="footer-brand">
          <h2
            style={{
              margin: 0,
              fontSize: "1.8rem",
              letterSpacing: ".08em",
              color: "#fff",
            }}
          >
            ✦ CHARUL JAIN
          </h2>

          <p
            style={{
              marginTop: "1rem",
              maxWidth: "320px",
              lineHeight: 1.8,
              color: "rgba(255,255,255,.6)",
            }}
          >
            Full Stack Developer passionate about building modern web
            applications and solving challenging DSA problems.
          </p>

          <p
            style={{
              marginTop: "1.5rem",
              color: "rgba(255,255,255,.45)",
              fontSize: ".9rem",
            }}
          >
            © {new Date().getFullYear()} Charul Jain. All Rights Reserved.
          </p>
        </div>

        {/* Links */}

        <div
          className="footer-right"
          style={{
            display: "flex",
            gap: "5rem",
          }}
        >
          {footerLinks.map((section) => (
            <div
              key={section.title}
              className="footer-section"
            >
              <h4 className="footer-title">
                {section.title}
              </h4>

              {section.links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="footer-link"
                  target={
                    link.href.startsWith("http")
                      ? "_blank"
                      : "_self"
                  }
                  rel="noreferrer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          ))}
        </div>
      </footer>
    </>
  );
}