import React, { useState } from 'react';
import { PortfolioItem, BlogPost, ServiceItem, QuoteRequest } from '../types';
import { 
  Shield, 
  Lock, 
  Unlock, 
  Plus, 
  Trash2, 
  Edit3, 
  Check, 
  FileText, 
  Briefcase, 
  Layers, 
  MessageSquare,
  X,
  Search
} from 'lucide-react';

interface AdminPanelProps {
  portfolio: PortfolioItem[];
  setPortfolio: React.Dispatch<React.SetStateAction<PortfolioItem[]>>;
  posts: BlogPost[];
  setPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>;
  services: ServiceItem[];
  setServices: React.Dispatch<React.SetStateAction<ServiceItem[]>>;
  quotes: QuoteRequest[];
  setQuotes: React.Dispatch<React.SetStateAction<QuoteRequest[]>>;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  portfolio,
  setPortfolio,
  posts,
  setPosts,
  services,
  setServices,
  quotes,
  setQuotes,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);
  const [activeTab, setActiveTab] = useState<'quotes' | 'portfolio' | 'blog' | 'services'>('quotes');

  // New Item Modals
  const [showAddPortfolio, setShowAddPortfolio] = useState(false);
  const [newPortTitle, setNewPortTitle] = useState('');
  const [newPortClient, setNewPortClient] = useState('');
  const [newPortCategory, setNewPortCategory] = useState('Signages');
  const [newPortImg, setNewPortImg] = useState('');
  const [newPortDesc, setNewPortDesc] = useState('');

  const [showAddBlog, setShowAddBlog] = useState(false);
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogCategory, setNewBlogCategory] = useState('Signage & Architecture');
  const [newBlogExcerpt, setNewBlogExcerpt] = useState('');
  const [newBlogContent, setNewBlogContent] = useState('');
  const [newBlogImage, setNewBlogImage] = useState('');

  // Handle Unlock
  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === '1234' || pinInput.toLowerCase() === 'admin' || pinInput === '') {
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleQuickUnlock = () => {
    setIsAuthenticated(true);
  };

  // Portfolio CRUD
  const handleAddPortfolio = (e: React.FormEvent) => {
    e.preventDefault();
    const item: PortfolioItem = {
      id: `port-${Date.now()}`,
      title: newPortTitle || 'Untitled Custom Signage Project',
      client: newPortClient || 'Oman Client',
      category: newPortCategory,
      location: 'Muscat, Oman',
      year: '2026',
      coverImage: newPortImg || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200',
      description: newPortDesc || 'Executed by IMPAACT MEDIA advertising team.',
      tags: [newPortCategory, 'Custom Fabrication'],
      featured: true
    };
    setPortfolio([item, ...portfolio]);
    setShowAddPortfolio(false);
    setNewPortTitle('');
    setNewPortClient('');
    setNewPortDesc('');
  };

  const handleDeletePortfolio = (id: string) => {
    setPortfolio(portfolio.filter(p => p.id !== id));
  };

  // Blog CRUD
  const handleAddBlog = (e: React.FormEvent) => {
    e.preventDefault();
    const post: BlogPost = {
      id: `post-${Date.now()}`,
      slug: (newBlogTitle || 'new-post').toLowerCase().replace(/\s+/g, '-'),
      title: newBlogTitle || 'New Insights Article',
      category: newBlogCategory,
      author: {
        name: 'Impaact Editorial',
        role: 'Senior Media Specialist',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
      },
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: '5 min read',
      excerpt: newBlogExcerpt || 'Latest advertising and signage engineering trends in Oman.',
      content: newBlogContent.split('\n\n').filter(Boolean).length > 0
        ? newBlogContent.split('\n\n')
        : ['Full detailed article written by IMPAACT MEDIA team.'],
      tags: [newBlogCategory, 'Oman Advertising'],
      image: newBlogImage || 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=1200',
      likes: 12
    };
    setPosts([post, ...posts]);
    setShowAddBlog(false);
    setNewBlogTitle('');
    setNewBlogExcerpt('');
    setNewBlogContent('');
  };

  const handleDeleteBlog = (id: string) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  // Quote Status Update
  const updateQuoteStatus = (id: string, status: QuoteRequest['status']) => {
    setQuotes(quotes.map(q => q.id === id ? { ...q, status } : q));
  };

  const handleDeleteQuote = (id: string) => {
    setQuotes(quotes.filter(q => q.id !== id));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 bg-black text-white">
        <div className="w-full max-w-md bg-zinc-950 border border-white/20 rounded-2xl p-8 bw-glass text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mx-auto shadow-xl">
            <Lock className="w-8 h-8" />
          </div>

          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">
              Client & Admin Management Console
            </span>
            <h2 className="text-2xl font-extrabold text-white mt-1">
              IMPAACT MEDIA Admin Access
            </h2>
            <p className="text-xs text-zinc-400 mt-2">
              Enter security PIN to access live client quote submissions, edit portfolio showcase, and manage blog posts.
            </p>
          </div>

          <form onSubmit={handleUnlock} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Enter PIN (Default: 1234)"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                className="w-full bg-zinc-900 border border-white/15 rounded-xl px-4 py-3 text-center text-lg font-mono tracking-widest text-white focus:outline-none focus:border-white"
              />
              {pinError && (
                <p className="text-xs text-red-400 mt-1">Incorrect PIN. Try 1234 or click unlock below.</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black font-extrabold py-3 rounded-xl text-sm hover:bg-zinc-200 transition"
            >
              Unlock Admin Portal
            </button>
          </form>

          <div className="pt-2 border-t border-white/10">
            <button
              onClick={handleQuickUnlock}
              className="text-xs font-bold text-zinc-400 hover:text-white underline"
            >
              Demo Auto-Unlock (Click Here)
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 lg:py-16 bg-black text-white space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
            <Unlock className="w-4 h-4" />
            <span>Simulated Admin Mode Active</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white mt-1">
            Agency Management Console
          </h1>
        </div>

        <button
          onClick={() => setIsAuthenticated(false)}
          className="bg-zinc-900 border border-white/15 px-4 py-2 rounded-lg text-xs font-bold text-zinc-300 hover:text-white self-start sm:self-auto"
        >
          Lock Console
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
        {[
          { id: 'quotes', label: `Client Quote Requests (${quotes.length})`, icon: MessageSquare },
          { id: 'portfolio', label: `Portfolio Projects (${portfolio.length})`, icon: Briefcase },
          { id: 'blog', label: `Blog Articles (${posts.length})`, icon: FileText },
          { id: 'services', label: `Services (${services.length})`, icon: Layers },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition border ${
                isActive
                  ? 'bg-white text-black border-white'
                  : 'bg-zinc-950 text-zinc-400 border-white/10 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: QUOTE REQUESTS */}
      {activeTab === 'quotes' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">Submitted Lead Inquiries</h2>
            <span className="text-xs text-zinc-400">Real-time submissions from website visitors</span>
          </div>

          <div className="space-y-4">
            {quotes.map((q) => (
              <div key={q.id} className="bg-zinc-950 border border-white/15 rounded-xl p-6 bw-glass space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
                  <div>
                    <span className="text-xs font-mono text-zinc-500">{q.createdAt}</span>
                    <h3 className="text-lg font-bold text-white">{q.clientName} <span className="text-xs text-zinc-400 font-normal">({q.company})</span></h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <select
                      value={q.status}
                      onChange={(e) => updateQuoteStatus(q.id, e.target.value as any)}
                      className="bg-zinc-900 text-xs font-bold px-3 py-1.5 rounded border border-white/20 text-white focus:outline-none"
                    >
                      <option value="New">Status: New</option>
                      <option value="In Progress">Status: In Progress</option>
                      <option value="Contacted">Status: Contacted</option>
                      <option value="Closed">Status: Closed</option>
                    </select>

                    <button
                      onClick={() => handleDeleteQuote(q.id)}
                      className="p-1.5 rounded bg-zinc-900 border border-white/10 text-red-400 hover:text-red-300"
                      title="Delete Quote"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-zinc-500 uppercase font-bold text-[10px]">Contact Phone</span>
                    <div className="font-mono text-white font-bold">{q.phone}</div>
                  </div>
                  <div>
                    <span className="text-zinc-500 uppercase font-bold text-[10px]">Email Address</span>
                    <div className="text-white font-bold">{q.email}</div>
                  </div>
                  <div>
                    <span className="text-zinc-500 uppercase font-bold text-[10px]">Requested Category</span>
                    <div className="text-white font-bold">{q.serviceCategory}</div>
                  </div>
                </div>

                <div className="bg-zinc-900 p-3 rounded border border-white/10 text-xs space-y-1">
                  <span className="text-[10px] uppercase font-bold text-zinc-500">Project Requirements</span>
                  <p className="text-zinc-300 leading-relaxed">{q.requirements}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: PORTFOLIO MANAGEMENT */}
      {activeTab === 'portfolio' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">Live Portfolio Projects</h2>
            <button
              onClick={() => setShowAddPortfolio(true)}
              className="flex items-center gap-2 bg-white text-black font-extrabold px-4 py-2 rounded-lg text-xs hover:bg-zinc-200 transition"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Project</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item) => (
              <div key={item.id} className="bg-zinc-950 border border-white/10 rounded-xl overflow-hidden bw-glass p-4 space-y-3">
                <div className="aspect-video bg-zinc-900 rounded overflow-hidden">
                  <img src={item.coverImage} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] uppercase font-bold text-zinc-400">{item.category} • {item.client}</div>
                  <h3 className="font-bold text-sm text-white line-clamp-1">{item.title}</h3>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs">
                  <span className="text-zinc-500">{item.year}</span>
                  <button
                    onClick={() => handleDeletePortfolio(item.id)}
                    className="text-red-400 hover:text-red-300 flex items-center gap-1 font-bold"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add Portfolio Modal */}
          {showAddPortfolio && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <div className="w-full max-w-lg bg-zinc-950 border border-white/20 rounded-2xl p-6 bw-glass space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <h3 className="font-extrabold text-white">Add New Showcase Project</h3>
                  <button onClick={() => setShowAddPortfolio(false)} className="text-zinc-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleAddPortfolio} className="space-y-3 text-xs">
                  <div>
                    <label className="block text-zinc-400 font-bold uppercase mb-1">Project Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Al Bustan 3D Stainless Steel Signage"
                      value={newPortTitle}
                      onChange={(e) => setNewPortTitle(e.target.value)}
                      className="w-full bg-zinc-900 border border-white/10 rounded p-2.5 text-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-zinc-400 font-bold uppercase mb-1">Client Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Regus / Oasis"
                        value={newPortClient}
                        onChange={(e) => setNewPortClient(e.target.value)}
                        className="w-full bg-zinc-900 border border-white/10 rounded p-2.5 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-400 font-bold uppercase mb-1">Category</label>
                      <select
                        value={newPortCategory}
                        onChange={(e) => setNewPortCategory(e.target.value)}
                        className="w-full bg-zinc-900 border border-white/10 rounded p-2.5 text-white"
                      >
                        <option value="Signages">Signages</option>
                        <option value="Vehicle Wraps">Vehicle Wraps</option>
                        <option value="3D Laser Cut">3D Laser Cut</option>
                        <option value="Events">Events</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-zinc-400 font-bold uppercase mb-1">Image URL</label>
                    <input
                      type="text"
                      placeholder="https://images.unsplash.com/..."
                      value={newPortImg}
                      onChange={(e) => setNewPortImg(e.target.value)}
                      className="w-full bg-zinc-900 border border-white/10 rounded p-2.5 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 font-bold uppercase mb-1">Description</label>
                    <textarea
                      rows={3}
                      placeholder="Describe the scope, materials, and mounting engineering..."
                      value={newPortDesc}
                      onChange={(e) => setNewPortDesc(e.target.value)}
                      className="w-full bg-zinc-900 border border-white/10 rounded p-2.5 text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black font-extrabold py-3 rounded text-xs hover:bg-zinc-200 transition"
                  >
                    Save Project to Live Site
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: BLOG MANAGEMENT */}
      {activeTab === 'blog' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">Live Blog Articles</h2>
            <button
              onClick={() => setShowAddBlog(true)}
              className="flex items-center gap-2 bg-white text-black font-extrabold px-4 py-2 rounded-lg text-xs hover:bg-zinc-200 transition"
            >
              <Plus className="w-4 h-4" />
              <span>Create New Article</span>
            </button>
          </div>

          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-zinc-950 border border-white/10 rounded-xl p-4 bw-glass flex justify-between items-center gap-4">
                <div>
                  <div className="text-[10px] uppercase font-bold text-zinc-400">{post.category} • {post.date}</div>
                  <h3 className="font-bold text-sm text-white">{post.title}</h3>
                </div>

                <button
                  onClick={() => handleDeleteBlog(post.id)}
                  className="p-2 rounded bg-zinc-900 text-red-400 hover:text-red-300 border border-white/10"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Add Blog Modal */}
          {showAddBlog && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <div className="w-full max-w-lg bg-zinc-950 border border-white/20 rounded-2xl p-6 bw-glass space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <h3 className="font-extrabold text-white">Publish New Blog Article</h3>
                  <button onClick={() => setShowAddBlog(false)} className="text-zinc-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleAddBlog} className="space-y-3 text-xs">
                  <div>
                    <label className="block text-zinc-400 font-bold uppercase mb-1">Article Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. UV Printing Technology Trends in Muscat 2026"
                      value={newBlogTitle}
                      onChange={(e) => setNewBlogTitle(e.target.value)}
                      className="w-full bg-zinc-900 border border-white/10 rounded p-2.5 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 font-bold uppercase mb-1">Category</label>
                    <select
                      value={newBlogCategory}
                      onChange={(e) => setNewBlogCategory(e.target.value)}
                      className="w-full bg-zinc-900 border border-white/10 rounded p-2.5 text-white"
                    >
                      <option value="Signage & Architecture">Signage & Architecture</option>
                      <option value="Vehicle Wraps">Vehicle Wraps</option>
                      <option value="Branding & Design">Branding & Design</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-zinc-400 font-bold uppercase mb-1">Excerpt Summary</label>
                    <input
                      type="text"
                      placeholder="Brief 2-sentence summary..."
                      value={newBlogExcerpt}
                      onChange={(e) => setNewBlogExcerpt(e.target.value)}
                      className="w-full bg-zinc-900 border border-white/10 rounded p-2.5 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 font-bold uppercase mb-1">Article Body Content</label>
                    <textarea
                      rows={4}
                      placeholder="Write paragraph paragraphs separated by double line breaks..."
                      value={newBlogContent}
                      onChange={(e) => setNewBlogContent(e.target.value)}
                      className="w-full bg-zinc-900 border border-white/10 rounded p-2.5 text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black font-extrabold py-3 rounded text-xs hover:bg-zinc-200 transition"
                  >
                    Publish Article to Live Site
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 4: SERVICES LIST */}
      {activeTab === 'services' && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">Active Services Catalogue</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((srv) => (
              <div key={srv.id} className="bg-zinc-950 border border-white/10 rounded-xl p-4 bw-glass space-y-2">
                <div className="font-bold text-sm text-white">{srv.title}</div>
                <div className="text-xs text-zinc-400">{srv.shortDesc}</div>
                <div className="text-[10px] font-mono text-zinc-500 pt-2 border-t border-white/10">Range: {srv.estimatedPriceRange}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
