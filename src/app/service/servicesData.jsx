
const defaultWhyChoose = {
  title: "Why Choose Software Flux Solutions?",
  items: [
    "300+ projects delivered across SaaS, mobile, and web",
    "Full-cycle team of designers, developers, and QA",
    "Transparent process with regular updates",
    "Clear communication and realistic timelines",
    "You own your code from day one",
  ],
};

const defaultCta = {
  title: "Ready to Get Started?",
  text: "Tell us about your idea. We will review your requirements and suggest a clear approach and realistic timeline.",
  buttonLabel: "Let's Talk Through Your Idea",
  href: "/contact",
};

// Sidebar items
export const sidebarLinks = [
  { label: "SaaS Development", slug: "saas-development" },
  { label: "Mobile App Development", slug: "mobile-app-development" },
  { label: "Web Development", slug: "website-development" },
  { label: "UI/UX", slug: "ui-ux-design" },
  { label: "Graphic Design", slug: "graphic-design" },
  {
    label: "SEO & Digital Marketing",
    slug: "seo-digital-marketing",
  },
];

// Common service structure
const buildService = (slug, title, image, content) => ({
  slug,
  image,
  imageAlt: title,
  heading: content.heading || title,
  intro: content.intro,
  offering: content.offering,
  industries: content.industries,
  whatWeBuild: content.whatWeBuild,
  process: content.process,
  whyChoose: content.whyChoose || defaultWhyChoose,
  cta: content.cta || defaultCta,
});

// SaaS Development
const saasContent = {
  heading: "Build Scalable SaaS Products with a Team That Gets It",
  intro: [
    "Software Flux Solutions helps startups and businesses design, build, and scale cloud-based software products.",
    "From SaaS MVPs to enterprise platforms, we support product planning, development, deployment, and ongoing improvements.",
  ],
  offering: {
    title: "Our SaaS Application Development Services",
    text: "We cover the full SaaS product lifecycle, from architecture to deployment.",
    items: [
      {
        title: "Custom SaaS Development",
        text: "Scalable platforms with secure access, tenant isolation, and maintainable architecture.",
      },
      {
        title: "SaaS MVP Development",
        text: "Focused first versions that help validate your product idea.",
      },
      {
        title: "API-First Architecture",
        text: "APIs designed for integrations and future product expansion.",
      },
      {
        title: "Subscription Billing",
        text: "Subscription plans, billing integrations, and usage-based features.",
      },
      {
        title: "Enterprise SaaS",
        text: "Advanced permissions, authentication, and audit features.",
      },
      {
        title: "SaaS Consulting",
        text: "Product planning, technical decisions, and development roadmaps.",
      },
    ],
  },
  industries: {
    title: "Industries We Serve",
    items: [
      "HR Tech",
      "Healthcare",
      "E-commerce",
      "FinTech",
      "EdTech",
      "Logistics",
    ],
  },
  whatWeBuild: {
    title: "What We Build",
    items: [
      "Multi-tenant SaaS platforms",
      "API-based applications",
      "Subscription and billing systems",
      "Enterprise software",
      "SaaS MVPs",
      "Micro SaaS products",
    ],
  },
  process: {
    title: "Our SaaS Development Process",
    steps: [
      { title: "Discovery", text: "Understand your users, goals, and requirements." },
      { title: "Architecture & Design", text: "Plan the system architecture and user experience." },
      { title: "Development", text: "Build the product in manageable stages." },
      { title: "Quality Assurance", text: "Test functionality, performance, and security." },
      { title: "Deployment", text: "Prepare and launch the application." },
      { title: "Ongoing Support", text: "Maintain and improve the product after launch." },
    ],
  },
};

// Mobile App Development
const mobileContent = {
  heading: "Mobile Apps People Actually Enjoy Using",
  intro: [
    "We build mobile applications designed around real user needs, usability, and performance.",
    "From the first prototype to launch, we support design, development, testing, and maintenance.",
  ],
  offering: {
    title: "Our Mobile App Development Services",
    text: "We help businesses build and maintain mobile applications.",
    items: [
      { title: "iOS & Android Apps", text: "Applications designed for Apple and Android devices." },
      { title: "Cross-Platform Development", text: "Apps built with technologies such as React Native and Flutter." },
      { title: "Mobile MVP Development", text: "Focused first versions to validate an idea." },
      { title: "App UI/UX Design", text: "Simple, user-friendly screens and navigation." },
      { title: "Backend & API Integration", text: "Connect apps with databases and external services." },
      { title: "Maintenance & Support", text: "Updates, bug fixes, and performance improvements." },
    ],
  },
  industries: {
    title: "Industries We Serve",
    items: ["Healthcare", "E-commerce", "Delivery", "FinTech", "Education", "Travel"],
  },
  whatWeBuild: {
    title: "What We Build",
    items: [
      "Customer applications",
      "Booking and scheduling apps",
      "Marketplace apps",
      "Apps connected to dashboards",
      "Payment and subscription features",
      "Chat and location-based features",
    ],
  },
  process: {
    title: "Our Mobile App Development Process",
    steps: [
      { title: "Discovery & Planning", text: "Understand your users and requirements." },
      { title: "UI/UX Design", text: "Design screens and prototypes." },
      { title: "Development", text: "Build the app in manageable stages." },
      { title: "Testing", text: "Test on devices and different screen sizes." },
      { title: "Launch", text: "Prepare and publish the app." },
      { title: "Support", text: "Maintain and improve the application." },
    ],
  },
};

