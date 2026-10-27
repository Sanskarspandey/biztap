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
    id: 'school-websites',
    slug: 'schools',
    title: 'School Websites',
    startingPrice: '₹39,999',
    priceNumeric: 39999,
    priceBadge: 'Starting at ₹39,999',
    description: 'Give parents a modern way to connect with your school — admissions information, fee guidelines, attendance alerts & notices.',
    features: [
      'Admissions Information',
      'Student Portal',
      'Fee Information',
      'Notices and Updates'
    ],
    scopeNote: '* Advanced student portal & LMS integrations subject to agreed scope.',
    iconName: 'GraduationCap',
    gradient: 'from-blue-600 to-indigo-600',
    buttonGradient: 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.35)]',
    accentBorder: 'hover:border-blue-500/50',
    category: 'School Websites',
    exampleUrl: 'https://www.gps.edu/'
  },
  {
    id: 'clinic-healthcare',
    slug: 'clinic-healthcare',
    title: 'Clinic & Healthcare Websites',
    startingPrice: '₹29,999',
    priceNumeric: 29999,
    priceBadge: 'Starting at ₹29,999',
    description: 'Let patients book appointments online & get reminders automatically. Grow your medical practice effortlessly.',
    features: [
      'Doctor Profiles',
      'Services and Treatments',
      'Appointment Enquiries',
      'Clinic Information'
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
    id: 'ecommerce-websites',
    slug: 'ecommerce',
    title: 'E-commerce Websites',
    startingPrice: '₹59,999',
    priceNumeric: 59999,
    priceBadge: 'Starting at ₹59,999',
    description: 'Sell products online 24/7 with a storefront, catalog, secure cart, payments & delivery tracking.',
    features: [
      'Product Catalogue',
      'Shopping Cart',
      'Checkout Integration',
      'Order Management'
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
    id: 'personal-portfolio',
    slug: 'portfolio',
    title: 'Personal Portfolio Websites',
    startingPrice: '₹14,999',
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
    id: 'gaming-cafe-websites',
    slug: 'gaming-cafe',
    title: 'Gaming Café Websites',
    startingPrice: '₹9,999',
    priceNumeric: 9999,
    priceBadge: 'Starting at ₹9,999',
    description: 'Attract more gamers with a modern gaming café website showcasing your gaming PCs, console setups, games, membership plans, tournaments, and booking options.',
    features: [
      'Gaming PC & Console Showcase',
      'Games & Equipment Gallery',
      'Membership & Pricing Plans',
      'Tournament & Event Information'
    ],
    scopeNote: '* Online seat booking, live availability, and gaming session management depend on the agreed project scope.',
    iconName: 'Gamepad2',
    gradient: 'from-purple-600 via-indigo-600 to-blue-600',
    buttonGradient: 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.35)]',
    accentBorder: 'hover:border-indigo-500/50',
    category: 'Gaming Café Websites',
    exampleUrl: 'https://nexuscafe.in/'
  },
  {
    id: 'photography-websites',
    slug: 'photography',
    title: 'Photography Websites',
    startingPrice: '₹19,999',
    priceNumeric: 19999,
    priceBadge: 'Starting at ₹19,999',
    description: 'Beautiful portfolio & gallery websites for photographers — showcase your work, book clients & sell photo prints.',
    features: [
      'Photo Gallery',
      'Portfolio Categories',
      'Booking Enquiries',
      'Social Integration'
    ],
    scopeNote: '* High-bandwidth cloud image storage billed at hosting provider rates.',
    iconName: 'Camera',
    gradient: 'from-pink-500 to-rose-600',
    buttonGradient: 'bg-pink-600 hover:bg-pink-500 text-white shadow-[0_0_15px_rgba(219,39,119,0.35)]',
    accentBorder: 'hover:border-pink-500/50',
    category: 'Photography Websites',
    exampleUrl: 'https://lillerphoto.com'
  },
  {
    id: 'restaurant-cafe',
    slug: 'restaurant-cafe',
    title: 'Restaurant & Café Websites',
    startingPrice: '₹24,999',
    priceNumeric: 24999,
    priceBadge: 'Starting at ₹24,999',
    description: 'Beautiful websites for restaurants & cafés — showcase your menu, accept table reservations & attract more diners.',
    features: [
      'Digital Menu',
      'Restaurant Information',
      'Table Enquiries',
      'Location and Contact Details'
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
    id: 'gym-fitness',
    slug: 'gym-fitness',
    title: 'Gym & Fitness Websites',
    startingPrice: '₹24,999',
    priceNumeric: 24999,
    priceBadge: 'Starting at ₹24,999',
    description: 'Bold, energetic websites for gyms & fitness studios — class booking, member information, trainer profiles & inquiry forms.',
    features: [
      'Membership Information',
      'Class Timetable',
      'Trainer Profiles',
      'Enquiry Forms'
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
    id: 'salon-beauty',
    slug: 'salon-beauty',
    title: 'Salon & Beauty Websites',
    startingPrice: '₹24,999',
    priceNumeric: 24999,
    priceBadge: 'Starting at ₹24,999',
    description: 'Professional salon websites — online appointment booking, staff profiles, bridal packages & service rate menu.',
    features: [
      'Service Catalogue',
      'Pricing Display',
      'Appointment Enquiries',
      'Gallery'
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
    id: 'ca-tax-consultant',
    slug: 'ca-tax',
    title: 'CA & Tax Consultant Websites',
    startingPrice: '₹29,999',
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
    category: 'CA & Tax Consultant Websites',
    exampleUrl: 'https://www.cleartax.com'
  },
  {
    id: 'lawyer-legal',
    slug: 'lawyers-legal',
    title: 'Lawyer & Legal Websites',
    startingPrice: '₹29,999',
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
    category: 'Lawyer & Legal Websites',
    exampleUrl: 'https://trilegal.com'
  },
  {
    id: 'custom-business',
    slug: 'custom-business',
    title: 'Custom Business Websites',
    startingPrice: 'Custom Quote',
    priceNumeric: null,
    priceBadge: 'Custom Quote',
    description: 'Got a unique business model? We will build a tailored web presence engineered to your exact operational requirements.',
    features: [
      'Custom Requirements',
      'Tailored Design',
      'Relevant Integrations',
      'Agreed Project Scope'
    ],
    scopeNote: '* Milestone-based development with full functional specification prior to kickoff.',
    iconName: 'Settings',
    gradient: 'from-slate-600 to-blue-700',
    buttonGradient: 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.35)]',
    accentBorder: 'hover:border-blue-500/50',
    category: 'Custom Business Websites',
    isCustomQuote: true
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
