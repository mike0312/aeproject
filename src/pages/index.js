import * as React from "react"

const sectionTitle = {
  fontSize: "2rem",
  fontWeight: 800,
  marginBottom: "0.75rem",
  letterSpacing: "-0.02em",
}

const cardStyle = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "20px",
  padding: "1.25rem",
  boxShadow: "0 12px 28px rgba(0,0,0,0.18)",
}

const statCard = {
  ...cardStyle,
  textAlign: "center",
  minWidth: "150px",
  flex: "1 1 160px",
}

const buttonPrimary = {
  display: "inline-block",
  padding: "0.9rem 1.2rem",
  borderRadius: "14px",
  background: "#4fd1c5",
  color: "#072120",
  textDecoration: "none",
  fontWeight: 800,
}

const buttonSecondary = {
  display: "inline-block",
  padding: "0.9rem 1.2rem",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.08)",
  color: "#f5f7fb",
  textDecoration: "none",
  fontWeight: 700,
  border: "1px solid rgba(255,255,255,0.12)",
}

const pageStyle = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #081120 0%, #101a2e 100%)",
  color: "#f5f7fb",
  fontFamily: "Inter, Arial, Helvetica, sans-serif",
}

const container = {
  width: "min(1120px, calc(100% - 2rem))",
  margin: "0 auto",
}

