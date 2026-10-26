export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  price: number | string;
  priceDisplay: string;
  billingType: 'one-time' | 'annual' | 'custom';
  description: string;
  pages: string;
  deliveryTime: string;
  revisions: string;
  features: string[];
  exclusions: string[];
  idealFor: string;
  isPopular?: boolean;
}

export interface IndustryPricingData {
  industrySlug: string;
  industryName: string;
  startingPrice: string;
  tiers: PricingTier[];
}

export interface AddOnService {
  name: string;
  description: string;
  feeType: 'One-time' | 'Monthly' | 'Annual' | 'Custom';
  price: string;
  note?: string;
}

// 1. NFC & Digital Profile Packages
export const NFC_PACKAGES: PricingTier[] = [
  {
    id: 'nfc-card',
    name: 'NFC Smart Review Card',
    badge: 'Popular for Local Outlets',
    price: 3000,
    priceDisplay: '₹3,000',
    billingType: 'one-time',
    description: 'High-durability matte PVC card programmed to instantly launch your Google Review page upon tap.',
    pages: 'Physical Card + QR Backup',
    deliveryTime: '5–7 business days (courier)',
    revisions: '1 URL configuration check',
    features: [
      '1x Premium NFC Matte PVC Card',
      'Dual-function (NFC Tap + Laser-printed QR code backup)',
      'Pre-programmed directly to your verified Google Review URL',
      'Works with iOS & Android (no customer app download needed)',
      'One-time cost with zero monthly card software subscription',
      'Custom front branding with your business logo'
    ],
    exclusions: [
      'Does not include digital micro-site profile',
      'Does not guarantee reviews or bypass Google policies'
    ],
    idealFor: 'Cafés, clinics, retail counters, salons & reception desks'
  },
  {
    id: 'profile-starter',
    name: 'Smart Profile Starter',
    badge: 'Digital Micro-Profile',
    price: 4999,
    priceDisplay: '₹4,999',
    billingType: 'one-time',
    description: 'Fast mobile digital business profile consolidating contact, WhatsApp, social links, and Google location.',
    pages: '1 Mobile-optimized Micro-page',
    deliveryTime: '2–3 business days',
    revisions: '2 rounds of content edits',
    features: [
      '1 Custom-branded mobile digital business profile',
      'One-tap Save to Contacts (vCard download)',
      'Direct WhatsApp, Phone call, and Email action buttons',
      'Google Maps directions link and opening hours',
      'Social media links (Instagram, LinkedIn, YouTube, Facebook)',
      '1 NFC Smart Card included with courier delivery',
      'Hosted on biztap.in/your-business or custom subdomain'
    ],
    exclusions: [
      'Multi-page website not included',
      'Does not include standalone custom .com domain'
    ],
    idealFor: 'Solo entrepreneurs, consultants, real estate agents & sales executives'
  },
  {
    id: 'profile-pro',
    name: 'Smart Profile Pro',
    badge: 'Interactive Lead Profile',
    price: 8999,
    priceDisplay: '₹8,999',
    billingType: 'one-time',
    description: 'Advanced mobile digital profile with interactive service showcase, lead enquiry form, and catalog preview.',
    pages: 'Rich Interactive Micro-Portal',
    deliveryTime: '4–5 business days',
    revisions: '3 rounds of content edits',
    features: [
      'Everything in Smart Profile Starter',
      'Service/Product catalogue preview with image gallery',
      'Direct WhatsApp lead capture enquiry form',
      'UPI payment QR display for instant customer payments',
      '2 NFC Smart Cards included (e.g. for owner & executive)',
      'Annual hosting & SSL configuration included for Year 1',
      'Monthly analytics review summary'
    ],
    exclusions: [
      'Full e-commerce cart/checkout not included'
    ],
    idealFor: 'Boutique owners, interior designers, agencies & service pros',
    isPopular: true
  },
  {
    id: 'bundle-website-profile',
    name: 'Website + Smart Profile Bundle',
    badge: 'Best Value Full Suite',
    price: 11999,
    priceDisplay: 'Starting at ₹11,999',
    billingType: 'one-time',
    description: 'Complete digital ecosystem: a dedicated multi-page website paired with an NFC card and mobile smart profile.',
    pages: 'Full Website (5+ Pages) + Micro Profile',
    deliveryTime: '7–12 business days',
    revisions: '3 rounds of design revisions',
    features: [
      'Complete custom business website (up to 5 pages)',
      '1 Mobile-responsive Smart Business Profile',
      '1 Custom-branded NFC Smart Review Card delivered to your door',
      'Domain & 1 Year Cloud Hosting setup assistance',
      'WhatsApp Floating Chat + Google Search Console indexing',
      'Fast responsive design optimized for speed and SEO',
      'Priority onboarding and dedicated support'
    ],
    exclusions: [
      'Domain renewal after year 1 (at registrar standard fee)'
    ],
    idealFor: 'Growing local businesses wanting a total digital upgrade',
    isPopular: true
  }
];

