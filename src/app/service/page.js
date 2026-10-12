import PageHero from "../components/Reusable_Components/PageHero";
import ServiceIntro from "./ServiceIntro";
import ServiceFeatures from "./ServiceFeatures";

export default function ServicesListingPage() {
  return (
    <>
      <PageHero /* ...apne props... */ />
      <ServiceIntro />
      <ServiceFeatures />
      
    </>
  );
}