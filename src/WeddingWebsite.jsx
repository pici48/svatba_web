import { useState, useEffect } from "react";

const C = {
  bark: "#2C1E12",
  darkBrown: "#3D2B1F",
  warmBrown: "#6B4C3B",
  olive: "#2D4A3E",
  sage: "#5A7A6A",
  lightSage: "#8BA89A",
  beige: "#F5ECD7",
  cream: "#FAF6EE",
  linen: "#EDE4D3",
  amber: "#C4883A",
  rust: "#A0522D",
  gold: "#B8963E",
  warmWhite: "#FFF8F0",
};

const STORY_PHOTOS = [
  "/photos/story-01.jpg",
  "/photos/story-02.jpg",
  "/photos/story-03.jpg",
  "/photos/story-04.jpg",
  "/photos/story-05.jpg",
  "/photos/story-06.jpg",
  "/photos/story-07.jpg",
  "/photos/story-08.jpg",
  "/photos/story-09.jpg",
  "/photos/story-10.jpg",
  "/photos/story-11.jpg",
  "/photos/story-12.jpg",
];

const BranchDivider = () => (
  <svg viewBox="0 0 300 30" fill="none" style={{ width: 220, height: 22, display: "block", margin: "0 auto" }}>
    <path d="M40 15 Q75 8 110 15 Q145 22 180 15 Q215 8 260 15" stroke={C.gold} strokeWidth="0.8" fill="none" opacity="0.5"/>
    <circle cx="150" cy="15" r="2.5" fill={C.gold} opacity="0.5"/>
    <path d="M130 15 Q140 8 150 12 Q160 8 170 15" stroke={C.gold} strokeWidth="0.6" fill="none" opacity="0.4"/>
    <path d="M130 15 Q140 22 150 18 Q160 22 170 15" stroke={C.gold} strokeWidth="0.6" fill="none" opacity="0.4"/>
  </svg>
);

const Section = ({ children, bg, id, style }) => (
  <section id={id} style={{ padding: "80px 24px", background: bg || "transparent", position: "relative", overflow: "hidden", ...style }}>
    <div style={{ maxWidth: 820, margin: "0 auto", position: "relative", zIndex: 1 }}>{children}</div>
  </section>
);

const SectionTitle = ({ children, light }) => (
  <div style={{ textAlign: "center", marginBottom: 48 }}>
    <h2 style={{
      fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 5vw, 40px)",
      fontWeight: 400, color: light ? C.cream : C.darkBrown, letterSpacing: "0.04em", marginBottom: 16,
    }}>{children}</h2>
    <BranchDivider />
  </div>
);

