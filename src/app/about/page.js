import PageHero from "../components/Reusable_Components/PageHero";
import BetterSaaS from "../components/Reusable_Components/BetterSaaS";
import AboutWhyChooseUs from "./AboutWhyChooseUs";   
import MeetOurTeam from "./MeetOurTeam";

export default function AboutPage() {
  return (
    <>
    <PageHero
        title="About Us"
        subtitle="A SaaS Development Agency That Puts Your Product First"
        image="/images/a1.jpg"
      />

      
      <BetterSaaS
        showTopHeading={false}
        imageLeft
        title="Software Flux Solution, Built for SaaS"
        text="Software Flux Solution is a dedicated saas app development company founded with one mission, to help businesses build SaaS products that work, scale, and succeed.

We are not a generalist agency. Our entire team, engineers, designers, and product strategists, focuses exclusively on SaaS. That specialization is what makes us different from every other saas software development company out there.

From early-stage startups needing their first MVP to established businesses looking for a reliable saas based product development company to extend their platform, we bring deep technical expertise and genuine product thinking to every engagement."
        image="/images/a2.webp"
        imageAlt="Our team"
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
      <AboutWhyChooseUs />
      <MeetOurTeam/>
    </>
  );
}