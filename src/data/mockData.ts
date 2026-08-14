import { ServiceItem, PortfolioItem, BlogPost, QuoteRequest } from '../types';

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'srv-3d-printing',
    title: '3D Printing',
    shortDesc: 'Custom additive 3D printing for architectural scale models, industrial prototypes, promotional items, and 3D dimensional lettering.',
    fullDesc: 'High-precision SLA & FDM 3D printing using durable polymers and composite resins. Perfect for architectural mockups, rapid product prototypes, custom trophy components, and intricate 3D brand displays in Oman.',
    features: [
      'Architectural Scale Models & Topo Prints',
      'Industrial Prototype & Product Engineering',
      'Custom 3D Promotional Items & Trophies',
      'High-Resolution Polymer Resins & Filament',
      'Precision Post-Processing, Sanding & Painting'
    ],
    image: '/images/service1.png?v=20260814',
    category: '3d-printing',
    iconName: 'Sparkles',
    estimatedPriceRange: 'OMR 25 - 500+',
  },
  {
    id: 'srv-social-marketing',
    title: 'Social Media Marketing',
    shortDesc: 'Data-driven social media campaign management, content creation, audience engagement, and targeted paid advertising across GCC platforms.',
    fullDesc: 'Elevate your brand presence across Instagram, LinkedIn, TikTok, and Facebook. Our dedicated social team handles bilingual content creation (Arabic & English), reels, ad campaign optimization, and monthly performance analytics.',
    features: [
      'Bilingual Content Creation (Arabic & English)',
      'Reels & Video Content Strategy',
      'Targeted Paid Ad Campaign Management',
      'Community Management & Response Handling',
      'Monthly Performance Analytics & Reporting'
    ],
    image: '/images/service2.png?v=20260814',
    category: 'marketing',
    iconName: 'Layout',
    estimatedPriceRange: 'OMR 150 - 800 / month',
  },
  {
    id: 'srv-brand-naming',
    title: 'Brand Naming',
    shortDesc: 'Strategic, culturally relevant brand naming, tagline development, domain verification, and trademark checking for businesses in Oman.',
    fullDesc: 'Create a resonant name that stands out in the GCC market. We combine linguistic analysis, cultural fit in Oman, trademark pre-checks, and commercial appeal to craft brand names that leave a lasting legacy.',
    features: [
      'Bilingual Naming Strategy (Arabic & English)',
      'Trademark & MOCI Pre-Verification',
      'Domain & Social Handle Availability',
      'Brand Story & Positioning Framework',
      'Tagline & Slogan Creation'
    ],
    image: '/images/service3.png?v=20260814',
    category: 'branding',
    iconName: 'Palette',
    estimatedPriceRange: 'OMR 120 - 350',
  },
  {
    id: 'srv-logo-design',
    title: 'Logo Design',
    shortDesc: 'Custom vector logo design, iconic brand marks, typography selection, and comprehensive brand identity style guides.',
    fullDesc: 'Crafted by seasoned graphic designers, our logos embody your company\'s core values. Delivered in full scalable vector formats with dark/light variations, sub-marks, color system definitions, and usage rules.',
    features: [
      'Bespoke Vector Logo Marks & Sub-marks',
      'Full Primary & Secondary Logo Suite',
      'Brand Color System & Typography Guidelines',
      'Dark & Light Background Adaptations',
      'Master Files Delivered (AI, EPS, SVG, PNG, PDF)'
    ],
    image: '/images/service4.png?v=20260814',
    category: 'branding',
    iconName: 'Palette',
    estimatedPriceRange: 'OMR 75 - 500',
  },
  {
    id: 'srv-eflyers',
    title: 'E-Flyers',
    shortDesc: 'High-converting digital promotional flyers, WhatsApp graphics, mobile promo cards, and interactive event announcements.',
    fullDesc: 'Captivate mobile audiences instantly. Optimized specifically for WhatsApp broadcasting, Instagram stories, and email newsletters with crystal clear typography and eye-catching visual hierarchy.',
    features: [
      'WhatsApp Broadcast & Social Media Optimized',
      'High-Resolution Mobile Graphics',
      'Animated GIF & MP4 Reel Options',
      'Quick 24-Hour Express Turnaround',
      'Bilingual Layout Formatting (Arabic/English)'
    ],
    image: '/images/service5.png?v=20260814',
    category: 'digital-media',
    iconName: 'Layout',
    estimatedPriceRange: 'OMR 15 - 100',
  },
  {
    id: 'srv-signages',
    title: 'Signages',
    shortDesc: '3D LED backlit letters, rooftop building signs, acrylic lightboxes, neon flex, and monumental outdoor architectural signages.',
    fullDesc: 'Oman\'s premier signage fabrication. Using 3D channel letter benders, weather-proof outdoor LEDs, stainless steel 316 casings, and heavy-duty structural steel frames engineered for desert heat and coastal conditions.',
    features: [
      '3D LED Frontlit & Backlit Channel Letters',
      'Heavy-Duty Rooftop Building Signs',
      'Acrylic Lightboxes & Flexface Display Signs',
      'Neon Flex & Architectural Accent Lighting',
      'MOCI Approvals & Structural Engineering'
    ],
    image: '/images/service6.png?v=20260814',
    category: 'signage',
    iconName: 'Sparkles',
    estimatedPriceRange: 'OMR 150 - 5,000+',
  },
  {
    id: 'srv-vehicle-wraps',
    title: 'Vehicle Wraps',
    shortDesc: 'Full commercial fleet wraps, partial van graphics, luxury color change wraps, and UV-laminated protective vinyls.',
    fullDesc: 'Turn your delivery fleet into high-impact mobile billboards. We use premium 3M & Avery Dennison cast vinyls laminated against Oman solar radiation, installed by certified wrap technicians in our climate-controlled bay.',
    features: [
      'Full & Partial Commercial Fleet Wraps',
      '3M & Avery Dennison Premium Cast Vinyl',
      'UV Radiation & Scratch Lamination',
      'Reflective Safety Fleet Striping',
      'Seamless Paint-Safe Vinyl Removal'
    ],
    image: '/images/service7.png?v=20260814',
    category: 'wrapping',
    iconName: 'Car',
    estimatedPriceRange: 'OMR 80 - 1,500+',
  },
  {
    id: 'srv-3d-laser-cut',
    title: '3D Laser Cut',
    shortDesc: 'Fiber laser cutting for stainless steel, brass, aluminum, acrylic, wood, and architectural perforated metal screens.',
    fullDesc: 'High-power fiber laser cutting delivering micron-level accuracy on metal sheets up to 20mm thick. Ideal for decorative wall partitions, 3D metal logos, custom hotel screens, and industrial components.',
    features: [
      'Fiber Laser Metal Cutting (SS, Brass, Aluminum)',
      'CO2 Precision Cutting for Acrylic & Wood',
      'Decorative Architectural Wall Screens & Partitions',
      'Micron Tolerances with Smooth Edge Finishing',
      'Custom Metal Fabrication & Powder Coating'
    ],
    image: '/images/service8.png?v=20260814',
    category: 'signage',
    iconName: 'Sparkles',
    estimatedPriceRange: 'OMR 25 - 1,000+',
  },
  {
    id: 'srv-engraving',
    title: 'Engraving',
    shortDesc: 'Chemical, rotary, and laser engraving on brass plates, stainless steel plaques, wooden awards, and corporate trophies.',
    fullDesc: 'Permanent, high-detail engraving for VIP door plates, executive desk nameplates, industrial machine tags, hotel room numbers, and commemorative award plaques with enamel color fill.',
    features: [
      'Brass & Stainless Steel Plaque Engraving',
      'Deep Rotary CNC & Fiber Laser Engraving',
      'Enamel Color Filling & Black Oxidation',
      'Wooden & Crystal Award Customization',
      'Industrial Metal Machine Rating Plates'
    ],
    image: '/images/service9.png?v=20260814',
    category: 'printing',
    iconName: 'Printer',
    estimatedPriceRange: 'OMR 10 - 300+',
  },
  {
    id: 'srv-uv-printing',
    title: 'UV Printing',
    shortDesc: 'Direct-to-substrate UV flatbed printing on glass, wood, acrylic, ceramic tiles, aluminum composite, and phone cases.',
    fullDesc: 'Instant UV-cured printing that bonds directly to any rigid surface up to 100mm thick. Features white ink printing for transparent acrylics, raised varnish 3D textures, and vibrant fade-resistant colors.',
    features: [
      'Direct Flatbed Substrate Printing (Rigid & Flexible)',
      'Raised 3D Varnish & Gloss Highlight Effects',
      'White Ink Layering for Clear Acrylic & Glass',
      'Weatherproof Outdoor UV Cured Inks',
      'High-Volume Commercial Production'
    ],
    image: '/images/service10.png?v=20260814',
    category: 'printing',
    iconName: 'Printer',
    estimatedPriceRange: 'OMR 20 - 750+',
  },
  {
    id: 'srv-billboards',
    title: 'Billboards & Site Signs',
    shortDesc: 'Heavy-duty outdoor highway billboards, hoarding construction signs, unipoles, and perimeter graphics.',
    fullDesc: 'Command maximum attention across Oman\'s major highways and development sites. From sturdy steel unipole structures to site perimeter hoarding vinyls that showcase upcoming real estate projects.',
    features: [
      'Highway Unipole Billboard Fabrication',
      'Construction Site Hoarding Wraps & Fencing',
      'Heavy-Duty Steel Structural Engineering',
      'High-Tension Weatherproof Mesh & Vinyl Banners',
      'Illuminated LED Floodlight Lighting Setup'
    ],
    image: '/images/service11.png?v=20260814',
    category: 'signage',
    iconName: 'Sparkles',
    estimatedPriceRange: 'OMR 250 - 10,000+',
  },
  {
    id: 'srv-pullup-banners',
    title: 'Pull Up & Flag Banners',
    shortDesc: 'Portable rollup pull-up banners, teardrop flags, feather banners, pop-up backdrops, and event display stands.',
    fullDesc: 'Lightweight, highly portable display solutions for trade shows, retail entrances, and corporate events. Built with heavy aluminum bases and non-curling matte blockout film prints.',
    features: [
      'Premium Heavy Aluminum Base Rollup Banners',
      'Teardrop & Feather Outdoor Flag Hardware',
      'Non-Curling Anti-Glare Matte Blockout Film',
      'Padded Travel Carrying Bags Included',
      'Double-Sided Printing Capabilities'
    ],
    image: '/images/service12.png?v=20260814',
    category: 'events',
    iconName: 'Layout',
    estimatedPriceRange: 'OMR 15 - 400+',
  },
  {
    id: 'srv-directional-signs',
    title: 'Directional Signs',
    shortDesc: 'Architectural wayfinding systems, hospital/hotel floor directories, braille ADA signs, and outdoor directional pylons.',
    fullDesc: 'Ensure effortless navigation across commercial towers, hospitals, malls, and university campuses. Designed following international wayfinding standards with modular interchangeable inserts.',
    features: [
      'Modular Architectural Wayfinding Directories',
      'Tactile Braille & Raised Letter ADA Signs',
      'Illuminated & Non-Illuminated Pylons',
      'Emergency Evacuation Route Maps',
      'Interchangeable Sliding Nameplate Panels'
    ],
    image: '/images/service13.png?v=20260814',
    category: 'signage',
    iconName: 'Sparkles',
    estimatedPriceRange: 'OMR 50 - 2,000+',
  },
  {
    id: 'srv-brochures',
    title: 'Brochures & Catalogues',
    shortDesc: 'Executive multi-page corporate brochures, product catalogues, foil-stamped profile books, and custom die-cut folders.',
    fullDesc: 'Tangible sales tools that command trust. Choose from luxury textured papers, spot UV gloss highlights, metallic hot foil stamping, soft-touch matte lamination, and PUR perfect binding.',
    features: [
      'Multi-Page Corporate Profile Books & Catalogues',
      'Spot UV & Gold/Silver Hot Foil Stamping',
      'Soft-Touch Matte & Velvet Lamination',
      'Perfect Bound, Saddle Stitch, or Wire-O Binding',
      'Premium FSC Certified Luxury Paper Stocks'
    ],
    image: '/images/service14.png?v=20260814',
    category: 'printing',
    iconName: 'Printer',
    estimatedPriceRange: 'OMR 75 - 1,500+',
  },
  {
    id: 'srv-video-photo',
    title: 'Video & Photography',
    shortDesc: 'Corporate video production, drone aerial videography, factory showcase shoots, product photography, and event coverage.',
    fullDesc: 'High-definition 4K video storytelling and commercial photography. Perfect for showcasing completed signage installations, factory operations, corporate profiles, and promotional ad commercials.',
    features: [
      '4K Cinema Video Production & Editing',
      'Licensed Drone Aerial Videography',
      'Studio & On-Location Product Photography',
      'Professional Color Grading & Sound Design',
      'Royalty-Free Commercial Audio & Voiceovers'
    ],
    image: '/images/service15.png?v=20260814',
    category: 'digital-media',
    iconName: 'Video',
    estimatedPriceRange: 'OMR 150 - 2,500+',
  },
  {
    id: 'srv-mall-branding',
    title: 'Mall Branding',
    shortDesc: 'Mall atrium hanging banners, escalator graphics, pillar wraps, elevator door vinyls, and store kiosk branding.',
    fullDesc: 'Capture shopper footfall in Muscat\'s top retail malls. We handle end-to-end mall management approvals, night-shift installation, removable non-damaging adhesive vinyls, and high-impact visual banners.',
    features: [
      'Atrium Suspended Lightbox Banners',
      'Escalator & Elevator Glass Vinyl Wraps',
      'Mall Kiosk & Retail Front Graphics',
      'Mall Management Compliant Night Shift Install',
      'Removable Non-Residual Architectural Vinyl'
    ],
    image: '/images/service16.png?v=20260814',
    category: 'branding',
    iconName: 'Layout',
    estimatedPriceRange: 'OMR 200 - 5,000+',
  },
  {
    id: 'srv-corp-stationery',
    title: 'Corporate Stationery',
    shortDesc: 'Complete corporate stationery kits, letterheads, presentation folders, envelopes, rubber stamps, and ID cards.',
    fullDesc: 'Project professionalism in every client interaction. We print complete matching stationery sets on premium paper with unified brand color management across offset and digital runs.',
    features: [
      'Custom Presentation Folders with Pocket',
      'Official Letterheads (Print & Word Template)',
      'C4, C5, DL Branded Envelopes',
      'Employee PVC ID Cards & Lanyards',
      'Self-Inking Corporate Rubber Stamps'
    ],
    image: '/images/service17.png?v=20260814',
    category: 'printing',
    iconName: 'Printer',
    estimatedPriceRange: 'OMR 50 - 1,000+',
  },
  {
    id: 'srv-print-mgmt',
    title: 'Print Management',
    shortDesc: 'End-to-end commercial print procurement, color calibration, bulk offset printing, quality control, and doorstep delivery in Oman.',
    fullDesc: 'Eliminate printing errors and vendor stress. We manage your entire corporate print supply chain, ensuring strict Pantone color matching, stock selection, press proof approvals, and scheduled delivery.',
    features: [
      'Offset & High-Speed Digital Print Supervision',
      'Strict Pantone Color Proofing & Calibration',
      'Bulk Inventory Stock Management',
      'Custom Die-Cutting & Finishing Supervision',
      'Reliable Doorstep Delivery Across Oman'
    ],
    image: '/images/service18.png?v=20260814',
    category: 'print-management',
    iconName: 'Printer',
    estimatedPriceRange: 'Custom quote',
  },
  {
    id: 'srv-business-stationery',
    title: 'Business Stationery',
    shortDesc: 'Luxury business cards with thick cotton stocks, painted edges, raised spot UV, metallic foil, and NFC digital integration.',
    fullDesc: 'Make an unforgettable first impression. From 600gsm ultra-thick cotton business cards to sleek velvet-touch cards with metallic foil accents and embedded smart NFC tap technology.',
    features: [
      'Thick 400gsm to 700gsm Premium Stocks',
      'Gold, Silver & Rose Gold Hot Foil',
      'Raised Spot UV & Embossed Logos',
      'Coloured Edge Painting & Gilding',
      'Embedded Smart NFC Chip Integration'
    ],
    image: '/images/service19.png?v=20260814',
    category: 'printing',
    iconName: 'Printer',
    estimatedPriceRange: 'OMR 20 - 250+',
  },
  {
    id: 'srv-menu-printing',
    title: 'Menu Printing',
    shortDesc: 'Waterproof restaurant menus, synthetic tear-proof sheets, leather menu covers, table tents, and illuminated LED menus.',
    fullDesc: 'Built to withstand heavy daily handling and liquid spills in busy restaurants and cafes. Printed on synthetic non-tear washable paper or encased in custom debossed leatherette covers.',
    features: [
      '100% Waterproof & Washable Synthetic Paper',
      'Heavy Heat-Sealed Rigid Lamination',
      'Debossed Leather & Acrylic Menu Covers',
      'Backlit LED Slim Menu Boards',
      'QR Code Digital Menu Integration'
    ],
    image: '/images/service20.png?v=20260814',
    category: 'printing',
    iconName: 'Printer',
    estimatedPriceRange: 'OMR 25 - 500+',
  },
  {
    id: 'srv-logo-animation',
    title: 'Logo Animation',
    shortDesc: '3D motion graphics, animated logo intro stings, 4K video bumpers, social media idents, and digital display animations.',
    fullDesc: 'Bring your brand mark to life with fluid 3D motion dynamics. Perfect for YouTube intros, corporate video headers, digital LED billboard screens, and Instagram stories.',
    features: [
      '3D Motion Graphics & Particle Effects',
      '4K Ultra HD & Transparent Video Export',
      'Custom Sound Design & Audio Stings',
      'Multiple Aspect Ratios (16:9, 9:16, 1:1)',
      'Looping GIF & MP4 Delivery'
    ],
    image: '/images/service21.png?v=20260814',
    category: 'digital-media',
    iconName: 'Video',
    estimatedPriceRange: 'OMR 75 - 600',
  },
  {
    id: 'srv-email-signatures',
    title: 'Email Signatures',
    shortDesc: 'Clickable HTML email signatures with responsive layouts, promotional banners, social links, and Outlook/Gmail compatibility.',
    fullDesc: 'Standardize your company\'s email communications. We code clean, responsive HTML signatures that work flawlessly across Outlook, Apple Mail, Gmail, and mobile mail apps.',
    features: [
      'Clickable Phone, Email & Website Links',
      'Integrated Social Media Icons',
      'Promotional Banner Slot Support',
      'Cross-Platform Mobile & Desktop Testing',
      'Easy Company-Wide Deployment Guide'
    ],
    image: '/images/service22.png?v=20260814',
    category: 'digital-media',
    iconName: 'Layout',
    estimatedPriceRange: 'OMR 15 - 100',
  },
  {
    id: 'srv-websites',
    title: 'Websites',
    shortDesc: 'Modern responsive corporate websites, high-converting landing pages, digital portfolios, and CMS solutions for Oman businesses.',
    fullDesc: 'Fast, ultra-sleek, mobile-first web applications built with modern frameworks. Complete with SEO optimization, WhatsApp lead integration, contact forms, and bilingual Arabic/English support.',
    features: [
      'Responsive Mobile-First Architecture',
      'Fast Loading Speeds & Clean Code',
      'Bilingual Arabic & English Readiness',
      'WhatsApp & Instant Quote Forms Integration',
      'SEO Optimized for GCC Search Engines'
    ],
    image: '/images/service23.png?v=20260814',
    category: 'digital-media',
    iconName: 'Layout',
    estimatedPriceRange: 'OMR 250 - 3,000+',
  }
];

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Modern Backlit Architectural Lobby Totem',
    category: 'Signages',
    client: 'Regus Oman',
    location: 'Muscat, Oman',
    year: '2025',
    coverImage: '/images/Portfolio1.png',
    description: 'Design, fabrication, and high-altitude installation of heavy-duty backlit lobby totems and 3D LED channel letters for commercial towers.',
    tags: ['Rooftop Signage', '3D LED', 'Backlit Totem', 'Architectural'],
    featured: true
  },
  {
    id: 'port-2',
    title: '3D Printed Architectural Scale Models',
    category: '3D Printing',
    client: 'Oasis Oman',
    location: 'Oman Convention & Exhibition Centre',
    year: '2025',
    coverImage: '/images/portfolio2.png',
    description: 'Precision 3D printed architectural scale models, complex lattice geometry, prototype product designs, and custom acrylic structures.',
    tags: ['3D Printing', 'Scale Models', 'Prototyping', 'Architectural'],
    featured: true
  },
  {
    id: 'port-3',
    title: 'Averda Commercial Fleet & Vehicle Wraps',
    category: 'Vehicle Wraps',
    client: 'Averda Environmental Services',
    location: 'Sultanate of Oman',
    year: '2024',
    coverImage: '/images/Portfolio3.png',
    description: 'Full vinyl fleet wrapping for commercial utility trucks and luxury vehicles with vibrant UV-laminated geometric graphics.',
    tags: ['Fleet Wrap', 'UV Vinyl', 'Reflective Safety', 'Vehicle Wrapping'],
    featured: true
  },
  {
    id: 'port-4',
    title: 'Large Format UV Direct-To-Substrate Printing',
    category: 'Printing',
    client: 'Hills Avenue Retail',
    location: 'Muscat Mall',
    year: '2025',
    coverImage: '/images/Portfolio4.png',
    description: 'Architectural mall front branding featuring ultra-slim backlit LED panels, acrylic dimensional lettering, and wayfinding safety signs.',
    tags: ['Mall Branding', 'Backlit Signs', 'Acrylic 3D', 'Retail'],
    featured: true
  },
  {
    id: 'port-5',
    title: '3D Laser Cut Stainless Steel Engraving',
    category: '3D Laser Cut',
    client: 'Al Bustan Palace Hotel',
    location: 'Muscat, Oman',
    year: '2024',
    coverImage: '/images/Portfolio5.png',
    description: 'Precision fiber laser cutting and fiber chemical engraving on brushed brass and 316-grade stainless steel directional hotel plates.',
    tags: ['3D Laser Cut', 'Engraving', 'Stainless Steel', 'Hospitality'],
    featured: false
  },
  {
    id: 'port-6',
    title: 'Luxury Product & Vending Machine Wrapping',
    category: 'Vehicle Wraps',
    client: 'EcoRecycle Oman',
    location: 'Muscat International Airport',
    year: '2025',
    coverImage: '/images/Portfolio6.png',
    description: 'Seamless vinyl graphic wrapping of automated smart reverse vending stations with custom die-cut matte graphics and anti-scratch coating.',
    tags: ['Product Wrapping', 'Airport Installation', 'Matte Vinyl', 'Die-Cut'],
    featured: false
  }
];

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'power-of-3d-led-signage-oman',
    title: 'The Power of 3D LED Signage in Modern Brand Visibility Across Oman',
    category: 'Signage & Architecture',
    author: {
      name: 'Impaact Creative Team',
      role: 'Senior Signage Engineers',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    },
    date: 'August 2, 2026',
    readTime: '6 min read',
    excerpt: 'In the competitive commercial landscapes of Muscat and beyond, 3D LED signages are no longer optional—they are the cornerstone of 24/7 exterior brand presence.',
    content: [
      'In today’s fast-evolving Omani business landscape, first impressions are created long before a customer walks through your front door. Exterior architectural signages serve as the silent ambassador of your visual brand, working tirelessly day and night.',
      'Why 3D LED Over Flat Panel Signs?',
      'Flat signage panels often blend into background urban clutter, especially in high-density commercial areas like Qurum, Ruwi, or Seeb. 3D LED illuminated channel letters deliver depth, shadow play, and light luminance that commands immediate optical attention.',
      '1. Superior Nighttime Visibility: High-lumen LED modules installed inside fabricated acrylic or stainless steel housings ensure your brand glows crisp and clear, even during adverse dust storms or intense dark ambient conditions.',
      '2. Thermal Resistance & Durability: Oman’s summer temperatures frequently exceed 45°C. At IMPAACT MEDIA, we utilize aircraft-grade aluminum, anti-UV acrylics, and ip67-rated waterproof LEDs to ensure zero fading, warping, or electrical degradation.',
      '3. Energy Efficiency: Modern 12V LED drivers consume up to 80% less energy than legacy neon or halogen tubes, making illuminated 3D signages both environmentally responsible and economically smart.',
      'Key Fabrication Steps for Perfection',
      'Fabricating a premium rooftop or storefront 3D LED signage involves a tight 4-stage process:',
      '- Stage 1: Vector CAD modeling and structural wind-load calculation.',
      '- Stage 2: High-precision CNC laser cutting of face acrylic and stainless steel return walls.',
      '- Stage 3: Hand-soldering internal LED matrices with optical diffusion lenses to avoid dark spots.',
      '- Stage 4: On-site crane installation with structural steel framing and weatherproof electrical sealing.',
      'Summary & Recommendation',
      'Investing in a high-grade 3D LED signage yields one of the highest returns on physical marketing assets. With over 20 years of expertise in Oman, IMPAACT MEDIA continues to elevate brand skylines with landmark installations.'
    ],
    tags: ['3D LED Signage', 'Oman Architecture', 'Branding Strategy', 'LED Lighting'],
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=1200',
    featured: true,
    likes: 42
  },
  {
    id: 'post-2',
    slug: 'vehicle-wrapping-fleet-graphics-guide',
    title: 'Vehicle Wrapping & Commercial Fleet Graphics: The Ultimate Maintenance & Design Guide',
    category: 'Vehicle Wraps',
    author: {
      name: 'Wrap Tech Masters',
      role: 'Automotive Vinyl Specialists',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    date: 'July 28, 2026',
    readTime: '8 min read',
    excerpt: 'Transforming commercial utility vehicles into high-impact mobile billboards requires precision vinyl wrapping techniques and proper thermal care.',
    content: [
      'Commercial fleet wrapping is widely recognized as having the lowest cost-per-thousand impressions (CPM) of any out-of-home advertising medium. A single wrapped delivery van traveling around Muscat generates between 30,000 to 70,000 visual impressions daily.',
      'Selecting the Right Vinyl: Cast vs. Calendered',
      'Not all vinyl wraps are created equal. Using cheap calendered film on complex vehicle curves inevitably leads to shrinking, peeling, and glue residue damage.',
      'At IMPAACT MEDIA, we exclusively specify premium dual-cast PVC films paired with optical UV gloss or matte over-laminates. Cast vinyl possesses no internal memory, allowing it to stretch smoothly over deep door handles, rivets, and bumper contours without lifting over time.',
      'Essential Design Principles for Mobile Ads',
      '1. High Contrast Typography: Drivers and pedestrians only have 3 to 5 seconds to digest your message. Use high contrast black and white or vibrant primary tones with large legibility.',
      '2. Focal Point Hierarchy: Your company name, core service (e.g., "3D Signage & Wrapping"), and primary contact phone/QR code must lead the visual hierarchy.',
      '3. Seamless Door & Window Alignment: Keep critical logos and phone numbers clear of door handles, fuel caps, and sliding window seals.',
      'Post-Installation Care in GCC Climate',
      'To ensure your wrap lasts 5+ years in Oman’s sunny climate:',
      '- Hand wash vehicles with pH-neutral soap rather than automated brush car washes.',
      '- Avoid high-pressure water spray closer than 30cm to vinyl seams and window edges.',
      '- Apply a ceramic wrap detail spray quarterly to nourish the UV laminate barrier.'
    ],
    tags: ['Vehicle Wrapping', 'Fleet Graphics', 'Vinyl Care', 'Mobile Advertising'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
    featured: false,
    likes: 38
  },
  {
    id: 'post-3',
    slug: 'make-it-simple-but-significant-philosophy',
    title: '“Make it Simple, But Significant”: Why Minimalist Graphic Design Dominates Modern Advertising',
    category: 'Branding & Design',
    author: {
      name: 'Design Studio Director',
      role: 'Lead Brand Strategist',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    },
    date: 'July 15, 2026',
    readTime: '5 min read',
    excerpt: 'How stripping away visual noise and focusing on bold typography and purposeful layout elevates luxury brand perception.',
    content: [
      'The legendary quote "Make it simple, but significant" serves as the guiding tagline for IMPAACT MEDIA GRAPHICS & ADVERTISING. In an era saturated with visual noise, simplicity is the ultimate sophistication.',
      'The Cognitive Overload of Over-Designed Ads',
      'When an advertisement attempts to communicate six different key messages simultaneously with glowing gradients, multiple fonts, and chaotic imagery, the human brain filters it out as spam.',
      'Simplicity forces clarity. By narrowing down a brand campaign to a single powerful headline, an iconic mark, and pristine negative space, you create an effortless path to memory retention.',
      'The Role of Typography & Monochrome Contrast',
      'Typography is the heartbeat of graphic design. Clean, geometric sans-serif typefaces paired with high-contrast black and white palettes communicate strength, authority, and timeless luxury.',
      'Whether designing corporate stationery, a digital e-flyer, or a 10-meter outdoor billboard, adhering to disciplined grid mathematics ensures that every element feels intentional and significant.'
    ],
    tags: ['Brand Philosophy', 'Graphic Design', 'Minimalism', 'Typography'],
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200',
    featured: false,
    likes: 56
  }
];

export const INITIAL_QUOTES: QuoteRequest[] = [
  {
    id: 'q-101',
    clientName: 'Sultan Al-Harthy',
    email: 'sultan@omantech.om',
    phone: '+968 9876 5432',
    company: 'Oman Tech Solutions',
    serviceCategory: '3D LED & Architectural Signages',
    requirements: 'Need 3D LED backlit rooftop signage for our new 4-storey office building in Al Khuwair. Approx 6m x 1.5m.',
    estimatedBudget: 'OMR 1,500 - 2,500',
    status: 'New',
    createdAt: '2026-08-04'
  },
  {
    id: 'q-102',
    clientName: 'Fatima Al-Zahra',
    email: 'fatima@oasisoman.com',
    phone: '+968 9123 4567',
    company: 'Oasis Beverages',
    serviceCategory: 'Vehicle & Product Wrapping',
    requirements: 'Full vinyl wrapping for 5 delivery trucks with high-gloss UV laminate protection.',
    estimatedBudget: 'OMR 800 - 1,200',
    status: 'In Progress',
    createdAt: '2026-08-03'
  }
];
