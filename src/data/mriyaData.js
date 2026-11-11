import instrumentationImg from "../assets/images/instrumentation-automation.jpg";
import serviceBrandingImg from "../assets/images/service-branding.jpg";
import serviceCivilImg from "../assets/images/service-civil.jpg";
import serviceDigitalImg from "../assets/images/service-digital.jpg";
import serviceEdtechImg from "../assets/images/service-edtech.jpg";
import serviceItImg from "../assets/images/service-it.jpg";
import serviceMechImg from "../assets/images/service-mech.jpg";
import serviceOilgasImg from "../assets/images/service-oilgas.jpg";
import serviceSupplyImg from "../assets/images/service-supply.jpg";
import spaceHuddleImg from "../assets/images/space-huddle.jpg";
import spaceLargeImg from "../assets/images/space-large.jpg";
import spaceMediumImg from "../assets/images/space-medium.jpg";
import spacePhoneboothImg from "../assets/images/space-phonebooth.jpg";

export const companyInfo = {
  name: "Mriya Co Limited",
  shortName: "Mriya",
  subBrand: "Mriya AV",
  rcNumber: "RC: 1700889",
  address: "BASSAN Plaza, Constitution Avenue, Central Business District, Abuja-FCT",
  region: "Abuja, Federal Capital Territory, Nigeria",
  phone: "+234 704 011 9747",
  phoneHref: "tel:+2347040119747",
  primaryEmail: "info@mriyacolimited.com.ng",
  salesEmail: "sales001@mriyacolimited.com.ng",
  website: "www.mriyacolimited.com.ng",
  websiteUrl: "https://www.mriyacolimited.com.ng",
};

export const applicationEnvironments = [
  {
    id: "workplace",
    category: "Workplace & Executive",
    summary: "Seamless hybrid meetings from daily standups to executive leadership sessions.",
    spaces: ["Boardrooms", "Huddle Rooms", "Event Spaces"],
  },
  {
    id: "commercial",
    category: "Commercial & Wayfinding",
    summary: "High-visibility digital communication, navigation, and branded customer environments.",
    spaces: ["Digital Signage", "Tenant Directories", "Rental & Retail Stores"],
  },
  {
    id: "education",
    category: "Education & Broadcast",
    summary: "Interactive teaching environments built for in-room and remote learner retention.",
    spaces: ["Interactive Classrooms", "Webinar Rooms", "Lecture Rooms"],
  },
];

export const serviceCategories = [
  { id: "all", label: "All Capabilities" },
  { id: "av-digital", label: "AV, EdTech & Digital" },
  { id: "it-supply", label: "IT & Procurement" },
  { id: "engineering", label: "Engineering & Energy" },
];