// Website Development
const websiteContent = {
  heading: "Websites Built to Convert",
  intro: [
    "We build professional websites that explain your business clearly and help visitors take action.",
    "Our websites are responsive, performance-focused, and designed to work across screen sizes.",
  ],
  offering: {
    title: "Our Website Development Services",
    text: "From business websites to full web applications, we build solutions around your goals.",
    items: [
      { title: "Custom Website Development", text: "Websites tailored to your brand and requirements." },
      { title: "Business Websites", text: "Professional websites for companies and service providers." },
      { title: "E-commerce Websites", text: "Online stores with product and order management." },
      { title: "Web Apps & Portals", text: "Interactive applications, portals, and dashboards." },
      { title: "CMS & Admin Panels", text: "Manage website content without editing code." },
      { title: "Speed Optimization", text: "Improve loading speed and overall website performance." },
    ],
  },
  industries: {
    title: "Industries We Serve",
    items: ["SaaS", "Corporate services", "E-commerce", "Education", "Healthcare", "Booking businesses"],
  },
  whatWeBuild: {
    title: "What We Build",
    items: [
      "Responsive business websites",
      "Landing pages",
      "Blogs and content websites",
      "Contact and booking forms",
      "Multi-language websites",
      "Websites with admin panels",
    ],
  },
  process: {
    title: "Our Website Development Process",
    steps: [
      { title: "Discovery", text: "Understand your audience and business goals." },
      { title: "Planning", text: "Organize pages and website structure." },
      { title: "Design", text: "Create a professional, on-brand layout." },
      { title: "Development", text: "Build the website using suitable technologies." },
      { title: "Testing", text: "Check links, forms, responsiveness, and performance." },
      { title: "Launch", text: "Deploy the website and provide support." },
    ],
  },
};

// UI/UX Design
const uiuxContent = {
  heading: "Design That Puts Users First",
  intro: [
    "We design digital interfaces that help users understand your product and complete tasks easily.",
    "Our process includes research, wireframes, prototypes, and developer-ready designs.",
  ],
  offering: {
    title: "Our UI/UX Design Services",
    text: "We support the complete product design process.",
    items: [
      { title: "Web & Mobile UI/UX", text: "Clear interfaces for websites, apps, and SaaS products." },
      { title: "User Research", text: "Understand user needs and product goals." },
      { title: "Wireframing & Prototyping", text: "Test structure and flows before development." },
      { title: "Design Systems", text: "Reusable styles and components for consistency." },
      { title: "Usability Testing", text: "Identify and improve areas where users struggle." },
    ],
  },
  industries: {
    title: "Industries We Serve",
    items: ["SaaS", "Startups", "E-commerce", "Education", "Healthcare"],
  },
  whatWeBuild: {
    title: "What We Design",
    items: [
      "Dashboards and admin panels",
      "Mobile app screens",
      "Landing pages",
      "Clickable prototypes",
      "Reusable design systems",
    ],
  },
  process: {
    title: "Our UI/UX Design Process",
    steps: [
      { title: "Research", text: "Understand users and business goals." },
      { title: "Wireframes", text: "Plan the structure and user flow." },
      { title: "Visual Design", text: "Apply typography, colour, and imagery." },
      { title: "Prototype & Test", text: "Review and test interactive designs." },
      { title: "Handoff", text: "Prepare files and guidelines for developers." },
    ],
  },
};

