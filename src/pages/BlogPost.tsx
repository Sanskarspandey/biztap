import React, { useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { Clock, Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blog';

interface BlogPostPageProps {
  onOpenQuote?: () => void;
  onOpenContact?: () => void;
  onOpenQuoteWithService?: (serviceName: string, requirement?: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  onOpenQuote,
  onOpenContact,
  onOpenQuoteWithService
}) => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  // Extract slug from URL param or current pathname
  const currentSlug =
    slug ||
    location.pathname.replace(/^\/blog\/?/, '').replace(/\/$/, '') ||
    'why-small-businesses-need-a-website';

  // Identify current post
  const isSchoolWebsitesArticle =
    currentSlug === 'school-website-features' ||
    currentSlug === 'school-websites-10-features-every-school-needs' ||
    currentSlug === 'school-websites-10-features';

  const isFiveSignsArticle =
    !isSchoolWebsitesArticle &&
    (currentSlug === 'signs-your-website-is-losing-clients' ||
      currentSlug === '5-signs-your-business-website-is-losing-you-clients' ||
      currentSlug === '5-signs-website-losing-clients');

  const isHostingArticle =
    !isSchoolWebsitesArticle &&
    !isFiveSignsArticle &&
    (currentSlug === 'free-vs-paid-website-hosting' ||
      currentSlug === 'free-vs-paid-website-hosting-guide' ||
      currentSlug === 'free-vs-paid-hosting-guide');

  const isThirdArticle =
    !isSchoolWebsitesArticle &&
    !isFiveSignsArticle &&
    !isHostingArticle &&
    (currentSlug === 'website-cost-in-india' ||
      currentSlug === 'how-much-does-a-website-cost-in-india-2026' ||
      currentSlug === 'how-much-does-website-cost-in-india-2026');

  const isSecondArticle =
    !isSchoolWebsitesArticle &&
    !isFiveSignsArticle &&
    !isHostingArticle &&
    !isThirdArticle &&
    (currentSlug === 'how-to-get-more-clients-using-a-website' ||
      currentSlug === 'how-to-get-more-clients-for-your-business-using-a-website' ||
      currentSlug === 'how-to-get-more-clients-using-website');

  const isFirstArticle =
    !isSchoolWebsitesArticle &&
    !isFiveSignsArticle &&
    !isHostingArticle &&
    !isThirdArticle &&
    !isSecondArticle &&
    (currentSlug === 'why-small-businesses-need-a-website' ||
      currentSlug === 'why-every-small-business-in-india-needs-a-website-in-2026' ||
      currentSlug === 'why-every-small-business-needs-website-2026' ||
      !slug);

  const post: BlogPost =
    BLOG_POSTS.find(
      (p) =>
        p.slug === currentSlug ||
        (isSchoolWebsitesArticle && (p.id === 'school-websites-10-features' || p.slug === 'school-website-features')) ||
        (isFiveSignsArticle && (p.id === '5-signs-website-losing-clients' || p.slug === 'signs-your-website-is-losing-clients')) ||
        (isHostingArticle && (p.id === 'free-vs-paid-hosting-guide' || p.slug === 'free-vs-paid-website-hosting')) ||
        (isThirdArticle && p.id === 'how-much-does-website-cost-in-india-2026') ||
        (isSecondArticle && p.id === 'how-to-get-more-clients-using-website') ||
        (isFirstArticle && p.id === 'why-every-small-business-needs-website-2026')
    ) ||
    (isSchoolWebsitesArticle
      ? BLOG_POSTS[5]
      : isFiveSignsArticle
      ? BLOG_POSTS[4]
      : isHostingArticle
      ? BLOG_POSTS[3]
      : isThirdArticle
      ? BLOG_POSTS[2]
      : isSecondArticle
      ? BLOG_POSTS[1]
      : BLOG_POSTS[0]);

  // Dynamic SEO Page Title and Meta Description
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const prevTitle = document.title;
    document.title = `${post.title} | BizTap`;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : null;
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        post.excerpt ||
          "Professional website development insights and practical advice for growing small businesses in India."
      );
    }

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) {
        metaDesc.setAttribute('content', prevDesc);
      }
    };
  }, [post]);

  const handleConsultationClick = () => {
    navigate('/#contact');
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleExploreServicesClick = () => {
    navigate('/#services');
    setTimeout(() => {
      const el = document.getElementById('services');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSchoolQuoteClick = () => {
    if (onOpenQuoteWithService) {
      onOpenQuoteWithService(
        'School Websites',
        'Requesting a school website development quote (starting at ₹39,999).'
      );
    } else {
      handleConsultationClick();
    }
  };

  // Define related articles depending on current post
  const relatedArticles = isSchoolWebsitesArticle
    ? [
        {
          title: '5 Signs Your Business Website Is Losing You Clients',
          slug: 'signs-your-website-is-losing-clients',
          readTime: '4 min read',
          date: '15 January 2026',
          category: 'Business Tips',
          categoryColor: 'blue' as const
        },
        {
          title: 'How Much Does a Website Cost in India? (2026 Honest Breakdown)',
          slug: 'website-cost-in-india',
          readTime: '7 min read',
          date: '10 February 2026',
          category: 'Pricing & Value',
          categoryColor: 'emerald' as const
        }
      ]
    : isFiveSignsArticle
    ? [
        {
          title: 'School Websites: 10 Features Every School Should Have Online',
          slug: 'school-website-features',
          readTime: '6 min read',
          date: '5 January 2026',
          category: 'Industry Guide',
          categoryColor: 'amber' as const
        },
        {
          title: 'How to Get More Clients for Your Business Using a Website',
          slug: 'how-to-get-more-clients-using-a-website',
          readTime: '6 min read',
          date: '20 February 2026',
          category: 'Business Tips',
          categoryColor: 'blue' as const
        }
      ]
    : isHostingArticle
    ? [
        {
          title: '5 Signs Your Business Website Is Losing You Clients',
          slug: 'signs-your-website-is-losing-clients',
          readTime: '4 min read',
          date: '15 January 2026',
          category: 'Business Tips',
          categoryColor: 'blue' as const
        },
        {
          title: 'How Much Does a Website Cost in India? (2026 Honest Breakdown)',
          slug: 'website-cost-in-india',
          readTime: '7 min read',
          date: '10 February 2026',
          category: 'Pricing & Value',
          categoryColor: 'emerald' as const
        }
      ]
    : isThirdArticle
    ? [
        {
          title: 'Free vs Paid Website Hosting: What Indian Business Owners Need to Know',
          slug: 'free-vs-paid-website-hosting',
          readTime: '5 min read',
          date: '28 January 2026',
          category: 'Technical Guide',
          categoryColor: 'purple' as const
        },
        {
          title: 'School Websites: 10 Features Every School Should Have Online',
          slug: 'school-website-features',
          readTime: '6 min read',
          date: '5 January 2026',
          category: 'Industry Guide',
          categoryColor: 'amber' as const
        }
      ]
    : isSecondArticle
    ? [
        {
          title: '5 Signs Your Business Website Is Losing You Clients',
          slug: 'signs-your-website-is-losing-clients',
          readTime: '4 min read',
          date: '15 January 2026',
          category: 'Business Tips',
          categoryColor: 'blue' as const
        },
        {
          title: 'Why Every Small Business in India Needs a Website in 2026',
          slug: 'why-small-businesses-need-a-website',
          readTime: '5 min read',
          date: '1 March 2026',
          category: 'Business Tips',
          categoryColor: 'blue' as const
        }
      ]
    : [
        {
          title: 'How to Get More Clients for Your Business Using a Website',
          slug: 'how-to-get-more-clients-using-a-website',
          readTime: '6 min read',
          date: '20 February 2026',
          category: 'Business Tips',
          categoryColor: 'blue' as const
        },
        {
          title: '5 Signs Your Business Website Is Losing You Clients',
          slug: 'signs-your-website-is-losing-clients',
          readTime: '4 min read',
          date: '15 January 2026',
          category: 'Business Tips',
          categoryColor: 'blue' as const
        }
      ];

  const getCategoryBadgeClass = (color?: string) => {
    switch (color) {
      case 'emerald':
        return 'bg-emerald-950/70 border-emerald-500/30 text-emerald-300';
      case 'purple':
        return 'bg-purple-950/70 border-purple-500/30 text-purple-300';
      case 'amber':
        return 'bg-amber-950/70 border-amber-500/30 text-amber-300';
      default:
        return 'bg-blue-950/70 border-blue-500/30 text-blue-300';
    }
  };

  const categoryBadgeStyles = getCategoryBadgeClass(post.categoryColor);

  return (
    <article className="relative pt-28 sm:pt-36 pb-24 min-h-screen z-10">
      <div className="max-w-[820px] mx-auto px-5 sm:px-6 md:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 flex-wrap">
            <li>
              <Link
                to="/"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Home
              </Link>
            </li>
            <li className="text-slate-600 select-none">/</li>
            <li>
              <Link
                to="/blog"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Blog
              </Link>
            </li>
            <li className="text-slate-600 select-none">/</li>
            <li
              className="text-slate-200 font-medium truncate max-w-[200px] sm:max-w-xs md:max-w-md lg:max-w-lg"
              title={post.title}
            >
              {post.title}
            </li>
          </ol>
        </nav>

        {/* Article Metadata */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap text-xs sm:text-sm mb-5">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryBadgeStyles}`}
          >
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{post.readTime}</span>
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{post.date}</span>
          </span>
        </div>

        {/* Article Title */}
        <h1 className="text-[25px] sm:text-[30px] md:text-[32px] font-extrabold text-white tracking-tight leading-[1.2] mb-4">
          {post.title}
        </h1>

        {/* Article Subtitle */}
        <p className="text-base text-slate-300 sm:text-slate-300/90 leading-[1.6] mb-8 font-normal">
          {isSchoolWebsitesArticle
            ? "Parents often research schools online before enquiring about admissions. An informative, accessible school website helps parents discover important information and understand what your school offers."
            : isFiveSignsArticle
            ? "A bad website is worse than no website. If your site does any of these five things, you could be pushing potential customers away without even realizing it."
            : isHostingArticle
            ? "You've heard about free hosting. Is it worth it? And what happens when you actually need support? Here's what Indian business owners should know about website hosting."
            : isThirdArticle
            ? "Website pricing in India ranges from ₹5,000 to ₹5,00,000 — and the difference isn't always about quality. Learn what goes into genuine web development costs."
            : isSecondArticle
            ? "A website alone won't bring you clients — it needs to be designed to convert visitors into enquiries. Here are the 7 elements that turn a website into a client-generating machine."
            : isFirstArticle
            ? "Over 700 million Indians are online. If your business doesn't have a website, you're invisible to most of them. Here's why that's costing you customers — and what to do about it."
            : post.excerpt}
        </p>

        {/* Horizontal Divider */}
        <div className="border-b border-slate-800/80 mb-10 sm:mb-12" />

        {/* Article Content */}
        {isFiveSignsArticle ? (
          <div className="space-y-8 sm:space-y-10 text-[15px] sm:text-[16px] text-slate-300 leading-[1.75]">
            {/* Introduction */}
            <section className="space-y-4">
              <p>
                Not all websites help your business. A poorly built website can damage your credibility and drive potential clients straight to your competitors. Here are five warning signs.
              </p>
            </section>

            {/* Thin horizontal divider below the introduction */}
            <div className="border-b border-slate-800/80 my-8 sm:my-10" />

            {/* 1. It Looks Broken on Mobile */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                1. It Looks Broken on Mobile
              </h2>
              <p>
                If your website isn't mobile-friendly, you could be losing potential customers. Check your own website on your phone. Does text overflow the screen? Do images fail to load properly? Do buttons overlap? If yes, your website needs attention.
              </p>
              <p>
                A mobile-friendly website helps visitors browse your services, read information, and contact your business comfortably from their phones.
              </p>
            </section>

            {/* 2. It Takes More Than 3 Seconds to Load */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                2. It Takes More Than 3 Seconds to Load
              </h2>
              <p>
                Visitors may leave a slow website before they have a chance to explore your services. You can check your website's performance using Google PageSpeed Insights.
              </p>
              <p>Common causes of slow loading include:</p>
              <ul className="space-y-3.5 pl-1">
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400 mt-2.5" />
                  <div>Unoptimized images.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400 mt-2.5" />
                  <div>Poorly configured hosting.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400 mt-2.5" />
                  <div>Excessive scripts or plugins.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400 mt-2.5" />
                  <div>Unnecessary resources loading on every page.</div>
                </li>
              </ul>
            </section>

            {/* 3. Your Contact Information Is Hard to Find */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                3. Your Contact Information Is Hard to Find
              </h2>
              <p>
                Visitors should be able to find your phone number or WhatsApp contact without searching through multiple pages.
              </p>
              <p>Your contact details should ideally be available:</p>
              <ul className="space-y-3.5 pl-1">
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400 mt-2.5" />
                  <div>In the navigation or header.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400 mt-2.5" />
                  <div>On a dedicated contact page.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400 mt-2.5" />
                  <div>In the footer.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400 mt-2.5" />
                  <div>Through a floating WhatsApp button, where appropriate.</div>
                </li>
              </ul>
            </section>

            {/* 4. It Hasn't Been Updated in Years */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                4. It Hasn't Been Updated in Years
              </h2>
              <p>
                Old copyright dates, incorrect phone numbers, outdated services, and inaccurate prices can make a business appear inactive.
              </p>
              <p>
                Review your website regularly and update information whenever your business details, services, or pricing change.
              </p>
            </section>

            {/* 5. No Testimonials or Social Proof */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                5. No Testimonials or Social Proof
              </h2>
              <p>
                A website that claims to offer great service without supporting evidence may struggle to establish trust.
              </p>
              <p>
                Genuine testimonials, customer reviews, project photographs, and verified achievements can help prospective customers evaluate your business.
              </p>
              <p className="text-sm text-slate-400 italic">
                Do not fabricate testimonials or present fictional customers as real.
              </p>
            </section>

            {/* What to Do */}
            <section className="space-y-4 pt-2">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                What to Do
              </h2>
              <p>
                If your current website has these problems, evaluate whether it needs targeted improvements or a complete rebuild.
              </p>
              <p>
                A modern, fast, mobile-friendly website can make it easier for potential customers to understand your services and contact your business.
              </p>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleConsultationClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <span>Get a Free Website Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </section>
          </div>
        ) : isSchoolWebsitesArticle ? (
          <div className="space-y-8 sm:space-y-10 text-[15px] sm:text-[16px] text-slate-300 leading-[1.75]">
            {/* Introduction */}
            <section className="space-y-4">
              <p>
                A school website is an important resource for parents considering admissions. A professional, informative website can help communicate school information, build trust, and make it easier for parents to find answers.
              </p>
              <p>
                Here are ten useful features to consider for a school website.
              </p>
            </section>

            {/* Thin horizontal divider below the introduction */}
            <div className="border-b border-slate-800/80 my-8 sm:my-10" />

            {/* 1. Online Admission Enquiry Form */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                1. Online Admission Enquiry Form
              </h2>
              <p>
                Parents should be able to submit admission enquiries at any time, not just during office hours.
              </p>
              <p>
                A simple form can capture the student's name, intended class, parent or guardian contact details, and enquiry message.
              </p>
            </section>

            {/* 2. Fee Structure Page */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                2. Fee Structure Page
              </h2>
              <p>
                Parents frequently want to understand school fees before arranging a visit.
              </p>
              <p>
                Present the fee information clearly and keep it updated. If fees vary by grade or programme, organize the information so parents can find the relevant details easily.
              </p>
            </section>

            {/* 3. Photo Gallery and Virtual Tour */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                3. Photo Gallery and Virtual Tour
              </h2>
              <p>
                Parents want to understand the school's environment before visiting.
              </p>
              <p>A gallery can showcase:</p>
              <ul className="space-y-3.5 pl-1">
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2.5" />
                  <div>Classrooms.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2.5" />
                  <div>Sports facilities.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2.5" />
                  <div>Libraries.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2.5" />
                  <div>Laboratories.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2.5" />
                  <div>School events and activities.</div>
                </li>
              </ul>
              <p className="text-sm text-slate-400 italic">
                A virtual tour can be added if it is included in the agreed project scope.
              </p>
            </section>

            {/* 4. Academic Calendar and Events */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                4. Academic Calendar and Events
              </h2>
              <p>
                Publish the academic calendar, examination dates, holidays, and upcoming events online.
              </p>
              <p>
                This helps parents check important dates without needing to contact the school office.
              </p>
            </section>

            {/* 5. Staff and Faculty Profiles */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                5. Staff and Faculty Profiles
              </h2>
              <p>
                Introduce teaching staff and relevant school leadership.
              </p>
              <p>
                Profiles may include names, roles, qualifications, and professional backgrounds, subject to the school's approval and consent.
              </p>
            </section>

            {/* 6. Notice Board and Announcements */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                6. Notice Board and Announcements
              </h2>
              <p>An online notice board can display:</p>
              <ul className="space-y-3.5 pl-1">
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2.5" />
                  <div>School circulars.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2.5" />
                  <div>Examination announcements.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2.5" />
                  <div>Holiday notices.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2.5" />
                  <div>Important reminders.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2.5" />
                  <div>Other school updates.</div>
                </li>
              </ul>
              <p className="text-sm text-slate-400 italic">
                If the school requires staff to update notices independently, an admin interface may be needed and should be scoped accordingly.
              </p>
            </section>

            {/* 7. Contact Information and Location Map */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                7. Contact Information and Location Map
              </h2>
              <p>Make it easy for parents to find:</p>
              <ul className="space-y-3.5 pl-1">
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2.5" />
                  <div>School telephone number.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2.5" />
                  <div>Official email address.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2.5" />
                  <div>Address.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2.5" />
                  <div>WhatsApp contact, if available.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2.5" />
                  <div>Location map and directions.</div>
                </li>
              </ul>
              <p>Keep these details consistent across the website.</p>
            </section>

            {/* 8. Results and Achievements */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                8. Results and Achievements
              </h2>
              <p>
                Showcase verified academic results, sports achievements, competitions, awards, and other accomplishments.
              </p>
              <p>
                Only publish accurate, approved information and obtain appropriate permissions for identifiable student photographs or personal information.
              </p>
            </section>

            {/* 9. Testimonials from Parents and Students */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                9. Testimonials from Parents and Students
              </h2>
              <p>
                Genuine testimonials can help prospective families understand the experiences of existing school communities.
              </p>
              <p className="text-sm text-slate-400 italic">
                Use only authentic, approved testimonials. Do not invent parent or student quotes.
              </p>
            </section>

            {/* 10. Mobile-Friendly and Fast */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                10. Mobile-Friendly and Fast
              </h2>
              <p>
                Parents may visit the website using phones, tablets, or desktop computers.
              </p>
              <p>Ensure that:</p>
              <ul className="space-y-3.5 pl-1">
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2.5" />
                  <div>Text remains readable on small screens.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2.5" />
                  <div>Navigation is easy to use.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2.5" />
                  <div>Buttons are easy to tap.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2.5" />
                  <div>Images are optimized.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 mt-2.5" />
                  <div>Important pages load efficiently.</div>
                </li>
              </ul>
            </section>

            {/* BizTap School Website Solutions */}
            <section className="space-y-4 pt-2">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                BizTap School Website Solutions
              </h2>
              <p>
                BizTap offers school website development starting at <strong className="text-white font-bold">₹39,999</strong>.
              </p>
              <p>
                A school website's final cost depends on the required pages, functionality, content, and agreed scope. Advanced features such as an interactive virtual tour, staff-managed notice board CMS, online fee payment gateways, and comprehensive student portals are scoped and quoted separately based on your institution's specific needs.
              </p>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleSchoolQuoteClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <span>Get a School Website Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </section>
          </div>
        ) : isHostingArticle ? (
          <div className="space-y-8 sm:space-y-10 text-[15px] sm:text-[16px] text-slate-300 leading-[1.75]">
            {/* Introduction */}
            <section className="space-y-4">
              <p>
                When you build a website, you need a place to 'host' it — a server or platform that stores your website files and delivers them to visitors. Hosting options range from free tiers to paid services. Here's what you need to know before choosing one.
              </p>
            </section>

            {/* Thin horizontal divider below the introduction */}
            <div className="border-b border-slate-800/80 my-8 sm:my-10" />

            {/* What Free Hosting Actually Means */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                What Free Hosting Actually Means
              </h2>
              <p>
                Some hosting platforms provide free tiers that are suitable for certain websites. These can be useful for portfolios, landing pages, and small business websites with modest requirements.
              </p>
              <p>
                However, free hosting does not mean every feature is free or unlimited. Usage limits, deployment options, backend requirements, storage, bandwidth, and support vary by provider and plan.
              </p>
              <p>
                Before choosing a platform, business owners should carefully check its current terms, resource allocations, and usage boundaries.
              </p>
            </section>

            {/* What Free Hosting May Include */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                What Free Hosting May Include
              </h2>
              <ul className="space-y-3.5 pl-1">
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>
                    <strong className="text-white font-semibold">Website deployment:</strong> Some platforms allow websites to be deployed on free plans.
                  </div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>
                    <strong className="text-white font-semibold">HTTPS and SSL:</strong> Secure connections may be included, subject to provider and domain configuration.
                  </div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>
                    <strong className="text-white font-semibold">Content delivery:</strong> Some platforms distribute website content through a CDN.
                  </div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>
                    <strong className="text-white font-semibold">Backend functionality:</strong> Contact forms, serverless functions, databases, and authentication may have separate limits or charges.
                  </div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>
                    <strong className="text-white font-semibold">Custom domains:</strong> Availability and configuration depend on the hosting provider and plan.
                  </div>
                </li>
              </ul>
            </section>

            {/* What About Databases and Authentication? */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                What About Databases and Authentication?
              </h2>
              <p>
                A website that only displays business information may have very different hosting requirements from an application with user accounts, payments, chat, or an admin dashboard.
              </p>
              <ul className="space-y-3.5 pl-1">
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>
                    <strong className="text-white font-semibold">Static websites:</strong> Informational websites, landing pages, and service showcases can often use simpler, low-overhead hosting arrangements.
                  </div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>
                    <strong className="text-white font-semibold">Dynamic websites:</strong> Features like member portals or real-time booking require backend servers, databases, or external APIs to process data dynamically.
                  </div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>
                    <strong className="text-white font-semibold">Usage limits:</strong> Database reads, writes, storage capacity, and user authentication sessions usually have defined limits on free tiers.
                  </div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>
                    <strong className="text-white font-semibold">Tier upgrades:</strong> Exceeding a provider's free allowance requires upgrading to a paid tier to prevent service interruptions.
                  </div>
                </li>
              </ul>
            </section>

            {/* When Does Free Hosting Have Limits? */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                When Does Free Hosting Have Limits?
              </h2>
              <p>
                Free hosting can be sufficient for a small website, but its suitability depends on the project's requirements and traffic.
              </p>
              <p>
                A business may need to upgrade when it requires:
              </p>
              <ul className="space-y-3.5 pl-1">
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>Higher resource or usage limits.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>More storage or database capacity.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>Additional backend functionality.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>Team collaboration or advanced deployment features.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>Better support or specific reliability commitments.</div>
                </li>
              </ul>
            </section>

            {/* Paid Hosting: When It Makes Sense */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                Paid Hosting: When It Makes Sense
              </h2>
              <p>
                Paid hosting may be worthwhile when a business needs additional resources, more control, support, or specific technical capabilities.
              </p>
              <p>
                Before paying for hosting or a management service, ask:
              </p>
              <ul className="space-y-3.5 pl-1">
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>What exactly is included in the price?</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>Is the domain included or billed separately?</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>Are database and backend costs included?</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>Who handles maintenance and troubleshooting?</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>What happens if usage exceeds the plan's limits?</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>What will the renewal cost be?</div>
                </li>
              </ul>
              <p>
                It is also important to understand the difference between a hosting provider's infrastructure charges and a web developer's optional maintenance or management fee. Hosting provider fees cover raw server hardware, cloud bandwidth, and data storage. In contrast, developer maintenance fees cover hands-on tasks such as code updates, security patching, site backups, and active troubleshooting.
              </p>
            </section>

            {/* What to Avoid */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                What to Avoid
              </h2>
              <ul className="space-y-3.5 pl-1">
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>Choosing a hosting plan without checking its limits.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>Ignoring domain renewal and recurring service costs.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>Assuming that all backend functionality is free.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>Paying for services without understanding what the fee covers.</div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400 mt-2.5" />
                  <div>Choosing a plan without considering the website's future requirements.</div>
                </li>
              </ul>
            </section>

            {/* The Bottom Line */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                The Bottom Line
              </h2>
              <p>
                Free hosting can be a practical starting point for some websites, while paid hosting can be appropriate for businesses that need additional features, resources, or support.
              </p>
              <p>
                The right choice depends on your website's design, traffic, functionality, budget, and future plans. Before launching, make sure you understand both the initial development cost and any recurring expenses.
              </p>
            </section>
          </div>
        ) : isThirdArticle ? (
          <div className="space-y-8 sm:space-y-10 text-[15px] sm:text-[16px] text-slate-300 leading-[1.75]">
            {/* Introduction */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                Introduction
              </h2>
              <p>
                If you ask five different web developers in India for a quote, you will likely get five completely different answers. One person might quote ₹5,000, while an agency asks for ₹1,50,000 or more for what seems like the exact same business website.
              </p>
              <p>
                Why is there such a massive gap? More importantly, what does a business website actually need to cost to be fast, reliable, and effective at generating real customer inquiries? Let's break down the actual components of website pricing in 2026.
              </p>
            </section>

            {/* Domain & Infrastructure Costs */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                Domain &amp; Infrastructure Costs (Annual Recurring)
              </h2>
              <p>
                Every website requires two core infrastructure elements to exist online: a domain name and a hosting environment.
              </p>
              <div className="space-y-4 pt-1">
                <div>
                  <strong className="text-white font-bold block mb-1">
                    Domain Name (.in or .com)
                  </strong>
                  <p>
                    A domain name is your digital address (e.g., yourbusiness.in). Official registry pricing generally ranges from ₹800 to ₹1,500 per year, depending on the extension chosen (.in, .co.in, or .com). Avoid third-party domain resellers who charge inflated annual renewal fees.
                  </p>
                </div>

                <div>
                  <strong className="text-white font-bold block mb-1">
                    SSL Security Padlock (HTTPS)
                  </strong>
                  <p>
                    An SSL certificate encrypts user traffic and prevents Google Chrome from displaying a 'Not Secure' warning to your visitors. Modern hosting platforms provide automated SSL certificates at no additional cost.
                  </p>
                </div>
              </div>
            </section>

            {/* Hosting Costs - Exact required text from prompt */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                Hosting Costs
              </h2>
              <p>
                Hosting costs depend on the platform, traffic, storage, and technical requirements. Some platforms offer free tiers, while paid hosting or backend services may incur recurring charges. Confirm the applicable costs before starting your project.
              </p>
            </section>

            {/* The Website Itself */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                The Website Itself (One-Time Design &amp; Development Cost)
              </h2>
              <p>
                The largest portion of your initial investment goes into professional UI/UX design, custom frontend development, content layout, and conversion optimization.
              </p>
              <p>
                A well-engineered website involves responsive mobile wireframes, fast-loading clean code, search engine optimization (SEO), contact inquiry workflows, and direct WhatsApp integrations. Unlike template-based builders that add recurring monthly software fees, an agency-built website gives you full digital ownership of your assets.
              </p>
            </section>

            {/* What BizTap Charges and Why - Exact starting prices from prompt */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                What BizTap Charges and Why
              </h2>
              <p>
                BizTap provides transparent, milestone-based pricing tailored specifically to Indian small and medium businesses. Here are our starting prices by category:
              </p>

              <div className="bg-[#131D31]/90 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-5 sm:p-6 my-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-sm">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <span className="text-slate-200 font-medium">School Websites</span>
                    <span className="text-blue-400 font-bold">₹39,999</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <span className="text-slate-200 font-medium">Clinic &amp; Healthcare Websites</span>
                    <span className="text-blue-400 font-bold">₹29,999</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <span className="text-slate-200 font-medium">E-commerce Websites</span>
                    <span className="text-blue-400 font-bold">₹59,999</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <span className="text-slate-200 font-medium">Personal Portfolio Websites</span>
                    <span className="text-blue-400 font-bold">₹14,999</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <span className="text-slate-200 font-medium">Gaming Café Websites</span>
                    <span className="text-blue-400 font-bold">₹9,999</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <span className="text-slate-200 font-medium">Photography Websites</span>
                    <span className="text-blue-400 font-bold">₹19,999</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <span className="text-slate-200 font-medium">Restaurant &amp; Café Websites</span>
                    <span className="text-blue-400 font-bold">₹24,999</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <span className="text-slate-200 font-medium">Gym &amp; Fitness Websites</span>
                    <span className="text-blue-400 font-bold">₹24,999</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <span className="text-slate-200 font-medium">Salon &amp; Beauty Websites</span>
                    <span className="text-blue-400 font-bold">₹24,999</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <span className="text-slate-200 font-medium">CA &amp; Tax Consultant Websites</span>
                    <span className="text-blue-400 font-bold">₹29,999</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <span className="text-slate-200 font-medium">Lawyer &amp; Legal Websites</span>
                    <span className="text-blue-400 font-bold">₹29,999</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <span className="text-slate-200 font-medium">Custom Business Websites</span>
                    <span className="text-blue-400 font-bold">Custom Quote</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 italic">
                These are starting prices for the listed website packages. The final quote depends on your requirements and the agreed scope of work.
              </p>
            </section>

            {/* Recommendation - Exact required text from prompt */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                Our Recommendation
              </h2>
              <p>
                For most small businesses, the best website is one that meets their current needs, fits their budget, and can grow alongside their business. Choose the features you need, understand any recurring costs, and make sure the website gives customers a clear way to contact you.
              </p>
            </section>
          </div>
        ) : isSecondArticle ? (
          <div className="space-y-8 sm:space-y-10 text-[15px] sm:text-[16px] text-slate-300 leading-[1.75]">
            {/* Introduction */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                Introduction
              </h2>
              <p>
                Most business owners think: 'I'll build a website and clients will come.' That's not how it works. A website is only valuable if it's built to convert — to turn visitors into people who pick up the phone or send a message.
              </p>
              <p>
                Here are the 7 elements every converting business website must have.
              </p>
            </section>

            {/* Point 1 */}
            <section className="space-y-3">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                1. A Clear Headline That Answers 'What Do You Do?'
              </h2>
              <p>
                Within 3 seconds of landing on your website, a visitor should know exactly what you offer and who you serve. 'Welcome to our website' doesn't cut it. Instead: 'Professional House Construction in Tanuku — Free Site Visits Available.'
              </p>
            </section>

            {/* Point 2 */}
            <section className="space-y-3">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                2. Your Phone Number and WhatsApp on Every Page
              </h2>
              <p>
                Don't make people hunt for your contact details. Put your phone number and a WhatsApp button in the header, the footer, and on every page. Make it as easy as possible to reach you.
              </p>
            </section>

            {/* Point 3 */}
            <section className="space-y-3">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                3. Real Photos of Your Work
              </h2>
              <p>
                Stock photos kill credibility. Show real photos of your projects, your team, your premises, your products. Authenticity builds trust. A before/after gallery of your work is extremely powerful.
              </p>
            </section>

            {/* Point 4 */}
            <section className="space-y-3">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                4. Client Testimonials with Names and Locations
              </h2>
              <p>
                'Great service!' from an anonymous person means nothing. 'Priya from Vijayawada — They built our school website in 5 days and it looks amazing' is powerful social proof.
              </p>
            </section>

            {/* Point 5 */}
            <section className="space-y-3">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                5. A Specific Call-to-Action on Every Page
              </h2>
              <p>
                Every page should have one clear action you want visitors to take: 'Get a Free Quote', 'Book a Consultation', 'WhatsApp Now'. Don't give people 5 options — give them one.
              </p>
            </section>

            {/* Point 6 */}
            <section className="space-y-3">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                6. Fast Loading Speed
              </h2>
              <p>
                If your website takes more than 3 seconds to load, over half your visitors leave. Google also ranks slow websites lower in search results. Speed matters more than almost anything else.
              </p>
            </section>

            {/* Point 7 */}
            <section className="space-y-3">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                7. Mobile-First Design
              </h2>
              <p>
                Over 70% of website visits in India come from mobile phones. If your website looks broken on a phone, you're losing most of your potential clients before they even read your content.
              </p>
            </section>

            {/* The Bottom Line */}
            <section className="space-y-3">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                The Bottom Line
              </h2>
              <p>
                A good website that converts visitors into clients is one of the best investments a small business can make. It pays for itself many times over. Talk to us about building one for your business.
              </p>
            </section>
          </div>
        ) : isFirstArticle ? (
          <div className="space-y-8 sm:space-y-10 text-[15px] sm:text-[16px] text-slate-300 leading-[1.75]">
            {/* Section: Introduction */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                Introduction
              </h2>
              <p>
                Every day, thousands of potential customers in your city search Google for the services you offer. They type things like 'best salon near me', 'school admission fees', 'civil contractor Tanuku' — and if your business doesn't have a website, you simply don't exist to them.
              </p>
            </section>

            {/* Section: The Reality of Customer Search Behaviour */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                The Reality of Customer Search Behaviour
              </h2>
              <p>
                Over 90% of purchase decisions start with an online search. Whether someone is looking for a clinic, a restaurant, a gym, or a contractor — they search first. If your competitor has a website and you don't, they get the call.
              </p>
              <p>
                A website works 24/7. Your shop may be closed, but your website is always open — answering questions, showing your services, and capturing leads while you sleep.
              </p>
            </section>

            {/* Section: Common Excuses (And Why They're Wrong) */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                Common Excuses (And Why They're Wrong)
              </h2>

              <div className="space-y-5 pt-1">
                <div>
                  <strong className="text-white font-bold block mb-1">
                    'I get enough clients through referrals.'
                  </strong>
                  <p>
                    Referrals are great, but they have a ceiling. A website lets complete strangers discover you and become new customers — people who would never have heard of you otherwise.
                  </p>
                </div>

                <div>
                  <strong className="text-white font-bold block mb-1">
                    'Websites are expensive.'
                  </strong>
                  <p>
                    Not anymore. BizTap builds professional websites for small businesses starting at just ₹14,999 — a one-time cost with free hosting for the first 3 months.
                  </p>
                </div>

                <div>
                  <strong className="text-white font-bold block mb-1">
                    'I have an Instagram page.'
                  </strong>
                  <p>
                    Social media is rented land. You don't own your Instagram followers — Meta can change the algorithm or shut your page down tomorrow. A website is yours permanently.
                  </p>
                </div>
              </div>
            </section>

            {/* Section: What a Website Does for Your Business */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                What a Website Does for Your Business
              </h2>

              <ol className="space-y-3.5 my-4">
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold text-xs mt-0.5">
                    1
                  </span>
                  <div>
                    <strong className="text-white font-bold">Builds trust</strong> — A professional website instantly makes you look established and credible.
                  </div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold text-xs mt-0.5">
                    2
                  </span>
                  <div>
                    <strong className="text-white font-bold">Generates leads</strong> — Contact forms and WhatsApp buttons capture enquiries automatically.
                  </div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold text-xs mt-0.5">
                    3
                  </span>
                  <div>
                    <strong className="text-white font-bold">Shows your work</strong> — Gallery, portfolio, and testimonials convince people before they even call.
                  </div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold text-xs mt-0.5">
                    4
                  </span>
                  <div>
                    <strong className="text-white font-bold">Saves time</strong> — FAQs on your website mean fewer repeat phone calls.
                  </div>
                </li>
                <li className="flex items-start gap-3 leading-relaxed">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold text-xs mt-0.5">
                    5
                  </span>
                  <div>
                    <strong className="text-white font-bold">Improves Google visibility</strong> — SEO helps local customers find you organically.
                  </div>
                </li>
              </ol>
            </section>

            {/* Section: Getting Started */}
            <section className="space-y-4">
              <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                Getting Started
              </h2>
              <p>
                A basic professional website can be live in 3–7 days. You don't need technical knowledge — we handle everything.
              </p>
            </section>
          </div>
        ) : (
          <div className="space-y-8 sm:space-y-10 text-[15px] sm:text-[16px] text-slate-300 leading-[1.75]">
            {post.contentSections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-[21px] sm:text-[24px] font-bold text-white tracking-tight">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </section>
            ))}
          </div>
        )}

        {/* 6. Promotional Gradient CTA Banner - Accurate Blue-to-Gold Gradient */}
        <div className="mt-12 sm:mt-16">
          <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-center shadow-2xl overflow-hidden group">
            {/* Top accent line */}
            <div className="absolute top-0 left-6 right-6 h-[2px] bg-white/40 rounded-full" />

            {/* Subtle glow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-72 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-3.5 max-w-xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-sm">
                Need a Professional Website?
              </h3>
              <p className="text-sm sm:text-base text-white/95 leading-relaxed font-normal drop-shadow-sm">
                BizTap helps businesses build professional websites suited to their needs. Let's find the right solution for your business.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handleExploreServicesClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-slate-900 bg-white hover:bg-slate-100 active:bg-slate-200 shadow-xl shadow-black/15 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 text-slate-900" />
                </button>

                <button
                  type="button"
                  onClick={handleConsultationClick}
                  className="text-sm font-semibold text-white/95 hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
                >
                  Get a Free Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles Section */}
        <div className="mt-14 sm:mt-16 pt-10 sm:pt-12 border-t border-slate-800/80">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-6">
            Related Articles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {relatedArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative bg-[#131D31]/90 backdrop-blur-sm border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden cursor-pointer"
              >
                {/* Subtle top accent gradient */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-400 opacity-80 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getCategoryBadgeClass(
                        article.categoryColor
                      )}`}
                    >
                      {article.category}
                    </span>
                    <span className="text-slate-400 font-medium">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                    {article.title}
                  </h3>
                </div>

                <div className="border-t border-slate-800/70 pt-4 mt-5 flex items-center justify-between text-xs">
                  <span className="text-slate-400">{article.date}</span>
                  <span className="text-blue-400 group-hover:text-blue-300 font-semibold flex items-center gap-1 transition-colors">
                    <span>Read article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-800/80">
          <Link
            to="/blog"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;
