export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  heroImage: string;
  features: string[];
  solutions: { title: string; desc: string }[];
  approach: { title: string; desc: string }[];
}

export interface TrackingStatus {
  id: string;
  trackingNumber: string;
  type: string;
  mode: 'Ocean Freight' | 'Air Freight' | 'Customs Clearance' | 'Road Transport';
  status: 'In Transit' | 'Customs Cleared' | 'Delivered' | 'Documentation Ready';
  origin: string;
  destination: string;
  vesselFlight: string;
  containerId: string;
  eta: string;
  etd: string;
  progressPercent: number;
  timeline: {
    stage: string;
    location: string;
    date: string;
    completed: boolean;
    active?: boolean;
    description: string;
  }[];
}

export const COMPANY_INFO = {
  name: "Averon Freight Solutions LLP",
  shortName: "Averon",
  tagline: "Your Gateway to Global Trade",
  subTagline: "International Freight Forwarding • Customs Solutions • Global Logistics",
  phones: ["+91 98334 64629", "+91 9833464627"],
  emails: ["info@averonfs.com", "sales@averonfs.com"],
  website: "www.averonfs.com",
  linkedin: "https://www.linkedin.com/company/averonfreightsolutions/",
  address: "Office No. 404, 4th Floor, Dev Milan Co-operative Premises Society, Above Woodland Retreat, LBS Marg, Near Tip Top Plaza, Thane West – 400604, Mumbai, Maharashtra, India.",
  experience: "12+ Years of Combined Industry Experience",
  aboutSummary: "Averon Freight Solutions LLP is a Mumbai-based freight forwarding and international logistics company led by experienced logistics professionals with 12+ years of combined industry experience. We are dedicated to facilitating seamless global trade through reliable, efficient and customized logistics solutions. We help importers, exporters, manufacturers and traders move cargo across international markets with confidence, transparency and operational excellence."
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "ocean-freight",
    code: "01",
    title: "Ocean Freight — FCL & LCL",
    shortDesc: "Full Container Load and Less than Container Load services across major global trade routes.",
    fullDesc: "Reliable Full Container Load (FCL) and Less than Container Load (LCL) solutions across global trade routes. From dedicated, high-volume shipments to flexible and economical smaller consignments, Averon coordinates ocean freight movements with precision.",
    heroImage: "https://images.pexels.com/photos/20581299/pexels-photo-20581299.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    features: [
      "FCL for dedicated, high-volume shipments.",
      "LCL for flexible and economical shipping.",
      "Import and export services across major trade routes.",
      "End-to-end shipment coordination from origin to destination.",
      "Cargo handling and documentation support.",
      "Shipment visibility and proactive operational communication."
    ],
    solutions: [
      { title: "FCL (Full Container Load)", desc: "Dedicated container space tailored for high-volume cargo, ensuring security and direct port-to-port transit times." },
      { title: "LCL (Less Container Load)", desc: "Flexible, cost-effective consolidated cargo solutions for smaller consignments without paying for full containers." },
      { title: "Global Route Coverage", desc: "Seamless import & export operations across USA, Europe, Middle East, Asia Pacific, LATAM, and Africa." },
      { title: "Port Handling & Customs", desc: "Expert port-side coordination, quay-side handling, and documentation verification at origin and destination." }
    ],
    approach: [
      { title: "Planning & Booking", desc: "Coordinated around shipment requirements, route planning, and optimal carrier selection." },
      { title: "Destination Handling", desc: "Support through the destination stage including de-consolidation and inland dispatch." },
      { title: "Shipment Visibility", desc: "Proactive operational communication and milestones tracking at every leg." },
      { title: "Final Delivery", desc: "Coordinated through the complete shipment journey right to the buyer's door." }
    ]
  },
  {
    id: "air-freight",
    code: "02",
    title: "Air Freight Solutions",
    shortDesc: "Time-sensitive, high-value cargo moved via airline capacity for urgent and standard shipments.",
    fullDesc: "Fast, Secure and Dependable Air Freight Solutions. When time is critical, Averon Freight Solutions provides fast, secure and dependable air freight solutions for time-sensitive and standard international shipments.",
    heroImage: "https://images.pexels.com/photos/32037883/pexels-photo-32037883.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    features: [
      "Express and standard air freight services.",
      "Worldwide import and export cargo handling.",
      "Priority solutions for urgent and high-value shipments.",
      "End-to-end shipment coordination and documentation.",
      "Customs clearance support at major air hubs.",
      "Shipment tracking and proactive updates."
    ],
    solutions: [
      { title: "Express Air Shipments", desc: "Fast and priority handling with next-flight-out options for time-critical cargo." },
      { title: "Standard Air Freight", desc: "Secure and dependable scheduled air cargo movements balancing speed and budget." },
      { title: "Temperature Controlled Air", desc: "Specialized air cargo solutions for pharmaceuticals, perishables, and delicate goods." },
      { title: "Airport-to-Door Delivery", desc: "Integrated air freight combined with rapid inland pickup and last-mile delivery." }
    ],
    approach: [
      { title: "Enquiry & Planning", desc: "Understand timing and cargo requirements to select optimal flight routes." },
      { title: "Booking & Coordination", desc: "Arrange space with trusted airline partners and handle airway bill generation." },
      { title: "Documentation", desc: "Handle necessary shipment documents, airway bills, and compliance support." },
      { title: "Destination Support", desc: "Coordinate onward movement, rapid airport clearance, and final shipment updates." }
    ]
  },
  {
    id: "customs-clearance",
    code: "03",
    title: "Customs Clearance",
    shortDesc: "Documentation review, tariff classification and customs guidance to prevent delays at the border.",
    fullDesc: "Smooth Customs. Efficient Cargo Movement. Averon Freight Solutions provides customs clearance support to help shipments move efficiently across borders with accurate documentation and coordinated compliance processes.",
    heroImage: "https://images.pexels.com/photos/12234106/pexels-photo-12234106.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    features: [
      "Import and export customs clearance.",
      "Documentation review and compliance coordination.",
      "Tariff classification and duty guidance.",
      "Coordination with customs authorities.",
      "Support to minimize avoidable delays.",
      "End-to-end coordination with freight and destination processes."
    ],
    solutions: [
      { title: "Import Customs Clearance", desc: "Full support for smooth, compliant import clearance, bill of entry filings, and duty assessments." },
      { title: "Export Customs Clearance", desc: "Assistance with shipping bill documentation, export approvals, and port formalities." },
      { title: "HS Code & Duty Classification", desc: "Expert evaluation of tariff codes to ensure legal compliance and avoid overpayments." },
      { title: "Regulatory Approvals", desc: "Liaison with relevant government agencies, phytosanitary, and partner government departments." }
    ],
    approach: [
      { title: "Documentation Review", desc: "Verify and coordinate required documents prior to shipment arrival." },
      { title: "Customs Authority Coordination", desc: "Liaise and coordinate with customs officers for swift clearance." },
      { title: "Tariff & Duty Guidance", desc: "Support on classification, duty structures, and tax optimization." },
      { title: "Freight Integration", desc: "Coordinate with ocean/air carrier and destination transport without friction." }
    ]
  },
  {
    id: "road-inland-transport",
    code: "04",
    title: "Road & Inland Transport",
    shortDesc: "Reliable haulage connecting ports, airports and warehouses to final delivery points.",
    fullDesc: "Reliable Road & Inland Transport Solutions. Averon provides efficient and secure road transportation solutions to move your cargo across cities, regions and borders with complete reliability and real-time visibility.",
    heroImage: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    features: [
      "Full Truck Load (FTL) for large shipments.",
      "Less than Truck Load (LTL) cost-effective solutions.",
      "Multi-City & Regional delivery network.",
      "Cross-Border inland transport movement.",
      "Documentation support for permits and transit.",
      "Real-time tracking and proactive updates throughout."
    ],
    solutions: [
      { title: "Domestic Transportation", desc: "Reliable truck fleet options across cities and industrial hubs with flexible dispatch." },
      { title: "Cross-Border Transport", desc: "Seamless inland container haulage across international borders and economic corridors." },
      { title: "Heavy Container Trailers", desc: "Specialized multi-axle trailers designed for heavy containerized freight." },
      { title: "Express Warehousing Pickup", desc: "Time-bound inland pickup directly from factory gates to port terminals." }
    ],
    approach: [
      { title: "Wide Network", desc: "Coverage across key trade and industrial routes with trusted fleet partners." },
      { title: "Flexible Solutions", desc: "Customized transport plans based on cargo type, size, and timeline." },
      { title: "Safety & Compliance", desc: "Strict adherence to transportation standards, cargo securing, and safety regulations." },
      { title: "Dedicated Support", desc: "End-to-end coordination until cargo arrives safely at destination." }
    ]
  },
  {
    id: "warehousing-distribution",
    code: "05",
    title: "Warehousing & Distribution",
    shortDesc: "Flexible storage, consolidation and onward distribution between shipping legs.",
    fullDesc: "Flexible warehousing, consolidation and onward distribution support between shipping legs.",
    heroImage: "https://images.pexels.com/photos/13804490/pexels-photo-13804490.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    features: [
      "Cargo storage support.",
      "Cargo consolidation and deconsolidation coordination.",
      "Inventory movement between transport legs.",
      "Distribution to onward destinations.",
      "Coordination with transportation and delivery requirements."
    ],
    solutions: [
      { title: "Cargo Storage Support", desc: "Support for cargo storage between transport stages." },
      { title: "Consolidation Coordination", desc: "Coordination of cargo consolidation and deconsolidation requirements." }
    ],
    approach: [
      { title: "Connected Logistics Support", desc: "Designed to help connect storage, consolidation and onward movement within the wider logistics chain." }
    ]
  },
  {
    id: "project-cargo",
    code: "06",
    title: "Project Cargo & Breakbulk",
    shortDesc: "Specialized handling for oversized, heavy-lift and non-containerized shipments.",
    fullDesc: "Specialized coordination for oversized, heavy-lift and non-containerized shipments.",
    heroImage: "https://images.pexels.com/photos/38414138/pexels-photo-38414138.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    features: [
      "Oversized cargo coordination.",
      "Heavy-lift shipment planning support.",
      "Breakbulk cargo handling coordination.",
      "Route and movement planning.",
      "Coordination across port, transport and destination requirements."
    ],
    solutions: [
      { title: "Project Cargo", desc: "Coordination for oversized and heavy-lift shipment requirements." },
      { title: "Breakbulk", desc: "Coordination for non-containerized cargo movement." }
    ],
    approach: [
      { title: "Planned Coordination", desc: "For non-standard cargo, Averon coordinates the movement requirements across the logistics chain with appropriate planning and operational communication." }
    ]
  },
  {
    id: "supply-chain-management",
    code: "07",
    title: "Supply Chain Management",
    shortDesc: "Coordinated planning across shipments, modes and vendors with one forwarding partner.",
    fullDesc: "Coordinated planning across shipments, transport modes and vendors with one forwarding partner.",
    heroImage: "https://images.pexels.com/photos/13804490/pexels-photo-13804490.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    features: [
      "Shipment planning and coordination.",
      "Multi-modal logistics support.",
      "Vendor and service-provider coordination.",
      "Documentation and operational communication.",
      "Origin-to-destination visibility.",
      "Integrated support across freight and inland logistics."
    ],
    solutions: [
      { title: "Multi-Modal Logistics Support", desc: "Coordinated support across different transport modes." },
      { title: "Origin-to-Destination Visibility", desc: "Coordinated visibility throughout the shipment journey." }
    ],
    approach: [
      { title: "One Coordinated Point of Contact", desc: "Our supply chain support brings multiple logistics activities together under one coordinated point of contact." }
    ]
  }
];