// 2. Industry-Specific Pricing Tiers (Centralized)
export const INDUSTRY_PRICING: Record<string, IndustryPricingData> = {
  schools: {
    industrySlug: 'schools',
    industryName: 'Schools & Educational Institutes',
    startingPrice: '₹8,999',
    tiers: [
      {
        id: 'schools-starter',
        name: 'Starter Academic',
        price: 8999,
        priceDisplay: '₹8,999',
        billingType: 'one-time',
        description: 'Clean, respectable informational portal for small schools, preschools, and tuition centers.',
        pages: 'Up to 5 Pages (Home, About, Academics, Gallery, Contact)',
        deliveryTime: '5–7 business days (estimated)',
        revisions: '2 rounds of design revisions',
        features: [
          'Admissions inquiry form with WhatsApp/Email alert',
          'Academic curriculum & grade level overview',
          'Photo gallery for campus and past events',
          'Notice board & announcement banner',
          'Mobile-responsive layout & Google Map integration',
          'Standard SEO meta tags & contact details'
        ],
        exclusions: ['Student LMS / Exam results database', 'Online fee payment processing'],
        idealFor: 'Preschools, playgroups, and coaching institutes'
      },
      {
        id: 'schools-pro',
        name: 'Professional Institution',
        badge: 'Recommended',
        price: 14999,
        priceDisplay: '₹14,999',
        billingType: 'one-time',
        description: 'Comprehensive institutional website for established K-12 schools, junior colleges, and academies.',
        pages: 'Up to 10 Pages (Comprehensive academic, faculty, facilities, admissions)',
        deliveryTime: '10–14 business days (estimated)',
        revisions: '3 rounds of design revisions',
        features: [
          'Everything in Starter Academic',
          'Detailed downloadable admissions brochure & prospectus PDF',
          'Mandatory disclosures & public compliance section',
          'Faculty & staff directory showcase',
          'Interactive calendar for term schedules and holidays',
          'Google Search Console indexing & local schema markup'
        ],
        exclusions: ['Custom ERP integration'],
        idealFor: 'K-12 schools, CBSE/ICSE institutions, and competitive academies',
        isPopular: true
      },
      {
        id: 'schools-premium',
        name: 'Campus Enterprise',
        price: 24999,
        priceDisplay: '₹24,999',
        billingType: 'one-time',
        description: 'High-impact multi-branch or campus digital portal with advanced lead routing and custom media integration.',
        pages: 'Up to 18 Pages (Multi-department, careers, alumni, sports)',
        deliveryTime: '15–20 business days (estimated)',
        revisions: 'Unlimited revisions during staging phase',
        features: [
          'Everything in Professional Institution',
          'Multi-branch or campus location switcher',
          'Online preliminary admission application flow with document upload link',
          'Alumni success network & career opportunities section',
          'Video tour and high-resolution virtual walkthrough embed',
          '1 Year maintenance & security patching included'
        ],
        exclusions: ['Third-party SMS gateway recharge costs'],
        idealFor: 'Higher secondary colleges, multi-branch preschool chains, and large campuses'
      }
    ]
  },
  clinics: {
    industrySlug: 'clinics',
    industryName: 'Clinics & Healthcare Centers',
    startingPrice: '₹12,999',
    tiers: [
      {
        id: 'clinics-starter',
        name: 'Practice Starter',
        price: 12999,
        priceDisplay: '₹12,999',
        billingType: 'one-time',
        description: 'Clean medical website that builds patient trust and makes consultation booking effortless.',
        pages: 'Up to 5 Pages (Home, About Doctor, Services, Clinic Tour, Contact)',
        deliveryTime: '6–8 business days (estimated)',
        revisions: '2 rounds of design revisions',
        features: [
          'Doctor bio, qualifications, and medical registration credentials',
          'Direct WhatsApp & phone appointment enquiry widget',
          'Clinic consulting hours and location directions',
          'Core medical services & treatment overviews',
          'Patient advisory & hygiene guidelines'
        ],
        exclusions: ['HIPAA/EHR electronic patient records', 'Online prescription storage'],
        idealFor: 'Individual private dental, dermatology, or general physician practices'
      },
      {
        id: 'clinics-pro',
        name: 'Multi-Speciality Care',
        badge: 'Most Popular',
        price: 19999,
        priceDisplay: '₹19,999',
        billingType: 'one-time',
        description: 'Complete multi-doctor or polyclinic portal with department categorization and slot enquiry routing.',
        pages: 'Up to 10 Pages (Department pages, doctor profiles, patient FAQs)',
        deliveryTime: '10–14 business days (estimated)',
        revisions: '3 rounds of design revisions',
        features: [
          'Everything in Practice Starter',
          'Multiple doctor profiles with specialization filters',
          'Time-slot preference enquiry form (routing to clinic reception WhatsApp)',
          'Frequently Asked Questions regarding treatments and pre-visit prep',
          'Local medical SEO optimization for nearby patient queries',
          'NFC Google Review Card setup assistance'
        ],
        exclusions: ['Hospital-wide billing ERP software'],
        idealFor: 'Polyclinics, diagnostic centers, dental chains, and eye care clinics',
        isPopular: true
      },
      {
        id: 'clinics-premium',
        name: 'Healthcare Centre Pro',
        price: 29999,
        priceDisplay: '₹29,999',
        billingType: 'one-time',
        description: 'Bespoke hospital or wellness surgical center website with interactive department navigator and lead automation.',
        pages: 'Up to 16 Pages',
        deliveryTime: '16–22 business days (estimated)',
        revisions: 'Unlimited revisions during staging',
        features: [
          'Everything in Multi-Speciality Care',
          'Interactive department selector and treatment guides',
          'Patient education blog with health guidance articles',
          'Cashless insurance TPA information directory',
          'Priority performance optimization and 99.9% uptime hosting setup',
          '1 Year quarterly content updates and security care'
        ],
        exclusions: ['Direct telemedicine video SDK integration (available as custom scope)'],
        idealFor: 'Nursing homes, surgical day-care clinics, and wellness hospitals'
      }
    ]
  },
  'shops-retail': {
    industrySlug: 'shops-retail',
    industryName: 'Shops & Retail Stores',
    startingPrice: '₹9,999',
    tiers: [
      {
        id: 'shops-starter',
        name: 'Digital Showcase',
        price: 9999,
        priceDisplay: '₹9,999',
        billingType: 'one-time',
        description: 'Digital catalog website letting local customers browse products and order via WhatsApp.',
        pages: 'Up to 6 Pages (Catalog, Featured Products, About, Location, Contact)',
        deliveryTime: '6–8 business days (estimated)',
        revisions: '2 rounds of design revisions',
        features: [
          'Product catalog showcase (up to 25 items with photos)',
          'Direct "Order on WhatsApp" button for every product',
          'Store location map, store timings, and parking info',
          'Festival offers & seasonal discount banner section',
          'Social media links & Instagram feed link'
        ],
        exclusions: ['Automated payment gateway', 'Inventory warehouse synchronization'],
        idealFor: 'Jewellery boutiques, gift shops, clothing stores, and furniture stores'
      },
      {
        id: 'shops-pro',
        name: 'E-Commerce Storefront',
        badge: 'Recommended',
        price: 18999,
        priceDisplay: '₹18,999',
        billingType: 'one-time',
        description: 'Full transactional e-commerce store with cart, online payments, and automated order confirmation.',
        pages: 'Complete Online Store (Catalog, Cart, Checkout, Policies)',
        deliveryTime: '12–16 business days (estimated)',
        revisions: '3 rounds of design revisions',
        features: [
          'Everything in Digital Showcase',
          'Online shopping cart and checkout workflow',
          'Domestic payment gateway integration (Razorpay / Cashfree UPI, cards)',
          'Product category filtering and search capability',
          'Customer order notification via email/WhatsApp',
          'Coupon codes & promotional pricing support'
        ],
        exclusions: ['Custom third-party courier API contract (setup guidance provided)'],
        idealFor: 'Retailers ready to ship across India and accept direct payments',
        isPopular: true
      },
      {
        id: 'shops-premium',
        name: 'Omnichannel Brand',
        price: 29999,
        priceDisplay: '₹29,999',
        billingType: 'one-time',
        description: 'High-volume e-commerce storefront with customer accounts, bulk catalog import, and SEO architecture.',
        pages: 'Unlimited Products Scalable Structure',
        deliveryTime: '18–25 business days (estimated)',
        revisions: 'Unlimited revisions during staging',
        features: [
          'Everything in E-Commerce Storefront',
          'Advanced product variations (sizes, colors, materials)',
          'Customer account registration and past order history',
          'Abandoned cart recovery guidance',
          'Automated invoice generation for orders',
          '1 Year maintenance & security patching'
        ],
        exclusions: ['Custom ERP / SAP warehouse integration'],
        idealFor: 'Established retail brands, apparel labels, and multi-category retailers'
      }
    ]
  },
  photography: {
    industrySlug: 'photography',
    industryName: 'Photography & Creative Studios',
    startingPrice: '₹4,999',
    tiers: [
      {
        id: 'photo-starter',
        name: 'Creative Portfolio',
        price: 4999,
        priceDisplay: '₹4,999',
        billingType: 'one-time',
        description: 'Stunning visual portfolio that showcases your best shots with fast image loading.',
        pages: 'Up to 4 Pages (Portfolio Gallery, About, Services, Booking Enquiry)',
        deliveryTime: '4–6 business days (estimated)',
        revisions: '2 rounds of design revisions',
        features: [
          'High-speed responsive image gallery with category filters',
          'Interactive lightbox preview for desktop and mobile',
          'Session package pricing overview',
          'Direct date enquiry form connected to WhatsApp',
          'Instagram portfolio integration'
        ],
        exclusions: ['Password-protected client photo delivery cloud'],
        idealFor: 'Freelance photographers, portrait shooters, and event videographers'
      },
      {
        id: 'photo-pro',
        name: 'Studio Master',
        badge: 'Most Popular',
        price: 9999,
        priceDisplay: '₹9,999',
        billingType: 'one-time',
        description: 'Comprehensive photography studio website with client proofs, wedding stories, and booking system.',
        pages: 'Up to 8 Pages (Multiple galleries, weddings, corporate, studio tour)',
        deliveryTime: '8–11 business days (estimated)',
        revisions: '3 rounds of design revisions',
        features: [
          'Everything in Creative Portfolio',
          'Private client gallery preview section',
          'Wedding visual stories & photo blog',
          'Video reel embed capability (YouTube / Vimeo / Google Drive)',
          'Equipment and studio rental information page',
          'Advanced image compression so your high-res photos load instantly'
        ],
        exclusions: ['Unlimited cloud RAW storage (client cloud account required)'],
        idealFor: 'Wedding photography studios, commercial shooters, and production houses',
        isPopular: true
      },
      {
        id: 'photo-premium',
        name: 'Production Agency',
        price: 16999,
        priceDisplay: '₹16,999',
        billingType: 'one-time',
        description: 'Flagship creative agency website with cinematic transitions and project case studies.',
        pages: 'Up to 14 Pages',
        deliveryTime: '12–16 business days (estimated)',
        revisions: 'Unlimited revisions during staging',
        features: [
          'Everything in Studio Master',
          'Cinematic fullscreen hero videos',
          'Full creative project case studies with behind-the-scenes breakdown',
          'Contract and booking agreement download integration',
          'Priority SEO for wedding & commercial keywords in your city',
          '1 Year technical updates and maintenance'
        ],
        exclusions: ['Third-party video streaming CDN bill'],
        idealFor: 'High-end cinema & wedding production studios with pan-India clients'
      }
    ]
  },
  'restaurants-cafes': {
    industrySlug: 'restaurants-cafes',
    industryName: 'Restaurants, Cafés & Food Outlets',
    startingPrice: '₹7,999',
    tiers: [
      {
        id: 'dine-starter',
        name: 'Café Spotlight',
        price: 7999,
        priceDisplay: '₹7,999',
        billingType: 'one-time',
        description: 'Mouthwatering menu website that turns local searchers into dining guests.',
        pages: 'Up to 5 Pages (Home, Digital Menu, About, Gallery, Location)',
        deliveryTime: '5–7 business days (estimated)',
        revisions: '2 rounds of design revisions',
        features: [
          'Mobile-friendly digital food & beverage menu with categories and prices',
          'Direct WhatsApp table reservation & order inquiry',
          'Clear operating hours, address, Google Map navigation & parking info',
          'Photo gallery of signature dishes and restaurant ambiance',
          'Zomato / Swiggy profile link buttons'
        ],
        exclusions: ['Automated kitchen POS integration', 'Direct digital payment settlement'],
        idealFor: 'Cafés, cloud kitchens, bistros, bakeries, and quick-service diners'
      },
      {
        id: 'dine-pro',
        name: 'Gourmet Experience',
        badge: 'Recommended',
        price: 13999,
        priceDisplay: '₹13,999',
        billingType: 'one-time',
        description: 'Complete dining portal with table reservation scheduler, event booking, and QR code menus.',
        pages: 'Up to 9 Pages (Multi-menus, catering, private dining, chef story)',
        deliveryTime: '9–12 business days (estimated)',
        revisions: '3 rounds of design revisions',
        features: [
          'Everything in Café Spotlight',
          'Digital QR Code Table Menu ready for counter/table stands',
          'Table reservation request form with guest count & time preference',
          'Catering & party booking inquiry section',
          'Chef profile and culinary story',
          'Local foodie SEO schema (cuisine, price range, opening hours markup)'
        ],
        exclusions: ['Custom hardware tablet POS syncing'],
        idealFor: 'Fine dining restaurants, family dining halls, and multi-cuisine lounges',
        isPopular: true
      },
      {
        id: 'dine-premium',
        name: 'Hospitality Chain',
        price: 21999,
        priceDisplay: '₹21,999',
        billingType: 'one-time',
        description: 'Multi-outlet culinary website with direct online ordering integration and franchise inquiries.',
        pages: 'Up to 15 Pages',
        deliveryTime: '14–18 business days (estimated)',
        revisions: 'Unlimited revisions during staging',
        features: [
          'Everything in Gourmet Experience',
          'Multi-branch location finder with distinct menus per outlet',
          'Direct online takeaway order system via WhatsApp checkout',
          'Franchise & partnership investor enquiry pipeline',
          'Customer review & press mention showcase',
          '1 Year maintenance & seasonal menu update care'
        ],
        exclusions: ['Third-party delivery fleet dispatch'],
        idealFor: 'Restaurant chains, franchise brands, and premium brewery/lounge venues'
      }
    ]
  },
  'gyms-fitness': {
    industrySlug: 'gyms-fitness',
    industryName: 'Gyms, Fitness Centers & Personal Trainers',
    startingPrice: '₹7,999',
    tiers: [
      {
        id: 'gym-starter',
        name: 'Fitness Pro',
        price: 7999,
        priceDisplay: '₹7,999',
        billingType: 'one-time',
        description: 'High-energy website highlighting your facility, plans, and converting visits into free trial passes.',
        pages: 'Up to 5 Pages (Home, Memberships, Facilities, Schedule, Contact)',
        deliveryTime: '5–7 business days (estimated)',
        revisions: '2 rounds of design revisions',
        features: [
          'Membership pricing cards (Monthly, Quarterly, Annual tiers)',
          '"Book a Free Trial Session" WhatsApp lead form',
          'Equipment showcase and gym facility tour gallery',
          'Operating hours & location map with landmark directions',
          'Basic trainer profile overview'
        ],
        exclusions: ['Turnstile biometric access control integration', 'Custom workout tracking app'],
        idealFor: 'Neighborhood fitness studios, CrossFit boxes, and personal trainers'
      },
      {
        id: 'gym-pro',
        name: 'Athletic Club',
        badge: 'Most Popular',
        price: 13999,
        priceDisplay: '₹13,999',
        billingType: 'one-time',
        description: 'Comprehensive fitness center portal with batch timetables, trainer bios, and transformation showcases.',
        pages: 'Up to 9 Pages (Programs, timetables, trainers, transformations, store)',
        deliveryTime: '9–12 business days (estimated)',
        revisions: '3 rounds of design revisions',
        features: [
          'Everything in Fitness Pro',
          'Interactive class timetable (Zumba, Yoga, HIIT, Strength batches)',
          'Detailed trainer credentials & personal training enquiry flow',
          'Client transformation gallery (before & after stories)',
          'Nutrition & supplement guidance section',
          'Local gym search optimization for your neighborhood'
        ],
        exclusions: ['Custom recurring credit card billing ERP'],
        idealFor: 'Full-service fitness clubs, martial arts academies, and yoga centers',
        isPopular: true
      },
      {
        id: 'gym-premium',
        name: 'Wellness Enterprise',
        price: 22999,
        priceDisplay: '₹22,999',
        billingType: 'one-time',
        description: 'Multi-branch gym chain website with online membership checkout and corporate wellness plans.',
        pages: 'Up to 15 Pages',
        deliveryTime: '14–18 business days (estimated)',
        revisions: 'Unlimited revisions during staging',
        features: [
          'Everything in Athletic Club',
          'Multi-location branch selector with distinct pricing and schedules',
          'Direct online membership payment integration (Razorpay / UPI)',
          'Corporate wellness enquiry form for company tie-ups',
          'Video tour & virtual gym preview',
          '1 Year tech maintenance & promotion updates'
        ],
        exclusions: ['Custom mobile app compilation (available on request)'],
        idealFor: 'Gym chains with multiple outlets and luxury wellness resorts'
      }
    ]
  },
  salons: {
    industrySlug: 'salons',
    industryName: 'Salons & Unisex Parlours',
    startingPrice: '₹9,999',
    tiers: [
      {
        id: 'salon-starter',
        name: 'Salon Presence',
        price: 9999,
        priceDisplay: '₹9,999',
        billingType: 'one-time',
        description: 'Chic salon website that displays your style menu and fills your appointment book.',
        pages: 'Up to 5 Pages (Home, Services & Rate Card, Stylists, Gallery, Contact)',
        deliveryTime: '6–8 business days (estimated)',
        revisions: '2 rounds of design revisions',
        features: [
          'Categorized service menu (Hair, Skin, Spa, Grooming) with clear pricing',
          'WhatsApp appointment booking button with prefilled services',
          'Salon ambiance & completed hairstyles photo gallery',
          'Opening hours, gender availability (Unisex/Women-only), and location directions',
          'Stylist profiles & customer consultation guidelines'
        ],
        exclusions: ['Real-time chair booking calendar backend'],
        idealFor: 'Neighborhood unisex salons, hair studios, and grooming bars'
      },
      {
        id: 'salon-pro',
        name: 'Studio Glamour',
        badge: 'Recommended',
        price: 15999,
        priceDisplay: '₹15,999',
        billingType: 'one-time',
        description: 'High-end salon portal with bridal/groom packages, appointment scheduler, and VIP membership card info.',
        pages: 'Up to 10 Pages (Specialist treatments, packages, bridal, team)',
        deliveryTime: '10–13 business days (estimated)',
        revisions: '3 rounds of design revisions',
        features: [
          'Everything in Salon Presence',
          'Bridal & Groom pre-wedding package showcase',
          'Date & preferred stylist enquiry form routing to salon manager',
          'Gift voucher & membership card promotions',
          'Google Review NFC Card integration assistance',
          'Local salon search optimization for your area'
        ],
        exclusions: ['Automated SMS reminder gateway credits'],
        idealFor: 'Premium luxury salons, styling studios, and aesthetic grooming lounges',
        isPopular: true
      },
      {
        id: 'salon-premium',
        name: 'Salon Chain',
        price: 24999,
        priceDisplay: '₹24,999',
        billingType: 'one-time',
        description: 'Bespoke multi-branch salon brand website with academy course enrollments and franchise leads.',
        pages: 'Up to 16 Pages',
        deliveryTime: '15–20 business days (estimated)',
        revisions: 'Unlimited revisions during staging',
        features: [
          'Everything in Studio Glamour',
          'Multi-branch locator with individual branch rate cards',
          'Hair & beauty academy training courses information and enrollment form',
          'Franchise expansion application pipeline',
          'Retail product line showcase (shampoos, serums, styling tools)',
          '1 Year ongoing maintenance and festive campaign updates'
        ],
        exclusions: ['Custom inventory POS software integration'],
        idealFor: 'Salon chains, celebrity stylist brands, and cosmetology academies'
      }
    ]
  },
  'beauty-parlours': {
    industrySlug: 'beauty-parlours',
    industryName: 'Beauty Parlours & Makeup Studios',
    startingPrice: '₹4,999',
    tiers: [
      {
        id: 'beauty-starter',
        name: 'Beauty Glow',
        price: 4999,
        priceDisplay: '₹4,999',
        billingType: 'one-time',
        description: 'Affordable, elegant website for beauty parlours and makeup artists to show services and get bookings.',
        pages: 'Up to 4 Pages (Services, Bridal Gallery, Packages, Contact)',
        deliveryTime: '4–6 business days (estimated)',
        revisions: '2 rounds of design revisions',
        features: [
          'Service rate card (Facials, Waxing, Bleach, Threading, Manicure)',
          'Bridal and festive makeup package rate card',
          'WhatsApp booking button with automatic service selection',
          'Photo showcase of completed makeup & hair styling',
          'Location directions, women-only badge, and contact details'
        ],
        exclusions: ['Live payment processing'],
        idealFor: 'Home-based parlours, freelance makeup artists, and boutique beauty salons'
      },
      {
        id: 'beauty-pro',
        name: 'Bridal Studio Pro',
        badge: 'Most Popular',
        price: 9999,
        priceDisplay: '₹9,999',
        billingType: 'one-time',
        description: 'Complete studio website highlighting bridal transformations, pre-bridal packages, and date availability.',
        pages: 'Up to 8 Pages (Bridal, Skin Care, Makeup Academy, Testimonials)',
        deliveryTime: '7–10 business days (estimated)',
        revisions: '3 rounds of design revisions',
        features: [
          'Everything in Beauty Glow',
          'Pre-bridal 30-day and 60-day customized package breakdown',
          'Bridal trial appointment enquiry form',
          'Video testimonial embeds from happy brides',
          'Instagram portfolio reel integration',
          'Local beauty salon Google Search optimization'
        ],
        exclusions: ['Custom client scheduling software subscription'],
        idealFor: 'Established bridal makeup artists and high-street beauty studios',
        isPopular: true
      },
      {
        id: 'beauty-premium',
        name: 'Aesthetics Elite',
        price: 16999,
        priceDisplay: '₹16,999',
        billingType: 'one-time',
        description: 'Luxury aesthetic beauty lounge and makeup academy with online course registration and product orders.',
        pages: 'Up to 14 Pages',
        deliveryTime: '12–16 business days (estimated)',
        revisions: 'Unlimited revisions during staging',
        features: [
          'Everything in Bridal Studio Pro',
          'Aesthetic skin & laser treatment informative guides',
          'Self-makeup & professional beauty workshop batch schedules',
          'Online deposit payment integration for wedding date reservations',
          '1 Year technical updates and festive design updates'
        ],
        exclusions: ['Direct medical diagnosis tools'],
        idealFor: 'Skin care clinics, cosmetology centers, and elite makeup academies'
      }
    ]
  },
  'builders-architects': {
    industrySlug: 'builders-architects',
    industryName: 'Builders, Architects & Interior Designers',
    startingPrice: '₹14,999',
    tiers: [
      {
        id: 'build-starter',
        name: 'Firm Portfolio',
        price: 14999,
        priceDisplay: '₹14,999',
        billingType: 'one-time',
        description: 'Authoritative, architecturally refined website showcasing your design aesthetic and completed structures.',
        pages: 'Up to 6 Pages (Projects, About Firm, Services, Philosophy, Contact)',
        deliveryTime: '7–10 business days (estimated)',
        revisions: '2 rounds of design revisions',
        features: [
          'Completed and ongoing project galleries with architectural photography',
          'Project categorization (Residential, Commercial, Renovation, Interior)',
          'Detailed consultation & project quote enquiry form',
          'Firm design philosophy and principal architect credentials',
          'Service area & office location with Google Maps'
        ],
        exclusions: ['3D CAD viewer web engine', 'Real-time project construction management portal'],
        idealFor: 'Independent architects, boutique interior designers, and renovation contractors'
      },
      {
        id: 'build-pro',
        name: 'Developer & Studio',
        badge: 'Recommended',
        price: 24999,
        priceDisplay: '₹24,999',
        billingType: 'one-time',
        description: 'Robust commercial website for real estate developers and architecture firms managing large ventures.',
        pages: 'Up to 12 Pages (Project case studies, RERA disclosure, team, process)',
        deliveryTime: '12–16 business days (estimated)',
        revisions: '3 rounds of design revisions',
        features: [
          'Everything in Firm Portfolio',
          'Comprehensive project case studies (area sq ft, location, materials, year)',
          'Downloadable project brochure & floor plan request gate',
          'Statutory RERA registration numbers & compliance disclosure',
          'Interactive process walkthrough from conceptual blueprint to handover',
          'Corporate SEO optimization for premium builder queries'
        ],
        exclusions: ['Custom CRM database synchronization'],
        idealFor: 'Real estate developers, turnkey construction firms, and mid-sized architectural studios',
        isPopular: true
      },
      {
        id: 'build-premium',
        name: 'Infrastructure Enterprise',
        price: 39999,
        priceDisplay: '₹39,999',
        billingType: 'one-time',
        description: 'Flagship digital identity for enterprise construction groups with investor relations and tender disclosures.',
        pages: 'Up to 20 Pages',
        deliveryTime: '18–25 business days (estimated)',
        revisions: 'Unlimited revisions during staging',
        features: [
          'Everything in Developer & Studio',
          'Multi-city project portfolio with interactive location map',
          'Investor relations, annual reports, and ESG compliance sections',
          'Subcontractor & vendor registration procurement portal form',
          'High-speed video hero showcase for landmark construction projects',
          '1 Year maintenance, security audits, and dedicated engineer support'
        ],
        exclusions: ['Enterprise ERP integration (SAP/Oracle)'],
        idealFor: 'Large construction corporations, luxury high-rise builders, and infrastructure groups'
      }
    ]
  },
  'ca-tax-consultants': {
    industrySlug: 'ca-tax-consultants',
    industryName: 'Chartered Accountants & Tax Consultants',
    startingPrice: '₹12,999',
    tiers: [
      {
        id: 'ca-starter',
        name: 'Practice Standard',
        price: 12999,
        priceDisplay: '₹12,999',
        billingType: 'one-time',
        description: 'Distinguished, ICAI-guideline-compliant website establishing professional credibility and practice areas.',
        pages: 'Up to 6 Pages (Firm Profile, Partners, Services, Resources, Contact)',
        deliveryTime: '6–8 business days (estimated)',
        revisions: '2 rounds of design revisions',
        features: [
          'ICAI compliance check (strictly informational, no solicitation claims)',
          'Categorized practice areas (Auditing, GST, Income Tax, ROC, Company Setup)',
          'Senior partner profiles with ICAI membership details & expertise',
          'Confidential consultation enquiry form',
          'Tax due dates calendar & basic advisory section'
        ],
        exclusions: ['Client tax return document upload vault', 'Paid tax advisory billing engine'],
        idealFor: 'Sole proprietorship CA practices and emerging tax consulting firms'
      },
      {
        id: 'ca-pro',
        name: 'Corporate Advisory',
        badge: 'Most Popular',
        price: 19999,
        priceDisplay: '₹19,999',
        billingType: 'one-time',
        description: 'Comprehensive financial advisory portal with business calculators, newsletter, and client enquiry workflow.',
        pages: 'Up to 11 Pages (Detailed practice verticals, sector expertise, updates)',
        deliveryTime: '10–14 business days (estimated)',
        revisions: '3 rounds of design revisions',
        features: [
          'Everything in Practice Standard',
          'Financial calculators (Income Tax Estimator, GST Calculator, EMI Calculator)',
          'Knowledge bank & tax bulletin blog with categorization',
          'Startup incorporation advisory & NRI taxation service pages',
          'Direct WhatsApp hotline for urgent client filing queries',
          'Local business search engine optimization for CA services'
        ],
        exclusions: ['Custom cloud tax accounting software development'],
        idealFor: 'Partnership CA firms, corporate audit practices, and financial advisory agencies',
        isPopular: true
      },
      {
        id: 'ca-premium',
        name: 'Consulting Group',
        price: 31999,
        priceDisplay: '₹31,999',
        billingType: 'one-time',
        description: 'Premier advisory firm web presence with multi-location offices, cross-border M&A verticals, and careers.',
        pages: 'Up to 18 Pages',
        deliveryTime: '15–20 business days (estimated)',
        revisions: 'Unlimited revisions during staging',
        features: [
          'Everything in Corporate Advisory',
          'Multi-branch office directory (e.g. Mumbai, Delhi, Bengaluru)',
          'International taxation, transfer pricing, and corporate finance desks',
          'Article trainee & qualified CA careers application portal',
          'Quarterly compliance newsletter subscription setup',
          '1 Year technical maintenance & tax calendar updates'
        ],
        exclusions: ['Third-party legal database subscription fees'],
        idealFor: 'National multi-partner accounting firms and legal-tax corporate consultancies'
      }
    ]
  },
  'lawyers-legal': {
    industrySlug: 'lawyers-legal',
    industryName: 'Lawyers & Legal Practitioners',
    startingPrice: '₹12,999',
    tiers: [
      {
        id: 'law-starter',
        name: 'Advocate Profile',
        price: 12999,
        priceDisplay: '₹12,999',
        billingType: 'one-time',
        description: 'Dignified, Bar Council of India compliant informational profile presenting practice areas and credentials.',
        pages: 'Up to 5 Pages (Profile, Practice Areas, Courts, Office, Contact)',
        deliveryTime: '6–8 business days (estimated)',
        revisions: '2 rounds of design revisions',
        features: [
          'Bar Council of India compliance disclaimer gate',
          'Practice areas breakdown (Civil, Criminal, Corporate, Family, Arbitration)',
          'Advocate credentials, Bar Association affiliations, and courts of practice',
          'Office consultation appointment enquiry form',
          'Chamber address, court timings, and direct phone/WhatsApp connect'
        ],
        exclusions: ['Online court case tracking system', 'Confidential client document vault'],
        idealFor: 'Individual advocates, legal consultants, and chamber associates'
      },
      {
        id: 'law-pro',
        name: 'Law Chambers',
        badge: 'Recommended',
        price: 21999,
        priceDisplay: '₹21,999',
        billingType: 'one-time',
        description: 'Authoritative law chambers website covering multiple partners, corporate law solutions, and legal articles.',
        pages: 'Up to 10 Pages (Verticals, associate profiles, legal insights, contact)',
        deliveryTime: '10–14 business days (estimated)',
        revisions: '3 rounds of design revisions',
        features: [
          'Everything in Advocate Profile',
          'Multiple advocate & associate profiles with designated practice verticals',
          'Corporate retained counsel & contract advisory service page',
          'Legal insights and judgment commentary repository',
          'Confidential consultation scheduling workflow',
          'Local legal service search engine indexing'
        ],
        exclusions: ['Automated legal document generator'],
        idealFor: 'Mid-sized law firms, legal partnerships, and specialized chambers',
        isPopular: true
      },
      {
        id: 'law-premium',
        name: 'Full-Service Law Firm',
        price: 34999,
        priceDisplay: '₹34,999',
        billingType: 'one-time',
        description: 'Elite corporate law firm digital presence built for high-stakes corporate retainers and cross-border advisory.',
        pages: 'Up to 18 Pages',
        deliveryTime: '16–22 business days (estimated)',
        revisions: 'Unlimited revisions during staging',
        features: [
          'Everything in Law Chambers',
          'Sector-focused practice desks (Fintech, Real Estate, IP, Employment)',
          'Multi-city office locator (Chambers & High Court branch desks)',
          'Law student internship & associate recruitment portal',
          'Ultra-secure SSL encryption and privacy compliance architecture',
          '1 Year maintenance, security monitoring, and regular content care'
        ],
        exclusions: ['Custom litigation billing ERP'],
        idealFor: 'Top-tier corporate legal firms and multi-city advocate consortiums'
      }
    ]
  },
  portfolios: {
    industrySlug: 'portfolios',
    industryName: 'Personal Portfolios & Freelancers',
    startingPrice: '₹3,999',
    tiers: [
      {
        id: 'port-starter',
        name: 'Resume Bio',
        price: 3999,
        priceDisplay: '₹3,999',
        billingType: 'one-time',
        description: 'Crisp single-page or mini-portfolio to share on LinkedIn, resumes, and client introductions.',
        pages: '1 Fast Single-Page Portfolio',
        deliveryTime: '3–5 business days (estimated)',
        revisions: '2 rounds of design revisions',
        features: [
          'About me, professional bio, and career timeline',
          'Core skill set tags & software competencies',
          'Featured projects highlight (up to 6 projects with links)',
          'One-click PDF Resume download button',
          'Direct contact form & LinkedIn/GitHub/Behance links'
        ],
        exclusions: ['Multi-page blog section'],
        idealFor: 'Software developers, UI/UX designers, college grads, and freelance writers'
      },
      {
        id: 'port-pro',
        name: 'Professional Brand',
        badge: 'Most Popular',
        price: 7999,
        priceDisplay: '₹7,999',
        billingType: 'one-time',
        description: 'Multi-page personal brand portal to position yourself as an authority and book high-ticket clients.',
        pages: 'Up to 5 Pages (Home, Case Studies, About, Speaking/Press, Contact)',
        deliveryTime: '6–9 business days (estimated)',
        revisions: '3 rounds of design revisions',
        features: [
          'Everything in Resume Bio',
          'Deep-dive project case studies with problem-solution-impact breakdown',
          'Speaking engagements, awards, and podcast/media appearances',
          'Personal blog / articles section for thought leadership',
          'Custom Calendly / WhatsApp meeting scheduler embed',
          'Personal SEO for your name on Google search'
        ],
        exclusions: ['Paid subscription newsletter platform'],
        idealFor: 'Independent consultants, senior tech leads, executive coaches, and creators',
        isPopular: true
      },
      {
        id: 'port-premium',
        name: 'Executive Authority',
        price: 13999,
        priceDisplay: '₹13,999',
        billingType: 'one-time',
        description: 'Flagship personal website with newsletter capture, digital product sales, and keynote speaker showcase.',
        pages: 'Up to 9 Pages',
        deliveryTime: '10–14 business days (estimated)',
        revisions: 'Unlimited revisions during staging',
        features: [
          'Everything in Professional Brand',
          'Lead magnet download with email opt-in integration',
          'Digital product / ebook checkout link setup',
          'Keynote speaker rider and high-res media kit download',
          '1 NFC Smart Profile Card delivered to your address',
          '1 Year maintenance and portfolio additions'
        ],
        exclusions: ['Custom video course streaming platform'],
        idealFor: 'Published authors, keynote speakers, startup founders, and high-profile executives'
      }
    ]
  },
  'hotels-hospitality': {
    industrySlug: 'hotels-hospitality',
    industryName: 'Hotels, Resorts & Hospitality',
    startingPrice: 'Custom quote',
    tiers: [
      {
        id: 'hotel-starter',
        name: 'Boutique Stay',
        price: 'Custom quote',
        priceDisplay: 'Custom quote',
        billingType: 'custom',
        description: 'Immersive hotel presentation that highlights rooms, amenities, and drives direct WhatsApp booking enquiries without OTA commissions.',
        pages: 'Scoped to your property (Typically 6–10 Pages)',
        deliveryTime: '10–14 business days (estimated)',
        revisions: '3 rounds of design revisions',
        features: [
          'Room category showcases with photos, bed type, and amenities',
          'Direct booking enquiry form (avoiding high OTA commission cuts)',
          'Property amenities (Swimming pool, dining, Wi-Fi, conference)',
          'Nearby local sightseeing attractions and travel guide',
          'Location navigation and airport / railway station proximity info'
        ],
        exclusions: ['Direct two-way channel manager sync (scoped in custom quote)'],
        idealFor: 'Boutique hotels, luxury homestays, bed & breakfasts, and heritage villas'
      },
      {
        id: 'hotel-pro',
        name: 'Resort & Convention',
        badge: 'Recommended',
        price: 'Custom quote',
        priceDisplay: 'Custom quote',
        billingType: 'custom',
        description: 'Full-scale resort portal with wedding venue booking, banquet halls, and multi-cuisine restaurant highlights.',
        pages: 'Typically 12–18 Pages',
        deliveryTime: '16–22 business days (estimated)',
        revisions: 'Comprehensive iterative review',
        features: [
          'Everything in Boutique Stay',
          'Destination wedding & banquet hall lead inquiry pipeline',
          'Virtual tour and interactive property map',
          'Seasonal stay packages and weekend getaway promos',
          'Multi-channel WhatsApp concierge desk integration',
          'High-intent travel SEO targeting holiday makers'
        ],
        exclusions: ['Hardware keycard system integration'],
        idealFor: 'Luxury resorts, eco-lodges, convention centers, and wellness retreats',
        isPopular: true
      },
      {
        id: 'hotel-premium',
        name: 'Hospitality Group',
        price: 'Custom quote',
        priceDisplay: 'Custom quote',
        billingType: 'custom',
        description: 'Enterprise multi-property hospitality portal with booking engine tie-ups and loyalty rewards.',
        pages: 'Multi-property Architecture',
        deliveryTime: '20–30 business days (estimated)',
        revisions: 'Dedicated project management',
        features: [
          'Everything in Resort & Convention',
          'Multi-property selector with live rates via booking engine widget',
          'Corporate tie-ups and MICE conference booking module',
          'Guest review aggregator and TripAdvisor / Google review showcase',
          '1 Year enterprise hosting, uptime monitoring, and content support'
        ],
        exclusions: ['Custom PMS core development'],
        idealFor: 'Hotel chains, luxury resort groups, and serviced apartment networks'
      }
    ]
  },
  'real-estate': {
    industrySlug: 'real-estate',
    industryName: 'Real Estate Agencies & Property Consultants',
    startingPrice: 'Custom quote',
    tiers: [
      {
        id: 'real-starter',
        name: 'Consultant Presence',
        price: 'Custom quote',
        priceDisplay: 'Custom quote',
        billingType: 'custom',
        description: 'High-converting property advisory website presenting verified listings and capturing buyer/tenant leads.',
        pages: 'Scoped to requirements (Typically 6–10 Pages)',
        deliveryTime: '8–12 business days (estimated)',
        revisions: '3 rounds of design revisions',
        features: [
          'Featured property listings (Buy, Rent, Commercial, Plots)',
          'Listing filter by location, property type, and budget range',
          'One-click WhatsApp enquiry for every individual listing',
          'Consultant credentials, RERA agent registration number, and track record',
          'Free property valuation & listing request form for sellers'
        ],
        exclusions: ['Automated MLS / CRM sync (scoped on request)'],
        idealFor: 'Real estate brokers, property consultancies, and channel partners'
      },
      {
        id: 'real-pro',
        name: 'Agency Portal',
        badge: 'Recommended',
        price: 'Custom quote',
        priceDisplay: 'Custom quote',
        billingType: 'custom',
        description: 'Feature-rich real estate agency website with agent profiles, loan EMI calculator, and project microsites.',
        pages: 'Typically 12–18 Pages',
        deliveryTime: '15–20 business days (estimated)',
        revisions: 'Iterative staging review',
        features: [
          'Everything in Consultant Presence',
          'New residential project launch showcases with floor plans & pricing',
          'Interactive Home Loan EMI calculator for buyers',
          'Individual team agent profiles with direct calling links',
          'Neighborhood guides and property market trends blog',
          'High-intent local real estate SEO'
        ],
        exclusions: ['Direct virtual VR headset walkthrough hosting'],
        idealFor: 'Multi-agent real estate firms, prime property channel partners, and advisory companies',
        isPopular: true
      },
      {
        id: 'real-premium',
        name: 'Developer Network',
        price: 'Custom quote',
        priceDisplay: 'Custom quote',
        billingType: 'custom',
        description: 'Enterprise property portal for nationwide brokerages or land banking companies with custom lead routing.',
        pages: 'Scalable Database-driven Portal',
        deliveryTime: '20–30 business days (estimated)',
        revisions: 'Dedicated project manager',
        features: [
          'Everything in Agency Portal',
          'Automated lead routing by zone and agent specialty',
          'Investor land parcel & commercial pre-leased asset showcase',
          'Brochure PDF gate capturing verified mobile numbers',
          '1 Year ongoing technical infrastructure and listing updates'
        ],
        exclusions: ['Third-party legal title verification software'],
        idealFor: 'Large property brokerages, corporate real estate firms, and institutional land consultants'
      }
    ]
  },
  'custom-business': {
    industrySlug: 'custom-business',
    industryName: 'Custom Business Solutions',
    startingPrice: 'Custom quote',
    tiers: [
      {
        id: 'custom-mvp',
        name: 'Targeted Solution',
        price: 'Custom quote',
        priceDisplay: 'Custom quote',
        billingType: 'custom',
        description: 'Tailored web development solving specific business bottlenecks, from custom quote generators to workflow portals.',
        pages: 'Custom Scoped (Typically 5–12 Pages/Screens)',
        deliveryTime: '10–18 business days (estimated)',
        revisions: 'Milestone-based sign-offs',
        features: [
          'In-depth business requirement consultation & architectural scoping',
          'Custom interactive calculator, booking flow, or intake questionnaire',
          'Tailored UI/UX design matching your exact brand requirements',
          'Clean, maintainable modern codebase (React / Vite / Node)',
          'API integrations with existing business tools'
        ],
        exclusions: ['Scope additions outside the agreed technical specification document'],
        idealFor: 'Unique business models, specialized B2B agencies, and bespoke service firms'
      },
      {
        id: 'custom-platform',
        name: 'Business Portal',
        badge: 'Recommended',
        price: 'Custom quote',
        priceDisplay: 'Custom quote',
        billingType: 'custom',
        description: 'End-to-end custom web platform with authentication, client dashboards, and automated notifications.',
        pages: 'Full Custom Application',
        deliveryTime: '20–35 business days (estimated)',
        revisions: 'Sprint-based development & testing',
        features: [
          'Everything in Targeted Solution',
          'Role-based authentication & client dashboard view',
          'Database architecture with secure data persistence',
          'Automated WhatsApp / Email alert triggers',
          'Comprehensive quality testing across desktop and mobile',
          'Complete code handover with documentation'
        ],
        exclusions: ['Third-party API subscription costs'],
        idealFor: 'Startups, scaling SMEs, and businesses modernizing legacy manual processes',
        isPopular: true
      },
      {
        id: 'custom-enterprise',
        name: 'Digital Transformation',
        price: 'Custom quote',
        priceDisplay: 'Custom quote',
        billingType: 'custom',
        description: 'Comprehensive digital ecosystem overhaul with custom tooling, legacy data migration, and dedicated SLA.',
        pages: 'Enterprise Scope',
        deliveryTime: '30–60 business days (estimated)',
        revisions: 'Continuous integration & dedicated engineering',
        features: [
          'Everything in Business Portal',
          'High-availability cloud infrastructure setup with load balancing',
          'Legacy database data migration assistance',
          'Team training & administrative user guides',
          'Dedicated SLA support & maintenance package'
        ],
        exclusions: ['Third-party enterprise cloud infrastructure hosting bills (AWS/GCP)'],
        idealFor: 'Established enterprises requiring rigorous, bespoke web software'
      }
    ]
  }
};

