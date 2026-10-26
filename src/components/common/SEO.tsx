import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  ogType?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'BizTap — Websites & NFC Smart Review Cards for Growing Businesses',
  description = 'Tap. Connect. Grow. BizTap builds high-converting business websites, NFC smart review cards, and digital business profiles for Indian businesses.',
  ogType = 'website',
}) => {
  const location = useLocation();

  useEffect(() => {
    // Set document title
    const fullTitle = title.includes('BizTap') ? title : `${title} | BizTap`;
    document.title = fullTitle;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle);
    }

    // Update OG Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    // Update OG URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://biztap.in${location.pathname}`);
    }

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [title, description, ogType, location.pathname]);

  return null;
};