const Nav = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [["story","Náš příběh"],["timeline","Detaily"],["travel","Ubytování"],["rsvp","Přijdete?"],["faq","FAQ"]];

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(44,30,18,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      transition: "all 0.5s ease",
      borderBottom: scrolled ? `1px solid ${C.warmBrown}33` : "none",
    }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href="#hero" style={{
          fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18,
          color: scrolled ? C.cream : C.darkBrown,
          textDecoration: "none", letterSpacing: "0.08em", fontWeight: 400,
        }}>M &nbsp;<span style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>&</span>&nbsp; J</a>
        <div style={{ display: "flex", gap: 32 }} className="nav-desktop">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 14,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: scrolled ? (activeSection === id ? C.amber : C.linen) : (activeSection === id ? C.amber : C.warmBrown),
              textDecoration: "none", transition: "color 0.3s",
              opacity: activeSection === id ? 1 : 0.75,
            }}>{label}</a>
          ))}
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="nav-mobile-btn" style={{
          display: "none", background: "none", border: "none", cursor: "pointer", padding: 8,
          color: scrolled ? C.cream : C.darkBrown, fontSize: 20,
        }}>{menuOpen ? "✕" : "☰"}</button>
      </div>
      {menuOpen && (
        <div className="nav-mobile-menu" style={{ background: "rgba(44,30,18,0.96)", padding: "12px 24px 24px" }}>
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} style={{
              display: "block", padding: "12px 0", fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 16, letterSpacing: "0.1em", textTransform: "uppercase",
              color: C.linen, textDecoration: "none", borderBottom: `1px solid ${C.warmBrown}33`,
            }}>{label}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

const GypsophilaBranch = ({ style, flip }) => (
  <svg viewBox="0 0 120 200" fill="none" style={{ width: 80, height: 133, ...style }}>
    <g transform={flip ? "scale(-1,1) translate(-120,0)" : ""}>
      {/* Main stem */}
      <path d="M60 195 Q55 150 50 120 Q45 90 55 60 Q60 40 58 20" stroke={C.olive} strokeWidth="1" opacity="0.5" fill="none"/>
      {/* Side stems */}
      <path d="M50 120 Q35 105 25 95" stroke={C.olive} strokeWidth="0.7" opacity="0.45" fill="none"/>
      <path d="M55 100 Q70 85 80 78" stroke={C.olive} strokeWidth="0.7" opacity="0.45" fill="none"/>
      <path d="M53 80 Q38 68 30 58" stroke={C.olive} strokeWidth="0.7" opacity="0.45" fill="none"/>
      <path d="M56 60 Q68 50 78 42" stroke={C.olive} strokeWidth="0.7" opacity="0.45" fill="none"/>
      <path d="M57 40 Q45 30 38 22" stroke={C.olive} strokeWidth="0.7" opacity="0.45" fill="none"/>
      {/* Flowers - small clusters of dots */}
      <circle cx="25" cy="93" r="2.5" fill="#D4A9B0" opacity="0.7"/><circle cx="22" cy="89" r="2" fill="#C9949C" opacity="0.65"/><circle cx="28" cy="88" r="1.8" fill="#D4A9B0" opacity="0.6"/>
      <circle cx="80" cy="76" r="2.5" fill="#D4A9B0" opacity="0.7"/><circle cx="83" cy="72" r="2" fill="#C9949C" opacity="0.65"/><circle cx="77" cy="72" r="1.8" fill="#D4A9B0" opacity="0.6"/>
      <circle cx="30" cy="56" r="2.5" fill="#D4A9B0" opacity="0.7"/><circle cx="27" cy="52" r="2" fill="#C9949C" opacity="0.65"/><circle cx="33" cy="52" r="1.8" fill="#D4A9B0" opacity="0.6"/>
      <circle cx="78" cy="40" r="2.5" fill="#C9949C" opacity="0.65"/><circle cx="75" cy="36" r="2" fill="#D4A9B0" opacity="0.6"/><circle cx="81" cy="37" r="1.8" fill="#D4A9B0" opacity="0.55"/>
      <circle cx="38" cy="20" r="2.5" fill="#C9949C" opacity="0.65"/><circle cx="35" cy="16" r="2" fill="#D4A9B0" opacity="0.6"/><circle cx="41" cy="17" r="1.8" fill="#D4A9B0" opacity="0.55"/>
      <circle cx="58" cy="18" r="2" fill="#C9949C" opacity="0.65"/><circle cx="55" cy="14" r="1.5" fill="#D4A9B0" opacity="0.55"/>
      {/* Extra tiny dots for delicacy */}
      <circle cx="45" cy="110" r="1.5" fill="#D4A9B0" opacity="0.55"/><circle cx="42" cy="106" r="1.2" fill="#C9949C" opacity="0.5"/>
      <circle cx="65" cy="90" r="1.5" fill="#D4A9B0" opacity="0.55"/><circle cx="68" cy="87" r="1.2" fill="#C9949C" opacity="0.5"/>
      <circle cx="48" cy="70" r="1.5" fill="#D4A9B0" opacity="0.55"/><circle cx="62" cy="52" r="1.2" fill="#C9949C" opacity="0.5"/>
    </g>
  </svg>
);

const Hero = () => (
  <section id="hero" style={{
    minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center",
    alignItems: "center", textAlign: "center",
    background: `linear-gradient(170deg, #FBF6EE 0%, ${C.beige} 30%, #F0E6D2 60%, #EBE0CE 100%)`,
    position: "relative", overflow: "hidden", padding: "120px 24px 80px",
  }}>
    {/* Subtle texture */}
    <div style={{
      position: "absolute", inset: 0, opacity: 0.03,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23B8963E' stroke-width='0.5'/%3E%3C/svg%3E")`,
      backgroundSize: "30px 30px",
    }}/>
    {/* Warm glow */}
    <div style={{
      position: "absolute", inset: 0, opacity: 0.08,
      backgroundImage: `radial-gradient(ellipse at 50% 40%, ${C.amber}22 0%, transparent 60%), radial-gradient(circle at 20% 70%, ${C.sage}15 0%, transparent 40%), radial-gradient(circle at 80% 70%, ${C.sage}15 0%, transparent 40%)`,
    }}/>

    {/* Gypsophila branches */}
    <GypsophilaBranch style={{ position: "absolute", top: "8%", left: "1%", transform: "rotate(-5deg) scale(0.9)" }}/>
    <GypsophilaBranch style={{ position: "absolute", top: "8%", right: "1%", transform: "rotate(5deg) scale(0.85)" }} flip/>
    <GypsophilaBranch style={{ position: "absolute", top: "38%", left: "0%", transform: "rotate(30deg) scale(0.65)" }}/>
    <GypsophilaBranch style={{ position: "absolute", top: "38%", right: "0%", transform: "rotate(-25deg) scale(0.65)" }} flip/>
    <GypsophilaBranch style={{ position: "absolute", bottom: "5%", left: "1%", transform: "rotate(35deg) scale(0.85)" }}/>
    <GypsophilaBranch style={{ position: "absolute", bottom: "5%", right: "1%", transform: "rotate(-30deg) scale(0.8)" }} flip/>

    <div style={{ position: "relative", zIndex: 1 }}>
      <p style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(14px, 2.8vw, 20px)",
        letterSpacing: "0.25em", textTransform: "uppercase", color: C.darkBrown, marginBottom: 32, fontWeight: 400,
        whiteSpace: "nowrap",
      }}>Srdečně vás zveme na naši svatbu</p>
      <h1 style={{
        fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(48px, 10vw, 96px)",
        fontWeight: 400, color: C.darkBrown, lineHeight: 1.1, marginBottom: 8,
      }}>Monika</h1>
      {/* Decorative ampersand with side lines */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, margin: "12px 0" }}>
        <div style={{ width: 52, height: 1.5, background: `${C.gold}77` }}/>
        <p style={{
          fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(28px, 5vw, 42px)",
          color: C.gold, fontStyle: "italic", fontWeight: 400,
        }}>&</p>
        <div style={{ width: 52, height: 1.5, background: `${C.gold}77` }}/>
      </div>
      <h1 style={{
        fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(48px, 10vw, 96px)",
        fontWeight: 400, color: C.darkBrown, lineHeight: 1.1, marginBottom: 40,
      }}>Jan</h1>
      {/* Ornamental divider */}
      <svg viewBox="0 0 200 20" fill="none" style={{ width: 140, height: 14, display: "block", margin: "24px auto 28px" }}>
        <path d="M20 10 Q50 3 80 10 Q100 14 120 10 Q150 3 180 10" stroke={C.gold} strokeWidth="0.8" fill="none" opacity="0.45"/>
        <circle cx="100" cy="10" r="2" fill={C.gold} opacity="0.4"/>
        <circle cx="20" cy="10" r="1.5" fill={C.gold} opacity="0.3"/>
        <circle cx="180" cy="10" r="1.5" fill={C.gold} opacity="0.3"/>
      </svg>
      <p style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(18px, 3vw, 24px)",
        letterSpacing: "0.15em", color: C.darkBrown, fontWeight: 300,
      }}>12. září 2026</p>
      <p style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(14px, 2vw, 17px)",
        letterSpacing: "0.12em", color: C.darkBrown, marginTop: 10, fontWeight: 300,
      }}><a href="https://maps.app.goo.gl/gcGQyL3EJzjDqksC9" target="_blank" rel="noopener noreferrer" style={{
        color: C.darkBrown, textDecoration: "none", borderBottom: `1px solid ${C.darkBrown}44`,
        transition: "border-color 0.3s",
      }}>Statek Heřmanice &nbsp;·&nbsp; Heřmanice 8, 582 82</a></p>
    </div>
    <div style={{
      position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
      display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
      animation: "floatUp 2.5s ease-in-out infinite",
    }}>
      <span style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 11,
        letterSpacing: "0.2em", color: `${C.warmBrown}88`, textTransform: "uppercase",
      }}>scrollujte</span>
      <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
        <path d="M8 4V18M8 18L3 13M8 18L13 13" stroke={`${C.warmBrown}66`} strokeWidth="1.5"/>
      </svg>
    </div>
  </section>
);


