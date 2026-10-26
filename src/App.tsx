import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Navbar, NoticeSection } from './components/layout/Navbar';
import { NetworkBackground } from './components/visual/NetworkBackground';
import { HeroSection } from './components/hero/HeroSection';
import { ServicesSection } from './components/services/ServicesSection';
import { WhyChooseSection } from './components/about/WhyChooseSection';
import { FAQSection } from './components/faq/FAQSection';
import { BlogPreviewSection } from './components/blog/BlogPreviewSection';
import { ContactSection } from './components/contact/ContactSection';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPost';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/common/Footer';
import { FloatingContact } from './components/layout/FloatingContact';
import { QuoteModal } from './components/modals/QuoteModal';
import { ContactModal } from './components/modals/ContactModal';
import { NoticeModal, NoticeModalData } from './components/modals/NoticeModal';
import { ArticlePreviewModal } from './components/modals/ArticlePreviewModal';
import { ServiceItem } from './data/services';
import { BlogPost } from './data/blog';

const NOTICES_CONFIG: Record<NoticeSection, Omit<NoticeModalData, 'isOpen'>> = {
  portfolio: {
    title: 'Portfolio & Case Studies',
    badge: 'Client Showcase',
    plannedPhase: 'Phase 4',
    description:
      'Our curated portfolio showcase featuring live website previews, client case studies, and responsive design demonstrations across 12+ industries is scheduled for Phase 4.',
    upcomingFeatures: [
      'Interactive live previews of completed business websites',
      'Filterable categories (Education, Healthcare, Retail, Professional Services)',
      'Performance audit scores and speed breakdowns',
      'Direct WhatsApp demo link sharing'
    ]
  },
  brochure: {
    title: 'Agency Brochure & Service Guide',
    badge: 'Service Guide',
    plannedPhase: 'Phase 5',
    description:
      'Our complete 2026 digital agency service brochure is being updated to reflect all website development solutions and custom packages.',
    upcomingFeatures: [
      'Full feature comparison matrices by business category',
      'Transparent estimates with no surprise maintenance fees',
      'One-click PDF download & WhatsApp sharing',
      'Custom scope estimator for specialized web applications'
    ]
  }
};

