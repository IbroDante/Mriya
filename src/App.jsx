import { useState } from "react";
import "./App.css";

const services = [
  {
    number: "01",
    title: "Audiovisual Integration",
    label: "Collaboration Solutions",
    description:
      "Professional AV systems that improve communication, collaboration, and information sharing.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000&q=85",
    capabilities: [
      "Video conferencing and unified communications systems",
      "Interactive displays, smart boards, and digital learning systems",
      "LED video walls, controllers, and digital signage",
      "Professional audio systems, microphones, amplifiers, and loudspeakers",
      "AV over IP, HDMI matrix switching, signal distribution, and control systems",
      "Boardroom, conference room, auditorium, command centre, and training room integration",
      "Configuration, commissioning, maintenance, and technical support",
    ],
  },
  {
    number: "02",
    title: "IT Infrastructure",
    label: "Technology Solutions",
    description:
      "Secure, dependable infrastructure and technology for modern business operations.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&q=85",
    capabilities: [
      "Computers, laptops, desktops, workstations, and peripherals",
      "Servers, storage systems, networking equipment, and accessories",
      "Structured cabling, LAN/WAN infrastructure, and wireless networking",
      "Enterprise connectivity and communications infrastructure",
      "IT equipment sourcing, supply, deployment, and configuration",
      "Infrastructure upgrades, technical support, and maintenance",
      "Workplace IT modernisation and business technology solutions",
    ],
  },
  {
    number: "03",
    title: "Digital Services",
    label: "Business Transformation",
    description:
      "Digital tools and technologies that streamline workflows and improve productivity.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=85",
    capabilities: [
      "Business process digitisation and workflow automation",
      "Website development and digital presence solutions",
      "Cloud-based business tools and collaboration platforms",
      "Digital document management and information systems",
      "Data reporting, dashboards, and business intelligence",
      "Digital communication, content, and branding support",
      "Technology advisory, solution selection, and implementation support",
    ],
    note:
      "Specific services depend on project requirements and the capabilities of selected platforms and partners.",
  },
  {
    number: "04",
    title: "Educational Technology",
    label: "EdTech & Digital Learning",
    description:
      "Technology-enabled teaching and learning environments for schools and organisations.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&q=85",
    capabilities: [
      "Interactive flat panels and smart classroom solutions",
      "Digital science laboratories and STEM learning equipment",
      "Learning management systems and digital learning platforms",
      "Computer-based testing and assessment infrastructure",
      "Classroom AV, lecture capture, and hybrid learning systems",
      "Digital attendance and classroom engagement technologies",
      "Educational equipment supply, installation, training, and support",
    ],
  },
  {
    number: "05",
    title: "Equipment Supply",
    label: "Procurement & Technical Sourcing",
    description:
      "Technical sourcing and coordinated supply for institutional and industrial projects.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&q=85",
    capabilities: [
      "IT, AV, telecommunications, and networking equipment",
      "Electrical, mechanical, and industrial equipment",
      "Cables, instrumentation, accessories, and technical components",
      "Educational, laboratory, and training equipment",
      "OEM products and specialised technical supplies",
      "Vendor sourcing, quotations, and logistics coordination",
      "Specification matching, procurement planning, and delivery coordination",
    ],
    note:
      "Products may include Lenovo, HP, Huawei, Logitech, Yealink, Jabra, HP/Poly, ViewSonic, Unilumin, Shure, and WyreStorm. OEM authorisation, availability, and warranties depend on the product and supply channel.",
  },
  {
    number: "06",
    title: "Oil & Gas Services",
    label: "Technical & Facility Support",
    description:
      "Specialised technical support across upstream, midstream, and downstream operations.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1000&q=85",
    capabilities: [
      "Storage tank calibration and calibration chart preparation",
      "Ultrasonic Thickness Measurement (UTM) for corrosion and wall-thickness assessment",
      "Ultrasonic testing support and related inspection services",
      "Storage tank cleaning, maintenance, and rehabilitation",
      "Tank level measurement, probes, and remote monitoring",
      "Flowmeter supply, installation, and instrumentation support",
      "Flow assurance support and piping and instrumentation diagrams (P&IDs)",
      "Industrial equipment installation and maintenance",
      "Technical training and capacity development",
    ],
  },
  {
    number: "07",
    title: "Mechanical Engineering",
    label: "Installations & Maintenance",
    description:
      "Mechanical installation and support for facilities, infrastructure, and operational assets.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1000&q=85",
    capabilities: [
      "Mechanical equipment installation and replacement",
      "Pumps, piping, and associated equipment installation",
      "Industrial maintenance and equipment rehabilitation",
      "Mechanical system integration and technical support",
      "Equipment inspection coordination and performance support",
      "Installation, testing, and commissioning support",
    ],
  },
  {
    number: "08",
    title: "Civil Engineering",
    label: "Construction & EPC",
    description:
      "Coordinated engineering, procurement, and construction for infrastructure projects.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1000&q=85",
    capabilities: [
      "Civil works, building construction, and rehabilitation",
      "Concrete works, foundations, and structural installations",
      "Facility modifications and infrastructure upgrades",
      "Electrical installation, integration, and commissioning",
      "Project planning, materials procurement, and execution coordination",
      "Mechanical and civil installations for oil and gas facilities",
      "Maintenance, repairs, and construction support",
    ],
    note: "Services are subject to project scope and applicable requirements.",
  },
  {
    number: "09",
    title: "Corporate Branding",
    label: "Gifts & Printing",
    description:
      "Thoughtful merchandise and print solutions that strengthen brand identity.",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1000&q=85",
    capabilities: [
      "Corporate gifts and promotional merchandise",
      "Branded notebooks, pens, apparel, and accessories",
      "Corporate stationery and business printing",
      "Promotional materials and event merchandise",
      "Customised gift packages and branding support",
    ],
  },
];

