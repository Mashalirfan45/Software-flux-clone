import PageHero from "../components/Reusable_Components/PageHero";
import ContactSection from "./ContactSection";

export default function ContactPage() {
  return (
    <>
     <PageHero
  title="Contact Us"
  subtitle="Let’s Build Your SaaS Product Together"
  image="/images/a1.jpg"
/>

      <ContactSection />

      {/* GOOGLE MAP */}
      <section className="bg-white pb-20">
        <div className="mx-auto max-w-[1300px] px-6">
          <iframe
            title="Software Flux Solution location"
            src="https://maps.google.com/maps?width=1200&height=490&hl=en&q=Software%20flux%20solution&t=&z=17&ie=UTF8&iwloc=B&output=embed"
            className="h-[420px] w-full rounded-[30px] border-0"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}