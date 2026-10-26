export interface PortfolioProject {
  id: string;
  title: string;
  type: 'Concept Demo' | 'Client Work' | 'Prototype';
  industry: string;
  industrySlug: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  deliverables: string[];
  aspects: { label: string; value: string }[];
  demoUrl?: string;
  badge: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'brew-and-bloom',
    title: 'Brew & Bloom',
    type: 'Concept Demo',
    industry: 'Restaurants & Cafés',
    industrySlug: 'restaurants-cafes',
    badge: 'Concept Showcase',
    tagline: 'Artisan café concept with mobile-first digital menu and table reservation inquiry',
    description: 'A warm, inviting digital presence created to showcase modern café aesthetics. Features a categorized food & beverage menu with dietary indicators (Veg/Vegan), direct WhatsApp takeaway ordering, and an intuitive table reservation booking system.',
    features: [
      'Interactive digital coffee & bakery menu with category filters',
      'One-tap WhatsApp ordering with prefilled dish names',
      'Table reservation form capturing party size, date, and preferred time slot',
      'Ambiance photo gallery with high-speed WebP image loading',
      'Operating hours, location map, and parking information'
    ],
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Lucide Icons', 'WhatsApp API'],
    deliverables: ['Responsive Web App', 'Digital QR Menu Layout', 'WhatsApp Lead Routing'],
    aspects: [
      { label: 'Category', value: 'Hospitality & Dining' },
      { label: 'Target Device', value: 'Mobile-First (90% Phone Traffic)' },
      { label: 'Conversion Hook', value: 'Direct WhatsApp Takeaway & Reservations' }
    ]
  },
  {
    id: 'ironforge-athletics',
    title: 'IronForge Athletics',
    type: 'Concept Demo',
    industry: 'Gyms & Fitness',
    industrySlug: 'gyms-fitness',
    badge: 'Concept Showcase',
    tagline: 'High-energy fitness club portal engineered to convert visits into 1-day trial passes',
    description: 'Engineered for high conversion, IronForge Athletics captures prospective member interest with an energetic dark-mode aesthetic, facility equipment tour, batch schedules for functional fitness and strength sessions, and a friction-free Free Trial pass generator.',
    features: [
      'High-converting "Claim 1-Day Trial Pass" lead generator',
      'Interactive weekly class timetable (Strength, HIIT, Yoga, CrossFit)',
      'Tiered membership comparison table (Monthly, Quarterly, Annual)',
      'Certified trainer bios with specialization badges',
      'Equipment and training zone photo showcase'
    ],
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Responsive Grid'],
    deliverables: ['Custom Fitness Portal', 'Trial Pass Generator', 'Membership Matrix'],
    aspects: [
      { label: 'Category', value: 'Health & Fitness' },
      { label: 'Primary Goal', value: 'Lead Capture (Free Trial Passes)' },
      { label: 'Visual Style', value: 'High-Energy Dark Athletic Aesthetic' }
    ]
  },
  {
    id: 'apex-dental-studio',
    title: 'Apex Dental Studio',
    type: 'Concept Demo',
    industry: 'Clinics & Healthcare',
    industrySlug: 'clinics',
    badge: 'Concept Showcase',
    tagline: 'Patient-centric dental clinic website with doctor credentials and slot booking',
    description: 'Designed to reassure anxious patients and establish clinical excellence. Highlights doctor qualifications (MDS Orthodontics & Implantology), sterilization protocols, procedural treatment guides, and a time-slot consultation enquiry form.',
    features: [
      'Doctor credentials, council registration, and professional memberships',
      'Treatment guides for dental implants, clear aligners, and root canals',
      'Morning/evening OP consulting hours and instant WhatsApp inquiry',
      'Hygiene and clinic sterilization photo showcase',
      'Patient pre-visit checklist and procedural FAQs'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Medical Schema'],
    deliverables: ['Clinic Web Presence', 'Consultation Inquiry Engine', 'Doctor Bio'],
    aspects: [
      { label: 'Category', value: 'Medical & Dental' },
      { label: 'Compliance', value: 'Medical Ethics & Informational Transparency' },
      { label: 'Conversion Hook', value: 'One-Tap Reception WhatsApp Booking' }
    ]
  },
  {
    id: 'vanguard-legal-chambers',
    title: 'Vanguard Legal Chambers',
    type: 'Concept Demo',
    industry: 'Lawyers & Legal Services',
    industrySlug: 'lawyers-legal',
    badge: 'Concept Showcase',
    tagline: 'Bar Council compliant web presence establishing chamber standing and practice areas',
    description: 'Built in strict adherence to Bar Council of India Rule 36 with a mandatory disclaimer acknowledgment gate. Details practice verticals across High Court litigation, arbitration, and corporate advisories with dignified typography and confidential appointment booking.',
    features: [
      'Bar Council of India compliance disclaimer gate modal',
      'Practice area breakdown (Corporate, Commercial Arbitration, Civil, NCLT)',
      'Senior advocate profiles and bar association credentials',
      'Encrypted confidential chamber consultation request form',
      'Scholarly legal commentary and statutory insights repository'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Accessible Modal'],
    deliverables: ['Chambers Web Profile', 'BCI Compliance Gate', 'Intake Workflow'],
    aspects: [
      { label: 'Category', value: 'Legal Services' },
      { label: 'Compliance', value: 'Bar Council Rule 36 Strict Adherence' },
      { label: 'Tone', value: 'Dignified Corporate Authority' }
    ]
  },
  {
    id: 'aura-luxe-salon',
    title: 'Aura Luxe Salon & Studio',
    type: 'Concept Demo',
    industry: 'Salons & Unisex Parlours',
    industrySlug: 'salons',
    badge: 'Concept Showcase',
    tagline: 'Chic salon rate card and bridal makeup showcase with instant stylist booking',
    description: 'A stylish, mobile-first salon website featuring categorized rate cards for hair styling, balayage, and aesthetic treatments, alongside dedicated bridal packages and instant WhatsApp stylist reservation.',
    features: [
      'Categorized salon rate card with transparent pricing',
      'Dedicated Bridal & Groom pre-wedding package breakdown',
      'Before & After hair color and styling transformation showcase',
      'One-tap WhatsApp booking with prefilled service selection',
      'Stylist bios and specialized cut certifications'
    ],
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    deliverables: ['Salon Web App', 'Digital Rate Card', 'Bridal Package Flow'],
    aspects: [
      { label: 'Category', value: 'Beauty & Grooming' },
      { label: 'Design System', value: 'Warm Neutral & Forest Accents' },
      { label: 'Target Action', value: 'WhatsApp Service Booking' }
    ]
  },
  {
    id: 'starlight-academy',
    title: 'Starlight Academy',
    type: 'Concept Demo',
    industry: 'Schools & Educational Institutes',
    industrySlug: 'schools',
    badge: 'Concept Showcase',
    tagline: 'Comprehensive campus portal for admissions, circulars, and institutional trust',
    description: 'Institutional school portal created to build parent trust and drive admissions. Features mandatory CBSE board disclosures, downloadable prospectus, interactive academic curriculum breakdown, and campus infrastructure tour.',
    features: [
      'Admissions inquiry form with instant WhatsApp notification',
      'Live circulars and emergency announcement ticker',
      'Curriculum breakdown from Pre-Primary through Senior Secondary',
      'Mandatory board disclosure statutory documentation table',
      'Campus photo gallery covering science labs, library, and sports grounds'
    ],
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Accessible Tables'],
    deliverables: ['Institutional Portal', 'Admissions Intake', 'Notice Board'],
    aspects: [
      { label: 'Category', value: 'Education & Academics' },
      { label: 'Compliance', value: 'Board Mandatory Disclosures' },
      { label: 'Key Audience', value: 'Prospective & Current Parents' }
    ]
  }
];
