export interface ProblemStatement {
  id: string;
  code: string;
  title: string;
  category: 'Software' | 'Hardware';
  theme: string;
  ministry: string;
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  expectedOutcome: string;
  datasetUrl?: string;
  tags: string[];
}

export interface ThemeItem {
  id: string;
  name: string;
  iconName: string;
  psCount: number;
  description: string;
  accentColor: string;
}

export interface ProcessStep {
  step: number;
  tag: string;
  title: string;
  lead: string;
  details: string[];
  deliverable: string;
}

export interface PastEdition {
  year: string;
  edition: string;
  teams: string;
  nodalCenters: string;
  themeHighlights: string[];
  spotlightStartup: string;
  highlight: string;
}

export interface NodalCenter {
  id: string;
  name: string;
  city: string;
  state: string;
  coordinates: { x: number; y: number }; // Percentage on map
  geoCoordinates: [number, number]; // [longitude, latitude] for GIS & react-simple-maps
  category: 'Software' | 'Hardware' | 'Both';
  teamsHosted: number;
}

export const SIH_METRICS = {
  students: "1,804,218+",
  institutes: "9,406",
  problemStatements: "3,158",
  alumni: "12,800+",
  startupsFunded: "150+",
  nodalCenters: "75+",
  cashPrizePerWinner: "₹1,00,000",
  totalPrizePool: "₹2.5+ Crore",
  continuousHackathonHours: "36 Hours",
  hardwareDurationDays: "5 Days",
};

export const SIH_THEMES: ThemeItem[] = [
  {
    id: "smart-automation",
    name: "Smart Automation & AI",
    iconName: "Cpu",
    psCount: 412,
    description: "Intelligent utilization of resources, combining artificial intelligence, neural workflows, and predictive analytics to automate complex civic and industrial processes.",
    accentColor: "#FF8A00",
  },
  {
    id: "space-tech",
    name: "Space Technology (ISRO)",
    iconName: "Rocket",
    psCount: 148,
    description: "Orbital telemetry, rover path planning, satellite remote sensing, atmospheric re-entry telemetry, and lunar crater classification for space missions.",
    accentColor: "#0A84FF",
  },
  {
    id: "fitness-sports",
    name: "Fitness & Sports Analytics",
    iconName: "Activity",
    psCount: 185,
    description: "High-precision athletic tracking, biomechanical injury prevention, smart wearables, and grassroots sports talent discovery systems.",
    accentColor: "#00F5A0",
  },
  {
    id: "heritage-culture",
    name: "Heritage & Culture",
    iconName: "Landmark",
    psCount: 196,
    description: "Preservation of archaeological monuments, AR/VR immersive museum experiences, classical manuscript digitization, and indigenous art empowerment.",
    accentColor: "#D97706",
  },
  {
    id: "medtech-healthtech",
    name: "MedTech / BioTech / HealthTech",
    iconName: "Stethoscope",
    psCount: 384,
    description: "Cutting-edge diagnostics, affordable biomedical sensors, decentralized health records, and AI-driven triage for remote rural healthcare centers.",
    accentColor: "#EF4444",
  },
  {
    id: "agriculture-foodtech",
    name: "Agriculture & Rural FoodTech",
    iconName: "Sprout",
    psCount: 320,
    description: "Hyper-local weather telemetry, drone pesticide targeting, precision soil micro-nutrient sensors, and transparent farm-to-mandi supply chains.",
    accentColor: "#10B981",
  },
  {
    id: "smart-vehicles",
    name: "Smart Vehicles & EV Mobility",
    iconName: "Car",
    psCount: 228,
    description: "Battery management systems, vehicular V2X communication, regenerative braking, and autonomous obstacle navigation for modern electric vehicles.",
    accentColor: "#6366F1",
  },
  {
    id: "transportation-logistics",
    name: "Transportation & Logistics",
    iconName: "Truck",
    psCount: 245,
    description: "Smart freight routing, multi-modal terminal management, urban traffic signal automation, and AI port cargo turnaround optimization.",
    accentColor: "#F59E0B",
  },
  {
    id: "robotics-drones",
    name: "Robotics & Drones",
    iconName: "Bot",
    psCount: 290,
    description: "Unmanned aerial systems for medical emergency payload drops, search and rescue in disaster zones, and underground pipe inspection crawlers.",
    accentColor: "#EC4899",
  },
  {
    id: "clean-green-tech",
    name: "Clean & Green Technology",
    iconName: "Leaf",
    psCount: 310,
    description: "Automated municipal solid waste segregation, biodegradable packaging, wastewater zero-liquid discharge systems, and river cleaning IoT.",
    accentColor: "#14B8A6",
  },
  {
    id: "tourism-hospitality",
    name: "Tourism & Eco-Travel",
    iconName: "Compass",
    psCount: 164,
    description: "Smart tourist footprint regulation, immersive hyper-local multilingual travel guides, homestay booking engines, and eco-trail trackers.",
    accentColor: "#8B5CF6",
  },
  {
    id: "renewable-energy",
    name: "Renewable & Sustainable Energy",
    iconName: "Zap",
    psCount: 275,
    description: "Micro-grid solar tracking, predictive grid load balancing, green hydrogen storage sensors, and offshore wind power efficiency monitors.",
    accentColor: "#F97316",
  },
  {
    id: "blockchain-cybersecurity",
    name: "Blockchain & Cybersecurity",
    iconName: "ShieldAlert",
    psCount: 260,
    description: "Tamper-proof credential verification, zero-trust network perimeter defense, secure ballot tallying, and ransomware early warning honeypots.",
    accentColor: "#3B82F6",
  },
  {
    id: "smart-education",
    name: "Smart Education & EdTech",
    iconName: "GraduationCap",
    psCount: 340,
    description: "Adaptive multimodal learning for differently-abled students, gamified vernacular STEM curricula, and automated skill-gap career pathing.",
    accentColor: "#84CC16",
  },
  {
    id: "disaster-management",
    name: "Disaster Risk & Early Warning",
    iconName: "Flame",
    psCount: 198,
    description: "Glacial lake outburst flood forecasting, seismic wave early alerts, landslide susceptibility neural networks, and crisis resource logistics.",
    accentColor: "#DC2626",
  },
  {
    id: "fintech-toys-misc",
    name: "Fintech, Toys & Gamification",
    iconName: "Gamepad2",
    psCount: 215,
    description: "Offline digital micro-payments for non-smartphone users, gamified financial literacy, and indigenous educational toys blending cultural roots with STEM.",
    accentColor: "#A855F7",
  },
];

