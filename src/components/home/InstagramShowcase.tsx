import React from 'react';
import { Instagram, ArrowUpRight, Play, Heart, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG } from '../../config/brand';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  isReel?: boolean;
}

export const InstagramShowcase: React.FC = () => {
  const posts: InstagramPost[] = [
    {
      id: 'ig-1',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80',
      caption: 'Golden hour mist over Kalsubai ridge. 5,400 ft of pure Sahyadri magic 🌄 #TrailTribeIndia',
      likes: 428,
      comments: 34,
      isReel: true,
    },
    {
      id: 'ig-2',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      caption: 'Campfire stories and hot tea on the Rajmachi plateau after an 8-hour ridge walk ✨',
      likes: 312,
      comments: 19,
    },
    {
      id: 'ig-3',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
      caption: 'The vertical stone steps of Harihar Fort. Focus, discipline, and breathtaking valley drops 🧗‍♂️',
      likes: 589,
      comments: 52,
      isReel: true,
    },
    {
      id: 'ig-4',
      image: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=600&q=80',
      caption: 'Andharban rainforest canopy during peak monsoon downpours. Nature in full glory 🌿🌧️',
      likes: 462,
      comments: 28,
    },
  ];

  return (
    <section className="py-20 bg-[#080d0a] border-t border-emerald-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-semibold tracking-widest text-amber-400 uppercase font-[family-name:var(--font-mono)] mb-2">
              DISPATCHES ON INSTAGRAM
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-[family-name:var(--font-display)]">
              Follow Our Trail Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Tag <span className="text-amber-400 font-semibold">{BRAND_CONFIG.socials.instagramHandle}</span> on your weekend summit photos to be featured in our community reel.
            </p>
          </div>

          <a
            href={BRAND_CONFIG.socials.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#14231a] hover:bg-[#1c3225] border border-emerald-900 text-slate-200 hover:text-white transition-colors text-xs font-semibold shrink-0"
          >
            <Instagram className="w-4 h-4 text-amber-400" />
            <span>Follow {BRAND_CONFIG.socials.instagramHandle}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* 4 Instagram Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={BRAND_CONFIG.socials.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden border border-emerald-950 hover:border-amber-500/60 transition-all duration-300 shadow-md"
            >
              <ImageWithFallback
                src={post.image}
                alt="Instagram trail highlight"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-70 group-hover:opacity-90 transition-opacity" />

              {/* Reel indicator */}
              {post.isReel && (
                <div className="absolute top-2.5 right-2.5 p-1.5 rounded-md bg-black/60 backdrop-blur-sm text-white">
                  <Play className="w-3.5 h-3.5 fill-white" />
                </div>
              )}

              {/* Hover overlay with likes & caption */}
              <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200">
                <p className="line-clamp-2 text-[11px] text-slate-300 mb-2 leading-tight">
                  {post.caption}
                </p>
                <div className="flex items-center gap-3 text-[11px] text-slate-400 font-[family-name:var(--font-mono)]">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3 text-slate-400" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
