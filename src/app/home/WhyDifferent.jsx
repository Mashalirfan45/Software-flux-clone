"use client";

export default function WhyDifferent() {
  return (
    <section className="bg-white -mt-10 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Background Box */}
        <div className="bg-gray-50 rounded-3xl overflow-hidden">

          <div className="grid grid-cols-1 md:grid-cols-2 items-center">

            {/* LEFT SIDE - IMAGES */}
            <div className="relative w-full min-h-[500px] flex items-center justify-start overflow-visible">

              {/* Yellow Background */}
              <img
                src="/images/bg_diff.png"
                alt=""
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[120%] max-w-none z-0"
              />

              {/* Main Image */}
              <img
                src="/images/why-different.png"
                alt="Why Software Flux Solutions is different"
                className="relative z-10 w-[78%] h-auto object-contain -ml-4 md:-ml-8"
              />

            </div>

            {/* RIGHT SIDE - CONTENT */}
            <div className="relative z-20 py-10 pl-0 pr-4 md:-ml-20 md:pr-6 lg:-ml-32 lg:pr-6">

              {/* Small Heading */}
              <p className="text-[#8b238e] text-lg font-semibold mb-4">
                Why We're Different
              </p>

              {/* Main Heading */}
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
                A SaaS Development Agency Built for Long-Term Product Success
              </h4>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                As a dedicated SaaS application development company, Software
                Flux Solution partners with businesses at every stage, from MVP
                to enterprise scale. Our SaaS software development company has
                delivered 300+ projects across industries, with a team that
                brings both technical depth and product thinking to every
                engagement.
              </p>

              {/* Feature 1 */}
              <div className="flex gap-5 mb-6">

                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#8b238e] flex items-center justify-center">
                  <img
                    src="/images/icon-1.webp"
                    alt="New Business Opportunities"
                    className="w-9 h-9"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#8b238e] mb-2">
                    New Business Opportunities
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    We identify the fastest path to market for your SaaS idea
                    and build a product that opens real revenue doors from day
                    one.
                  </p>
                </div>

              </div>

              {/* Feature 2 */}
              <div className="flex gap-5">

                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#8b238e] flex items-center justify-center">
                  <img
                    src="/images/icon-2.webp"
                    alt="Trusted and Reliable"
                    className="w-9 h-9"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#8b238e] mb-2">
                    Trusted and Reliable
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    As a SaaS based product development company trusted by 300+
                    clients globally, our delivery track record speaks louder
                    than promises.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}