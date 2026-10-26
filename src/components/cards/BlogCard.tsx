import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { BlogPost } from '../../data/blog';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-2xl border border-cream-200/90 shadow-subtle hover:shadow-card-hover transition-all duration-200 overflow-hidden flex flex-col justify-between">
      <div className="p-6">
        <div className="flex items-center justify-between text-xs text-charcoal-500 mb-3">
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-forest-50 text-forest-800 border border-forest-200">
            {post.category}
          </span>
          <div className="flex items-center gap-3 text-[11px]">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-charcoal-400" />
              {post.readTime}
            </span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-charcoal-900 hover:text-forest-900 transition-colors mb-2 leading-snug">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-xs text-charcoal-600 leading-relaxed line-clamp-3 mb-4">
          {post.excerpt}
        </p>
      </div>

      <div className="px-6 pb-6 pt-3 border-t border-cream-100 flex items-center justify-between">
        <div className="flex items-center gap-1 text-[11px] text-charcoal-400">
          <Calendar className="w-3 h-3 text-charcoal-400" />
          <span>{post.date}</span>
        </div>

        <Link
          to={`/blog/${post.slug}`}
          className="text-xs font-bold text-forest-900 hover:text-emerald-600 transition-colors flex items-center gap-1"
        >
          <span>Read Article</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
};
