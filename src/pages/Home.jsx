// src/pages/Home.jsx
import { BackGroundSlider } from "../components/BackGroundSlider";
import { Services } from "../components/Services";
import { ServiceGrid } from "../components/ServiceGrid";
import HowItWorks from "../components/HowItWorks";
import BookingForm from "../components/BookingForm";
import CompanyStats from "../components/CompanyStats";
import AboutSection from "../components/AboutSection";
import PricingSection from "../components/PricingSection";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";
import FAQSection from "../components/FAQSection";
import BookARideSection from "../components/BookARideSection";
import Footer from "../components/Footer";

export const Home = ({ setActivePage }) => {
  return (
    <main className="relative w-full min-h-screen">
      <BackGroundSlider setActivePage={setActivePage} />
      <Services />
      <ServiceGrid setActivePage={setActivePage} />
      <HowItWorks setActivePage={setActivePage} />
      <div id="book-ride-form">
        <BookingForm setActivePage={setActivePage} />
      </div>
      <CompanyStats setActivePage={setActivePage} />
      <AboutSection setActivePage={setActivePage} />
      <PricingSection setActivePage={setActivePage} />
      <Testimonials setActivePage={setActivePage} />
      <BlogSection setActivePage={setActivePage} />
      <FAQSection setActivePage={setActivePage} />
      <BookARideSection setActivePage={setActivePage} />
      <Footer />
    </main>
  );
};

export default Home;