// Graphic Design
const graphicContent = {
  heading: "Visuals That Tell Your Brand Story",
  intro: [
    "We create consistent brand visuals that help businesses look professional and recognizable.",
    "Our design services cover digital content and print materials.",
  ],
  offering: {
    title: "Our Graphic Design Services",
    text: "From logos to marketing creatives, we help maintain a consistent brand identity.",
    items: [
      { title: "Logo & Brand Identity", text: "Logos, colour palettes, and typography." },
      { title: "Brand Guidelines", text: "Rules for consistent use of brand elements." },
      { title: "Social Media Creatives", text: "Posts, stories, and banners for social platforms." },
      { title: "Marketing Materials", text: "Brochures, presentations, and pitch decks." },
      { title: "Print Design", text: "Business cards, packaging, and print-ready designs." },
    ],
  },
  industries: {
    title: "Industries We Serve",
    items: ["Startups", "Technology companies", "E-commerce", "Restaurants", "Agencies"],
  },
  whatWeBuild: {
    title: "What We Design",
    items: [
      "Logos and brand kits",
      "Social media graphics",
      "Pitch decks",
      "Brochures and business cards",
      "Website banners",
    ],
  },
  process: {
    title: "Our Graphic Design Process",
    steps: [
      { title: "Brief", text: "Understand your business and preferred style." },
      { title: "Concepts", text: "Explore possible creative directions." },
      { title: "Refinement", text: "Improve the selected concept using feedback." },
      { title: "Finalization", text: "Prepare the final design files." },
      { title: "Delivery", text: "Provide organized files for use." },
    ],
  },
};

// Combined SEO + Digital Marketing
const seoDigitalMarketingContent = {
  heading: "SEO & Digital Marketing Services That Grow Your Business",
  intro: [
    "Software Flux Solutions helps businesses improve their search visibility and reach the right audience through practical SEO and digital marketing strategies.",
    "We combine technical and on-page SEO with content, social media, paid advertising, email marketing, and analytics to help you make informed marketing decisions.",
  ],
  offering: {
    title: "Our SEO & Digital Marketing Services",
    text: "We combine search optimization and digital marketing channels into one coordinated strategy for your business.",
    items: [
      {
        title: "Technical SEO",
        text: "Improve website structure, speed, and crawling so search engines can understand your site.",
      },
      {
        title: "On-Page SEO",
        text: "Improve page titles, headings, content, and internal links to match relevant searches.",
      },
      {
        title: "Keyword Research",
        text: "Identify relevant search terms and plan content around customer needs.",
      },
      {
        title: "Link Building",
        text: "Build website authority through relevant mentions and quality links.",
      },
      {
        title: "Local SEO",
        text: "Improve local search visibility and optimize your Google Business Profile.",
      },
      {
        title: "Social Media Marketing",
        text: "Plan social media content and support consistent audience engagement.",
      },
      {
        title: "Paid Advertising (PPC)",
        text: "Plan and optimize search and social advertising campaigns.",
      },
      {
        title: "Content Marketing",
        text: "Create content that answers audience questions and builds trust.",
      },
      {
        title: "Email Marketing",
        text: "Use email campaigns to inform customers and maintain engagement.",
      },
      {
        title: "Analytics & Reporting",
        text: "Track performance and report on traffic, leads, and campaign results.",
      },
    ],
  },
  industries: {
    title: "Industries We Serve",
    items: [
      "SaaS and software companies",
      "Local and service businesses",
      "E-commerce stores",
      "Education and training providers",
      "Healthcare and wellness brands",
      "Startups launching new products",
    ],
  },
  whatWeBuild: {
    title: "What We Deliver",
    items: [
      "SEO audits and action plans",
      "Keyword research and content roadmaps",
      "Optimized website pages",
      "Local search setup",
      "Social media content plans",
      "Search and social advertising campaigns",
      "Email campaigns and automation",
      "Performance reports with next steps",
    ],
  },
  process: {
    title: "Our SEO & Digital Marketing Process",
    steps: [
      {
        title: "Audit & Discovery",
        text: "Review your website, audience, competitors, and current marketing.",
      },
      {
        title: "Strategy",
        text: "Choose relevant keywords, channels, and measurable goals.",
      },
      {
        title: "Optimization & Campaign Setup",
        text: "Improve website pages and prepare marketing campaigns.",
      },
      {
        title: "Launch",
        text: "Publish content and start the agreed campaigns.",
      },
      {
        title: "Measure & Improve",
        text: "Review performance and refine the strategy based on results.",
      },
    ],
  },
};

export const services = [
  buildService(
    "saas-development",
    "SaaS Development",
    "/images/SAAS.webp",
    saasContent
  ),
  buildService(
    "mobile-app-development",
    "Mobile App Development",
    "/images/M_APP.webp",
    mobileContent
  ),
  buildService(
    "website-development",
    "Website Development",
    "/images/why-different.png",
    websiteContent
  ),
  buildService(
    "ui-ux-design",
    "UI/UX Design",
    "/images/UI_UX.webp",
    uiuxContent
  ),
  buildService(
    "graphic-design",
    "Graphic Design",
    "/images/GRAPHIC_DESIGN.webp",
    graphicContent
  ),
  buildService(
    "seo-digital-marketing",
    "SEO & Digital Marketing",
    "/images/SEO.webp",
    seoDigitalMarketingContent
  ),
];

export const getService = (slug) =>
  services.find((service) => service.slug === slug);