export const PROBLEM_STATEMENTS: ProblemStatement[] = [
  {
    id: "SIH1601",
    code: "SIH1601",
    title: "AI-Based Crater Morphology and Obstacle Navigation for Lunar Rover Telemetry",
    category: "Software",
    theme: "Space Technology (ISRO)",
    ministry: "Department of Space (ISRO)",
    complexity: "Advanced",
    description: "Develop a lightweight edge-AI neural model to process lunar surface stereo camera imagery, detect hazards (craters, boulders, steep slopes), and compute optimal autonomous traversability maps with sub-100ms latency.",
    expectedOutcome: "A deployable model running on radiation-hardened SoC architectures with test accuracy >94% on synthetic and Chandrayaan orbital benchmark data.",
    tags: ["Computer Vision", "ISRO", "Lunar Navigation", "Edge AI"]
  },
  {
    id: "SIH1602",
    code: "SIH1602",
    title: "Automated Acoustic and Thermal Rail Track Defect Inspection Drone",
    category: "Hardware",
    theme: "Robotics & Drones",
    ministry: "Ministry of Railways",
    complexity: "Advanced",
    description: "Design an autonomous tetherless rail crawler/drone fitted with ultrasonic transducers and LWIR thermal cameras to detect micro-fissures and internal rail stress anomalies at 40 km/h.",
    expectedOutcome: "Working physical prototype capable of continuous 3-hour operation with GPS geotagged flaw alerts delivered to the railway maintenance division.",
    tags: ["Railways", "Hardware Prototype", "Ultrasonics", "Thermal Imaging"]
  },
  {
    id: "SIH1603",
    code: "SIH1603",
    title: "Decentralized Real-Time River Water Quality Sensor Node with LoRaWAN Mesh",
    category: "Hardware",
    theme: "Clean & Green Technology",
    ministry: "National Mission for Clean Ganga (Ministry of Jal Shakti)",
    complexity: "Intermediate",
    description: "Solar-powered floating buoy measuring dissolved oxygen (DO), biochemical oxygen demand (BOD), pH, turbidity, and heavy metal traces with long-range decentralized mesh connectivity.",
    expectedOutcome: "Self-sustaining buoy with anti-fouling sensor probes and low-cost manufacturing under ₹12,000 per node.",
    tags: ["Jal Shakti", "IoT", "LoRaWAN", "Clean Ganga"]
  },
  {
    id: "SIH1604",
    code: "SIH1604",
    title: "Multilingual AI Deepfake & Audio Cloned Identity Scam Detector",
    category: "Software",
    theme: "Blockchain & Cybersecurity",
    ministry: "Ministry of Electronics & Information Technology (MeitY)",
    complexity: "Advanced",
    description: "Browser extension and API pipeline that analyzes live video and audio streams to detect synthetic face generation and voice cloning in Indian regional languages (Hindi, Tamil, Bengali, Telugu).",
    expectedOutcome: "Sub-500ms inference API with confidence score breakdown and forensic artifacts highlighting manipulated lip sync and spectral vocal anomalies.",
    tags: ["MeitY", "Cybersecurity", "Deepfake", "Speech AI"]
  },
  {
    id: "SIH1605",
    code: "SIH1605",
    title: "Offline-First Blockchain Patient Records for Remote Tribal Health Outposts",
    category: "Software",
    theme: "MedTech / BioTech / HealthTech",
    ministry: "Ministry of Health & Family Welfare",
    complexity: "Intermediate",
    description: "Cryptographically verified patient EHR app that operates completely without internet on tablet devices, syncing via peer-to-peer Wi-Fi Direct and updating to the Ayushman Bharat Digital Mission (ABDM) chain.",
    expectedOutcome: "Zero-data-loss synchronization protocol compliant with ABDM standards and Aadhaar tokenized anonymization.",
    tags: ["Healthcare", "ABDM", "Blockchain", "Offline-First"]
  },
  {
    id: "SIH1606",
    code: "SIH1606",
    title: "Smart Soldier Wearable with Multi-Gas Hazard Detection & Vital Telemetry",
    category: "Hardware",
    theme: "Smart Automation & AI",
    ministry: "DRDO (Dte of IT & Cyber Security)",
    complexity: "Advanced",
    description: "Ultra-rugged tactical vest module integrating PPG heart rate, core temperature, carbon monoxide, methane, and blast shock sensors with encrypted UHF burst transmission.",
    expectedOutcome: "MIL-STD-810G compliant miniature hardware module with 48h active battery life and buddy-alert emergency beacon.",
    tags: ["DRDO", "Defense Tech", "Tactical Wearable", "Telemetry"]
  },
  {
    id: "SIH1607",
    code: "SIH1607",
    title: "Satellite Hyperspectral Crop Stress & Soil Salinity Early Warning Platform",
    category: "Software",
    theme: "Agriculture & Rural FoodTech",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    complexity: "Intermediate",
    description: "Web and mobile portal utilizing Sentinel-2 and Landsat-9 spectral bands to detect crop nitrogen deficiency, bacterial blight, and root rot 14 days before visible leaf wilting.",
    expectedOutcome: "Actionable SMS/WhatsApp advisories in 12 Indian languages for smallholder farmers with exact fertilizer dosage prescriptions.",
    tags: ["Agritech", "Satellite Remote Sensing", "Soil Health", "AI Advisory"]
  },
  {
    id: "SIH1608",
    code: "SIH1608",
    title: "Autonomous Underwater Vehicle (AUV) for Ship Hull Biofouling & Weld Inspection",
    category: "Hardware",
    theme: "Robotics & Drones",
    ministry: "Mazagon Dock Shipbuilders Ltd.",
    complexity: "Advanced",
    description: "Compact waterproof ROV/AUV with magnetic wheels and high-definition stereo imaging to crawl over naval ship hulls underwater, mapping weld defects and marine bio-encrustation.",
    expectedOutcome: "Working submersible robot tested to 20m depth with real-time video feed and automated crack measurement overlay.",
    tags: ["Naval Defense", "Robotics", "Marine Tech", "Mazagon Dock"]
  },
  {
    id: "SIH1609",
    code: "SIH1609",
    title: "AI Dynamic Pothole 3D Volumetric Mapping via Public Bus Dashcams",
    category: "Software",
    theme: "Transportation & Logistics",
    ministry: "Ministry of Road Transport and Highways (MoRTH)",
    complexity: "Intermediate",
    description: "Computer vision system that runs on standard dashcams mounted on public state transport buses to map road potholes, calculate asphalt fill volume, and prioritize repair work orders.",
    expectedOutcome: "City-wide automated road roughness index (IRI) heat map and automated contractor repair verification portal.",
    tags: ["MoRTH", "Smart City", "Computer Vision", "Road Safety"]
  },
  {
    id: "SIH1610",
    code: "SIH1610",
    title: "Modular Solar-Powered Cold Storage Pod for Perishable Horticulture Produce",
    category: "Hardware",
    theme: "Renewable & Sustainable Energy",
    ministry: "Ministry of Food Processing Industries",
    complexity: "Intermediate",
    description: "Design a decentralized 2-ton thermal storage pod utilizing phase-change materials (PCM) and solar PV to maintain 4°C-8°C internal temperature without diesel generator backup.",
    expectedOutcome: "Fabricated scaled prototype maintaining temperature stability for 72 hours under intermittent solar irradiance.",
    tags: ["Clean Energy", "Cold Storage", "PCM Tech", "Food Processing"]
  },
  {
    id: "SIH1611",
    code: "SIH1611",
    title: "AR-Powered Heritage Immersion Engine for Historic UNESCO Monuments",
    category: "Software",
    theme: "Heritage & Culture",
    ministry: "Ministry of Culture / Archaeological Survey of India",
    complexity: "Beginner",
    description: "Location-aware mobile AR application that reconstructs damaged historical monuments to their 14th-century architectural grandeur in real-time as visitors walk through the heritage site.",
    expectedOutcome: "Spatial computing experience with multilingual historical storytelling, binaural audio, and zero-latency visual overlay on mobile browsers.",
    tags: ["Culture", "Augmented Reality", "Spatial Computing", "Tourism"]
  },
  {
    id: "SIH1612",
    code: "SIH1612",
    title: "Decentralized Micro-Payment Terminal with Acoustic NFC for Feature Phones",
    category: "Software",
    theme: "Fintech, Toys & Gamification",
    ministry: "Department of Financial Services",
    complexity: "Intermediate",
    description: "Cryptographically secure financial transaction protocol that communicates via encrypted sound waves between any speaker and microphone without internet or NFC hardware.",
    expectedOutcome: "Working Android and KaiOS prototype enabling instant peer-to-peer rural transactions with end-to-end encryption.",
    tags: ["Fintech", "Soundwave Pay", "Financial Inclusion", "UPI"]
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    tag: "CURATION & INTAKE",
    title: "Problem Statement Formulation",
    lead: "Ministries, state departments, PSUs, and enterprise partners publish real-world national bottlenecks.",
    details: [
      "Over 3,100+ challenges screened by AICTE Technical Advisory Board",
      "Categorized into Software (36h non-stop) and Hardware (5-day physical prototyping)",
      "Open access to data sets, APIs, and department nodal officer briefings",
    ],
    deliverable: "Official PS Repository & Live Portal Release"
  },
  {
    step: 2,
    tag: "CAMPUS ONBOARDING",
    title: "University SPOC Verification & PS Locking",
    lead: "Each accredited college nominates an official Single Point of Contact (SPOC) to coordinate campus teams.",
    details: [
      "SPOC verification on national SIH portal with institutional credentials",
      "Institutes review and lock target problem statements for their student body",
      "Guidelines released for student cohort eligibility and mandatory female representation",
    ],
    deliverable: "Verified Campus SPOC Network across 9,400+ Colleges"
  },
  {
    step: 3,
    tag: "INTERNAL ARENA",
    title: "Internal Campus Hackathons",
    lead: "Universities host internal campus hackathons to filter the sharpest 30 ideas + 5 waitlisted squads.",
    details: [
      "Mandatory 6-member team structure with at least one female innovator",
      "External industry jury presence during campus ideation pitch",
      "High-pressure 24h internal sprints replicating national finale conditions",
    ],
    deliverable: "Top 30 Nominated Institutional Teams per University"
  },
  {
    step: 4,
    tag: "NATIONAL SEEDING",
    title: "Central Portal Idea Submission",
    lead: "Nominated team leaders submit technical architecture, pitch deck PPT, and prototype video.",
    details: [
      "Standardized AICTE presentation deck detailing technical feasibility",
      "Detailed bill-of-materials (BOM) for Hardware edition applicants",
      "Automated plagiarism and originality verification across 50,000+ submissions",
    ],
    deliverable: "National Idea Dossier submitted for Blind Evaluation"
  },
  {
    step: 5,
    tag: "EXPERT REVIEW",
    title: "Blind Evaluation & Grand Finale Shortlisting",
    lead: "Premier jury panels composed of ministry scientists, tech leads, and venture investors evaluate submissions.",
    details: [
      "Multi-tier blind evaluation with zero institutional bias",
      "Top 5 finalist squads selected per problem statement",
      "Release of Grand Finale Nodal Center allotment and travel logistics",
    ],
    deliverable: "Official Finalist Squads Invited to 75+ Nodal Centers"
  },
  {
    step: 6,
    tag: "THE ARENA",
    title: "36-Hour Grand Finale Sprint",
    lead: "Simultaneous national sprint across 75+ premier nodal hubs with live evaluation and Hon'ble PM interaction.",
    details: [
      "36 hours non-stop code marathon / 120 hours hardware fabrication",
      "Continuous mentoring rounds by senior ministry scientists and engineers",
      "₹1,00,000 cash grant awarded per winning team with fast-track startup incubation",
    ],
    deliverable: "Nation-Building Working Solutions & Startup Spinoffs"
  },
];

