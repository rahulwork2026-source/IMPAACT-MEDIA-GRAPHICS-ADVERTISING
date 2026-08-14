export type ActiveTab = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'portfolio' 
  | 'blog' 
  | 'blog-detail' 
  | 'admin' 
  | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'signage' | 'wrapping' | 'printing' | 'branding' | 'marketing' | 'events' | '3d-printing' | 'digital-media' | 'print-management' | string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  iconName: string;
  badge?: string;
  image: string;
  estimatedPriceRange: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  client: string;
  location: string;
  year: string;
  coverImage: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  excerpt: string;
  content: string[]; // Array of full paragraphs and section headers for rich view
  tags: string[];
  image: string;
  featured?: boolean;
  likes: number;
}

export interface QuoteRequest {
  id: string;
  clientName: string;
  email: string;
  phone: string;
  company?: string;
  serviceCategory: string;
  requirements: string;
  estimatedBudget: string;
  status: 'New' | 'In Progress' | 'Contacted' | 'Closed';
  createdAt: string;
}

export interface Comment {
  id: string;
  postId: string;
  author: string;
  text: string;
  date: string;
}
