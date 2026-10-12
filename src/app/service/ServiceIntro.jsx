export default function ServiceIntro({
  title = "End-to-End SaaS Development Services for Startups & Enterprises",
  points = [
    "Custom SaaS solutions designed for business growth.",
    "Scalable platforms with enterprise-level security features.",
    "Expert consulting with intuitive UI/UX design.",
  ],
  image = "/images/image-service.png", // <-- apni dashboard image ka naam likhein
  imageAlt = "SaaS dashboard preview",
}) {
  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8">

        {/* LEFT: IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={image}
            alt={imageAlt}
            className="h-auto w-full max-w-[880px] object-contain"
          />
        </div>

        {/* RIGHT: TEXT */}
        <div>
          <h2 className="text-4xl font-extrabold leading-[1.1] text-black md:text-5xl lg:text-6xl">
            {title}
          </h2>

          <div className="mt-6 space-y-8 md:pl-14">
            {points.map((p) => (
              <p key={p} className="text-xl leading-snug text-gray-600 md:text-2xl">
                {p}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}