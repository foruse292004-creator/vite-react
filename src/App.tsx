import React, { useState, ChangeEvent } from "react";
import "./App.css";

export default function App() {
  const [msg, setMsg] = useState<string>(
    "Hello Derashree Onlinne Works, I need help with "
  );

  const phone: string = "91XXXXXXXXXX"; // replace with your WhatsApp number
  const wa: string = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

  const handleMsgChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  };

  return (
    <div className="container">
      {/* NAV */}
      <nav className="nav">
        <div className="brand">
          <span className="logo">💠</span>
          <div>
            <div>Derashree Onlinne Works</div>
            <div className="muted" style={{ fontSize: 12 }}>
              Halvad • CSC & Digital Services
            </div>
          </div>
        </div>
        <div className="links">
          <a className="btn" href="#services">
            Services
          </a>
          <a className="btn" href="#updates">
            Updates
          </a>
          <a className="btn primary" href="#contact">
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="card">
          <span className="badge">One-stop digital help in Halvad</span>
          <h1>
            Government Forms, CSC (PAN), Bills, <br />
            Scholarships, Xerox & Lamination
          </h1>
          <p className="muted">
            Fast, friendly and accurate service. Visit our center or message us
            on WhatsApp for quick help.
          </p>
          <div className="cta-row">
            <a
              className="btn whatsapp"
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Chat on WhatsApp
            </a>
            <a className="btn" href="tel:+91XXXXXXXXXX">
              📞 Call Now
            </a>
            <a
              className="btn"
              href="https://www.instagram.com/derashree_online_work/"
              target="_blank"
              rel="noopener noreferrer"
            >
              📷 Instagram
            </a>
            <a
              className="btn"
              href="https://www.youtube.com/@YOUR_YOUTUBE_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
            >
              ▶️ YouTube
            </a>
          </div>
        </div>
        <div className="grid gallery">
          <img
            className="thumb"
            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1200&auto=format&fit=crop"
            alt="Counter & customer help"
          />
          <img
            className="thumb"
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop"
            alt="Documents & forms"
          />
          <img
            className="thumb"
            src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop"
            alt="Digital services"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2>Our Services</h2>
        <div className="grid services">
          <div className="service">
            <h3>Government Form Fill-up</h3>
            <p className="muted">
              Applications, certificates & documentation with guidance.
            </p>
          </div>
          <div className="service">
            <h3>Scholarship Forms</h3>
            <p className="muted">
              Eligibility check, documents checklist, and on-time submission.
            </p>
          </div>
          <div className="service">
            <h3>CSC — PAN Apply/Update</h3>
            <p className="muted">Fast PAN services through our CSC center.</p>
          </div>
          <div className="service">
            <h3>Bill Payments</h3>
            <p className="muted">
              Gas, electricity, mobile recharge — done in minutes.
            </p>
          </div>
          <div className="service">
            <h3>Xerox & Lamination</h3>
            <p className="muted">
              High-quality photocopy and document lamination.
            </p>
          </div>
          <div className="service">
            <h3>More Help</h3>
            <p className="muted">
              Aadhaar linking, KYC, and other e-services. Ask us on WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* UPDATES */}
      <section id="updates" className="section">
        <h2>DerashreeExplained — Updates & Guides</h2>
        <p className="muted">
          Check our Instagram & YouTube for short explainers on schemes,
          scholarships, and how-tos.
        </p>
        <div className="cta-row">
          <a
            className="btn"
            href="https://www.instagram.com/derashree_online_work/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow on Instagram
          </a>
          <a
            className="btn"
            href="https://www.youtube.com/@YOUR_YOUTUBE_HANDLE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on YouTube
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Find Us</h2>
        <iframe
          className="embed"
          loading="lazy"
          title="Google Map"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.134081575228!2d71.1800!3d23.0150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958bb8f6b1c8db1%3A0x0000000000000000!2sHalvad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v0000000000000"
        ></iframe>
        <div className="cta-row">
          <a
            className="btn"
            href="https://maps.google.com/?q=Derashree%20Onlinne%20Works%2C%20Halvad"
            target="_blank"
            rel="noopener noreferrer"
          >
            🧭 Open in Google Maps
          </a>
          <a
            className="btn whatsapp"
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>© {new Date().getFullYear()} Derashree Onlinne Works • Halvad</div>
        <div className="links">
          <a href="mailto:youremail@example.com" className="muted">
            youremail@example.com
          </a>
          <span className="muted">•</span>
          <a
            href="https://www.instagram.com/derashree_online_work/"
            className="muted"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <span className="muted">•</span>
          <a
            href="https://www.youtube.com/@YOUR_YOUTUBE_HANDLE"
            className="muted"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </div>
      </footer>

      {/* Floating WhatsApp Widget */}
      <div style={{ position: "fixed", right: 16, bottom: 16 }}>
        <div
          style={{
            background: "#101735",
            border: "1px solid rgba(255,255,255,.14)",
            padding: 12,
            borderRadius: 14,
            color: "#e7ecff",
            boxShadow: "0 10px 24px rgba(0,0,0,.35)",
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: 6 }}>Quick WhatsApp</div>
          <input
            value={msg}
            onChange={handleMsgChange}
            placeholder="Type your query..."
            style={{
              width: 260,
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,.18)",
              background: "#0d1430",
              color: "#e7ecff",
            }}
          />
          <div style={{ height: 8 }} />
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="btn whatsapp"
            style={{ display: "inline-flex" }}
          >
            💬 Send
          </a>
        </div>
      </div>
    </div>
  );
}