const Countdown = () => {
  const [t, setT] = useState({});
  useEffect(() => {
    const target = new Date("2026-09-12T14:00:00");
    const calc = () => {
      const d = target - new Date();
      if (d <= 0) return setT({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setT({
        days: Math.floor(d / 86400000), hours: Math.floor((d % 86400000) / 3600000),
        minutes: Math.floor((d % 3600000) / 60000), seconds: Math.floor((d % 60000) / 1000),
      });
    };
    calc(); const i = setInterval(calc, 1000); return () => clearInterval(i);
  }, []);
  return (
    <Section bg={C.cream}>
      <div style={{ display: "flex", justifyContent: "center", gap: "clamp(16px, 5vw, 48px)", flexWrap: "wrap" }}>
        {[["dní",t.days],["hodin",t.hours],["minut",t.minutes],["sekund",t.seconds]].map(([l,v]) => (
          <div key={l} style={{ textAlign: "center", minWidth: 70 }}>
            <div style={{
              fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(32px, 6vw, 52px)",
              color: C.darkBrown, fontWeight: 400, lineHeight: 1,
            }}>{String(v || 0).padStart(2, "0")}</div>
            <div style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 13,
              letterSpacing: "0.2em", textTransform: "uppercase", color: C.warmBrown, marginTop: 8,
            }}>{l}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};






const PhotoSlideshow = () => {
  const [idx, setIdx] = useState(0);
  const len = STORY_PHOTOS.length;

  const selectPhoto = (i) => {
    setIdx(i);
    // Scroll thumbnail strip to keep selected visible
    // scroll handled by CSS
  };

  const prev = () => selectPhoto((idx - 1 + len) % len);
  const next = () => selectPhoto((idx + 1) % len);

  return (
    <div style={{ width: "100%", marginBottom: 28, overflow: "hidden" }}>
      {/* Featured photo */}
      <div style={{ position: "relative", width: "100%", marginBottom: 16 }}>
        <div style={{
          width: "100%", aspectRatio: "4/3", borderRadius: 6,
          overflow: "hidden",
          border: `1px solid ${C.linen}`,
          boxShadow: `0 4px 20px ${C.warmBrown}15`,
          background: C.linen,
        }}>
          <img src={STORY_PHOTOS[idx]} alt={`Monika & Jan ${idx + 1}`} style={{
            width: "100%", height: "100%", objectFit: "contain",
            transition: "opacity 0.4s ease",
          }}/>
        </div>
        {/* Arrows */}
        <button onClick={prev} style={{
          position: "absolute", top: "50%", left: 8, transform: "translateY(-50%)",
          width: 36, height: 36, borderRadius: "50%",
          background: `${C.cream}DD`, border: `1px solid ${C.linen}`,
          boxShadow: `0 2px 8px ${C.warmBrown}20`,
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 16, color: C.warmBrown,
        }}>‹</button>
        <button onClick={next} style={{
          position: "absolute", top: "50%", right: 8, transform: "translateY(-50%)",
          width: 36, height: 36, borderRadius: "50%",
          background: `${C.cream}DD`, border: `1px solid ${C.linen}`,
          boxShadow: `0 2px 8px ${C.warmBrown}20`,
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 16, color: C.warmBrown,
        }}>›</button>
        {/* Counter */}
        <div style={{
          position: "absolute", bottom: 12, right: 12,
          background: `${C.darkBrown}AA`, borderRadius: 12,
          padding: "4px 12px",
          fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 13,
          color: C.cream, fontWeight: 300,
        }}>{idx + 1} / {len}</div>
      </div>
      {/* Thumbnail strip */}
      <div style={{
        display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4,
        scrollbarWidth: "thin",
        scrollbarColor: `${C.linen} transparent`,
        maxWidth: "100%",
      }}>
        {STORY_PHOTOS.map((src, i) => (
          <button key={i} onClick={() => selectPhoto(i)} style={{
            flexShrink: 0, width: 64, height: 64, borderRadius: 4,
            overflow: "hidden", cursor: "pointer", padding: 0,
            border: i === idx ? `2px solid ${C.warmBrown}` : `2px solid transparent`,
            opacity: i === idx ? 1 : 0.5,
            transform: i === idx ? "scale(1.08)" : "scale(1)",
            transition: "all 0.3s ease",
          }}>
            <img src={src} alt="" style={{
              width: "100%", height: "100%", objectFit: "cover",
            }}/>
          </button>
        ))}
      </div>
    </div>
  );
};

const OurStory = () => (
  <Section bg={C.warmWhite} id="story">
    <SectionTitle>Náš příběh</SectionTitle>
    <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
      <PhotoSlideshow />
      <div>
        <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(17px, 2.5vw, 20px)", lineHeight: 1.8, color: C.warmBrown, fontWeight: 300, padding: "0 8px", marginBottom: 16, textAlign: "justify" }}>
          Všechno to začalo na jaře 2019 v naší oblíbené studovně v NTK. Monča se zrovna učila na zápočet z genetiky a Honza psal svoji bakalářku. Velký podíl na našem seznámení mají i Honzovi kamarádi, kteří ho nakonec donutili, aby k Monče přišel a dal se s ní do řeči. Během učení jsme prohodili jen pár vět, ale osudovou se nám stala až následná společná cesta metrem, po které Honza strávil zbytek večera na sítích zkoumáním všech „Monik z Olomouce, co studují 1. LF“, dokud nenašel ten správný profil.
        </p>
        <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(17px, 2.5vw, 20px)", lineHeight: 1.8, color: C.warmBrown, fontWeight: 300, padding: "0 8px", marginBottom: 16, textAlign: "justify" }}>
          Od té doby jsme spolu zažili spoustu dobrodružství a krásných zážitků, ale i pár těch smutnějších chvil, které náš vztah ještě víc upevnily.
        </p>
        <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(17px, 2.5vw, 20px)", lineHeight: 1.8, color: C.warmBrown, fontWeight: 300, padding: "0 8px", textAlign: "justify"  }}>
          V létě loňského roku jsme se zasnoubili pod naší oblíbenou ferratou u Lago di Garda. No a teď, o rok a něco později, se už moc těšíme, až naši svatbu oslavíte s námi!
        </p>
      </div>
    </div>
  </Section>
);

const DRESS_COLORS = [
  { color: "rgba(239, 229, 216, 1)", label: "Krémová" },
  { color: "rgba(220, 192, 156, 1)", label: "Písková" },
  { color: "rgba(92, 65, 63, 1)", label: "Hnědá" },
  { color: "#2D4A3E", label: "Zelená" },
];

const Timeline = () => (
  <Section bg="#F0E8D8" id="timeline">
    <SectionTitle>Detaily svatby</SectionTitle>
    <div style={{
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px 64px",
      maxWidth: 960, margin: "0 auto", alignItems: "start",
    }} className="timeline-grid">
      {/* Left: Program */}
      <div>
        <h3 style={{
          fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(22px, 4vw, 32px)",
          fontWeight: 400, color: C.darkBrown, letterSpacing: "0.04em", marginBottom: 32,
          textAlign: "center",
        }}>Program dne</h3>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <div style={{ position: "relative", paddingLeft: 36 }}>
            <div style={{
              position: "absolute", left: 14, top: 5, bottom: 5,
              width: 1, background: `${C.olive}44`,
            }}/>
            {[
              { title: "Obřad", time: "13:00", desc: "Budeme rádi, pokud dorazíte přibližně hodinu předem — už při příjezdu na vás bude čekat drobné občerstvení", first: true },
              { title: "Společné focení" },
              { title: "Oběd" },
              { title: "Hry · Krájení dortu · Volná zábava" },
              { title: "Večerní raut", time: "17:30" },
              { title: "Tancování a večerní zábava", last: true },
            ].map((item, i) => (
              <div key={i} style={{ position: "relative", marginBottom: item.last ? 0 : 36 }}>
                <div style={{
                  position: "absolute", left: -36, top: 3, width: 10, height: 10,
                  borderRadius: "50%", background: item.first ? C.amber : C.olive,
                  border: `2px solid ${C.linen}`,
                }}/>
                <h4 style={{
                  fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18,
                  color: C.darkBrown, fontWeight: 400,
                }}>{item.title}</h4>
                {item.time && <p style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 15,
                  color: C.amber, fontWeight: 600, marginTop: 3, letterSpacing: "0.05em",
                }}>{item.time}</p>}
                {item.desc && <p style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 15,
                  color: C.warmBrown, fontWeight: 300, marginTop: 4, lineHeight: 1.6,
                }}>{item.desc}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right: Dress code */}
      <div>
        <h3 style={{
          fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(22px, 4vw, 32px)",
          fontWeight: 400, color: C.darkBrown, letterSpacing: "0.04em", marginBottom: 32,
          textAlign: "center",
        }}>Dress code</h3>
        <div style={{
          padding: "32px 28px", background: C.warmWhite, borderRadius: 6,
          border: `1px solid ${C.linen}`,
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 18,
            lineHeight: 1.8, color: C.warmBrown, fontWeight: 300, marginBottom: 28, textAlign: "justify",
          }}>
            Dress code u nás není nijak pevně daný. Budeme ale moc rádi, když se necháte inspirovat naší barevnou paletou. Holky si můžou vzít šaty nebo sukni v těchto odstínech, u kluků úplně postačí jen sladěný detail — třeba motýlek, kravata nebo barevné ponožky.
          </p>
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 18,
            lineHeight: 1.8, color: C.warmBrown, fontWeight: 300, marginBottom: 28, textAlign: "justify",
          }}>
            Jelikož se velká část programu bude konat venku, je pro nás ze všeho nejdůležitější, abyste se cítili příjemně a pohodlně. Saka tak můžete s klidným svědomím rovnou nechat doma!
          </p>
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 13,
            letterSpacing: "0.15em", textTransform: "uppercase", color: C.warmBrown,
            marginBottom: 16, fontWeight: 400,
          }}>Barevná paleta</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {DRESS_COLORS.map((c, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: c.color,
                  border: (c.color.includes("239") || c.color.includes("220")) ? `1px solid ${C.linen}` : "none",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}/>
                <p style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 11,
                  color: C.warmBrown, marginTop: 6, fontWeight: 300,
                }}>{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    {/* Svatební dary - full width */}
    <div style={{
      maxWidth: 700, margin: "48px auto 0", textAlign: "center",
      padding: "36px 32px", background: C.warmWhite, borderRadius: 6,
      border: `1px solid ${C.linen}`,
    }}>
      <h3 style={{
        fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(22px, 4vw, 32px)",
        fontWeight: 400, color: C.darkBrown, letterSpacing: "0.04em", marginBottom: 20,
      }}>Svatební dary</h3>
      <BranchDivider />
      <p style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 18,
        lineHeight: 1.8, color: C.warmBrown, fontWeight: 300, textAlign: "justify",
        maxWidth: 540, margin: "20px auto 0",
      }}>
        Ze všeho nejvíc si přejeme, abyste dorazili a pořádně to s námi oslavili. S vymýšlením hmotných věcí si proto prosím vůbec nelamte hlavu.
        Pokud byste nás ale i tak chtěli něčím potěšit, nejvíce oceníme jakýkoliv finanční příspěvek na pokrytí svatby.
      </p>
    </div>
  </Section>
);