export const PAST_EDITIONS: PastEdition[] = [
  {
    year: "2025",
    edition: "8th Edition",
    teams: "55,000+ Ideas Submitted",
    nodalCenters: "75 Hubs Nationwide",
    themeHighlights: ["Generative AI for Governance", "Space Tech & ISRO Moonshot", "Clean Hydrogen Grid"],
    spotlightStartup: "AeroShield Systems (drone defense startup incubated from SIH25)",
    highlight: "First edition with specialized DeepTech Hardware category and defense ministry funding."
  },
  {
    year: "2024",
    edition: "7th Edition",
    teams: "52,000+ Teams",
    nodalCenters: "68 Nodal Centers",
    themeHighlights: ["Smart Agriculture", "Cyber Forensics", "Heritage AR Preservation"],
    spotlightStartup: "KisanDrishti (satellite crop diagnostics serving 40,000+ farmers)",
    highlight: "Record-breaking female participation with over 38% women team leads."
  },
  {
    year: "2023",
    edition: "6th Edition",
    teams: "44,000+ Teams",
    nodalCenters: "55 Centers",
    themeHighlights: ["MedTech Diagnostics", "EV Battery Swap", "Disaster Warning"],
    spotlightStartup: "PulseHeal Med (portable ECG monitor funded by ICMR)",
    highlight: "Direct virtual interaction of finalist teams with Hon'ble Prime Minister Narendra Modi."
  },
  {
    year: "2022",
    edition: "5th Edition",
    teams: "38,000+ Teams",
    nodalCenters: "48 Centers",
    themeHighlights: ["Fintech Inclusion", "Drone Medical Drops", "Clean Ganga IoT"],
    spotlightStartup: "RiverSense (water telemetry installed at 12 Ganga ghats)",
    highlight: "Introduction of special problem statements for Union Territories and North-East states."
  },
  {
    year: "2020",
    edition: "4th Edition (Digital)",
    teams: "35,000+ Teams",
    nodalCenters: "100% Virtual Cloud Arena",
    themeHighlights: ["Pandemic Logistics", "Digital Education", "Contactless Civic Tech"],
    spotlightStartup: "Edubridge Bharat (vernacular education platform)",
    highlight: "World's largest continuous virtual hackathon conducted seamlessly during lockdown."
  },
  {
    year: "2019",
    edition: "3rd Edition",
    teams: "28,000+ Teams",
    nodalCenters: "42 Centers",
    themeHighlights: ["Hardware Fabrication", "Robotics", "Renewable Energy"],
    spotlightStartup: "SolarHarvest Cold Chain",
    highlight: "First dedicated 5-day continuous Hardware hackathon edition launched."
  },
  {
    year: "2018",
    edition: "2nd Edition",
    teams: "18,000+ Teams",
    nodalCenters: "36 Centers",
    themeHighlights: ["Smart Cities", "Traffic Telemetry", "Waste Management"],
    spotlightStartup: "CivicPulse AI",
    highlight: "Expansion to 27 central government ministries and all state departments."
  },
  {
    year: "2017",
    edition: "Inaugural Edition",
    teams: "10,000+ Teams",
    nodalCenters: "26 Centers",
    themeHighlights: ["Digital India", "Paperless Governance", "Rural Connectivity"],
    spotlightStartup: "DigiDoc Verification Engine",
    highlight: "The birth of the world's largest open innovation movement."
  },
];

