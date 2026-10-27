export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Pricing & Packages',
    question: 'How much does a website cost?',
    answer:
      'Our pricing depends on your industry and the features you need. Starter plans begin at ₹39,999 for schools and ₹24,999 for shops. Salons start at ₹24,999. Each plan includes free hosting for the first 3 months. Tell us your requirements in our contact form for an itemized estimate.'
  },
  {
    id: 'faq-2',
    category: 'Process & Timelines',
    question: 'How long does it take to build a website?',
    answer:
      'Starter/Basic plans are delivered in 3–7 business days. Professional/Standard plans take 7–15 days. Premium plans take 10–20 days. The timeline starts once the advance payment is received and the required content is provided.'
  },
  {
    id: 'faq-3',
    category: 'Hosting & Infrastructure',
    question: 'Is there really no monthly hosting fee?',
    answer:
      'Hosting is completely free for the first 3 months. After the first 3 months, hosting costs ₹599–₹2,999 per month: Basic at ₹599/month, Professional at ₹1,699/month, and Premium at ₹2,999/month. We use Vercel and Firebase free tiers where appropriate. Actual hosting costs depend on the selected setup, usage, and service-provider limits.'
  },
  {
    id: 'faq-4',
    category: 'Payments & Security',
    question: 'How do I pay? Is it safe?',
    answer:
      'We collect 50% advance payment before starting work and the remaining 50% on delivery. We accept UPI, bank transfer, and other agreed payment methods. The website goes live after the final payment is received.'
  },
  {
    id: 'faq-5',
    category: 'Management & Updates',
    question: "Can I update the website myself after it's built?",
    answer:
      'Yes! Where an admin panel or content-management feature is included in your selected package, you can use it to update supported content such as services, photos, descriptions, and prices. If you prefer, BizTap also offers a maintenance service for ongoing website updates.'
  },
  {
    id: 'faq-6',
    category: 'Content & Materials',
    question: 'Do I need to provide content (text, images)?',
    answer:
      "You'll need to provide your business name, services, prices, photos, and any specific information you want on your website. BizTap can help with basic copywriting where agreed. Professional photographs of your business can help make your website more authentic and engaging."
  },
  {
    id: 'faq-7',
    category: 'Domain & Identity',
    question: 'Can I use my own domain name (like mybusiness.in)?',
    answer:
      "Absolutely. BizTap can help connect your custom domain to your website. If you don't have a domain yet, we can help you choose and purchase one. Domain registration and renewal charges depend on the domain extension and provider."
  },
  {
    id: 'faq-8',
    category: 'Revisions & Quality',
    question: "What if I'm not happy with the design?",
    answer:
      "We share a website preview for your review before launch and include revisions according to the agreed project scope. If you need adjustments, we'll discuss them with you. Significant changes beyond the original scope may require a separate estimate."
  }
];
