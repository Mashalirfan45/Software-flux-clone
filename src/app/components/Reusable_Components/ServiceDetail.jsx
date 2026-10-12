import Image from "next/image";
import ServiceSidebar from "./ServiceSidebar";
import BulletList from "./BulletList";
import ProcessSteps from "./ProcessSteps";
import ServiceCTA from "./ServiceCTA";

export default function ServiceDetail({ service, sidebarLinks }) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-[1290px] gap-8 px-6 lg:grid-cols-[400px_1fr]">
        <ServiceSidebar links={sidebarLinks} activeSlug={service.slug} />

        <article>
          {/* Bari image */}
          <div className="relative aspect-[3/2] overflow-hidden rounded-[40px]">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Heading + intro */}
          <h1 className="mt-10 text-3xl font-bold leading-tight text-[#1a1a6e] md:text-5xl">
            {service.heading}
          </h1>
          <div className="mt-6 space-y-4 text-[17px] leading-8 text-[#444]">
            {service.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Services offered */}
          {service.offering.items.length > 0 && (
            <section className="mt-12">
              <h2 className="text-3xl font-bold text-[#1a1a6e]">{service.offering.title}</h2>
              <p className="mt-4 text-[17px] leading-8 text-[#444]">{service.offering.text}</p>
              <div className="mt-6 space-y-6">
                {service.offering.items.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-xl font-bold text-[#1a1a6e]">{item.title}</h3>
                    <p className="mt-2 text-[17px] leading-8 text-[#444]">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <BulletList title={service.industries.title} items={service.industries.items} />
          <BulletList title={service.whatWeBuild.title} items={service.whatWeBuild.items} />
          <ProcessSteps title={service.process.title} steps={service.process.steps} />
          <BulletList title={service.whyChoose.title} items={service.whyChoose.items} />
          <ServiceCTA cta={service.cta} />
        </article>
      </div>
    </section>
  );
}