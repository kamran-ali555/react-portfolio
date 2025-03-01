import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection.jsx";
import FeatureSection from "./components/FeatureSection.jsx";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing.jsx";
import Testimonials from "./components/Testimonials.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <div className=" scroll-smooth max-w-7xl pt-8 mx-auto md:pt-14 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;