export const SAMPLE_TRACKING_DATA: TrackingStatus[] = [
  {
    id: "AFS-2026-8849",
    trackingNumber: "AFS-2026-8849",
    type: "FCL - 40ft High Cube Container",
    mode: "Ocean Freight",
    status: "In Transit",
    origin: "Shanghai Port, China (CNSHA)",
    destination: "Nhava Sheva (JNPT), Mumbai, India (INNSA)",
    vesselFlight: "MV Averon Express V.2026E",
    containerId: "TGHU8839201",
    eta: "March 18, 2026",
    etd: "March 02, 2026",
    progressPercent: 65,
    timeline: [
      { stage: "Booking & Cargo Pickup", location: "Shanghai Logistics Hub", date: "Mar 01, 2026", completed: true, description: "Cargo picked up from factory and gated into Shanghai port container yard." },
      { stage: "Customs Clearance (Origin)", location: "Shanghai Customs", date: "Mar 02, 2026", completed: true, description: "Export declaration passed and customs release issued." },
      { stage: "Vessel Loaded & Departed", location: "Shanghai Terminal 3", date: "Mar 03, 2026", completed: true, description: "Vessel MV Averon Express set sail towards Singapore transshipment hub." },
      { stage: "In Transit - Indian Ocean", location: "Arabian Sea Corridor", date: "Mar 10, 2026", completed: true, active: true, description: "Shipment in ocean transit with normal weather and steady speed." },
      { stage: "Arrival & Customs Clearance", location: "Nhava Sheva Port, India", date: "Mar 18, 2026", completed: false, description: "Scheduled arrival and import document processing." },
      { stage: "Final Door Delivery", location: "Client Warehouse, Thane", date: "Mar 20, 2026", completed: false, description: "Container haulage to factory." }
    ]
  },
  {
    id: "AFS-2026-4412",
    trackingNumber: "AFS-2026-4412",
    type: "Air Express Shipment - 480 kg",
    mode: "Air Freight",
    status: "Customs Cleared",
    origin: "Frankfurt Airport (FRA), Germany",
    destination: "Mumbai Airport (BOM), India",
    vesselFlight: "Lufthansa Cargo LH8320",
    containerId: "AWB 020-9481720",
    eta: "March 12, 2026",
    etd: "March 11, 2026",
    progressPercent: 90,
    timeline: [
      { stage: "Airway Bill Generated", location: "Frankfurt Cargo Terminal", date: "Mar 10, 2026", completed: true, description: "Cargo accepted at Frankfurt air freight center." },
      { stage: "Flight Departed", location: "Frankfurt Airport", date: "Mar 11, 2026", completed: true, description: "Flight LH8320 airborne to Mumbai." },
      { stage: "Airport Arrival", location: "Mumbai Air Cargo Complex", date: "Mar 12, 2026", completed: true, description: "Plane landed and cargo de-consolidated." },
      { stage: "Customs Cleared", location: "BOM Customs Wing", date: "Mar 12, 2026", completed: true, active: true, description: "Bill of Entry passed and duties cleared." },
      { stage: "Out for Inland Dispatch", location: "Mumbai Hub", date: "Mar 13, 2026", completed: false, description: "Loaded onto bonded truck for final delivery." }
    ]
  },
  {
    id: "AFS-2026-9930",
    trackingNumber: "AFS-2026-9930",
    type: "LCL Consolidated Cargo - 3.8 CBM",
    mode: "Ocean Freight",
    status: "Delivered",
    origin: "Jebel Ali Port, Dubai (AEJEA)",
    destination: "Mundra Port, Gujarat, India (INMUN)",
    vesselFlight: "MV Gulf Pioneer V.118",
    containerId: "TLLU4481029",
    eta: "March 08, 2026",
    etd: "March 01, 2026",
    progressPercent: 100,
    timeline: [
      { stage: "LCL Cargo Consolidation", location: "Jebel Ali CFS Depot", date: "Feb 28, 2026", completed: true, description: "Cargo stuffed into shared container." },
      { stage: "Vessel Voyage", location: "Arabian Sea", date: "Mar 01, 2026", completed: true, description: "Vessel departed Jebel Ali port." },
      { stage: "Mundra Port Unloading", location: "Mundra Port CFS", date: "Mar 06, 2026", completed: true, description: "Container unstuffed and cargo inspected." },
      { stage: "Delivered to Consignee", location: "Ahmedabad Industrial Park", date: "Mar 08, 2026", completed: true, active: true, description: "Cargo safely handed over with signed Proof of Delivery." }
    ]
  }
];

