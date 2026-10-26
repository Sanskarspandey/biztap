import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blog';
import { BlogCard } from '../components/blog/BlogCard';

interface BlogPageProps {
  onSelectArticle: (post: BlogPost) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onSelectArticle }) => {
  return (
    <div className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 min-h-screen z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-blue-400 transition-colors bg-slate-900/60 border border-slate-800 px-3.5 py-1.5 rounded-full"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Blog Page Header - Matches Screenshot 2 */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-semibold text-blue-300">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>BizTap Knowledge Hub</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            Practical Advice for Business Owners
          </h1>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Tips on websites, digital presence, and growing your small business online.
          </p>
        </div>

        {/* Full Blog Article Grid - Matches Screenshot 2 (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BLOG_POSTS.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              variant="blogPage"
              onSelectArticle={onSelectArticle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
