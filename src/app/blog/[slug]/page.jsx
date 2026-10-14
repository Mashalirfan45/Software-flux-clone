import { notFound } from "next/navigation";
import Link from "next/link";
import BlogSidebar from "@/app/components/blog/BlogSidebar";
import CommentForm from "@/app/components/blog/FormComment";

const SITE_URL = "https://softwarefluxsolution.com";

const posts = [
  {
    slug: "car-rental-software-development",
    title: "Car Rental Software Development: The Complete Guide for 2026",
    image: "/images/BLOG_01.webp",
    author: "Software Flux",
    date: "October 6, 2026",
    content: [
      {
        heading: "Introduction",
        text: "Car rental software helps businesses manage vehicle bookings, customers, payments, and fleet operations from one platform.",
      },
      {
        heading: "What Is Car Rental Software Development?",
        text: "It is the process of building software that allows car rental businesses to manage reservations, vehicles, pricing, and customer information efficiently.",
      },
      {
        heading: "Key Features",
        text: "Important features include online booking, fleet management, payment integration, customer management, booking notifications, and reporting.",
      },
      {
        heading: "How do car rental platforms typically make money?",
        text: "Most platforms settle on one primary model: a commission on each booking for marketplaces, a recurring subscription fee for software sold to rental operators, or a per transaction fee for higher value segments like corporate rentals.",
      },
      {
        heading: "What technology stack is best for car rental software?",
        text: "There is no single correct stack, but an API first architecture matters more than any individual language or framework choice. Common combinations include React or Next.js on the frontend, Node.js or Python on the backend, and PostgreSQL for relational data.",
      },
      {
        heading: "Conclusion",
        text: "Car rental software development rewards founders and teams who treat it as a strategic product problem first and a technical build second.",
      },
    ],
  },
  {
    slug: "saas-product-development-strategy",
    title: "SaaS Product Development Strategy: A Complete Framework",
    image: "/images/BL2.webp",
    author: "Software Flux",
    date: "October 3, 2026",
    content: [
      {
        heading: "Introduction",
        text: "A strong SaaS product development strategy helps businesses plan, build, launch, and improve their software products.",
      },
      {
        heading: "Planning Your SaaS Product",
        text: "Start by identifying your target audience, understanding customer problems, researching competitors, and defining your product goals.",
      },
      {
        heading: "Building an MVP",
        text: "A minimum viable product focuses on the essential features needed to test your idea and collect feedback from early users.",
      },
    ],
  },
  {
    slug: "web-development-scunthorpe",
    title: "Web Development Scunthorpe: Custom Software Solutions for North Lincolnshire Businesses",
    image: "/images/BL3.webp",
    author: "Software Flux",
    date: "September 27, 2026",
    content: [
      {
        heading: "Introduction",
        text: "Professional web development helps Scunthorpe businesses establish their online presence and reach more customers.",
      },
      {
        heading: "Custom Web Development",
        text: "Custom websites can be designed around business goals, customer needs, performance, and responsive user experiences.",
      },
    ],
  },
  {
    slug: "web-development-grimsby",
    title: "Web Development Grimsby: Custom Software and Digital Solutions for Grimsby Businesses",
    image: "/images/BL4.webp",
    author: "Software Flux",
    date: "September 25, 2026",
    content: [
      {
        heading: "Introduction",
        text: "Businesses in Grimsby can use modern websites and digital solutions to improve customer experiences and grow online.",
      },
      {
        heading: "Digital Solutions for Businesses",
        text: "Responsive websites, custom software, and business integrations can help streamline operations and support business growth.",
      },
    ],
  },
  {
    slug: "tanning-salon-software-uk",
    title: "Tanning Salon Software UK: The Complete Guide for Salon Owners",
    image: "/images/BL5.webp",
    author: "Software Flux",
    date: "September 23, 2026",
    content: [
      {
        heading: "Introduction",
        text: "Tanning salon software helps salon owners manage appointments, customers, payments, and daily operations.",
      },
      {
        heading: "Essential Features",
        text: "Useful features include appointment scheduling, customer records, staff management, payment processing, and automated reminders.",
      },
    ],
  },
  {
    slug: "saas-mvp-development-services",
    title: "SaaS MVP Development Services: The Complete Guide for Founders",
    image: "/images/BL6.webp",
    author: "Software Flux",
    date: "September 20, 2026",
    content: [
      {
        heading: "Introduction",
        text: "SaaS MVP development helps founders turn an initial product idea into a working version that can be tested with real users.",
      },
      {
        heading: "Why Build an MVP?",
        text: "An MVP allows founders to validate assumptions, gather feedback, prioritize features, and make informed product decisions.",
      },
    ],
  },
];

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.content[0].text };
}