const VENUE_PHOTO = "/photos/venue.jpg";

const Travel = () => (
  <section id="travel" style={{
    padding: "80px 24px", position: "relative", overflow: "hidden",
    background: C.bark,
  }}>
    <div style={{
      position: "absolute", inset: 0,
      backgroundImage: `url(${VENUE_PHOTO})`,
      backgroundSize: "cover", backgroundPosition: "center",
      filter: "brightness(0.35)",
    }}/>
    <div style={{ maxWidth: 820, margin: "0 auto", position: "relative", zIndex: 1 }}>
      <SectionTitle light>Ubytování & doprava</SectionTitle>
    <div style={{
      maxWidth: 700, margin: "0 auto 36px", textAlign: "center",
      padding: "28px 24px", background: "rgba(245,236,215,0.18)", borderRadius: 4, border: "1px solid rgba(245,236,215,0.22)", backdropFilter: "blur(8px)",
    }}>
      <div style={{ fontSize: 24, marginBottom: 8 }}>🛏️</div>
      <p style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 18,
        lineHeight: 1.8, color: C.cream, fontWeight: 400, textAlign: "justify",
      }}>
        Pro velkou většinu hostů máme možnost přespání přímo na statku.
        Pro náročnější jsou k dispozici postele, pro přizpůsobivější spaní na karimatce
        nebo venku pod hvězdami či ve stanu.
        Případně je možné si najít ubytování v okolí do 20 minut jízdy od statku.
      </p>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 28, maxWidth: 700, margin: "0 auto" }}>
      {[
        { icon: "🚗", title: "Autem", text: "Statek Heřmanice se nachází cca 1 hodinu 20 minut od Prahy. Parkování je možné přímo na statku, ale kapacita je omezená — ideálně se domluvte na spolujízdě. :)" },
        { icon: "🏡", title: "Externí ubytování", text: "Pokud preferujete vlastní ubytování, v okolí do 20 minut autem najdete pár penzionů." },
      ].map((item) => (
        <div key={item.title} style={{ padding: "32px 24px", borderRadius: 4, background: "rgba(245,236,215,0.22)", border: "1px solid rgba(245,236,215,0.25)", backdropFilter: "blur(8px)" }}>
          <div style={{ fontSize: 24, marginBottom: 12 }}>{item.icon}</div>
          <h3 style={{
            fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20,
            color: C.cream, fontWeight: 400, marginBottom: 12,
          }}>{item.title}</h3>
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 16,
            lineHeight: 1.7, color: `${C.cream}DD`, fontWeight: 300, textAlign: "justify",
          }}>{item.text}</p>
        </div>
      ))}
    </div>
    <div style={{
      maxWidth: 700, margin: "36px auto 0", borderRadius: 6, overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.2)", boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      height: 220,
    }}>
      <iframe
        src="https://www.google.com/maps?q=Statek+He%C5%99manice,+He%C5%99manice+8,+582+82+He%C5%99manice&output=embed"
        width="100%" height="100%" style={{ border: 0 }}
        allowFullScreen="" loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    </div>
  </section>
);