export const services = [
  {
    number: "01",
    category: "av-digital",
    title: "Audiovisual Integration & Mriya AV",
    label: "Collaboration & Teams Rooms",
    description:
      "Specialist Microsoft Teams Rooms, Pro-AV design, video conferencing, acoustics, and wireless presentation systems.",
    image: spaceMediumImg,
    capabilities: [
      "Microsoft Teams Rooms consulting, certified hardware, licensing, deployment & user adoption training",
      "Audio-visual design, collaboration technology, control programming & onsite technical support",
      "Video conferencing systems & IP / USB / Bluetooth conference phones",
      "Large-format 4K UHD displays, interactive touch displays, projection & motorized screens",
      "Touch panel controllers, presentation switchers, HDBaseT distribution & room scheduling panels",
      "Digital signage systems, tenant directories & motorized window shades",
      "Network audio systems, microphones, speakers, paging systems, sound masking & speech privacy",
      "Acoustic wall paneling, contact centre deployments, workspace flooring & collaboration furniture",
    ],
    note:
      "Integrated end-to-end across boardrooms, huddle rooms, auditoriums, event spaces, classrooms, and command centres.",
  },
  {
    number: "02",
    category: "it-supply",
    title: "IT Infrastructure",
    label: "Enterprise Systems",
    description:
      "Secure, dependable computing, server, and network infrastructure engineered for resilient daily business operations.",
    image: serviceItImg,
    capabilities: [
      "Computers, laptops, desktops, workstations, and business peripherals",
      "Servers, storage arrays, enterprise networking switches, and accessories",
      "Structured copper & fibre cabling, LAN/WAN architecture, and wireless networking",
      "Enterprise connectivity and unified communications infrastructure",
      "IT equipment sourcing, supply, deployment, and system configuration",
      "Infrastructure upgrades, proactive maintenance, and ongoing technical support",
      "Workplace IT modernisation and business continuity planning",
    ],
  },
  {
    number: "03",
    category: "av-digital",
    title: "Digital Services",
    label: "Business Transformation",
    description:
      "Modern digital tools, cloud workflows, and custom platforms that streamline operations and strengthen visibility.",
    image: serviceDigitalImg,
    capabilities: [
      "Business process digitisation and workflow automation",
      "Website architecture, UI design, and digital presence solutions",
      "Cloud productivity suites and hybrid collaboration platforms",
      "Digital document management and enterprise information systems",
      "Operational dashboards, data reporting, and business intelligence",
      "Digital communication, content strategy, and branding integration",
      "Technology advisory, vendor selection, and implementation support",
    ],
    note:
      "Scope tailored to organisational requirements and selected platform ecosystems.",
  },
  {
    number: "04",
    category: "av-digital",
    title: "Educational Technology",
    label: "EdTech & Smart Learning",
    description:
      "Interactive teaching and hybrid learning environments designed for schools, universities, and training academies.",
    image: serviceEdtechImg,
    capabilities: [
      "Interactive flat panels, smart boards, and connected classroom solutions",
      "Digital science laboratories and STEM teaching equipment",
      "Learning management systems (LMS) and digital curriculum platforms",
      "Computer-based testing (CBT) centres and assessment infrastructure",
      "Classroom AV, lecture capture, webinar rooms, and hybrid learning rigs",
      "Digital attendance and student engagement tools",
      "Hardware supply, installation, faculty training, and ongoing support",
    ],
  },
  {
    number: "05",
    category: "it-supply",
    title: "Equipment Supply",
    label: "Procurement & Technical Sourcing",
    description:
      "Specification-matched sourcing and coordinated OEM supply for institutional, corporate, and industrial projects.",
    image: serviceSupplyImg,
    capabilities: [
      "IT, Pro-AV, telecommunications, and enterprise networking hardware",
      "Certified Microsoft Teams, Zoom, and Google Meet room endpoints & headsets",
      "Electrical, mechanical, instrumentation, and industrial components",
      "Cables, racks, switchers, mounts, and specialised engineering accessories",
      "Educational, laboratory, and vocational training equipment",
      "OEM sourcing, technical quotations, and end-to-end logistics coordination",
      "Specification verification, procurement planning, and phased site delivery",
    ],
    note:
      "Featured OEM ecosystem includes Poly (HP), Logitech, Barco, Yealink, Jabra, Shure, ViewSonic, Unilumin, WyreStorm, Lenovo, HP, and Huawei.",
  },
  {
    number: "06",
    category: "engineering",
    title: "Oil & Gas Services",
    label: "Technical & Facility Support",
    description:
      "Specialised inspection, calibration, instrumentation, and facility support across upstream, midstream, and downstream assets.",
    image: serviceOilgasImg,
    capabilities: [
      "Storage tank calibration and precision calibration chart preparation",
      "Ultrasonic Thickness Measurement (UTM) for corrosion and wall-thickness integrity",
      "Non-destructive ultrasonic testing support and facility inspection services",
      "Storage tank cleaning, maintenance, and asset rehabilitation",
      "Tank level measurement systems, probes, and remote telemetry monitoring",
      "Flowmeter supply, installation, calibration, and instrumentation support",
      "Flow assurance support and Piping & Instrumentation Diagrams (P&IDs)",
      "Industrial plant equipment installation and technical capacity training",
    ],
  },
  {
    number: "07",
    category: "engineering",
    title: "Mechanical Engineering",
    label: "Installations & Maintenance",
    description:
      "Dependable mechanical installations, rotating equipment support, and industrial maintenance for operational facilities.",
    image: serviceMechImg,
    capabilities: [
      "Mechanical equipment installation, alignment, and replacement",
      "Industrial pumps, valves, piping runs, and auxiliary systems installation",
      "Preventive plant maintenance and critical equipment rehabilitation",
      "Mechanical system integration and multi-discipline engineering support",
      "Inspection coordination, performance verification, and diagnostics",
      "Site installation, pressure testing, and commissioning handover",
    ],
  },
  {
    number: "08",
    category: "engineering",
    title: "Civil Engineering",
    label: "Construction & EPC",
    description:
      "Coordinated engineering, procurement, and construction delivery for commercial, institutional, and energy infrastructure.",
    image: serviceCivilImg,
    capabilities: [
      "Civil works, commercial building construction, and structural rehabilitation",
      "Concrete foundations, civil pads, and structural steel installations",
      "Workspace fit-outs, acoustic facility modifications, and infrastructure upgrades",
      "Electrical power distribution, lighting installation, and commissioning",
      "EPC project planning, materials procurement, and site supervision",
      "Mechanical and civil support works for oil and gas installations",
      "Lifecycle facility maintenance, repairs, and structural upgrades",
    ],
    note: "Delivered in compliance with project scope, safety codes, and engineering standards.",
  },
  {
    number: "09",
    category: "av-digital",
    title: "Corporate Branding",
    label: "Executive Gifts & Print",
    description:
      "Curated executive merchandise, branded stationery, and presentation collateral that elevate organisational identity.",
    image: serviceBrandingImg,
    capabilities: [
      "Executive corporate gifts and client appreciation sets",
      "Custom-branded notebooks, pens, apparel, and technology accessories",
      "Corporate stationery, technical brochures, and presentation folders",
      "Conference, exhibition, and event merchandise production",
      "Bespoke onboarding kits and branded packaging solutions",
    ],
  },
];