// 3. Add-on Services and Recurring Costs
export const ADDON_SERVICES: AddOnService[] = [
  {
    name: 'Custom Domain (.com / .in / .co.in)',
    description: 'Registration, DNS configuration, and ownership handover in your name.',
    feeType: 'Annual',
    price: '₹1,200 / year',
    note: 'Domain remains 100% your asset. Renewed directly with registrar.'
  },
  {
    name: 'High-Speed Cloud Hosting & SSL',
    description: 'Lightning-fast cloud server with global CDN, free SSL certificate, and 99.9% uptime.',
    feeType: 'Annual',
    price: '₹2,400 / year',
    note: 'Included free for Year 1 with Website + Smart Profile bundle.'
  },
  {
    name: 'Monthly Maintenance & Security Care',
    description: 'Monthly off-site backups, security patching, core dependency updates, and up to 2 minor content updates per month.',
    feeType: 'Monthly',
    price: '₹999 / month',
    note: 'Cancel anytime. No lock-in period.'
  },
  {
    name: 'Additional Custom Pages',
    description: 'Extra custom-designed, mobile-responsive page matching your website system.',
    feeType: 'One-time',
    price: '₹999 / page',
    note: 'Includes content layout, image optimization, and navigation update.'
  },
  {
    name: 'WhatsApp Business Chat Integration',
    description: 'Floating chat widget with prefilled messaging and department routing.',
    feeType: 'One-time',
    price: '₹1,499 one-time',
    note: 'Included free in Pro and Premium website tiers.'
  },
  {
    name: 'Google Search Console & Local SEO Setup',
    description: 'Sitemap submission, Google indexing verification, schema markup, and Google Business Profile optimization.',
    feeType: 'One-time',
    price: '₹2,999 one-time',
    note: 'Included free in Pro and Premium packages.'
  },
  {
    name: 'Additional NFC Smart Review Cards',
    description: 'Extra programmed NFC physical cards for multiple counters, staff members, or branches.',
    feeType: 'One-time',
    price: '₹1,500 / additional card',
    note: 'Bulk pricing available for 5+ cards. Courier delivery included.'
  },
  {
    name: 'Custom Appointment Booking Integration',
    description: 'Interactive booking calendar with slot management and client reminders.',
    feeType: 'Custom',
    price: 'Request a Quote',
    note: 'Tailored to your specific software or calendar provider.'
  },
  {
    name: 'Payment Gateway Integration (Razorpay / Cashfree)',
    description: 'Assistance with domestic merchant verification, API keys, and test-to-live checkout testing.',
    feeType: 'Custom',
    price: 'Request a Quote',
    note: 'Zero commission from BizTap; transaction fees charged by gateway.'
  }
];

// Helper to get industry starting price easily
export function getIndustryStartingPrice(slug: string): string {
  return INDUSTRY_PRICING[slug]?.startingPrice || 'Custom quote';
}
