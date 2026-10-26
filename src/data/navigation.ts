export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  children?: NavItem[];
}

export const MAIN_NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Website Design & Dev', href: '/services/website-development', description: 'Fast, conversion-focused websites' },
      { label: 'Business Websites', href: '/services/business-websites', description: 'Corporate & authority web portals' },
      { label: 'E-Commerce Websites', href: '/services/ecommerce-websites', description: 'Direct sales with UPI checkout' },
      { label: 'Landing Pages', href: '/services/landing-pages', description: 'High-converting campaign pages' },
      { label: 'Website Redesign', href: '/services/website-redesign', description: 'Modernize dated websites safely' },
      { label: 'NFC Smart Review Cards', href: '/services/nfc-smart-review-cards', badge: 'Hardware', description: 'Tap-to-review Google cards' },
      { label: 'Digital Business Profiles', href: '/services/digital-business-profiles', description: 'Interactive mobile business cards' },
      { label: 'QR Code Solutions', href: '/services/qr-code-solutions', description: 'Branded print-ready dynamic QR' },
      { label: 'WhatsApp Integration', href: '/services/whatsapp-integration', description: 'One-tap lead conversation triggers' },
      { label: 'Booking & Enquiry Systems', href: '/services/booking-systems', description: 'Automated appointment scheduling' },
      { label: 'Local SEO Visibility', href: '/services/seo', description: 'Google Search Console & schema' },
      { label: 'Website Maintenance', href: '/services/website-maintenance', description: 'Backups, security & content updates' },
      { label: 'Custom Web Applications', href: '/services/custom-web-applications', description: 'Bespoke calculators and portals' },
    ]
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Schools & Institutes', href: '/industries/schools', description: 'Admissions & campus showcase' },
      { label: 'Clinics & Healthcare', href: '/industries/clinics', description: 'Doctor bios & appointment slots' },
      { label: 'Shops & Retail', href: '/industries/shops-retail', description: 'Digital catalog & WhatsApp orders' },
      { label: 'Photography Studios', href: '/industries/photography', description: 'Retina-grade visual portfolios' },
      { label: 'Restaurants & Cafés', href: '/industries/restaurants-cafes', description: 'Digital menus & table booking' },
      { label: 'Gyms & Fitness', href: '/industries/gyms-fitness', description: 'Trial passes & membership plans' },
      { label: 'Salons & Unisex Parlours', href: '/industries/salons', description: 'Stylist menus & chair booking' },
      { label: 'Beauty Parlours', href: '/industries/beauty-parlours', description: 'Bridal packages & transformations' },
      { label: 'Personal Portfolios', href: '/industries/portfolios', description: 'Freelancer & executive resumes' },
      { label: 'Builders & Architects', href: '/industries/builders-architects', description: 'Structural portfolios & RERA' },
      { label: 'CA & Tax Consultants', href: '/industries/ca-tax-consultants', description: 'ICAI-compliant corporate advisory' },
      { label: 'Lawyers & Legal Services', href: '/industries/lawyers-legal', description: 'BCI-compliant chamber profiles' },
      { label: 'Hotels & Hospitality', href: '/industries/hotels-hospitality', description: 'Direct bookings & banquet leads' },
      { label: 'Real Estate & Properties', href: '/industries/real-estate', description: 'Verified listings & EMI calculator' },
      { label: 'Custom Business Solutions', href: '/industries/custom-business', description: 'Tailored software for unique models' },
    ]
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Our Work', href: '/portfolio' },
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' }
];

export const FOOTER_LINKS = {
  company: [
    { label: 'About BizTap', href: '/about' },
    { label: 'Our Work & Demos', href: '/portfolio' },
    { label: 'How Our Process Works', href: '/how-it-works' },
    { label: 'Transparent Pricing', href: '/pricing' },
    { label: 'Frequently Asked Questions', href: '/faq' },
    { label: 'Educational Blog', href: '/blog' },
    { label: 'Get a Free Quote', href: '/get-a-quote' },
    { label: 'Contact & Support', href: '/contact' },
  ],
  services: [
    { label: 'Website Design & Development', href: '/services/website-development' },
    { label: 'NFC Smart Review Cards', href: '/services/nfc-smart-review-cards' },
    { label: 'Digital Business Profiles', href: '/services/digital-business-profiles' },
    { label: 'E-Commerce Storefronts', href: '/services/ecommerce-websites' },
    { label: 'Website Redesign', href: '/services/website-redesign' },
    { label: 'WhatsApp Chat Integration', href: '/services/whatsapp-integration' },
    { label: 'Local SEO Visibility', href: '/services/seo' },
    { label: 'Website Maintenance Care', href: '/services/website-maintenance' },
  ],
  topIndustries: [
    { label: 'Clinics & Doctors', href: '/industries/clinics' },
    { label: 'Restaurants & Cafés', href: '/industries/restaurants-cafes' },
    { label: 'Schools & Institutes', href: '/industries/schools' },
    { label: 'Salons & Parlours', href: '/industries/salons' },
    { label: 'Gyms & Fitness Centers', href: '/industries/gyms-fitness' },
    { label: 'Builders & Architects', href: '/industries/builders-architects' },
    { label: 'CA & Tax Consultants', href: '/industries/ca-tax-consultants' },
    { label: 'All Industries Directory', href: '/industries' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    { label: 'Refund & Cancellation Policy', href: '/refund-policy' },
  ]
};