export const collaborationSpaces = {
  blueprints: [
    {
      id: "phonebooth",
      name: "Phonebooth Spaces",
      dimensions: "6 × 6′ – 10 × 10′",
      capacity: "1 – 2 People",
      tag: "On-Demand Hybrid Pods",
      image: spacePhoneboothImg,
      description:
        "Mriya AV solutions for acoustic booths and compact focus pods give hybrid professionals private, echo-free video conferencing on demand.",
      highlights: [
        "Compact all-in-one camera & noise-cancelling mic bar",
        "Personal 24″–32″ collaboration monitor or BYOD USB-C dock",
        "Acoustic felt baffling & automated occupancy lighting",
      ],
    },
    {
      id: "huddle",
      name: "Huddle Space",
      dimensions: "10 × 10′ – 15 × 15′",
      capacity: "3 – 5 People",
      tag: "Agile Team Collaboration",
      image: spaceHuddleImg,
      description:
        "When the need to collaborate strikes, Mriya AV designs deliver seamless, lifelike interactivity for teams across physical and virtual huddle rooms.",
      highlights: [
        "4K wide-angle video bar with automatic speaker framing",
        "43″–55″ commercial 4K UHD display & wireless content sharing",
        "One-touch tabletop meeting join for Teams, Zoom & Meet",
      ],
    },
    {
      id: "medium",
      name: "Medium Conference Room",
      dimensions: "15 × 20′ – 20 × 20′",
      capacity: "6 – 12 People",
      tag: "All-in-One Meeting Suites",
      image: spaceMediumImg,
      description:
        "Mriya AV's all-in-one medium conference room audio-video systems make multi-participant hybrid collaboration intuitive and reliable.",
      highlights: [
        "Single or dual 65″–75″ 4K displays with dual-screen content layout",
        "Intelligent multi-mic pickup & room scheduling panel outside door",
        "Tabletop touch console with HDBaseT & wireless presentation",
      ],
    },
    {
      id: "large",
      name: "Large Conference Room",
      dimensions: "15 × 28′ – 20 × 33′",
      capacity: "12 – 24+ People",
      tag: "Executive Boardrooms & Training",
      image: spaceLargeImg,
      description:
        "Engineered for executive boardrooms, town halls, and training suites where every seat needs crystal-clear voice capture and unobstructed sightlines.",
      highlights: [
        "Dual 85″+ 4K UHD displays or modular LED video wall integration",
        "Ceiling beamforming microphone arrays & zoned network loudspeakers",
        "Dual-camera presenter tracking, acoustic paneling & motorized shades",
      ],
    },
  ],
  polyWindows: [
    {
      id: "poly-focus",
      name: "Poly Windows Focus Room",
      dimensions: "Up to 10 × 10′",
      capacity: "1 – 2 People",
      tag: "Microsoft Teams on Windows",
      image: spacePhoneboothImg,
      description:
        "Certified Poly + Windows native Microsoft Teams Rooms bundle engineered for solo executives and focused 1-on-1 hybrid calls.",
      highlights: [
        "Native Microsoft Teams Rooms Windows compute appliance",
        "Poly Studio acoustic noise-block AI camera & speaker bar",
        "Dedicated touchscreen console with single-tap calendar join",
      ],
    },
    {
      id: "poly-small",
      name: "Poly Windows Small Room",
      dimensions: "10 × 12′ – 15 × 15′",
      capacity: "3 – 5 People",
      tag: "Certified Compact Kit",
      image: spaceHuddleImg,
      description:
        "Fast-deploying small huddle room kit pairing Poly Acoustic Fence clarity with native Windows Teams Rooms management.",
      highlights: [
        "120° FOV 4K camera with intelligent group & speaker framing",
        "Zero-touch room provisioning and remote IT health monitoring",
        "Seamless wired HDMI ingest & wireless casting",
      ],
    },
    {
      id: "poly-medium",
      name: "Poly Windows Medium Room",
      dimensions: "15 × 20′ – 20 × 20′",
      capacity: "6 – 10 People",
      tag: "Certified Mid-Room Kit",
      image: spaceMediumImg,
      description:
        "Balanced mid-sized conference package combining studio-grade optical zoom with tabletop expansion audio and touch control.",
      highlights: [
        "Poly Studio USB/modular bar + Windows Teams Rooms compute",
        "Expansion microphone coverage for full conference table clarity",
        "Dual-monitor support for simultaneous gallery & content views",
      ],
    },
    {
      id: "poly-large",
      name: "Poly Windows Large Training Room",
      dimensions: "18 × 28′ – 25 × 35′",
      capacity: "12 – 24+ People",
      tag: "Certified Large Room & Training",
      image: spaceLargeImg,
      description:
        "Flagship Poly Windows room architecture built for boardrooms, multi-row lecture rooms, and corporate training centres.",
      highlights: [
        "Poly Studio E70 dual-lens smart tracking camera system",
        "Integrated DSP audio, ceiling microphones & amplified speaker zones",
        "Full Mriya AV commissioning, licensing & staff adoption training",
      ],
    },
  ],
};

