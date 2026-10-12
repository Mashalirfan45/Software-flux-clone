import Image from "next/image";
import DotTriangle from "./DotTriangle";

export default function ServiceHero({ hero }) {
  return (
    <section className="relative overflow-hidden bg-[#1a1a6e]">
      <div className="mx-auto grid max-w-[1290px] items-center gap-10 px-6 py-16 md:grid-cols-[5fr_6fr]">
        <div className="relative h-[280px] overflow-hidden rounded-2xl md:h-[353px]">
          <Image src={hero.image} alt={hero.title} fill priority className="object-cover" />
        </div>
        <div className="text-white">
          <h1 className="text-4xl font-bold md:text-5xl">{hero.title}</h1>
          <p className="mt-5 max-w-xl text-base leading-8">{hero.text}</p>
        </div>
      </div>
      <DotTriangle />
    </section>
  );
}