import { useState, useEffect } from "react";
import sofiaPhoto from "./assets/sofia.jpg";
import {
  brand, hero, trust, problem, about, method,
  services, topics, testimonials, experience, faqs, finalCta, nav,
} from "./data/siteData";

const pillarIcons = {
  target: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 13.5H4.5A1.5 1.5 0 0 1 3 12V5.5A1.5 1.5 0 0 1 4.5 4h10A1.5 1.5 0 0 1 16 5.5V7" />
      <path d="M9.5 10h10A1.5 1.5 0 0 1 21 11.5V18a1.5 1.5 0 0 1-1.5 1.5h-3V22l-3.5-2.5h-3.5A1.5 1.5 0 0 1 8 18v-6.5A1.5 1.5 0 0 1 9.5 10Z" />
    </svg>
  ),
  balance: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18" />
      <path d="M6 7h12" />
      <path d="M6 7l-3 6a3 3 0 0 0 6 0Z" />
      <path d="M18 7l-3 6a3 3 0 0 0 6 0Z" />
      <path d="M8 21h8" />
    </svg>
  ),
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  // Nav scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reveal-on-scroll
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* NAV */}
      <nav id="nav" className={scrolled ? "scrolled" : ""}>
        <div className="nav-inner">
          <div className="nav-logo"><span className="dot" />{brand.name}</div>
          <div className={"nav-links" + (menuOpen ? " open" : "")}>
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={closeMenu}>{n.label}</a>
            ))}
            <a href={brand.calendly} target="_blank" rel="noreferrer" className="nav-cta" onClick={closeMenu}>Agendar llamada</a>
          </div>
          <button
            className="nav-toggle"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero-circle c1" />
        <div className="hero-circle c2" />
        <div className="wrap hero-inner">
          <div>
            <span className="eyebrow">{hero.eyebrow}</span>
            <h1>
              {hero.titleParts[0]}<em>{hero.titleParts[1]}</em>{hero.titleParts[2]}
              <em>{hero.titleParts[3]}</em>{hero.titleParts[4]}
            </h1>
            <p className="lead">{hero.lead}</p>
            <div className="hero-actions">
              <a href={brand.calendly} target="_blank" rel="noreferrer" className="btn btn-primary">Agendar una llamada</a>
              <a href="#servicios" className="btn btn-ghost">Ver cómo trabajo</a>
            </div>
          </div>
          <div className="hero-portrait">
            <div className="portrait-ring">
              <img src={sofiaPhoto} alt={`${brand.name}, ${brand.role}`} />
            </div>
          </div>
        </div>
      </header>

      {/* TRUST */}
      <div className="trust">
        <div className="wrap trust-inner">
          <span className="trust-label">{trust.label}</span>
          <div className="trust-names">
            {trust.names.map((n) => <span key={n}>{n}</span>)}
          </div>
        </div>
      </div>

      {/* PROBLEM */}
      <section className="problem">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">{problem.eyebrow}</span>
            <h2>{problem.title}</h2>
          </div>
          <div className="problem-grid">
            {problem.cards.map((text, i) => (
              <div className="problem-card reveal" key={i}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="sobre-mi">
        <div className="wrap about-grid">
          <div className="about-visual reveal">
            <div className="about-circle">
              <div className="about-circle-inner">
                <img
                  src={sofiaPhoto}
                  alt="Sofia Destefano trabajando"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "60% 35%", borderRadius: "50%" }}
                />
              </div>
            </div>
          </div>
          <div className="reveal">
            <span className="eyebrow">{about.eyebrow}</span>
            <h2>{about.title}</h2>
            <p style={{ marginTop: 18, color: "var(--green)", fontSize: 19, fontWeight: 500, lineHeight: 1.55, maxWidth: 520 }}>
              {about.intro}
            </p>
            {about.story && about.story.map((par, i) => (
              <p key={i} style={{ marginTop: 16, color: "var(--ink-soft)", fontSize: 16, maxWidth: 520, lineHeight: 1.7 }}>
                {par}
              </p>
            ))}
          </div>
        </div>
        <div className="wrap">
          <div className="pillars reveal">
            {about.pillars.map((p) => (
              <div className="pillar" key={p.title}>
                <div className="pillar-icon">{pillarIcons[p.icon]}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="method" id="metodo">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">{method.eyebrow}</span>
            <h2>{method.title}</h2>
          </div>
          <div className="method-list">
            {method.steps.map((s) => (
              <div className="method-item reveal" key={s.num}>
                <span className="method-num">{s.num}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEMAS */}
      <section className="topics" id="temas">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">{topics.eyebrow}</span>
            <h2>{topics.title}</h2>
            <p style={{ marginTop: 18, color: "var(--ink-soft)", maxWidth: 620 }}>{topics.intro}</p>
          </div>
          <div className="topics-grid reveal">
            {topics.items.map((t) => (
              <span className="topic-chip" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios">
        <div className="wrap">
          <div className="section-head center reveal" style={{ marginLeft: "auto", marginRight: "auto" }}>
            <span className="eyebrow">{services.eyebrow}</span>
            <h2>{services.title}</h2>
          </div>
          <div className="services-grid">
            {services.items.map((s, i) => (
              <div className={`service-card ${s.variant} reveal`} key={s.name}>
                <span className="service-badge">{s.badge}</span>
                <h3>{s.name}</h3>
                <div className="service-meta">{s.meta}</div>
                <p className="desc">{s.desc}</p>
                <ul className="service-eje-list">
                  {s.ejes.map((e) => (
                    <li key={e}><span className="check" />{e}</li>
                  ))}
                </ul>
                <a href="#contacto" className={"btn " + (i === 0 ? "btn-primary" : "btn-ghost")}>
                  {s.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonial" id="testimonios">
        <div className="wrap">
          <div className="section-head center reveal" style={{ marginLeft: "auto", marginRight: "auto" }}>
            <span className="eyebrow">{testimonials.eyebrow}</span>
            <h2>{testimonials.title}</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.items.map((t, i) => (
              <figure className="testimonial-card reveal" key={i}>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption>
                  <span className="t-author">{t.author}</span>
                  <span className="t-role">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">{experience.eyebrow}</span>
            <h2>{experience.title}</h2>
            <p style={{ marginTop: 18, color: "var(--ink-soft)" }}>{experience.intro}</p>
          </div>
          <div className="experience-strip reveal">
            {experience.tags.map((t) => (
              <span className="exp-tag" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" id="faq">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2>Lo que suelen preguntarme antes de empezar.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className={"faq-item" + (openFaq === i ? " open" : "")} key={i}>
                <button
                  className="faq-q"
                  aria-expanded={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {f.q}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-a" style={{ maxHeight: openFaq === i ? "400px" : "0" }}>
                  <div className="faq-a-inner">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta" id="contacto">
        <div className="final-cta-circle" />
        <div className="wrap final-cta-inner">
          <span className="eyebrow" style={{ justifyContent: "center" }}>{finalCta.eyebrow}</span>
          <h2>{finalCta.title}</h2>
          <p>{finalCta.text}</p>
          <a href={brand.calendly} target="_blank" rel="noreferrer" className="btn btn-primary">{finalCta.cta}</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo"><span className="dot" />{brand.name}</div>
              <p>Coach y consultora de negocios. Acompaño a líderes a pasar de la sobrecarga a la claridad, sin sacrificar su bienestar.</p>
            </div>
            <div className="footer-cols">
              <div className="footer-col">
                <h4>Navegación</h4>
                {nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
              </div>
              <div className="footer-col">
                <h4>Contacto</h4>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
                <a href={brand.instagram} target="_blank" rel="noreferrer">Instagram {brand.instagramHandle}</a>
                <a href={brand.youtube} target="_blank" rel="noreferrer">YouTube {brand.youtubeHandle}</a>
                <a href={brand.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} {brand.name}. Todos los derechos reservados.</span>
            <span>{brand.location}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
