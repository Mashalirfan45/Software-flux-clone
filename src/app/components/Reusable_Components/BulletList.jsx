export default function BulletList({ title, items }) {
  if (!items?.length) return null;

  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold text-[#1a1a6e]">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[17px] leading-7 text-[#444]">
            <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#8a2a9b]" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}