export const NODAL_CENTERS: NodalCenter[] = [
  { id: "delhi", name: "IIT Delhi", city: "New Delhi", state: "Delhi", coordinates: { x: 38, y: 30 }, geoCoordinates: [77.1926, 28.5457], category: "Both", teamsHosted: 180 },
  { id: "bombay", name: "IIT Bombay", city: "Mumbai", state: "Maharashtra", coordinates: { x: 26, y: 58 }, geoCoordinates: [72.9133, 19.1334], category: "Software", teamsHosted: 160 },
  { id: "madras", name: "IIT Madras", city: "Chennai", state: "Tamil Nadu", coordinates: { x: 44, y: 78 }, geoCoordinates: [80.2337, 12.9915], category: "Both", teamsHosted: 150 },
  { id: "kanpur", name: "IIT Kanpur", city: "Kanpur", state: "Uttar Pradesh", coordinates: { x: 48, y: 36 }, geoCoordinates: [80.2329, 26.5123], category: "Hardware", teamsHosted: 140 },
  { id: "kharagpur", name: "IIT Kharagpur", city: "Kharagpur", state: "West Bengal", coordinates: { x: 68, y: 46 }, geoCoordinates: [87.3099, 22.3149], category: "Software", teamsHosted: 170 },
  { id: "roorkee", name: "IIT Roorkee", city: "Roorkee", state: "Uttarakhand", coordinates: { x: 40, y: 24 }, geoCoordinates: [77.8964, 29.8649], category: "Both", teamsHosted: 130 },
  { id: "hyderabad", name: "IIIT Hyderabad", city: "Hyderabad", state: "Telangana", coordinates: { x: 40, y: 62 }, geoCoordinates: [78.3489, 17.4455], category: "Software", teamsHosted: 190 },
  { id: "guwahati", name: "IIT Guwahati", city: "Guwahati", state: "Assam", coordinates: { x: 82, y: 34 }, geoCoordinates: [91.6916, 26.1878], category: "Both", teamsHosted: 120 },
  { id: "bengaluru", name: "IISc Bengaluru", city: "Bengaluru", state: "Karnataka", coordinates: { x: 38, y: 72 }, geoCoordinates: [77.5671, 13.0158], category: "Hardware", teamsHosted: 160 },
  { id: "ahmedabad", name: "Nirma University", city: "Ahmedabad", state: "Gujarat", coordinates: { x: 24, y: 46 }, geoCoordinates: [72.5447, 23.1287], category: "Software", teamsHosted: 140 },
  { id: "bhopal", name: "MANIT Bhopal", city: "Bhopal", state: "Madhya Pradesh", coordinates: { x: 42, y: 46 }, geoCoordinates: [77.4058, 23.2156], category: "Both", teamsHosted: 130 },
  { id: "jaipur", name: "MNIT Jaipur", city: "Jaipur", state: "Rajasthan", coordinates: { x: 34, y: 34 }, geoCoordinates: [75.8118, 26.8640], category: "Software", teamsHosted: 140 },
  { id: "chandigarh", name: "Punjab Engineering College", city: "Chandigarh", state: "Punjab", coordinates: { x: 36, y: 22 }, geoCoordinates: [76.7868, 30.7663], category: "Both", teamsHosted: 120 },
  { id: "kochi", name: "CUSAT", city: "Kochi", state: "Kerala", coordinates: { x: 34, y: 84 }, geoCoordinates: [76.3283, 10.0431], category: "Software", teamsHosted: 110 },
  { id: "bhubaneswar", name: "IIT Bhubaneswar", city: "Bhubaneswar", state: "Odisha", coordinates: { x: 64, y: 54 }, geoCoordinates: [85.6744, 20.1484], category: "Both", teamsHosted: 130 },
];

