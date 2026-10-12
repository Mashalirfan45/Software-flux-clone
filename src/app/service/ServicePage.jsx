import ServiceHero from "./ServiceHero";
import ServiceSidebar from "./ServiceSidebar";
import ServiceContent from "./ServiceContent";

export default function ServicePage({ service }) {
  return (
    <>
      <ServiceHero hero={service.hero} />
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[1290px] gap-8 px-6 lg:grid-cols-[400px_1fr]">
          <ServiceSidebar activeSlug={service.slug} />
          <ServiceContent main={service.main} />
        </div>
      </section>
    </>
  );
}