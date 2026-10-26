import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShieldCheck, FileText, RefreshCw, Mail, Phone } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { COMPANY } from '../data/company';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'refund';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const content = {
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'January 2025',
      breadcrumb: 'Privacy Policy',
      description: 'How BizTap collects, uses, and protects your business and personal contact information.',
      sections: [
        {
          heading: '1. Information We Collect',
          paragraphs: [
            'When you contact BizTap through our website, WhatsApp, phone, or quotation forms, we collect basic business contact information including your full name, business or clinic name, phone number, email address, and project requirements.',
            'We do not collect sensitive banking credentials, passwords, or unauthorized personal data through our website.'
          ]
        },
        {
          heading: '2. How We Use Your Information',
          paragraphs: [
            'We use your submitted contact information strictly to communicate regarding your website project, send itemized proposals, coordinate design revisions, and deliver physical NFC Smart Review Cards via courier.',
            'BizTap adheres to a strict policy: We NEVER sell, rent, trade, or share your contact details with third-party telemarketers, lead brokers, or advertising networks.'
          ]
        },
        {
          heading: '3. WhatsApp & Direct Communications',
          paragraphs: [
            'By submitting an inquiry with your phone number, you consent to receive direct project communications and quotation details from our team via WhatsApp or telephone.',
            'You may request us to cease communications at any time simply by replying "STOP" or notifying us via email at sanskar.p.work@gmail.com.'
          ]
        },
        {
          heading: '4. Physical NFC Card Data & Encoding',
          paragraphs: [
            'BizTap NFC Smart Review Cards are pre-programmed solely with your publicly available, verified Google Place ID review link or digital business profile URL.',
            'The cards do not store confidential customer payment data or personal tracking software.'
          ]
        },
        {
          heading: '5. Data Security & Storage',
          paragraphs: [
            'We implement standard technical safeguards to protect information submitted via our forms. Inquiries are transmitted via secure HTTPS encryption.'
          ]
        },
        {
          heading: '6. Contact for Privacy Inquiries',
          paragraphs: [
            `If you have questions regarding your data, you may contact BizTap directly via email at ${COMPANY.email} or by phone at ${COMPANY.phone}.`
          ]
        }
      ]
    },
    terms: {
      title: 'Terms & Conditions',
      lastUpdated: 'January 2025',
      breadcrumb: 'Terms & Conditions',
      description: 'The standard terms governing website design, development, and NFC card delivery with BizTap.',
      sections: [
        {
          heading: '1. Engagement & Project Scope',
          paragraphs: [
            'All projects are governed by an itemized written scope proposal outlining agreed deliverables, estimated timelines, page structures, and revision allowances.',
            'Any feature requests or third-party integrations outside the agreed scope document will be scoped separately with transparent pricing.'
          ]
        },
        {
          heading: '2. Payment Terms & Milestones',
          paragraphs: [
            'Standard website projects require a 50% non-refundable advance booking deposit before design and development commence.',
            'The remaining 50% milestone balance is payable upon your review and approval of the staging site, prior to live domain deployment and asset handover.',
            'Physical NFC Smart Review Cards and Smart Profile packages are billed 100% upfront prior to custom printing, encoding, and courier dispatch.'
          ]
        },
        {
          heading: '3. Client Content & Verification',
          paragraphs: [
            'Clients are responsible for providing factual, accurate text, logos, rate cards, and credentials. You affirm that you hold legal rights to all trademarks, images, and copy provided to BizTap.',
            'Healthcare practitioners, advocates, and Chartered Accountants are solely responsible for ensuring their advertised services comply with their respective regulatory council guidelines.'
          ]
        },
        {
          heading: '4. Code & Asset Ownership',
          paragraphs: [
            'Upon full settlement of all milestone invoices, 100% ownership of the custom website code and creative assets transfers to the client.',
            'Third-party domain registrations, registrar renewals, and cloud hosting accounts remain the asset and responsibility of the client.'
          ]
        },
        {
          heading: '5. Limitation of Liability',
          paragraphs: [
            'BizTap does not guarantee specific Google search rankings, third-party sales conversions, or customer review volumes. While we implement white-hat SEO and frictionless NFC tap technology, business outcomes depend on your own service quality and local market competition.'
          ]
        }
      ]
    },
    refund: {
      title: 'Refund & Cancellation Policy',
      lastUpdated: 'January 2025',
      breadcrumb: 'Refund Policy',
      description: 'Our transparent policies regarding project cancellations, milestone deposits, and physical NFC hardware.',
      sections: [
        {
          heading: '1. Advance Project Deposits',
          paragraphs: [
            'Because digital web development involves immediate allocation of engineering hours, custom wireframing, and domain staging setup, the initial 50% project deposit is non-refundable once development has commenced.',
            'If a project is cancelled by the client in writing within 24 hours of deposit payment and before any design or architectural work has started, a 100% refund will be issued minus standard bank payment gateway processing fees.'
          ]
        },
        {
          heading: '2. Physical NFC Smart Cards',
          paragraphs: [
            'Because NFC cards are custom laser-printed with your business logo and permanently encoded with your verified Google Review URL, printed cards cannot be returned or refunded once shipped.',
            'However, if your card arrives physically damaged in transit or suffers from an internal chip hardware defect, BizTap will replace and re-ship a brand new card completely free of charge upon verification of photos/video of the issue within 7 days of delivery.'
          ]
        },
        {
          heading: '3. Monthly Maintenance Subscriptions',
          paragraphs: [
            'Our optional Monthly Maintenance & Security plans (₹999/month) operate month-to-month with no long-term lock-in contracts. You may cancel your maintenance subscription at any time prior to the next billing cycle by emailing or messaging us.'
          ]
        },
        {
          heading: '4. Refund Request Process',
          paragraphs: [
            `To submit a refund or replacement inquiry, email ${COMPANY.email} with your project invoice number and details. We review and respond to all requests within 3 business days.`
          ]
        }
      ]
    }
  }[type];

  return (
    <>
      <SEO
        title={`${content.title} | BizTap`}
        description={content.description}
      />

      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-cream-200 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: content.breadcrumb }]} />
        </div>
      </div>

      {/* Main Document Body */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Header */}
          <div className="border-b border-cream-200 pb-8 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
              Legal & Compliance
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-charcoal-950 tracking-tight">
              {content.title}
            </h1>
            <p className="text-xs text-charcoal-500">
              Last Updated: {content.lastUpdated} • {COMPANY.legalName}
            </p>
            <p className="text-sm text-charcoal-600 leading-relaxed pt-2">
              {content.description}
            </p>
          </div>

          {/* Quick tab switcher between legal pages */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-cream-100 text-xs">
            <Link
              to="/privacy-policy"
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                type === 'privacy'
                  ? 'bg-forest-900 text-white'
                  : 'text-charcoal-600 hover:bg-cream-100'
              }`}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                type === 'terms'
                  ? 'bg-forest-900 text-white'
                  : 'text-charcoal-600 hover:bg-cream-100'
              }`}
            >
              Terms & Conditions
            </Link>
            <Link
              to="/refund-policy"
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                type === 'refund'
                  ? 'bg-forest-900 text-white'
                  : 'text-charcoal-600 hover:bg-cream-100'
              }`}
            >
              Refund Policy
            </Link>
          </div>

          {/* Sections */}
          <div className="space-y-8 text-sm text-charcoal-800 leading-relaxed pt-4">
            {content.sections.map((sec, idx) => (
              <div key={idx} className="space-y-2.5">
                <h2 className="text-lg font-bold text-charcoal-900 tracking-tight">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Contact Box */}
          <div className="mt-12 bg-cream-50 p-6 rounded-2xl border border-cream-200 text-xs text-charcoal-600 space-y-2">
            <h3 className="font-bold text-forest-950 text-sm">Need Clarification?</h3>
            <p>
              If you have any questions regarding our terms, privacy practices, or hardware replacement guarantees, please contact our support team at <a href={`mailto:${COMPANY.email}`} className="font-bold text-forest-900 underline">{COMPANY.email}</a> or via WhatsApp at <a href={`tel:${COMPANY.phone}`} className="font-bold text-forest-900 underline">{COMPANY.phone}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
