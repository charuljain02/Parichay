import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { contactInfo } from "../data";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
     <style>{`
*{
  box-sizing:border-box;
}

.contact-section{
  width:100%;
}

.contact-input::placeholder{
  color:rgba(255,255,255,.55);
}

.contact-input:focus{
  border-color:#fff !important;
}

.send-btn{
  transition:.3s;
}

.send-btn:hover{
  background:#f4f4f4 !important;
}

.contact-link:hover{
  opacity:.8;
}

/* ---------- Laptop ---------- */

@media (max-width:1200px){

.contact-section{
padding:6rem 3rem !important;
gap:3rem !important;
}

}

/* ---------- Tablet ---------- */

@media (max-width:900px){

.contact-section{
grid-template-columns:1fr !important;
padding:5rem 2rem !important;
gap:3rem !important;
}

}

/* ---------- Mobile ---------- */

@media (max-width:600px){

.contact-section{

padding:4rem 1.2rem !important;

}

.contact-heading{

font-size:2rem !important;

}

.contact-desc{

font-size:.95rem !important;

}

.contact-icon{

width:36px !important;

height:36px !important;

}

.contact-input{

padding:.9rem !important;

font-size:.9rem !important;

}

.send-btn{

width:100%;

padding:1rem !important;

}

}

`}</style>
    

      <section
        id="contact"
        className="contact-section"
        style={{
          padding: "7rem 4rem",
          background: "#8B0000",
          color: "#fff",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Left Side */}
        <div>
          <div
            style={{
              fontSize: ".75rem",
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,.5)",
              marginBottom: "1rem",
              fontWeight: 600,
            }}
          >
            Let's Connect
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem,3vw,3rem)",
              fontFamily: "'Playfair Display', serif",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
            }}
          >
            Got a project or opportunity?
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,.75)",
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}
          >
            I'm actively looking for internships, collaborations and exciting
            projects. Let's build something amazing together.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.value}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,.15)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Icon size={18} />
                  </div>

                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "#fff",
                        textDecoration: "none",
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side */}
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <input
            className="contact-input"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            style={inputStyle}
          />

          <input
            className="contact-input"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            style={inputStyle}
          />

          <input
            className="contact-input"
            type="text"
            name="title"
            placeholder="Subject"
            required
            style={inputStyle}
          />

          <textarea
            className="contact-input"
            name="message"
            rows={6}
            placeholder="Tell me about your project..."
            required
            style={{
              ...inputStyle,
              resize: "vertical",
            }}
          />

          <button
            type="submit"
            disabled={loading}
            className="send-btn"
            style={{
              background: "#fff",
              color: "#8B0000",
              padding: "1rem",
              border: "none",
              cursor: loading ? "not-allowed" : "pointer",
              fontWeight: 700,
              fontSize: ".9rem",
              letterSpacing: ".08em",
              transition: ".3s",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "SENDING..." : "SEND MESSAGE →"}
          </button>
        </form>
      </section>
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "1rem",
  background: "rgba(255,255,255,.1)",
  border: "1px solid rgba(255,255,255,.2)",
  color: "#fff",
  outline: "none",
  borderRadius: "4px",
  fontFamily: "'Inter', sans-serif",
  fontSize: ".95rem",
};