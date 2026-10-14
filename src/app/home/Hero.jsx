"use client";

import CustomButton from "../components/Reusable_Components/CustomButton";

const dots = Array.from({ length: 24 });

// Poore bottom par ek bada arc
const arc = {
  clipPath: "ellipse(75% 100% at 50% 0%)",
};

export default function Hero() {
  return (
    <section id="home" className="bg-white pb-16 text-white">

      {/* WRAPPER: cream aur purple dono isi ke andar */}
      <div className="relative">

        {/* CREAM ARC (purple jitna hi size, bas neeche khiska hua) */}
        <div
          style={arc}
          className="absolute inset-0 translate-x-[1.5%] translate-y-[45px] bg-[#ecd3d9]"
        />

        {/* PURPLE + BLACKISH GRADIENT ARC (cream ke upar) */}
        <div
          style={arc}
          className="relative z-10 bg-gradient-to-r from-[#520a5c] via-[#3f0d44] to-[#27121f] pb-60 md:pb-80"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-24 md:grid-cols-2">

            {/* LEFT SIDE */}
            <div>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
                Trusted SaaS Development Company
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-white">
                We are a leading SaaS application development company helping
                startups and enterprises turn ideas into powerful, scalable
                cloud products. From custom SaaS development to full-cycle
                SaaS platform development — we deliver it all.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4">
                <CustomButton>Get Started</CustomButton>

                <CustomButton
                  sx={{
                    border: "2px solid #ffffff",
                    "&:hover": { borderColor: "#c88bd0" },
                  }}
                >
                  See Our Work
                </CustomButton>
              </div>
            </div>

            {/* RIGHT SIDE: MOVING IMAGE */}
            <div>
              <img
                src="/images/home_page.png"
                alt="Software team"
                className="animate-hero-float w-full rounded-2xl"
              />
            </div>
          </div>

          {/* YELLOW DOTS (moving) */}
          <div className="animate-dots-float absolute bottom-[18%] right-[26%] hidden grid-cols-6 gap-[22px] md:grid">
            {dots.map((_, i) => (
              <span key={i} className="h-3 w-3 rounded-full bg-[#fbbf24]" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}