export const softwarePlatforms = [
  {
    id: "teams",
    name: "Microsoft Teams",
    badge: "Mriya Certified Specialist",
    description:
      "A unified, cloud-based collaboration hub for group chat, online meetings, and enterprise video conferencing. Mriya Co Limited specialises in Microsoft Teams Rooms consulting, certified device & license procurement, deployment, and adoption training.",
    highlights: ["Teams Rooms (MTR) Deployment", "Certified Devices & Licensing", "User Adoption Training"],
    link: "https://teamsdemo.office.com/#/",
    linkLabel: "Explore Teams Demo",
  },
  {
    id: "meet",
    name: "Google Meet",
    badge: "Workspace Integration",
    description:
      "Enterprise video conferencing built for organisations of every size. Join pre-scheduled calendar events from boardrooms or mobile devices using links, meeting codes, or direct phone dial-in.",
    highlights: ["Google Workspace Calendar Sync", "Zero-Friction Browser Join", "Cross-Room Hardware Kits"],
    link: "https://apps.google.com/meet/",
    linkLabel: "Explore Google Meet",
  },
  {
    id: "zoom",
    name: "Zoom",
    badge: "Zoom Rooms Ready",
    description:
      "Cloud video conferencing, webinars, and team messaging unified in one intuitive platform—delivering consistent experiences across Android, iOS, Windows, Mac, and dedicated conference rooms.",
    highlights: ["Zoom Rooms & Webinars", "Cross-Platform Compatibility", "HD Audio & Wireless Sharing"],
    link: "https://zoom.us/",
    linkLabel: "Explore Zoom",
  },
];