const values = [
  {
    title: "Integrity & Accountability",
    text: "We work transparently, honour our commitments, and take responsibility for the quality and outcomes of our work.",
  },
  {
    title: "Innovation & Excellence",
    text: "We embrace emerging technologies, modern engineering practices, and continuous improvement.",
  },
  {
    title: "Quality & Safety",
    text: "We prioritise safe working practices, technical compliance, and responsible project execution.",
  },
  {
    title: "Customer Commitment",
    text: "We listen carefully and develop solutions aligned with each client's operational and commercial objectives.",
  },
  {
    title: "Reliability & Value",
    text: "We focus on dependable service, responsive support, efficient resources, and long-term value.",
  },
];

const industries = [
  ["Corporate & Government", "Workplace technology, IT infrastructure, meeting rooms, procurement, and digital solutions."],
  ["Education & Training", "Smart classrooms, EdTech, digital laboratories, CBT centres, and learning infrastructure."],
  ["Industrial & Manufacturing", "Equipment supply, installations, mechanical services, and maintenance support."],
  ["Energy & Oil and Gas", "Tank calibration, UTM, instrumentation, facility rehabilitation, and technical services."],
  ["Construction & Infrastructure", "Civil works, electrical installations, EPC support, and infrastructure upgrades."],
  ["Technology & Digital Business", "Digital workflows, IT systems, connectivity, collaboration, and business technology."],
];

const steps = [
  ["Discover", "Understand needs, specifications, operational challenges, budgets, and objectives."],
  ["Design", "Select suitable products, technologies, engineering methods, and implementation strategies."],
  ["Coordinate", "Manage sourcing, suppliers, logistics, and resources for execution."],
  ["Deliver", "Coordinate installation, integration, construction, testing, and quality control."],
  ["Support", "Provide handover, documentation, orientation, and ongoing support where included."],
];