const RSVP = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", attending: "", adults: 1, children: 0, sleeping: [], drink: "" });
  const inputStyle = {
    width: "100%", padding: "12px 16px", background: "rgba(255,255,255,0.08)",
    border: `1px solid ${C.sage}`, borderRadius: 3, color: C.cream,
    fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 17, outline: "none", boxSizing: "border-box",
  };
  const labelStyle = {
    fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 13,
    letterSpacing: "0.15em", textTransform: "uppercase", color: C.lightSage, display: "block", marginBottom: 8,
  };

  return (
    <Section bg={C.olive} id="rsvp">
      <SectionTitle light>Přijdete?</SectionTitle>
      <p style={{
        textAlign: "center", fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: 18, color: `${C.cream}CC`, marginBottom: 40, marginTop: -20, fontWeight: 300,
      }}>Prosíme o odpověď do 1. srpna 2026</p>
      {!submitted ? (
        <div style={{ maxWidth: 440, margin: "0 auto" }}>
          {[["name","Celé jméno","text"]].map(([k,l,t]) => (
            <div key={k} style={{ marginBottom: 20 }}>
              <label style={labelStyle}>{l}</label>
              <input type={t} value={form[k]} onChange={e => setForm({...form,[k]:e.target.value})} style={inputStyle}/>
            </div>
          ))}
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Zúčastníte se?</label>
            <div style={{ display: "flex", gap: 12 }} className="rsvp-attend-btns">
              {["S radostí přijímám","Bohužel se nemohu zúčastnit"].map(opt => (
                <button key={opt} onClick={() => setForm({...form, attending: opt})} style={{
                  flex: 1, padding: "12px 16px",
                  background: form.attending === opt ? `${C.amber}33` : "rgba(255,255,255,0.05)",
                  border: `1px solid ${form.attending === opt ? C.amber : C.sage}`,
                  borderRadius: 3, color: form.attending === opt ? C.gold : C.linen,
                  fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 15, cursor: "pointer", transition: "all 0.3s",
                }}>{opt}</button>
              ))}
            </div>
          </div>
          {/* Počet osob - side by side */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
            {[["adults","Počet dospělých", form.adults],["children","Počet dětí", form.children]].map(([k,l,v]) => (
              <div key={k}>
                <label style={labelStyle}>{l}</label>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <button onClick={() => setForm({...form,[k]:Math.max(k==="adults"?1:0, v-1)})} style={{
                    width: 32, height: 32, borderRadius: "50%", border: `1px solid ${C.sage}`,
                    background: "rgba(255,255,255,0.05)", color: C.cream, fontSize: 18, cursor: "pointer",
                  }}>-</button>
                  <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 20, color: C.cream, minWidth: 20, textAlign: "center" }}>{v}</span>
                  <button onClick={() => setForm({...form,[k]:v+1})} style={{
                    width: 32, height: 32, borderRadius: "50%", border: `1px solid ${C.sage}`,
                    background: "rgba(255,255,255,0.05)", color: C.cream, fontSize: 18, cursor: "pointer",
                  }}>+</button>
                </div>
              </div>
            ))}
          </div>
          {/* Ubytování */}
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Preference ubytování <span style={{ color: C.amber }}>*</span></label>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["postel", "🛏️  Postel na statku"],
                ["karimatka", "🧹  Karimatka na statku"],
                ["stan", "⛺  Spaní ve stanu"],
                ["vlastni", "🏡  Zařídíme si vlastní ubytování v okolí"],
              ].map(([val, label]) => {
                const selected = form.sleeping.includes(val);
                return (
                  <button key={val} onClick={() => setForm({...form, sleeping: selected ? form.sleeping.filter(s=>s!==val) : [...form.sleeping, val]})} style={{
                    padding: "12px 16px", textAlign: "left",
                    background: selected ? `${C.amber}33` : "rgba(255,255,255,0.05)",
                    border: `1px solid ${selected ? C.amber : C.sage}`,
                    borderRadius: 3, color: selected ? C.gold : C.linen,
                    fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 15,
                    cursor: "pointer", transition: "all 0.3s",
                  }}>{label}</button>
                );
              })}
            </div>
            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 12,
              color: `${C.cream}88`, marginTop: 8, fontStyle: "italic",
            }}><span style={{ color: C.amber }}>*</span> Lze zvolit i více možností najednou, usnadní nám to plánování :)</p>
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Oblíbený drink</label>
            <input type="text" value={form.drink} onChange={e => setForm({...form, drink: e.target.value})} placeholder="např. pivo, víno, gin tonic..." style={inputStyle}/>
          </div>
          <button onClick={() => {
            const FORM_ID = "1FAIpQLSdUnjnoT50toX0tleSQAAxPr9sGA0B_FhT8uSJ5zfLFAZ50qw";
            const url = "https://docs.google.com/forms/d/e/" + FORM_ID + "/formResponse";
            const params = new URLSearchParams();
            params.append("entry.687218553", form.name);
            params.append("entry.1243431359", form.attending);
            params.append("entry.1074959964", String(form.adults));
            params.append("entry.452682852", String(form.children));
            form.sleeping.forEach(s => {
              const labels = { postel: "Postel na statku", karimatka: "Karimatka na statku", stan: "Spaní ve stanu", vlastni: "Zařídíme si vlastní ubytování v okolí" };
              params.append("entry.969706772", labels[s] || s);
            });
            params.append("entry.961557319", form.drink);
            fetch(url, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: params.toString() });
            setSubmitted(true);
          }} style={{
            width: "100%", padding: "16px", marginTop: 12,
            background: C.amber, border: "none", borderRadius: 3,
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 16, letterSpacing: "0.15em", textTransform: "uppercase",
            color: C.warmWhite, cursor: "pointer", transition: "all 0.3s",
          }}>Odeslat</button>
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 28, color: C.cream, marginBottom: 12 }}>Děkujeme!</p>
          <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 18, color: `${C.cream}BB`, fontWeight: 300 }}>Nemůžeme se dočkat, až to s vámi oslavíme.</p>
        </div>
      )}
    </Section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [question, setQuestion] = useState({ name: "", text: "" });
  const [sent, setSent] = useState(false);

  const faqs = [
    { q: "Kde přesně se koná svatba?", a: "Obřad i celý další program se koná na Statku Heřmanice (Heřmanice 8, 582 82). Podrobnosti najdete v sekci Ubytování & doprava." },
    { q: "Můžu fotit a natáčet při obřadu?", a: "Během obřadu prosím nechte telefony schované. Pro tyto účely máme kameramana a fotografku, kteří vše zachytí za vás :)" },
    { q: "Kolik je míst na spaní?", a: "Statek má kapacitu 30 postelí v hlavní budově a 8 míst na spaní ve stanech s podsadou. Počet míst na zemi či venku pod stanem je prakticky neomezený :). Část postelí je rezervována pro blízkou rodinu a prarodiče." },
    { q: "Do kolika bude párty?", a: "Dle nálady — doufáme, že až do ranních hodin!" },
  ];

  const handleSendQuestion = () => {
    const url = "https://docs.google.com/forms/d/e/1FAIpQLScQkYs3R8r57K1KuqWLryIMIL_kJByAeQ6y4naKKt7KpgQWHA/formResponse";
    const params = new URLSearchParams();
    params.append("entry.821310393", question.name);
    params.append("entry.824794608", question.text);
    fetch(url, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: params.toString() });
    setSent(true);
  };

  return (
    <Section bg="#F0E8D8" id="faq">
      <SectionTitle>Nějaké otázky?</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, maxWidth: 820, margin: "0 auto" }} className="faq-grid">
        <div>
          {faqs.map((faq, i) => (
            <div key={i} style={{
              marginBottom: 12, borderRadius: 4, overflow: "hidden",
              border: `1px solid ${C.linen}`, background: C.warmWhite,
            }}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} style={{
                width: "100%", padding: "16px 20px", background: "none", border: "none",
                display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer",
              }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 17,
                  color: C.darkBrown, fontWeight: 400, textAlign: "left",
                }}>{faq.q}</span>
                <span style={{ color: C.warmBrown, fontSize: 18, flexShrink: 0, marginLeft: 12 }}>
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div style={{ padding: "0 20px 16px" }}>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 16,
                    lineHeight: 1.7, color: C.warmBrown, fontWeight: 300, textAlign: "justify",
                  }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="faq-section">
          <h3 style={{
            fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22,
            color: C.darkBrown, fontWeight: 400, marginBottom: 20,
          }}>Nenašli jste odpověď?</h3>
          {!sent ? (
            <div>
              <input type="text" value={question.name} onChange={e => setQuestion({...question, name: e.target.value})}
                placeholder="Vaše jméno" style={{
                  width: "100%", padding: "12px 16px", marginBottom: 12, background: C.warmWhite,
                  border: `1px solid ${C.linen}`, borderRadius: 3, color: C.darkBrown,
                  fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 17, outline: "none", boxSizing: "border-box",
                }}/>
              <textarea value={question.text} onChange={e => setQuestion({...question, text: e.target.value})}
                placeholder="Váš dotaz" rows={4} style={{
                  width: "100%", padding: "12px 16px", marginBottom: 12, background: C.warmWhite,
                  border: `1px solid ${C.linen}`, borderRadius: 3, color: C.darkBrown,
                  fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 17, outline: "none",
                  boxSizing: "border-box", resize: "vertical",
                }}/>
              <button onClick={handleSendQuestion} style={{
                background: C.amber, border: "none", borderRadius: 3,
                fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 15,
                letterSpacing: "0.1em", textTransform: "uppercase", color: C.warmWhite,
                width: "100%", padding: "14px 24px", boxSizing: "border-box",
                cursor: "pointer", transition: "all 0.3s",
              }}>Odeslat dotaz</button>
            </div>
          ) : (
            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 18,
              color: C.warmBrown, textAlign: "center", fontWeight: 300, padding: "12px 0",
            }}>Děkujeme za dotaz! Ozveme se vám co nejdříve.</p>
          )}
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 14,
            color: C.warmBrown, marginTop: 16, fontStyle: "italic", opacity: 0.7,
          }}>Nebo nám prostě zavolej nebo napiš.</p>
        </div>
      </div>
    </Section>
  );
};

