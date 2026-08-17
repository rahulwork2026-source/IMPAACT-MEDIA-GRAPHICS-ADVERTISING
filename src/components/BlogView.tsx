import React, { useState } from 'react';
import { ActiveTab, BlogPost } from '../types';
import { Search, Clock, User, Heart, ArrowRight, Tag } from 'lucide-react';
import { motion } from 'motion/react';

interface BlogViewProps {
  posts: BlogPost[];
  onSelectPost: (post: BlogPost) => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({
  posts,
  onSelectPost,
  setActiveTab,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Signage & Architecture', 'Vehicle Wraps', 'Branding & Design'];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = posts.find(p => p.featured) || posts[0];

  return (
    <div className="bg-black text-white space-y-12 pb-16">
      {/* 1. TOP HERO BANNER IMAGE WITH OVERLAY */}
      <section className="page-banner relative w-full h-[240px] sm:h-[300px] lg:h-[340px] overflow-hidden flex items-center justify-center border-b border-white/10">
        {/* Banner Background Image */}
        <img
          src="/images/banner_image_4.png"
          alt="IMPAACT MEDIA Advertising & Signage Blog Muscat"
          className="absolute inset-0 w-full h-full object-cover filter brightness-80 contrast-105 saturate-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/85" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#e52425]/25 rounded-full blur-3xl pointer-events-none" />

        {/* Banner Content */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-sans drop-shadow-lg"
          >
            OUR <span className="text-[#e52425]">BLOG</span>
          </motion.h1>

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-300 font-mono tracking-wider"
          >
            <button onClick={() => setActiveTab('home')} className="hover:text-[#e52425] transition-colors font-medium">Home</button>
            <span className="text-[#e52425] font-bold">/</span>
            <span className="text-white font-bold">Blog</span>
          </motion.div>
        </div>
      </section>

      {/* Search & Category Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#e52425]" />
            <input
              type="text"
              placeholder="Search articles on signages, wrapping, branding..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900 border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#e52425]"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 text-xs font-extrabold uppercase tracking-wider rounded-lg border transition ${
                  selectedCategory === cat
                    ? 'bg-[#e52425] text-white border-[#e52425] shadow-lg shadow-[#e52425]/20'
                    : 'bg-zinc-950 border-white/10 text-zinc-400 hover:text-white hover:border-[#e52425]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article Spotlight */}
      {featuredPost && selectedCategory === 'All' && !searchTerm && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            onClick={() => onSelectPost(featuredPost)}
            className="bg-zinc-950 border border-[#e52425]/30 rounded-3xl overflow-hidden bw-glass bw-glass-hover grid grid-cols-1 lg:grid-cols-12 gap-6 cursor-pointer group"
          >
            <div className="lg:col-span-7 relative aspect-video lg:aspect-auto overflow-hidden bg-zinc-900">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-[#e52425] text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded shadow-md">
                SPOTLIGHT ARTICLE
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <span className="font-bold text-white bg-[#e52425] px-2.5 py-1 rounded shadow-sm">
                    {featuredPost.category}
                  </span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#e52425] transition-colors leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="w-8 h-8 rounded-full border border-white/20 object-cover"
                  />
                  <div className="text-xs">
                    <div className="font-bold text-white">{featuredPost.author.name}</div>
                    <div className="text-[10px] text-zinc-500">{featuredPost.date}</div>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e52425] group-hover:translate-x-1 transition-transform uppercase tracking-wider">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="bg-zinc-950 border border-white/10 hover:border-[#e52425]/40 rounded-2xl overflow-hidden bw-glass bw-glass-hover flex flex-col justify-between cursor-pointer group transition-colors"
            >
              <div className="space-y-4">
                <div className="relative aspect-video overflow-hidden bg-zinc-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#e52425] text-white px-2.5 py-1 rounded text-[10px] font-extrabold uppercase shadow-md">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-zinc-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#e52425]" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#e52425] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-zinc-400">
                  <User className="w-3.5 h-3.5 text-[#e52425]" />
                  <span>{post.author.name}</span>
                </div>

                <div className="flex items-center gap-1 text-zinc-400">
                  <Heart className="w-3.5 h-3.5 text-[#e52425] fill-[#e52425]" />
                  <span>{post.likes}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
