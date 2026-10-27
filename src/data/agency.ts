export interface OfficeContact {
  city: 'Mumbai' | 'Chennai';
  phone: string;
  phoneRaw: string;
  telUrl: string;
  whatsappNumber: string;
  whatsappUrl: string;
}

export const AGENCY_OFFICES: Record<'mumbai' | 'chennai', OfficeContact> = {
  mumbai: {
    city: 'Mumbai',
    phone: '+91 89280 51768',
    phoneRaw: '+918928051768',
    telUrl: 'tel:+918928051768',
    whatsappNumber: '918928051768',
    whatsappUrl: 'https://wa.me/918928051768'
  },
  chennai: {
    city: 'Chennai',
    phone: '+91 93729 48245',
    phoneRaw: '+919372948245',
    telUrl: 'tel:+919372948245',
    whatsappNumber: '919372948245',
    whatsappUrl: 'https://wa.me/919372948245'
  }
};

export const AGENCY = {
  name: 'BizTap',
  tagline: 'Digital Solutions for Every Business',
  phone: '+91 89280 51768',
  phoneChennai: '+91 93729 48245',
  whatsappNumber: '918928051768',
  whatsappUrl: 'https://wa.me/918928051768',
  email: 'sanskar.p.work@gmail.com',
  offices: [
    AGENCY_OFFICES.mumbai,
    AGENCY_OFFICES.chennai
  ],
  mumbai: AGENCY_OFFICES.mumbai,
  chennai: AGENCY_OFFICES.chennai,
  statusText: 'Available for new projects',
  heroSubtitle: 'Modern, affordable websites for schools, clinics, shops & professionals — designed to grow your business and connect you with your customers.',
  stats: [
    { value: '14', label: 'Industry Packages' },
    { value: 'Fast', label: 'Delivery' },
    { value: '24/7', label: 'Support' }
  ],
  navItems: [
    { label: 'Services', href: '#services' },
    { label: 'Why Choose BizTap?', href: '#why-choose' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ]
};
