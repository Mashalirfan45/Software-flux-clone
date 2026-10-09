"use client";

export default function BetterSaaS() {
  return (
    <section className="relative bg-white overflow-hidden py-20">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-left-top bg-cover opacity-90"
        style={{
          backgroundImage: "url('/images/background01.png')",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative max-w-[1400px] mx-auto px-6">

        {/* TOP HEADING */}
        <div className="text-center mb-20">

          <h3 className="max-w-[1000px] mx-auto text-4xl md:text-5xl lg:text-4xl font-bold leading-tight text-[#252b7c]">
            Delivering SaaS Application
            <br />
            Development Solutions Across Industries
          </h3>

        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            <h3 className="text-4xl md:text-4xl font-bold leading-tight text-black mb-8">
              We’re Here to Build
              <br />
              Better SaaS Products.
            </h3>

            <p className="text-gray-500 text-lg md:text-xl leading-[1.9]">
              Software Flux Solution is a full-service saas app development
              company that turns complex ideas into scalable, revenue-generating
              SaaS products. Our saas software development company has worked
              with startups, SMEs, and enterprises across the globe – delivering
              custom saas development solutions that are fast, secure, and built
              to last.
            </p>

          </div>

          {/* RIGHT SIDE - SLIDE IN IMAGE */}
          <div className="flex justify-center md:justify-end">

            <div className="w-full max-w-[800px] overflow-hidden rounded-[18px] animate-slide-in">

              <img
                src="/images/pic.webp"
                alt="SaaS Application Development"
                className="w-full h-auto object-cover"
              />

            </div>

          </div>

        </div>

      </div>

      {/* Slide Animation */}
      <style jsx>{`
        .animate-slide-in {
          animation: slideInRight 1.2s ease-out forwards;
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(150px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

    </section>
  );
}