export const headsets = [
  {
    id: "poly-voyager-5200-2way",
    brand: "Poly",
    model: "Poly Voyager 5200",
    variant: "Office 2-Way Base",
    style: "Over-the-Ear Mono",
    connectivity: "Desk Phone · PC · Mobile",
    highlight: "Four-mic WindSmart noise cancellation for executives on the move.",
  },
  {
    id: "poly-voyager-5200-usbc",
    brand: "Poly",
    model: "Poly Voyager 5200",
    variant: "Office USB-C, 2-Way Base",
    style: "Over-the-Ear Mono",
    connectivity: "USB-C · Desk Phone · Bluetooth",
    highlight: "Modern USB-C laptop connectivity paired with multi-device office base.",
  },
  {
    id: "poly-savi-8210",
    brand: "Poly",
    model: "Poly Savi 8210 USB-A",
    variant: "Office, Monaural, Standard",
    style: "Monaural On-Ear",
    connectivity: "DECT Wireless · USB-A · Desk",
    highlight: "Long-range DECT wireless freedom with active close-conversation limiting.",
  },
  {
    id: "poly-savi-8220",
    brand: "Poly",
    model: "Poly Savi 8220",
    variant: "Office, Stereo, Standard",
    style: "Binaural Stereo",
    connectivity: "DECT Wireless · PC · Desk · Mobile",
    highlight: "Dual-ear active noise cancellation (ANC) for focused open-office teams.",
  },
  {
    id: "jabra-engage-65-mono",
    brand: "Jabra",
    model: "Jabra Engage 65",
    variant: "Mono Headset",
    style: "Monaural Headband",
    connectivity: "DECT Wireless · Desk + PC",
    highlight: "Industry-leading DECT wireless range up to 150m with all-day battery life.",
  },
  {
    id: "jabra-engage-65-conv",
    brand: "Jabra",
    model: "Jabra Engage 65",
    variant: "Convertible Headset",
    style: "3-in-1 Convertible",
    connectivity: "DECT Wireless · USB + Desk",
    highlight: "Featherlight earhook, neckband, or headband flexibility for call centres.",
  },
  {
    id: "jabra-engage-75-mono",
    brand: "Jabra",
    model: "Jabra Engage 75",
    variant: "Mono Headset",
    style: "Monaural Touch Base",
    connectivity: "DECT + Dual Bluetooth (5 Devices)",
    highlight: "Touchscreen base station connecting up to five simultaneous devices.",
  },
  {
    id: "jabra-engage-65-stereo",
    brand: "Jabra",
    model: "Jabra Engage 65",
    variant: "Stereo Headset",
    style: "Binaural Stereo",
    connectivity: "DECT Wireless · Desk + PC",
    highlight: "Crystal-clear wideband audio and integrated busylight for high-focus roles.",
  },
];

export const flagshipPartners = [
  {
    id: "poly",
    name: "Poly (HP)",
    role: "Video Conferencing & Enterprise Headsets",
    url: "https://www.hp.com/us-en/poly.html",
  },
  {
    id: "logitech",
    name: "Logitech",
    role: "Room Cameras, Rally Systems & Peripherals",
    url: "https://www.logitech.com/en-us/products/video-conferencing.html",
  },
  {
    id: "barco",
    name: "Barco",
    role: "ClickShare Wireless Presentation & LED Walls",
    url: "https://www.barco.com/en/products/clickshare-conferencing-collaboration",
  },
  {
    id: "yealink",
    name: "Yealink",
    role: "Microsoft Teams Rooms & SIP Endpoints",
    url: "https://www.yealink.com/en",
  },
];

export const extendedEcosystemBrands = [
  "Jabra",
  "Shure",
  "ViewSonic",
  "Unilumin",
  "WyreStorm",
  "Lenovo",
  "HP",
  "Huawei",
  "Siemens",
  "Schneider Electric",
  "ABB",
  "Endress+Hauser",
];

