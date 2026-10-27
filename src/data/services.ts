export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  startingPrice: string;
  priceNumeric: number | null;
  priceBadge: string;
  description: string;
  features: string[];
  scopeNote: string;
  iconName: string;
  gradient: string;
  buttonGradient: string;
  accentBorder: string;
  category: string;
  isCustomQuote?: boolean;
  exampleUrl?: string;

  // Compatibility fields for legacy components
  shortDescription: string;
  badge: string;
  heroHeadline: string;
  heroSubheadline: string;
  explanation: string[];
  keyBenefits: { title: string; description: string }[];
  suitableFor: string[];
  howItWorks: { step: number; title: string; description: string }[];
  pricingOverview: {
    startingPrice: string;
    pricingNote: string;
    highlights: string[];
  };
  faqs: { question: string; answer: string }[];
  relatedServices: { title: string; slug: string }[];
}

export type ServiceDetail = ServiceItem;

export const SERVICE_TRUST_PILLS = [
  'Free Consultation',
  'Delivered in 7 Days',
  'Mobile Friendly',
  '24/7 Support'
];

export const RAW_SERVICES = [
  {
    id: 'school-college-websites',
    slug: 'schools-colleges',
    title: 'School & College Websites',
    startingPrice: 'Starting at ₹39,999',
    priceNumeric: 39999,
    priceBadge: 'Starting at ₹39,999',
    description: 'Give parents & students a modern way to connect — admissions information, academic calendar, student portal & notices.',
    features: [
      'Admissions Information',
      'Student & Parent Portal',
      'Fee Information & Notices',
      'Academic Calendar & Updates'
    ],
    scopeNote: '* Advanced LMS and student management integrations subject to agreed scope.',
    iconName: 'GraduationCap',
    gradient: 'from-blue-600 to-indigo-600',
    buttonGradient: 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.35)]',
    accentBorder: 'hover:border-blue-500/50',
    category: 'School & College Websites',
    exampleUrl: 'https://www.gps.edu/'
  },
  {
    id: 'clinic-healthcare',
    slug: 'clinic-healthcare',
    title: 'Clinic & Healthcare Websites',
    startingPrice: 'Starting at ₹29,999',
    priceNumeric: 29999,
    priceBadge: 'Starting at ₹29,999',
    description: 'Let patients book appointments online & get reminders automatically. Build credibility and grow your medical practice effortlessly.',
    features: [
      'Doctor & Specialist Profiles',
      'Services & Treatments',
      'Online Appointment Enquiries',
      'Clinic Hours & Location Info'
    ],
    scopeNote: '* Direct hospital EHR/EMR sync subject to clinic software compatibility.',
    iconName: 'Stethoscope',
    gradient: 'from-emerald-500 to-teal-600',
    buttonGradient: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.35)]',
    accentBorder: 'hover:border-emerald-500/50',
    category: 'Clinic & Healthcare Websites',
    exampleUrl: 'https://www.tend.nz'
  },
  {
    id: 'salon-beauty',
    slug: 'salon-beauty',
    title: 'Salon & Beauty Websites',
    startingPrice: 'Starting at ₹24,999',
    priceNumeric: 24999,
    priceBadge: 'Starting at ₹24,999',
    description: 'Modern salon websites — online appointment booking, stylist portfolios, bridal packages & interactive service rate menu.',
    features: [
      'Service & Treatment Menu',
      'Transparent Pricing Display',
      'Online Appointment Booking',
      'Stylist Work & Look Gallery'
    ],
    scopeNote: '* Multi-branch staff scheduling subject to agreed package tier.',
    iconName: 'Scissors',
    gradient: 'from-fuchsia-600 to-pink-600',
    buttonGradient: 'bg-fuchsia-600 hover:bg-fuchsia-500 text-white shadow-[0_0_15px_rgba(192,38,211,0.35)]',
    accentBorder: 'hover:border-fuchsia-500/50',
    category: 'Salon & Beauty Websites',
    exampleUrl: 'https://www.salonsck.com/'
  },
  {
    id: 'gym-fitness',
    slug: 'gym-fitness',
    title: 'Gym & Fitness Websites',
    startingPrice: 'Starting at ₹24,999',
    priceNumeric: 24999,
    priceBadge: 'Starting at ₹24,999',
    description: 'High-energy websites for gyms & fitness studios — membership tiers, class schedules, trainer profiles & instant trial booking forms.',
    features: [
      'Membership & Plan Comparison',
      'Live Class Timetable',
      'Certified Trainer Profiles',
      'Instant Trial Enquiry Forms'
    ],
    scopeNote: '* Biometric turnstile integrations subject to hardware API compatibility.',
    iconName: 'Dumbbell',
    gradient: 'from-red-600 to-rose-700',
    buttonGradient: 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_15px_rgba(220,38,38,0.35)]',
    accentBorder: 'hover:border-red-500/50',
    category: 'Gym & Fitness Websites',
    exampleUrl: 'https://gymbox.com'
  },
  {
    id: 'restaurant-cafe',
    slug: 'restaurant-cafe',
    title: 'Restaurant & Café Websites',
    startingPrice: 'Starting at ₹24,999',
    priceNumeric: 24999,
    priceBadge: 'Starting at ₹24,999',
    description: 'Appetizing websites for restaurants & cafés — interactive digital menu, table reservation requests, food photography & location details.',
    features: [
      'Interactive Digital Menu',
      'Table Reservation Booking',
      'Photo Gallery & Ambiance Showcase',
      'Google Maps & Hours Display'
    ],
    scopeNote: '* Live POS or third-party delivery sync subject to software API access.',
    iconName: 'Utensils',
    gradient: 'from-amber-600 to-orange-600',
    buttonGradient: 'bg-amber-600 hover:bg-amber-500 text-white shadow-[0_0_15px_rgba(217,119,6,0.35)]',
    accentBorder: 'hover:border-amber-500/50',
    category: 'Restaurant & Café Websites',
    exampleUrl: 'https://www.dishoom.com'
  },
  {
    id: 'ecommerce-websites',
    slug: 'ecommerce',
    title: 'E-commerce Websites',
    startingPrice: 'Starting at ₹59,999',
    priceNumeric: 59999,
    priceBadge: 'Starting at ₹59,999',
    description: 'Sell products online 24/7 with a storefront, catalog, secure cart, payments & delivery tracking.',
    features: [
      'Product Catalogue',
      'Shopping Cart & Checkout',
      'Payment Gateway Integration',
      'Order Management System'
    ],
    scopeNote: '* Payment gateway setup requires verified merchant KYC credentials.',
    iconName: 'ShoppingBag',
    gradient: 'from-amber-500 to-orange-600',
    buttonGradient: 'bg-amber-600 hover:bg-amber-500 text-white shadow-[0_0_15px_rgba(217,119,6,0.35)]',
    accentBorder: 'hover:border-amber-500/50',
    category: 'E-commerce Websites',
    exampleUrl: 'https://www.allbirds.com/'
  },
  {
    id: 'photography-websites',
    slug: 'photography',
    title: 'Photography Portfolio Websites',
    startingPrice: 'Starting at ₹19,999',
    priceNumeric: 19999,
    priceBadge: 'Starting at ₹19,999',
    description: 'Beautiful portfolio & gallery websites for photographers — showcase your work, book clients & sell photo prints.',
    features: [
      'High-Res Photo Gallery',
      'Portfolio Categories',
      'Client Booking Enquiries',
      'Social & Instagram Sync'
    ],
    scopeNote: '* High-bandwidth cloud image storage billed at hosting provider rates.',
    iconName: 'Camera',
    gradient: 'from-pink-500 to-rose-600',
    buttonGradient: 'bg-pink-600 hover:bg-pink-500 text-white shadow-[0_0_15px_rgba(219,39,119,0.35)]',
    accentBorder: 'hover:border-pink-500/50',
    category: 'Photography Portfolio Websites',
    exampleUrl: 'https://lillerphoto.com'
  },
  {
    id: 'ca-accounting',
    slug: 'ca-accounting',
    title: 'CA & Accounting Firm Websites',
    startingPrice: 'Starting at ₹29,999',
    priceNumeric: 29999,
    priceBadge: 'Starting at ₹29,999',
    description: 'Professional websites for Chartered Accountants — services overview, consultant profiles & document enquiry workflows.',
    features: [
      'Services Overview',
      'Consultant Profiles',
      'Document Enquiry Workflow',
      'Contact Forms'
    ],
    scopeNote: '* End-to-end encrypted client portals subject to custom requirements.',
    iconName: 'Calculator',
    gradient: 'from-teal-500 to-cyan-600',
    buttonGradient: 'bg-teal-600 hover:bg-teal-500 text-white shadow-[0_0_15px_rgba(13,148,136,0.35)]',
    accentBorder: 'hover:border-teal-500/50',
    category: 'CA & Accounting Firm Websites',
    exampleUrl: 'https://www.cleartax.com'
  },
  {
    id: 'lawyer-legal',
    slug: 'lawyer-legal',
    title: 'Lawyer & Law Firm Websites',
    startingPrice: 'Starting at ₹29,999',
    priceNumeric: 29999,
    priceBadge: 'Starting at ₹29,999',
    description: 'Authoritative websites for law firms & advocates — practice areas, counsel credentials & confidential consultation booking.',
    features: [
      'Practice Areas',
      'Lawyer Profiles',
      'Consultation Enquiries',
      'Office Information'
    ],
    scopeNote: '* Designed strictly in adherence with Bar Council Rule 36 informational norms.',
    iconName: 'Scale',
    gradient: 'from-amber-600 to-yellow-600',
    buttonGradient: 'bg-amber-600 hover:bg-amber-500 text-white shadow-[0_0_15px_rgba(217,119,6,0.35)]',
    accentBorder: 'hover:border-amber-500/50',
    category: 'Lawyer & Law Firm Websites',
    exampleUrl: 'https://trilegal.com'
  },
  {
    id: 'construction-builder',
    slug: 'construction-builder',
    title: 'Construction & Builder Websites',
    startingPrice: 'Starting at ₹39,999',
    priceNumeric: 39999,
    priceBadge: 'Starting at ₹39,999',
    description: 'Impactful websites for builders & civil contractors — project portfolios, architectural highlights & project estimation inquiries.',
    features: [
      'Completed & Ongoing Projects',
      'Architectural Portfolio',
      'Quotation Request System',
      'Quality & Compliance Credentials'
    ],
    scopeNote: '* Interactive 3D BIM or CAD walkthrough embeds depend on agreed scope.',
    iconName: 'HardHat',
    gradient: 'from-yellow-500 to-amber-600',
    buttonGradient: 'bg-amber-600 hover:bg-amber-500 text-white shadow-[0_0_15px_rgba(217,119,6,0.35)]',
    accentBorder: 'hover:border-yellow-500/50',
    category: 'Construction & Builder Websites'
  },
  {
    id: 'hotel-hospitality',
    slug: 'hotel-hospitality',
    title: 'Hotel & Hospitality Websites',
    startingPrice: 'Starting at ₹39,999',
    priceNumeric: 39999,
    priceBadge: 'Starting at ₹39,999',
    description: 'Inviting websites for boutique hotels, resorts & homestays — room showcase, amenity catalogs, virtual tours & direct booking inquiries.',
    features: [
      'Room & Suite Categorization',
      'Amenities & Dining Showcase',
      'Direct Booking Enquiry Engine',
      'Local Attractions & Map Guide'
    ],
    scopeNote: '* Live channel manager or OTA synchronization depends on third-party API.',
    iconName: 'Hotel',
    gradient: 'from-indigo-600 to-sky-600',
    buttonGradient: 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.35)]',
    accentBorder: 'hover:border-indigo-500/50',
    category: 'Hotel & Hospitality Websites'
  },
  {
    id: 'real-estate',
    slug: 'real-estate',
    title: 'Real Estate Websites',
    startingPrice: 'Starting at ₹39,999',
    priceNumeric: 39999,
    priceBadge: 'Starting at ₹39,999',
    description: 'High-conversion websites for realtors, property brokers & developers — property listings, floor plans, neighborhood guides & lead capture.',
    features: [
      'Featured Property Listings',
      'Detailed Floor Plans & Specs',
      'Instant WhatsApp Tour Booking',
      'Neighborhood & Amenity Highlights'
    ],
    scopeNote: '* Automated MLS feed integration subject to local registry access.',
    iconName: 'Home',
    gradient: 'from-cyan-600 to-blue-600',
    buttonGradient: 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_15px_rgba(8,145,178,0.35)]',
    accentBorder: 'hover:border-cyan-500/50',
    category: 'Real Estate Websites'
  },
  {
    id: 'personal-portfolio',
    slug: 'portfolio',
    title: 'Personal Portfolio Websites',
    startingPrice: 'Starting at ₹14,999',
    priceNumeric: 14999,
    priceBadge: 'Starting at ₹14,999',
    description: 'Stand out from the crowd with a professional portfolio that showcases your work and attracts high-value opportunities.',
    features: [
      'Project Showcase',
      'About and Skills',
      'Contact Form',
      'Resume Download'
    ],
    scopeNote: '* Custom personal domain name registration billed at registrar actuals.',
    iconName: 'User',
    gradient: 'from-purple-500 to-violet-600',
    buttonGradient: 'bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_15px_rgba(147,51,234,0.35)]',
    accentBorder: 'hover:border-purple-500/50',
    category: 'Personal Portfolio Websites',
    exampleUrl: 'https://sanskarspandey.github.io/Portfolio/'
  },
  {
    id: 'retail-business',
    slug: 'retail-business',
    title: 'Retail Business Websites',
    startingPrice: 'Starting at ₹24,999',
    priceNumeric: 24999,
    priceBadge: 'Starting at ₹24,999',
    description: 'Engaging websites for local retail shops, showrooms & boutique stores — product catalog, store hours, offers & click-to-WhatsApp orders.',
    features: [
      'In-Store Product Catalog',
      'Special Offers & Promotions',
      'Store Hours & Google Map Route',
      'Click-to-WhatsApp Quick Orders'
    ],
    scopeNote: '* Full real-time ERP inventory sync subject to custom integration scope.',
    iconName: 'Store',
    gradient: 'from-emerald-600 to-cyan-600',
    buttonGradient: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_15px_rgba(5,150,105,0.35)]',
    accentBorder: 'hover:border-emerald-500/50',
    category: 'Retail Business Websites'
  }
];