export const SAMPLE_SPOCS = [
  { institute: "Indian Institute of Technology, Delhi", spocName: "Prof. Arvind Saini", email: "spoc.sih@iitd.ac.in", state: "Delhi", status: "Verified" },
  { institute: "Birla Institute of Technology and Science, Pilani", spocName: "Dr. Meenakshi Sharma", email: "sih.spoc@pilani.bits-pilani.ac.in", state: "Rajasthan", status: "Verified" },
  { institute: "College of Engineering, Pune (COEP)", spocName: "Prof. Rajesh Kulkarni", email: "spoc_sih@coep.ac.in", state: "Maharashtra", status: "Verified" },
  { institute: "Vellore Institute of Technology, Vellore", spocName: "Dr. K. Ramanathan", email: "sih.coordinator@vit.ac.in", state: "Tamil Nadu", status: "Verified" },
  { institute: "National Institute of Technology, Tiruchirappalli", spocName: "Dr. S. Sundar", email: "spoc@nitt.edu", state: "Tamil Nadu", status: "Verified" },
  { institute: "Delhi Technological University (DTU)", spocName: "Prof. Amit Srivastava", email: "sih.spoc@dtu.ac.in", state: "Delhi", status: "Verified" },
  { institute: "Jadavpur University, Kolkata", spocName: "Prof. Debashis Ghosh", email: "sih_spoc@jadavpuruniversity.in", state: "West Bengal", status: "Verified" },
  { institute: "Thapar Institute of Engineering and Technology", spocName: "Dr. Harpreet Singh", email: "spoc.sih@thapar.edu", state: "Punjab", status: "Verified" },
];