export const App: React.FC = () => {
  const navigate = useNavigate();
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [quoteService, setQuoteService] = useState<string | undefined>(undefined);
  const [quoteRequirement, setQuoteRequirement] = useState<string | undefined>(undefined);

  // Article preview modal state
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);

  // Phase notices modal state (Portfolio, Brochure)
  const [noticeData, setNoticeData] = useState<NoticeModalData>({
    isOpen: false,
    title: '',
    badge: '',
    plannedPhase: '',
    description: '',
    upcomingFeatures: []
  });

  const handleOpenNotice = (section: NoticeSection) => {
    const config = NOTICES_CONFIG[section];
    if (config) {
      setNoticeData({
        isOpen: true,
        ...config
      });
    }
  };

  const handleCloseNotice = () => {
    setNoticeData((prev) => ({ ...prev, isOpen: false }));
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#contact');
    } else {
      navigate('/#contact');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleOpenGeneralQuote = () => {
    handleScrollToContact();
  };

  const handleOpenQuoteWithService = (serviceName: string, requirement?: string) => {
    setQuoteService(serviceName);
    setQuoteRequirement(requirement || `Requesting a formal quotation and scope proposal for ${serviceName}.`);
    setIsQuoteOpen(true);
  };

  const handleSelectService = (service: ServiceItem, isDemoRequest?: boolean) => {
    setQuoteService(service.title);
    if (isDemoRequest) {
      setQuoteRequirement(
        `Requesting a live demonstration walkthrough and sample previews for ${service.title} (${service.priceBadge}).`
      );
    } else {
      setQuoteRequirement(
        `Requesting an itemized proposal and milestone estimate for ${service.title} (${service.priceBadge}).`
      );
    }
    setIsQuoteOpen(true);
  };

  const handleSelectArticle = (article: BlogPost) => {
    setSelectedArticle(article);
    setIsArticleModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-navy-900 text-slate-100 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Subtle Network Particle Canvas Background */}
      <NetworkBackground />

      {/* Top Navigation Bar */}
      <Navbar
        onOpenQuote={handleOpenGeneralQuote}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenNotice={handleOpenNotice}
      />

      {/* Main Routed Content Layout */}
      <main className="relative z-10 flex flex-col justify-center">
        <Routes>
          {/* Homepage Route with Strict Architecture */}
          <Route
            path="/"
            element={
              <>
                {/* 1. Hero Section */}
                <HeroSection onQuoteClick={handleScrollToContact} />

                {/* 2. Services — All 12 Industry-Specific Service Cards */}
                <ServicesSection onSelectService={handleSelectService} />

                {/* 3. Why Choose BizTap? Section (6 Feature Cards) */}
                <WhyChooseSection />

                {/* 4. FAQ Section (8 Questions) */}
                <FAQSection onScrollToContact={handleScrollToContact} />

                {/* 5. Blog Preview Section (3 Featured Articles) */}
                <BlogPreviewSection onSelectArticle={handleSelectArticle} />

                {/* 6. Contact Form Section (WhatsApp + Email) */}
                <ContactSection />
              </>
            }
          />

          {/* Dedicated Blog Page Route */}
          <Route
            path="/blog"
            element={<BlogPage onSelectArticle={handleSelectArticle} />}
          />

          {/* Individual Blog Article Routes */}
          <Route
            path="/blog/how-to-get-more-clients-using-website"
            element={
              <BlogPostPage
                onOpenQuote={handleOpenGeneralQuote}
                onOpenContact={() => setIsContactOpen(true)}
                onOpenQuoteWithService={handleOpenQuoteWithService}
              />
            }
          />
          <Route
            path="/blog/why-small-businesses-need-a-website"
            element={
              <BlogPostPage
                onOpenQuote={handleOpenGeneralQuote}
                onOpenContact={() => setIsContactOpen(true)}
                onOpenQuoteWithService={handleOpenQuoteWithService}
              />
            }
          />
          <Route
            path="/blog/why-every-small-business-in-india-needs-a-website-in-2026"
            element={
              <BlogPostPage
                onOpenQuote={handleOpenGeneralQuote}
                onOpenContact={() => setIsContactOpen(true)}
                onOpenQuoteWithService={handleOpenQuoteWithService}
              />
            }
          />
          <Route
            path="/blog/how-to-get-more-clients-using-a-website"
            element={
              <BlogPostPage
                onOpenQuote={handleOpenGeneralQuote}
                onOpenContact={() => setIsContactOpen(true)}
                onOpenQuoteWithService={handleOpenQuoteWithService}
              />
            }
          />
          <Route
            path="/blog/how-to-get-more-clients-for-your-business-using-a-website"
            element={
              <BlogPostPage
                onOpenQuote={handleOpenGeneralQuote}
                onOpenContact={() => setIsContactOpen(true)}
                onOpenQuoteWithService={handleOpenQuoteWithService}
              />
            }
          />
          <Route
            path="/blog/website-cost-in-india"
            element={
              <BlogPostPage
                onOpenQuote={handleOpenGeneralQuote}
                onOpenContact={() => setIsContactOpen(true)}
                onOpenQuoteWithService={handleOpenQuoteWithService}
              />
            }
          />
          <Route
            path="/blog/how-much-does-a-website-cost-in-india-2026"
            element={
              <BlogPostPage
                onOpenQuote={handleOpenGeneralQuote}
                onOpenContact={() => setIsContactOpen(true)}
                onOpenQuoteWithService={handleOpenQuoteWithService}
              />
            }
          />
          <Route
            path="/blog/free-vs-paid-website-hosting"
            element={
              <BlogPostPage
                onOpenQuote={handleOpenGeneralQuote}
                onOpenContact={() => setIsContactOpen(true)}
                onOpenQuoteWithService={handleOpenQuoteWithService}
              />
            }
          />
          <Route
            path="/blog/free-vs-paid-website-hosting-guide"
            element={
              <BlogPostPage
                onOpenQuote={handleOpenGeneralQuote}
                onOpenContact={() => setIsContactOpen(true)}
                onOpenQuoteWithService={handleOpenQuoteWithService}
              />
            }
          />
          <Route
            path="/blog/signs-your-website-is-losing-clients"
            element={
              <BlogPostPage
                onOpenQuote={handleOpenGeneralQuote}
                onOpenContact={() => setIsContactOpen(true)}
                onOpenQuoteWithService={handleOpenQuoteWithService}
              />
            }
          />
          <Route
            path="/blog/5-signs-your-business-website-is-losing-you-clients"
            element={
              <BlogPostPage
                onOpenQuote={handleOpenGeneralQuote}
                onOpenContact={() => setIsContactOpen(true)}
                onOpenQuoteWithService={handleOpenQuoteWithService}
              />
            }
          />
          <Route
            path="/blog/school-website-features"
            element={
              <BlogPostPage
                onOpenQuote={handleOpenGeneralQuote}
                onOpenContact={() => setIsContactOpen(true)}
                onOpenQuoteWithService={handleOpenQuoteWithService}
              />
            }
          />
          <Route
            path="/blog/school-websites-10-features-every-school-needs"
            element={
              <BlogPostPage
                onOpenQuote={handleOpenGeneralQuote}
                onOpenContact={() => setIsContactOpen(true)}
                onOpenQuoteWithService={handleOpenQuoteWithService}
              />
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <BlogPostPage
                onOpenQuote={handleOpenGeneralQuote}
                onOpenContact={() => setIsContactOpen(true)}
                onOpenQuoteWithService={handleOpenQuoteWithService}
              />
            }
          />

          {/* Services shortcut route */}
          <Route path="/services" element={<Navigate to="/#services" replace />} />

          {/* Dedicated FAQ Route */}
          <Route
            path="/faq"
            element={
              <div className="pt-24 sm:pt-32 pb-16 min-h-screen">
                <FAQSection onScrollToContact={handleScrollToContact} />
              </div>
            }
          />

          {/* Dedicated Contact Route */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Shared Site Footer */}
      <Footer />

      {/* Floating Bottom-Right Actions */}
      <FloatingContact onOpenContact={() => setIsContactOpen(true)} />

      {/* Modals & Dialogs */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialService={quoteService}
        initialRequirement={quoteRequirement}
      />

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      <NoticeModal
        data={noticeData}
        onClose={handleCloseNotice}
        onOpenQuote={handleOpenGeneralQuote}
      />

      <ArticlePreviewModal
        article={selectedArticle}
        isOpen={isArticleModalOpen}
        onClose={() => setIsArticleModalOpen(false)}
        onOpenQuote={handleOpenGeneralQuote}
      />
    </div>
  );
};

export default App;
