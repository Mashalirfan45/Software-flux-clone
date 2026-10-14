import PageHero from "../components/Reusable_Components/PageHero";
import ServiceIntro from "./ServiceIntro";
import ServiceFeatures from "./ServiceFeatures";

export default function ServicesListingPage() {
  return (
    <>
      <PageHero
  title="Our Services"
  subtitle="
Software Flux Solution is a full-service saas development agency delivering custom saas development, saas platform development, and saas application development services that help businesses launch faster and scale smarter."
  image="/images/a1.jpg"
/>
      <ServiceIntro />
      <ServiceFeatures />
      
    </>
  );
}