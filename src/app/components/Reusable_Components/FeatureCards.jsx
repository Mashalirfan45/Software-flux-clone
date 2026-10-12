import Link from "next/link";

// 5 cards ki jagah (laptop par): 3 columns x 2 rows, beech upar phone ki image
const positions = [
  "lg:col-start-1 lg:row-start-1",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-1 lg:row-start-2",
  "lg:col-start-2 lg:row-start-2", // highlighted card
  "lg:col-start-3 lg:row-start-2",
];

// Har card ke icon circle ka rang (highlighted card ka rang purple hai)
const iconBgs = [
  "bg-[#fde8ef]",
  "bg-[#e6f6ee]",
  "bg-[#e8e8ff]",
  "",
  "bg-[#fff7e0]",
];

const HIGHLIGHT_INDEX = 3;

export default function FeatureCards({
  items = [],                                      // [{ icon, title, text, href? }] x 5
  image = "/images/acu.png",                       // beech wali phone image
  backgroundImage = "/images/background-blog.jpg", // dots wali background image
}) {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f4] py-16">

      {/* BACKGROUND IMAGE */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      )}

      <div className="relative mx-auto max-w-[1100px] px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-10 lg:gap-y-10">

          {/* PHONE IMAGE (beech, upar), static */}
          <div className="flex items-end justify-center sm:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1">
            <img
              src={image}
              alt="Product preview"
              className="h-auto max-h-[340px] w-auto max-w-full object-contain"
            />
          </div>

          {/* CARDS */}
          {items.slice(0, 5).map(({ icon: Icon, title, text, href }, i) => {
            const active = i === HIGHLIGHT_INDEX;

            // href ho to Link, warna sada div
            const Wrapper = href ? Link : "div";
            const wrapperProps = href ? { href } : {};

            return (
              <Wrapper
                key={title}
                {...wrapperProps}
                className={`
                  relative flex min-h-[280px] flex-col rounded-[40px] bg-white p-9
                  transition duration-300
                  ${href ? "cursor-pointer" : ""}
                  ${positions[i]}
                  ${
                    active
                      ? "z-10 shadow-xl lg:-translate-y-4 hover:shadow-2xl"
                      : "border border-gray-300 shadow-[10px_10px_0_#e5e5e5] hover:-translate-y-1"
                  }
                `}
              >
                <div
                  className={`
                    mb-7 flex h-[95px] w-[95px] items-center justify-center rounded-full
                    ${active ? "bg-[#8b238e] text-white" : `${iconBgs[i]} text-[#1c1f7a]`}
                  `}
                >
                  <Icon className="h-9 w-9" strokeWidth={1.5} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-[#1c1f7a] md:text-2xl">
                  {title}
                </h3>
                <p className="text-base leading-relaxed text-gray-600">{text}</p>
              </Wrapper>
            );
          })}

        </div>
      </div>
    </section>
  );
}