const Avatar = ({ className = "" }) => (
  <div
    className={`flex items-center justify-center overflow-hidden rounded-full bg-[#c4c4c4] ${className}`}
  >
    <svg viewBox="0 0 24 24" className="h-3/4 w-3/4 fill-white">
      <circle cx="12" cy="8" r="4.5" />
      <path d="M3 22c0-5 4-8 9-8s9 3 9 8z" />
    </svg>
  </div>
);

function ShareLinks({ url, title }) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const items = [
    {
      label: "Facebook",
      short: "f",
      href: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
    },
    {
      label: "Twitter",
      short: "t",
      href: `https://twitter.com/intent/tweet?url=${u}&text=${t}`,
    },
    {
      label: "Linked In",
      short: "in",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
    },
  ];

  return (
    <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
      <span className="text-lg font-bold text-[#1c1f7a]">Share Post:</span>
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 text-sm font-bold uppercase text-[#1c1f7a] transition hover:text-[#8b238e]"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-b from-[#c040c4] to-[#8b238e]">
            <span className="text-lg font-bold leading-none text-white">{item.short}</span>
          </span>
          {item.label}
        </a>
      ))}
    </div>
  );
}

export default async function BlogDetails({ params }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const postUrl = `${SITE_URL}/blog/${post.slug}`;

  return (
    <main className="min-h-screen bg-white pb-24 pt-16">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-[900px] lg:mx-0 lg:max-w-[860px]">
          <p className="mb-4 font-semibold text-[#8b238e]">
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>{" "}
            / {post.author}
          </p>

          <h1 className="mb-6 text-3xl font-bold leading-tight text-[#1c1f7a] md:text-5xl">
            {post.title}
          </h1>

          <p className="text-gray-600">
            By <span className="font-semibold">{post.author}</span> · {post.date}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_400px]">
          {/* Main column */}
          <article>
            <img
              src={post.image}
              alt={post.title}
              className="mb-12 h-auto max-h-[500px] w-full rounded-[30px] object-cover"
            />

            <div className="space-y-6">
              {post.content.map((section, index) => {
                const isConclusion = section.heading === "Conclusion";
                return (
                  <section key={index}>
                    {isConclusion && <hr className="mb-6 border-gray-400" />}
                    {isConclusion ? (
                      <h2 className="mb-4 text-4xl font-extrabold text-[#1c1f7a] md:text-5xl">
                        {section.heading}
                      </h2>
                    ) : (
                      <h2 className="mb-3 text-2xl font-bold text-[#1c1f7a] md:text-3xl">
                        {section.heading}
                      </h2>
                    )}
                    <p className="text-lg leading-8 text-gray-600">{section.text}</p>
                  </section>
                );
              })}

              <p className="text-lg leading-8 text-gray-600">
                At{" "}
                <Link href="/" className="text-[#1c1f7a] hover:underline">
                  Software Flux Solutions
                </Link>
                , we build{" "}
                <Link href="/saas-development" className="text-[#1c1f7a] hover:underline">
                  SaaS platforms
                </Link>
                ,{" "}
                <Link href="/mobile-app-development" className="text-[#1c1f7a] hover:underline">
                  mobile applications
                </Link>{" "}
                and{" "}
                <Link href="/web-development" className="text-[#1c1f7a] hover:underline">
                  custom web platforms
                </Link>{" "}
                with this kind of phased, API first architecture built in from the start.
              </p>
            </div>

            {/* Reviewed by */}
            <div className="mt-12 flex items-center gap-5 rounded-lg border border-gray-200 bg-[#f8f9fb] p-5">
              <Avatar className="h-[100px] w-[100px] flex-shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">Reviewed by</p>
                <p className="text-lg font-bold text-[#1c1f7a]">Zainab Bibi</p>
                <p className="italic text-gray-600">Senior SAAS Project Manager</p>
                <p className="mt-2 text-sm text-gray-700">
                  1+ Years of Experience in SAAS Projects Management
                </p>
              </div>
            </div>

            <ShareLinks url={postUrl} title={post.title} />

            {/* Author box */}
            <div className="relative mt-12 overflow-hidden rounded-[30px] bg-[#1c2660]">
              <div className="absolute inset-y-0 left-0 w-[127px] rounded-br-[30px] bg-gradient-to-b from-[#c040c4] to-[#8b238e]" />
              <div className="relative flex items-center gap-6 px-9 py-7">
                <Avatar className="h-[150px] w-[150px] flex-shrink-0 border-[3px] border-white" />
                <h3 className="text-3xl font-bold text-white">{post.author}</h3>
              </div>
            </div>

            <CommentForm />
          </article>

          {/* Sidebar */}
          <BlogSidebar posts={posts} currentSlug={post.slug} />
        </div>
      </div>
    </main>
  );
}