export default function IndexPage() {
  return (
    <main style={pageStyle}>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          backdropFilter: "blur(10px)",
          background: "rgba(8,17,32,0.88)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            ...container,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 0",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontWeight: 900, letterSpacing: "0.02em" }}>Alexis Elizondo</div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              color: "#c7d2e3",
              fontSize: "0.95rem",
            }}
          >
            <a href="#highlights">Highlights</a>
            <a href="#profile">Profile</a>
            <a href="#achievements">Achievements</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section style={{ ...container, padding: "4.5rem 0 3rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "0.35rem 0.75rem",
                borderRadius: "999px",
                color: "#4fd1c5",
                background: "rgba(79,209,197,0.1)",
                border: "1px solid rgba(79,209,197,0.2)",
                marginBottom: "1rem",
                fontSize: "0.9rem",
              }}
            >
              Player Profile
            </div>
            <h1
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4.8rem)",
                lineHeight: 1.02,
                margin: "0 0 1rem",
                letterSpacing: "-0.04em",
              }}
            >
              Alexis Elizondo
            </h1>
            <p style={{ color: "#c7d2e3", fontSize: "1.08rem", maxWidth: "42rem" }}>
              Midfielder / Forward • Competitive youth player focused on growth, discipline,
              and high-level development. This site is a single place for highlights,
              achievements, and recruiting-ready player information.
            </p>

            <div
              style={{
                display: "flex",
                gap: "0.85rem",
                flexWrap: "wrap",
                marginTop: "1.5rem",
              }}
            >
              <a href="#highlights" style={buttonPrimary}>
                Watch Highlights
              </a>
              <a href="#contact" style={buttonSecondary}>
                Contact
              </a>
            </div>
          </div>

          <div style={cardStyle}>
            <div
              style={{
                aspectRatio: "4 / 5",
                borderRadius: "18px",
                background:
                  "linear-gradient(135deg, rgba(79,209,197,0.16), rgba(246,196,83,0.12))",
                border: "1px dashed rgba(255,255,255,0.15)",
                display: "grid",
                placeItems: "center",
                color: "#c7d2e3",
                textAlign: "center",
                padding: "1rem",
              }}
            >
              Replace with Alexis action photo
            </div>
          </div>
        </div>
      </section>

      <section style={{ ...container, paddingBottom: "2rem" }}>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <div style={statCard}>
            <div style={{ color: "#9fb0c9", fontSize: "0.9rem" }}>Club</div>
            <div style={{ fontSize: "1.1rem", fontWeight: 800, marginTop: "0.35rem" }}>
              210 FC
            </div>
          </div>
          <div style={statCard}>
            <div style={{ color: "#9fb0c9", fontSize: "0.9rem" }}>Primary Position</div>
            <div style={{ fontSize: "1.1rem", fontWeight: 800, marginTop: "0.35rem" }}>
              Forward
            </div>
          </div>
          <div style={statCard}>
            <div style={{ color: "#9fb0c9", fontSize: "0.9rem" }}>Secondary Position</div>
            <div style={{ fontSize: "1.1rem", fontWeight: 800, marginTop: "0.35rem" }}>
              Left Winger
            </div>
          </div>
          <div style={statCard}>
            <div style={{ color: "#9fb0c9", fontSize: "0.9rem" }}>Graduation Year</div>
            <div style={{ fontSize: "1.1rem", fontWeight: 800, marginTop: "0.35rem" }}>
              2030
            </div>
          </div>
        </div>
      </section>

      <section id="highlights" style={{ ...container, padding: "3rem 0" }}>
        <h2 style={sectionTitle}>Highlights</h2>
        <p style={{ color: "#c7d2e3", maxWidth: "42rem", marginBottom: "1.5rem" }}>
          Use this section for her main highlight reel, match clips, and training videos. You can
          replace the placeholders below with embedded YouTube or Hudl links.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1rem",
          }}
        >
          {["Featured Highlight Reel", "Match Highlights", "Training Clips"].map((item) => (
            <div key={item} style={cardStyle}>
              <div
                style={{
                  aspectRatio: "16 / 9",
                  borderRadius: "16px",
                  background: "#12213b",
                  border: "1px dashed rgba(255,255,255,0.15)",
                  display: "grid",
                  placeItems: "center",
                  color: "#9fb0c9",
                  marginBottom: "1rem",
                }}
              >
                Video Placeholder
              </div>
              <div style={{ fontWeight: 800, marginBottom: "0.5rem" }}>{item}</div>
              <div style={{ color: "#c7d2e3", fontSize: "0.95rem" }}>
                Add a short description with the event, opponent, and what coaches should notice.
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="profile" style={{ ...container, padding: "3rem 0" }}>
        <h2 style={sectionTitle}>Player Profile</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem",
          }}
        >
          {[
            ["Name", "Alexis Elizondo"],
            ["Club Team", "210 FC"],
            ["Primary Position", "Forward"],
            ["Secondary Position", "Left Winger"],
            ["Preferred Foot", "Right/Left"],
            ["Jersey Number", "16"],
            ["Class Year", "2030"],
            ["Location", "San Antonio, Texas"],
          ].map(([label, value]) => (
            <div key={label} style={cardStyle}>
              <div style={{ color: "#9fb0c9", fontSize: "0.9rem" }}>{label}</div>
              <div style={{ fontWeight: 800, marginTop: "0.4rem", fontSize: "1.05rem" }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="achievements" style={{ ...container, padding: "3rem 0" }}>
        <h2 style={sectionTitle}>Achievements</h2>
        <div style={{ display: "grid", gap: "1rem" }}>
          {[
            "2025 – Add tournament, showcase, or academy achievement here.",
            "2025 – Add team milestone, camp selection, or player recognition here.",
            "2026 – Add new development highlight, showcase, or invite here.",
          ].map((item) => (
            <div key={item} style={cardStyle}>
              <div style={{ fontWeight: 700 }}>{item}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" style={{ ...container, padding: "3rem 0" }}>
        <h2 style={sectionTitle}>Gallery</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
          }}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} style={cardStyle}>
              <div
                style={{
                  aspectRatio: "1 / 1",
                  borderRadius: "16px",
                  background: "#13233d",
                  border: "1px dashed rgba(255,255,255,0.15)",
                  display: "grid",
                  placeItems: "center",
                  color: "#9fb0c9",
                }}
              >
                Photo {index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ ...container, padding: "3rem 0 5rem" }}>
        <div
          style={{
            ...cardStyle,
            background: "linear-gradient(135deg, rgba(79,209,197,0.14), rgba(246,196,83,0.09))",
          }}
        >
          <h2 style={{ ...sectionTitle, marginTop: 0 }}>Contact</h2>
          <p style={{ color: "#d9e2f0", maxWidth: "44rem" }}>
            Keep this section parent-managed. Add a recruiting email, selected social links, and
            highlight platforms like YouTube or Hudl. Avoid posting sensitive information.
          </p>
          <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", marginTop: "1rem" }}>
            <a href="mailto:michaelf.elizondo@gmail.com" style={buttonPrimary}>
              Email Parent / Coach Contact
            </a>
            <a href="https://instagram.com" style={buttonSecondary}>
              Instagram
            </a>
            <a href="https://youtube.com" style={buttonSecondary}>
              YouTube
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
