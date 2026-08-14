import React, { useState, useEffect } from 'react';
import { ActiveTab, ServiceItem, PortfolioItem, BlogPost, QuoteRequest } from './types';
import { 
  INITIAL_SERVICES, 
  INITIAL_PORTFOLIO, 
  INITIAL_BLOG_POSTS, 
  INITIAL_QUOTES 
} from './data/mockData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { ServicesView } from './components/ServicesView';
import { PortfolioView } from './components/PortfolioView';
import { BlogView } from './components/BlogView';
import { BlogDetailView } from './components/BlogDetailView';
import { AdminPanel } from './components/AdminPanel';
import { ContactView } from './components/ContactView';
import { QuoteModal } from './components/QuoteModal';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { ScrollToTopButton } from './components/ScrollToTopButton';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('impaact_theme');
    return saved ? saved === 'dark' : true;
  });

  // LocalStorage state management
  const [services, setServices] = useState<ServiceItem[]>(() => {
    const saved = localStorage.getItem('impaact_services');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= INITIAL_SERVICES.length) {
          return parsed;
        }
      } catch (e) {
        console.error('Failed to parse saved services, falling back to INITIAL_SERVICES', e);
      }
    }
    return INITIAL_SERVICES;
  });

  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(() => {
    const saved = localStorage.getItem('impaact_portfolio');
    return saved ? JSON.parse(saved) : INITIAL_PORTFOLIO;
  });

  const [posts, setPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('impaact_posts');
    return saved ? JSON.parse(saved) : INITIAL_BLOG_POSTS;
  });

  const [quotes, setQuotes] = useState<QuoteRequest[]>(() => {
    const saved = localStorage.getItem('impaact_quotes');
    return saved ? JSON.parse(saved) : INITIAL_QUOTES;
  });

  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost>(INITIAL_BLOG_POSTS[0]);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteDetails, setQuoteDetails] = useState('');

  // Save to LocalStorage on updates
  useEffect(() => {
    localStorage.setItem('impaact_services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('impaact_portfolio', JSON.stringify(portfolio));
  }, [portfolio]);

  useEffect(() => {
    localStorage.setItem('impaact_posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('impaact_quotes', JSON.stringify(quotes));
  }, [quotes]);

  useEffect(() => {
    localStorage.setItem('impaact_theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleOpenQuoteModal = () => {
    setQuoteDetails('');
    setQuoteModalOpen(true);
  };

  const handleOpenQuoteModalWithDetails = (details: string) => {
    setQuoteDetails(details);
    setQuoteModalOpen(true);
  };

  const handleAddQuoteRequest = (newQuote: QuoteRequest) => {
    setQuotes([newQuote, ...quotes]);
  };

  const handleSelectBlogPost = (post: BlogPost) => {
    setSelectedBlogPost(post);
    setActiveTab('blog-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to top on active tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className={`min-h-screen flex flex-col font-sans relative transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-[#121316] text-[#f4f4f6] selection:bg-[#d62828] selection:text-white' 
        : 'bg-[#f3f4f6] text-[#18191e] selection:bg-[#18191e] selection:text-white'
    }`}>
      {/* Scroll Progress Bar at Top */}
      <ScrollProgressBar />

      {/* Floating Scroll To Top Button */}
      <ScrollToTopButton />

      {/* Dynamic Animated Background */}
      {isDarkMode && <AnimatedBackground />}

      {/* Header Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuoteModal={handleOpenQuoteModal}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      {/* Main Content Pages */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeView
            services={services}
            portfolio={portfolio}
            setActiveTab={setActiveTab}
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenQuoteModalWithDetails={handleOpenQuoteModalWithDetails}
            isDarkMode={isDarkMode}
          />
        )}

        {activeTab === 'about' && (
          <AboutView
            setActiveTab={setActiveTab}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {activeTab === 'services' && (
          <ServicesView
            services={services}
            setActiveTab={setActiveTab}
            onOpenQuoteModalWithDetails={handleOpenQuoteModalWithDetails}
          />
        )}

        {activeTab === 'portfolio' && (
          <PortfolioView
            portfolio={portfolio}
            setActiveTab={setActiveTab}
            onOpenQuoteModalWithDetails={handleOpenQuoteModalWithDetails}
          />
        )}

        {activeTab === 'blog' && (
          <BlogView
            posts={posts}
            onSelectPost={handleSelectBlogPost}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'blog-detail' && (
          <BlogDetailView
            post={selectedBlogPost}
            setActiveTab={setActiveTab}
            allPosts={posts}
            onSelectPost={handleSelectBlogPost}
          />
        )}

        {activeTab === 'admin' && (
          <AdminPanel
            portfolio={portfolio}
            setPortfolio={setPortfolio}
            posts={posts}
            setPosts={setPosts}
            services={services}
            setServices={setServices}
            quotes={quotes}
            setQuotes={setQuotes}
          />
        )}

        {activeTab === 'contact' && (
          <ContactView
            onAddQuoteRequest={handleAddQuoteRequest}
            setActiveTab={setActiveTab}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenQuoteModal={handleOpenQuoteModal}
        isDarkMode={isDarkMode}
      />

      {/* Global Quote Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialRequirements={quoteDetails}
        onAddQuoteRequest={handleAddQuoteRequest}
      />
    </div>
  );
}
