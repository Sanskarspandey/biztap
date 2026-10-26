import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { HOMEPAGE_BLOG_POSTS, BlogPost } from '../../data/blog';
import { BlogCard } from './BlogCard';

interface BlogPreviewSectionProps {
  onSelectArticle: (post: BlogPost) => void;
}

export const BlogPreviewSection: React.FC<BlogPreviewSectionProps> = ({
  onSelectArticle
}) => {
  const navigate = useNavigate();

  return (
    <section id="blog" className="relative py-20 sm:py-28 scroll-mt-24 z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
        {/* Section Header - Matches Screenshot 1 */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-semibold text-blue-300">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>From Our Blog</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            Tips & Insights for Business Owners
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Practical advice on websites, digital presence, and growing your small business online.
          </p>
        </div>

        {/* 3 Article Preview Cards in a row - Matches Screenshot 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {HOMEPAGE_BLOG_POSTS.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              variant="homepage"
              onSelectArticle={onSelectArticle}
            />
          ))}
        </div>

        {/* View All Articles Button - Matches Screenshot 1 */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={() => {
              navigate('/blog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-blue-300 hover:text-white bg-slate-900/80 hover:bg-blue-950/60 border border-blue-500/40 hover:border-blue-400 transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
