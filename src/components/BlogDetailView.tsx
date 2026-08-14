import React, { useState, useEffect } from 'react';
import { ActiveTab, BlogPost, Comment } from '../types';
import { ArrowLeft, Clock, User, Heart, Share2, MessageSquare, Send, CheckCircle2, Bookmark } from 'lucide-react';

interface BlogDetailViewProps {
  post: BlogPost;
  setActiveTab: (tab: ActiveTab) => void;
  allPosts: BlogPost[];
  onSelectPost: (post: BlogPost) => void;
}

export const BlogDetailView: React.FC<BlogDetailViewProps> = ({
  post,
  setActiveTab,
  allPosts,
  onSelectPost,
}) => {
  const [likes, setLikes] = useState(post.likes);
  const [hasLiked, setHasLiked] = useState(false);
  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 'c-1',
      postId: post.id,
      author: 'Tariq Al-Busaidi',
      text: 'Extremely informative breakdown of 3D LED illumination engineering in Oman. Thanks for sharing these technical details!',
      date: '2026-08-03'
    },
    {
      id: 'c-2',
      postId: post.id,
      author: 'Commercial Signage Buyer',
      text: 'We are currently planning a rooftop signage for our headquarters in Seeb. Reached out via your quote form!',
      date: '2026-08-04'
    }
  ]);
  const [copied, setCopied] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newC: Comment = {
      id: `c-${Date.now()}`,
      postId: post.id,
      author: commentAuthor || 'Oman Visitor',
      text: commentText,
      date: new Date().toISOString().split('T')[0]
    };

    setComments([newC, ...comments]);
    setCommentText('');
    setCommentAuthor('');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const relatedPosts = allPosts.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <div className="py-12 lg:py-20 bg-black text-white space-y-12">
      {/* Back Button & Top Meta Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <button
          onClick={() => setActiveTab('blog')}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition bg-zinc-900 px-4 py-2 rounded-lg border border-white/10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </button>
      </div>

      {/* Main Reading Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Post Category & Read Time */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <span className="font-extrabold uppercase tracking-widest text-white bg-white/10 px-3 py-1 rounded-full border border-white/20">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span>•</span>
            <span>Published {post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Author Box */}
          <div className="flex items-center justify-between pt-4 border-y border-white/10 py-4">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full border border-white/20 object-cover"
              />
              <div>
                <div className="font-extrabold text-sm text-white">{post.author.name}</div>
                <div className="text-xs text-zinc-400">{post.author.role} • IMPAACT MEDIA</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleLike}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition ${
                  hasLiked
                    ? 'bg-white text-black border-white'
                    : 'bg-zinc-900 border-white/15 text-zinc-300 hover:text-white'
                }`}
              >
                <Heart className={`w-4 h-4 ${hasLiked ? 'fill-black' : ''}`} />
                <span>{likes}</span>
              </button>

              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/15 text-xs font-bold text-zinc-300 hover:text-white transition"
              >
                <Share2 className="w-4 h-4" />
                <span>{copied ? 'Copied Link!' : 'Share'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/20 bg-zinc-900">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body - Fully Realized Layout (No Text Truncation!) */}
        <div className="prose prose-invert max-w-none space-y-6 text-zinc-300 text-base leading-relaxed">
          {post.content.map((para, idx) => {
            // If paragraph looks like a heading
            if (para.length < 80 && !para.endsWith('.')) {
              return (
                <h2 key={idx} className="text-2xl font-extrabold text-white pt-4 border-b border-white/10 pb-2">
                  {para}
                </h2>
              );
            }
            return (
              <p key={idx} className="leading-relaxed font-normal">
                {para}
              </p>
            );
          })}
        </div>

        {/* Key Takeaways Box */}
        <div className="p-6 rounded-2xl bg-zinc-950 border border-white/20 bw-glass space-y-3">
          <div className="flex items-center gap-2 text-white font-extrabold text-sm uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>Key Takeaways for Business Owners in Oman</span>
          </div>
          <ul className="space-y-2 text-xs text-zinc-300">
            <li>• High-grade 3D illuminated signages generate 24/7 exterior brand impressions across Muscat.</li>
            <li>• Dual-cast PVC vinyl wraps offer 5+ year lifespan under high heat when properly UV-laminated.</li>
            <li>• IMPAACT MEDIA offers end-to-end design, fabrication, and crane installation with full municipality compliance.</li>
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-4">
          {post.tags.map((t, idx) => (
            <span key={idx} className="text-xs bg-zinc-900 border border-white/10 px-3 py-1 rounded-full text-zinc-300 font-medium">
              #{t}
            </span>
          ))}
        </div>

        {/* Comments Section */}
        <section className="pt-12 border-t border-white/10 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-white" />
              <span>Discussion ({comments.length})</span>
            </h3>
          </div>

          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="bg-zinc-950 border border-white/15 p-6 rounded-2xl space-y-4 bw-glass">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name / Organization"
                value={commentAuthor}
                onChange={(e) => setCommentAuthor(e.target.value)}
                className="bg-zinc-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white"
              />
            </div>
            <textarea
              rows={3}
              required
              placeholder="Leave a comment or ask a question about signage installation..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              className="bg-white text-black font-extrabold px-6 py-2.5 rounded-lg text-xs hover:bg-zinc-200 transition flex items-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Post Comment</span>
            </button>
          </form>

          {/* Comment List */}
          <div className="space-y-4">
            {comments.map((c) => (
              <div key={c.id} className="bg-zinc-900 border border-white/10 p-4 rounded-xl space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-extrabold text-white">{c.author}</span>
                  <span className="text-zinc-500">{c.date}</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="pt-12 border-t border-white/10 space-y-6">
            <h3 className="text-xl font-extrabold text-white">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rp) => (
                <div
                  key={rp.id}
                  onClick={() => {
                    onSelectPost(rp);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-zinc-950 border border-white/10 rounded-xl p-4 bw-glass bw-glass-hover cursor-pointer space-y-2"
                >
                  <div className="text-[10px] uppercase font-bold text-zinc-400">{rp.category}</div>
                  <h4 className="font-bold text-sm text-white line-clamp-2">{rp.title}</h4>
                  <p className="text-xs text-zinc-400 line-clamp-2">{rp.excerpt}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
};