export const ADVANTAGES_LIST = [
  { id: "01", title: "Personalized Service", desc: "Solutions tailored to each shipment." },
  { id: "02", title: "Competitive Freight Rates", desc: "Cost-conscious freight solutions." },
  { id: "03", title: "End-to-End Visibility", desc: "Proactive origin-to-destination coordination." },
  { id: "04", title: "Strong Carrier Relationships", desc: "Established transport connections." },
  { id: "05", title: "Flexible Logistics Solutions", desc: "Solutions designed around cargo and routes." },
  { id: "06", title: "Dedicated Customer Support", desc: "Responsive shipment-lifecycle assistance." },
  { id: "07", title: "Fast Response Times", desc: "Quick response on shipment updates." },
  { id: "08", title: "Compliance Expertise", desc: "Documentation and customs support." }
];

export const WORK_STEPS = [
  { step: "01", title: "Inquiry & Requirement Analysis", desc: "We understand the shipment, route, cargo and service requirement." },
  { step: "02", title: "Freight Solution Design", desc: "We plan a suitable logistics solution based on the shipment requirement." },
  { step: "03", title: "Quotation & Confirmation", desc: "We provide the quotation and coordinate confirmation." },
  { step: "04", title: "Cargo Pickup", desc: "Origin pickup and cargo movement are coordinated as required." },
  { step: "05", title: "Customs Processing", desc: "Documentation and customs processes are coordinated." },
  { step: "06", title: "Transportation", desc: "Cargo moves through the selected transport mode." },
  { step: "07", title: "Shipment Tracking", desc: "Shipment status and operational updates are coordinated." },
  { step: "08", title: "Final Delivery", desc: "Cargo is coordinated through to the final destination." }
];

