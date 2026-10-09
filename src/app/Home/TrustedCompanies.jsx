"use client";

const companies = [
  "/images/Mask-group-1.webp",
  "/images/Mask-group-2.webp",
  "/images/Mask-group-3.webp",
  "/images/Mask-group-4.webp",
  "/images/Mask-group-5.webp",
  "/images/Mask-group-8.webp",
  "/images/Mask-group-11.webp",
  "/images/Mask-group-12.webp",
  "/images/Mask-group-9.webp",
  "/images/Mask-group-10.webp",
];

function LogoCard({ logo, index }) {
  return (
    <div
      className="
        mx-3 flex h-[90px] w-[220px] flex-shrink-0 items-center justify-center
        rounded-full border-2 border-dashed border-gray-300 bg-white
        transition-colors duration-300 hover:border-[#8b238e]
      "
    >
      <img
        src={logo}
        alt={`Trusted company ${index + 1}`}
        className="max-h-[50px] max-w-[140px] object-contain"
      />
    </div>
  );
}

export default function TrustedCompanies() {
  return (
    <section className="overflow-hidden bg-white py-14">
      <div className="mx-auto max-w-[1400px] px-6">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
            Trusted by SaaS Companies and Global Businesses
          </h3>
        </div>

        {/* Logo Slider */}
        <div className="mx-auto overflow-hidden">
          <div className="animate-logo-scroll flex w-max">

            {/* First set */}
            {companies.map((logo, index) => (
              <LogoCard key={`first-${index}`} logo={logo} index={index} />
            ))}

            {/* Duplicate set (seamless loop) */}
            {companies.map((logo, index) => (
              <LogoCard key={`second-${index}`} logo={logo} index={index} />
            ))}

          </div>
        </div>

      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-logo-scroll {
          animation: logoScroll 60s linear infinite;
        }

        @keyframes logoScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}