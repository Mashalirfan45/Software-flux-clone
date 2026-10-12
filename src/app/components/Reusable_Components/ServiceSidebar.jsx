import Link from "next/link";

export default function ServiceSidebar({ links, activeSlug }) {
  return (
    <aside className="h-fit rounded-[40px] bg-[#fdf6e0] p-8 lg:sticky lg:top-28">
      <h3 className="inline-block border-b-[3px] border-[#8a2a9b] pb-1 text-2xl font-bold text-[#1a1a6e]">
        Services
      </h3>

      <ul className="mt-8 space-y-4">
        {links.map((l) => {
          const active = l.slug === activeSlug;
          return (
            <li key={l.label}>
              <Link
                href={`/service/${l.slug}`}
                className={`block rounded-full px-7 py-4 text-[15px] font-semibold transition ${
                  active
                    ? "bg-gradient-to-r from-[#8a2a9b] to-[#c13bb0] text-white"
                    : "bg-white text-[#333] hover:bg-[#f3e6f7]"
                }`}
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}