const advantages = [
  ["Integrated capabilities", "Technology, digital services, supply, and engineering under one business partner."],
  ["Technical understanding", "Solutions chosen around defined operational and technical requirements."],
  ["Cost-conscious delivery", "Practical sourcing that considers quality, value, and lifecycle requirements."],
  ["Reliable coordination", "A connected approach to procurement, logistics, installation, and execution."],
  ["Client-focused solutions", "Services tailored to each client's goals, environment, and budget."],
  ["Quality & safety", "Attention to technical standards, safe practices, and quality control."],
  ["Long-term partnership", "Dependable service, responsive communication, and enduring relationships."],
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openService, setOpenService] = useState(null);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Mriya Co Limited, home">
          <img src="/logo-mark.png" alt="" />
          <span>
            <strong>Mriya</strong>
            <small>CO LIMITED</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav id="primary-navigation" className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#industries" onClick={closeMenu}>Industries</a>
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's talk <Arrow diagonal />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> TECHNOLOGY × ENGINEERING × IMPACT</div>
            <h1>Purpose-built solutions. <em>Remarkable results.</em></h1>
            <p>
              Integrated technology, digital, procurement, and engineering
              solutions that help organisations work smarter, operate safer,
              and move forward with confidence.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#services">Explore our services <Arrow diagonal /></a>
              <a className="text-link" href="#about">Discover Mriya <Arrow /></a>
            </div>
            <div className="hero-bottom">
              <span>ABUJA, NIGERIA<br />SERVING ORGANISATIONS ACROSS SECTORS</span>
              <span className="scroll-hint">SCROLL TO EXPLORE ↓</span>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1500&q=90"
              alt="Contemporary collaborative workspace"
            />
            <div className="hero-visual-overlay" />
            <div className="hero-image-label">
              <span className="label-dot" />
              ONE PARTNER. MULTIPLE CAPABILITIES.
            </div>
            <div className="hero-shape" aria-hidden="true">M</div>
          </div>
        </section>

        <div className="statement-bar">
          <span>WHAT WE CONNECT</span>
          <strong>Technology <i /> Digital <i /> Engineering <i /> People</strong>
          <span>01 / INTEGRATED SOLUTIONS</span>
        </div>

        <section className="section about" id="about">
          <div className="section-intro">
            <div className="section-kicker">01 / WHO WE ARE</div>
            <h2>Built to solve <span>what matters.</span></h2>
          </div>
          <div className="about-content">
            <div className="about-highlight">
              <img src="/logo-mark.png" alt="" />
              <p>One partner.<br />Multiple capabilities.<br /><span>Measurable value.</span></p>
            </div>
            <div className="about-text">
              <p className="lead">
                Mriya Co Limited is a Nigerian technology and engineering
                solutions company delivering integrated, end-to-end services.
              </p>
              <p>
                We bring together technical expertise, innovative technologies,
                quality equipment, and dependable project execution to create
                practical, scalable, and cost-effective solutions.
              </p>
              <p>
                From intelligent meeting rooms and digital workplaces to smart
                learning environments, IT infrastructure, specialised
                procurement, and industrial engineering, we design, source,
                integrate, implement, and support solutions throughout the
                project lifecycle.
              </p>
              <p>
                We support corporate, education, government, industrial,
                energy, and oil and gas organisations—including technical work
                across the upstream, midstream, and downstream value chain.
                Our customer-focused approach prioritises quality, safety,
                reliability, and long-term partnerships.
              </p>
            </div>
          </div>
        </section>

        <section className="vision-section">
          <div className="vision-card">
            <span className="mini-label">THE FUTURE WE SEE</span>
            <h3>Our vision<span>.</span></h3>
            <p>
              To be a leading provider of integrated technology, digital, and
              engineering solutions in Nigeria and across Africa, recognised
              for innovation, technical excellence, service reliability, and
              our contribution to organisational growth and industrial development.
            </p>
          </div>
          <div className="vision-card mission-card">
            <span className="mini-label">THE WORK WE DO</span>
            <h3>Our mission<span>.</span></h3>
            <p>
              To deliver innovative, dependable, and cost-effective solutions
              tailored to our clients' needs. Through technical expertise,
              strategic partnerships, quality delivery, and continuous
              improvement, we help enhance productivity, efficiency, safety,
              and lasting value.
            </p>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading">
            <div>
              <div className="section-kicker">02 / WHAT WE DO</div>
              <h2>Expertise that <span>works together.</span></h2>
            </div>
            <p>
              A connected portfolio of services, tailored to the people,
              places, and challenges behind every project.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.number}>
                <div className="service-image">
                  <img src={service.image} alt="" loading="lazy" />
                  <span className="service-number">{service.number} / 09</span>
                </div>
                <div className="service-body">
                  <span className="service-label">{service.label}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button
                    className="service-expand"
                    type="button"
                    aria-expanded={openService === index}
                    aria-controls={`service-details-${index}`}
                    onClick={() => setOpenService(openService === index ? null : index)}
                  >
                    {openService === index ? "Close capabilities" : "View capabilities"}
                    <span aria-hidden="true">{openService === index ? "−" : "+"}</span>
                  </button>
                  {openService === index && (
                    <div className="service-details" id={`service-details-${index}`}>
                      <ul>
                        {service.capabilities.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                      {service.note && <p className="service-note">{service.note}</p>}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="values-section" id="values">
          <div className="values-top">
            <div className="section-kicker">03 / WHAT GUIDES US</div>
            <h2>Values that show up <span>in the work.</span></h2>
          </div>
          <div className="values-list">
            {values.map((value, index) => (
              <div className="value-row" key={value.title}>
                <span>0{index + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section industries-section" id="industries">
          <div className="section-heading">
            <div>
              <div className="section-kicker">04 / WHERE WE WORK</div>
              <h2>Different sectors. <span>Shared ambition.</span></h2>
            </div>
            <p>Multidisciplinary thinking for the operational needs of every industry we serve.</p>
          </div>
          <div className="industries-grid">
            {industries.map(([title, description], index) => (
              <article className="industry-card" key={title}>
                <span className="industry-index">0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <span className="industry-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="approach-section" id="approach">
          <div className="approach-heading">
            <div className="section-kicker">05 / HOW WE DELIVER</div>
            <h2>A clear path from <span>challenge to outcome.</span></h2>
            <p>
              Every engagement follows a structured, client-focused approach
              designed around technical suitability, accountability, and value.
            </p>
          </div>
          <div className="steps">
            {steps.map(([title, description], index) => (
              <div className="step" key={title}>
                <span className="step-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section why-section">
          <div className="section-heading">
            <div>
              <div className="section-kicker">06 / THE MRIYA DIFFERENCE</div>
              <h2>Why choose <span>Mriya?</span></h2>
            </div>
            <p>More than a service provider: a committed partner in growth, innovation, and operational success.</p>
          </div>
          <div className="why-grid">
            {advantages.map(([title, description]) => (
              <article className="why-item" key={title}>
                <span className="why-icon" aria-hidden="true">✳</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-main">
            <div className="section-kicker">07 / LET'S WORK TOGETHER</div>
            <h2>Let's build smarter <em>solutions together.</em></h2>
            <p>
              Tell us what you are working on. We'll help you find the right
              combination of technology, products, and engineering expertise.
            </p>
            <a className="button button-light" href="mailto:info@mriyacolimited.com.ng">
              Start a conversation <Arrow diagonal />
            </a>
          </div>
          <div className="contact-details">
            <div><span>EMAIL</span><a href="mailto:info@mriyacolimited.com.ng">info@mriyacolimited.com.ng</a></div>
            <div><span>PHONE</span><a href="tel:+2347040119747">+234 704 011 9747</a></div>
            <div><span>LOCATION</span><p>Abuja, Federal Capital Territory, Nigeria</p></div>
            <div><span>WEBSITE</span><a href="https://www.mriyacolimited.com.ng">www.mriyacolimited.com.ng</a></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="footer-brand" href="#home">
          <img src="/logo-mark.png" alt="" />
          <span>Mriya Co Limited</span>
        </a>
        <p>Achieving remarkable results with purpose-built solutions.</p>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Mriya Co Limited. RC: 1700889.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

export default App;