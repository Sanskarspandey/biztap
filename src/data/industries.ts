export interface IndustryBenefit {
  title: string;
  description: string;
}

export interface IndustryFeature {
  name: string;
  description: string;
  starter: boolean;
  pro: boolean;
  premium: boolean;
}

export interface IndustryPageStructure {
  pageName: string;
  purpose: string;
}

export interface IndustryDetail {
  slug: string;
  name: string;
  shortTagline: string;
  category: 'Service' | 'Retail' | 'Professional' | 'Hospitality' | 'Institutional';
  heroHeadline: string;
  heroSubheadline: string;
  businessProblems: { problem: string; solution: string }[];
  benefits: IndustryBenefit[];
  recommendedFeatures: { title: string; description: string; iconName: string }[];
  examplePageStructure: IndustryPageStructure[];
  featureComparison: IndustryFeature[];
  addOns: { name: string; price: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedIndustries: { slug: string; name: string }[];
}

export const INDUSTRIES: IndustryDetail[] = [
  {
    slug: 'schools',
    name: 'Schools & Educational Institutes',
    shortTagline: 'Modern digital campus for admissions, announcements, and trust',
    category: 'Institutional',
    heroHeadline: 'Build Parent Trust & Drive Admissions With an Authoritative Campus Website',
    heroSubheadline: 'Present your school’s academic curriculum, campus facilities, faculty credentials, and admission guidelines in an organized, mobile-first institutional portal.',
    businessProblems: [
      {
        problem: 'Parents struggle to find curriculum details, fee structures, and admission forms online.',
        solution: 'A dedicated Admissions section with downloadable prospectus, clear eligibility criteria, and instant WhatsApp inquiry routing.'
      },
      {
        problem: 'Important school circulars and exam notifications get lost in messy messaging groups.',
        solution: 'A prominent Notice Board and Announcements banner directly on the homepage for parents and guardians.'
      },
      {
        problem: 'Campuses invest in great sports infrastructure and labs, but prospective parents never see them.',
        solution: 'High-resolution photo and video campus tour galleries showing real classrooms, labs, libraries, and athletic grounds.'
      }
    ],
    benefits: [
      { title: 'Higher Admission Inquiries', description: 'Streamlined online inquiry forms make it effortless for working parents to apply from their phones.' },
      { title: 'Institutional Credibility', description: 'Comply with mandatory CBSE/ICSE board disclosures and display principal address and affiliations.' },
      { title: 'Reduced Reception Calls', description: 'Centralize FAQs, term dates, uniform details, and bus routes online so office staff aren’t overwhelmed.' },
      { title: 'Showcase Student Achievements', description: 'Dedicated honor roll and extracurricular photo galleries highlighting academic and sports trophies.' }
    ],
    recommendedFeatures: [
      { title: 'Online Admission Inquiry Form', description: 'Collect parent contact info, child age, and grade preference with instant email and WhatsApp alerts.', iconName: 'FileCheck' },
      { title: 'Live Circulars & Notice Board', description: 'Easily update holiday announcements, exam timetables, and emergency notices.', iconName: 'Bell' },
      { title: 'Curriculum & Grade Overviews', description: 'Detailed breakdown from Pre-Primary to Senior Secondary with subject choices.', iconName: 'BookOpen' },
      { title: 'Virtual Campus Tour Gallery', description: 'High-speed image galleries categorized by Labs, Sports, Library, Classrooms, and Auditorium.', iconName: 'Image' },
      { title: 'Faculty & Leadership Directory', description: 'Showcase qualified teachers, principal profile, and advisory board credentials.', iconName: 'Users' },
      { title: 'Mandatory Board Disclosures', description: 'Statutory compliance PDF downloads for CBSE, ICSE, or State Board requirements.', iconName: 'ShieldAlert' }
    ],
    examplePageStructure: [
      { pageName: 'Home', purpose: 'Campus overview, latest announcements, principal message, and quick admission CTA' },
      { pageName: 'About Institution', purpose: 'Founding vision, leadership, awards, and educational philosophy' },
      { pageName: 'Academics', purpose: 'Curriculum details, grade-wise pedagogy, evaluation system, and faculty' },
      { pageName: 'Admissions', purpose: 'Procedure, age criteria, fee structure, downloadable brochure, and inquiry form' },
      { pageName: 'Campus & Facilities', purpose: 'STEM labs, digital smart boards, sports grounds, cafeteria, and safety' },
      { pageName: 'Notice Board & Events', purpose: 'Annual school calendar, upcoming sports day, cultural celebrations' },
      { pageName: 'Contact & Location', purpose: 'Campus map, bus transport routes, visiting hours, and reception numbers' }
    ],
    featureComparison: [
      { name: 'Admissions Inquiry Lead Form', description: 'Instant notification on parent inquiry', starter: true, pro: true, premium: true },
      { name: 'Photo Gallery (Campus & Events)', description: 'Categorized responsive image albums', starter: true, pro: true, premium: true },
      { name: 'Notice Board / Announcements Banner', description: 'Homepage ticker for important school news', starter: true, pro: true, premium: true },
      { name: 'Downloadable Prospectus & Syllabus PDF', description: 'Gated or open PDF download for parents', starter: false, pro: true, premium: true },
      { name: 'Mandatory Board Disclosure Section', description: 'Statutory compliance documentation table', starter: false, pro: true, premium: true },
      { name: 'Multi-Branch / Multi-Campus Switcher', description: 'Dedicated pages for multiple school branches', starter: false, pro: false, premium: true },
      { name: 'Virtual Campus Video Walkthrough', description: 'Embedded drone and interior high-res video tour', starter: false, pro: false, premium: true }
    ],
    addOns: [
      { name: 'Online Preliminary Application Flow', price: '₹3,999 one-time', description: 'Multi-step registration form with document attachment links.' },
      { name: 'Annual Sports & Annual Day Photo Album Care', price: '₹2,499 / year', description: 'Fast updates for high-res photo albums after major school events.' },
      { name: 'Bus Route & GPS Tracker Information Portal', price: '₹1,999 one-time', description: 'Static transport route stops, driver contact list, and pickup timetables.' }
    ],
    faqs: [
      { question: 'Can our administrative staff easily post new exam notices?', answer: 'Yes. We build clean update workflows or handle notices for you under our ongoing maintenance care.' },
      { question: 'Does the website comply with CBSE / ICSE mandatory disclosure rules?', answer: 'Yes. We include a dedicated compliance section where all required affiliation documents, managing committee lists, and certificates can be uploaded.' },
      { question: 'Do you provide a student fee payment gateway?', answer: 'Fee gateway integration (Razorpay / Cashfree) can be added as an optional integration during project scoping.' }
    ],
    relatedIndustries: [
      { slug: 'clinics', name: 'Clinics & Healthcare' },
      { slug: 'custom-business', name: 'Custom Business Solutions' },
      { slug: 'portfolios', name: 'Personal Portfolios' }
    ]
  },
  {
    slug: 'clinics',
    name: 'Clinics & Healthcare Practices',
    shortTagline: 'Professional medical presence that builds patient confidence and eases consultations',
    category: 'Service',
    heroHeadline: 'Help Patients Find You, Understand Treatments & Book Consultations with Ease',
    heroSubheadline: 'Modern, empathetic website design for dental clinics, pediatricians, dermatologists, and multi-speciality healthcare practices.',
    businessProblems: [
      {
        problem: 'Patients hesitate to visit doctors whose qualifications and clinic hygiene are not visible online.',
        solution: 'Detailed doctor credentials, medical council registration numbers, clean clinic photography, and hygiene standards.'
      },
      {
        problem: 'Reception phone lines are constantly busy, causing prospective patients to call competitors instead.',
        solution: 'Direct WhatsApp appointment inquiry triggers and preferred time-slot selection widgets available 24/7.'
      },
      {
        problem: 'Patients arrive unprepared without knowing required fasts, past reports, or treatment expectations.',
        solution: 'Clear pre-consultation guidelines and procedural FAQs that educate patients beforehand.'
      }
    ],
    benefits: [
      { title: 'Build Instant Patient Trust', description: 'Display medical degrees, years of experience, fellowships, and verified clinic registration.' },
      { title: 'Direct WhatsApp Bookings', description: 'Patients can tap one button to request consultation slots directly with your front desk.' },
      { title: 'Local Google Map Visibility', description: 'Structured local schema helps patients in your locality find your clinic when searching "doctor near me".' },
      { title: 'Explain Complex Treatments', description: 'Patient-friendly guides for root canals, dental implants, laser skin care, or pediatric checkups.' }
    ],
    recommendedFeatures: [
      { title: 'Doctor Credentials & Bio', description: 'Qualifications (MBBS, MD, MDS), medical council registration, and clinical expertise.', iconName: 'UserCheck' },
      { title: 'WhatsApp Appointment Booking', description: 'Patients select their preferred morning/evening slot and send details instantly to reception.', iconName: 'Calendar' },
      { title: 'Treatment & Procedure Guides', description: 'Clear explanations of common treatments, indications, and recovery expectations.', iconName: 'Stethoscope' },
      { title: 'Clinic Ambiance & Sterilization Tour', description: 'Reassure patients with photos of clean consultation chambers and sanitized equipment.', iconName: 'ShieldCheck' },
      { title: 'Consultation Hours & Directions', description: 'Clear morning/evening OP timings, Sunday availability, and exact Google Maps route.', iconName: 'Clock' },
      { title: 'Patient Preparation FAQs', description: 'Fasting requirements for blood tests, what to bring, and insurance desk information.', iconName: 'HelpCircle' }
    ],
    examplePageStructure: [
      { pageName: 'Home', purpose: 'Clinic overview, lead doctor introduction, key specialities, and one-tap appointment CTA' },
      { pageName: 'About Doctors', purpose: 'Doctor qualifications, career background, memberships, and clinical philosophy' },
      { pageName: 'Treatments & Services', purpose: 'Detailed breakdown of medical procedures offered with patient FAQs' },
      { pageName: 'Clinic Infrastructure', purpose: 'Sanitization protocols, advanced diagnostic equipment, and reception area photos' },
      { pageName: 'Patient Guidelines & FAQs', purpose: 'Pre-visit instructions, cashless insurance TPA desk, and consultation fees' },
      { pageName: 'Contact & OP Timings', purpose: 'Morning/evening clinic hours, emergency contact, map location, and parking details' }
    ],
    featureComparison: [
      { name: 'Doctor Profile & Qualifications', description: 'Degrees, medical registration, and clinical expertise', starter: true, pro: true, premium: true },
      { name: 'WhatsApp Appointment Request Widget', description: 'Slot preference routing directly to clinic reception', starter: true, pro: true, premium: true },
      { name: 'Clinic Hours & Map Directions', description: 'Accurate OP timings and one-tap Google Map navigation', starter: true, pro: true, premium: true },
      { name: 'Multiple Doctor Profiles & Speciality Filters', description: 'For polyclinics and multi-speciality centers', starter: false, pro: true, premium: true },
      { name: 'Patient Treatment Guides & FAQs', description: 'Comprehensive procedural care information', starter: false, pro: true, premium: true },
      { name: 'NFC Google Review Desk Card Integration', description: 'Physical NFC card to gather verified patient reviews at reception', starter: false, pro: true, premium: true },
      { name: 'Cashless TPA & Insurance Desk Directory', description: 'List of accepted health insurance and cashless claim procedures', starter: false, pro: false, premium: true }
    ],
    addOns: [
      { name: 'Reception NFC Smart Review Card', price: '₹3,000 one-time', description: 'Matte counter card enabling satisfied patients to leave Google reviews with one tap.' },
      { name: 'Patient Health Advisory Blog Setup', price: '₹2,499 one-time', description: 'Educate patients with seasonal wellness tips, diabetes care, or pediatric nutrition articles.' },
      { name: 'Emergency After-Hours Hotline Trigger', price: '₹1,200 one-time', description: 'Dedicated urgent dialer routing for critical medical inquiries.' }
    ],
    faqs: [
      { question: 'Can patients book specific consultation slots?', answer: 'Yes. Patients can submit their preferred date, morning/evening window, and chief complaint directly to your reception WhatsApp.' },
      { question: 'Does the website comply with medical advertising ethics in India?', answer: 'Yes. We strictly build informational websites highlighting doctor credentials, factual treatments, and clinic location without making false claims or prohibited solicitations.' },
      { question: 'Can we list multiple doctors across different departments?', answer: 'Yes, our Professional and Premium tiers support multi-doctor directories with department categorization.' }
    ],
    relatedIndustries: [
      { slug: 'salons', name: 'Salons & Wellness' },
      { slug: 'beauty-parlours', name: 'Beauty & Aesthetics' },
      { slug: 'gyms-fitness', name: 'Gyms & Fitness' }
    ]
  },
  {
    slug: 'shops-retail',
    name: 'Shops & Retail Stores',
    shortTagline: 'Showcase your in-store inventory and take orders directly on WhatsApp',
    category: 'Retail',
    heroHeadline: 'Showcase Your Store Catalog & Accept Orders Without Paying Marketplace Commissions',
    heroSubheadline: 'Enable local shoppers to browse your collection, check availability, and purchase via WhatsApp or direct online UPI checkout.',
    businessProblems: [
      {
        problem: 'Customers don’t know what new stock or festival collections you have without visiting physically.',
        solution: 'A high-speed digital product catalog showcasing featured items, prices, variants, and stock highlights.'
      },
      {
        problem: 'Selling on Amazon/Flipkart eats away 20–35% in commissions, return penalties, and advertising costs.',
        solution: 'Your own branded web store where you keep 100% of your retail margin and interact directly with customers.'
      },
      {
        problem: 'Customers ask repeatedly on phone or Instagram: "What is the price? Is this in stock?"',
        solution: 'Clear product listings with high-res photos, specs, and a direct "Order on WhatsApp" button.'
      }
    ],
    benefits: [
      { title: 'Direct Customer Relationships', description: 'Retain your customer phone numbers and build a recurring loyal repeat customer base.' },
      { title: 'Zero Commission Per Order', description: 'No commission deductions. Only standard bank gateway fees (~2%) if accepting online payments.' },
      { title: 'Fast "Order via WhatsApp"', description: 'Indian customers love chatting before buying. One click transfers the product name and photo to WhatsApp.' },
      { title: 'Store Footfall Multiplier', description: 'Showcase your physical store address, landmark, and timings to drive local walk-ins.' }
    ],
    recommendedFeatures: [
      { title: 'Digital Product Showcase', description: 'Display products with photos, descriptions, MRP, and discount offer prices.', iconName: 'Grid' },
      { title: 'Instant WhatsApp Order Button', description: 'Prefills the exact item name, SKU, and size for immediate confirmation.', iconName: 'MessageCircle' },
      { title: 'Category & Collection Filters', description: 'Allow shoppers to filter by New Arrivals, Men, Women, Festive, and Clearance.', iconName: 'Filter' },
      { title: 'Store Location & Timings', description: 'Prominent store address, landmark directions, parking details, and Google Map.', iconName: 'MapPin' },
      { title: 'Festival Offer Banners', description: 'Easily highlight Diwali, Eid, Christmas, or seasonal discount promotional banners.', iconName: 'Tag' },
      { title: 'Customer Reviews & Social Proof', description: 'Showcase genuine customer unboxing photos and positive feedback.', iconName: 'Star' }
    ],
    examplePageStructure: [
      { pageName: 'Home', purpose: 'Hero banner with latest collection, top categories, bestsellers, and store locator' },
      { pageName: 'Product Catalog', purpose: 'Searchable grid of products with price tags, tags, and category filters' },
      { pageName: 'Product Detail View', purpose: 'Multiple product images, description, dimensions/sizes, and Order button' },
      { pageName: 'Festival Offers', purpose: 'Special limited-time promotional bundles and discount schemes' },
      { pageName: 'About the Store', purpose: 'Our brand story, quality commitment, and retail journey' },
      { pageName: 'Visit Our Store', purpose: 'Store photos, map location, contact number, opening hours, and WhatsApp connect' }
    ],
    featureComparison: [
      { name: 'Product Catalog Showcase (Up to 25 items)', description: 'Categorized product cards with images and prices', starter: true, pro: true, premium: true },
      { name: 'One-Tap WhatsApp Order Button', description: 'Prefilled WhatsApp message with product details', starter: true, pro: true, premium: true },
      { name: 'Store Timings, Address & Google Map', description: 'Physical store location details for walk-in shoppers', starter: true, pro: true, premium: true },
      { name: 'Online Shopping Cart & UPI Checkout', description: 'Direct payment via Razorpay/Cashfree (UPI, Cards)', starter: false, pro: true, premium: true },
      { name: 'Coupon Codes & Discount Engine', description: 'Percentage and flat amount coupon validation', starter: false, pro: true, premium: true },
      { name: 'Automated Order Email & Invoice PDF', description: 'Receipt generation and order confirmation emails', starter: false, pro: true, premium: true },
      { name: 'Unlimited Products & Advanced Variations', description: 'Multi-variant size/color matrices and inventory counts', starter: false, pro: false, premium: true }
    ],
    addOns: [
      { name: 'Razorpay / Cashfree UPI Gateway Integration', price: '₹4,999 one-time', description: 'Accept Google Pay, PhonePe, Paytm, and credit cards with instant settlement.' },
      { name: 'In-Store Counter QR Stand', price: '₹1,500 one-time', description: 'Branded acrylic stand allowing walk-in customers to scan and browse the online catalog.' },
      { name: 'Courier Tracking Link Integration', price: '₹1,999 one-time', description: 'Send automated shipping tracking links via WhatsApp or email.' }
    ],
    faqs: [
      { question: 'Can I sell without an online payment gateway?', answer: 'Yes! Our Starter tier lets customers browse your products and click "Order on WhatsApp", where you can settle payments via UPI QR or Cash on Delivery.' },
      { question: 'How do I add new products or change prices?', answer: 'We build an easy-to-update catalogue structure or manage catalog updates for you under our affordable monthly maintenance plan.' },
      { question: 'Can this work for both wholesale (B2B) and retail (B2C)?', answer: 'Yes, we can include minimum order quantity (MOQ) notices and separate wholesale inquiry forms.' }
    ],
    relatedIndustries: [
      { slug: 'restaurants-cafes', name: 'Restaurants & Cafés' },
      { slug: 'salons', name: 'Salons & Parlours' },
      { slug: 'custom-business', name: 'Custom Business Solutions' }
    ]
  },
  {
    slug: 'photography',
    name: 'Photography & Creative Studios',
    shortTagline: 'Breathtaking visual portfolio with lightning-fast image loading',
    category: 'Professional',
    heroHeadline: 'Showcase Your Visual Mastery and Book High-Ticket Client Shoots',
    heroSubheadline: 'Ultra-fast, distraction-free photography websites with full-resolution lightboxes, wedding stories, and date inquiry triggers.',
    businessProblems: [
      {
        problem: 'Instagram compresses your high-resolution photos and limits client viewing experience.',
        solution: 'A high-speed portfolio website with retina-grade image compression that preserves sharpness while loading instantly.'
      },
      {
        problem: 'Prospective wedding clients ask for pricing and portfolio links through messy DMs.',
        solution: 'A curated portfolio categorized by Weddings, Pre-Wedding, Maternity, Commercial, and Fashion with transparent packages.'
      },
      {
        problem: 'Photographers lose shoot bookings because clients don’t know if their shoot date is available.',
        solution: 'A streamlined Date Availability & Booking Inquiry form routing directly to your WhatsApp.'
      }
    ],
    benefits: [
      { title: 'Pristine Image Quality', description: 'State-of-the-art WebP compression ensures your photos look sharp without slow load times.' },
      { title: 'Interactive Lightbox Viewing', description: 'Clients can pinch-to-zoom and click through high-resolution galleries smoothly on mobile and desktop.' },
      { title: 'Showcase Full Shoot Stories', description: 'Display complete wedding storylines from haldi to reception rather than just single Instagram posts.' },
      { title: 'Position for Premium Pricing', description: 'A polished studio website commands higher shoot fees than a basic social media link.' }
    ],
    recommendedFeatures: [
      { title: 'Categorized Image Galleries', description: 'Filter galleries by Wedding, Pre-Wedding, Commercial, Fashion, Maternity, and Baby.', iconName: 'Camera' },
      { title: 'Full-Screen Image Lightbox', description: 'Smooth, distraction-free photo viewer with keyboard and swipe navigation.', iconName: 'Maximize2' },
      { title: 'Shoot Package & Pricing Breakdown', description: 'Transparent overview of deliverable hours, edited photos, cinematography, and drone coverage.', iconName: 'Package' },
      { title: 'Date Availability Inquiry Form', description: 'Collect event date, location/city, and required coverage directly on WhatsApp.', iconName: 'CalendarCheck' },
      { title: 'Cinematic Video Reel Embeds', description: 'Fast YouTube/Vimeo/Google Drive video embeds for cinematic wedding teasers.', iconName: 'Video' },
      { title: 'Client Reviews & Press Features', description: 'Testimonials from couples and commercial brands establishing your artistic reputation.', iconName: 'Award' }
    ],
    examplePageStructure: [
      { pageName: 'Home', purpose: 'Full-bleed hero photo slider, featured shoots, photographer bio, and booking CTA' },
      { pageName: 'Portfolio Galleries', purpose: 'Categorized galleries with interactive lightbox preview' },
      { pageName: 'Wedding Stories', purpose: 'Case study style complete visual coverage of selected wedding couples' },
      { pageName: 'Packages & Inclusions', purpose: 'Clear shoot packages (Silver, Gold, Platinum) with deliverable breakdowns' },
      { pageName: 'About the Artist', purpose: 'Gear, awards, artistic philosophy, and behind-the-scenes photographs' },
      { pageName: 'Book a Shoot', purpose: 'Event date selector, city/destination field, and direct WhatsApp connect' }
    ],
    featureComparison: [
      { name: 'Responsive Photo Gallery with Lightbox', description: 'High-speed image loading with click-to-expand', starter: true, pro: true, premium: true },
      { name: 'Shoot Date & Booking Inquiry Form', description: 'Date preference routed directly to photographer WhatsApp', starter: true, pro: true, premium: true },
      { name: 'Social Media & Instagram Feed Link', description: 'Direct links to your active social channels', starter: true, pro: true, premium: true },
      { name: 'Wedding Visual Stories & Photo Blog', description: 'Full coverage case studies with narrative text', starter: false, pro: true, premium: true },
      { name: 'Cinematic Video Reel Integration', description: 'Embedded teaser videos with optimized playback', starter: false, pro: true, premium: true },
      { name: 'Private Client Proofing Gallery', description: 'Password-protected proof selection area for clients', starter: false, pro: true, premium: true },
      { name: 'City SEO for Wedding & Commercial Shoots', description: 'Local keyword optimization for "wedding photographer in [city]"', starter: false, pro: false, premium: true }
    ],
    addOns: [
      { name: 'Private Password Client Gallery Portal', price: '₹3,499 one-time', description: 'Deliver curated photo proofs to clients with password-protected galleries.' },
      { name: 'Cinematic Full-Width Video Hero Banner', price: '₹1,499 one-time', description: 'Self-hosted compressed ambient background video for your homepage.' },
      { name: 'NFC Smart Card for Event Networking', price: '₹3,000 one-time', description: 'Tap prospective clients’ phones at wedding venues to instantly open your portfolio.' }
    ],
    faqs: [
      { question: 'Will high-resolution photos make the website load slowly?', answer: 'No. We apply advanced modern compression and responsive image sizing so your photos display crisply while loading in fractions of a second.' },
      { question: 'Can I easily upload new photoshoot albums later?', answer: 'Yes. We build clean gallery architectures and provide prompt monthly maintenance if you prefer us to handle uploads.' },
      { question: 'Can clients select and shortlist favorite photos for printing?', answer: 'Yes, our custom client proofing add-on enables clients to favorite and select photos for album printing.' }
    ],
    relatedIndustries: [
      { slug: 'portfolios', name: 'Personal Portfolios' },
      { slug: 'beauty-parlours', name: 'Beauty & Makeup' },
      { slug: 'builders-architects', name: 'Builders & Architects' }
    ]
  },
  {
    slug: 'restaurants-cafes',
    name: 'Restaurants, Cafés & Food Outlets',
    shortTagline: 'Mouthwatering digital menus, table bookings, and commission-free ordering',
    category: 'Hospitality',
    heroHeadline: 'Turn Hungry Local Searchers Into Seated Guests & Direct Takeaway Orders',
    heroSubheadline: 'Mouthwatering menu presentation, table reservation inquiries, and QR code integration without paying 30% aggregator cuts.',
    businessProblems: [
      {
        problem: 'Paper menus are expensive to reprint every time prices or dish availability changes.',
        solution: 'A dynamic mobile digital menu accessible via QR code on dining tables and online via Google search.'
      },
      {
        problem: 'Zomato and Swiggy take 25–35% cuts on every single food order.',
        solution: 'Direct "Order on WhatsApp" Takeaway orders where you keep 100% of the food margin.'
      },
      {
        problem: 'Guests struggle to find current operating hours, parking availability, or table availability on busy weekends.',
        solution: 'Live operating hours, Google Map directions, parking notes, and advance table reservation booking forms.'
      }
    ],
    benefits: [
      { title: 'Zero Food Aggregator Commission', description: 'Take takeaway and catering orders directly on WhatsApp without paying high third-party commissions.' },
      { title: 'Mobile-Friendly QR Table Menu', description: 'Guests scan an elegant table stand QR code to browse food, beverages, and chef specials.' },
      { title: 'Direct Table Reservations', description: 'Capture advance party and weekend table bookings directly at your reception desk.' },
      { title: 'Google Food Search Presence', description: 'Appear when local foodies search "best café near me" or "family restaurant in [area]".' }
    ],
    recommendedFeatures: [
      { title: 'Categorized Digital Food Menu', description: 'Appetizers, Mains, Beverages, Desserts, and Chef Specials with dietary icons (Veg/Non-Veg).', iconName: 'Utensils' },
      { title: 'Direct WhatsApp Takeaway Order', description: 'Diners select items and tap "Order on WhatsApp" with prefilled dish names and quantities.', iconName: 'ShoppingBag' },
      { title: 'Table Reservation Inquiry Form', description: 'Guests submit requested date, seating time, and guest count with instant WhatsApp confirmation.', iconName: 'Calendar' },
      { title: 'Ambiance & Dish Photography Gallery', description: 'Showcase your restaurant interior, outdoor seating, lighting, and photogenic dishes.', iconName: 'Image' },
      { title: 'Operating Hours & Map Directions', description: 'Accurate lunch/dinner timings, last order time, parking details, and Google Map link.', iconName: 'Clock' },
      { title: 'Zomato & Swiggy Links', description: 'Provide direct buttons for customers who prefer ordering through existing delivery apps.', iconName: 'ExternalLink' }
    ],
    examplePageStructure: [
      { pageName: 'Home', purpose: 'Restaurant ambiance hero, signature dishes, today’s specials, and reservation CTA' },
      { pageName: 'Digital Menu', purpose: 'Categorized food & drinks menu with dietary filters, prices, and mouthwatering photos' },
      { pageName: 'Table Reservation', purpose: 'Date, time, and guest count booking form connected to restaurant phone' },
      { pageName: 'Private Parties & Catering', purpose: 'Birthday celebrations, corporate catering, and private hall booking inquiries' },
      { pageName: 'Our Story & Chef', purpose: 'Culinary philosophy, authentic ingredient sourcing, and chef background' },
      { pageName: 'Location & Contact', purpose: 'Store address, parking guide, opening hours, and direct call/WhatsApp buttons' }
    ],
    featureComparison: [
      { name: 'Digital Food & Beverage Menu', description: 'Categorized with Veg/Non-Veg indicators and prices', starter: true, pro: true, premium: true },
      { name: 'WhatsApp Takeaway Order Trigger', description: 'Prefilled dish names sent directly to restaurant number', starter: true, pro: true, premium: true },
      { name: 'Operating Hours, Map & Parking Guide', description: 'Clear directions and dining schedule', starter: true, pro: true, premium: true },
      { name: 'Table Reservation Request System', description: 'Guests submit party size, time, and date preferences', starter: false, pro: true, premium: true },
      { name: 'Print-Ready Table QR Stand Designs', description: 'Branded vector tent card layouts for dining tables', starter: false, pro: true, premium: true },
      { name: 'NFC Google Review Table Card', description: 'Physical tap-to-review card to generate 5-star Google reviews', starter: false, pro: true, premium: true },
      { name: 'Multi-Outlet / Multi-Branch Menu Selector', description: 'Dedicated menus and locations for restaurant chains', starter: false, pro: false, premium: true }
    ],
    addOns: [
      { name: 'Table-Top Acrylic QR Stand Package (Pack of 10)', price: '₹2,499 one-time', description: 'High-durability matte acrylic stands printed with your custom QR menu.' },
      { name: 'NFC Smart Review Card for Billing Desk', price: '₹3,000 one-time', description: 'Invite guests to tap and leave a Google review when paying their bill.' },
      { name: 'Seasonal Festival Menu Updates', price: '₹1,499 / update', description: 'Fast updates for Ramadan, Diwali, New Year, or Valentine’s special menus.' }
    ],
    faqs: [
      { question: 'Can customers order food directly without calling?', answer: 'Yes! Customers select their dishes and click "Order via WhatsApp", which sends the full order list with prices directly to your WhatsApp line.' },
      { question: 'How do customers view the menu on their phone inside the restaurant?', answer: 'We design custom table QR codes. When guests scan the code with their smartphone camera, your digital menu opens instantly without downloading any app.' },
      { question: 'Can we mark items as "Sold Out" or change prices?', answer: 'Yes. Menu changes are straightforward and we offer ongoing maintenance support for instant updates.' }
    ],
    relatedIndustries: [
      { slug: 'shops-retail', name: 'Shops & Retail' },
      { slug: 'hotels-hospitality', name: 'Hotels & Hospitality' },
      { slug: 'salons', name: 'Salons & Parlours' }
    ]
  },
  {
    slug: 'gyms-fitness',
    name: 'Gyms, Fitness Centers & Personal Trainers',
    shortTagline: 'High-energy fitness websites that convert visitors into trial passes and memberships',
    category: 'Service',
    heroHeadline: 'Pack Your Gym and Sign Up More Members With a High-Converting Fitness Website',
    heroSubheadline: 'Display your facilities, membership packages, trainer credentials, batch schedules, and free trial pass booking forms.',
    businessProblems: [
      {
        problem: 'Prospective gym members want to see the workout equipment and hygiene before stepping in.',
        solution: 'A high-impact photo and video tour showcasing strength zones, cardio decks, steam rooms, and locker facilities.'
      },
      {
        problem: 'People hesitate to commit to memberships without trying the gym first.',
        solution: 'A prominent "Claim 1-Day Free Trial Pass" form that captures verified mobile numbers for your sales team.'
      },
      {
        problem: 'Members constantly call to check batch timings for Zumba, Crossfit, Yoga, and MMA.',
        solution: 'An interactive weekly class schedule timetable accessible on smartphones anytime.'
      }
    ],
    benefits: [
      { title: 'Drive Free Trial Inquiries', description: 'Convert local fitness seekers into trial sessions with zero phone tag.' },
      { title: 'Transparent Membership Tiers', description: 'Clear display of Monthly, Quarterly, and Annual plans with feature inclusions.' },
      { title: 'Showcase Real Transformations', description: 'Before & after client transformation photo galleries that prove your trainers deliver results.' },
      { title: 'Promote Personal Training', description: 'Dedicated trainer profiles highlighting certifications (ACE, K11) and specialized workout regimes.' }
    ],
    recommendedFeatures: [
      { title: 'Membership Pricing Calculator', description: 'Clear comparison of General Gym, Strength, Cardio, and Personal Training tiers.', iconName: 'CreditCard' },
      { title: 'Free Trial Pass Lead Generator', description: 'One-tap form capturing visitor name, phone, and goal (Weight Loss, Muscle Gain).', iconName: 'Flame' },
      { title: 'Interactive Weekly Class Schedule', description: 'Timetable for Yoga, Zumba, HIIT, Spinning, and Pilates batches.', iconName: 'Clock' },
      { title: 'Certified Trainer Profiles', description: 'Highlight trainer credentials, sports backgrounds, and client specialization.', iconName: 'Users' },
      { title: 'Client Transformation Showcase', description: 'Before-and-after photo comparisons and member testimonials.', iconName: 'Award' },
      { title: 'Facility & Equipment Tour', description: 'High-res photos of imported biomechanics equipment, steam bath, and shower amenities.', iconName: 'Dumbbell' }
    ],
    examplePageStructure: [
      { pageName: 'Home', purpose: 'High-energy hero, free trial CTA, facility highlights, and member transformations' },
      { pageName: 'Membership Plans', purpose: 'Monthly, quarterly, and annual subscription tiers with comparison table' },
      { pageName: 'Class Schedule', purpose: 'Weekly batch timetable for group classes (Yoga, Zumba, Strength)' },
      { pageName: 'Facility Tour', purpose: 'Photos of cardio section, free weights, CrossFit rig, and steam/sauna' },
      { pageName: 'Trainers & Team', purpose: 'Trainer certifications, personal training consultation request form' },
      { pageName: 'Contact & Free Trial', purpose: 'Map location, parking info, gym opening hours, and direct trial sign-up' }
    ],
    featureComparison: [
      { name: 'Membership Pricing Plans Display', description: 'Monthly, Quarterly, Annual comparison cards', starter: true, pro: true, premium: true },
      { name: 'Free Trial Pass WhatsApp Lead Trigger', description: 'Captures prospective member phone number for trial', starter: true, pro: true, premium: true },
      { name: 'Facility Photos & Gym Timings', description: 'Equipment highlights and morning/evening hours', starter: true, pro: true, premium: true },
      { name: 'Interactive Weekly Class Timetable', description: 'Batch schedule for group fitness classes', starter: false, pro: true, premium: true },
      { name: 'Trainer Profiles & PT Booking Workflow', description: 'Personal trainer credentials and session inquiry', starter: false, pro: true, premium: true },
      { name: 'Client Transformation Photo Showcase', description: 'Before and after visual case studies', starter: false, pro: true, premium: true },
      { name: 'Online Membership Payment Integration', description: 'Direct payment via UPI/Cards with instant receipt', starter: false, pro: false, premium: true }
    ],
    addOns: [
      { name: 'Direct UPI / Card Membership Payment Gateway', price: '₹4,999 one-time', description: 'Allow members to renew their quarterly/annual memberships online.' },
      { name: 'Reception NFC Smart Review Card', price: '₹3,000 one-time', description: 'Encourage members to tap and leave a 5-star Google review at the reception counter.' },
      { name: 'Diet & Nutrition Guidance Section', price: '₹1,999 one-time', description: 'Share pre-workout and protein intake guidelines for members.' }
    ],
    faqs: [
      { question: 'Can prospective members book a free trial online?', answer: 'Yes. They fill out a brief 3-field form (Name, WhatsApp Number, Goal) which immediately pings your sales desk on WhatsApp.' },
      { question: 'Can we change the group class timetable easily?', answer: 'Yes! The timetable is built cleanly so updates take just a couple of minutes.' },
      { question: 'Can we sell gym merchandise or protein supplements on the site?', answer: 'Yes, an e-commerce add-on can be added to sell gym apparel, shakers, and supplements.' }
    ],
    relatedIndustries: [
      { slug: 'clinics', name: 'Clinics & Healthcare' },
      { slug: 'salons', name: 'Salons & Wellness' },
      { slug: 'portfolios', name: 'Personal Portfolios' }
    ]
  },
  {
    slug: 'salons',
    name: 'Salons & Unisex Parlours',
    shortTagline: 'Chic salon websites that showcase haircut menus and fill appointment chairs',
    category: 'Service',
    heroHeadline: 'Showcase Your Hair & Beauty Artistry and Fill Your Appointment Chairs',
    heroSubheadline: 'Stylish, mobile-optimized salon websites featuring categorized service menus, stylist profiles, and frictionless WhatsApp appointment booking.',
    businessProblems: [
      {
        problem: 'Clients ask repeatedly for price lists across haircut, hair coloring, keratin, and facial services.',
        solution: 'A beautiful digital service menu with clear pricing for Men, Women, and Unisex treatments.'
      },
      {
        problem: 'Clients walk in expecting specific senior stylists who might be off-duty or fully booked.',
        solution: 'Stylist profiles showcasing their signature cuts and direct WhatsApp booking for specific stylists.'
      },
      {
        problem: 'Bridal and groom packages require detailed consultation that gets lost over casual phone calls.',
        solution: 'Dedicated Bridal & Groom Packages section with consultation forms and service breakdowns.'
      }
    ],
    benefits: [
      { title: 'Frictionless Appointment Requests', description: 'Clients tap their preferred service and book time slots directly on WhatsApp.' },
      { title: 'Visual Hairstyle Inspiration', description: 'Galleries of completed hair color transformations, balayage, fades, and beard styling.' },
      { title: 'Promote High-Ticket Packages', description: 'Showcase profitable keratin treatments, botox hair spa, and bridal grooming packages.' },
      { title: 'Local Search Visibility', description: 'Rank on Google Maps when neighborhood clients search "best salon near me".' }
    ],
    recommendedFeatures: [
      { title: 'Categorized Salon Rate Card', description: 'Haircut, Color, Spa, Skin, Waxing, and Grooming with clear pricing and time estimates.', iconName: 'Scissors' },
      { title: 'One-Tap WhatsApp Appointment', description: 'Clients select service and time slot; message auto-formats for the salon manager.', iconName: 'Calendar' },
      { title: 'Stylist Portfolio Showcase', description: 'Highlight senior hair stylists, color specialists, and makeup artists.', iconName: 'Users' },
      { title: 'Before & After Hair Transformations', description: 'Interactive image slider showing dramatic hair color and styling results.', iconName: 'Sparkles' },
      { title: 'Bridal & Groom Packages', description: 'Multi-session packages with pre-wedding timelines and consultation links.', iconName: 'Heart' },
      { title: 'Salon Ambiance & Hygiene Tour', description: 'Clean styling stations, sanitized equipment, and comfortable wash basins.', iconName: 'CheckCircle2' }
    ],
    examplePageStructure: [
      { pageName: 'Home', purpose: 'Modern salon hero, book appointment CTA, top services, and stylist highlights' },
      { pageName: 'Services & Rate Card', purpose: 'Full price list categorized by Hair, Skin, Beard, Spa, and Treatments' },
      { pageName: 'Bridal & Groom Studio', purpose: 'Pre-wedding packages, makeup trials, and customized wedding quotes' },
      { pageName: 'Our Stylists', purpose: 'Meet the team, their specialties, and book individual stylists' },
      { pageName: 'Transformation Gallery', purpose: 'Before and after photos of hair coloring, styling, and treatments' },
      { pageName: 'Contact & Timings', purpose: 'Salon hours, location directions, parking details, and WhatsApp connect' }
    ],
    featureComparison: [
      { name: 'Categorized Salon Rate Card', description: 'Clear pricing for haircuts, color, spa, and grooming', starter: true, pro: true, premium: true },
      { name: 'WhatsApp Appointment Booking Trigger', description: 'Pre-selected service inquiry sent to salon manager', starter: true, pro: true, premium: true },
      { name: 'Salon Ambiance Gallery & Timings', description: 'Interior photos and operating hours', starter: true, pro: true, premium: true },
      { name: 'Bridal & Groom Package Showcase', description: 'Dedicated pre-wedding grooming tiers and consultation', starter: false, pro: true, premium: true },
      { name: 'Stylist Profiles & Specialization', description: 'Showcase individual stylist experience and portfolio', starter: false, pro: true, premium: true },
      { name: 'NFC Google Review Desk Card', description: 'Tap-to-review card to generate 5-star Google salon reviews', starter: false, pro: true, premium: true },
      { name: 'Multi-Branch Salon Location Switcher', description: 'Dedicated pages and rate cards for salon chains', starter: false, pro: false, premium: true }
    ],
    addOns: [
      { name: 'Billing Desk NFC Smart Review Card', price: '₹3,000 one-time', description: 'Let happy clients tap their phone after a great haircut to leave an instant Google review.' },
      { name: 'Salon Membership / Loyalty Program Page', price: '₹1,999 one-time', description: 'Promote annual prepaid salon membership cards and discount benefits.' },
      { name: 'Retail Hair Products Showcase', price: '₹2,499 one-time', description: 'Display shampoos, serums, and styling waxes available for purchase at your salon.' }
    ],
    faqs: [
      { question: 'Can clients select a specific stylist when booking?', answer: 'Yes! The booking trigger allows clients to mention their preferred stylist and service.' },
      { question: 'Can we update prices easily when we launch new services?', answer: 'Yes, updating prices takes just minutes or you can leave it to our ongoing monthly care.' },
      { question: 'Is this suitable for both men-only barbershops and women-only salons?', answer: 'Yes! We customize the visual branding, color accents, and service categories to match barbershops, unisex salons, or women-only studios.' }
    ],
    relatedIndustries: [
      { slug: 'beauty-parlours', name: 'Beauty Parlours' },
      { slug: 'gyms-fitness', name: 'Gyms & Fitness' },
      { slug: 'clinics', name: 'Clinics & Healthcare' }
    ]
  },
  {
    slug: 'beauty-parlours',
    name: 'Beauty Parlours & Makeup Studios',
    shortTagline: 'Elegant websites highlighting bridal transformations, skincare, and bookings',
    category: 'Service',
    heroHeadline: 'Showcase Your Bridal Magic & Fill Your Wedding Booking Calendar',
    heroSubheadline: 'Elegant, mobile-first website design for beauty parlours, bridal makeup artists, and aesthetic skin studios.',
    businessProblems: [
      {
        problem: 'Brides hesitate to book without seeing authentic, unedited photos of real bridal makeup.',
        solution: 'A pristine bridal gallery categorized by Traditional, Contemporary, Reception, and Engagement looks.'
      },
      {
        problem: 'Clients repeatedly message asking: "What are your pre-bridal charges? Do you travel to venues?"',
        solution: 'Clear package breakdowns covering 30-day pre-bridal sittings, D-day bridal makeup, and destination travel policies.'
      },
      {
        problem: 'Peak wedding dates get double-booked because inquiries come from multiple random social platforms.',
        solution: 'A structured Wedding Date Availability inquiry form routing directly to your personal WhatsApp.'
      }
    ],
    benefits: [
      { title: 'Secure Advance Bridal Bookings', description: 'Brides book months in advance when your portfolio looks polished and professional.' },
      { title: 'Transparent Package Tiers', description: 'Display HD makeup, Airbrush, and Pre-Bridal packages clearly to avoid endless price bargaining.' },
      { title: 'Highlight Hygiene & Premium Products', description: 'Showcase international brands used (MAC, Huda Beauty, Bobbi Brown) and sanitized brushes.' },
      { title: 'Direct WhatsApp Wedding Inquiries', description: 'Receive event date, venue location, and number of guests in one organized message.' }
    ],
    recommendedFeatures: [
      { title: 'Bridal & Party Makeup Gallery', description: 'High-res photos of bridal transformations, saree draping, and hairstyle art.', iconName: 'Sparkles' },
      { title: 'Pre-Bridal Skincare Packages', description: 'Detailed sittings covering facials, body polishing, waxing, and hair treatments.', iconName: 'Heart' },
      { title: 'Wedding Date Availability Checker', description: 'Bride submits wedding date, venue city, and looks required with instant WhatsApp alert.', iconName: 'Calendar' },
      { title: 'Cosmetics Brands Showcase', description: 'Reassure brides with logos of genuine premium brands used in your studio.', iconName: 'ShieldCheck' },
      { title: 'Client Reviews & Bride Testimonials', description: 'Heartfelt words from past brides proving punctuality and artistic skill.', iconName: 'Star' },
      { title: 'Studio Location & Women-Only Badge', description: 'Clear directions, safety assurances, and parlour timings.', iconName: 'MapPin' }
    ],
    examplePageStructure: [
      { pageName: 'Home', purpose: 'Elegant hero, bridal booking CTA, featured brides, and signature services' },
      { pageName: 'Bridal Packages', purpose: 'HD makeup, Airbrush makeup, and Pre-Bridal grooming packages with pricing' },
      { pageName: 'Bridal Gallery', purpose: 'Categorized albums: Haldi, Mehendi, Wedding, Reception, and Hairstyle' },
      { pageName: 'Parlour Services & Rate Card', purpose: 'Everyday beauty services: Facials, Waxing, Bleach, Threading, Pedicure' },
      { pageName: 'About the Artist', purpose: 'Certifications, training background, and philosophy on enhancing natural beauty' },
      { pageName: 'Check Wedding Dates', purpose: 'Event date enquiry form with venue location and WhatsApp connect' }
    ],
    featureComparison: [
      { name: 'Service Rate Card (Facials, Waxing, Hair)', description: 'Clear price card for regular beauty treatments', starter: true, pro: true, premium: true },
      { name: 'Bridal Makeup Gallery Showcase', description: 'High-res portfolio of bridal and party makeup looks', starter: true, pro: true, premium: true },
      { name: 'WhatsApp Booking Button', description: 'Direct chat trigger for appointment scheduling', starter: true, pro: true, premium: true },
      { name: 'Detailed Pre-Bridal Package Breakdown', description: 'Comprehensive 30/60 day bridal sittings breakdown', starter: false, pro: true, premium: true },
      { name: 'Wedding Date Availability Inquiry Form', description: 'Intake form capturing date, venue city, and guest count', starter: false, pro: true, premium: true },
      { name: 'Video Testimonials Embeds', description: 'Video clips from past brides and party clients', starter: false, pro: true, premium: true },
      { name: 'Online Advance Token Payment Gateway', description: 'Collect advance booking deposits via UPI/Cards', starter: false, pro: false, premium: true }
    ],
    addOns: [
      { name: 'Wedding Date Advance Token Payment Gateway', price: '₹4,999 one-time', description: 'Let brides lock their wedding date online with an advance UPI token deposit.' },
      { name: 'Studio Reception NFC Review Card', price: '₹3,000 one-time', description: 'Invite parlour clients to tap and leave a 5-star Google review at checkout.' },
      { name: 'Self-Makeup Workshop Enrollment Form', price: '₹1,999 one-time', description: 'Promote personal grooming masterclasses and collect student signups.' }
    ],
    faqs: [
      { question: 'Can brides check if their wedding date is free?', answer: 'Yes! The wedding date inquiry form allows brides to submit their date and venue city, pinging your WhatsApp instantly so you can check your schedule.' },
      { question: 'Is this suitable for freelance makeup artists without a physical parlour?', answer: 'Absolutely! We tailor the layout for freelance mobile MUAs highlighting on-location bridal travel services.' },
      { question: 'Can we include video reels of makeup transformations?', answer: 'Yes, we embed optimized video reels from Instagram or YouTube that play smoothly without slowing down the page.' }
    ],
    relatedIndustries: [
      { slug: 'salons', name: 'Salons & Unisex Parlours' },
      { slug: 'photography', name: 'Photography & Studios' },
      { slug: 'clinics', name: 'Clinics & Healthcare' }
    ]
  },
  {
    slug: 'portfolios',
    name: 'Personal Portfolios & Freelancers',
    shortTagline: 'Sleek, high-impact personal brand portfolios that win clients and job offers',
    category: 'Professional',
    heroHeadline: 'Own Your Name Online and Command Higher Rates for Your Expertise',
    heroSubheadline: 'Fast, sleek personal brand websites for developers, designers, consultants, creators, and corporate professionals.',
    businessProblems: [
      {
        problem: 'A standard resume or LinkedIn profile fails to showcase the depth of your past projects and case studies.',
        solution: 'An interactive portfolio featuring detailed project breakdowns, live demo links, and architectural decisions.'
      },
      {
        problem: 'Freelance clients negotiate down rates when you don’t have an authoritative web presence.',
        solution: 'A polished personal site establishing your domain expertise, client testimonials, and industry thought leadership.'
      },
      {
        problem: 'Recruiters and clients get lost in messy email threads trying to schedule consultation calls.',
        solution: 'Direct Calendly / WhatsApp meeting scheduler embeds and a one-click PDF resume download.'
      }
    ],
    benefits: [
      { title: 'Personal Google Search Authority', description: 'When someone Googles your full name, your personal site ranks #1 instead of random social profiles.' },
      { title: 'Showcase In-Depth Case Studies', description: 'Explain the business problem, your tactical solution, and measurable results achieved.' },
      { title: 'Direct Meeting Scheduling', description: 'Allow high-value leads to book a 15-minute introductory call directly from your site.' },
      { title: 'One-Click Resume Access', description: 'Provide an always updated PDF resume download button for recruiters and clients.' }
    ],
    recommendedFeatures: [
      { title: 'Interactive Case Study Grid', description: 'Showcase projects with screenshots, technologies used, problem statements, and live links.', iconName: 'Briefcase' },
      { title: 'Skills & Competency Badges', description: 'Clear visual tags displaying your tech stack, tools, and methodologies.', iconName: 'Code' },
      { title: 'One-Click Resume PDF Download', description: 'Recruiters can download your polished resume immediately.', iconName: 'Download' },
      { title: 'Client Testimonials & Recommendations', description: 'Quotes from past managers, clients, and collaborators validating your work.', iconName: 'Quote' },
      { title: 'Meeting Booking Integration', description: 'Embed Calendly or WhatsApp chat for effortless consultation scheduling.', iconName: 'Calendar' },
      { title: 'Articles & Thought Leadership Blog', description: 'Share your perspective on industry trends to prove deep subject matter mastery.', iconName: 'BookOpen' }
    ],
    examplePageStructure: [
      { pageName: 'Home', purpose: 'Impactful headline, current role/focus, featured projects, and get-in-touch CTA' },
      { pageName: 'Projects & Case Studies', purpose: 'Deep dive into 4–6 signature projects with challenge, solution, and results' },
      { pageName: 'About & Journey', purpose: 'Career timeline, education, personal philosophy, and hobbies' },
      { pageName: 'Skills & Experience', purpose: 'Interactive tech stack, past companies, and downloadable resume' },
      { pageName: 'Articles & Insights', purpose: 'Technical tutorials, design teardowns, or business commentary' },
      { pageName: 'Contact & Let’s Talk', purpose: 'Calendly meeting booking embed, contact form, and social links' }
    ],
    featureComparison: [
      { name: 'Featured Projects Showcase', description: 'Project cards with live demo links and screenshots', starter: true, pro: true, premium: true },
      { name: 'Skills & Competency Badges', description: 'Visual breakdown of technologies and tools', starter: true, pro: true, premium: true },
      { name: 'Downloadable PDF Resume Button', description: 'One-click direct download for recruiters', starter: true, pro: true, premium: true },
      { name: 'In-Depth Project Case Studies', description: 'Multi-screen walkthrough with problem-solution breakdown', starter: false, pro: true, premium: true },
      { name: 'Calendly / Meeting Booking Integration', description: 'Direct calendar scheduler for client intro calls', starter: false, pro: true, premium: true },
      { name: 'Personal Blog / Article Publishing', description: 'Clean markdown-based articles for thought leadership', starter: false, pro: true, premium: true },
      { name: 'NFC Smart Business Card Included', description: 'Physical NFC card to tap and share your portfolio at conferences', starter: false, pro: false, premium: true }
    ],
    addOns: [
      { name: 'Physical NFC Smart Profile Card', price: '₹3,000 one-time', description: 'Tap prospective clients’ phones at meetups and conferences to instantly open your portfolio.' },
      { name: 'Calendly / Google Meet Integration', price: '₹1,200 one-time', description: 'Seamlessly embed your calendar scheduler directly onto your contact page.' },
      { name: 'Digital Product / Ebook Download Gate', price: '₹2,499 one-time', description: 'Capture email addresses in exchange for your free templates, guides, or design assets.' }
    ],
    faqs: [
      { question: 'Can I link to external GitHub, Figma, or Behance projects?', answer: 'Yes! Every project card can include external links, live staging previews, and repository links.' },
      { question: 'Can I update my resume and add new projects later?', answer: 'Yes. We structure the portfolio code cleanly so you can replace your PDF resume or add new projects with minimal effort.' },
      { question: 'Will this help me rank when someone searches my name on Google?', answer: 'Yes! We configure canonical URLs, meta tags, and structured schema so your personal domain ranks prominently for your name.' }
    ],
    relatedIndustries: [
      { slug: 'photography', name: 'Photography & Studios' },
      { slug: 'ca-tax-consultants', name: 'CA & Tax Consultants' },
      { slug: 'custom-business', name: 'Custom Business Solutions' }
    ]
  },
  {
    slug: 'builders-architects',
    name: 'Builders, Architects & Interior Designers',
    shortTagline: 'Architecturally refined web portals showcasing structural excellence and design vision',
    category: 'Professional',
    heroHeadline: 'Showcase Your Architectural Vision & Win High-Value Turnkey Contracts',
    heroSubheadline: 'Authoritative, visually refined websites for architecture studios, luxury interior designers, and construction developers.',
    businessProblems: [
      {
        problem: 'High-net-worth clients won’t award ₹50L+ interior or building projects to firms with unpolished websites.',
        solution: 'A magazine-grade architectural portfolio presenting floor plans, material palettes, and completed site photos.'
      },
      {
        problem: 'Real estate developers must legally disclose statutory RERA registration details and approvals.',
        solution: 'A dedicated RERA Compliance and Project Approval section ensuring complete legal transparency.'
      },
      {
        problem: 'Prospective clients struggle to understand your design methodology from concept blueprint to site handover.',
        solution: 'An interactive 5-stage Process Walkthrough explaining 3D rendering, budgeting, procurement, and execution.'
      }
    ],
    benefits: [
      { title: 'Win High-Ticket Contracts', description: 'Position your studio alongside top-tier design firms to win lucrative residential and commercial briefs.' },
      { title: 'Project Case Study Depth', description: 'Highlight plot area (sq. ft.), location, design challenge, materials used, and client requirements.' },
      { title: 'Downloadable Project Brochures', description: 'Gate floor plans and brochures behind a verified mobile number intake form.' },
      { title: 'RERA Compliance Ready', description: 'Cleanly display RERA numbers, structural guarantees, and municipal sanctions.' }
    ],
    recommendedFeatures: [
      { title: 'Architectural Project Gallery', description: 'Categorized by Residential, Commercial, Hospitality, Renovation, and Luxury Interiors.', iconName: 'Home' },
      { title: 'Detailed Project Case Studies', description: 'Photo albums, square footage, design philosophy, and before-and-after floor plans.', iconName: 'Layers' },
      { title: 'RERA Disclosures & Sanction Numbers', description: 'Statutory compliance section fulfilling legal property disclosure mandates.', iconName: 'FileCheck' },
      { title: 'Interactive Design Process Walkthrough', description: 'Step-by-step guide: Briefing → 3D Visualization → Site Construction → Handover.', iconName: 'Sliders' },
      { title: 'Downloadable Floor Plan Brochure Gate', description: 'Capture prospective buyer phone numbers before they download project PDF brochures.', iconName: 'Download' },
      { title: 'Firm Leadership & Studio Philosophy', description: 'Principal architect bio, COA council registration, and awards won.', iconName: 'Compass' }
    ],
    examplePageStructure: [
      { pageName: 'Home', purpose: 'Full-bleed project hero, firm philosophy, featured developments, and consultation CTA' },
      { pageName: 'Projects Portfolio', purpose: 'Filterable grid: Ongoing Projects, Completed Developments, Residential, Commercial' },
      { pageName: 'Project Detail Case Study', purpose: 'High-res photos, floor layout, specifications, area sq. ft., and brochure download' },
      { pageName: 'Our Design Process', purpose: 'From initial conceptual sketch to material sourcing and structural handover' },
      { pageName: 'About the Studio', purpose: 'Founders’ credentials, awards, design team, and sustainability commitments' },
      { pageName: 'Contact & Project Inquiries', purpose: 'Site consultation form, studio address, Google Map, and WhatsApp connect' }
    ],
    featureComparison: [
      { name: 'Completed & Ongoing Project Galleries', description: 'Filterable by residential, commercial, and interior', starter: true, pro: true, premium: true },
      { name: 'Consultation & Site Quote Inquiry Form', description: 'Captures project scope, plot size, and budget', starter: true, pro: true, premium: true },
      { name: 'Firm Credentials & Studio Address', description: 'COA registration, office location, and contact numbers', starter: true, pro: true, premium: true },
      { name: 'Deep-Dive Project Case Studies', description: 'Includes area sq. ft., materials, and architectural blueprints', starter: false, pro: true, premium: true },
      { name: 'Downloadable Project Brochure PDF Gate', description: 'Gated PDF download capturing verified buyer mobile numbers', starter: false, pro: true, premium: true },
      { name: 'RERA Disclosures & Legal Compliance', description: 'Statutory registration tables and municipal approvals', starter: false, pro: true, premium: true },
      { name: 'Multi-City Project Directory & 360 Tour Embed', description: 'Interactive virtual tour embeds for luxury developments', starter: false, pro: false, premium: true }
    ],
    addOns: [
      { name: 'Gated Project Brochure Lead Capture Gate', price: '₹2,499 one-time', description: 'Require visitors to enter their verified mobile number before downloading project PDFs.' },
      { name: '360° Virtual Walkthrough Embed', price: '₹3,499 one-time', description: 'Embed Matterport or Kuula interactive 360-degree walkthroughs for completed show-flats.' },
      { name: 'NFC Smart Card for Site Visits & Networking', price: '₹3,000 one-time', description: 'Tap client phones during site visits to immediately share project specs.' }
    ],
    faqs: [
      { question: 'Can we gate our project brochure PDF behind a phone number form?', answer: 'Yes! Visitors must enter their name and phone number to receive the PDF download link, sending you an instant lead on WhatsApp.' },
      { question: 'Does the website display properly on tablets and laptops for client presentations?', answer: 'Yes, our designs are optimized for high-res iPad Pro tablets and laptop screens so you can present projects directly during client pitches.' },
      { question: 'Can we update ongoing construction progress photos regularly?', answer: 'Yes, we provide ongoing maintenance support so you can publish monthly construction progress updates.' }
    ],
    relatedIndustries: [
      { slug: 'real-estate', name: 'Real Estate & Properties' },
      { slug: 'photography', name: 'Photography & Studios' },
      { slug: 'custom-business', name: 'Custom Business Solutions' }
    ]
  },
  {
    slug: 'ca-tax-consultants',
    name: 'Chartered Accountants & Tax Consultants',
    shortTagline: 'Dignified, ICAI-compliant digital presence establishing financial authority',
    category: 'Professional',
    heroHeadline: 'Establish Financial Authority & Attract High-Value Corporate Retainers',
    heroSubheadline: 'ICAI-guideline-compliant website design for Chartered Accountants, corporate tax advisors, and audit firms.',
    businessProblems: [
      {
        problem: 'ICAI guidelines strictly regulate advertising and solicitation for chartered accountants.',
        solution: 'We build strictly informational, dignified websites adhering to ICAI Council guidelines on website maintenance.'
      },
      {
        problem: 'Corporate clients need to know your firm’s specific domain competencies (GST, Transfer Pricing, ROC, Audit).',
        solution: 'Well-structured practice area verticals outlining expertise and sector specializations.'
      },
      {
        problem: 'Clients repeatedly call asking for statutory tax due dates and compliance calendar reminders.',
        solution: 'An interactive Statutory Compliance Calendar keeping clients updated on GST, TDS, and Advance Tax deadlines.'
      }
    ],
    benefits: [
      { title: 'Strict ICAI Guideline Compliance', description: 'Informational architecture respecting professional council codes with no misleading solicitation.' },
      { title: 'Attract Corporate Retainers', description: 'Clear positioning for corporate audits, startup funding compliance, and cross-border taxation.' },
      { title: 'Publish Timely Tax Bulletins', description: 'Keep corporate clients informed with concise budget updates and GST notifications.' },
      { title: 'Interactive Financial Calculators', description: 'Provide utility tools like Income Tax Estimator, GST Calculator, and EMI calculators.' }
    ],
    recommendedFeatures: [
      { title: 'Structured Practice Verticals', description: 'Detailed pages for Statutory Audit, Direct Tax, GST, International Tax, and ROC Filings.', iconName: 'FileText' },
      { title: 'Senior Partner Credentials', description: 'FCA/ACA qualifications, ICAI membership numbers, and professional experience.', iconName: 'UserCheck' },
      { title: 'Statutory Compliance Calendar', description: 'Interactive timeline displaying upcoming GST, TDS, ROC, and Advance Tax due dates.', iconName: 'Calendar' },
      { title: 'Interactive Financial Calculators', description: 'Embed calculators for Income Tax (Old vs New Regime) and GST calculation.', iconName: 'Calculator' },
      { title: 'Confidential Consultation Form', description: 'Secure client intake form with confidentiality notice.', iconName: 'Lock' },
      { title: 'Knowledge Bank & Tax Bulletins', description: 'Publish analysis of Union Budget notifications, CBDT circulars, and tax updates.', iconName: 'BookOpen' }
    ],
    examplePageStructure: [
      { pageName: 'Home', purpose: 'Firm overview, partner credentials, practice sectors, and confidential inquiry CTA' },
      { pageName: 'Practice Areas', purpose: 'Categorized: Audit & Assurance, Direct Taxation, GST, Corporate Law, Valuation' },
      { pageName: 'Partner Profiles', purpose: 'Senior partners’ qualifications, experience, and ICAI registration details' },
      { pageName: 'Statutory Due Dates', purpose: 'Updated calendar of monthly and quarterly tax filing deadlines' },
      { pageName: 'Knowledge Bank', purpose: 'Tax articles, budget summaries, and regulatory compliance circulars' },
      { pageName: 'Contact & Chambers', purpose: 'Office address, meeting scheduling, email, and location directions' }
    ],
    featureComparison: [
      { name: 'Categorized Practice Areas', description: 'Audit, Direct Tax, GST, Corporate Advisory', starter: true, pro: true, premium: true },
      { name: 'Partner Profiles & ICAI Registration', description: 'Dignified showcase of partner credentials', starter: true, pro: true, premium: true },
      { name: 'Confidential Consultation Inquiry Form', description: 'Direct email and WhatsApp routing for corporate inquiries', starter: true, pro: true, premium: true },
      { name: 'Statutory Tax Compliance Calendar', description: 'Updated table of monthly and quarterly tax filing dates', starter: false, pro: true, premium: true },
      { name: 'Interactive Financial Calculators', description: 'Income Tax and GST estimation tools for visitors', starter: false, pro: true, premium: true },
      { name: 'Knowledge Bank & Article Publishing', description: 'Repository for budget analysis and regulatory updates', starter: false, pro: true, premium: true },
      { name: 'Multi-Branch Office Directory', description: 'Offices in multiple cities with dedicated partner contacts', starter: false, pro: false, premium: true }
    ],
    addOns: [
      { name: 'Interactive Income Tax / GST Calculator Suite', price: '₹2,999 one-time', description: 'Custom-built responsive calculators for Old vs New Tax Regime comparison.' },
      { name: 'Monthly Tax Due Date Notification Care', price: '₹1,499 / month', description: 'Keep your compliance calendar and monthly statutory bulletin updated without effort.' },
      { name: 'Article Trainee & Career Application Portal', price: '₹1,999 one-time', description: 'Capture CVs and inquiries from aspiring CA article assistants and accountants.' }
    ],
    faqs: [
      { question: 'Does the website comply with ICAI advertising regulations?', answer: 'Yes. In strict accordance with the Chartered Accountants Act and ICAI guidelines, the website is structured purely for information dissemination with no comparative advertising or solicitation.' },
      { question: 'Can we publish monthly tax updates and articles?', answer: 'Yes! We configure a clean knowledge bank where you can publish tax bulletins, circular summaries, and budget analyses.' },
      { question: 'Can we add calculators for clients to estimate tax?', answer: 'Yes, our Professional and Premium tiers include interactive financial calculators that boost visitor engagement.' }
    ],
    relatedIndustries: [
      { slug: 'lawyers-legal', name: 'Lawyers & Legal Services' },
      { slug: 'builders-architects', name: 'Builders & Architects' },
      { slug: 'custom-business', name: 'Custom Business Solutions' }
    ]
  },
  {
    slug: 'lawyers-legal',
    name: 'Lawyers & Legal Practitioners',
    shortTagline: 'Dignified legal websites respecting Bar Council of India guidelines',
    category: 'Professional',
    heroHeadline: 'Establish Legal Standing & Practice Expertise With Dignity and Compliance',
    heroSubheadline: 'Bar Council of India compliant websites for advocates, legal consultants, and multi-partner law chambers.',
    businessProblems: [
      {
        problem: 'Bar Council of India Rule 36 places strict restrictions on advocate advertising and commercial claims.',
        solution: 'We implement the mandatory BCI disclaimer gate and structure the website strictly for informational transparency.'
      },
      {
        problem: 'Prospective clients struggle to find an advocate specializing in their exact legal dispute (Civil, Criminal, NCLT, Family).',
        solution: 'Clear breakdown of practice areas, courts of practice (Supreme Court, High Court, Tribunals), and case types.'
      },
      {
        problem: 'Clients need to book confidential chamber consultations without discussing sensitive case details publicly.',
        solution: 'A private, confidential consultation inquiry form with strict attorney-client confidentiality notices.'
      }
    ],
    benefits: [
      { title: 'BCI Compliance Disclaimer Gate', description: 'Ensures compliance with Bar Council of India norms regarding informational web profiles.' },
      { title: 'Organized Practice Verticals', description: 'Explain areas of practice clearly across High Courts, District Courts, DRT, and NCLT.' },
      { title: 'Chamber Authority & Heritage', description: 'Showcase founding advocates, educational pedigree (NLUs, LLM), and bar council enrollments.' },
      { title: 'Confidential Consultation Booking', description: 'Frictionless, secure appointment scheduling for chamber consultations.' }
    ],
    recommendedFeatures: [
      { title: 'BCI Disclaimer Acknowledgment', description: 'Mandatory introductory disclaimer dialog adhering to Bar Council rules.', iconName: 'ShieldAlert' },
      { title: 'Practice Areas Taxonomy', description: 'Corporate, Criminal Defense, Civil Litigation, Arbitration, Family Law, and Intellectual Property.', iconName: 'Briefcase' },
      { title: 'Advocate Credentials & Bar Enrollment', description: 'Bar Association affiliations, courts of admission, and senior counsel profiles.', iconName: 'Award' },
      { title: 'Confidential Chamber Intake Form', description: 'Private appointment inquiry with encrypted transmission.', iconName: 'Lock' },
      { title: 'Legal Insights & Judgment Analysis', description: 'Articles discussing legal principles and landmark High Court / Supreme Court decisions.', iconName: 'BookOpen' },
      { title: 'Chamber Location & Court Timings', description: 'Office address, chambers proximity to High Court, and consultation availability.', iconName: 'MapPin' }
    ],
    examplePageStructure: [
      { pageName: 'Home', purpose: 'Informational firm overview with mandatory BCI disclaimer, practice sectors, and chamber address' },
      { pageName: 'Practice Areas', purpose: 'Categorized legal disciplines: Corporate, Commercial Arbitration, Civil, Criminal, NCLT' },
      { pageName: 'Advocates & Partners', purpose: 'Professional credentials, bar council enrollments, and academic background' },
      { pageName: 'Courts of Practice', purpose: 'Overview of representation across Supreme Court, High Courts, and National Tribunals' },
      { pageName: 'Legal Insights', purpose: 'Scholarly articles, commentary on recent statutory amendments, and legal updates' },
      { pageName: 'Chamber Location & Contact', purpose: 'Chamber address, court timings, consultation booking, and phone/WhatsApp' }
    ],
    featureComparison: [
      { name: 'Mandatory Bar Council Disclaimer Gate', description: 'Compliance modal requiring visitor acknowledgment', starter: true, pro: true, premium: true },
      { name: 'Categorized Practice Areas', description: 'Civil, Criminal, Corporate, Arbitration, Family Law', starter: true, pro: true, premium: true },
      { name: 'Advocate Credentials & Bar Enrollment', description: 'Educational degrees and bar affiliations', starter: true, pro: true, premium: true },
      { name: 'Confidential Consultation Form', description: 'Private chamber appointment scheduling', starter: true, pro: true, premium: true },
      { name: 'Legal Insights & Judgment Commentary', description: 'Scholarly articles and regulatory analyses', starter: false, pro: true, premium: true },
      { name: 'Multiple Associate & Partner Profiles', description: 'Profiles for multi-lawyer chambers', starter: false, pro: true, premium: true },
      { name: 'Multi-City Chambers Directory', description: 'Branch chambers in High Court jurisdictions', starter: false, pro: false, premium: true }
    ],
    addOns: [
      { name: 'Legal Articles & Judgment Commentary Blog', price: '₹2,499 one-time', description: 'Publish high-quality legal analyses that establish thought leadership.' },
      { name: 'NFC Smart Card for Advocate Chambers', price: '₹3,000 one-time', description: 'Share your chamber profile and contact details seamlessly at legal conferences.' },
      { name: 'Internship & Junior Associate Application Form', price: '₹1,999 one-time', description: 'Intake portal for law student internships and chamber applications.' }
    ],
    faqs: [
      { question: 'Does this comply with the Bar Council of India Rule 36?', answer: 'Yes. In strict accordance with BCI rules, we implement an acknowledgment disclaimer stating that the website is solely for informational purposes at the user’s request, avoiding any solicitation or advertising.' },
      { question: 'Can we mention specific landmark case outcomes?', answer: 'BCI guidelines restrict touting or boasting case victories. We present factual practice areas, published judgment citations, and scholarly legal insights.' },
      { question: 'Can clients schedule confidential consultations?', answer: 'Yes. Our confidential intake form ensures contact details and brief descriptions are delivered securely to your chambers.' }
    ],
    relatedIndustries: [
      { slug: 'ca-tax-consultants', name: 'CA & Tax Consultants' },
      { slug: 'builders-architects', name: 'Builders & Architects' },
      { slug: 'custom-business', name: 'Custom Business Solutions' }
    ]
  },
  {
    slug: 'hotels-hospitality',
    name: 'Hotels, Resorts & Hospitality',
    shortTagline: 'Breathtaking hotel websites that drive direct bookings and eliminate OTA commission fees',
    category: 'Hospitality',
    heroHeadline: 'Showcase Your Property & Drive Direct Bookings Without High OTA Commission Fees',
    heroSubheadline: 'Immersive, visually rich websites for boutique hotels, luxury resorts, heritage homestays, and convention banquets.',
    businessProblems: [
      {
        problem: 'Online travel agents (OTAs) like MakeMyTrip and Booking.com charge 18–25% commissions on every room night.',
        solution: 'Direct WhatsApp booking inquiry pipelines where guests book directly at your best guaranteed rates.'
      },
      {
        problem: 'Guests cannot get a real sense of room sizes, bathroom luxury, or property views from generic OTA thumbnails.',
        solution: 'High-resolution room category showcases with detailed amenity checklists, floor area, and 360 view tours.'
      },
      {
        problem: 'Banquets, destination weddings, and corporate retreat inquiries require customized proposals that OTAs don’t support.',
        solution: 'A dedicated Banquet & Destination Wedding Inquiry engine with guest capacity calculators and menu options.'
      }
    ],
    benefits: [
      { title: 'Keep 100% of Room Revenue', description: 'Direct guest bookings mean zero commissions paid to third-party travel aggregators.' },
      { title: 'Drive Lucrative Banquet Leads', description: 'Capture high-ticket inquiries for destination weddings, annual corporate meets, and conferences.' },
      { title: 'Highlight Property Amenities', description: 'Showcase your infinity pool, multi-cuisine dining, spa wellness, and children’s play zones.' },
      { title: 'Local Sightseeing Guides', description: 'Provide travel itineraries and nearby tourist attractions that position your hotel as the ideal base.' }
    ],
    recommendedFeatures: [
      { title: 'Room Categories & Amenities', description: 'Deluxe, Suite, Villa categories with bed types, square footage, views, and bathroom features.', iconName: 'Bed' },
      { title: 'Direct WhatsApp Room Booking', description: 'Guests submit check-in, check-out dates, and number of guests directly to the front desk.', iconName: 'Calendar' },
      { title: 'Weddings & Banquet Hall Showcase', description: 'Highlight banquet capacity, lawn square footage, catering packages, and decor photos.', iconName: 'Heart' },
      { title: 'Dining & Room Service Menu', description: 'Present on-site restaurants, breakfast buffets, and poolside cocktail menus.', iconName: 'Utensils' },
      { title: 'Property Photo & Video Gallery', description: 'High-res galleries of facade lighting, gardens, pool, lobby, and evening ambiance.', iconName: 'Image' },
      { title: 'Local Attractions & Travel Guide', description: 'Distances to airport, railway stations, and top tourist landmarks with map directions.', iconName: 'Compass' }
    ],
    examplePageStructure: [
      { pageName: 'Home', purpose: 'Full-bleed video/photo hero, room check availability CTA, key amenities, and guest reviews' },
      { pageName: 'Rooms & Suites', purpose: 'Individual showcases of Deluxe, Premium, and Presidential suites with amenities' },
      { pageName: 'Dining & Restaurants', purpose: 'On-site restaurants, breakfast timings, signature culinary dishes, and bar menu' },
      { pageName: 'Weddings & Events', purpose: 'Banquet halls, poolside lawn capacity, corporate conferencing packages' },
      { pageName: 'Gallery & Experience', purpose: 'High-resolution photo albums of swimming pool, wellness spa, and grounds' },
      { pageName: 'Location & Direct Booking', purpose: 'Interactive map, airport transit distance, WhatsApp concierge, and inquiry form' }
    ],
    featureComparison: [
      { name: 'Room Category Showcases with Amenities', description: 'Bed type, area sq. ft., view, and bathroom photos', starter: true, pro: true, premium: true },
      { name: 'Direct WhatsApp Room Booking Flow', description: 'Captures check-in/out dates and guest count', starter: true, pro: true, premium: true },
      { name: 'Dining, Amenities & Property Gallery', description: 'Pool, restaurant, and room photography', starter: true, pro: true, premium: true },
      { name: 'Weddings & Banquet Inquiry Engine', description: 'Detailed lead flow for private events and conferences', starter: false, pro: true, premium: true },
      { name: 'Local Sightseeing & Concierge Guide', description: 'Curated local travel recommendations for guests', starter: false, pro: true, premium: true },
      { name: 'TripAdvisor & Google Review Sync Assistance', description: 'Showcase verified 5-star traveler reviews', starter: false, pro: true, premium: true },
      { name: 'Channel Manager / Direct Booking Engine Sync', description: 'Integration with existing hotel PMS or channel manager', starter: false, pro: false, premium: true }
    ],
    addOns: [
      { name: 'Front Desk NFC Smart Review Stand', price: '₹3,000 one-time', description: 'Matte acrylic card placed at reception for departing guests to tap and review on Google.' },
      { name: 'Banquet & Wedding Hall Brochure Gate', price: '₹2,499 one-time', description: 'Capture event planner phone numbers before downloading wedding package menus.' },
      { name: 'Seasonal Holiday Stay Packages Page', price: '₹1,999 one-time', description: 'Promote New Year, monsoon, or long-weekend getaway special packages.' }
    ],
    faqs: [
      { question: 'How do direct bookings work without paying OTA commissions?', answer: 'Guests browse your rooms and submit their dates and preferences directly to your front desk WhatsApp or booking form. Your staff confirms availability and takes payment directly via UPI or card.' },
      { question: 'Can this integrate with an existing channel manager or PMS?', answer: 'Yes! We can embed widgets from popular channel managers (like Staah, eZee, Cloudbeds) if you want real-time room availability syncing.' },
      { question: 'Can we collect inquiries for banquets and destination weddings?', answer: 'Yes, our weddings and banquet lead engine is one of the highest-converting features for hospitality clients.' }
    ],
    relatedIndustries: [
      { slug: 'restaurants-cafes', name: 'Restaurants & Cafés' },
      { slug: 'real-estate', name: 'Real Estate & Properties' },
      { slug: 'custom-business', name: 'Custom Business Solutions' }
    ]
  },
  {
    slug: 'real-estate',
    name: 'Real Estate & Property Consultants',
    shortTagline: 'High-converting property advisory websites presenting verified listings and capturing buyer leads',
    category: 'Service',
    heroHeadline: 'Showcase Prime Listings & Capture High-Intent Buyer & Investor Leads',
    heroSubheadline: 'Feature-rich digital portals for real estate brokerages, property consultants, channel partners, and land advisory firms.',
    businessProblems: [
      {
        problem: 'Listing on MagicBricks and 99acres means competing against thousands of other brokers for the exact same lead.',
        solution: 'Your own exclusive real estate website where every lead belongs 100% to your firm with zero competition.'
      },
      {
        problem: 'Buyers want immediate floor plans, pricing sheets, and location maps without waiting for emails.',
        solution: 'Gated brochure downloads that provide buyers instant PDF access while delivering their verified phone number to you.'
      },
      {
        problem: 'Clients struggle to calculate monthly loan obligations and affordability.',
        solution: 'An interactive Home Loan EMI Calculator helping buyers determine affordable property choices.'
      }
    ],
    benefits: [
      { title: 'Exclusive Verified Buyer Leads', description: 'Leads generated on your website belong to you alone, not distributed to 10 competing brokers.' },
      { title: 'Highlight New Project Launches', description: 'Dedicated landing sections for newly launched residential high-rises and commercial complexes.' },
      { title: 'Interactive EMI Calculator', description: 'Built-in financial utility that keeps prospective buyers engaged on your website.' },
      { title: 'RERA Agent Credibility', description: 'Display your official RERA registration number and developer channel partner certificates.' }
    ],
    recommendedFeatures: [
      { title: 'Featured Property Listings Grid', description: 'Categorized by Residential, Commercial, Plots, Resale, and Luxury Penthouses.', iconName: 'Home' },
      { title: 'Property Filter & Search', description: 'Filter by Location, Configuration (1BHK, 2BHK, 3BHK, Villa), and Budget Range.', iconName: 'Filter' },
      { title: 'One-Click WhatsApp Listing Inquiry', description: 'Every listing includes an "Inquire on WhatsApp" button prefilling the exact property name.', iconName: 'MessageSquare' },
      { title: 'Interactive Home Loan EMI Calculator', description: 'Sliders for Loan Amount, Interest Rate, and Tenure with instant monthly EMI breakdown.', iconName: 'Calculator' },
      { title: 'Project Brochure PDF Lead Gate', description: 'Capture verified buyer phone numbers before unlocking master floor plan brochures.', iconName: 'Download' },
      { title: 'Channel Partner & RERA Badges', description: 'Reassure buyers with official RERA license numbers and developer tie-up badges.', iconName: 'ShieldCheck' }
    ],
    examplePageStructure: [
      { pageName: 'Home', purpose: 'Prime property hero search, new launches, top commercial listings, and consultant credentials' },
      { pageName: 'All Listings', purpose: 'Searchable grid with filters for buy, rent, budget, and neighborhood' },
      { pageName: 'Listing Detail View', purpose: 'Photos, carpet area sq. ft., pricing, amenities, floor plans, and WhatsApp inquiry' },
      { pageName: 'New Project Launches', purpose: 'Dedicated microsite sections for flagship developer project pre-launches' },
      { pageName: 'Home Loan EMI Calculator', purpose: 'Interactive slider calculator with amortization overview' },
      { pageName: 'About & RERA Certifications', purpose: 'Firm history, senior brokers, developer awards, and RERA disclosures' },
      { pageName: 'Contact & Office', purpose: 'Office address, meeting scheduling, phone/WhatsApp, and free valuation form' }
    ],
    featureComparison: [
      { name: 'Featured Property Listings (Up to 20 listings)', description: 'Photos, pricing, carpet area, and location', starter: true, pro: true, premium: true },
      { name: 'One-Click WhatsApp Property Inquiry', description: 'Prefilled message with property title and location', starter: true, pro: true, premium: true },
      { name: 'Broker Credentials & RERA Registration', description: 'Display of official license and affiliations', starter: true, pro: true, premium: true },
      { name: 'Interactive Home Loan EMI Calculator', description: 'Engaging loan estimator with monthly breakdown', starter: false, pro: true, premium: true },
      { name: 'Gated Project Brochure Lead Capture Gate', description: 'Captures buyer phone number before PDF download', starter: false, pro: true, premium: true },
      { name: 'Dedicated New Project Launch Microsites', description: 'High-impact landing pages for major developer pre-launches', starter: false, pro: true, premium: true },
      { name: 'Multi-Agent Team Directory & CRM Routing', description: 'Direct calling links for individual area specialists', starter: false, pro: false, premium: true }
    ],
    addOns: [
      { name: 'Interactive Home Loan EMI Calculator Suite', price: '₹2,499 one-time', description: 'Keep buyers engaged with an intuitive loan repayment calculator.' },
      { name: 'NFC Smart Card for Property Consultants', price: '₹3,000 one-time', description: 'Tap client smartphones during site visits to instantly share property specs and contact.' },
      { name: 'Free Property Valuation Request Form', price: '₹1,999 one-time', description: 'Capture seller listings by offering a free neighborhood valuation report.' }
    ],
    faqs: [
      { question: 'Can we add or remove properties as they get sold?', answer: 'Yes! Our listings structure is designed for clean updates or you can rely on our maintenance team to update sold tags.' },
      { question: 'Can we create dedicated landing pages for specific new project launches?', answer: 'Yes, our Professional and Premium tiers support dedicated project launch microsites designed specifically for ad campaigns.' },
      { question: 'Does the website comply with state RERA guidelines?', answer: 'Yes, we prominently place your mandatory RERA registration numbers and disclaimer statements.' }
    ],
    relatedIndustries: [
      { slug: 'builders-architects', name: 'Builders & Architects' },
      { slug: 'hotels-hospitality', name: 'Hotels & Hospitality' },
      { slug: 'custom-business', name: 'Custom Business Solutions' }
    ]
  },
  {
    slug: 'custom-business',
    name: 'Custom Business Solutions',
    shortTagline: 'Bespoke web architectures tailored to your specific business model and operations',
    category: 'Service',
    heroHeadline: 'When Generic Website Templates Cannot Solve Your Business Workflow',
    heroSubheadline: 'We architect, design, and engineer custom web platforms tailored to your exact operational requirements.',
    businessProblems: [
      {
        problem: 'Your business model has specialized quotation logic, client intake, or workflows that standard templates cannot accommodate.',
        solution: 'Bespoke web application development built specifically around your business rules using React and modern APIs.'
      },
      {
        problem: 'Your team wastes hours manually calculating estimates on spreadsheets and copying data to emails.',
        solution: 'A custom web calculator or client portal that automates data intake and generates instant PDF quotes.'
      },
      {
        problem: 'Off-the-shelf SaaS software charges heavy per-user monthly subscription fees that balloon as your team grows.',
        solution: 'Custom web software where you own 100% of the code with zero per-seat ongoing licensing fees.'
      }
    ],
    benefits: [
      { title: 'Tailored Exactly to Your Rules', description: 'Every interaction, form field, and calculation is built for your specific workflow.' },
      { title: 'Zero Per-User Licensing Fees', description: 'Own the software asset completely without paying recurring SaaS subscription bills.' },
      { title: 'Automate Repetitive Admin Toil', description: 'Free your team from spreadsheet management, manual follow-ups, and repetitive emails.' },
      { title: 'Scalable Modern Tech Stack', description: 'Built with React, Vite, TypeScript, and Node.js for high performance and longevity.' }
    ],
    recommendedFeatures: [
      { title: 'Bespoke Information Architecture', description: 'Engineered from initial wireframes to address your exact customer journey.', iconName: 'Layout' },
      { title: 'Interactive Quotation Calculators', description: 'Dynamic price estimation engines based on user inputs, materials, or square footage.', iconName: 'Calculator' },
      { title: 'Client Onboarding & Intake Portals', description: 'Multi-step forms capturing verified business data, documents, and specifications.', iconName: 'Layers' },
      { title: 'Custom API Integrations', description: 'Connect with your existing CRMs, WhatsApp APIs, payment gateways, or ERP databases.', iconName: 'Cpu' },
      { title: 'Role-Based Dashboards', description: 'Administrative interfaces to manage incoming requests, update data, and export leads.', iconName: 'ShieldCheck' },
      { title: 'Full Source Code Ownership', description: 'Complete repository handover with clean documentation and zero vendor lock-in.', iconName: 'Code' }
    ],
    examplePageStructure: [
      { pageName: 'Home', purpose: 'Custom value proposition, interactive product/service demo, and qualification intake' },
      { pageName: 'Solutions & Capabilities', purpose: 'Detailed breakdown of tailored business modules and customer benefits' },
      { pageName: 'Interactive Calculator / Tool', purpose: 'Core utility component solving the specific customer bottleneck' },
      { pageName: 'Case Studies & Architecture', purpose: 'Technical proof of performance, data security, and past results' },
      { pageName: 'About the Engineering Team', purpose: 'Technical credentials, quality testing methodology, and SLA commitments' },
      { pageName: 'Schedule a Scoping Call', purpose: 'Detailed project requirement intake questionnaire and meeting scheduler' }
    ],
    featureComparison: [
      { name: 'Tailored UX/UI Design System', description: 'Bespoke design aligned 100% with your brand identity', starter: true, pro: true, premium: true },
      { name: 'Custom Interactive Intake / Calculator', description: 'Solves your specific business estimation or booking need', starter: true, pro: true, premium: true },
      { name: 'Mobile-First Responsive Implementation', description: 'Optimized across all smartphone and desktop resolutions', starter: true, pro: true, premium: true },
      { name: 'Custom API Integration (WhatsApp/CRM)', description: 'Bi-directional data flow with your current business software', starter: false, pro: true, premium: true },
      { name: 'Administrative Management Dashboard', description: 'Password-protected interface to review leads and data', starter: false, pro: true, premium: true },
      { name: 'Automated Notification Workflows', description: 'Instant multi-recipient SMS, Email, and WhatsApp triggers', starter: false, pro: true, premium: true },
      { name: 'Dedicated SLA & Infrastructure Maintenance', description: 'Continuous uptime monitoring and dedicated engineering care', starter: false, pro: false, premium: true }
    ],
    addOns: [
      { name: 'Detailed Technical Scoping & Wireframe Document', price: 'Included in Quote', description: 'Comprehensive functional specification blueprint before coding commences.' },
      { name: 'Custom WhatsApp Business API Gateway Integration', price: 'Request a Quote', description: 'Automated two-way conversational bot routing for high inquiry volumes.' },
      { name: 'Legacy Spreadsheet Data Migration', price: 'Request a Quote', description: 'Clean data import from your existing Excel or Google Sheets records.' }
    ],
    faqs: [
      { question: 'How do you price custom business web solutions?', answer: 'We schedule a discovery call to understand your exact requirements, draft a functional specification document with milestone deliverables, and provide a transparent fixed-price quote.' },
      { question: 'Who owns the custom software code upon completion?', answer: 'You own 100% of the code, intellectual property, and design assets upon project handover and final payment.' },
      { question: 'What technologies do you use for custom development?', answer: 'We build with modern, industry-standard technologies: React, TypeScript, Vite, Tailwind CSS, and Node.js for backend APIs when needed.' }
    ],
    relatedIndustries: [
      { slug: 'business-websites', name: 'Business Websites' },
      { slug: 'custom-web-applications', name: 'Custom Web Applications' },
      { slug: 'booking-systems', name: 'Booking Systems' }
    ]
  }
];
