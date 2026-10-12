import Hero from "./home/Hero";
import Services from "./home/Services";
import WhyDifferent from "./home/WhyDifferent";
import TrustedCompanies from "./home/TrustedCompanies";
import BetterSaaS from "./components/Reusable_Components/BetterSaaS";
import Testimonials from "./home/Testimonials";
import OurProjects from "./home/OurProjects";
import WhyChooseUs from "./home/WhyChooseUs";
import OurBlogs from "./home/OurBlogs";
import LetsBuild from "./home/LetsBuild";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyDifferent />
      <TrustedCompanies />
      <BetterSaaS />
      <Testimonials />
      <OurProjects />
      <WhyChooseUs />
      <OurBlogs />
      <LetsBuild />
     
    </>
  );
}