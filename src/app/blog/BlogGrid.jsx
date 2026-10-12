"use client";

import { useRef, useState } from "react";
import Link from "next/link";

const posts = [
  {
    slug: "car-rental-software-development",
    title: "Car Rental Software Development: The Complete Guide for 2026",
    image: "/images/BL1.webp",
    author: "Software Flux",
  },
  {
    slug: "saas-product-development-strategy",
    title: "SaaS Product Development Strategy: A Complete Framework",
    image: "/images/BL2.webp",
    author: "Software Flux",
  },
  {
    slug: "web-development-scunthorpe",
    title: "Web Development Scunthorpe: Custom Software Solutions for North Lincolnshire Businesses",
    image: "/images/BL3.webp",
    author: "Software Flux",
  },
  {
    slug: "web-development-grimsby",
    title: "Web Development Grimsby: Custom Software and Digital Solutions for Grimsby Businesses",
    image: "/images/BL4.webp",
    author: "Software Flux",
  },
  {
    slug: "tanning-salon-software-uk",
    title: "Tanning Salon Software UK: The Complete Guide for Salon Owners",
    image: "/images/BL5.webp",
    author: "Software Flux",
  },
  {
    slug: "saas-mvp-development-services",
    title: "SaaS MVP Development Services: The Complete Guide for Founders",
    image: "/images/BL6.webp",
    author: "Software Flux",
  },
];

const PER_PAGE = 6; // 3 cards x 2 lines

export default function BlogGrid() {
  const [page, setPage] = useState(1);
  const topRef = useRef(null);

  const totalPages = Math.ceil(posts.length / PER_PAGE);
  const visible = posts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const goTo = (p) => {
    setPage(p);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="bg-white pb-24 pt-24">
      <div ref={topRef} className="mx-auto max-w-[1300px] scroll-mt-28 px-6">

        {/* CARDS: har line mein 3 */}
        <div className="grid gap-x-16 gap-y-24 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="overflow-hidden rounded-[35px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    title={post.title}
                    className="h-[307px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-7 line-clamp-2 px-5 text-2xl font-bold leading-snug text-[#1c1f7a] transition group-hover:text-[#8b238e]">
                  {post.title}
                </h3>
              </Link>

              <p className="mt-4 px-5 text-lg text-gray-700">
                by <span className="font-bold text-gray-900">{post.author}</span>
              </p>
            </article>
          ))}
        </div>

        {/* PAGINATION (sirf tab dikhega jab 6 se zyada posts hon) */}
        {totalPages > 1 && (
          <div className="mt-20 flex flex-wrap items-center justify-center gap-3">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => goTo(p)}
                aria-label={`Page ${p}`}
                aria-current={p === page ? "page" : undefined}
                className={`h-12 w-12 rounded-full text-lg font-bold transition ${
                  p === page
                    ? "bg-[#8b238e] text-white"
                    : "bg-gray-100 text-[#1c1f7a] hover:bg-[#8b238e] hover:text-white"
                }`}
              >
                {p}
              </button>
            ))}

            {page < totalPages && (
              <button
                onClick={() => goTo(page + 1)}
                className="h-12 rounded-full bg-gray-100 px-6 text-lg font-bold text-[#1c1f7a] transition hover:bg-[#8b238e] hover:text-white"
              >
                Next
              </button>
            )}
          </div>
        )}

      </div>
    </section>
  );
}