export const instrumentationAutomation = {
  image: instrumentationImg,
  summary:
    "In modern oil & gas, manufacturing, water treatment, utilities, and pharmaceutical facilities, precision and reliability are non-negotiable. Mriya Co Limited delivers Instrumentation & Automation systems that tighten process control, eliminate manual errors, and connect field assets to real-time monitoring.",
  pillars: [
    {
      id: "instrumentation",
      title: "Process Instrumentation",
      summary:
        "High-accuracy field sensors, transmitters, and analyzers for flow, temperature, pressure, level, and liquid/gas composition.",
    },
    {
      id: "automation",
      title: "Industrial Automation",
      summary:
        "PLC programming, SCADA supervision, Variable Frequency Drives (VFDs), and machine safety architectures that cut manual error.",
    },
    {
      id: "iiot",
      title: "Smart Monitoring & IIoT",
      summary:
        "Wireless data logging, vibration/thermal diagnostics, predictive maintenance, and energy management dashboards.",
    },
  ],
  outcomes: [
    {
      metric: "±0.1%",
      label: "Measurement Accuracy",
      detail: "Calibrated process transmitters and analytical instrumentation.",
    },
    {
      metric: "Predictive",
      label: "Downtime Reduction",
      detail: "Early vibration, thermal, and flow fault detection before failures.",
    },
    {
      metric: "ESD / SIL",
      label: "Enhanced Plant Safety",
      detail: "Automated shutdowns, safety relays, and gas hazard interlocks.",
    },
    {
      metric: "Optimised",
      label: "Lower Operating Cost",
      detail: "VFD motor efficiency, precision dosing, and energy tracking.",
    },
  ],
  solutionTracks: [
    {
      id: "process",
      tabLabel: "1. Process Instrumentation",
      heading: "High-Precision Field Measurement & Analysis",
      intro:
        "We deploy calibrated field instrumentation for critical continuous monitoring across process plants, tank farms, and treatment utilities.",
      items: [
        {
          title: "Temperature Monitoring",
          detail: "RTDs, thermocouples, and infrared thermal sensors for kilns, vessels, and pipelines.",
        },
        {
          title: "Flow & Level Measurement",
          detail: "Ultrasonic flowmeters, radar tank level probes, and differential pressure transmitters.",
        },
        {
          title: "pH, Chlorine & Turbidity Analysis",
          detail: "Lab-grade analytical probes for water, effluent, and industrial wastewater treatment.",
        },
        {
          title: "Gas & Liquid Analyzers",
          detail: "Real-time toxic and combustible gas detection for hazardous industrial zones.",
        },
      ],
      brandsLabel: "Supported Instrumentation Brands",
      brands: ["Endress+Hauser", "Yokogawa", "Rosemount / Emerson"],
    },
    {
      id: "plc-scada",
      tabLabel: "2. Industrial Automation",
      heading: "PLC, SCADA, Motor Drives & Safety Systems",
      intro:
        "Centralised automation systems built to streamline plant operations, protect rotating equipment, and simplify operator supervision.",
      items: [
        {
          title: "PLC Programming",
          detail: "Modular control logic and panel builds using Siemens SIMATIC and Allen-Bradley controllers.",
        },
        {
          title: "SCADA Control & HMI",
          detail: "Centralised operator graphics, alarm trending, batch logs, and remote supervisory control.",
        },
        {
          title: "Variable Frequency Drives (VFDs)",
          detail: "Soft-start and closed-loop motor speed control for pumps, fans, and compressors.",
        },
        {
          title: "Machine Safety Systems",
          detail: "Certified E-Stops, safety relays, interlock switches, and optical safety light curtains.",
        },
      ],
      brandsLabel: "Supported Automation Ecosystems",
      brands: ["Siemens SIMATIC", "Schneider Electric", "ABB", "Allen-Bradley"],
    },
    {
      id: "iiot",
      tabLabel: "3. Smart Monitoring & IIoT",
      heading: "Wireless Telemetry, Predictive Care & Energy Management",
      intro:
        "Bridge legacy plant assets with cloud and on-premise dashboards so engineering teams act on live operational data.",
      items: [
        {
          title: "Wireless Data Logging",
          detail: "Remote telemetry gateways delivering encrypted real-time process readings anywhere.",
        },
        {
          title: "Predictive Maintenance",
          detail: "Continuous vibration and thermal condition monitoring to prevent unplanned pump or bearing failure.",
        },
        {
          title: "Energy Management Systems",
          detail: "Power-quality metering and load analytics to monitor and reduce facility energy consumption.",
        },
        {
          title: "P&IDs & Loop Commissioning",
          detail: "As-built Piping & Instrumentation Diagrams, loop calibration charts, and operator training.",
        },
      ],
      brandsLabel: "Key Engineering Deliverables",
      brands: ["P&ID Documentation", "Calibration Charts", "24/7 Telemetry Dashboards"],
    },
  ],
  caseSpotlight: {
    kicker: "INDUSTRIAL APPLICATION BENCHMARK",
    title: "Automated Water & Utility Treatment Control",
    challenge:
      "Water and industrial utility facilities often contend with inconsistent chemical dosing, fluctuating residual levels, and slow manual inspection rounds.",
    solution: [
      "Automated chemical dosing pumps driven by inline pH and chlorine analyzers.",
      "SCADA-controlled alarm thresholds with real-time closed-loop adjustments.",
      "Centralised telemetry logging for continuous regulatory compliance audits.",
    ],
    results: [
      { value: "99.9%", label: "Target treatment quality compliance" },
      { value: "30%", label: "Faster fault diagnostics via SCADA" },
      { value: "20–40%", label: "Lower maintenance & manual overhead" },
    ],
  },
};

