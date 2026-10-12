// ===== IMAGES: sab paths yahan ek jagah. Jo files public/images/ mein hain wahi use hui hain =====
// Asli service images milne par sirf yahan paths badlein.
const IMG = {
  saas: "/images/SAAS.webp",
  mobile: "/images/M_APP.webp",
  web: "/images/home_page.png",
  uiux: "/images/UI_UX.webp",
  graphic: "/images/GD.webp",
  seo: "/images/pic.webp",
};

// Har service ka content yahan hai. Naya page chahiye? Bas ek object add karo.
export const services = [
  {
    slug: "saas-development",
    sidebarTitle: "SaaS Development",
    hero: {
      title: "SaaS Development",
      text: "Not sure where to start? Our saas development consulting helps you define the right architecture, stack, and roadmap before a line of code is written.",
      image: IMG.saas,
    },
    main: {
      image: IMG.saas,
      heading: "Build Scalable SaaS Products with a Team That Gets It",
      paragraphs: [
        "We design and build cloud-based software that grows with your users.",
        "From multi-tenant architecture to billing and analytics, we cover the full product lifecycle.",
      ],
      points: [
        "Multi-tenant architecture",
        "Subscription & billing",
        "Secure APIs",
        "Cloud deployment",
      ],
    },
  },
  {
    slug: "mobile-app-development",
    sidebarTitle: "Mobile App Development",
    hero: {
      title: "Mobile App Development",
      text: "Native and cross-platform apps built for speed, usability and growth.",
      image: IMG.mobile,
    },
    main: {
      image: IMG.mobile,
      heading: "Mobile Apps People Actually Enjoy Using",
      paragraphs: [
        "We build fast, intuitive apps for Android and iOS that keep users coming back.",
        "From first prototype to App Store launch, our team handles design, development and testing in one place.",
      ],
      points: [
        "iOS & Android",
        "React Native / Flutter",
        "App Store launch",
        "Ongoing updates & support",
      ],
    },
  },
  {
    slug: "website-development",
    sidebarTitle: "Web Development",
    hero: {
      title: "Website Development",
      text: "Fast, responsive and SEO-friendly websites.",
      image: IMG.web,
    },
    main: {
      image: IMG.web,
      heading: "Websites Built to Convert",
      paragraphs: [
        "Your website is often the first impression of your business. We make it fast, clear and easy to use on every screen.",
        "We build with modern technology so your site stays quick, secure and simple to update.",
      ],
      points: [
        "Next.js / React",
        "CMS integration",
        "Performance optimized",
        "Mobile-first design",
      ],
    },
  },
  {
    slug: "ui-ux-design",
    sidebarTitle: "UI/UX",
    hero: {
      title: "UI/UX Design",
      text: "Interfaces that look great and feel effortless.",
      image: IMG.uiux,
    },
    main: {
      image: IMG.uiux,
      heading: "Design That Puts Users First",
      paragraphs: [
        "Good design is a business decision. We create interfaces that guide users and make your product easy to love.",
        "We test ideas early with wireframes and prototypes, so changes are cheap and decisions are clear.",
      ],
      points: ["Wireframes", "Prototypes", "Design systems", "Usability testing"],
    },
  },
  {
    slug: "graphic-design",
    sidebarTitle: "Graphic Design",
    hero: {
      title: "Graphic Design",
      text: "Branding and visuals that make you memorable.",
      image: IMG.graphic,
    },
    main: {
      image: IMG.graphic,
      heading: "Visuals That Tell Your Brand Story",
      paragraphs: [
        "Strong visuals help people remember you. We design brand identities and creatives that look consistent everywhere.",
        "From a logo to a full social media kit, we keep your message clear and your look professional.",
      ],
      points: [
        "Logo & branding",
        "Social media creatives",
        "Print design",
        "Brand guidelines",
      ],
    },
  },
  {
    slug: "seo-digital-marketing",
    sidebarTitle: "SEO & Digital Marketing",
    hero: {
      title: "SEO & Digital Marketing",
      text: "Get found, get traffic, get customers.",
      image: IMG.seo,
    },
    main: {
      image: IMG.seo,
      heading: "Grow Your Reach with Data-Driven Marketing",
      paragraphs: [
        "We help businesses grow online through strategies that compound over time.",
        "Our SEO and digital marketing work focuses on the right audience, clear tracking and steady results.",
      ],
      points: [
        "On-page SEO",
        "Content strategy",
        "Paid campaigns",
        "Analytics & reporting",
      ],
    },
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);