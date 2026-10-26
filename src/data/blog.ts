export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: 'blue' | 'emerald' | 'purple' | 'amber';
  excerpt: string;
  status: 'published' | 'draft' | 'preview';
  author: {
    name: string;
    role: string;
  };
  coverImageAlt?: string;
  thumbnailUrl?: string;
  tableOfContents: { id: string; title: string }[];
  contentSections: {
    heading: string;
    paragraphs: string[];
    callout?: string;
    keyPoints?: string[];
  }[];
  relatedSlugs: string[];
}

export const RAW_BLOG_POSTS: Omit<BlogPost, 'tableOfContents' | 'relatedSlugs'>[] = [
  {
    id: 'why-every-small-business-needs-website-2026',
    slug: 'why-small-businesses-need-a-website',
    title: 'Why Every Small Business in India Needs a Website in 2026',
    date: '1 March 2026',
    readTime: '5 min read',
    category: 'Business Tips',
    categoryColor: 'blue',
    status: 'published',
    excerpt:
      "Over 700 million Indians are online. If your business doesn't have a website, you're invisible to high-intent local customers searching on Google every day.",
    author: {
      name: 'BizTap Strategy Team',
      role: 'Website Development Advisory'
    },
    coverImageAlt: 'Indian small business owner reviewing online customer inquiries',
    contentSections: [
      {
        heading: 'Why Social Media Profiles Are Not Enough',
        paragraphs: [
          'Many business owners believe an Instagram page or Facebook profile is sufficient for their digital presence. While social media is valuable for awareness, your competitors’ ads appear right next to your content, and prospective clients looking for serious services expect a formal website to verify your legitimacy.',
          'An owned website is digital real estate you control completely, without the risk of algorithm shifts cutting your organic reach.'
        ]
      }
    ]
  },
  {
    id: 'how-to-get-more-clients-using-website',
    slug: 'how-to-get-more-clients-using-a-website',
    title: 'How to Get More Clients for Your Business Using a Website',
    date: '20 February 2026',
    readTime: '6 min read',
    category: 'Business Tips',
    categoryColor: 'blue',
    status: 'published',
    excerpt:
      "A website alone won't bring you clients — it needs to be designed to convert visitors into enquiries. Here are the 7 elements that turn a website into a client-generating machine.",
    author: {
      name: 'BizTap Strategy Team',
      role: 'Conversion Optimization Advisory'
    },
    coverImageAlt: 'High converting website layout for service professionals',
    contentSections: [
      {
        heading: 'Focus on Frictionless Inquiries',
        paragraphs: [
          'Most website visitors in India browse via smartphone. If they have to hunt for your phone number or fill out a 15-field contact form, they will leave for a competitor.',
          'Strategically placed WhatsApp triggers, instant click-to-call buttons, and transparent service offerings dramatically increase visitor conversion rates.'
        ]
      }
    ]
  },
  {
    id: 'how-much-does-website-cost-in-india-2026',
    slug: 'website-cost-in-india',
    title: 'How Much Does a Website Cost in India? (2026 Honest Breakdown)',
    date: '10 February 2026',
    readTime: '7 min read',
    category: 'Pricing & Value',
    categoryColor: 'emerald',
    status: 'published',
    excerpt:
      "Website pricing in India ranges from ₹5,000 to ₹5,00,000 — and the difference isn't always about quality. Learn what goes into genuine web development costs.",
    author: {
      name: 'BizTap Strategy Team',
      role: 'Agency Operations'
    },
    coverImageAlt: 'Honest cost breakdown for website development in India',
    contentSections: [
      {
        heading: 'The Hidden Traps of Proprietary Builders',
        paragraphs: [
          'Low upfront costs often disguise steep annual renewal fees, proprietary CMS lock-in, and costly add-on charges for basic features like contact forms or SSL.',
          'Choosing an agency that provides clean code, full asset ownership, and transparent upfront deliverables ensures you stay in control of your digital investments.'
        ]
      }
    ]
  },
  {
    id: 'free-vs-paid-hosting-guide',
    slug: 'free-vs-paid-website-hosting',
    title: 'Free vs Paid Website Hosting: What Indian Business Owners Need to Know',
    date: '28 January 2026',
    readTime: '5 min read',
    category: 'Technical Guide',
    categoryColor: 'purple',
    status: 'published',
    excerpt:
      "You've heard about free hosting. Is it worth it? And what happens when you actually need support? Here's what Indian business owners should know about website hosting.",
    author: {
      name: 'BizTap Strategy Team',
      role: 'Infrastructure Advisory'
    },
    coverImageAlt: 'Server hosting architecture and cloud deployment',
    contentSections: [
      {
        heading: 'What Free Hosting Actually Means',
        paragraphs: [
          'Some hosting platforms provide free tiers that are suitable for certain websites. These can be useful for portfolios, landing pages, and small business websites with modest requirements.',
          'However, free hosting does not mean every feature is free or unlimited. Usage limits, deployment options, backend requirements, storage, bandwidth, and support vary by provider and plan.'
        ]
      }
    ]
  },
  {
    id: '5-signs-website-losing-clients',
    slug: 'signs-your-website-is-losing-clients',
    title: '5 Signs Your Business Website Is Losing You Clients',
    date: '15 January 2026',
    readTime: '4 min read',
    category: 'Business Tips',
    categoryColor: 'blue',
    status: 'published',
    excerpt:
      'A bad website is worse than no website. If your site does any of these five things, you could be pushing potential customers away without even realizing it.',
    author: {
      name: 'BizTap Strategy Team',
      role: 'UX & Design Review'
    },
    coverImageAlt: 'Mobile optimization review for local businesses',
    contentSections: [
      {
        heading: 'It Looks Broken on Mobile',
        paragraphs: [
          "If your website isn't mobile-friendly, you could be losing potential customers. Check your own website on your phone. Does text overflow the screen? Do images fail to load properly? Do buttons overlap? If yes, your website needs attention.",
          'A mobile-friendly website helps visitors browse your services, read information, and contact your business comfortably from their phones.'
        ]
      }
    ]
  },
  {
    id: 'school-websites-10-features',
    slug: 'school-website-features',
    title: 'School Websites: 10 Features Every School Should Have Online',
    date: '5 January 2026',
    readTime: '6 min read',
    category: 'Industry Guide',
    categoryColor: 'amber',
    status: 'published',
    excerpt:
      'Parents often research schools online before enquiring about admissions. An informative, accessible school website helps parents discover important information and understand what your school offers.',
    author: {
      name: 'BizTap Strategy Team',
      role: 'Educational Web Solutions'
    },
    coverImageAlt: 'Modern school web portal and admissions management',
    contentSections: [
      {
        heading: 'Online Admission Enquiry Form',
        paragraphs: [
          'Parents should be able to submit admission enquiries at any time, not just during office hours.',
          "A simple form can capture the student's name, intended class, parent or guardian contact details, and enquiry message."
        ]
      }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = RAW_BLOG_POSTS.map((post) => ({
  ...post,
  tableOfContents: post.contentSections.map((sec, idx) => ({
    id: `section-${idx}`,
    title: sec.heading
  })),
  contentSections: post.contentSections,
  relatedSlugs: []
}));

export const HOMEPAGE_BLOG_POSTS = BLOG_POSTS.slice(0, 3);
