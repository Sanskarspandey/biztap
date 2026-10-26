import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../data/blog';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'homepage' | 'blogPage';
  onSelectArticle?: (post: BlogPost) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  post,
  variant = 'homepage',
  onSelectArticle
}) => {
  const getCategoryStyles = (color: BlogPost['categoryColor']) => {
    switch (color) {
      case 'emerald':
        return 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30';
      case 'purple':
        return 'bg-purple-950/60 text-purple-300 border-purple-500/30';
      case 'amber':
        return 'bg-amber-950/60 text-amber-300 border-amber-500/30';
      default:
        return 'bg-blue-900/50 text-blue-300 border-blue-500/30';
    }
  };

  const actionLabel = variant === 'homepage' ? 'Read →' : 'Read more →';

  return (
    <article
      className="relative bg-[#131D31]/90 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-slate-700 hover:shadow-2xl hover:-translate-y-1 overflow-hidden group"
    >
      {/* Blue-to-gold gradient accent along top of each card - Matches Screenshot 1 & 2 */}
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-400 to-amber-400 rounded-t-full opacity-90 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Top Meta: Category badge & Reading time */}
        <div className="flex items-center justify-between text-xs">
          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getCategoryStyles(
              post.categoryColor
            )}`}
          >
            {post.category}
          </span>
          <span className="text-slate-400 font-medium text-xs">
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-blue-300 transition-colors mt-4">
          <Link
            to={`/blog/${post.slug}`}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hover:text-blue-300 transition-colors block"
          >
            {post.title}
          </Link>
        </h3>

        {/* Short Excerpt */}
        <p className="text-sm text-slate-400 leading-relaxed mt-3 line-clamp-3 font-normal">
          {post.excerpt}
        </p>
      </div>

      {/* Divider Line & Publication Date + Action Link */}
      <div className="border-t border-slate-800/70 pt-4 mt-6 flex items-center justify-between text-xs">
        <span className="text-slate-400 font-medium text-xs">
          {post.date}
        </span>

        <Link
          to={`/blog/${post.slug}`}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xs font-semibold text-blue-400 hover:text-blue-300 active:text-blue-500 flex items-center gap-1 transition-colors focus:outline-none"
          title={`Read article: ${post.title}`}
        >
          <span>{actionLabel}</span>
        </Link>
      </div>
    </article>
  );
};
