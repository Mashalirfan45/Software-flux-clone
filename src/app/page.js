import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Hero from "./Home/Hero";
import Services from "./Home/Services";
import WhyDifferent from "./Home/WhyDifferent";
import TrustedCompanies from "./Home/TrustedCompanies";
import BetterSaaS from "./Home/BetterSaaS";
import Testimonials from "./Home/Testimonials";
import OurProjects from "./Home/OurProjects";
import WhyChooseUs from "./Home/WhyChooseUs";
import OurBlogs from "./Home/OurBlogs";
import LetsBuild from "./Home/LetsBuild";

export default function Home() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}