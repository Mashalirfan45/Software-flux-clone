export default function PageHero({
  title = "About Us",
  subtitle = "A SaaS Development Agency That Puts Your Product First",
  image = "/images/a1.jpg",
}) {
  return (
    // overflow-x-clip: ring side se nahi nikle, lekin image neeche section se bahar nikal sake
    <section className="relative z-10 overflow-x-clip bg-[#2d1252] text-white">

      {/* DOTTED PATTERN BACKGROUND (halka aur chhota) */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* ORANGE HALF RING (left edge par, text se door) */}
      <div className="absolute -left-[140px] top-[28%] hidden h-[270px] w-[270px] rounded-full border-[62px] border-[#ff9a1f] md:block" />

      <div className="relative mx-auto grid min-h-[460px] max-w-[1300px] gap-10 px-6 md:grid-cols-2">

        {/* LEFT: TEXT (neeche ki taraf) */}
        <div className="relative z-10 self-end pb-16 pt-24 md:pb-20">
          <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>

          <p className="mt-8 max-w-[560px] text-lg font-bold leading-relaxed md:text-xl">
            {subtitle}
          </p>
        </div>

        {/* RIGHT: IMAGE (neeche section se thodi bahar nikalti hai) */}
        <div className="relative z-20 flex justify-center pb-10 pt-10 md:-mb-20 md:justify-end md:pb-0 md:pt-20">

          {/* Shape ka clipPath (screen par kuch nahi dikhata) */}
          <svg width="0" height="0" className="absolute" aria-hidden="true">
            <defs>
              <clipPath id="pageHeroShape" clipPathUnits="objectBoundingBox">
                <path d="M0.01,0.62 C0.02,0.58 0.06,0.54 0.14,0.47 L0.44,0.14 C0.50,0.07 0.58,0 0.72,0 C0.90,0 1,0.18 1,0.40 C1,0.58 0.94,0.72 0.80,0.82 C0.66,0.92 0.55,1 0.42,1 C0.22,1 0,0.88 0,0.72 Z" />
              </clipPath>
            </defs>
          </svg>

          {/* IMAGE + RING: dono ek container mein */}
          <div className="relative w-full max-w-[620px]">

            {/* IMAGE (static, real jaisi shape) */}
            <div style={{ clipPath: "url(#pageHeroShape)" }}>
              <img
                src={image}
                alt={title}
                className="h-[460px] w-full object-cover"
              />
            </div>

            {/* YELLOW RING (image ke upar, static) */}
            <div className="absolute left-[8%] top-[16%] z-30 hidden h-[90px] w-[90px] rounded-full border-[24px] border-[#fbbf24] md:block" />

          </div>
        </div>

      </div>
    </section>
  );
}