export const LEADERSHIP_DATA = [
  {
    name: "Shri Narendra Modi",
    role: "Hon'ble Prime Minister of India",
    quote: "Smart India Hackathon has become a benchmark of innovation for our youth. When young minds engage with real national challenges, solutions emerge that transform 1.4 billion lives.",
    highlight: "Chief Patron & Visionary Leader"
  },
  {
    name: "Dr. Abhay Jere",
    role: "Chief Innovation Officer (CIO), MoE & Vice Chairman, AICTE",
    quote: "SIH is not merely a competition; it is the catalyst that dismantled the silos between academic curricula and mission-critical government operations.",
    highlight: "Architect of Smart India Hackathon"
  },
  {
    name: "Prof. T.G. Sitharam",
    role: "Chairman, All India Council for Technical Education (AICTE)",
    quote: "Through SIH, we empower students to step out of exam halls and become job creators, IP generators, and deep-tech startup founders for Viksit Bharat.",
    highlight: "AICTE Leadership"
  }
];

export const MINISTRIES_LIST = [
  "Department of Space (ISRO)",
  "Ministry of Defence / DRDO",
  "Ministry of Electronics & Information Technology (MeitY)",
  "Ministry of Health & Family Welfare",
  "Ministry of Railways",
  "Ministry of Jal Shakti (Clean Ganga)",
  "Ministry of Agriculture & Farmers Welfare",
  "Council of Scientific and Industrial Research (CSIR)",
  "Ministry of Road Transport and Highways (MoRTH)",
  "Department of Atomic Energy (DAE)",
  "Ministry of New and Renewable Energy",
  "Ministry of Culture",
  "Bharat Electronics Limited (BEL)",
  "Mazagon Dock Shipbuilders Ltd.",
  "National Disaster Management Authority (NDMA)"
];