export const values = [
  {
    title: "Integrity & Accountability",
    text: "We work transparently, honour our commitments, and take full responsibility for the quality and outcomes of every engagement.",
  },
  {
    title: "Innovation & Excellence",
    text: "We combine proven industry-leading Pro-AV and IT ecosystems with modern engineering practices and continuous improvement.",
  },
  {
    title: "Quality & Safety",
    text: "We prioritise safe working practices, technical compliance, and rigorous commissioning across offices and industrial plants alike.",
  },
  {
    title: "Customer Commitment",
    text: "We take time to understand each client's workflows and design practical solutions aligned with real operational goals.",
  },
  {
    title: "Reliability & Value",
    text: "We focus on dependable delivery, comprehensive user adoption training, responsive support, and lasting lifecycle value.",
  },
];

export const industries = [
  {
    title: "Corporate & Government",
    description:
      "Executive boardrooms, Microsoft Teams Rooms, IT infrastructure, digital signage, and institutional procurement.",
  },
  {
    title: "Education & Training",
    description:
      "Interactive classrooms, lecture & webinar rooms, digital science labs, CBT centres, and campus collaboration suites.",
  },
  {
    title: "Industrial & Manufacturing",
    description:
      "Equipment sourcing, mechanical installations, acoustic/paging systems, and plant maintenance support.",
  },
  {
    title: "Energy & Oil and Gas",
    description:
      "Storage tank calibration, UTM inspections, instrumentation, flowmeters, P&IDs, and facility rehabilitation.",
  },
  {
    title: "Construction & Real Estate",
    description:
      "Civil works, EPC execution, tenant directories, acoustic paneling, motorized shades, and smart building fit-outs.",
  },
  {
    title: "Technology & Contact Centres",
    description:
      "Hybrid workspace infrastructure, enterprise headsets, contact centre deployment, and digital workflow tools.",
  },
];

export const steps = [
  {
    title: "Discover",
    description:
      "Understand room environments, technical specifications, user workflows, budgets, and operational targets.",
  },
  {
    title: "Design",
    description:
      "Architect certified AV, software, IT, or engineering systems matched to every room dimension and compliance need.",
  },
  {
    title: "Coordinate",
    description:
      "Manage OEM sourcing, device licensing, vendor logistics, and multidisciplinary staging schedules.",
  },
  {
    title: "Deliver",
    description:
      "Execute physical installation, control programming, civil/mechanical works, testing, and commissioning.",
  },
  {
    title: "Adopt & Support",
    description:
      "Deliver handover documentation, user adoption training, and responsive onsite technical support.",
  },
];

export const advantages = [
  {
    id: "integrated",
    title: "Integrated capabilities",
    description:
      "Pro-AV, IT infrastructure, digital services, equipment procurement, and engineering under one accountable partner.",
  },
  {
    id: "certified",
    title: "Teams & AV specialisation",
    description:
      "Deep domain focus in Microsoft Teams Rooms, Zoom, Google Meet, and enterprise acoustic environments.",
  },
  {
    id: "value",
    title: "Cost-conscious delivery",
    description:
      "Practical OEM sourcing balanced for build quality, scalability, warranty coverage, and lifecycle ROI.",
  },
  {
    id: "coordination",
    title: "Reliable coordination",
    description:
      "Unified project management linking licensing, hardware logistics, site prep, programming, and handover.",
  },
  {
    id: "tailored",
    title: "Space-tailored engineering",
    description:
      "Every huddle pod, boardroom, classroom, or industrial facility is configured to its exact physical requirements.",
  },
  {
    id: "safety",
    title: "Quality & safety compliance",
    description:
      "Disciplined technical standards, clean cabling and installation craft, and strict field HSE practices.",
  },
  {
    id: "partnership",
    title: "Long-term adoption",
    description:
      "Comprehensive user training, documentation, and responsive post-deployment support from our Abuja team.",
  },
];
