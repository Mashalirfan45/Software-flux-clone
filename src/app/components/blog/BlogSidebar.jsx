import Link from "next/link";

const categories = [
  { name: "Booking System", count: 11 },
  { name: "Branding", count: 1 },
  { name: "Creative", count: 16 },
  { name: "Marketing", count: 2 },
  { name: "Portfolio", count: 1 },
  { name: "SAAS", count: 60 },
  { name: "SEO", count: 9 },
  { name: "UI UX", count: 6 },
  { name: "Unique Ideas", count: 1 },
];

function WidgetTitle({ children }) {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-extrabold text-[#1c1f7a]">{children}</h3>
      <span className="mt-1 block h-[3px] w-10 rounded bg-[#8b238e]" />
    </div>
  );
}

export default function BlogSidebar({ posts, currentSlug }) {
  const recent = posts.filter((p) => p.slug !== currentSlug).slice(0, 5);

  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
      {/* Fiverr card */}
      <div className="rounded-[30px] bg-[#fff7dc] p-8">
        <WidgetTitle>Fiver</WidgetTitle>

        <div className="overflow-hidden rounded-md border border-gray-200 bg-white">
          <img
            src="/images/CEO.webp"
            alt="Softflux Fiverr gig"
            className="h-auto w-full"
          />

          <div className="p-4">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1dbf73] font-bold text-white">
                S
              </span>
              <div className="flex-1 text-sm">
                <p className="font-semibold text-gray-800">Softflux</p>
                <p className="text-gray-500">
                  <span className="text-orange-500">★</span> 4.9 (45) · Level 2
                </p>
              </div>
              <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-500">
                1 day
              </span>
            </div>

            <p className="mb-3 font-semibold leading-snug text-gray-900">
              I will develop custom SaaS CRM ERP web and mobile applications
            </p>

            <div className="mb-4 flex flex-wrap gap-2">
              {["React.js", "Next.js", "Node.js", "MongoDB", "React Native"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://www.fiverr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1dbf73] py-3 text-center text-sm font-semibold text-white transition hover:bg-[#19a463]"
              >
                View Gig
              </a>
              <a
                href="https://www.fiverr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#1dbf73] py-3 text-center text-sm font-semibold text-[#1dbf73] transition hover:bg-[#1dbf73] hover:text-white"
              >
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Recent posts */}
      <div className="rounded-[30px] bg-[#fff7dc] p-8">
        <WidgetTitle>Recent Posts</WidgetTitle>

        <ul className="space-y-5">
          {recent.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group flex items-center gap-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-[84px] w-[84px] flex-shrink-0 rounded-xl object-cover"
                />
                <div>
                  <h4 className="line-clamp-2 font-bold leading-snug text-[#1c1f7a] transition group-hover:text-[#8b238e]">
                    {post.title}
                  </h4>
                  <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-gray-600">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#8b238e]">
                      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h-5V7h2v4h3v2z" />
                    </svg>
                    {post.date}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div className="rounded-[30px] bg-[#fff7dc] p-8">
        <WidgetTitle>Categories</WidgetTitle>

        <ul className="space-y-3">
          {categories.map((cat) => (
            <li key={cat.name}>
              <Link
                href={`/blog?category=${encodeURIComponent(cat.name)}`}
                className="flex items-center justify-between rounded-full bg-white px-8 py-3 font-semibold text-gray-700 transition hover:text-[#8b238e]"
              >
                <span>{cat.name}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8b238e] text-sm font-bold text-[#1c1f7a]">
                  {cat.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}