export const SERVICES: ServiceItem[] = RAW_SERVICES.map((s) => ({
  ...s,
  shortDescription: s.description,
  badge: 'Website Solution',
  heroHeadline: s.title,
  heroSubheadline: s.description,
  explanation: [s.description],
  keyBenefits: s.features.map((f) => ({ title: f, description: f })),
  suitableFor: ['Growing businesses', 'Local enterprises', 'Professional practices'],
  howItWorks: [
    { step: 1, title: 'Discover', description: 'Understand your requirements and goals' },
    { step: 2, title: 'Design', description: 'Create responsive page wireframes and layout' },
    { step: 3, title: 'Develop', description: 'Engineer clean code with fast performance' },
    { step: 4, title: 'Launch', description: 'Deploy with SSL security and domain setup' }
  ],
  pricingOverview: {
    startingPrice: s.startingPrice,
    pricingNote: 'Transparent proposed starting price',
    highlights: s.features
  },
  faqs: [],
  relatedServices: []
}));

export const PRICING_INCLUSIONS = [
  {
    title: 'Mobile-First Responsive Layout',
    description: 'Tuned specifically for smartphones, tablets, and desktop displays with responsive touch navigation.'
  },
  {
    title: 'Fast Loading Performance',
    description: 'Built with modern Vite and React architecture for sub-2-second first page loads.'
  },
  {
    title: 'Direct WhatsApp & Call Triggers',
    description: 'Friction-free conversion points connecting visitors straight to your business phone line.'
  },
  {
    title: 'SSL Security & Domain Setup',
    description: 'Assistance connecting your custom .in or .com domain with HTTPS security padlock active.'
  },
  {
    title: 'Search Engine Foundation',
    description: 'Clean semantic HTML, OpenGraph social preview tags, and Google Search Console indexing setup.'
  },
  {
    title: '30-Day Post-Launch Support',
    description: 'Dedicated post-launch technical assistance, bug fixes, and minor copy adjustments.'
  }
];