const Footer = () => (
  <footer style={{ padding: "60px 24px", textAlign: "center", background: C.bark }}>
    <h2 style={{
      fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 5vw, 40px)",
      color: C.cream, fontWeight: 400, marginBottom: 12,
    }}>Monika <span style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic" }}>&</span> Jan</h2>
    <p style={{
      fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 16,
      color: `${C.linen}88`, letterSpacing: "0.12em", fontWeight: 300,
    }}>12 · 09 · 2026</p>
    <div style={{ margin: "24px auto", width: 40, height: 1, background: `${C.gold}44` }}/>
    <p style={{
      fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 14,
      color: `${C.linen}55`, fontWeight: 300, fontStyle: "italic",
    }}>S láskou</p>
  </footer>
);

export default function WeddingWebsite() {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }); },
      { threshold: 0.3 }
    );
    document.querySelectorAll("section[id]").forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: C.warmWhite, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        input::placeholder { color: rgba(255,255,255,0.3); }
        textarea::placeholder { color: rgba(107,76,59,0.4); }
        .faq-section input::placeholder { color: rgba(107,76,59,0.4); }
        button:hover { opacity: 0.88; }
        @keyframes floatUp { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-8px)} }
        @media (max-width: 640px) {
          .nav-desktop{display:none!important}
          .nav-mobile-btn{display:block!important}
          .timeline-grid{grid-template-columns:1fr!important;gap:24px 0!important}
          .rsvp-attend-btns{flex-direction:column!important}
          .faq-grid{grid-template-columns:1fr!important}
        }
        @media (min-width: 641px) { .nav-mobile-menu{display:none!important} }
      `}</style>
      <Nav activeSection={activeSection} />
      <Hero />
      <Countdown />
      <OurStory />
      <Timeline />
      <Travel />
      <RSVP />
      <FAQ />
      <Footer />
    </div>
  );
}