export const CORE_VALUES = [
  {
    icon: "Shield",
    title: "Integrity",
    desc: "We approach every shipment and client interaction with honesty, accountability and clear commitments."
  },
  {
    icon: "Clock",
    title: "Reliability",
    desc: "We focus on dependable coordination and consistent follow-through across each stage of the shipment journey."
  },
  {
    icon: "FileText",
    title: "Transparency",
    desc: "We keep communication clear and provide practical updates so clients understand the status of their cargo movement."
  },
  {
    icon: "Headphones",
    title: "Customer Commitment",
    desc: "We work to understand each shipment requirement and provide responsive, personalized logistics support."
  },
  {
    icon: "RotateCw",
    title: "Continuous Improvement",
    desc: "We continually refine our coordination, communication and service processes to support a better client experience."
  }
];

export const TRADE_LANES = [
  "USA", "Canada", "Europe", "Mediterranean",
  "Middle East", "Far East", "Africa", "Australia",
  "LATAM", "ISC"
];

export const KEY_IMPORT_ORIGINS = [
  { code: "01", name: "China" },
  { code: "02", name: "Far East" },
  { code: "03", name: "Europe" },
  { code: "04", name: "Dubai" },
  { code: "05", name: "Istanbul" },
  { code: "06", name: "USA" }
];
