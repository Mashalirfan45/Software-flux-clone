"use client";

import Carousel from "../components/Reusable_Components/Carousel";
import CustomButton from "../components/Reusable_Components/CustomButton";

const blogs = [
  { image: "/images/b1.webp", title: "SaaS Product Development Strategy: From Idea to Launch", author: "Software Flux" },
  { image: "/images/b2.webp", title: "Web Development Scunthorpe: Custom Websites for Local Business", author: "Software Flux" },
  { image: "/images/b3.webp", title: "Web Development Grimsby: Custom Websites for Local Business", author: "Software Flux" },
  { image: "/images/b4.webp", title: "Targeted SEO for UK Small Businesses", author: "Software Flux" },
];

export default function OurBlogs() {
  return (
    <section className="overflow-hidden bg-[#f7f6f3] py-16">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="mb-12 text-center text-4xl font-extrabold text-[#1c1f7a] md:text-5xl">
          Our Latest Blogs
        </h2>

        <Carousel
          items={blogs}
          breakpoints={{ 0: 1.1, 768: 2.2, 1024: 3.3 }} // .x = peek of next card
          gap={32}
          autoPlay
          interval={3500}
          showDots={false}
          renderItem={(blog) => (
            <article className="rounded-[40px] bg-white p-0 pb-8 shadow-sm">
              <img
                src={blog.image}
                alt={blog.title}
                className="h-[340px] w-full rounded-[40px] object-cover"
              />
              <div className="px-8 pt-8">
                <h3 className="line-clamp-2 text-2xl font-bold leading-snug text-[#1c1f7a]">
                  {blog.title}
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  by <span className="font-bold text-gray-800">{blog.author}</span>
                </p>
              </div>
            </article>
          )}
        />

        <div className="mt-12 flex justify-center">
          <CustomButton>View All Blogs</CustomButton>
        </div>
      </div>
    </section>
  );
}