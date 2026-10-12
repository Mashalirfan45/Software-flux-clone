
import { notFound } from "next/navigation";

const posts = [
  {
    slug: "car-rental-software-development",
    title: "Car Rental Software Development: The Complete Guide for 2026",
    image: "/images/BL1.webp",
    author: "Software Flux",
    content: [
      {
        heading: "Introduction",
        text: "Car rental software helps businesses manage vehicle bookings, customers, payments, and fleet operations from one platform."
      },
      {
        heading: "What Is Car Rental Software Development?",
        text: "It is the process of building software that allows car rental businesses to manage reservations, vehicles, pricing, and customer information efficiently."
      },
      {
        heading: "Key Features",
        text: "Important features include online booking, fleet management, payment integration, customer management, booking notifications, and reporting."
      }
    ]
  },
  {
    slug: "saas-product-development-strategy",
    title: "SaaS Product Development Strategy: A Complete Framework",
    image: "/images/BL2.webp",
    author: "Software Flux",
    content: [
      {
        heading: "Introduction",
        text: "A strong SaaS product development strategy helps businesses plan, build, launch, and improve their software products."
      },
      {
        heading: "Planning Your SaaS Product",
        text: "Start by identifying your target audience, understanding customer problems, researching competitors, and defining your product goals."
      },
      {
        heading: "Building an MVP",
        text: "A minimum viable product focuses on the essential features needed to test your idea and collect feedback from early users."
      }
    ]
  },
  {
    slug: "web-development-scunthorpe",
    title: "Web Development Scunthorpe: Custom Software Solutions for North Lincolnshire Businesses",
    image: "/images/BL3.webp",
    author: "Software Flux",
    content: [
      {
        heading: "Introduction",
        text: "Professional web development helps Scunthorpe businesses establish their online presence and reach more customers."
      },
      {
        heading: "Custom Web Development",
        text: "Custom websites can be designed around business goals, customer needs, performance, and responsive user experiences."
      }
    ]
  },
  {
    slug: "web-development-grimsby",
    title: "Web Development Grimsby: Custom Software and Digital Solutions for Grimsby Businesses",
    image: "/images/BL4.webp",
    author: "Software Flux",
    content: [
      {
        heading: "Introduction",
        text: "Businesses in Grimsby can use modern websites and digital solutions to improve customer experiences and grow online."
      },
      {
        heading: "Digital Solutions for Businesses",
        text: "Responsive websites, custom software, and business integrations can help streamline operations and support business growth."
      }
    ]
  },
  {
    slug: "tanning-salon-software-uk",
    title: "Tanning Salon Software UK: The Complete Guide for Salon Owners",
    image: "/images/BL5.webp",
    author: "Software Flux",
    content: [
      {
        heading: "Introduction",
        text: "Tanning salon software helps salon owners manage appointments, customers, payments, and daily operations."
      },
      {
        heading: "Essential Features",
        text: "Useful features include appointment scheduling, customer records, staff management, payment processing, and automated reminders."
      }
    ]
  },
  {
    slug: "saas-mvp-development-services",
    title: "SaaS MVP Development Services: The Complete Guide for Founders",
    image: "/images/BL6.webp",
    author: "Software Flux",
    content: [
      {
        heading: "Introduction",
        text: "SaaS MVP development helps founders turn an initial product idea into a working version that can be tested with real users."
      },
      {
        heading: "Why Build an MVP?",
        text: "An MVP allows founders to validate assumptions, gather feedback, prioritize features, and make informed product decisions."
      }
    ]
  }
];

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetails({ params }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pb-24 pt-16">
      <article className="mx-auto max-w-[900px] px-6">
        <p className="mb-4 font-semibold text-[#8b238e]">
          Blog / Software Flux
        </p>

        <h1 className="mb-6 text-3xl font-bold leading-tight text-[#1c1f7a] md:text-5xl">
          {post.title}
        </h1>

        <p className="mb-8 text-gray-600">
          By <span className="font-semibold">{post.author}</span>
        </p>

        <img
          src={post.image}
          alt={post.title}
          className="mb-12 h-auto max-h-[500px] w-full rounded-[30px] object-cover"
        />

        <div className="space-y-8">
          {post.content.map((section, index) => (
            <section key={index}>
              <h2 className="mb-4 text-2xl font-bold text-[#1c1f7a] md:text-3xl">
                {section.heading}
              </h2>
              <p className="text-lg leading-8 text-gray-700">
                {section.text}
              </p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
