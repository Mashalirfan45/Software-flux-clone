import Image from "next/image";

export default function ServiceContent({ main }) {
  return (
    <div>
      <div className="relative h-[300px] overflow-hidden rounded-[40px] md:h-[565px]">
        <Image src={main.image} alt={main.heading} fill className="object-cover" />
      </div>

      <h2 className="mt-10 text-3xl font-bold leading-tight text-[#1a1a6e] md:text-5xl">
        {main.heading}
      </h2>

      <div className="mt-6 space-y-4 text-[17px] leading-8 text-[#444]">
        {main.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {main.points?.length > 0 && (
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {main.points.map((pt) => (
            <li key={pt} className="flex items-center gap-3 font-medium text-[#1a1a6e]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#8a2a9b]" />
              {pt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}