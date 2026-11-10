import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Award,
  Building2,
  CheckCircle2,
  Compass,
  Factory,
  Flame,
  GraduationCap,
  HardHat,
  Headphones,
  Layers,
  Mail,
  MapPin,
  Menu,
  MonitorPlay,
  Phone,
  Plus,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { MriyaLogo, PartnerWordmark, PlatformEmblem } from "./components/BrandMark.jsx";
import { ServiceModal } from "./components/ServiceModal.jsx";
import {
  advantages,
  applicationEnvironments,
  collaborationSpaces,
  companyInfo,
  extendedEcosystemBrands,
  flagshipPartners,
  headsets,
  industries,
  serviceCategories,
  services,
  softwarePlatforms,
  steps,
  values,
} from "./data/mriyaData.js";
import "./App.css";

const industryIcons = [
  Building2,
  GraduationCap,
  Factory,
  Flame,
  HardHat,
  Headphones,
];

const advantageIcons = {
  integrated: Layers,
  certified: MonitorPlay,
  value: Compass,
  coordination: Wrench,
  tailored: Sparkles,
  safety: ShieldCheck,
  partnership: Award,
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedService, setSelectedService] = useState(null);
  const [spaceMode, setSpaceMode] = useState("blueprints");
  const [activeSpaceId, setActiveSpaceId] = useState("huddle");
  const [headsetBrand, setHeadsetBrand] = useState("all");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "Audiovisual & Teams Rooms",
    message: "",
  });
  const [submittedInquiry, setSubmittedInquiry] = useState(null);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 18);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  const spaceList = collaborationSpaces[spaceMode];
  const activeSpace =
    spaceList.find((item) => item.id === activeSpaceId) || spaceList[0];

  const filteredHeadsets =
    headsetBrand === "all"
      ? headsets
      : headsets.filter((h) => h.brand.toLowerCase() === headsetBrand);

  function handleSpaceModeChange(mode) {
    setSpaceMode(mode);
    setActiveSpaceId(collaborationSpaces[mode][0].id);
  }

  function jumpToInquiry(topic) {
    setSelectedService(null);
    setSubmittedInquiry(null);
    setFormState((prev) => ({
      ...prev,
      interest: topic,
      message:
        prev.message ||
        `Hello Mriya team, I would like to discuss ${topic} for our organisation.`,
    }));
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setFormError("Please fill in your name, email address, and project message.");
      return;
    }
    setFormError("");
    setSubmittedInquiry({ ...formState });
  }

  function buildMailtoUrl(payload) {
    const subject = encodeURIComponent(
      `[Website Inquiry] ${payload.interest} — ${payload.name}`
    );
    const body = encodeURIComponent(
      `Name: ${payload.name}\nEmail: ${payload.email}\nOrganisation / Phone: ${
        payload.organization || "N/A"
      }\nSolution Interest: ${payload.interest}\n\nMessage:\n${payload.message}`
    );
    return `mailto:${companyInfo.salesEmail}?cc=${companyInfo.primaryEmail}&subject=${subject}&body=${body}`;
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="app-shell">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="container header-inner">
          <a
            className="brand-link"
            href="#home"
            onClick={closeMenu}
            aria-label="Mriya Co Limited home"
          >
            <MriyaLogo />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav
            id="primary-navigation"
            className={`primary-nav ${menuOpen ? "primary-nav--open" : ""}`}
          >
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
            <a href="#spaces" onClick={closeMenu}>
              AV Spaces
            </a>
            <a href="#platforms" onClick={closeMenu}>
              Platforms &amp; Gear
            </a>
            <a href="#approach" onClick={closeMenu}>
              Approach
            </a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Let&apos;s talk
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-bar" aria-hidden="true" />
                <span>TECHNOLOGY × AUDIOVISUAL × ENGINEERING</span>
              </div>

              <h1>
                Purpose-built solutions.{" "}
                <span className="accent-text">Remarkable results.</span>
              </h1>

              <p className="hero-lead">
                Mriya Co Limited empowers organisations to communicate, connect,
                and operate with confidence — uniting specialist Microsoft Teams
                Rooms &amp; Pro-AV integration with IT infrastructure, OEM
                procurement, and industrial engineering.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#services">
                  Explore capabilities
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <a className="btn btn-outline" href="#spaces">
                  Explore AV spaces
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>

              <div className="hero-trust-row">
                <div>
                  <span className="trust-label">ABUJA HQ</span>
                  <strong>Suite 19A, Anon Plaza, Apo</strong>
                </div>
                <div>
                  <span className="trust-label">SPECIALISATION</span>
                  <strong>Microsoft Teams Rooms &amp; EPC</strong>
                </div>
                <div>
                  <span className="trust-label">REGISTRATION</span>
                  <strong className="mono-text">{companyInfo.rcNumber}</strong>
                </div>
              </div>
            </div>

            <div className="hero-visual-wrap">
              <div className="hero-visual-frame">
                <img
                  src="/images/hero-boardroom.jpg"
                  alt="Modern hybrid executive boardroom integrated by Mriya Co Limited"
                />
                <div className="hero-visual-scrim" />

                <div className="hero-floating-card">
                  <div className="floating-card-top">
                    <span className="status-pill">
                      <span className="pulse-dot" aria-hidden="true" />
                      ONE PARTNER · END-TO-END DELIVERY
                    </span>
                  </div>
                  <div className="floating-card-metrics">
                    <div>
                      <strong>09</strong>
                      <span>Integrated Divisions</span>
                    </div>
                    <div>
                      <strong>08</strong>
                      <span>AV Room Blueprints</span>
                    </div>
                    <div>
                      <strong>12+</strong>
                      <span>Global OEM Brands</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATEMENT BAND */}
        <div className="statement-band">
          <div className="container statement-band__inner">
            <span className="statement-tag">WHAT WE CONNECT</span>
            <p className="statement-flow">
              Audiovisual <i aria-hidden="true" /> IT Infrastructure{" "}
              <i aria-hidden="true" /> Digital Workflows{" "}
              <i aria-hidden="true" /> Engineering <i aria-hidden="true" />{" "}
              People
            </p>
            <div className="statement-badges" aria-label="Integrated ecosystems">
              <span>Microsoft Teams</span>
              <span>Google Meet</span>
              <span>Zoom</span>
              <span>Poly · Logitech · Barco</span>
            </div>
          </div>
        </div>

        {/* ABOUT & VISION */}
        <section className="section section-white" id="about">
          <div className="container">
            <div className="section-header-split">
              <div>
                <div className="section-kicker">01 / WHO WE ARE</div>
                <h2>
                  Built to solve <span className="accent-text">what matters.</span>
                </h2>
              </div>
              <p className="section-aside">
                Uniting Mriya AV&apos;s collaboration heritage with full-spectrum
                IT, procurement, and engineering execution.
              </p>
            </div>

            <div className="about-layout">
              <aside className="about-card">
                <div className="about-card__head">
                  <img
                    src="/logo-mark.svg"
                    alt="Mriya Co Limited emblem"
                    width="52"
                    height="52"
                  />
                  <span className="about-card__badge">Mriya Co Limited · Mriya AV</span>
                </div>
                <p className="about-card__quote">
                  One partner.
                  <br />
                  Multiple capabilities.
                  <br />
                  <span>Measurable value.</span>
                </p>
                <div className="about-card__stats">
                  <div>
                    <span className="mono-text">2020</span>
                    <small>Incorporated ({companyInfo.rcNumber})</small>
                  </div>
                  <div>
                    <span className="mono-text">100%</span>
                    <small>End-to-End Lifecycle Support</small>
                  </div>
                </div>
              </aside>

              <div className="about-narrative">
                <p className="about-lead">
                  Mriya Co Limited is a Nigerian technology, audiovisual, and
                  engineering solutions company committed to transforming how
                  people connect, communicate, share ideas, and operate every day.
                </p>
                <p>
                  From simplifying daily huddles, weekly all-hands, and executive
                  boardrooms to equipping interactive classrooms and mission-critical
                  facilities, we believe intuitive collaboration and engineering
                  solutions should be accessible across every sector and scale.
                </p>
                <p>
                  We transform physical workspaces into connected destinations by
                  creating seamless hybrid meeting experiences across remote desks,
                  focus pods, and conference suites. As a specialist in{" "}
                  <strong>
                    Microsoft Teams Rooms and Teams-certified devices
                  </strong>
                  , we consult, procure certified hardware and licenses, deploy, and
                  drive lasting user adoption through comprehensive training.
                </p>
                <p>
                  Beyond workplace AV, our multidisciplinary teams deliver secure IT
                  infrastructure, digital systems, specialised OEM equipment supply,
                  and civil, mechanical, and oil &amp; gas technical support across
                  upstream, midstream, and downstream operations.
                </p>
              </div>
            </div>

            <div className="mission-trio">
              <article className="trio-card trio-card--goal">
                <span className="trio-kicker">OUR GOAL</span>
                <h3>
                  Empowering people<span className="sky-dot">.</span>
                </h3>
                <p>
                  To empower talented, creative, and driven people of all ages and
                  organisations to elevate how they communicate, connect, and engage
                  with customers, students, and partners.
                </p>
              </article>

              <article className="trio-card trio-card--vision">
                <span className="trio-kicker">OUR VISION</span>
                <h3>
                  Leading integration<span className="sky-dot">.</span>
                </h3>
                <p>
                  To stand at the forefront of uncomplicated, imaginative
                  technology, audiovisual, and engineering solutions across Nigeria
                  and Africa—recognised for reliability and lasting impact.
                </p>
              </article>

              <article className="trio-card trio-card--mission">
                <span className="trio-kicker">OUR MISSION</span>
                <h3>
                  Delivering value<span className="sky-dot">.</span>
                </h3>
                <p>
                  To deliver tailored, cost-effective solutions backed by strong
                  OEM alliances, quality workmanship, comprehensive training, and
                  continuous operational improvement.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* SERVICES & APPLICATIONS */}
        <section className="section section-tinted" id="services">
          <div className="container">
            <div className="section-header-split">
              <div>
                <div className="section-kicker">02 / WHAT WE DO</div>
                <h2>
                  Expertise that{" "}
                  <span className="accent-text">works together.</span>
                </h2>
              </div>
              <p className="section-aside">
                From Pro-AV environments and enterprise IT to industrial engineering
                and procurement under one accountable partner.
              </p>
            </div>

            {/* Applications Matrix from Old Website */}
            <div className="applications-strip">
              {applicationEnvironments.map((group) => (
                <div className="app-group" key={group.id}>
                  <span className="app-group__kicker">{group.category}</span>
                  <p className="app-group__summary">{group.summary}</p>
                  <div className="app-group__pills">
                    {group.spaces.map((space) => (
                      <span className="pill-tag" key={space}>
                        {space}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Filter Tabs */}
            <div
              className="filter-bar"
              role="tablist"
              aria-label="Filter services by discipline"
            >
              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  className={`filter-tab ${
                    activeCategory === cat.id ? "filter-tab--active" : ""
                  }`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* 9 Service Cards */}
            <div className="services-grid">
              {filteredServices.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-card__media">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <span className="service-card__num mono-text">
                      {service.number} / 09
                    </span>
                  </div>
                  <div className="service-card__body">
                    <span className="service-card__label">{service.label}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <button
                      type="button"
                      className="service-card__btn"
                      onClick={() => setSelectedService(service)}
                    >
                      <span>View specifications &amp; scope</span>
                      <Plus size={17} aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COLLABORATION SPACES & POLY WINDOWS ROOMS */}
        <section className="section section-white" id="spaces">
          <div className="container">
            <div className="section-header-split">
              <div>
                <div className="section-kicker">03 / OUR SPACES</div>
                <h2>
                  Scalable rooms for{" "}
                  <span className="accent-text">every footprint.</span>
                </h2>
              </div>
              <div className="segmented-toggle" role="tablist" aria-label="Space catalogue mode">
                <button
                  type="button"
                  role="tab"
                  aria-selected={spaceMode === "blueprints"}
                  className={spaceMode === "blueprints" ? "is-active" : ""}
                  onClick={() => handleSpaceModeChange("blueprints")}
                >
                  Mriya AV Blueprints
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={spaceMode === "polyWindows"}
                  className={spaceMode === "polyWindows" ? "is-active" : ""}
                  onClick={() => handleSpaceModeChange("polyWindows")}
                >
                  Poly Windows Kits
                </button>
              </div>
            </div>

            <div className="spaces-showcase">
              <div className="spaces-selector" role="listbox" aria-label="Room size options">
                {spaceList.map((room, index) => {
                  const isSelected = room.id === activeSpace.id;
                  return (
                    <button
                      key={room.id}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      className={`space-option ${isSelected ? "space-option--active" : ""}`}
                      onClick={() => setActiveSpaceId(room.id)}
                    >
                      <div className="space-option__top">
                        <span className="space-option__idx mono-text">
                          0{index + 1}
                        </span>
                        <span className="space-option__cap">{room.capacity}</span>
                      </div>
                      <h4>{room.name}</h4>
                      <span className="space-option__dim mono-text">
                        {room.dimensions}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="space-detail-stage">
                <div className="space-detail__image">
                  <img src={activeSpace.image} alt={activeSpace.name} />
                  <div className="space-detail__badge">
                    <span>{activeSpace.tag}</span>
                  </div>
                </div>

                <div className="space-detail__content">
                  <div className="space-detail__meta">
                    <span className="mono-text">{activeSpace.dimensions}</span>
                    <span className="space-detail__cap">
                      <Users size={15} aria-hidden="true" />
                      {activeSpace.capacity}
                    </span>
                  </div>
                  <h3>{activeSpace.name}</h3>
                  <p>{activeSpace.description}</p>

                  <ul className="space-highlights">
                    {activeSpace.highlights.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={17} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => jumpToInquiry(`Room Design: ${activeSpace.name}`)}
                  >
                    Design this space with Mriya
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOFTWARE PLATFORMS, HEADSETS & PRO-AV PARTNERS */}
        <section className="section section-tinted" id="platforms">
          <div className="container">
            <div className="section-header-split">
              <div>
                <div className="section-kicker">04 / PLATFORMS &amp; ENDPOINTS</div>
                <h2>
                  Software platforms &amp;{" "}
                  <span className="accent-text">certified gear.</span>
                </h2>
              </div>
              <p className="section-aside">
                Seamless integration across Microsoft Teams, Google Meet, and Zoom
                — paired with enterprise headsets and trusted Pro-AV brands.
              </p>
            </div>

            {/* Software Platforms We Integrate */}
            <div className="platforms-grid">
              {softwarePlatforms.map((platform) => (
                <article className="platform-card" key={platform.id}>
                  <div className="platform-card__top">
                    <PlatformEmblem id={platform.id} />
                    <span className="platform-badge">{platform.badge}</span>
                  </div>
                  <h3>{platform.name}</h3>
                  <p>{platform.description}</p>
                  <ul className="platform-points">
                    {platform.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <a
                    className="platform-link"
                    href={platform.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {platform.linkLabel}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>

            {/* Enterprise Headsets Catalog */}
            <div className="headsets-block">
              <div className="headsets-banner">
                <div className="headsets-banner__copy">
                  <span className="section-kicker">ENTERPRISE HEADSETS</span>
                  <h3>
                    Crystal-clear voice for hybrid work, contact centres &amp;
                    executive desks.
                  </h3>
                  <p>
                    Find the right wireless DECT, USB-C, and Bluetooth headsets
                    from Poly and Jabra for office floors, remote work, and online
                    training.
                  </p>
                  <div className="headset-filters" role="tablist" aria-label="Filter headsets by brand">
                    {[
                      { id: "all", label: "All Headsets (8)" },
                      { id: "poly", label: "Poly (4)" },
                      { id: "jabra", label: "Jabra (4)" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={headsetBrand === tab.id}
                        className={`filter-tab ${
                          headsetBrand === tab.id ? "filter-tab--active" : ""
                        }`}
                        onClick={() => setHeadsetBrand(tab.id)}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="headsets-banner__media">
                  <img
                    src="/images/headsets-hero.jpg"
                    alt="Enterprise wireless office headsets with dual charging base"
                  />
                </div>
              </div>

              <div className="headsets-grid">
                {filteredHeadsets.map((item) => (
                  <article className="headset-card" key={item.id}>
                    <div className="headset-card__top">
                      <span
                        className={`brand-pill brand-pill--${item.brand.toLowerCase()}`}
                      >
                        {item.brand}
                      </span>
                      <span className="headset-style">{item.style}</span>
                    </div>
                    <h4>{item.model}</h4>
                    <div className="headset-variant">{item.variant}</div>
                    <p>{item.highlight}</p>
                    <div className="headset-card__foot">
                      <span className="headset-conn mono-text">
                        {item.connectivity}
                      </span>
                      <button
                        type="button"
                        className="headset-quote-btn"
                        onClick={() =>
                          jumpToInquiry(`${item.model} (${item.variant})`)
                        }
                      >
                        Quote <ArrowUpRight size={14} aria-hidden="true" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Certified Pro-AV Partners */}
            <div className="partners-panel">
              <div className="partners-panel__header">
                <div>
                  <span className="section-kicker">OUR PARTNERS</span>
                  <h3>Industry-recognised Pro-AV &amp; IT alliances.</h3>
                </div>
                <p>
                  Quality and reliability guide every OEM brand we specify, procure,
                  and deploy for Nigerian enterprises and institutions.
                </p>
              </div>

              <div className="partners-flagship-grid">
                {flagshipPartners.map((partner) => (
                  <a
                    key={partner.id}
                    href={partner.url}
                    target="_blank"
                    rel="noreferrer"
                    className="partner-card"
                  >
                    <PartnerWordmark id={partner.id} name={partner.name} />
                    <p>{partner.role}</p>
                    <span className="partner-visit">
                      Visit brand <ArrowUpRight size={14} aria-hidden="true" />
                    </span>
                  </a>
                ))}
              </div>

              <div className="ecosystem-strip">
                <span>EXTENDED OEM ECOSYSTEM</span>
                <div className="ecosystem-tags">
                  {extendedEcosystemBrands.map((brand) => (
                    <span key={brand}>{brand}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="section values-band" id="values">
          <div className="container">
            <div className="section-header-split">
              <div>
                <div className="section-kicker">05 / WHAT GUIDES US</div>
                <h2>
                  Values that show up{" "}
                  <span className="accent-text">in the work.</span>
                </h2>
              </div>
              <p className="section-aside">
                Every engineering spec, AV room build, and client relationship is
                anchored in measurable accountability.
              </p>
            </div>

            <div className="values-table">
              {values.map((val, index) => (
                <div className="value-row" key={val.title}>
                  <span className="value-num mono-text">0{index + 1}</span>
                  <h3>{val.title}</h3>
                  <p>{val.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="section section-white" id="industries">
          <div className="container">
            <div className="section-header-split">
              <div>
                <div className="section-kicker">06 / WHERE WE WORK</div>
                <h2>
                  Different sectors.{" "}
                  <span className="accent-text">Shared ambition.</span>
                </h2>
              </div>
              <p className="section-aside">
                Multidisciplinary technology and engineering expertise adapted to
                each environment.
              </p>
            </div>

            <div className="industries-grid">
              {industries.map((item, idx) => {
                const Icon = industryIcons[idx] || Building2;
                return (
                  <article className="industry-card" key={item.title}>
                    <div className="industry-card__top">
                      <span className="industry-icon">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <span className="industry-num mono-text">0{idx + 1}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="section approach-band" id="approach">
          <div className="container">
            <div className="approach-head">
              <div className="section-kicker section-kicker--sky">
                07 / HOW WE DELIVER
              </div>
              <h2>
                A clear path from{" "}
                <span className="sky-text">challenge to adoption.</span>
              </h2>
              <p>
                Every engagement follows a structured five-stage methodology built
                around room acoustics, technical suitability, clean execution, and
                post-launch training.
              </p>
            </div>

            <div className="steps-grid">
              {steps.map((step, index) => (
                <article className="step-card" key={step.title}>
                  <span className="step-num mono-text">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY MRIYA */}
        <section className="section section-white" id="why-mriya">
          <div className="container">
            <div className="section-header-split">
              <div>
                <div className="section-kicker">08 / THE MRIYA DIFFERENCE</div>
                <h2>
                  Why choose <span className="accent-text">Mriya?</span>
                </h2>
              </div>
              <p className="section-aside">
                More than an equipment vendor — a committed technical partner in
                communication, reliability, and operational growth.
              </p>
            </div>

            <div className="why-grid">
              {advantages.map((item, index) => {
                const Icon = advantageIcons[item.id] || Sparkles;
                const isLastBanner = index === advantages.length - 1;
                return (
                  <article
                    className={`why-card ${isLastBanner ? "why-card--wide" : ""}`}
                    key={item.title}
                  >
                    <div className="why-card__icon">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    {isLastBanner && (
                      <button
                        type="button"
                        className="btn btn-primary why-card__cta"
                        onClick={() => jumpToInquiry("Partnership & Project Inquiry")}
                      >
                        Partner with us <ArrowUpRight size={16} aria-hidden="true" />
                      </button>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONTACT & INTERACTIVE MESSAGE FORM */}
        <section className="section contact-band" id="contact">
          <div className="container contact-grid">
            <div className="contact-info">
              <div className="section-kicker section-kicker--sky">
                09 / CONTACT US
              </div>
              <h2>
                Let&apos;s build smarter{" "}
                <span className="sky-text">solutions together.</span>
              </h2>
              <p className="contact-intro">
                Tell us about your boardroom, classroom, enterprise IT rollout, or
                engineering project. Our Abuja team will help specify the right
                architecture, certified hardware, and delivery plan.
              </p>

              <div className="contact-cards">
                <div className="contact-row">
                  <MapPin size={19} aria-hidden="true" />
                  <div>
                    <span>ABUJA OFFICE</span>
                    <p>{companyInfo.address}</p>
                  </div>
                </div>

                <div className="contact-row">
                  <Phone size={19} aria-hidden="true" />
                  <div>
                    <span>PHONE NUMBER</span>
                    <a href={companyInfo.phoneHref}>{companyInfo.phone}</a>
                  </div>
                </div>

                <div className="contact-row">
                  <Mail size={19} aria-hidden="true" />
                  <div>
                    <span>EMAIL DESKS</span>
                    <div className="email-stack">
                      <a href={`mailto:${companyInfo.salesEmail}`}>
                        {companyInfo.salesEmail} <small>(Sales &amp; AV)</small>
                      </a>
                      <a href={`mailto:${companyInfo.primaryEmail}`}>
                        {companyInfo.primaryEmail} <small>(General)</small>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-card">
              <h3>Send us a message</h3>
              <p className="form-subtitle">
                Share your requirements and our technical team will respond promptly.
              </p>

              {submittedInquiry ? (
                <div className="form-success" role="status">
                  <CheckCircle2 size={32} className="success-icon" />
                  <h4>Inquiry prepared for {submittedInquiry.name}</h4>
                  <p>
                    Your inquiry regarding{" "}
                    <strong>{submittedInquiry.interest}</strong> is ready. Send it
                    directly to our sales &amp; technical desk or edit your message
                    below.
                  </p>
                  <div className="form-success-actions">
                    <a
                      className="btn btn-primary"
                      href={buildMailtoUrl(submittedInquiry)}
                    >
                      Open in Email App ({companyInfo.salesEmail})
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setSubmittedInquiry(null)}
                    >
                      Edit message
                    </button>
                  </div>
                </div>
              ) : (
                <form className="inquiry-form" onSubmit={handleFormSubmit} noValidate>
                  <div className="form-row-2">
                    <label>
                      <span>Your Name *</span>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Amina Bello"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, name: e.target.value }))
                        }
                      />
                    </label>
                    <label>
                      <span>Email Address *</span>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, email: e.target.value }))
                        }
                      />
                    </label>
                  </div>

                  <div className="form-row-2">
                    <label>
                      <span>Organisation / Phone</span>
                      <input
                        type="text"
                        placeholder="Company or +234..."
                        value={formState.organization}
                        onChange={(e) =>
                          setFormState((s) => ({
                            ...s,
                            organization: e.target.value,
                          }))
                        }
                      />
                    </label>
                    <label>
                      <span>Solution of Interest</span>
                      <select
                        value={formState.interest}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, interest: e.target.value }))
                        }
                      >
                        <option value="Audiovisual & Teams Rooms">
                          Audiovisual &amp; Teams Rooms
                        </option>
                        <option value="AV Room Blueprint / Poly Windows Kit">
                          AV Room Blueprint / Poly Windows Kit
                        </option>
                        <option value="Enterprise Headsets (Poly / Jabra)">
                          Enterprise Headsets (Poly / Jabra)
                        </option>
                        <option value="IT Infrastructure & Networking">
                          IT Infrastructure &amp; Networking
                        </option>
                        <option value="Educational Technology (EdTech)">
                          Educational Technology (EdTech)
                        </option>
                        <option value="Equipment Supply & Procurement">
                          Equipment Supply &amp; Procurement
                        </option>
                        <option value="Oil & Gas / Mechanical / Civil Engineering">
                          Oil &amp; Gas / Mechanical / Civil Engineering
                        </option>
                        <option value="Corporate Branding & Digital Services">
                          Corporate Branding &amp; Digital Services
                        </option>
                        {![
                          "Audiovisual & Teams Rooms",
                          "AV Room Blueprint / Poly Windows Kit",
                          "Enterprise Headsets (Poly / Jabra)",
                          "IT Infrastructure & Networking",
                          "Educational Technology (EdTech)",
                          "Equipment Supply & Procurement",
                          "Oil & Gas / Mechanical / Civil Engineering",
                          "Corporate Branding & Digital Services",
                        ].includes(formState.interest) && (
                          <option value={formState.interest}>
                            {formState.interest}
                          </option>
                        )}
                      </select>
                    </label>
                  </div>

                  <label>
                    <span>Message / Project Scope *</span>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your room size, equipment needs, timeline, or engineering project..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, message: e.target.value }))
                      }
                    />
                  </label>

                  {formError && (
                    <p className="form-error" role="alert">
                      {formError}
                    </p>
                  )}

                  <button type="submit" className="btn btn-primary btn-full">
                    <Send size={16} aria-hidden="true" />
                    Send message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand-col">
              <a href="#home" aria-label="Mriya Co Limited top">
                <MriyaLogo light />
              </a>
              <p>
                Achieving remarkable results with purpose-built audiovisual,
                technology, procurement, and engineering solutions.
              </p>
            </div>

            <div className="footer-links-col">
              <h4>Explore</h4>
              <a href="#about">Who We Are</a>
              <a href="#services">Services</a>
              <a href="#spaces">Collaboration Spaces</a>
              <a href="#platforms">Platforms &amp; Headsets</a>
            </div>

            <div className="footer-links-col">
              <h4>Head Office</h4>
              <p>{companyInfo.address}</p>
              <a href={companyInfo.phoneHref}>{companyInfo.phone}</a>
              <a href={`mailto:${companyInfo.salesEmail}`}>
                {companyInfo.salesEmail}
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} {companyInfo.name}.{" "}
              {companyInfo.rcNumber}.
            </span>
            <a className="back-to-top" href="#home">
              Back to top <ArrowUp size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={(serviceTitle) => jumpToInquiry(serviceTitle)}
      />
    </div>
  );
}

export default App;
